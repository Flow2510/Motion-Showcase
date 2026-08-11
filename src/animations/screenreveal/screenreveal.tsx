import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useRef, useState} from "react"
import gsap from "gsap"
import LandingSection from "../../components/landingsection/landingsection"

export default function ScreenReveal(){
    const sectionRef = useRef<HTMLHeadingElement | null>(null)
    const numberRef = useRef<HTMLHeadingElement | null>(null)
    const progressRef = useRef<HTMLHeadingElement | null>(null)
    const containerRef = useRef<HTMLHeadingElement | null>(null)
    const [width, setWidth] = useState(0)
    const [number, setNumber] = useState(0)
    const splitNumber = number.toString().padStart(3, "0").split("")      
    const [isLoading, setIsLoading] = useState(true)    

    const startLoader = () => {
        const tl = gsap.timeline()
        const obj = { value: 0 }

        tl
            .to(obj, {
                value: 100,
                duration: 3,
                ease: "power4.inOut",
                onUpdate: () => {
                    setNumber(Math.round(obj.value))
                    setWidth(Math.round(obj.value))
                }
            })

            .to(numberRef.current, {
                scale: 2.5,
                duration: 3,
                ease: "power4.inOut"
            }, "<")
            
            .to(numberRef.current!.querySelectorAll(".number"), {
                xPercent: -100,
                stagger: 0.3,
                duration: 0.5,
                ease: "power3.in"
            })

            .to(progressRef.current, {
                width: 0,
                duration: 1
            }, "<")
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.3
            })
            .call(() => {
                setIsLoading(false)
            })
    }

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "start start"]
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest === 1) {
            startLoader()
        }
    })

    return(
        <motion.section className="relative section h-[300dvh] w-full" ref={sectionRef}>
            <div 
                className="sticky top-0 h-dvh w-full flex flex-col justify-end" 
            >
                {!isLoading &&
                    <motion.div 
                        key={'landing'}
                        initial={{ rotateZ: -20, scale: 0.5 }}
                        animate={{ rotateZ: 0 , scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute top-0 h-dvh w-full left-0 bg-neutral-50 flex justify-center items-center text-neutral-950"
                    >
                        <LandingSection />
                    </motion.div>
                }
                <AnimatePresence>
                    {isLoading && 
                        <motion.div 
                            key={"loader"}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity : 0, transition: { duration: 1 }}}
                            className="h-dvh w-full flex flex-col justify-end p-8 bg-neutral-950 relative" ref={containerRef}>
                            <div className="flex-col gap-4 flex relative">
                                <div className="">
                                    <h2 className="text-6xl origin-bottom-left font-extrabold md:text-8xl lg:text-9xl w-fit" key={'number-intro'} ref={numberRef}>
                                        {splitNumber.map((n, index) => (
                                            <span key={index} className="overflow-hidden inline-block">
                                                <span className="inline-block number">
                                                    {n}
                                                </span>
                                            </span>
                                        ))}
                                    </h2>
                                </div>
                                <div className="h-0.5 bg-neutral-50/25 overflow-hidden" ref={progressRef}>
                                    <motion.div 
                                        className="h-full w-0 bg-amber-50" style={{ width: `${width}%` }}></motion.div>
                                </div>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </motion.section>
    )
}