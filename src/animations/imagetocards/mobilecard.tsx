import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

type CardProps = {
    readonly background: string;
    readonly shadow: string;
    readonly color: string;
    readonly icon: string;
    readonly brightness: boolean;
    readonly left: boolean;
}

export default function MobileCard({ background, shadow, color, icon, brightness, left } : CardProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const container = containerRef.current
        const card = cardRef.current
        
        if (!container) return

        gsap.set(card, {
            rotateZ: left? -50 : 50,
            opacity: 0
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 70%",
                end: "top top",
                scrub: true
            }
        })

        tl.to(card, {
            rotateZ: left ? -5 : 5,
            duration: 1,
        })

        tl.to(card, {
            opacity: 1,
            duration: 0.5
        }, "<")

    }, { scope: containerRef })

    return(
        <div className="h-dvh w-full flex items-center justify-center sticky top-0" ref={containerRef}>
            <div 
                ref={cardRef}
                className="w-60 h-90 text-neutral-950 flex flex-col justify-between rounded-2xl p-5"
                style={{ background: background, boxShadow: shadow, color: color }}
            >
                <div className="w-10 h-10">
                    <img src={icon} className="opacity-80" alt="" style={{ filter: brightness? "brightness(100)": "brightness(0)" }} />
                </div>
                <h3 className="text-3xl opacity-80 font-semibold">Title Text</h3>
                <p className="text-sm opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab explicabo, consequuntur recusandae.</p>
            </div>
        </div>
    )
}