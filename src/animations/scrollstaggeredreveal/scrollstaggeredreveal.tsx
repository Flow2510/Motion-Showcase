import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

type ContainerProps = {
    readonly right: boolean;
    readonly color: string;
    readonly text: string;
    readonly textColor: string;
}

export default function ScrollStaggeredReveal({ right, color, text, textColor } : ContainerProps) {
    const letters = text.split("")
    const containerRef = useRef(null)
    
    useGSAP(() => {
        if (right) {
            gsap.set(".text", {
                x: "100dvw",
            })
        } else {
            gsap.set(".text", {
                x: "-100dvw",
            })
        }

        gsap.to(".text", {
            x: "0dvw",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom bottom",
                scrub: true,
            }
        })

        const lettersArray = gsap.utils.toArray<HTMLElement>(".letter")

        lettersArray.forEach((letter, i) => {
            if (i === 0) return              
            gsap.fromTo(
                    letter,
                    { 
                        y: i % 2 === 0 ? -200 : 400
                    },
                    {
                        y: 0,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: `top+=${i * 20} center`,
                            end: `bottom+=${i * 20} bottom`,
                            scrub: true,
                        },
                    }
                )
        })
    }, {scope: containerRef})

    return(
        <div
            ref={containerRef}
            className={`h-dvh w-full flex items-center justify-center overflow-hidden relative bg-neutral-50`}            
        >
            <div className="absolute top-0 left-0 w-full h-full" style={{ background: color }}>

            </div>
            <h1 className="text-6xl lg:text-9xl font-semibold text relative" style={{ color: textColor}}>
                {letters.map((letter,i) => (
                    <span
                        key={letter + i}
                        className={`letter inline-block`}
                    >
                        {letter}
                    </span>
                ))}
            </h1>
        </div>
    )
}