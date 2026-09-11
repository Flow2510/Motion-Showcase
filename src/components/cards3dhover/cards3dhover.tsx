import { NavLink } from "react-router-dom";
import { animations } from "../../animations";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function Cards3dHover(){
    const mainContainerRef = useRef<HTMLDivElement>(null)
    const containersRef = useRef<(HTMLDivElement | null)[]>([])
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    
    const randomAnimations = Array.from(
        { length: 3 },
        // eslint-disable-next-line sonarjs/pseudo-random
        () => Math.floor(Math.random() * animations.length)
    )

    useGSAP(() => {
        const cleanups: (() => void)[] = [];

        containersRef.current.forEach((container, index) => {
            const card = cardsRef.current[index];
            if (!container || !card) return;

            gsap.set(container, { perspective: 650 });

            const outerRX = gsap.quickTo(card, "rotationX", { ease: "power3" });
            const outerRY = gsap.quickTo(card, "rotationY", { ease: "power3" });

            const handlePointerMove = (e: PointerEvent) => {
                const rect = container.getBoundingClientRect();
                const relX = (e.clientX - rect.left) / rect.width;
                const relY = (e.clientY - rect.top) / rect.height;

                outerRX(gsap.utils.interpolate(15, -15, relY));
                outerRY(gsap.utils.interpolate(-15, 15, relX));
            };

            const handlePointerLeave = () => {
                outerRX(0);
                outerRY(0);
            };

            container.addEventListener("pointermove", handlePointerMove);
            container.addEventListener("pointerleave", handlePointerLeave);

            cleanups.push(() => {
                container.removeEventListener("pointermove", handlePointerMove);
                container.removeEventListener("pointerleave", handlePointerLeave);
            });
        });

        return () => {
            cleanups.forEach((cleanup) => cleanup());
        };
    }, { scope: mainContainerRef }); 

    return(
        <div className="w-full flex flex-col items-center gap-5 max-w-100 m-auto md:max-w-none text-neutral-50 px-5 pt-15 pb-20 overflow-hidden" ref={mainContainerRef}>
            <div className="flex items-center gap-4 md:gap-10 lg:gap-12 xl:gap-16 mb-8 flex-wrap justify-center">
                <div className="origin-center" ref={(el) => { containersRef.current[0] = el }}>
                    <div
                        ref={(el) => { cardsRef.current[0] = el }}
                        className="w-22 aspect-square md:w-28 lg:w-32 xl:w-48 rounded-lg rotate-[-8deg] border border-neutral-600"
                    >
                        <NavLink to={`/collection/${animations[randomAnimations[0]].name}`}>
                            <img src={animations[randomAnimations[0]].image} className="w-full h-full object-cover rounded-lg" alt="" />
                        </NavLink> 
                    </div>
                </div>

                <div className="origin-center" ref={(el) => { containersRef.current[1] = el }}>
                    <div
                        ref={(el) => { cardsRef.current[1] = el }}
                        className="w-30 aspect-square md:w-36 lg:w-40 xl:w-56 rounded-lg rotate-[5deg] border border-neutral-600"
                    >
                        <NavLink to={`/collection/${animations[randomAnimations[1]].name}`}>
                            <img src={animations[randomAnimations[1]].image} className="w-full h-full object-cover rounded-lg" alt="" />
                        </NavLink> 
                    </div>
                </div>

                <div className="origin-center" ref={(el) => { containersRef.current[2] = el }}>
                    <div
                        ref={(el) => { cardsRef.current[2] = el }}
                        className="w-18 aspect-square md:w-24 lg:w-28 xl:w-40 rounded-lg -rotate-3 border border-neutral-600"
                    >
                        <NavLink to={`/collection/${animations[randomAnimations[2]].name}`}>
                            <img src={animations[randomAnimations[2]].image} className="w-full h-full object-cover rounded-lg" alt="" />
                        </NavLink> 
                    </div>
                </div>
            </div>
        </div>
    )
}