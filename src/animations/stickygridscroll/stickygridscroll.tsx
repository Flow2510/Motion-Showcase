import gsap from 'gsap'
import photos from '../../data/photo.json'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function StickyGridScroll() {
    const sectionRef = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const photosReverse = [...photos].reverse()

    useGSAP(() => {
        const section = sectionRef.current
        const container = containerRef.current
        

        if (!section || !container) return

        console.log(container.offsetHeight)

        const leftCol = document.querySelector(".left-col")
        const rightCol = document.querySelector(".right-col")
        const leftCards = document.querySelectorAll(".left-image")
        const centerCards = document.querySelectorAll(".center-image")   
        const rightCards = document.querySelectorAll(".right-image")

        const colHeight = container.offsetHeight

        if (!colHeight) return

        const colTl = gsap.timeline({
            scrollTrigger:{
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        })

        gsap.set([...leftCards, ...rightCards], { y: colHeight })
        gsap.set(centerCards, { y: -colHeight })
        gsap.set(container, { autoAlpha: 1 })

        leftCards.forEach((card, index) => {
            colTl.to(card, {
                y:0,
                duration: 1,
                ease: "power1.inOut"
            }, index * 0.06)
        })

        rightCards.forEach((card, index) => {
            colTl.to(card, {
                y:0,
                duration: 1,
                ease: "power1.inOut"
            }, index * 0.06)
        })

        centerCards.forEach((card, index) => {
            const reverseIndex = centerCards.length - 1 - index

            colTl.to(card, {
                y: 0,
                duration: 1,
                ease: "power1.inOut"
            }, reverseIndex * 0.06)
        })

        colTl.to(container, {
            scale: 2.05
        }, "-=0.15")

        colTl.to(leftCol, {
            xPercent: -40
        }, "<")

        colTl.to(rightCol, {
            xPercent: 40
        }, "<")

        const splitStart = colTl.duration() - 0.4

        centerCards.forEach((card, index) => {
            colTl.to(card, {
                yPercent: index <= 1 ? -20 : 20,
                duration: 1,
                ease: "power1.inOut"
            }, splitStart)
        })

        colTl.to('.text-content', {
            scale: 1.15,
            duration: 1,
            ease: "power1.inOut"
        }, splitStart)
    }, { scope: sectionRef })

    return(
        <section className="relative h-[700dvh] w-full mb-25" ref={sectionRef}>
            <div className="sticky top-0 h-dvh w-full bg-neutral-50 text-neutral-950 flex items-center justify-center overflow-hidden">
                <div className="flex flex-col items-center relative font-medium gap-2 text-content p-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Sticky Grid Scroll</h2>
                    <p className="text-[1rem] text-center max-w-115">
                        A structured scroll-driven image grid where movement unfolds progressively within a sticky layout.
                    </p>
                </div>
                <div className="absolute top-1/2 left-1/2 translate-3d -translate-x-1/2 -translate-y-1/2 w-184 flex gap-8 opacity-0" ref={containerRef}>
                    <div className="flex flex-col gap-10 left-col">
                        {photos.slice(0, 4).map((item) => (
                            <div key={item.id} className='w-full aspect-square left-image'>
                                <img src={item.img} className='w-full aspect-square object-cover' alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-10 center-col">
                        {photosReverse.slice(1, 5).map((item) => (
                            <div key={item.id} className='w-full aspect-square center-image'>
                                <img src={item.img} className='w-full aspect-square object-cover' alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-10 right-col">
                        {photos.slice(0, 4).map((item) => (
                            <div key={item.id} className='w-full aspect-square right-image'>
                                <img src={item.img} className='w-full aspect-square object-cover' alt="" />
                            </div>
                        ))}
                    </div>
                </div>                
            </div>
        </section>
    )
}