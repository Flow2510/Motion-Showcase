import { motion } from "motion/react";
import { useParams } from "react-router-dom";
import { animations } from "../animations";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import NextCta from "../components/nextcta/nextcta";

gsap.registerPlugin(ScrollTrigger)

export default function DemoPage() {
    const { slug } = useParams();
    const animationIndex = animations.findIndex(a => a.name === slug)
    const animation = animations[animationIndex]
    const titleLine1 = "Scroll to view"
    const titleLine2 = "the animation"
    const lettersLine1 = titleLine1.split ("")
    const lettersLine2 = titleLine2.split ("")
    const sectionRef = useRef<HTMLElement>(null)
    const textRef = useRef<HTMLParagraphElement>(null)

    useGSAP(() => {
        const initialLetter = gsap.utils.toArray<HTMLSpanElement>('.initial-letter')
        const revealLetter = gsap.utils.toArray<HTMLSpanElement>('.reveal-letter')
        const text = textRef.current

        
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: text,
                start: "bottom bottom"
            }
        })

        initialLetter.forEach((letter, index) => {
            const randomDelay = gsap.utils.random(0.1, 2)

            tl.to(letter, {
                yPercent: -100,
                duration: 0.3
            }, 0 + randomDelay)

            tl.to(revealLetter[index], {
                yPercent: -100,
                duration: 0.3
            }, randomDelay)
        })
    }, { scope: sectionRef })

    if (!animation) {
        return <h2>404</h2>
    }

    const Component = animation.component

    return(
        <motion.main 
            key={'effectpage'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3 }}
            className="bg-neutral-950 w-full text-neutral-50"
        >
            <section className="h-dvh w-full flex justify-center items-center" ref={sectionRef}>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-center gap-5">
                        <h2 className="flex gap-2 items-center">
                            <span className="h-2 w-2 bg-lime-300 rounded-full"></span>
                            <span>
                                Scroll to explore
                            </span>
                        </h2>
                        <h3 className="text-5xl tracking-tight font-semibold md:text-6xl lg:text-7xl xl:text-9xl flex flex-col leading-[100%] -mb-2" ref={textRef}>
                            <span>
                                {lettersLine1.map((letter, index) => (
                                    <span className="inline-block overflow-hidden relative" key={letter + index}>
                                        <span 
                                            className="inline-block initial-letter"
                                        >
                                            {letter === " " ? "\u00A0" : letter}
                                        </span>
                                        <span className="absolute top-0 left-0 translate-y-full reveal-letter">
                                            {letter === " " ? "\u00A0" : letter}
                                        </span>
                                    </span>
                                ))}
                            </span>
                            <span className="text-neutral-400">
                                {lettersLine2.map((letter, index) => (
                                    <span className="inline-block overflow-hidden relative" key={letter + index}>
                                        <span 
                                            className="inline-block initial-letter"
                                        >
                                            {letter === " " ? "\u00A0" : letter}
                                        </span>
                                        <span className="absolute top-0 left-0 translate-y-full reveal-letter">
                                            {letter === " " ? "\u00A0" : letter}
                                        </span>
                                    </span>
                                ))}
                            </span>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center gap-2.5">
                        <div className="bg-lime-300 rounded-full h-14 w-8 p-0.5">
                            <div className="w-full h-full bg-neutral-950 rounded-full relative">
                                <div className="h-1.5 w-1.5 bg-lime-300 rounded-full absolute left-1/2 top-3 -translate-x-1/2">

                                </div>
                            </div>                                
                        </div>
                        <div>
                            <div className="flex flex-col items-center gap-2">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <div className="bg-lime-500 w-1.5 h-1.5 rounded-full" key={index} style={{ scale: 1 + (index * 0.1), opacity: 0.5 + (index * 0.1),}}>
                                        
                                    </div>
                                ))}                                
                            </div>
                            <div className="w-10 h-10">
                                <img src="/icons/chevron-down.png" className="w-full h-full -translate-y-1" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Component />
            <NextCta />
         </motion.main>
    )
}