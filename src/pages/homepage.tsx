import { motion } from "motion/react";
import Hero from "../components/hero/hero";
import Latest from "../components/latest/latest";
import AboutSection from "../components/aboutsection/aboutsection";
import Cta from "../components/cta/cta";

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
            <Cta />
            <Latest />
            <AboutSection />
        </motion.main>
    )
}