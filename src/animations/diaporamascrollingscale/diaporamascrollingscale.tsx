import { useRef, useState } from 'react'
import article from '../../data/article.json'
import { useScroll, useTransform } from 'motion/react'
import { motion, useMotionValueEvent } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function DiaporamaScrollingScale(){
    const [imageIndex, setImageIndex] = useState(0)
    const title = 'Diaporama Scrolling Scale'
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    })
    const width = useTransform(scrollYProgress, [0, 0.5], ["100%", "50%"])
    const height = useTransform(scrollYProgress, [0, 0.5], ["100%", "50%"])
    const lastStep = useRef(0)

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const step = Math.min(
            Math.floor((latest / 0.5) * article.length),
            article.length - 1
        )

        if (step !== lastStep.current) {
            setImageIndex(step)
            lastStep.current = step
        }
    })

    useGSAP(() => {
        const letters = gsap.utils.toArray<HTMLElement>('.letter-diaporama')
        gsap.set(letters, {
            y: "100%"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "50% top",
                end: "bottom bottom",
                scrub: true
            }
        })

        letters.forEach((letter) => {
            tl.to(
                letter,
                {
                    y: "0%",
                    duration: 1,
                },
                ">-0.5"
            )
        })
    })

    return(
        <section className="h-[600dvh] w-full relative" ref={sectionRef}>
            <div className="sticky top-0 h-dvh w-full flex items-center justify-center flex-col">
                <motion.div className='w-full h-full relative' style={{ width, height }}>
                    <img 
                        src={article[imageIndex].img} 
                        className='w-full h-full object-cover' 
                        alt="" 
                    />
                    <div className='absolute p-5 flex flex-col left-[50%] translate-x-[-50%] w-full items-center'>
                        <h2 className='text-3xl md:text-5xl lg:7xl font-semibold flex gap-x-4 max-w-200 flex-wrap justify-center'>
                            {title.split(" ").map((word, wordIndex) => (
                                <span key={wordIndex} className="inline-flex">
                                    {word.split("").map((letter, letterIndex) => (
                                        <span key={letterIndex} className="inline-block overflow-hidden">
                                            <motion.span className="letter-diaporama inline-block">
                                                {letter}
                                            </motion.span>
                                        </span>
                                    ))}
                                </span>
                            ))}
                        </h2>
                    </div>
                </motion.div>                
            </div>
        </section>
    )
}