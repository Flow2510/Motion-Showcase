import { useGSAP } from '@gsap/react'
import data from '../../data/photo.json'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

export default function RotatingGallery() {
    const sectionRef = useRef<HTMLElement>(null)
    const itemslist = [...data, ...data]
    const wheelRef = useRef<HTMLDivElement>(null)
    const modalRef = useRef<HTMLButtonElement>(null)
    const cardsRef = useRef<(HTMLButtonElement | null)[]>([])
    const [activeCard, setActiveCard] = useState<number | null>(null)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const radius = activeCard === null ? Math.min(window.innerWidth * 0.3, window.innerHeight * 0.3, 250) : Math.min(window.innerWidth * 0.3, window.innerHeight * 0.3, 250) * 2

    useGSAP(() => {
        if (!sectionRef.current) return
        const total = itemslist.length
        const angleStep = (Math.PI * 2) / total

        const cards = cardsRef.current?.filter(
            (card): card is HTMLButtonElement => card !== null
        ) ?? []

        cards.forEach((card, index) => {
            const angle = index * angleStep
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            gsap.to(card, {
                x,
                y,
                duration: 0.8,
                ease: "power3.out"
            })
        })

        Draggable.create(wheelRef.current, {
            type: "rotation",
            inertia: true,

            onDrag: function () {
                gsap.set(cards, {
                    rotation: -this.rotation
                })
            },

            onThrowUpdate: function () {
                gsap.set(cards, {
                    rotation: -this.rotation
                })
            }
        })

    }, {
        scope: sectionRef,
        dependencies: [activeCard, screenWidth]
    })

    const openModal = (index: number) => {
        setActiveCard(prev => prev === index ? null : index)
        gsap.to(wheelRef.current, {
            rotation: 360,
            ease: "power3.out",
            duration:1
        })
        gsap.to(cardsRef.current, {
            rotation: -360,
            ease: "power3.out",
            duration:1
        })
    }

    const closeModal = () => {
        setActiveCard(null)
        gsap.to(wheelRef.current, {
            rotation: -360,
            ease: "power3.out",
            duration:1
        })
        gsap.to(cardsRef.current, {
            rotation: 360,
            ease: "power3.out",
            duration:1
        })
    }

    useEffect(() => {
        if (!cardsRef.current) return
        
        cardsRef.current.forEach((card) => {
            gsap.to(card, {
                opacity: () => {
                    if (activeCard === null) return 1
                    if (activeCard !== null) return 0.25
                    
                    return 1
                },
                duration: 0.25
            })
        })
        gsap.to(modalRef.current, {
            pointerEvents: activeCard === null ? "none" : "auto",
        })
    }, [activeCard])

    return(
        <section className="h-dvh w-full bg-neutral-50 flex items-center justify-center overflow-hidden relative" ref={sectionRef}>
            <div className="w-full h-full flex items-center justify-center" ref={wheelRef}>
                {itemslist.map((item, index) => (
                    <button
                        onClick={() => openModal(index)}
                        key={`${item.id}` + `${index}`}
                        ref={(el) => {
                            cardsRef.current[index] = el;
                        }}
                        className='absolute w-12 h-12 md:h-25 md:w-25 gallery-card cursor-pointer active:cursor-grabbing flex items-center justify-center z-1'
                    >
                        <div className='h-full w-full inner-card'>
                            <img src={item.img} className='h-full w-full object-cover' alt="" />
                        </div>
                    </button>
                ))}
            </div>
            <button className='fixed top-0 left-0 w-full h-dvh z-10 cursor-pointer flex items-center justify-center' ref={modalRef} onClick={closeModal}>
                {itemslist.map((item, index) => (
                    <div 
                        key={`${item.id}` + `${index}`}
                        className='absolute top-1/2 left-1/2 -translate-1/2 duration-750'
                        style={{
                            width: radius,
                            scale: index === activeCard? 1 : 0
                        }}
                    >
                        <img src={item.img} alt={item.alt} className='w-full h-full object-cover'/>
                    </div>
                    ))}
            </button>
        </section>
    )
}