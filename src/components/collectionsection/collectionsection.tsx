import { useState } from "react"
import { animations } from "../../animations"
import CollectionGallery from "../collectiongallery/collectiongallery"

type CollectionProps = {
    readonly isDesktop: boolean;
}

export default function CollectionSection({isDesktop} : CollectionProps ) {
    const [filtersIsOpen, setFiltersIsOpen] = useState(false)
    const [filter, ] = useState("all")
    const selectedAnimations = filter === "all" ? animations : animations.filter(animation => animation.category === filter);
    const sortedAnimations = [...selectedAnimations].sort(
        (a, b) => b.id - a.id
    )

    return(
        <section className="pb-20">
            <div className="xl:pt-20">
                <div className="w-full flex items-center justify-between border-b border-neutral-50/25 py-4">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-9xl">Collection</h2>
                    <p className="text-4xl md:text-6xl lg:text-7xl xl:text-9xl">{animations.length}</p>
                </div>
                {isDesktop ?
                    <div className="flex justify-between items-center">
                        <div className="overflow-hidden flex items-center py-4">
                            <button
                                    type="button"
                                    className="text-[11px] uppercase px-4 py-2 rounded-full bg-neutral-50 text-neutral-950 cursor-pointer">
                                    All
                                </button>
                                <button
                                    type="button"
                                    className="text-[11px] uppercase px-4 py-2 rounded-full cursor-pointer">
                                    make
                                </button>
                                <button
                                    type="button"
                                    className="text-[11px] uppercase px-4 py-2 rounded-full cursor-pointer">
                                    filter
                                </button>
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
                        {filtersIsOpen &&
                            <div className="overflow-hidden flex items-center">
                                <button
                                    type="button"
                                    className="text-[11px] uppercase px-4 py-2 rounded-full bg-neutral-50 text-neutral-950">
                                    All
                                </button>
                                <button
                                    type="button"
                                    className="text-[11px] uppercase px-4 py-2 rounded-full">
                                    make
                                </button>
                                <button
                                    type="button"
                                    className="text-[11px] uppercase px-4 py-2 rounded-full">
                                    filter
                                </button>
                            </div>
                        }
                    </div>
                }
                
            </div>
            <CollectionGallery 
                selectedAnimations={sortedAnimations}
            />
        </section>
    )
}