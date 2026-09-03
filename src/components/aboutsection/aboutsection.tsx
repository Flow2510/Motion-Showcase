import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection(){
    const sectionRef = useRef<HTMLElement>(null)
    const sliderRef = useRef<HTMLDivElement>(null)

    const items = [
        {
            id: 1,
            slug: "Scroll",
            title: "Scroll",
            text: "Playful animations triggered by every click.",
            img: "",
            alt: "",
            color: "#a2d2ff"
        },
        {
            id: 2,
            slug: "Text",
            title: "Text",
            text: "Smooth effects that bring typography to life.",
            img: "",
            alt: "",
            color: "#cdeac0"
        },
        {
            id: 3,
            slug: "Click",
            title: "Click",

            text: "Dynamic animations that react to your scroll.",
            img: "",
            alt: "",
            color: "#fadde1"
        },
        {
            id: 4,
            slug: "Loader",
            title: "Loader",
            text: "Creative loading animations for smoother transitions.",
            img: "",
            alt: "",
            color: "#baf2d8"
        },
        {
            id: 5,
            slug: "Hover",
            title: "Hover",
            text: "Interactive effects that respond to your cursor.",
            img: "",
            alt: "",
            color: "#faedcb"
        }
    ]

    const animatedTitleLine1 = "Endless Ways"
    const animatedTitleLine2 = "To Animate"
    const splitTitleLine1 = animatedTitleLine1.split("")
    const splitTitleLine2 = animatedTitleLine2.split("")

    useGSAP(() => {
        const section = sectionRef.current;
        const letters = gsap.utils.toArray<HTMLSpanElement>('.title-letter')
        const shuffled = gsap.utils.shuffle(letters)
        const slider = sliderRef.current

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section, 
                start: "top top",
                end: "90% bottom",
                scrub: true
            }
        })

        gsap.set(slider, {
            yPercent: 100,
            opacity: 0
        })
        
        gsap.set(letters, {
            display: "none"
        })

        shuffled.forEach((letter) => {
            tl.to(letter, {
                display: "inline-block"
            })
        })

        const total = letters.length
        const radius = 150

        const animationStart = tl.duration() + 1

        letters.forEach((letter, index) => {
            const angle = (index / total) * Math.PI * 2
            const y = Math.cos(angle) * radius * 1.8
            const x = Math.sin(angle) * radius * 1.5

            tl.to(letter, {
                x,
                y,
                rotateZ: () => gsap.utils.random(-90, 90),
                duration: 2,
                ease: "power2.out",
            }, animationStart)

            tl.to(letter, {
                opacity: 0,
                duration: 0.5
            }, animationStart + 1.5)
        })

        tl.to(slider, {
            opacity: 1,
            yPercent: -50,
            duration: 0.5
        }, animationStart - 0.1)
    }, { scope: sectionRef})

    return(
        <section className="bg-neutral-950 text-neutral-50 relative h-[500dvh]" ref={sectionRef}>
            <div className="sticky top-0 flex flex-col h-dvh justify-between py-20 overflow-hidden">
                <div className="flex flex-col gap-10 items-center">
                    <h2 className="text-xl md:text-2xl flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-300"></span>
                        <span>Built to explore Motion possibilities</span>
                    </h2>
                </div>
                <div className='w-full flex items-center justify-center'>
                   <h3 className="text-4xl flex flex-col items-center md:text-5xl lg:text-7xl xl:text-9xl font-semibold">
                        <span className="flex items-center">
                            {splitTitleLine1.map((letter, index) => (
                                <span className="title-letter inline-block" key={letter + index}>
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                            ))}
                        </span>
                        <span className="flex items-center">
                            {splitTitleLine2.map((letter, index) => (
                                <span className="title-letter inline-block" key={letter + index}>
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                            ))}
                        </span>
                   </h3>
                </div>
                <div>
                    <div className="w-full flex justify-center absolute top-1/2" ref={sliderRef}>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="w-70! h-100!"
                        >
                            {items.map((item) => (
                                <SwiperSlide key={item.id} className="rounded-2xl w-70! h-80" style={{ background: item.color }}>
                                    <NavLink to={`/collection?filter=${item.slug}`}>
                                        <div className="p-8 text-neutral-950 flex flex-col items-center justify-between h-full text-center">
                                            <h3 className="text-5xl font-bold">
                                                {item.title}
                                            </h3>
                                            <h3 className="text-[175px] text-neutral-950/20 font-bold leading-[90%]">{item.id}</h3>
                                            <p className="text-xl font-semibold">{item.text}</p>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}