import { useRef, useState } from "react"
import { animations } from "../../animations"
import CollectionGallery from "../collectiongallery/collectiongallery"
import { motion } from "framer-motion";
import type { AnimationTypes } from "../../types/animation";

type CollectionProps = {
    readonly isDesktop: boolean;
    readonly favoritesAnimations: AnimationTypes[];
    readonly setFavoritesAnimations: React.Dispatch<React.SetStateAction<AnimationTypes[]>>;
}

export default function CollectionSection({isDesktop, favoritesAnimations, setFavoritesAnimations} : CollectionProps ) {
    const isDragging = useRef(false);
    const [filter, setFilter] = useState("all")
    const selectedAnimations = filter === "all" ? animations : animations.filter(animation => animation.category === filter);
    const sortedAnimations = [...selectedAnimations].sort(
        (a, b) => b.id - a.id
    )
    const categories = [...new Set(animations.map(animation => animation.category))]

    return(
        <section className="pb-20 overflow-hidden p-5">
            <div className="">
                <div className="w-full flex items-end justify-between border-b border-neutral-50/25 py-4">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl flex flex-col">
                        <span>Discover effects</span>
                        <span>For <span className="text-[#999999]">every idea</span></span>
                    </h2>
                    <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium">{animations.length}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                        <motion.div 
                            {...(!isDesktop && {
                                drag: "x",
                                dragConstraints: { left: -400, right: 0 },
                                onDragStart: () => {
                                    isDragging.current = true;
                                },
                                onDragEnd: () => {
                                    setTimeout(() => {
                                        isDragging.current = false;
                                    }, 0);
                                },
                                onClickCapture: (e) => {
                                    if (isDragging.current) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }
                                },
                            })}
                            className="flex items-center py-4 gap-2"
                        >
                            <button
                                onClick={() => setFilter("all")}
                                type="button"
                                style={{ 
                                    background: filter === "all" ? "#fafafa" : "#171717",
                                    borderColor: filter === "all" ? "#fafafa" : "#404040",
                                    color: filter === "all" ? "#171717" : "#fafafa",
                                }}
                                className="text-sm p-3 rounded-xl cursor-pointer duration-300 flex gap-4 border items-center font-medium shrink-0"
                            >
                                <div className="flex items-center justify-center border rounded-full w-8 h-8 overflow-hidden p-2">
                                    <img 
                                        style={{ 
                                            filter: filter === "all" ? 'brightness(0)' : 'brightness(100)'
                                        }}
                                        src={"/public/icons/slash.png"} className="w-full h-full brightness-[100]" alt="" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <p>All effects</p>
                                    <p>17</p>
                                </div>
                            </button>
                            {categories.map((cat, index) => (
                                <button
                                    key={index + cat}
                                    onClick={() => setFilter(cat)}
                                    type="button"
                                    style={{ 
                                        background: filter === cat ? "#fafafa" : "#171717",
                                        borderColor: filter === cat ? "#fafafa" : "#404040",
                                        color: filter === cat ? "#171717" : "#fafafa",
                                    }}
                                    className="text-sm p-3 px-4 rounded-xl cursor-pointer duration-300 flex gap-4 border items-center font-medium shrink-0"
                                >
                                    <div className="flex items-center justify-center border rounded-full w-8 h-8 overflow-hidden p-2">
                                        <img 
                                            src={`/icons/${cat}.png`} 
                                            style={{ 
                                                filter: filter === cat ? 'brightness(0)' : 'brightness(100)'
                                            }}
                                            className="w-full h-full brightness-[100]" 
                                            alt="" 
                                        />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p>{cat}</p>
                                        <p>10</p>
                                    </div>
                                </button>
                            ))}
                        </motion.div>
                        {/* <div>  bouton fav
                            <button type="button" className="text-neutral-950 flex items-center justify-center">
                                <img src="/icons/heart.png" alt="" className="w-5 h-5 brightness-[100]" />
                            </button>
                        </div> */}
                    </div>                
            </div>
            <CollectionGallery 
                favoritesAnimations={favoritesAnimations} 
                setFavoritesAnimations={setFavoritesAnimations}
                selectedAnimations={sortedAnimations}
            />
        </section>
    )
}