import { useEffect, useRef, useState } from 'react'
import article from '../../data/article.json'
import { useScroll, useTransform } from 'motion/react'
import { motion, useMotionValueEvent } from 'framer-motion'

export default function TickerScale() {
    const animationRef = useRef<HTMLDivElement | null>(null)
    const containerRef = useRef(null)
    const cardRef = useRef<HTMLDivElement | null>(null)

    const [animeCard, setAnimeCard] = useState(false)

    const tickerItems = [...article, ...article, ...article, ...article, ...article]
    const [showCard, setShowCard] = useState(true)

    const [position, setPosition] = useState<{
        x: number
        y: number
        width: number
        height: number
    } | null>(null)

    const { scrollYProgress : progressA } = useScroll({
        target: containerRef,
        offset: ["start end", "end 25%"]
    })
    const { scrollYProgress : progressB } = useScroll({
        target: animationRef,
        offset: ["start start", "end start"]
    })

    const step = 320 + 20
    const distanceFirstTicker = 6 * step
    const distanceSecondTicker = 4 * step

    const left = useTransform(
        progressA,
        [0, 1],
        [0, -distanceFirstTicker]
    )
    const right = useTransform(
        progressA,
        [0, 1],
        [0, distanceSecondTicker]
    )

    useEffect(() => {
        console.log(showCard)
    }, [showCard])

    useMotionValueEvent(progressB, "change", (latest) => {
        if (latest > 0 && latest < 0.01) {
            const rect = cardRef.current?.getBoundingClientRect()

            if (rect) {
            const containerRect = animationRef.current?.getBoundingClientRect()

            if (!containerRect) return

            setPosition({
                x: rect.x - containerRect.x,
                y: rect.y - containerRect.y,
                width: rect.width,
                height: rect.height,
            })
        }}
        setAnimeCard(latest > 0 && latest < 1)
        setShowCard(latest === 0)
    })

    const x = useTransform(progressB, [0, 1], [position?.x, 0])
    const y = useTransform(progressB, [0, 1], [position?.y, 0])
    const width = useTransform(progressB, [0, 1], [position?.width, window.innerWidth])
    const height = useTransform(progressB, [0, 1], [position?.height, window.innerHeight])
    const rotateZ = useTransform(progressB, [0, 1], [-1, 0])

    return(
        <section className="relative">
            <div className="w-full overflow-hidden py-10 flex flex-col gap-10" ref={containerRef}>
                <motion.div 
                    className="flex justify-center gap-5 h-50 w-full" style={{ x: left, rotateZ: -1 }}>
                    {tickerItems.map((item, index) => (
                        <div key={item.color + index} className={`h-full shrink-0 w-80`}>
                            <img src={item.img} className='h-full w-full object-cover' alt="" />
                        </div>
                    ))}
                </motion.div>
                <div className="w-full flex p-5">
                    <div className="w-[70%]">
                        <p
                            className="text-3xl max-w-160 m-auto font-semibold leading-[125%]"
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ratione asperiores alias? Ipsam at architecto voluptatem! Adipisci ipsum, molestias asperiores ullam repudiandae non eos quaerat enim et reiciendis, repellendus quae. Minus ratione asperiores alias? Ipsam at architecto voluptatem!
                        </p>
                    </div>
                    <div
                        className="w-[30%] flex flex-col gap-2"
                    >
                        <div className="h-px w-full max-w-70 bg-neutral-50"></div>
                        <p
                            className="uppercase max-w-70"
                            >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur illo ex repudiandae.
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-[300dvh] w-full overflow-hidden relative' ref={animationRef}>
                <motion.div className="flex justify-center gap-5 h-50 w-full bg-amber-100" style={{ x: right,  rotateZ: -1 }}>
                    {tickerItems.map((item, index) => (
                        <motion.div key={item.color + index} className={`h-full shrink-0 w-80 ${index}`} ref={index === 8 ? cardRef : null} style={index === 8 && !showCard && {opacity: 0} }>
                            <motion.img src={item.img} className={`h-full w-full object-cover img-${index}`} 
                                alt="" 
                            />
                        </motion.div>
                    ))}
                </motion.div>
                {animeCard &&
                    <motion.div
                        style={{
                            position: 'fixed',
                            left: x,
                            top: y,
                            width,
                            height,
                            rotateZ
                        }}
                    >
                        <img src={tickerItems[8].img} className='w-full h-full object-cover' alt="" />
                    </motion.div>
                }
            </div>
            <div>
                <div className='h-dvh w-full' style={{opacity: animeCard ? 0 : 1 }}>
                    <img src={tickerItems[8].img} alt="" className='h-full w-full object-cover'/>
                </div>
            </div>
        </section>
    )
}