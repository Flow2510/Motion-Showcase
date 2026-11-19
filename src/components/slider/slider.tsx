import { useEffect, useRef } from "react";
import gsap from "gsap";
import { animations } from "../../animations";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";

type SliderProps = {
    readonly mainRef: React.RefObject<HTMLDivElement | null>
}

const COPIES = 3;

export default function Slider({ mainRef } : SliderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const container = containerRef.current;

        if (!container) return
        
        const sliderItems = gsap.utils.toArray('.slider-item')
        
        gsap.fromTo(sliderItems, {
            y: 250,
            opacity: 0,
        },{
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.06,
        })
    })
  
    useEffect(() => {
        const main = mainRef.current!
        const container = containerRef.current!;
        const track = trackRef.current!;

        let setHeight = 0; // hauteur d'UNE liste
        let target = 0;    // où l'on veut aller
        let current = 0;   // où l'on est (lissé)

        // 1. Mesure (et re-mesure si la taille change / images chargées)
        const measure = () => {
            setHeight = track.offsetHeight / COPIES;
        };

        measure();

        const resizeObserver = new ResizeObserver(measure);
        resizeObserver.observe(track);

        // 2. Molette
        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            target -= e.deltaY; // scroll vers le bas => le contenu monte
        };

        // 3. Tactile
        let lastTouchY = 0;
        const onTouchStart = (e: TouchEvent) => {
            lastTouchY = e.touches[0].clientY;
        };
        const onTouchMove = (e: TouchEvent) => {
            const y = e.touches[0].clientY;
            target += (y - lastTouchY) * 2; // le doigt monte => le contenu monte
            lastTouchY = y;
        };

        main.addEventListener("wheel", onWheel, { passive: false });
        main.addEventListener("touchstart", onTouchStart, { passive: true });
        main.addEventListener("touchmove", onTouchMove, { passive: true });

        // 4. Boucle d'animation
        const tick = () => {
            const ease = 1 - Math.pow(1 - 0.1, gsap.ticker.deltaRatio());
            current += (target - current) * ease;

            // Position cyclique du slider
            const y = gsap.utils.wrap(-setHeight, 0, current);

            gsap.set(track, { y });

            // Progression sur UNE seule copie
            const progress = setHeight > 0 ? gsap.utils.wrap(0, setHeight, -current) / setHeight : 0;

            gsap.set(progressRef.current, {
                scaleY: progress,
                transformOrigin: "top",
                onUpdate: () => {
                    if (progress > 0.49) {
                        gsap.to('.second-pin .pin', {
                            scale: 1,
                            duration: 0.3
                        }),
                        gsap.to('.third-pin', {
                            borderColor: "#171717",
                            duration: 0.3
                        })
                    } else (
                        gsap.to('.second-pin .pin', {
                            scale: 0,
                            duration: 0.3
                        }),
                        gsap.to('.third-pin', {
                            borderColor: "#17171730",
                            duration: 0.3
                        })
                    )

                    if (progress > 0.98) {
                        gsap.to('.third-pin .pin', {
                            scale: 1,
                            duration: 0.3
                        }),
                        gsap.to('.third-pin', {
                            borderColor: "#171717",
                            duration: 0.3
                        })
                    } else (
                        gsap.to('.third-pin', {
                            borderColor: "#17171730",
                            duration: 0.3
                        }),
                        gsap.to('.third-pin .pin', {
                            scale: 0,
                            duration: 0.3
                        })
                    )
                }
            });
        };

        gsap.ticker.add(tick);

        // Nettoyage
        return () => {
            gsap.ticker.remove(tick);
            resizeObserver.disconnect();
            container.removeEventListener("wheel", onWheel);
            container.removeEventListener("touchstart", onTouchStart);
            container.removeEventListener("touchmove", onTouchMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed w-full top-0 left-0 h-screen overflow-hidden touch-none flex items-end"
        >
            <div 
                className="w-1/2 absolute top-0 left-1/2"
            >
                <div ref={trackRef} className="max-w-[70%] will-change-transform">
                    {Array.from({ length: COPIES }).flatMap((_, copy) =>
                        animations.map((animation, index) => (
                            <div
                                key={`${copy}-${index}`}
                                className="w-full pb-10 slider-item"
                                aria-hidden={copy > 0}
                            >
                                <NavLink to={`/animations/${animation.name}`}>
                                    <div className="w-full aspect-15/10">
                                        <img
                                            src={animation.image}
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                        {/* <video src={animation.video} className="w-full h-full object-cover" autoPlay muted loop></video> */}
                                    </div>
                                </NavLink>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="absolute top-0 right-10 h-full hidden lg:flex flex-col w-fit">
                <div className="absolute top-1/2 left-1/2 h-55 -translate-1/2 flex flex-col items-center gap-1.5 justify-center">
                    <div
                        className="h-50 w-px bg-neutral-950/30 overflow-hidden"
                    >
                        <div 
                            className="h-50 w-px bg-neutral-950" 
                            ref={progressRef} 
                            style={{ transform: "scaleY(0)", transformOrigin: "top" }}
                        >

                        </div>
                    </div>
                    <div className="flex flex-col absolute h-full justify-between">
                        <div className="border bg-neutral-200 rounded-full w-2.5 h-2.5 flex items-center justify-center">
                            <div className="w-1 h-1 bg-neutral-950 rounded-full pin"></div>
                        </div>
                        <div className="border second-pin border-neutral-950/30 bg-neutral-200 rounded-full w-2.5 h-2.5 flex items-center justify-center">
                            <div className="w-1 h-1 bg-neutral-950 scale-0 rounded-full pin"></div>
                        </div>
                        <div className="border third-pin border-neutral-950/30 bg-neutral-200 rounded-full w-2.5 h-2.5 flex items-center justify-center">
                            <div className="w-1 h-1 bg-neutral-950 scale-0 rounded-full pin"></div>
                        </div>
                    </div>
                </div>                
            </div>
            <div className="absolute bottom-5 right-5 flex flex-col items-center">
                <p className="text-xs font-semibold uppercase">Scroll</p>
                <div className="flex gap-1">
                    <span>
                        ↑
                    </span>
                    <span>
                        ↓
                    </span>
                </div>
            </div>
        </div>
    );
}