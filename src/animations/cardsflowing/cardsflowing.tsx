import gsap from 'gsap'
import article from '../../data/article.json'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function CardsFlowing(){
    const items = [...article, ...article]
    const sectionRef = useRef(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const container = containerRef.current
        const cards = gsap.utils.toArray<HTMLElement>(".image-flowing-card")
        if (!container) return

        const containerWidth = container.scrollWidth
            const viewportWidth = window.innerWidth

            gsap.set(container, {
                x: -containerWidth,
                ease: "none",
            })

            gsap.set(cards, {
                yPercent: 100,
                rotateX: -70
            })

            const containerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            })

            const cardsTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            })

            containerTl.to(container, {
                x: viewportWidth,
                ease: "none",
            })

            cards.forEach((card, index) => {
                const reversedIndex = cards.length - 1 - index
                cardsTl.to(card, {
                    yPercent: -100,
                    rotateX: 70
                }, reversedIndex * 0.1)
            })
    }, { scope: sectionRef })

    return(
        <section className="h-[500dvh]" ref={sectionRef}>
            <div className="sticky top-0 h-dvh w-full overflow-hidden perspective-[800px]">
                <div className="absolute top-0 left-0 h-dvh w-full flex items-center gap-5 transform-3d" ref={containerRef}>
                    {items.map((item, index) => (
                        <div className='h-75 w-55 shrink-0 image-flowing-card rounded-2xl p-1 transform-3d flex flex-col overflow-hidden relative items-center justify-center' key={item.id + index} style={{ background: item.color }}>
                            <div className='w-full h-full'>
                                <img src={item.img} className='w-full h-full object-cover rounded-2xl' alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}