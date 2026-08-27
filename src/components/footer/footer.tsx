import { NavLink } from "react-router-dom";
import TextRevealHover from "../textrevealhover/textrevealhover";
import { useRef } from "react";
import { motion } from "motion/react";

export default function Footer() {
    const title = "Get ready to animate"
    const words = title.split (" ")
    const footerRef = useRef(null)

    return(
        <footer className='w-full bg-neutral-950 footer' ref={footerRef}>
            <div className='flex flex-col gap-10 md:gap-15 lg:gap-20 bg-neutral-50 rounded-t-xl p-5'>
                <div>
                    <p className="text-[13px] font-semibold text-center uppercase">Voluptatum accusamus doloribus tenetur sed maiores iste alias laboriosam.</p>
                </div>
                <div className="text-center flex flex-col items-center gap-6 lg:gap-10">
                    <p className="text-5xl font-[Bricolage Grotesque] tracking-tight font-semibold lg:text-7xl max-w-100 flex gap-x-2 flex-wrap leading-[115%] justify-center md:gap-x-3 lg:gap-x-4">
                        {words.map((word, index) => (
                            <span className="inline-block overflow-hidden" key={word + index}>
                                <motion.span 
                                    initial={{ y: "-100%" }}
                                    whileInView={{ y: "0%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0 + (index / 10)}}
                                    className="inline-block word"
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </p>
                    <div className="flex gap-2 lg:gap-5">
                        <NavLink to={'/collection'} className="relative flex items-center justify-end gap-1.5 bg-lime-300 rounded-full px-5 h-12 cursor-pointer group'">
                            <TextRevealHover
                                text="Contact"
                            />
                        </NavLink>
                        <NavLink to={'/collection'} className="relative flex items-center justify-end gap-1.5 bg-gray-300 rounded-full px-5 h-12 cursor-pointer group'">
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