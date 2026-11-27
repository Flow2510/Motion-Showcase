import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMemo, useRef } from "react";

export default function PuzzleImage(){
    const containerRef = useRef<HTMLElement | null >(null)
    const gridRef = useRef<HTMLDivElement | null>(null)

    const IMAGE_URL = "/images/sunset.webp";
    const ROWS = 5;
    const COLS = 7;

    const STARTER_CONFIG = {
        sharp: [0, 18, 33, 34],
        blurred: [9, 23]
    }

    const tiles = useMemo(() => 
        Array.from({ length: ROWS * COLS }, (_, index) => ({
            id: index,
            row: Math.floor(index/COLS),
            col: index % COLS
        })), [],
    )

    const scatter = useMemo(() => {
        return tiles.map((_, index) => {
            const isSharp = STARTER_CONFIG.sharp.includes(index);
            const isBlurred = STARTER_CONFIG.blurred.includes(index)

            if (isSharp) {
                return {
                    x: gsap.utils.random(-400, 400),
                    y: gsap.utils.random(-250, 250),
                    z: gsap.utils.random(-50, 100),
                    rotateX: gsap.utils.random(-12, 12),
                    rotateY: gsap.utils.random(-12, 12),
                    scale: gsap.utils.random(0.85, 1.05),
                    blur: 0,
                    opacity: 1,
                }
            }

            if (isBlurred) {
                return {
                    x: gsap.utils.random(-300, 300),
                    y: gsap.utils.random(-200, 200),
                    z: gsap.utils.random(-600, -300),
                    rotateX: gsap.utils.random(-20, 20),
                    rotateY: gsap.utils.random(-20, 20),
                    scale: gsap.utils.random(0.35, 0.5),
                    blur: gsap.utils.random(12, 20),
                    opacity: 0.7,
                }
            }

            return {
                x: gsap.utils.random(-900, 900),
                y: gsap.utils.random(-600, 600),
                z: gsap.utils.random(-1400, -1500),
                rotateX: gsap.utils.random(-40, 40),
                rotateY: gsap.utils.random(-40, 40),
                scale: gsap.utils.random(0.1, 0.3),
                blur: gsap.utils.random(20, 35),
                opacity: 0,
            }
        })
    }, [tiles])

    useGSAP(() => {
        if (!gridRef.current) return

        const tileElements = gridRef.current?.querySelectorAll<HTMLDivElement>(".puzzle-tile");

        gsap.set(tileElements, {
            opacity: (i) => scatter[i].opacity,
            x: (i) => scatter[i].x,
            y: (i) => scatter[i].y,
            z: (i) => scatter[i].z,
            rotateX: (i) => scatter[i].rotateX,
            rotateY: (i) => scatter[i].rotateY,
            scale: (i) => scatter[i].scale,
            filter: (i) => `blur(${scatter[i].blur}px)`,
            transformOrigin: "center center",
            willChange: "transform, filter, opacity"
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=300%",
                pin: true,
                scrub: 1.2,
                anticipatePin: 1,
            }
        });

        tl.to(tileElements, {
            x: 0,
            y: 0,
            z: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            filter: 'blur(0px)',
            opacity: 1,
            ease: "power2.inOut",
            stagger: {
                amount: 1.6,
                from: "random"
            }
        })
    }, { scope: containerRef, dependencies: [scatter]})
    
    return(
        <section
            ref={containerRef}
            className="relative h-dvh w-full flex items-center justify-center overflow-hidden bg-neutral-50"
            style={{ perspective: "1200px"}}
        >
            <div
                ref={gridRef}
                className="relative w-4/5 max-w-300 aspect-video"
                style={{ transformStyle: "preserve-3d" }}
            >
                {tiles.map((tile) => {
                    const widthPercent = 100/COLS;
                    const heightPercent = 100/ROWS;

                    return(
                        <div 
                            key={tile.id}
                            className="puzzle-tile absolute bg-zinc-900 overflow-hidden"
                            style={{
                                left: `${tile.col * widthPercent}%`,
                                top: `${tile.row * heightPercent}%`,
                                width: `calc(${widthPercent}% + 1.5px)`,
                                height: `calc(${heightPercent}% + 1.5px)`,
                                backgroundImage: `url(${IMAGE_URL})`,
                                backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
                                backgroundPosition: `${-tile.col * 100}% ${-tile.row * 100}%`,
                                outline: '1px solid transparent',
                                transformStyle: "preserve-3d",
                                backfaceVisibility: "hidden",
                            }}
                        >

                        </div>
                    )
                })}
            </div>
        </section>
    )
}