import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import article from "../../data/article.json"

gsap.registerPlugin(ScrollTrigger)

export default function StickyCardStack() {    
    const stickyRef = useRef(null)

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".card")

        cards.forEach((card, i) => {
            gsap.set(
                    card,
                    { 
                        scale: 1 - i * 0.1,
                    }
                )
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: stickyRef.current,
                start: "top top",
                end: () => `+=${cards.length * 1500}`,
                scrub: 1,
                pin: true,
            },
        })

        cards.forEach((card, i) => {
            if (i === cards.length - 1) return
            const nextCards = cards.slice(i + 1)

            tl.addLabel(`step-${i}`)

            tl.to(card, {
                yPercent: -200,
                rotateZ: i % 2 === 0 ? -15 : 15,
            }, `step-${i}`)

            nextCards.forEach((nextCard, index) => {
                tl.to(nextCard, {
                    scale: 1 - index * 0.1,
                }, `step-${i}`)
            })

            tl.to(card, {
                opacity: 0,
            }, `step-${i}+=1`)
        })
    })

    return(
        <section className="w-full">
            <div className="relative w-full" ref={stickyRef}>
                <div className="h-dvh w-full flex items-center justify-center">
                    {article.map((card, i, array) => (
                        <article key={card.title} style={{ zIndex: array.length - i, background: card.color, color: card.textcolor }} className={`w-full h-full max-w-[70%] max-h-[70%] absolute p-5 rounded-2xl card lg:p-10`}>
                            <div className="flex flex-col w-full h-full gap-5 md:justify-between">
                                <div>
                                    <h2 className="text-3xl md:text-6xl lg:text-8xl">
                                        {card.title} 
                                    </h2>
                                </div>
                                <div className="flex flex-col flex-1 w-full h-full gap-5 md:grid md grid-cols-2 md:items-end max-h-[60%] md:gap-10">
                                    <div className="flex-1 w-full h-full">
                                        <img src={card.img} className="w-full h-full object-cover" alt="" loading="lazy"/>
                                    </div>
                                    <div>
                                        <p>
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}