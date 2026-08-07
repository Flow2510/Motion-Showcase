import { motion } from "motion/react"

export default function Word({ word }){
    return(
        <span className="overflow-hidden inline-block">
            <motion.span
                exit={{ x: "-100%" }}
                className="inline-block">
                {word}
            </motion.span>
        </span>
    )
}