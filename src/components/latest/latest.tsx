import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { animations } from "../../animations"
import { NavLink } from "react-router-dom"
import TextRevealHover from "../textrevealhover/textrevealhover"

gsap.registerPlugin(ScrollTrigger)

export default function Latest() {
    const [isDesktop, ] = useState(window.innerWidth > 768)
    const sectionRef = useRef(null)
    const titleContainerRef = useRef(null)
    const title = "Motion Systems For Modern Products"
    const lettersTitle = title.split("")
    const stickyRef = useRef(null)
    const containerRef = useRef(null)
    const sliderItems = animations.slice(-5)
    const [sliderIndex, setSliderIndex] = useState(0)

    useGSAP(() => {
        const container = gsap.utils.toArray<HTMLElement>(".container")
        const letters = gsap.utils.toArray<HTMLElement>(".letter")

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: stickyRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        })

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

        gsap.set(container, {
            xPercent: 100
        })

        tl.to(container, {
            xPercent: -175,
            ease: "none"
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

    useEffect(() => {
        console.log(sliderIndex)
    }, [sliderIndex])

    return(
        <section className="w-full" ref={sectionRef}>
            <div className="w-full h-dvh rounded-t-2xl bg-neutral-50 overflow-hidden" ref={titleContainerRef}>
                <div className="flex flex-col gap-30">
                    <div className="pt-20">
                        <h2 className="flex flex-col text-5xl items-center font-medium md:text-7xl lg:text-9xl">
                            <span className="title-line-1">Latest effects,</span>
                            <span className="text-[#999999] title-line-2">Freshly added</span>
                        </h2>
                    </div>
                    <div className="relative w-full max-w-300 m-auto">
                        <Swiper
                            slidesPerView={isDesktop? 3 : 1.2}
                            centeredSlides={true}
                            onSlideChange={(swiper) => setSliderIndex(swiper.realIndex)}
                            spaceBetween={16}
                            className="w-full h-[45dvh] hover:cursor-grab active:cursor-grabbing"
                        >
                            {sliderItems.map((item, index) => (
                                <SwiperSlide className="w-full h-full relative" key={item.id + index}>
                                    <article className="w-full h-full flex flex-col">
                                        <div className="w-full h-[70%] xl:h-[80%]" style={{ background: item.color }}>
                                            <video src={item.video} className="w-full h-full object-cover" autoPlay muted loop></video>
                                        </div>
                                        {index === sliderIndex &&
                                            <div className="flex flex-1 flex-col p-3 items-center gap-2 xl:flex-row xl:justify-between">
                                                <div className="flex justify-center items-center gap-2 text-[#999999] uppercase text-sm">
                                                    <p>#{sliderItems[sliderIndex].id}</p>
                                                    <p>{sliderItems[sliderIndex].title}</p>
                                                </div>
                                                <div className="flex gap-1">
                                                    <NavLink to={`/collection/${animations[sliderIndex].name}`} className={'flex items-center rounded-full bg-neutral-950 text-neutral-50 px-4 py-2 text-[11px] font-semibold uppercase group'}>
                                                        <TextRevealHover 
                                                            text="Info"
                                                        />
                                                    </NavLink>
                                                    <NavLink to={`/collection/${animations[sliderIndex].name}/demo`} className={'flex items-center rounded-full bg-neutral-950 text-neutral-50 px-4 py-2 text-[11px] font-semibold uppercase group'}>
                                                        <TextRevealHover 
                                                            text="Demo"
                                                        />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        }
                                    </article>
                                </SwiperSlide>
                            ))}                            
                        </Swiper>
                        <div className="w-[50%] max-w-100 h-0.5 bg-neutral-950/25 absolute -top-10 left-[50%] translate-x-[-50%]">
                            <div className="h-full bg-neutral-950" style={{  width: `${(sliderIndex / (sliderItems.length - 1)) * 100}%`}}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[500dvh] relative bg-neutral-50 rounded-b-2xl" ref={stickyRef}>
                <div className="sticky top-0 h-dvh overflow-hidden flex items-center">
                    <div className="flex container" ref={containerRef}>
                        <h2 className="text-5xl md:text-8xl lg:text-[120px] 2xl:text-[170px] shrink-0 font-medium">
                            {lettersTitle.map((letter, index) => (
                                <span key={letter + index} className="letter inline-block">
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                            ))}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}