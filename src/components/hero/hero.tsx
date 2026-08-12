import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { animations } from "../../animations";
import { Autoplay } from "swiper/modules";

type Props = {
    readonly isDesktop: boolean;
}

export default function Hero({ isDesktop } : Props) {
    const [isDrag, setIsDrag] = useState(false)
    const [sliderIndex, setSliderIndex] = useState(0)

    return(
        isDesktop ?
            <section className={`duration-300 h-dvh w-full ${isDrag ? "bg-neutral-400" : "bg-neutral-50"} grid grid-cols-3`}>
                <div className="w-full h-full flex items-center p-5">
                    <AnimatePresence mode="wait">
                        {isDrag ?
                            <motion.div
                                key={'drag-id'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full flex items-center p-5"
                            >
                                <h2 className="text-2xl">
                                    #{String(animations[sliderIndex].id).padStart(3, "0")}
                                </h2>
                            </motion.div>
                        :
                            <motion.h1 
                                key={'initial-title-left'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-3xl lg:5xl"
                                style={{ fontFamily: "inter" }}
                            >
                                Modern JS Effects
                            </motion.h1>
                        }
                    </AnimatePresence>
                </div>
                <div 
                    className="w-full h-dvh" 
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
                        {animations.map((item, i) =>
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
                <AnimatePresence>
                    {isDrag ?
                        <motion.div 
                            key={'drag-title'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full flex items-center p-5">
                            <h2 className="text-2xl">
                                {animations[sliderIndex].title}
                            </h2>                        
                        </motion.div>
                    :
                        <motion.div
                            key={'initial-title-right'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full flex items-center justify-end p-5">
                            <h1 className="text-4xl font-[inter]">Made With Care</h1>
                        </motion.div>
                    }
                </AnimatePresence>
            </section>
        :
            <section className="h-dvh w-full flex items-center">
                <div className="w-full flex flex-col gap-8">
                    <div className="flex flex-col items-center text-center gap-4">
                        <h2 className="text-4xl font-medium max-w-70">JS effects made with care</h2>
                        <p className="font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, inventore?</p>
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