import { useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import article from '../../data/article.json'
import { motion } from "framer-motion"
import ColorStaggerReveal from "../colorstaggerreveal/colorstaggerreveal"

export default function ListScale() {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    })

    const scale = useTransform(scrollYProgress, [0, 0.5, 0.75], [1, 50, 500])
    const y = useTransform(scrollYProgress, [0.4, 1], ["100%", "0%"])

    return(
        <section className="h-[400dvh] relative" ref={sectionRef}>
                <div className="h-dvh w-full sticky top-0 flex items-center justify-center overflow-hidden text-[#fee9ce]">
                    <ul className="flex flex-col items-center gap-2">
                        {article.map((item, index) => (
                            index === article.length -1 ?
                                <motion.li className="text-4xl md:text-6xl lg:text-8xl font-bold" key={item.title + index} style={{ scale }}>
                                    {item.title}
                                </motion.li>
                            :
                            <li className="text-4xl font-bold md:text-6xl lg:text-8xl" key={item.title + index}>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                    <motion.div 
                        style={{ y }}
                        className="h-dvh w-full flex flex-col items-center justify-center text-neutral-950 absolute top-0 left-0 p-5 gap-10"
                    >
                        <div className="max-w-200 w-full flex flex-col gap-4 text-2xl md:text-4xl lg:text-5xl font-bold leading-[120%]">
                            <ColorStaggerReveal />
                        </div>
                    </motion.div>
                </div>                
        </section>
    )
}