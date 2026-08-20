import { useRef } from "react"
import TitleRandomLine from "./titlerandomline"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import article from '../../data/article.json'

gsap.registerPlugin(ScrollTrigger)

export default function TitleRandomReveal(){
    const sectionRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        const lines = gsap.utils.toArray<HTMLElement>(".title-line")
        const card = gsap.utils.toArray<HTMLElement>(".card")

        gsap.set(".title-random-letter", {
            display: "none"
        })
        gsap.set(card, {
            y: "100vh"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "90% bottom",
                scrub: true,
            }
        })

        const allLetters: HTMLElement[] = []
        let maxDuration = 0

        lines.forEach((line) => {
            const letters = gsap.utils.shuffle(
                gsap.utils.toArray<HTMLElement>(".title-random-letter", line)
            )
            allLetters.push(...letters)

            const lineTl = gsap.timeline()
            letters.forEach((letter) => {
                lineTl.to(letter, {
                    display: "inline-block",
                }, ">")
            })

            tl.add(lineTl, 0)
            maxDuration = Math.max(maxDuration, lineTl.duration())
        })

        const outTl = gsap.timeline({ paused: true })
        const total = allLetters.length
        const radius = 150 // distance depuis le centre

        allLetters.forEach((letter, index) => {
            const angle = (index / total) * Math.PI * 2 // répartit les lettres sur 360°
            const y = (Math.cos(angle) * radius) * 1.8 
            const x = (Math.sin(angle) * radius) * 1.5

            outTl.to(letter, {
                x,
                y,
                rotateZ: () => gsap.utils.random(-90, 90),
                duration: 0.3,
                ease: "power2.out",
            }, 0.1)

            outTl.to(letter, {
                opacity: 0
            }, "=")
        })

        outTl.to(card, {
            y: "0vw",
            duration: 0.1,
        }, 0)

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "90% bottom",
            end: "bottom bottom",
            onEnter: () => {outTl.play()},
            onLeaveBack: () => outTl.reverse(),
        })

    }, { scope: sectionRef })

    return(
        <section className="h-[500dvh] relative" ref={sectionRef}>
            <div className="h-dvh w-full sticky top-0 flex items-center justify-center overflow-hidden">
                <div>
                    <h2 
                        className="text-5xl md:text-7xl lg:text-9xl md:gap-x-3 lg:gap-x-4 flex flex-col gap-x-2 max-w-200 items-center" 
                    >
                        <TitleRandomLine 
                            line={"Title Random"}
                        />
                        <TitleRandomLine 
                            line={"Reveal"}
                        />
                    </h2>
                </div>
                <div className="absolute">
                    <div className="w-[20vw] h-[30vw] min-w-50 min-h-80 card rounded-2xl p-2 text-center" style={{ background: article[1].color }}>
                        <div className="w-full h-full rounded-2xl overflow-hidden">
                            <img src={article[1].img} className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}