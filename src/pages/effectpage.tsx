import { NavLink, useParams } from "react-router-dom"
import { animations } from "../animations";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { AnimationTypes } from "../types/animation";
import TextRevealHover from "../components/textrevealhover/textrevealhover";

type EffectPageProps= {
    readonly setFavoritesAnimations: React.Dispatch<React.SetStateAction<AnimationTypes[]>>;
    readonly favoritesAnimations: AnimationTypes[];
}

export default function EffectPage({setFavoritesAnimations, favoritesAnimations} : EffectPageProps) {
    const { slug } = useParams();
    const animationIndex = animations.findIndex(a => a.name === slug)
    const animation = animations[animationIndex]
    const [isDesktop, ] = useState(window.innerWidth >= 1024)
    const [activeSection, setActiveSection] = useState("overview")

    const isFavorite = favoritesAnimations.some(
        (item) => item.id === animation.id
    )

    const toggleToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        
        if (!isFavorite) {
            setFavoritesAnimations(prev => [...prev, animation])
        } else {
            setFavoritesAnimations(prev => prev.filter(item => item.id !== animation.id))
        }
    }

    if (!animation) {
        return <h2>404</h2>
    }

    useEffect(() => {
        const elements = document.querySelectorAll(".scroll-section")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: "-30% 0px -60% 0px",
            }
        )

        elements.forEach((element) => observer.observe(element))

        return () => observer.disconnect()
    }, [])

    return(
        <motion.main 
            key={'effectpage'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3 }}
            className="bg-neutral-950 w-full p-5"
        >
            <div className="flex flex-col gap-10 text-neutral-50 w-full pt-20 items-center" >
                <section className="flex justify-between w-full relative">
                    {isDesktop &&
                        <div 
                            className="w-81 flex flex-col sticky top-25 justify-end pb-5 gap-2.5"
                            style={{ height: "calc(100dvh - 100px)"}}
                        >
                            <button type="button" onClick={toggleToFavorite} className="w-8 h-8 cursor-pointer">
                                <img src={isFavorite? "/icons/heart-filled.png" : "/icons/heart.png"} className="w-full h-full brightness-[100]" alt="" />
                            </button>
                            <nav className="flex flex-col">
                                <a href="#overview" style={{ color: activeSection === "overview" ? "#fafafa" : "#a1a1a1" }}>Animation Overview</a>
                                <a href="#html" style={{ color: activeSection === "html" ? "#fafafa" : "#a1a1a1" }}>HTML Structure</a>
                                <a href="#javascript" style={{ color: activeSection === "javascript" ? "#fafafa" : "#a1a1a1" }}>JavaScript</a>
                                <a href="#logic" style={{ color: activeSection === "logic" ? "#fafafa" : "#a1a1a1" }}>Animation Logic</a>
                            </nav>
                        </div>
                    }
                    <div className="flex-1 w-full flex justify-center px-5">
                        <div className="flex flex-1 flex-col gap-10 max-w-150">
                            <div className="p-5 w-full bg-neutral-800 rounded-xl text-neutral-50 flex flex-col gap-5 scroll-section" id="overview">
                                <div className="w-full aspect-video ">
                                    <video src={animation.video} className="w-full h-full rounded-xl" autoPlay muted loop>
                                        
                                    </video>
                                </div>
                                <div className="flex flex-col  gap-5">
                                    <div className="flex items-center text-xl gap-5">
                                        <h2 className="font-semibold">{animation.title}</h2>
                                        <h2 className="text-neutral-400 font-semibold">{animation.category}</h2>
                                    </div>
                                    <p className="leading-[170%] font-medium">{animation.description}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10">
                                <h2 className="text-4xl font-semibold">How I build</h2>
                                <div className="flex flex-col gap-5 font-medium scroll-section" id="html">
                                    <h3 className="text-2xl ">HTML structure</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quos magnam consequatur eaque, ratione dignissimos saepe quibusdam sed iusto debitis ut laborum ullam illum nostrum nisi neque eum ipsam consequuntur.
                                    </p>
                                    <p>
                                        Mollitia enim fugiat debitis velit adipisci earum officiis quod, illum praesentium veniam? Nulla libero est quasi quisquam.
                                    </p>
                                    <div className="aspect-video w-full bg-neutral-800 rounded-xl flex items-center justify-center">
                                        <p>Code Here</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 font-medium scroll-section" id="javascript">
                                    <h3 className="text-2xl">Javascript</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quos magnam consequatur eaque, ratione dignissimos saepe quibusdam sed iusto debitis ut laborum ullam illum nostrum nisi neque eum ipsam consequuntur.
                                    </p>
                                    <p>
                                        Dolorem molestias ducimus vero eos nemo.
                                    </p>
                                    <p>
                                        Repellat nisi cumque, vel, voluptatum voluptas ea sequi neque maiores voluptatibus sunt fugiat provident tempore quaerat error ipsam pariatur nam.
                                    </p>
                                    <div className="aspect-video w-full bg-neutral-800 rounded-xl flex items-center justify-center">
                                        <p>Code Here</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 font-medium scroll-section" id="logic">
                                    <h3 className="text-2xl ">Animation</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quos magnam consequatur eaque, ratione dignissimos saepe quibusdam sed iusto debitis ut laborum ullam illum nostrum nisi neque eum ipsam consequuntur.
                                    </p>
                                    <p>
                                        Mollitia enim fugiat debitis velit adipisci earum officiis quod, illum praesentium veniam? Nulla libero est quasi quisquam.
                                    </p>
                                    <div className="aspect-video w-full bg-neutral-800 rounded-xl flex items-center justify-center">
                                        <p>Code Here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isDesktop &&
                        <div className="w-81 flex flex-col relative p-5 border-l border-neutral-600 text-sm pr-0">
                            <div
                                className="sticky top-30"
                                style={{ height: "calc(100dvh - 200px)"}}
                            >
                                <div className="flex flex-col justify-between h-full">
                                    <div className="flex flex-col gap-5">
                                        <h3>Methods & Librairies </h3>
                                        <div>
                                            <h4 className="text-neutral-400">Used Librairies</h4>
                                            <ul>
                                                <li>Exemple</li>
                                                <li>Exemple</li>
                                                <li>Exemple</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-neutral-400">JS Methods</h4>
                                            <ul>
                                                <li>Exemple</li>
                                                <li>Exemple</li>
                                                <li>Exemple</li>
                                                <li>Exemple</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-neutral-400">Animation Methods</h4>
                                            <ul>
                                                <li>Exemple</li>
                                                <li>Exemple</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5 text-neutral-950 w-full justify-center">
                                    <NavLink to={'/'} className="relative flex items-center justify-end gap-1.5 bg-lime-300 rounded-full px-5 h-12 cursor-pointer group font-medium tracking-tight">
                                        <TextRevealHover 
                                            text="Github"
                                        />
                                    </NavLink>
                                    <NavLink to={'demo'} type="button" className="relative flex items-center justify-end gap-1.5 bg-neutral-50 rounded-full px-5 h-12 cursor-pointer group font-medium tracking-tight">
                                        <TextRevealHover 
                                            text="Preview"
                                        />
                                    </NavLink>
                                </div>
                            </div>                            
                        </div>
                    }
                </section>
                <section className="p-5">
                    <div className="">
                        <h2 className="text-4xl">More Animations</h2>
                    </div>
                </section>
            </div>
        </motion.main>
    )
}