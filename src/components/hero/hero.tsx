import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { animations } from "../../animations";
import { Autoplay } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
    readonly isDesktop: boolean;
}

export default function Hero({ isDesktop } : Props) {
    const [isDrag, setIsDrag] = useState(false)
    const [sliderIndex, setSliderIndex] = useState(0)
    const leftRef = useRef<HTMLDivElement>(null)
    const rightRef = useRef<HTMLDivElement>(null)
    const leftTitleRef = useRef<HTMLHeadingElement>(null)
    const righTitletRef = useRef<HTMLHeadingElement>(null)

    const titleLeft = "Modern JS Effects"
    const titleSplitLeft = titleLeft.split(" ")

    const titleRight = "Made With Care"
    const titleSplitRight = titleRight.split(" ")

    useGSAP(() => {
        if (
            !leftRef.current ||
            !leftTitleRef.current ||
            !rightRef.current ||
            !righTitletRef.current
        ) {
            return
        }

        const distanceLeft = leftRef.current?.offsetWidth - leftTitleRef.current?.offsetWidth
        const distanceRight = rightRef.current?.offsetWidth - righTitletRef.current?.offsetWidth
        const wordsLeft = gsap.utils.toArray<HTMLElement>('.left-word')
        const wordsRight = gsap.utils.toArray<HTMLElement>('.right-word')

        wordsLeft.forEach((word) => {
            gsap.set(word, {
                x: distanceLeft
            })
        })

        wordsRight.forEach((word) => {
            gsap.set(word, {
                x: -distanceRight
            })
        })

        gsap.set('.slider', {
            opacity: 0
        })

        gsap.to('.slider', {
            opacity: 1,
            duration: 0.5,
            delay: 3
        })

        gsap.set('.hero-footer', {
            opacity: 0
        })

        gsap.to('.hero-footer', {
            opacity: 1,
            duration: 0.5,
            delay: 3
        })

        wordsLeft.forEach((word, index) => {
            gsap.to(word, {
                x: 0,
                duration: 1,
                delay: 2 + (index / 10)
            })
        })

        wordsRight.forEach((word, index) => {
            const reversedIndex = wordsRight.length - 1 - index

            gsap.to(word, {
                x: 0,
                duration: 1,
                delay: 2 + (reversedIndex / 10)
            })
        })
    })

    return(
        isDesktop ?
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 0.5 }}
                className={`duration-300 h-dvh w-full relative ${isDrag ? "bg-neutral-400" : "bg-neutral-50"}`}
            >
                <div                     
                    className="w-full h-dvh max-w-[33%] m-auto slider" 
                >
                    <Swiper 
                        loop={true}                        
                        onSlideChange={(swiper) => setSliderIndex(swiper.realIndex)}
                        onTouchStart={() => setIsDrag(true)}
                        onTouchEnd={() => setIsDrag(false)}
                        onSliderMove={() => setIsDrag(true)}
                        centeredSlides={true}
                        spaceBetween={isDrag ? 10 : 0}
                        slidesPerView={isDrag ? 3 : 1.7}
                        direction={'vertical'}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        className="w-full h-full cursor-grab active:cursor-grabbing"
                    >
                        {animations.slice(0, 10).map((item, i) =>
                            <SwiperSlide key={item.name}>
                                <motion.div 
                                    style={{ scale: isDrag ? 0.9 : 1 }}
                                    transition={{
                                        duration: 0.3,
                                    }}                                    
                                    className="flex h-full w-full items-center justify-center duration-500"
                                >
                                    <div
                                        className="aspect-video w-full max-w-5xl rounded-lg relative"
                                        style={{ scale : !isDrag && i === sliderIndex ? 1 : 0.9, background: item.color }}
                                    >
                                        <video src={item.video} className="w-full h-full object-cover rounded-lg" autoPlay muted loop></video>
                                        <AnimatePresence>
                                            {i === sliderIndex && !isDrag &&
                                                <motion.div     
                                                    initial={{ y: "100%", opacity: 0 }}   
                                                    animate={{ y: "100%", opacity: 1, transition: {delay: 0.5, duration: 0.3 } }}          
                                                    exit={{ y: "100%", opacity: 0 }}  
                                                    transition={{ duration: 0.3 }}                         
                                                    className="absolute bottom-0 left-0 py-2 text-[#999999] text-sm font-[bricolage_grotesque]"
                                                >
                                                    #{String(item.id).padStart(3, "0")}
                                                </motion.div>
                                            }
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
                <motion.div 
                    className="absolute w-full flex gap-2 top-[50%] translate-y-[-50%] left-0 items-center"
                >
                    <motion.div                         
                        className="w-[50%] p-5 pr-2.5"
                    >
                        <div 
                            ref={leftRef}
                            className="w-full"
                        >
                            <AnimatePresence mode="wait">
                                {isDrag ?
                                    <motion.div
                                        key={'drag-id'}
                                        className="p-5"
                                    >
                                        <h2 className="text-2xl w-fit lg:text-3xl">
                                            #{String(animations[sliderIndex].id).padStart(3, "0")}
                                        </h2>
                                    </motion.div>
                                :
                                    <div>
                                        <motion.h1 
                                            key={'initial-title-left'}
                                            className="text-3xl w-fit lg:text-4xl xl:text-5xl font-medium flex gap-2 xl:gap-3"
                                            ref={leftTitleRef}
                                        >
                                            {titleSplitLeft.map((word, index) => (
                                                <span key={word + index} className="inline-block left-word">
                                                    {word}
                                                </span>
                                            ))}
                                        </motion.h1>
                                    </div>
                                }
                            </AnimatePresence>
                        </div>
                    </motion.div>
                    <div                         
                        className="w-[50%] p-5 pl-2.5"
                    >
                        <div
                            ref={rightRef}
                            className="w-full flex justify-end"
                        >
                            <AnimatePresence>
                                {isDrag ?
                                    <motion.div 
                                        key={'drag-title'}
                                        className="p-5">
                                        <h2 className="text-2xl w-fit lg:text-3xl">
                                            {animations[sliderIndex].title}
                                        </h2>                        
                                    </motion.div>
                                :
                                    <motion.div
                                        key={'initial-title-right'}
                                        className=""
                                    >
                                        <h1 className="text-3xl w-fit lg:text-4xl xl:text-5xl font-medium flex gap-2 xl:gap-3" ref={righTitletRef}> 
                                            {titleSplitRight.map((word, index) => (
                                                <span key={word + index} className="inline-block right-word">
                                                    {word}
                                                </span>
                                            ))}
                                        </h1>
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </div>
                    </div>    
                </motion.div>            
                <div className="absolute bottom-0 left-0 p-5 w-full flex justify-between items-end hero-footer">
                    <div className="max-w-100">
                        <p>
                            Explore ready-made motion patterns for your next build. Smooth, tested, ready to use.
                        </p>
                    </div>
                    <div className="uppercase opacity-50 flex flex-col text-end text-sm">                        
                        <span>Drag/Scroll</span>
                        <span>to explore the collection</span>
                    </div>
                </div>
            </motion.section>
        :
            <section className="h-dvh w-full flex items-center bg-neutral-50">
                <div className="w-full flex flex-col gap-8">
                    <div className="flex flex-col items-center text-center gap-4">
                        <h2 className="text-4xl font-medium max-w-70">JS effects made with care</h2>
                        <p className="font-medium max-w-100">Explore ready-made motion patterns for your next build. Smooth, tested, ready to use.</p>
                        <NavLink to={'/collection'} className="font-medium bg-neutral-950 rounded-full text-neutral-50 uppercase p-4 px-6 text-sm inline-block font-[geist]">
                            Explore Collection
                        </NavLink>
                    </div>
                    <div className="w-full aspect-1/0.5">
                        <Swiper
                            onSlideChange={(swiper) => setSliderIndex(swiper.realIndex)}
                            className="w-full h-full"
                            slidesPerView={1.2}
                            spaceBetween={16}
                            centeredSlides={true}
                            initialSlide={Math.floor(animations.length / 2)} 
                        >
                            {animations.map((item) => (
                                <SwiperSlide                                    
                                    key={item.name}
                                >
                                    <div className="rounded-sm flex items-center justify-center h-full w-full relative" style={{ background: item.color }}>
                                        <video src={item.video} className="w-full h-full object-cover" muted autoPlay loop></video>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
    )
}