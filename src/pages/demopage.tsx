import { motion } from "motion/react";
import { useParams } from "react-router-dom";
import { animations } from "../animations";


export default function DemoPage() {
    const { slug } = useParams();
    const animationIndex = animations.findIndex(a => a.name === slug)
    const animation = animations[animationIndex]

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
            <Component />
         </motion.main>
    )
}