import { motion } from "motion/react"

type Props = {
    readonly line: HTMLElement;
}

export default function Line({ line } : Props) {
    const words = line.textContent.split(" ")

    return(
        <span className="overflow-hidden flex gap-1.5">
            {words.map((word, index) => (
                <span key={word + index} className="">                        
                    <motion.span 
                        initial={{ y: "100%" }}
                        whileInView={{ y: "0%" }}
                        transition={{ delay: 0 + (index / 50) }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    )
}