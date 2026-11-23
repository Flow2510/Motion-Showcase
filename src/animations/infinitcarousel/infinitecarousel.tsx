import React, { useLayoutEffect, useRef } from 'react'
import data from '../../data/photo.json'
import gsap from 'gsap'

export default function InfiniteCarousel(){
    const sectionRef=useRef<HTMLElement>(null)
    const carouselRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const groupRef = useRef<HTMLDivElement>(null)
    const cursorXPos = useRef<number | null>(null);
    const trackXPos = useRef<number | null>(null);
    const groupWidth = useRef(0);

    useLayoutEffect(() => {
        const track = trackRef.current;
        const group = groupRef.current;
        const cards = gsap.utils.toArray<HTMLElement>(".carousel-card");

        if (!track || !group) return;

        const ctx = gsap.context(() => {
            const createCarousel = () => {
                const width = group.offsetWidth;
                groupWidth.current = width;

                gsap.killTweensOf(track);

                gsap.set(track, {
                    x:0
                });

                gsap.fromTo(cards, {
                    scale: 0.8,
                    y: 50,
                    opacity:0
                },{
                    scale:1,
                    opacity:1,
                    y: 0,
                    duration: 0.3,
                    stagger: 0.1
                })

                console.log("Largeur du groupe :", group.offsetWidth);
                console.log("Largeur du viewport :", carouselRef.current?.offsetWidth);
            }

            createCarousel();

            const observer = new ResizeObserver(createCarousel)
            observer.observe(group);
            return () => observer.disconnect();
        }, track)

        return () => ctx.revert()
    }, [])

    const updateCards = () => {
        const cards = gsap.utils.toArray<HTMLElement>(
            ".carousel-card"
        );

        const viewport = carouselRef.current;

        if (!viewport) return;
    };

    const handlePointerDown = (event : React.PointerEvent) => {
        trackXPos.current = Number(gsap.getProperty(trackRef.current, "x"))
        cursorXPos.current = event.clientX
        event.currentTarget.setPointerCapture(event.pointerId);
    }

    const handlePointerMove = (event : React.PointerEvent) => {
        if (trackXPos.current === null || !trackRef.current || cursorXPos.current === null) return

        const rawX = trackXPos.current + (event.clientX - cursorXPos.current);
        const x = gsap.utils.wrap(-groupWidth.current, 0, rawX);

        gsap.set(trackRef.current, {
            x,
            duration: 0.2
        })

        updateCards();
    }

    const handleDragEnd = (event: React.PointerEvent) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
        }

        trackXPos.current = null;
        cursorXPos.current = null;
    };

    return(
        <section 
            className="carousel h-dvh w-full overflow-hidden relative" 
            ref={sectionRef}
            
        >
            <div 
                className='carousel-viewport w-full h-full flex items-center overflow-hidden perspective-distant select-none cursor-grab active:cursor-grabbing' 
                ref={carouselRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handleDragEnd}
                onPointerCancel={handleDragEnd}
            >
                <div 
                    className='carousel-track flex w-max'
                    ref={trackRef}
                >
                    <div 
                        className='carousel-group flex shrink-0 gap-6 pr-6' 
                        ref={groupRef}
                    >
                        {data.map((item) => (
                            <article
                                className='carousel-card w-[min(26vw,360px)] aspect-4/5 shrink-0 overflow-hidden transform-3d will-change-transform'
                                key={item.id}
                            >
                                <div className='h-full w-full'>
                                    <img 
                                        className='h-full w-full object-cover block pointer-events-none'
                                        src={item.img} 
                                        alt={item.alt} 
                                        draggable={false}
                                    />
                                </div>
                            </article>
                        ))}
                    </div>
                    <div 
                        className='carousel-group flex shrink-0 gap-6 pr-6' 
                        aria-hidden={true}
                    >
                        {data.map((item) => (
                            <article
                                className='carousel-card w-[min(26vw,360px)] aspect-4/5 shrink-0 overflow-hidden transform-3d will-change-transform'
                                key={item.id}
                            >
                                <div className='h-full w-full'>
                                    <img 
                                        className='h-full w-full object-cover block pointer-events-none'
                                        src={item.img} 
                                        alt={item.alt} 
                                        draggable={false}
                                    />
                                </div>
                            </article>
                        ))}
                    </div>
                    <div 
                        className='carousel-group flex shrink-0 gap-6 pr-6' 
                        aria-hidden={true}
                    >
                        {data.map((item) => (
                            <article
                                className='carousel-card w-[min(26vw,360px)] aspect-4/5 shrink-0 overflow-hidden transform-3d will-change-transform'
                                key={item.id}
                            >
                                <div className='h-full w-full'>
                                    <img 
                                        className='h-full w-full object-cover block pointer-events-none'
                                        src={item.img} 
                                        alt={item.alt} 
                                        draggable={false}
                                    />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}