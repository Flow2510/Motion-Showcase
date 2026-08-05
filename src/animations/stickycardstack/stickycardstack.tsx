import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function StickyCardStack() {
    const stickyCards = [
        {
            title: "Design minimal",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc turpis suscipit mauris, sed facilisis lorem justo vitae erat.",
            img: "",
            color: "#E07A5F",
            zIndex: "5"
        },
        {
            title: "Expérience fluide",
            text: "Praesent vel tortor vitae mauris volutpat cursus. Integer finibus, erat a convallis faucibus, libero justo tristique sapien, vitae malesuada lectus elit non risus.",
            img: "",
            color: "#3D405B",
            zIndex: "4"
        },
        {
            title: "Animations modernes",
            text: "Curabitur at dui nec lorem ultrices dictum. Vivamus at massa non ipsum ultrices posuere quis sed purus. Pellentesque habitant morbi tristique senectus.",
            img: "",
            color: "#81B29A",
            zIndex: "3"
        },
        {
            title: "Développement créatif",
            text: "Donec dignissim, augue id faucibus tincidunt, sapien turpis feugiat nibh, vel pharetra turpis ligula quis metus. Suspendisse potenti et malesuada fames ac turpis egestas.",
            img: "",
            color: "#F2CC8F",
            zIndex: "2"
        }
    ]
    
    const stickyRef = useRef(null)

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".card")

        cards.forEach((card, i) => {
            gsap.set(
                    card,
                    { 
                        scale: 1 - i * 0.1,
                    }
                )
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: stickyRef.current,
                start: "top top",
                end: () => `+=${cards.length * 1500}`,
                scrub: 1,
                pin: true,
            },
        })

        cards.forEach((card, i) => {
            if (i === cards.length - 1) return
            const nextCards = cards.slice(i + 1)

            tl.addLabel(`step-${i}`)

            tl.to(card, {
                yPercent: -200,
                rotateZ: i % 2 === 0 ? -15 : 15,
            }, `step-${i}`)

            nextCards.forEach((nextCard, index) => {
                tl.to(nextCard, {
                    scale: 1 - index * 0.1,
                }, `step-${i}`)
            })

            tl.to(card, {
                opacity: 0,
            }, `step-${i}+=1`)
        })
    })

    return(
        <section className="w-full">
            <div>
                <h2 className="text-4xl text-center flex flex-col">
                    <span className="text-neutral-500">Title Text</span>
                    <span>On 2 Lines</span>
                </h2>
            </div>
            <div className="relative w-full" ref={stickyRef}>
                <div className="h-dvh w-full flex items-center justify-center">
                    {stickyCards.map((card, i) => (
                        <article key={card.title} style={{ zIndex: card.zIndex, background: card.color }} className={`w-full h-full max-w-[70%] max-h-[70%] absolute p-5 rounded-2xl card`}>
                            
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}