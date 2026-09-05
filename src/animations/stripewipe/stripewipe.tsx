import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function StripeWipe(){
    const sectionRef = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const text = "Call to action with wide diagonal stripes across the entire hero section."
    
    const [stripeHeights] = useState(() => {
        const n = 30
        const unit = 100 / (n * (n + 1) / 2)
        return Array.from({ length: n }, (_, i) => unit * (i + 1))
    })

    useGSAP(() => {
        const stripes = gsap.utils.toArray<HTMLElement>(".stripe")
        const words = gsap.utils.toArray<HTMLElement>(".word")

        gsap.set(words, {
            opacity: 0
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "75% bottom",
                end: 'bottom top',
                scrub: true
            }
        })

        stripes.forEach((stripe, index) => {
            const reversedIndex = stripes.length - 1 - index
            tl.to(stripe, {
                yPercent: 105
            }, reversedIndex / 20)
        })

        tl.to(containerRef.current, {
            y: "-100vh",
            duration: tl.duration()
        }, 0)

        const textTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "start start",
                end: '60% bottom',
                scrub: true
            }
        })

        words.forEach((word) => {
            textTl.to(word, {
                opacity: 1
            })
        })
    })

    return(
        <section className="h-[500dvh] relative" ref={sectionRef}>
            <div className="sticky top-0 w-full h-dvh flex flex-col items-center justify-center">
                <div className="w-full h-full absolute top-0 left-0">
                    {stripeHeights.map((height, index) => (
                        <div key={index} style={{ height: `${height}dvh`, overflow: "hidden" }}>
                            <div
                                style={{ height: `${height}dvh`, width: '100%' }}
                                className="stripe bg-neutral-50"            
                            >

                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-5 items-center" ref={containerRef}>
                    <p className="flex gap-x-3 lg:text-7xl md:text-5xl font-semibold max-w-[75%] lg:max-w-250 text-3xl flex-wrap relative text-neutral-950 justify-center">
                        {text.split(" ").map((word, index) => (
                            <span key={word + index}>
                                <span className="word">
                                    {word}
                                </span>
                            </span>
                        ))}
                    </p>
                </div>                
            </div>
        </section>
    )
}