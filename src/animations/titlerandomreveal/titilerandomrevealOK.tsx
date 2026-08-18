import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function TitleRandomReveal(){
    const sectionRef = useRef<HTMLElement>(null)
    const title = "Title Random Reveal"

    useGSAP(() => {
        const letters = gsap.utils.toArray<HTMLElement>(".title-letter")
        const shuffled = gsap.utils.shuffle([...letters])

        gsap.set(letters, {
            display: "none"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
        })

        shuffled.forEach((letter) => {
            tl.to(
                letter,
                {
                    display: "inline-block",
                    duration: 0.15,
                },
                ">"
            )
        })
        shuffled.forEach((letter, index) => {
            tl.to(
                letter,
                {
                    x: gsap.utils.random(20, 50), y: index % 2 === 0 ? gsap.utils.random(200, 300): gsap.utils.random(-200, -300),
                    duration: 0.05,
                },
                "<"
            )
            tl.to(
                letter,
                {
                    opacity: 0,
                    duration: 0.2
                },
                "<"
            )
        })

        return () => {
            tl.scrollTrigger?.kill()
        }
    }, { scope: sectionRef})

    return(
        <section className="h-[500dvh] relative" ref={sectionRef}>
            <div className="h-dvh w-full sticky top-0 flex items-center justify-center">
                <div>
                    <h2 
                        className="text-5xl md:text-7xl lg:text-9xl md:gap-x-3 lg:gap-x-4 flex flex-wrap justify-center gap-x-2 max-w-200" 
                    >
                        {title.split(" ").map((word, wordIndex) => (
                            <span key={word + wordIndex}>
                                {word.split("").map((letter, letterIndex) => (
                                    <span
                                        key={letter + letterIndex}
                                        className="title-letter inline-block"
                                    >
                                        {letter}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h2>
                </div>
            </div>
        </section>
    )
}