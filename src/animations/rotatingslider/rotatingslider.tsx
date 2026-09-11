import { useEffect, useRef, useState } from 'react'
import items from '../../data/photo.json'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'motion/react'

gsap.registerPlugin(ScrollTrigger)

export default function RotatingSlider(){
    const itemsSlider = [...items, ...items]
    const sectionRef = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [containerHeight, setContainerHeight] = useState<number | null>(null)

    useEffect(() => {
        if (!containerRef.current) return

        setContainerHeight(containerRef.current.offsetHeight)
    }, [])

    useGSAP(() => {
        const cards = gsap.utils.toArray('.card')
        const container = containerRef.current

        if (!container) return

        const tl = gsap.timeline()

        gsap.set(cards, {
            visibility: "hidden",
            scale: 0.1,
            rotateZ: 90
        })

        gsap.set(container, {
            rotateZ: -90,
        })

        tl.to(cards, {
            visibility: "visible",
            stagger: 0.05
        })

        tl.to(container, {
            rotateZ: 0,
            duration: 1
        })

        tl.to(cards, {
            scale: 1,
            rotateZ: 0,
            duration: 1
        }, "<")

    }, { scope: sectionRef })

    return(
        <section ref={sectionRef} className='bg-neutral-50 text-neutral-950'>
            <div className="h-dvh w-full flex flex-col items-center justify-center overflow-hidden" >
                <div
                    ref={containerRef}
                    className=""
                >
                    <motion.div
                        className="flex flex-col w-full items-center origin-center cursor-grab active:cursor-grabbing gap-5"
                        drag="y"
                        dragConstraints={
                            containerHeight !== null
                                ? {
                                    top: -(containerHeight / 2),
                                    bottom: containerHeight / 2,
                                }
                                : undefined
                        }
                    >
                        {itemsSlider.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                style={{
                                    background: item.color,
                                    width: index % 2 ? 230 : 350,
                                    height: index % 2 ? 320 : 230,
                                }}
                                className="shrink-0 w-65 h-80 card"
                            >
                                <img
                                    src={item.img}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    alt=""
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}