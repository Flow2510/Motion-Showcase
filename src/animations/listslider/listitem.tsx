import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

type Props = {
    readonly item: {
        id: number;
        title: string;
        img: string;
        color: string;
        textcolor: string;
        description: string;
    }
}

export default function ListItem({ item } : Props){
    const [isHovered, setIsHovered] = useState(false)
    const [isDesktop, ] = useState(window.innerWidth > 1024)
    const titleSplit = item.title.split(' ')

    return(
        isDesktop?
            <div 
                className="w-full flex justify-center items-center cursor-default" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative">
                    <h2 className="lg:text-5xl xl:text-6xl 2xl:text-8xl uppercase font-semibold flex gap-4 2xl:gap-5" style={{ color: isHovered? "white" : "#999999"}}>
                        {titleSplit.map((word, index) => (
                            <span                        
                                key={word + index} 
                                className="inline-block overflow-hidden"
                            >
                                <motion.span 
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: "0%" }}
                                    transition={{ delay: 0.1 * index, duration: 0.2 }}
                                    viewport={{ margin: "0px 0px -100px 0px", once: true}}
                                    
                                    className="inline-block"
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </h2>
                    <AnimatePresence>
                        {isHovered &&
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{ duration: 0.3 }}
                                key={`image-item-${item.id}`}
                                className="absolute w-[20vw] aspect-video left-0 top-[50%] translate-x-[-125%] z-10 translate-y-[-50%] rounded-xl overflow-hidden image-container"
                            >
                                <img src={item.img} alt="" className="w-full h-full object-cover"/>
                            </motion.div>
                        }
                        {isHovered &&
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ margin: "0px 0px -100px 0px", once: true}}
                                className="absolute right-0 top-[50%] translate-x-[200%] z-10 translate-y-[-50%]"
                            >
                                <p className="flex gap-2 text-[#999999] uppercase font-medium">
                                    <span>
                                        #00{item.id}
                                    </span>
                                </p>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            </div>
        :
        <div 
            className="w-full flex items-center justify-center cursor-default" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <p className="text-4xl uppercase text-center font-semibold flex gap-2.5">
                {titleSplit.map((word, index) => (
                    <span                        
                        key={word + index} 
                        className="inline-block overflow-hidden"
                    >
                        <motion.span 
                            initial={{ y: "100%" }}
                            whileInView={{ y: "0%" }}
                            transition={{ delay: 0.1 * index, duration: 0.2 }}
                            viewport={{ margin: "0px 0px -100px 0px", once: true }}
                            
                            className="inline-block"
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </p>
        </div>
    )
}