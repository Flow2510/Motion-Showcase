import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { animations } from "../../animations"
import { NavLink } from "react-router-dom"
import TextRevealHover from "../textrevealhover/textrevealhover"
import type { Swiper as SwiperType } from 'swiper'

gsap.registerPlugin(ScrollTrigger)

export default function Latest() {
    const [isDesktop, ] = useState(window.innerWidth > 768)
    const sectionRef = useRef(null)
    const titleContainerRef = useRef(null)
    const stickyRef = useRef(null)
    const sliderItems = animations.slice(-5).reverse()
    const [sliderIndex, setSliderIndex] = useState(0)
    const [swiper, setSwiper] = useState<SwiperType | null>(null)

    useGSAP(() => {
        const letters = gsap.utils.toArray<HTMLElement>(".letter")

        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: titleContainerRef.current,
                start: "top bottom",
                end: "top 35%",
                scrub: true,
            }
        })

        const lettersTl = gsap.timeline({
            scrollTrigger: {
                trigger: stickyRef.current,
                start: "top center",
                end: "90% bottom",
                scrub: true,
            }
        })

        letters.forEach((letter, index) => {
            if (index === 0) return

            gsap.set(letter, {
                opacity: 0,
                y: index % 2 === 0 ? 150 : -150
            })
        })

        gsap.set('.title-line-1', {
            x: "-100vw"
        })

        gsap.set('.title-line-2', {
            x: "100vw"
        })

        letters.forEach((letter, index) => {
            lettersTl.to(letter, {
                opacity: 1,
                y: 0,
                ease: "back.out(3)"
            }, isDesktop? 0 + (index/10) : 0 + (index/20))
        })

        titleTl.to('.title-line-1', {
            x: "0vw"
        })

        titleTl.to('.title-line-2', {
            x: "0vw"
        })

    }, {scope: sectionRef})

    const prevSlide = () => {
        if (sliderIndex >= 1) {
            swiper?.slideTo(sliderIndex - 1)
        }
    }

    const nextSlide = () => {
        if (sliderIndex < sliderItems.length) {
            swiper?.slideTo(sliderIndex + 1)
        }
    }

    return(
        <section className="w-full" ref={sectionRef}>
            <div className="w-full min-h-dvh rounded-2xl bg-neutral-50 overflow-hidden pt-20 pb-50" ref={titleContainerRef}>
                <div className="flex flex-col gap-30">
                    <div className="">
                        <h2 className="flex flex-col text-5xl items-center font-medium md:text-7xl lg:text-9xl">
                            <span className="title-line-1">Latest effects,</span>
                            <span className="text-[#999999] title-line-2">Freshly added</span>
                        </h2>
                    </div>
                    <div className="relative w-full max-w-300 m-auto">
                        <Swiper
                            slidesPerView={isDesktop? 3 : 1.2}
                            centeredSlides={true}
                            onSwiper={setSwiper}
                            onSlideChange={(swiper) => setSliderIndex(swiper.realIndex)}
                            spaceBetween={16}
                            className="w-full h-[45dvh] hover:cursor-grab active:cursor-grabbing"
                        >
                            {sliderItems.map((item) => (
                                <SwiperSlide className="w-full h-full relative" key={item.id}>
                                    <article className="w-full h-full flex flex-col">
                                        <div className="w-full h-[70%] xl:h-[80%]" style={{ background: item.color }}>
                                            <video src={item.video} className="w-full h-full object-cover" autoPlay muted loop></video>
                                        </div>
                                        <div className="flex flex-1 flex-col p-3 items-center gap-2 xl:flex-row xl:justify-between">
                                                <div className="flex justify-center items-center gap-2 text-[#999999] uppercase text-sm">
                                                    <p>#{item.id}</p>
                                                    <p>{item.title}</p>
                                                </div>
                                                <div className="flex gap-1">
                                                    <NavLink to={`/collection/${item.name}`} className={'flex items-center rounded-full bg-neutral-950 text-neutral-50 px-4 py-2 text-[11px] font-semibold uppercase group'}>
                                                        <TextRevealHover 
                                                            text="Info"
                                                        />
                                                    </NavLink>
                                                    <NavLink to={`/collection/${item.name}/demo`} className={'flex items-center rounded-full bg-neutral-950 text-neutral-50 px-4 py-2 text-[11px] font-semibold uppercase group'}>
                                                        <TextRevealHover 
                                                            text="Demo"
                                                        />
                                                    </NavLink>
                                                </div>
                                            </div>
                                    </article>
                                </SwiperSlide>
                            ))}                            
                        </Swiper>
                        {isDesktop && 
                            <button type="button" className="absolute top-1/2 -translate-x-full left-0 -translate-y-full cursor-pointer disabled:opacity-30" onClick={prevSlide} disabled={sliderIndex === 0}>
                                <div className="w-15 h-15 p-2">
                                    <img src={'/icons/chevron.png'} className="w-full h-full -rotate-90 brightness-0" alt="" />
                                </div>
                            </button>
                        }
                        {isDesktop && 
                            <button type="button" className="absolute top-1/2 translate-x-full right-0 -translate-y-full cursor-pointer disabled:opacity-30" onClick={nextSlide} disabled={sliderIndex >= sliderItems.length - 1}>
                                <div className="w-15 h-15 p-2">
                                    <img src={'/icons/chevron.png'} className="w-full h-full rotate-90 brightness-0" alt="" />
                                </div>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}