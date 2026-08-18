import { motion, useTransform } from "framer-motion"
import { useScroll } from "motion/react"
import { useRef } from "react"

type LineProps = {
    readonly line: string;
}

export default function Line({ line } : LineProps) {
    const lineRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: lineRef,
        offset: ["start end", "end 75%"]
    })

    const gap = useTransform(scrollYProgress, [0, 1], ["5rem", "0.25rem"])
    const x = useTransform(scrollYProgress, [0, 1], [-200, 0])

    return(
        <motion.span ref={lineRef} className="flex whitespace-nowrap" style={{ gap, x }}>
            {line.split(" ").map((word, i) => (
                <span key={word + i} className="">
                    {word}
                </span>
            ))}
        </motion.span>
    )
}