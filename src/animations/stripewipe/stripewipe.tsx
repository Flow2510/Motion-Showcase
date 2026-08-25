import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function StripeWipe(){
    const sectionRef = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const zoneRef = useRef<HTMLButtonElement>(null)
    const text = "Call to action with wide diagonal stripes across the entire hero section."
    
    const [stripeHeights] = useState(() => {
        const n = 30
        const unit = 100 / (n * (n + 1) / 2)
        return Array.from({ length: n }, (_, i) => unit * (i + 1))
    })

    useGSAP(() => {
        const stripes = gsap.utils.toArray<HTMLElement>(".stripe")
        const words = gsap.utils.toArray<HTMLElement>(".word")
        const zone = zoneRef.current

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

        const strength = 0.4;

        zone?.addEventListener("mousemove", (e) => {
            const rect = zone.getBoundingClientRect();

            const x = gsap.utils.mapRange(
                rect.left,
                rect.right,
                -rect.width / 2,
                rect.width / 2,
                e.clientX
            );

            const y = gsap.utils.mapRange(
                rect.top,
                rect.bottom,
                -rect.height / 2,
                rect.height / 2,
                e.clientY
            );

            gsap.to(".cta-button", {
                x: x * strength,
                y: y * strength,
                duration: 0.4,
                ease: "elastic.out(1, 0.4)",
                overwrite: true
            });
        });

        zone?.addEventListener("mouseleave", () => {
            gsap.to(".cta-button", {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.4)",
                overwrite: true
            });
        });
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
                    <p className="flex gap-x-3 lg:text-7xl md:text-5xl font-medium max-w-[75%] lg:max-w-250 text-3xl flex-wrap relative text-neutral-950 justify-center">
                        {text.split(" ").map((word, index) => (
                            <span key={word + index}>
                                <span className="word">
                                    {word}
                                </span>
                            </span>
                        ))}
                    </p>
                    <button type="button" className="w-50 h-50 rounded-full flex items-center justify-center cursor-pointer" ref={zoneRef}>
                        <div  className="text-neutral-50 bg-neutral-950 px-4 py-2 flex gap-3 items-center cta-button cursor-pointer">
                            <span className="text-xl">
                                Button
                            </span>
                            <span className="text-[15px]">
                                🡕
                            </span>
                        </div>
                    </button>
                </div>                
            </div>
        </section>
    )
}