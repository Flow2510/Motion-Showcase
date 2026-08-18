import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

type Props = {
    readonly item: {
        id: number;
        title: string;
        img: string;
        color: string;
        textcolor: string;
        description: string;
    }
    readonly index: number;
    readonly length: number;
}

export default function ScrollingSection({item, index, length} : Props) {
    const cardRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["end end", "end start"]
    })

    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15])
    const rotateZ = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? 2: -2])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6])
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "110%"])
    const opacity = useTransform(scrollYProgress, [0.99, 1], [1, 0])
    const filter = useTransform(scrollYProgress, [0, 1], ["brightness(1)", "brightness(0.5)"])

    return(
        <section 
            ref={cardRef}
            className={`w-full h-[200dvh] bg-neutral-950 relative perspective-[1500px]`}
            style={{ color: item.textcolor}} 
        >
            <motion.div
                className="sticky top-0 w-full h-dvh p-5 pt-20 transform-3d flex flex-col gap-10 md:justify-between md:p-10 md:pt-15"
                style={{ background: item.color, zIndex: index,
                    ...(index !== (length - 1) && {
                        transformOrigin: "center top",
                        rotateX : rotateX,
                        rotateZ: rotateZ,
                        scale,  
                        filter,
                        y,                     
                        opacity,
                    }), 
                }}
            >
                <div>
                    <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold">
                        {item.title}
                    </h2>
                </div>
                <div className="w-full flex-1 h-full flex flex-col gap-5 md:grid md:grid-cols-2 md:max-h-[60%] items-end md:gap-10">
                    <div className="w-full h-full flex-1 flex flex-col md:flex-row md:col-2 md:row-1 gap-5 md:gap-10">
                        <div>
                            <p className="text-4xl md:text-6xl lg:text-8xl font-semibold">({String(index + 1).padStart(2, "0")})</p>
                        </div>
                        <div className="flex flex-1 w-full h-full md:col-1 md:row-1">
                            <img alt="" src={item.img} className="bg-neutral-600 w-full h-full object-cover aspect-video" 
                                onLoad={(e) => {
                                    console.log(
                                        item.title,
                                        e.currentTarget.naturalWidth,
                                        e.currentTarget.naturalHeight
                                    )
                                }}
                                onError={() => {
                                    console.error("IMAGE FAILED:", item.img)
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <p className="md:max-w-[70%] leading-[110%] font-medium lg:text-xl">
                            {item.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}