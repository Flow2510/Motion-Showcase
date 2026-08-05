import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Cards from "./card"

export default function SectionSlideAnimation(){
    const stickyRef = useRef(null)
    const cards = [
        {
            id: 1,
            title: "01 - Digital Experience",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, odio eum, dolorem libero excepturi consectetur, rem pariatur aspernatur odit porro eligendi dignissimos velit cupiditate. Optio, a? Ipsum inventore impedit in!",
            date: "2023",
            color: "#8cdedc",
            textColor: "#151515"
        },
        {
            id: 2,
            title: "02 - Creative Direction",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, odio eum, dolorem libero excepturi consectetur, rem pariatur aspernatur odit porro eligendi dignissimos velit cupiditate. Optio, a? Ipsum inventore impedit in!",
            date: "2024",
            color: "#151515",
            textColor: "#8cdedc"
        },
        {
            id: 3,
            title: "03 - Brand Identity",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, odio eum, dolorem libero excepturi consectetur, rem pariatur aspernatur odit porro eligendi dignissimos velit cupiditate. Optio, a? Ipsum inventore impedit in!",
            date: "2025",
            color: "#8cdedc",
            textColor: "#151515"
        },
        {
            id: 4,
            title: "04 - Future Interface",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, odio eum, dolorem libero excepturi consectetur, rem pariatur aspernatur odit porro eligendi dignissimos velit cupiditate. Optio, a? Ipsum inventore impedit in!",
            date: "2026",
            color: "#151515",
            textColor: "#8cdedc"
        }
    ]
    
    const { scrollYProgress } = useScroll({
        target: stickyRef,
        offset: ["start start", "end 99%"]
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(cards.length - 1) * 100}%`])
    
    return(
        <div ref={stickyRef} className={`relative w-full`} style={{ height: `${cards.length * 100}dvh` }}>
            <div className="sticky top-0 h-dvh w-full overflow-hidden">
                <motion.div className="h-dvh w-full flex" style={{ x }}>
                    {cards.map((card, index) => (
                        <Cards 
                            key={card.id}
                            card={card}
                            scrollYProgress={scrollYProgress}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}