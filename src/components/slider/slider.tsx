import { useEffect, useRef } from "react";
import gsap from "gsap";
import { animations } from "../../animations";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";

const COPIES = 3;

export default function Slider() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

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

        container.addEventListener("wheel", onWheel, { passive: false });
        container.addEventListener("touchstart", onTouchStart, { passive: true });
        container.addEventListener("touchmove", onTouchMove, { passive: true });

        // 4. Boucle d'animation
        const tick = () => {
            // lerp indépendant du framerate (écrans 60/120/144 Hz)
            const ease = 1 - Math.pow(1 - 0.1, gsap.ticker.deltaRatio());
            current += (target - current) * ease;

            // ramène current dans [-setHeight, 0] => boucle infinie
            const y = gsap.utils.wrap(-setHeight, 0, current);
            gsap.set(track, { y });
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
                                    </div>
                                </NavLink>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}