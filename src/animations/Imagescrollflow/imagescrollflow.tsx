import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { animations } from "..";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ImageScrollFlow(){
    const [isDesktop, ] = useState(window.innerWidth > 768)
    const containerRef = useRef(null)
    const items = [...animations, ...animations, ...animations, ...animations]

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom 99%",
                scrub: true,
            },
        });

        tl.fromTo(
            ".image",
            {
                y: 0,
                zIndex: () => gsap.utils.random(1, 9),
                scale: 0
            },
            {
                x: () => isDesktop ? -window.innerWidth + 200 : -window.innerWidth + 100,
                keyframes: [
                    {   
                        scale: 1,
                        y: () => isDesktop? gsap.utils.random(-250, 150) : gsap.utils.random(-100, 100),
                    },
                    {
                        scale: 0,
                        y: 0,
                    },
                ],
                stagger: isDesktop ? 0.25 : 0.3,
                duration: 3,
                ease: "none",
            }
        );
    }, { scope: containerRef });

    return(
        <section className="w-full h-[600dvh]" ref={containerRef}>
                <div className="sticky top-0 w-full h-dvh flex items-center justify-center overflow-hidden">
                    {items.map((item, index) => (
                        <div className="image absolute w-25 h-20 md:w-50 md:h-50 right-0" key={item.name + index}>
                            <img src="" alt="" className="w-full h-full" style={{ background: item.color}}/>
                        </div>
                    ))}
            </div>
        </section>
    )
}