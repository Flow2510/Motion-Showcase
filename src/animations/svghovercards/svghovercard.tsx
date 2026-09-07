import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { useRef, useState } from "react";

type CardProps = {
    readonly item: {
        id: number;
        title: string;
        img: string;
        alt: string;
        color: string;
        textcolor: string;
        description: string;
    }
}

export default function SvgHoverCard({ item }: CardProps) {
    const cardRef = useRef<HTMLElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const [isHovered, setIsHovered] = useState(false)

    useGSAP(() => {
        const card = cardRef.current;
        if (!card) return;

        const cardPaths = card.querySelectorAll(".svg-stroke path");

        cardPaths.forEach((path) => {
            const length = (path as SVGPathElement).getTotalLength();
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length
            });
        });
    }, { scope: cardRef });

    const handleMouseEnter = () => {
        const card = cardRef.current;
        if (!card) return;
        
        setIsHovered(true)

        const cardPaths = card.querySelectorAll(".svg-stroke path");

        if (tlRef.current !== null) {
            tlRef.current.kill();
        }

        tlRef.current = gsap.timeline();

        cardPaths.forEach((path) => {
            tlRef.current?.to(
                path,
                {
                    strokeDashoffset: 0,
                    attr: { "stroke-width": 700 },
                    duration: 1.5,
                    ease: "power2.out"
                },
                0
            );
        });
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;

        setIsHovered(false)
        
        const cardPaths = card.querySelectorAll(".svg-stroke path");

        if (tlRef.current !== null) {
            tlRef.current.kill();
        }
        
        tlRef.current = gsap.timeline();

        cardPaths.forEach((path) => {
            const length = (path as SVGPathElement).getTotalLength();
            tlRef.current?.to(
                path,
                {
                    strokeDashoffset: length,
                    attr: { "stroke-width": 200 },
                    duration: 1,
                    ease: "power2.out"
                },
                0
            );
        });
    };

    return(
        <article 
            ref={cardRef}
            className='w-full h-full relative overflow-hidden card-container flex flex-col justify-end cursor-pointer p-5 max-w-100 md:max-w-none m-auto aspect-1/0.75' 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='absolute inset-0'>
                <img src={item.img} className='h-full w-full object-cover' alt="" />
            </div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center svg-stroke pointer-events-none">
                <svg width="2250" height="2535" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012" 
                        stroke={`${item.color}`} 
                        strokeWidth="200"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center rotate-90 svg-stroke pointer-events-none">
                <svg width="2250" height="2535" viewBox="0 0 2250 2535" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012" 
                        stroke="#fafafa" 
                        strokeWidth="200" 
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <div className="text-neutral-50 text-4xl relative">
                <AnimatePresence>
                    {isHovered &&
                        <h3 style={{ color: item.color}} className="flex gap-2.5 font-bold">
                            {item.title.split(' ').map((word, index) => (
                                <span key={word + index} className="inline-block overflow-hidden">
                                    <motion.span 
                                        initial={{ y: '100%'}}
                                        animate={{ y: "0%", transition: { delay: 0.5 + (index * 0.1) } }}
                                        exit={{ y: "100%", transition: { delay: 0 + (index * 0.1) } }}
                                        className="inline-block">
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </h3>
                    }
                </AnimatePresence>
            </div>
        </article>
    )
}