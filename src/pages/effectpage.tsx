import { useParams } from "react-router-dom"
import { animations } from "../animations";
import EffectCard from "../components/effectcard/effectcard";
import { motion } from "motion/react";

export default function EffectPage() {
    const { slug } = useParams();
    const animation = animations.find(a => a.name === slug)

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
            className="bg-neutral-950 w-full">
            <main className=" text-neutral-50 min-h-dvh py-30 w-full">
                <div className="">
                    <section className="p-5 min-h-dvh max-w-150 m-auto">
                        <EffectCard 
                            animation={animation}
                        />
                        <div>
                            <p className="py-10 text-4xl flex flex-col items-center gap-2">
                                <span className="inline-block tracking-[8px] font-[Bricolage_Grotesque] font-extralight">
                                    Scroll
                                </span>
                            </p>
                        </div>
                    </section>
                    <section className="flex flex-col pb-50">
                        <Component />
                    </section>
                </div>
            </main>
        </motion.main>
    )
}