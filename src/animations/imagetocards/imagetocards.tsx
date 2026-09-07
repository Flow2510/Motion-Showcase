import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useState } from "react"
import MobileCard from "./mobilecard"

gsap.registerPlugin(ScrollTrigger)

export default function ImageToCards(){
    const sectionRef = useRef<HTMLElement>(null)
    const leftImgRef = useRef<HTMLDivElement>(null)
    const centerImgRef = useRef<HTMLDivElement>(null)
    const rightImgRef = useRef<HTMLDivElement>(null)
    const [isDesktop, ] = useState(window.innerWidth > 768)

    isDesktop &&
        useGSAP(()=> {
            const section = sectionRef.current
            const leftImg = leftImgRef.current
            const centerImg = centerImgRef.current
            const rightImg = rightImgRef.current
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    scrub:true,
                    pin: true
                }
            })

            tl.to(leftImg, {
                xPercent: -5,
                duration: 1
            }, 0)

            tl.to(rightImg, {
                xPercent: 5, 
                duration: 1
            }, 0)

            tl.to(".recto", {
                borderRadius: "1rem",
                duration: 0.5
            }, 0)

            const time = tl.duration()

            tl.to([leftImg, rightImg, centerImg], {
                rotateY: 180,
                duration: 1
            }, time)

            tl.to(leftImg, {
                rotateZ: -10,
                yPercent: 5,
                duration: 1
            }, time)

            tl.to(rightImg, {
                rotateZ: 10,
                yPercent: 5,
                duration: 1
            }, time)

        }, { scope: sectionRef})

    return(
        isDesktop?
            <section className="h-dvh w-full flex items-center justify-center max-w-[70%] lg:max-w-250 m-auto" ref={sectionRef}>
                <div className="w-full aspect-1/0.5 flex rounded-2xl gap-0">
                    <div className="w-full h-full perspective-[1000px]">
                        <div className="w-full h-full relative transform-3d" ref={leftImgRef}>
                            <div className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-l-2xl recto">
                                <img src="/images/sunset.jpg" className="absolute -top-full left-0 w-[300%] h-[300%] max-w-none object-cover" alt="" />
                            </div>
                            <div 
                                className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 text-neutral-950 flex flex-col justify-between rounded-2xl p-5"
                                style={{ background: "linear-gradient(166deg, rgb(199, 199, 199) 0%, rgb(131, 131, 131) 100%)", boxShadow: "rgb(0, 0, 0) 0px 24px 65px 0px, rgb(255, 255, 255) 0px 2px 2px 0px inset" }}
                            >
                                <div className="w-10 h-10">
                                    <img src="/icons/heart.png" className="opacity-80" alt="" />
                                </div>
                                <h3 className="text-3xl opacity-80 font-semibold">Title Text</h3>
                                <p className="text-sm opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab explicabo, consequuntur recusandae.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full perspective-1000 relative">
                        <div className="w-full h-full relative transform-3d" ref={centerImgRef}>
                            <div className="absolute inset-0 w-full h-full backface-hidden overflow-hidden recto">
                                <img src="/images/sunset.jpg" className="absolute -top-full -left-full w-[300%] h-[300%] max-w-none object-cover" alt="" />
                            </div>
                            <div 
                                style={{ background: "linear-gradient(177deg, rgb(250, 76, 45) -18%, rgb(191, 24, 21) 31%, rgb(74, 10, 8) 100%)", boxShadow: "rgb(0, 0, 0) 0px 24px 65px 0px, rgba(255, 143, 143, 0.77) 0px 2px 1px 0px inset" }}
                                className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 text-white flex flex-col justify-between rounded-2xl p-5"
                            >
                                <div className="w-10 h-10">
                                    <img src="/icons/Loader.svg" className="brightness-[100] opacity-80" alt="" />
                                </div>
                                <h3 className="text-3xl opacity-80 font-semibold">Title Text</h3>
                                <p className="text-sm opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab explicabo, consequuntur recusandae.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full perspective-1000">
                        <div className="w-full h-full relative transform-3d" ref={rightImgRef}>
                            <div className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-r-2xl recto">
                                <img src="/images/sunset.jpg" className="absolute -top-full left-[-200%] w-[300%] h-[300%] max-w-none object-cover" alt="" />
                            </div>
                            <div 
                                style={{ background: "linear-gradient(rgb(31, 31, 31) 0%, rgb(22, 22, 22) 100%)", boxShadow: "rgb(0, 0, 0) 0px 24px 65px 0px, rgba(255, 255, 255, 0.3) 0px 1px 2px 0px inset" }}
                                className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 text-white flex flex-col justify-between rounded-2xl p-5"
                            >
                                <div className="w-10 h-10">
                                    <img src="/icons/Scroll.svg" className="brightness-[20] opacity-80" alt="" />
                                </div>
                                <h3 className="text-3xl font-semibold opacity-80">Title Text</h3>
                                <p className="text-sm opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab explicabo, consequuntur recusandae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        :
        <section>
            <div className="relative h-[300dvh] flex flex-col items-center">
                <MobileCard 
                    background={'linear-gradient(166deg, rgb(199, 199, 199) 0%, rgb(131, 131, 131) 100%)'}
                    shadow={"rgb(0, 0, 0) 0px 24px 65px 0px, rgb(255, 255, 255) 0px 2px 2px 0px inset"}
                    color={"#0a0a0a"}
                    brightness={false}
                    icon={'/icons/heart.png'}
                    left={true}
                />
                <MobileCard 
                    background={'linear-gradient(177deg, rgb(250, 76, 45) -18%, rgb(191, 24, 21) 31%, rgb(74, 10, 8) 100%)'}
                    shadow={"rgb(0, 0, 0) 0px 24px 65px 0px, rgba(255, 143, 143, 0.77) 0px 2px 1px 0px inset"}
                    color={"#fafafa"}
                    brightness={true}
                    icon={'/icons/Loader.svg'}
                    left={false}
                />
                <MobileCard 
                    background={'linear-gradient(rgb(31, 31, 31) 0%, rgb(22, 22, 22) 100%)'}
                    shadow={"rgb(0, 0, 0) 0px 24px 65px 0px, rgba(255, 255, 255, 0.3) 0px 1px 2px 0px inset"}
                    color={"#fafafa"}
                    brightness={true}
                    icon={'/icons/Scroll.svg'}
                    left={true}
                />
            </div>
        </section>
    )
}