import { motion } from "motion/react"

export default function LandingSection(){
    const title = "The Foundry Boxing & Fight Club"
    const words = title.split(' ')

    return(
        <div className="h-dvh w-full relative flex flex-col items-center justify-center">
            <div className="top-0 left-0 w-full h-dvh absolute">
                <video src="/template-transition.mp4" className="h-dvh w-full object-cover" autoPlay muted loop></video>
            </div>
            <div className="relative">
                <h2 className="flex flex-wrap gap-x-5 text-4xl text-neutral-50 max-w-100 md:max-w-160 md:text-6xl lg:max-w-200 lg:text-8xl justify-center uppercase leading-[100%] font-bold">
                    {words.map((word, index) => (
                        <span key={index + word} className="inline-block overflow-hidden">
                            <motion.span
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.4 + (index / 15), duration: 0.4}}
                                className="inline-block"
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </h2>
            </div>
        </div>
    )
}