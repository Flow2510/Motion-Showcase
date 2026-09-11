import { useRef } from 'react'
import items from '../../data/article.json'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LandingPageReveal(){
    const loadingSectionRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const angle = [
        -10, -5, 0, 5, 10
    ]

    useGSAP(() => {
        const loadingSection = loadingSectionRef.current
        const container = containerRef.current
        const images = gsap.utils.toArray<HTMLElement>(".image")
        const letters = gsap.utils.toArray('.letter')

        if (!container && !loadingSection) return

        gsap.set(images, {
            scale: 0,
        })

        gsap.set('.landing-title', {
            opacity: 0
        })

        gsap.set('.landing-page', {
            yPercent: 100
        })

        gsap.set(letters, {
            yPercent: 100
        })

        const tl = gsap.timeline()

        const shuffled = gsap.utils.shuffle(letters)

        tl.to(shuffled, {
            yPercent: 0,
            stagger: 0.1
        }, 0)

        images.forEach((img, index) => {
            tl.to(img, {
                scale: 1,
                duration: 0.3,
            }, index === 0 ? 0 : ">")

            tl.to(img, {
                rotateZ: angle[index],
                duration: 0.3
            }, "<")
        })

        tl.to({}, {
            duration: Math.max(0, 3.5 - tl.duration())
        })

        const reversed = images.toReversed()

        tl.to(
            reversed,
            {
                scale: 0,
                rotate: 0,
                duration: 0.3,
                stagger: 0.3,
            }
        )

        tl.to(
            shuffled,
            {
                yPercent: -100,
                duration: 0.5,
                stagger: 0.1,
            },
            "<"
        )

        tl.to('.landing-page', {
            yPercent: 0,
            duration: 0.5,
            ease: "power1.inOut"
        })

        tl.to('.landing-title', {
            opacity: 1
        })

    }, {scope: containerRef})

    return(
        <section className="relative h-[200dvh]" ref={containerRef}>
            <div className="sticky top-0 h-dvh w-full">
                <div className='h-full w-full flex flex-col items-center justify-center' ref={loadingSectionRef}>
                    <div className='absolute w-full h-full top-0 left-0 flex items-center justify-center '>
                        {items.map((item) => (
                            <div className='h-60 w-45 md:h-65 md:w-50 lg:h-70 lg:w-55 xl:h-75 xl:w-60 absolute image' key={item.id} style={{ background : item.color}}>
                                <img src={item.img} className='w-full h-full object-cover' alt="" />
                            </div>
                        ))}
                    </div>
                    <div className='flex items-start gap-1 relative text-white mix-blend-difference'>
                        <h2 className='text-4xl md:text-6xl lg:text-8xl xl:text-9xl uppercase font-bold'>
                            {'Brand Name'.split("").map((letter, index) => (
                                <span key={letter + index} className='inline-block overflow-hidden'>
                                    <span className='letter inline-block'>
                                        {letter === ' ' ? '\u00A0' : letter}
                                    </span>
                                </span>
                            ))}
                        </h2>
                    </div>
                    <div className='absolute top-0 left-0  w-full h-full flex items-center justify-center landing-page bg-neutral-50 text-neutral-950'>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold landing-title text-center flex flex-col'>
                            <span>Landing Page</span>
                            <span>Reveal</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}