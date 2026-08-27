import { useRef } from "react"
import article from '../../data/article.json'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function SvgDecay() {
    const sectionRef = useRef<HTMLElement>(null)

    if (!sectionRef) return

    useGSAP(() => {
        const svgList = gsap.utils.toArray<HTMLDivElement>('.svg')

        gsap.set('.nav-list', {
            y: "100vh"
        })

        gsap.set('.svg-up', {
            xPercent: 100
        })

        gsap.set('.svg-down', {
            xPercent: -100
        })

        svgList.forEach((svg) => {
            gsap.set(svg, {
                scale: 1
            })
        })

        const svgTranslateXTl = gsap.timeline({
            scrollTrigger:{
                trigger: sectionRef.current,
                start: "top top",
                end: '25% bottom',
                scrub: true
            }
        })

        const svgTranslateYTl = gsap.timeline({
            scrollTrigger:{
                trigger: sectionRef.current,
                start: "15% top",
                end: '50% bottom',
                scrub: true
            }
        })


        const svgScaleTl = gsap.timeline({
            scrollTrigger:{
                trigger: sectionRef.current,
                start: "40% top",
                end: '75% bottom',
                scrub: true
            }
        })

        const listTl = gsap.timeline({
            scrollTrigger:{
                trigger: sectionRef.current,
                start: "65% top",
                end: 'bottom bottom',
                scrub: true
            }
        })

        listTl.to('.nav-list', {
            y: "0vh"
        })

        svgTranslateXTl.to('.svg-up', {
            xPercent: 0
        }, 0)

        svgTranslateXTl.to('.svg-down', {
            xPercent: 0
        }, 0)

        svgTranslateYTl.to('.svg-up', {
            yPercent: 100
        }, 0)

        svgTranslateYTl.to('.svg-down', {
            yPercent: -100
        }, 0)

        svgList.forEach((svg) => {
            svgScaleTl.to(svg, {
                scale: 0.5
            }, 0)
        })
    }, { scope: sectionRef })

    return(
        <section className="h-[1000dvh] relative xl:pb-40" ref={sectionRef}>
            <div className="w-full h-dvh flex flex-col sticky top-0 items-center justify-center overflow-hidden">
                <div className="flex flex-col justify-center w-full relative">                    
                    <div className="overflow-hidden w-full absolute top-0 left-0 scale-[0.5] svg svg-up -translate-y-full">
                        <svg
                            className="px-5"
                            xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 1808 316"
                        >
                            <path fill="#FFB261" d="M72.754 309.456 0 6.543h77.95l22.519 94.768c10.826 47.168 17.322 91.74 17.322 91.74s9.961-44.139 23.818-90.441l28.149-96.067h58.896l25.983 90.008c13.425 46.303 22.952 90.009 22.952 90.009s6.063-44.139 16.023-91.74l20.354-88.277h74.486l-72.754 302.913h-67.99l-51.1-170.929-51.101 170.929zM400.161 309.456V6.543h73.186v113.809h81.848V6.542h73.187v302.914h-73.187V189.589h-81.848v119.867zM807.917 315.515c-89.209 0-158.931-68.805-158.931-157.083C648.986 69.289 718.708.484 807.917.484S966.416 69.29 966.416 158.432c0 88.278-69.289 157.083-158.499 157.083m-83.579-157.083c0 49.332 36.376 87.845 83.579 87.845 46.77 0 83.147-38.513 83.147-87.845 0-49.764-36.377-88.71-83.147-88.71-47.203 0-83.579 38.946-83.579 88.71M1054.45 6.543h73.18v302.913h-73.18zM1191.35 309.456 1292.68 6.543h67.99l101.34 302.913h-78.82l-12.56-45.869h-90.07L1268 309.456zm103.5-114.241h58.03l-28.58-92.173zM1470.22 309.456V6.543h100.9l69.29 207.279 66.69-207.28H1808v302.914h-71.45V202.571c0-48.466 2.16-94.336 2.16-94.336s-11.26 44.572-25.55 90.442l-36.81 110.779h-71.45l-38.98-112.078c-14.72-45.869-26.41-90.008-26.41-90.008s2.16 45.437 2.16 93.903v108.183z">
                            </path>
                        </svg>
                    </div>
                    <div className="overflow-hidden w-full absolute top-0 left-0 scale-[0.5] svg svg-down translate-y-full">
                        <svg
                            className="px-5"
                            xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 1808 316"
                        >
                            <path fill="#FFB261" d="M72.754 309.456 0 6.543h77.95l22.519 94.768c10.826 47.168 17.322 91.74 17.322 91.74s9.961-44.139 23.818-90.441l28.149-96.067h58.896l25.983 90.008c13.425 46.303 22.952 90.009 22.952 90.009s6.063-44.139 16.023-91.74l20.354-88.277h74.486l-72.754 302.913h-67.99l-51.1-170.929-51.101 170.929zM400.161 309.456V6.543h73.186v113.809h81.848V6.542h73.187v302.914h-73.187V189.589h-81.848v119.867zM807.917 315.515c-89.209 0-158.931-68.805-158.931-157.083C648.986 69.289 718.708.484 807.917.484S966.416 69.29 966.416 158.432c0 88.278-69.289 157.083-158.499 157.083m-83.579-157.083c0 49.332 36.376 87.845 83.579 87.845 46.77 0 83.147-38.513 83.147-87.845 0-49.764-36.377-88.71-83.147-88.71-47.203 0-83.579 38.946-83.579 88.71M1054.45 6.543h73.18v302.913h-73.18zM1191.35 309.456 1292.68 6.543h67.99l101.34 302.913h-78.82l-12.56-45.869h-90.07L1268 309.456zm103.5-114.241h58.03l-28.58-92.173zM1470.22 309.456V6.543h100.9l69.29 207.279 66.69-207.28H1808v302.914h-71.45V202.571c0-48.466 2.16-94.336 2.16-94.336s-11.26 44.572-25.55 90.442l-36.81 110.779h-71.45l-38.98-112.078c-14.72-45.869-26.41-90.008-26.41-90.008s2.16 45.437 2.16 93.903v108.183z">
                            </path>
                        </svg>
                    </div>
                    <div className="overflow-hidden w-full svg svg-mid bg-neutral-950">
                        <svg
                            className="px-5"
                            xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 1808 316"
                        >
                            <path fill="#FFB261" d="M72.754 309.456 0 6.543h77.95l22.519 94.768c10.826 47.168 17.322 91.74 17.322 91.74s9.961-44.139 23.818-90.441l28.149-96.067h58.896l25.983 90.008c13.425 46.303 22.952 90.009 22.952 90.009s6.063-44.139 16.023-91.74l20.354-88.277h74.486l-72.754 302.913h-67.99l-51.1-170.929-51.101 170.929zM400.161 309.456V6.543h73.186v113.809h81.848V6.542h73.187v302.914h-73.187V189.589h-81.848v119.867zM807.917 315.515c-89.209 0-158.931-68.805-158.931-157.083C648.986 69.289 718.708.484 807.917.484S966.416 69.29 966.416 158.432c0 88.278-69.289 157.083-158.499 157.083m-83.579-157.083c0 49.332 36.376 87.845 83.579 87.845 46.77 0 83.147-38.513 83.147-87.845 0-49.764-36.377-88.71-83.147-88.71-47.203 0-83.579 38.946-83.579 88.71M1054.45 6.543h73.18v302.913h-73.18zM1191.35 309.456 1292.68 6.543h67.99l101.34 302.913h-78.82l-12.56-45.869h-90.07L1268 309.456zm103.5-114.241h58.03l-28.58-92.173zM1470.22 309.456V6.543h100.9l69.29 207.279 66.69-207.28H1808v302.914h-71.45V202.571c0-48.466 2.16-94.336 2.16-94.336s-11.26 44.572-25.55 90.442l-36.81 110.779h-71.45l-38.98-112.078c-14.72-45.869-26.41-90.008-26.41-90.008s2.16 45.437 2.16 93.903v108.183z">
                            </path>
                        </svg>                            
                    </div>
                    <div className="w-full flex justify-center absolute bottom-0 translate-y-full" >
                        <nav className="flex flex-col items-center justify-center w-full gap-2 h-full md:gap-3 lg:gap-4 nav-list">
                            {article.map((item) => (
                                <button 
                                    key={item.title} type="button" className="text-4xl md:text-5xl lg:text-5xl font-semibold cursor-pointer">
                                    <h2>
                                        {item.title}
                                    </h2>
                                </button>
                            ))}
                        </nav>
                    </div>    
                </div>                             
            </div>
        </section>
    )
}

