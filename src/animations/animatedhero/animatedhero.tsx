import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useState } from "react"
import article from '../../data/article.json'

gsap.registerPlugin(ScrollTrigger)


export default function AnimatedHero(){
    const imageRef = useRef<HTMLDivElement>(null)
    const stickyRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const imagesContainerRef = useRef<HTMLDivElement>(null)
    const [isDesktop, ] = useState(window.innerWidth > 1024)
    const reversedArticle = [...article.slice(0, 4)].reverse()

    useGSAP(() => {
        const image = imageRef.current
        const text = textRef.current
        const container = imagesContainerRef.current

        if (!image || !text || !imagesContainerRef) return

        const imageValue = window.innerHeight * 0.5 - image.offsetHeight * 0.5
        const textValue = window.innerHeight * 0.5 - text.offsetHeight * 0.5
        const rect = image.getBoundingClientRect()
        const scaleToFillX = window.innerWidth / rect.width
        const scaleToFillY = window.innerHeight / rect.height

        // Le plus grand des deux garantit que l'image couvre TOUT l'écran, sans bande vide
        const scale = Math.max(scaleToFillX, scaleToFillY)

        gsap.set(image, {
            y: -imageValue,
            scale
        })

        gsap.set(text, {
            y: -textValue
        })

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: stickyRef.current,
                start: "50% top",
                end: "bottom bottom",
                scrub: true,
            }
        })

        tl.to(image, {
            scaleX: 1,
            scaleY: 1,
            borderRadius: 16,
        })

        const listTl = gsap.timeline({
            scrollTrigger:{
                trigger: imagesContainerRef.current,
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
            }
        })

        if (isDesktop) {
            listTl.to('.images-list-left', {
                yPercent: -40
            }, 0)

            listTl.to('.images-list-right', {
                yPercent: -50
            }, 0)

            listTl.to('.images-list-center-left', {
                yPercent: -20
            }, 0)

            listTl.to('.images-list-center-right', {
                yPercent: -10
            }, 0)

            listTl.to(text, {
                y: (container?.offsetHeight ?? 0) * 0.4
            }, 0)
        }
    })

    return(
        <section className="bg-neutral-200 text-neutral-950 flex flex-col gap-5">
            <div className="w-full h-[400dvh] relative" ref={stickyRef}>
                <div className="h-dvh w-full sticky top-0 flex items-end justify-center overflow-hidden">
                    <div className="w-50 h-50 overflow-hidden" ref={imageRef}>
                        <img src={article[1].img} className="w-full h-full object-cover block" alt="" />
                    </div>
                </div>
            </div>
            {isDesktop ? 
                <div className="grid grid-cols-[30%_40%_30%] relative w-full py-10 max-w-400 m-auto" ref={imagesContainerRef}>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="lg:p-5 flex flex-col gap-80 images-list-left items-center" >
                            {article.slice(0, 5).map((item, index) => (
                                <div key={item.title + index} className="w-full max-w-50 aspect-square overflow-hidden rounded-2xl">
                                    <img src={item.img} className="w-full h-full object-cover" alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="lg:p-5 flex flex-col gap-80 images-list-center-left">
                            {reversedArticle.map((item, index) => (
                                <div key={item.title + index} className="w-full max-w-50 aspect-square overflow-hidden rounded-2xl">
                                    <img src={item.img} className="w-full h-full object-cover" alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-5 flex flex-col gap-6 items-center h-fit" ref={textRef}>
                        <h2 className="md:text-4xl lg:text-6xl uppercase font-semibold">Title Text</h2>
                        <p className="text-center text-xl lg:text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti temporibus delectus necessitatibus fuga a id quibusdam explicabo maxime eius? Tempore quas dicta voluptates saepe, iure sequi ratione qui non.</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="lg:p-5 flex flex-col gap-80 images-list-center-right">
                            {reversedArticle.map((item, index) => (
                                <div key={item.title + index} className="w-full aspect-square overflow-hidden rounded-2xl max-w-50">
                                    <img src={item.img} className="w-full h-full object-cover" alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="lg:p-5 flex flex-col gap-80 images-list-right">
                            {article.slice(0, 5).map((item, index) => (
                                <div key={item.title + index} className="w-full aspect-square overflow-hidden rounded-2xl max-w-50">
                                    <img src={item.img} className="w-full h-full object-cover" alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            :   
            <div className="p-5 flex flex-col gap-6 items-center" ref={textRef}>
                <h2 className="text-4xl">Title Text</h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti temporibus delectus necessitatibus fuga a id quibusdam explicabo maxime eius? Tempore quas dicta voluptates saepe, iure sequi ratione qui non.</p>
            </div>
        }
        </section>
    )
}