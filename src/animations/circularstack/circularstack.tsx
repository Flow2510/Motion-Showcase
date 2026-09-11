import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function CircularStack(){
    const sectionRef = useRef<HTMLElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(() => {
    const cards = cardsRef.current

    if (!cards) return

    const positions = [
        {x: -900, y: 0},
        {x: 900, y: 0},
        {x: 0, y: -700},
        {x: 0, y: 700},
        {x: -700, y: -500},
        {x: 700, y: 500},
    ]

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "80% bottom",
            scrub: true,
        }
    })

    cards.forEach((card, index) => {
        const pos = positions[index % positions.length]

        const startRadius = Math.sqrt(pos.x * pos.x + pos.y * pos.y)
        const startAngle = Math.atan2(pos.y, pos.x)

        const randomRotation = (Math.random() - 0.5) * 20

        gsap.set(card, {
            x: pos.x,
            y: pos.y,
            rotation: randomRotation,
            zIndex: index,
        })

        // proxy object : une valeur "p" qu'on anime de 0 à 1,
        // et onUpdate ne fait QUE lire cette valeur interpolée par GSAP 
        const proxy = { p: 0 }

        tl.to(proxy, {
            p: 1,
            ease: "none",
            duration: 1,
            onUpdate: () => {
                const p = proxy.p

                const radius = startRadius * (1 - p)
                const angle = startAngle + p * Math.PI * 2

                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                const opacityProgress = Math.min(p * 3, 1)

                gsap.set(card, {
                    x,
                    y,
                    rotation: randomRotation * (1 - p),
                    opacity: opacityProgress,
                    zIndex: Math.floor(index + p * 100)
                })
            }}, 0)
        })
    }, { scope: sectionRef })

    const items = [
        "/images/beach.jpg",
        "/images/desert.jpg",
        "/images/forest.jpg",
        "/images/sunset.jpg",
        "/images/town.jpg",
        "/images/beach.jpg"
    ]

    return(
        <section className="w-full relative h-[500dvh]" ref={sectionRef}>
            <div className="sticky top-0 h-dvh w-full flex items-center justify-center overflow-hidden">
                {items.map((item, index) => (
                    <div 
                        ref={(el) => { cardsRef.current[index] = el }}
                        className='absolute opacity-0 h-95 w-85' 
                        key={item + index}
                    >
                        <img src={item} className='w-full h-full object-cover rounded-xl overflow-hidden' loading='lazy' alt=""/>
                    </div>
                ))}
            </div>
        </section>
    )
}