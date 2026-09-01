import { NavLink } from "react-router-dom";
import TextRevealHover from "../textrevealhover/textrevealhover";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Footer() {
    const title = "Get ready to animate"
    const letters = title.split ("")
    const footerRef = useRef<HTMLElement>(null)
    const textRef = useRef<HTMLParagraphElement>(null)

    useGSAP(() => {
        const initialLetter = gsap.utils.toArray<HTMLSpanElement>('.initial-letter')
        const revealLetter = gsap.utils.toArray<HTMLSpanElement>('.reveal-letter')
        const text = textRef.current

        
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: text,
                start: "bottom bottom"
            }
        })

        initialLetter.forEach((letter, index) => {
            const randomDelay = gsap.utils.random(0.1, 2)

            tl.to(letter, {
                yPercent: -100,
                duration: 0.3
            }, 0 + randomDelay)

            tl.to(revealLetter[index], {
                yPercent: -100,
                duration: 0.3
            }, randomDelay)
        })
    }, { scope: footerRef })

    return(
        <footer className='w-full bg-neutral-950 footer p-1' ref={footerRef}>
            <div className='flex flex-col gap-10 md:gap-15 lg:gap-20 bg-neutral-50 rounded-xl p-5'>
                <div>
                    <p className="text-[13px] font-semibold text-center uppercase">Voluptatum accusamus doloribus tenetur sed maiores iste alias laboriosam.</p>
                </div>
                <div className="text-center flex flex-col items-center gap-6 lg:gap-10">
                    <p className="text-5xl font-[Bricolage Grotesque] tracking-tight font-semibold lg:text-7xl max-w-100 flex-wrap leading-[115%]" ref={textRef}>
                        {letters.map((letter, index) => (
                            <span className="inline-block overflow-hidden relative" key={letter + index}>
                                <span 
                                    className="inline-block initial-letter"
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                                <span className="absolute top-0 left-0 translate-y-full reveal-letter">
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                            </span>
                        ))}
                    </p>
                    <div className="flex gap-2 lg:gap-5">
                        <NavLink to={'/collection'} className="relative flex items-center justify-end gap-1.5 bg-lime-300 rounded-full px-5 h-12 cursor-pointer group font-medium tracking-tight">
                            <TextRevealHover
                                text="Contact"
                            />
                        </NavLink>
                        <NavLink to={'/collection'} className="relative flex items-center justify-end gap-1.5 bg-gray-300 rounded-full px-5 h-12 cursor-pointer group font-medium tracking-tight">
                            <TextRevealHover
                                text="Explore collection"
                            />
                        </NavLink>
                    </div>
                </div>
                <div className='flex justify-between items-center relative'>
                    <div>
                        <p className='text-[13px] uppercase font-medium'>©2026 Build With Motion/Gsap</p>
                    </div>
                    <div>
                        <a href={'https://www.google.com'} target="_blank">
                            <div className="text-xl tracking-tight flex gap-1 items-center justify-center font-bold">
                                <div className="w-8 h-8 bg-black">
                                    <img src="/public/icons/logo.jpg" className="w-full h-full object-cover" style={{ filter: 'invert(100)'}} alt="" />
                                </div>                       
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}