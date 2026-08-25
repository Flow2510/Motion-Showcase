import { useEffect, useState } from "react"
import { animations } from "../../animations"
import CollectionGallery from "../collectiongallery/collectiongallery"
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";

type CollectionProps = {
    readonly isDesktop: boolean;
}

export default function CollectionSection({isDesktop} : CollectionProps ) {
    const [filtersIsOpen, setFiltersIsOpen] = useState(false)
    const [filter, setFilter] = useState("all")
    const selectedAnimations = filter === "all" ? animations : animations.filter(animation => animation.category === filter);
    const sortedAnimations = [...selectedAnimations].sort(
        (a, b) => b.id - a.id
    )
    const categories = [...new Set(animations.map(animation => animation.category))]

    useEffect(() => {
        console.log(categories)
    })

    return(
        <section className="pb-20">
            <div className="xl:pt-20">
                <div className="w-full flex items-center justify-between border-b border-neutral-50/25 py-4">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-9xl">Collection</h2>
                    <p className="text-4xl md:text-6xl lg:text-7xl xl:text-9xl">{animations.length}</p>
                </div>
                {isDesktop ?
                    <div className="flex justify-between items-center">
                        <div className="overflow-hidden flex items-center py-4 gap-2">
                            <button
                                type="button"
                                onClick={() => setFilter("all")}
                                className="text-[11px] uppercase px-4 py-2 rounded-full cursor-pointer duration-300"
                                style={{ 
                                    background: filter === "all" ? "white" : "none",
                                    color: filter === "all" ? "black" : "white",
                                }}
                            >
                                All
                            </button>
                            {categories.map((cat, index) => (
                                <button
                                    key={index + cat}
                                    onClick={() => setFilter(cat)}
                                    type="button"
                                    style={{ 
                                        background: filter === cat ? "white" : "none",
                                        color: filter === cat ? "black" : "white",
                                    }}
                                    className="text-[11px] uppercase px-4 py-2 rounded-full cursor-pointer duration-300"
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div>
                            <button
                                type="button"
                                className="text-[11px] uppercase px-4 py-2 rounded-full border flex gap-2 cursor-pointer"
                            >
                                <span>length</span>
                                <span>Fav</span>
                            </button>
                        </div>
                    </div>
                :
                    <div>
                        <div className="flex justify-between py-4">
                            <button 
                                type="button"
                                onClick={() => setFiltersIsOpen(prev => !prev)}>
                                filter
                            </button>
                            <button
                                type="button"
                            >
                                fav
                            </button>
                        </div>
                        <AnimatePresence>
                            {filtersIsOpen &&
                                <div className="overflow-hidden">
                                    <motion.div 
                                        key={'filter-menu'}
                                        initial={{ height: 0 }}
                                        animate={{ height: 69 }}
                                        exit={{ height: 0 }}
                                        className="overflow-hidden flex items-center flex-wrap gap-1">
                                        <button
                                            onClick={() => setFilter("all")}
                                            type="button"
                                            style={{ 
                                                background: filter === "all" ? "white" : "none",
                                                color: filter === "all" ? "black" : "white",
                                            }}
                                            className="text-[11px] uppercase px-4 py-2 rounded-full cursor-pointer duration-300"
                                        >
                                            All
                                        </button>
                                        {categories.map((cat, index) => (
                                            <button
                                                onClick={() => setFilter(cat)}
                                                style={{ 
                                                    background: filter === cat ? "white" : "none",
                                                    color: filter === cat ? "black" : "white",
                                                }}
                                                key={index + cat}
                                                type="button"
                                                className="text-[11px] uppercase px-4 py-2 rounded-full cursor-pointer duration-300"
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </motion.div>
                                </div>
                            }
                        </AnimatePresence>
                    </div>
                }                
            </div>
            <CollectionGallery 
                selectedAnimations={sortedAnimations}
            />
        </section>
    )
}