import { Mousewheel, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { animations } from '../../animations';
import SliderCard from '../slidercard/slidercard';
import { useEffect, useRef, useState } from 'react';
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

import 'swiper/css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Slider() {
    const [progress, setProgress] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!containerRef.current) return

        const cards = gsap.utils.toArray<HTMLDivElement>('.slider-card')

        gsap.fromTo(cards.slice(0,4), {
            scale: 1,
            opacity: 0,
            y: "100dvh",
        }, {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.inOut",
            stagger: {
                each: 0.1,
            }
        })

    }, { scope: containerRef })

    useEffect(() => {
        gsap.to('.progress-bar', {
            scaleY: progress,
            duration: 0.1,
            ease: 'none'
        })

        gsap.to('.second-pin', {
            borderColor: progress >= 0.5 ? "#171717" : "#17171750"
        })

        gsap.to('.second-pin-dot', {
            scale: progress >= 0.5 ? 1 : 0
        })

        gsap.to('.third-pin', {
            borderColor: progress >= 0.98 ? "#171717" : "#17171750"
        })

        gsap.to('.third-pin-dot', {
            scale: progress >= 0.98 ? 1 : 0
        })
    }, [progress])

    return(
        <div
            className="fixed w-full top-0 left-0 h-screen overflow-hidden touch-none flex items-end"
            ref={containerRef}
        >
            <div 
                className="w-1/2 absolute h-full top-0 left-1/2"
            >
                <Swiper
                    onRealIndexChange={(swiper) => {
                        setProgress((swiper.realIndex + 1) / swiper.slides.length);
                    }}
                    className="max-w-[70%] w-full h-full will-change-transform cursor-grab active:cursor-grabbing -translate-x-15"
                    direction={'vertical'}
                    slidesPerView={2.5}
                    modules={[Mousewheel, FreeMode]}
                    spaceBetween={24}
                    freeMode={{
                        enabled: true,
                        momentum: true,    
                    }}
                    mousewheel={{
                        enabled: true,
                        sensitivity: 1,
                    }}
                    loop
                 >
                    {animations.map((animation) => (
                        <SwiperSlide
                            key={animation.id}
                            className="w-full h-full aspect-video active:cursor-grabbing"
                        >
                            <div 
                                className='slider-card w-full h-full'
                                data-flip-id={animation.id}
                            >
                                <SliderCard
                                    name={animation.name}
                                    image={animation.image}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="h-60 bg-neutral-500 top-1/2 right-10 absolute -translate-y-1/2">
                <div className='w-px h-full'>
                    <div className="h-full w-full bg-neutral-950 progress-bar origin-top">

                    </div>
                </div>
                <div className='absolute top-0 left-1/2 border bg-neutral-200 w-3 h-3 rounded-full -translate-1/2 flex items-center justify-center'>
                    <div className='h-1 w-1 bg-neutral-950'></div>
                </div>
                <div className='absolute top-1/2 left-1/2 border bg-neutral-200 w-3 h-3 rounded-full -translate-1/2 flex items-center justify-center second-pin'>
                    <div className='h-1 w-1 bg-neutral-950 second-pin-dot'></div>
                </div>
                <div className='absolute bottom-0 left-1/2 border bg-neutral-200 w-3 h-3 rounded-full -translate-x-1/2 translate-y-1/2 flex items-center justify-center third-pin'>
                    <div className='h-1 w-1 bg-neutral-950 third-pin-dot'></div>
                </div>
            </div>
        </div>
    )
}