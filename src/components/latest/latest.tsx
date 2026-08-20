import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { animations } from "../../animations"
import { NavLink } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger)

export default function Latest() {
    const [isDesktop, ] = useState(window.innerWidth > 768)
    const sectionRef = useRef(null)
    const title = "Long title text for the animation"
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
            }, 0 + (index/15))
        })

    }, {scope: sectionRef})

    useEffect(() => {
        console.log(sliderIndex)
    }, [sliderIndex])

    return(
        <section className="w-full" ref={sectionRef}>
            <div className="w-full h-dvh rounded-t-2xl bg-neutral-50">
                <div className="flex flex-col gap-20">
                    <div className="pt-20">
                        <h2 className="flex flex-col text-5xl items-center font-medium md:text-7xl lg:text-9xl">
                            <span>Latest effects,</span>
                            <span className="text-[#999999]">Freshly added</span>
                        </h2>
                    </div>
                    <div>
                        <Swiper
                            slidesPerView={isDesktop? 3 : 1.5}
                            centeredSlides={true}
                            onSlideChange={(swiper) => setSliderIndex(swiper.realIndex)}
                            spaceBetween={16}
                            className="w-full h-[45dvh] hover:cursor-grab active:cursor-grabbing"
                        >
                            {sliderItems.map((item, index) => (
                                <SwiperSlide className="w-full h-full relative" key={item.id + index}>
                                    <article className="w-full h-full">
                                        <div className="w-full h-full" style={{ background: item.color }}>
                                            <video src={item.video} className="w-full h-full object-cover" autoPlay muted loop></video>
                                        </div>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-between p-3 items-center gap-4 max-w-100 m-auto">
                            <div className="flex justify-center py-5 items-center gap-2 text-[#999999] uppercase text-sm">
                                <p>#{sliderItems[sliderIndex].id}</p>
                                <p>{sliderItems[sliderIndex].title}</p>
                            </div>
                            <NavLink to={`/collection/${sliderItems[sliderIndex].name}`} className='text-nowrap bg-neutral-950 text-neutral-50 uppercase rounded-full py-1 px-3'>
                                See effect
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[500dvh] relative bg-neutral-50 rounded-b-2xl" ref={stickyRef}>
                <div className="sticky top-0 h-dvh overflow-hidden flex items-center">
                    <div className="flex container" ref={containerRef}>
                        <h2 className="text-5xl lg:text-[170px] shrink-0">
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