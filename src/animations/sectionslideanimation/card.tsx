import { motion, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"

export default function Cards({ card, scrollYProgress, index }) {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    const cardRef = useRef(null)
    const cardLength = 4
    const progress = 1 / cardLength
    const start = index * progress
    const end = (index + 1) * progress
    const x = useTransform(scrollYProgress, [start, end], [0, width])

    return(
        <div className="relative h-dvh w-full shrink-0 grid grid-cols-2 grid-rows-2" style={{ background: card.color, color: card.textColor}} ref={cardRef}>
            <div className="col-1 row-1 p-5">
                {index === 0 &&
                    <h2 className="text-3xl font-semibold">Exploring Visual Stories</h2>
                }
            </div>
            <div className="col-2 row-1 p-5 flex flex-col gap-4">
                <h3 className="text-2xl font-medium">{card.title}</h3>
                <p className="max-w-100">
                    {card.text}
                </p>
            </div>
            <div className="col-start-1 relative col-span-2">
                <div className={`w-full h-px relative flex justify-center items-center`} style={{ background: `${card.textColor}50`}}>
                    <div className="absolute w-2 h-2" style={{ background: card.textColor}}>

                    </div>
                </div>
            </div>
            <div className="absolute bottom-5 left-5">
                <motion.p 
                    className="date text-8xl origin-center"
                    style={{ x }}
                >
                    {card.date}
                </motion.p>
            </div>
        </div>
    )
}