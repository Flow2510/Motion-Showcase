import { NavLink, useParams } from "react-router-dom"
import { animations } from "../animations";
import EffectCard from "../components/effectcard/effectcard";
import { motion } from "motion/react";
import TextRevealHover from "../components/textrevealhover/textrevealhover";

export default function EffectPage() {
    const { slug } = useParams();
    const animationIndex = animations.findIndex(a => a.name === slug)
    const animation = animations[animationIndex]

    if (!animation) {
        return <h2>404</h2>
    }

    return(
        <motion.main 
            key={'effectpage'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3 }}
            className="bg-neutral-950 w-full">
            <main className=" text-neutral-50 min-h-dvh pt-20 w-full">
                <div className="flex flex-col gap-10">
                    <section className="p-5 max-w-150 m-auto">
                        <EffectCard 
                            animation={animation}
                        />
                    </section>
                    <section className="flex w-full items-center justify-center p-5 h-80 md:h-100 lg:h-120 border-t border-[#999999]">
                        <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                            <h2 className="flex flex-col items-center text-4xl text-[#999999] md:text-5xl lg:text-6xl xl:text-7xl md:gap-x-8 lg:gap-x-10 xl:gap-x-12">
                                <span className="flex gap-2">
                                    <span>Wanna</span>
                                    <span className="text-neutral-50">see</span>
                                </span>
                                <span className="flex gap-2">
                                    <span>another</span>
                                    <span>animation</span>
                                </span>
                            </h2>
                            <NavLink to={'/collection'} className='bg-neutral-50 text-neutral-950 rounded-full w-fit px-6 py-4 uppercase text-xs md:text-sm font-medium flex items-center justify-center group'>
                                <TextRevealHover 
                                    text={"Back to collection"}
                                />
                            </NavLink>
                        </div>
                    </section>
                </div>
            </main>
        </motion.main>
    )
}