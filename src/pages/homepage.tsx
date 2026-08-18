import { motion } from "motion/react";
import Hero from "../components/hero/hero";

type Props = {
    readonly isDesktop: boolean;
}

export default function HomePage({ isDesktop } : Props) {
    return(
        <motion.main 
            key={'homepage'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3 }}
            className=""
        >
            <Hero 
                isDesktop={isDesktop}
            />
            <section className="h-dvh w-full bg-neutral-950"></section>
        </motion.main>
    )
}