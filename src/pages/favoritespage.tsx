import { NavLink } from "react-router-dom";
import CollectionCard from "../components/collectioncard/collectioncard";
import TextRevealHover from "../components/textrevealhover/textrevealhover";
import type { AnimationTypes } from "../types/animation"
import { motion } from "motion/react";
import Cards3dHover from "../components/cards3dhover/cards3dhover";

type FavoritesProps={
    readonly setFavoritesAnimations: React.Dispatch<React.SetStateAction<AnimationTypes[]>>;
    readonly favoritesAnimations: AnimationTypes[];
}

export default function FavoritesPage({ favoritesAnimations, setFavoritesAnimations } : FavoritesProps){

    return(
        <motion.main
            key={'favorite-page'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3 }}
            className="pt-20 flex flex-col min-h-dvh"
        >
            <section className="bg-neutral-950 text-neutral-50 p-5">
                <div className="w-full flex items-end justify-between border-b border-neutral-50/25 py-4">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl flex flex-col">
                        <span>Favorite effects</span>
                        <span>For <span className="text-[#999999]">every idea</span></span>
                    </h2>
                    {favoritesAnimations ? 
                        <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl">{favoritesAnimations.length}</p>
                    :
                        <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium">0</p>
                    }
                </div>
            </section>
            {favoritesAnimations.length === 0?
                <section className="h-dvh w-full flex justify-center items-center text-neutral-50">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col items-center gap-5">
                            <h2 className="flex gap-2 items-center">
                                <span className="h-2 w-2 bg-lime-300 rounded-full"></span>
                                <span>
                                    Nothing saved yet.
                                </span>
                            </h2>
                            <h3 className="text-5xl tracking-tight font-semibold md:text-6xl lg:text-7xl xl:text-9xl flex flex-col leading-[100%] items-center -mb-2">
                                <span>Your collection</span>
                                <span className="text-neutral-400">is empty</span>
                            </h3>
                            <div className="pt-5">
                                <NavLink to={'/collection'} className="relative text-neutral-950 flex items-center justify-end gap-1.5 bg-lime-300 rounded-full px-5 h-12 cursor-pointer group font-medium tracking-tight">
                                    <TextRevealHover
                                        text="Browse all animations"
                                    />
                                </NavLink>
                            </div>
                        </div>
                        <Cards3dHover />
                    </div>
                </section>
                :
                <section className="w-full flex flex-wrap gap-x-4 px-5 pt-15 gap-y-12 max-w-100 m-auto md:max-w-none pb-20">
                    {favoritesAnimations.map((animation) => (
                        <div
                            key={animation.name}
                            className="w-full md:w-[calc(50%-8px)] xl:w-[calc(33.333%-11px)] 2xl:w-[calc(25%-13px)] text-neutral-50"
                        >
                            <CollectionCard
                                favoritesAnimations={favoritesAnimations} 
                                setFavoritesAnimations={setFavoritesAnimations}
                                animation={animation} 
                            />
                        </div>
                    ))}
                </section>                
            }
        </motion.main>
    )
}