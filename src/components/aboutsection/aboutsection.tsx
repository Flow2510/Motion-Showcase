import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

export default function AboutSection(){
    const items = [
        {
            id: 1,
            icon: "/icons/bolt.png",
            title: "Modern & lightweight",
            text: "Optimized for performance and smooth interactions",
            alt: "icon of "
        },
        {
            id: 2,
            icon: "/icons/code.png",
            title: "Easy to integrate",
            text: "Copy, paste, and make it yours. No complex setup",
            alt: "icon of "
        },
        {
            id: 3,
            icon: "/icons/heart-filled.png",
            title: "Designed with care",
            text: "Thoughtful details that make a real difference",
            alt: "icon of "
        }
    ]



    const sliderItems = [
        {
            id: 1,
            color: "#9b5de5",
            title: ""
        },
        {
            id: 2,
            color: "#00f5d4",
            title: ""
        },
        {
            id: 3,
            color: "#f15bb5",
            title: ""
        },
        {
            id: 4,
            color: "#ff5400",
            title: ""
        },
        {
            id: 5,
            color: "#00bbf9",
            title: ""
        },
    ]

    return(
        <section className="bg-neutral-950 text-neutral-50 pb-20 ">
            <div className="lg:flex max-w-300 m-auto lg:gap-10">
                <div className="py-20 flex flex-col gap-15 lg:w-[46%]">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-4xl flex flex-col items-center font-semibold lg:items-start md:text-5xl lg:text-6xl">
                            <span>Built to explore</span>
                            <span><span className="text-[#999999]">Motion </span>possibilities</span>
                        </h2>
                        <p className="text-[#999999] text-center px-5 lg:text-left lg:px-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum rerum repellat similique quidem corrupti fugit, sunt nostrum blanditiis enim dolorem odio porro assumenda iste dolore minima temporibus quasi nemo.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-10 px-5 lg:px-0 lg:items-start">
                        {items.map((item) => (
                            <div key={item.id} className="flex flex-col gap-4 items-center lg:flex-row">
                                <div className="p-2.5 bg-neutral-800 flex items-center justify-center flex-col rounded-full w-15 h-15 shrink-0">
                                    <img src={item.icon} className="w-10 rounded-full h-10 brightness-[100]" alt={item.alt} />
                                </div>
                                <div className="text-center lg:text-left">
                                    <h3 className="text-lg font-medium">{item.title}</h3>
                                    <p className="text-[#999999]">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-[54%] p-5 py-20 flex flex-col gap-15 relative">
                        <div className="w-50 h-80 m-auto lg:w-60 lg:h-90">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="mySwiper w-full h-full"
                            >
                                {sliderItems.map((item) => (
                                    <SwiperSlide 
                                        className='w-full h-full rounded-2xl p-0.75' 
                                        key={item.id} 
                                        style={{
                                            background: `linear-gradient(
                                                to top right,
                                                color-mix(in srgb, ${item.color} 60%, white) 0%,
                                                ${item.color} 45%,
                                                ${item.color} 55%,
                                                color-mix(in srgb, ${item.color} 60%, white) 100%
                                            )`,
                                            color: item.color
                                        }}
                                    >
                                        <div className='h-full w-full bg-neutral-950 rounded-2xl flex items-center justify-center'>
                                            <h2 className='text-9xl font-semibold'>
                                                {item.id}
                                            </h2>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className='absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center xl:bottom-20'>
                                <div className='w-6 h-6'>
                                    <img src="/icons/chevron.png" className='w-full h-full brightness-[100] -rotate-90' alt="" />
                                </div>
                                <div className='w-10 h-px bg-neutral-50'>
                                    
                                </div>
                                <div className='w-6 h-6'>
                                    <img src="/icons/chevron.png" className='w-full h-full brightness-[100] rotate-90' alt="" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}