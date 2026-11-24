import { useRef, useEffect } from 'react'
import data from '../../data/photo.json'
import gsap from 'gsap'

export default function InfiniteCarousel() {
    const sectionRef = useRef<HTMLElement>(null)
    const carouselRef = useRef<HTMLDivElement>(null)
    const cardsContainerRef = useRef<HTMLDivElement>(null)
    const itemsRef = useRef<{ el: HTMLElement; x: number }[]>([])
    const positionsRef = useRef<Float32Array>(new Float32Array(0))
    const trackRef = useRef(0)
    const scrollXRef = useRef(0)
    const velocityRef = useRef(0)
    const lastTimeRef = useRef(0)
    const rafIdRef = useRef<number | null>(null)
    const isDraggingRef = useRef(false)
    const lastPointerXRef = useRef(0)
    const lastPointerTimeRef = useRef(0)
    const itemsList = [...data, ...data]

    useEffect(() => {
        const container = cardsContainerRef.current

        if (!container) return

        const cards = container.querySelectorAll<HTMLElement>('.carousel-card')

        const GAP = 28
        const MAX_ROTATION = 28
        const MAX_DEPTH = 140
        const MIN_SCALE = 0.92
        const SCALE_RANGE = 0.1

        let VW_HALF = window.innerWidth * 0.5

        const updateDimensions = () => {
            const firstCard = cards[0]

            if (!firstCard) return

            const CARD_W = firstCard.getBoundingClientRect().width
            const STEP = CARD_W + GAP
            const TRACK = STEP * cards.length

            itemsRef.current = Array.from(cards).map((card, index) => ({
                el: card,
                x: index * STEP,
            }))

            trackRef.current = TRACK
            positionsRef.current = new Float32Array(cards.length)
            VW_HALF = window.innerWidth * 0.5

            updateCarouselTransforms();
        }

        const handleWheel = (event: WheelEvent) => {
            event.preventDefault()
            velocityRef.current += event.deltaY * 0.6
        }

        carouselRef.current?.addEventListener('wheel', handleWheel, {
            passive: false,
        })

        const handlePointerDown = (event: PointerEvent) => {
            isDraggingRef.current = true
            lastPointerXRef.current = event.clientX
            lastPointerTimeRef.current = performance.now()
            carouselRef.current?.setPointerCapture(event.pointerId)
        }

        const handlePointerMove = (event: PointerEvent) => {
            if (!isDraggingRef.current) return

            const now = performance.now()
            const deltaX = event.clientX - lastPointerXRef.current
            const deltaTime = (now - lastPointerTimeRef.current) / 1000

            scrollXRef.current -= deltaX

            if (deltaTime > 0) {
                velocityRef.current = -(deltaX / deltaTime)
            }

            lastPointerXRef.current = event.clientX
            lastPointerTimeRef.current = now

            updateCarouselTransforms()
        }

        const handlePointerUp = () => {
            isDraggingRef.current = false
        }

        const updateCarouselTransforms = () => {
            const TRACK = trackRef.current
            if (!TRACK) return

            const half = TRACK / 2

            let closestDist = Infinity

            // 1. Calcul des positions
            itemsRef.current.forEach((item, index) => {
                let pos = item.x - scrollXRef.current

                if (pos < -half) pos += TRACK
                if (pos > half) pos -= TRACK

                positionsRef.current[index] = pos

                const dist = Math.abs(pos)

                if (dist < closestDist) {
                    closestDist = dist
                }
            })

            // 3. Transformations 3D
            itemsRef.current.forEach((item, index) => {
                const pos = positionsRef.current[index]

                const norm = Math.max(-1, Math.min(1, pos / VW_HALF))

                const absNorm = Math.abs(norm)
                const invNorm = 1 - absNorm

                const ry = -norm * MAX_ROTATION
                const tz = invNorm * MAX_DEPTH
                const scale = MIN_SCALE + invNorm * SCALE_RANGE

                gsap.set(item.el, {
                    x: pos,
                    yPercent: -50,
                    xPercent: -50,
                    z: tz,
                    rotationY: ry,
                    scale,
                    zIndex: 1000 + Math.round(tz),
                })
            })
        }

        const tick = (time: number) => {
            const dt = lastTimeRef.current ? (time - lastTimeRef.current) / 1000 : 0
            
            lastTimeRef.current = time

            const TRACK = trackRef.current

            if (TRACK > 0) {
                scrollXRef.current =
                    ((scrollXRef.current + velocityRef.current * dt) % TRACK + TRACK) % TRACK

                const decay = Math.pow(0.9, dt * 60)

                velocityRef.current *= decay

                if (Math.abs(velocityRef.current) < 0.02) {
                    velocityRef.current = 0
                }

                updateCarouselTransforms()
            }

            rafIdRef.current = requestAnimationFrame(tick)
        }

        updateDimensions()

        rafIdRef.current = requestAnimationFrame(tick)
        const viewport = carouselRef.current

        viewport?.addEventListener('pointerdown', handlePointerDown)
        viewport?.addEventListener('pointermove', handlePointerMove)
        viewport?.addEventListener('pointerup', handlePointerUp)
        viewport?.addEventListener('pointercancel', handlePointerUp)

        window.addEventListener('resize', updateDimensions)

        return () => {
            window.removeEventListener('resize', updateDimensions)
            carouselRef.current?.removeEventListener('wheel', handleWheel)
            viewport?.removeEventListener('pointerdown', handlePointerDown)
            viewport?.removeEventListener('pointermove', handlePointerMove)
            viewport?.removeEventListener('pointerup', handlePointerUp)
            viewport?.removeEventListener('pointercancel', handlePointerUp)

            if (rafIdRef.current !== null) {
                cancelAnimationFrame(rafIdRef.current)
            }
        }
    }, [])

    return (
        <section
            className="carousel relative h-dvh w-full overflow-hidden"
            ref={sectionRef}
        >
            <div
                className="carousel-viewport absolute inset-0 h-full w-full overflow-hidden select-none cursor-grab active:cursor-grabbing perspective-[1800px]"
                ref={carouselRef}
            >
                <div
                    className="absolute inset-0 transform-3d"
                    ref={cardsContainerRef}
                >
                    {itemsList.map((item, index) => (
                        <div
                            key={`${item.id}${index}`}
                            className="carousel-card absolute left-1/2 top-1/2 w-[min(26vw,360px)] aspect-4/5 bg-neutral-400"
                        >
                            <img src={item.img} className='w-full h-full object-cover pointer-events-none' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}