{/* <div className="overflow-hidden">
                            <svg
                                className="p-5"
                                xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 1808 316"
                            >
                                <path fill="#FFB261" d="M72.754 309.456 0 6.543h77.95l22.519 94.768c10.826 47.168 17.322 91.74 17.322 91.74s9.961-44.139 23.818-90.441l28.149-96.067h58.896l25.983 90.008c13.425 46.303 22.952 90.009 22.952 90.009s6.063-44.139 16.023-91.74l20.354-88.277h74.486l-72.754 302.913h-67.99l-51.1-170.929-51.101 170.929zM400.161 309.456V6.543h73.186v113.809h81.848V6.542h73.187v302.914h-73.187V189.589h-81.848v119.867zM807.917 315.515c-89.209 0-158.931-68.805-158.931-157.083C648.986 69.289 718.708.484 807.917.484S966.416 69.29 966.416 158.432c0 88.278-69.289 157.083-158.499 157.083m-83.579-157.083c0 49.332 36.376 87.845 83.579 87.845 46.77 0 83.147-38.513 83.147-87.845 0-49.764-36.377-88.71-83.147-88.71-47.203 0-83.579 38.946-83.579 88.71M1054.45 6.543h73.18v302.913h-73.18zM1191.35 309.456 1292.68 6.543h67.99l101.34 302.913h-78.82l-12.56-45.869h-90.07L1268 309.456zm103.5-114.241h58.03l-28.58-92.173zM1470.22 309.456V6.543h100.9l69.29 207.279 66.69-207.28H1808v302.914h-71.45V202.571c0-48.466 2.16-94.336 2.16-94.336s-11.26 44.572-25.55 90.442l-36.81 110.779h-71.45l-38.98-112.078c-14.72-45.869-26.41-90.008-26.41-90.008s2.16 45.437 2.16 93.903v108.183z">
                                </path>
                            </svg>
                        </div> */}