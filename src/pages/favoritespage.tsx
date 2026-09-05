import { NavLink } from "react-router-dom";
import CollectionCard from "../components/collectioncard/collectioncard";
import TextRevealHover from "../components/textrevealhover/textrevealhover";
import type { AnimationTypes } from "../types/animation"
import { animations } from "../animations";
import { motion } from "motion/react";

type FavoritesProps={
    readonly setFavoritesAnimations: React.Dispatch<React.SetStateAction<AnimationTypes[]>>;
    readonly favoritesAnimations: AnimationTypes[];
}

export default function FavoritesPage({ favoritesAnimations, setFavoritesAnimations } : FavoritesProps){
    const randomAnimations = Array.from(
        { length: 3 },
        () => Math.floor(Math.random() * animations.length)
    )

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
                        <div className="w-full flex flex-col items-center gap-5 max-w-100 m-auto md:max-w-none text-neutral-50 px-5 pt-15 pb-20 overflow-hidden">
                            <div className="flex items-center gap-4 md:gap-10 lg:gap-12 xl:gap-16 mb-8 flex-wrap justify-center">
                                <NavLink to={`/collection/${animations[randomAnimations[0]].name}`} className="w-22 aspect-square md:w-28 lg:w-32 xl:w-48 rounded-lg rotate-[-8deg] border border-neutral-600">
                                    <img src={animations[randomAnimations[0]].image} className="w-full h-full object-cover rounded-lg" alt="" />
                                </NavLink> 
                                <NavLink to={`/collection/${animations[randomAnimations[1]].name}`} className="w-36 aspect-square md:w-40 lg:w-46 xl:w-64 rounded-lg rotate-[4deg] border border-neutral-600">
                                    <video src={animations[randomAnimations[1]].video} autoPlay muted loop className="w-full h-full object-cover rounded-lg"></video>
                                </NavLink>
                                <NavLink to={`/collection/${animations[randomAnimations[2]].name}`} className="w-22 aspect-square md:w-28 lg:w-32 xl:w-48 rounded-lg rotate-12 border border-neutral-600">
                                    <img src={animations[randomAnimations[2]].image} className="w-full h-full object-cover rounded-lg" alt="" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section className="w-full flex flex-wrap gap-x-4 px-5 pt-15 gap-y-12 max-w-100 m-auto md:max-w-none pb-20">
                    {favoritesAnimations.map((animation) => (
                        <div
                            key={animation.name}
                            className="w-full md:w-[calc(50%-8px)] xl:w-[calc(33.333%-11px)] 2xl:w-[calc(25%-13px)]"
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



{/* <section className="w-full flex flex-col items-center gap-5 max-w-100 m-auto md:max-w-none text-neutral-50 px-5 pt-15 pb-20">
                    <div className="flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-8 flex-wrap justify-center">
                        <NavLink to={`/collection/${animations[15].name}`} className="w-22 aspect-square md:w-24 lg:w-28 xl:w-32 rounded-lg rotate-[-8deg]">
                            <img src={animations[15].image} className="w-full h-full object-cover rounded-lg" alt="" />
                        </NavLink> 
                        <NavLink to={`/collection/${animations[13].name}`} className="w-28 aspect-square md:w-32 lg:w-38 xl:w-48 rounded-lg rotate-[4deg]">
                            <video src={animations[13].video} autoPlay muted className="w-full h-full object-cover rounded-lg"></video>
                        </NavLink>
                        <NavLink to={`/collection/${animations[14].name}`} className="w-22 aspect-square md:w-24 lg:w-28 xl:w-32 rounded-lg rotate-12">
                            <img src={animations[14].image} className="w-full h-full object-cover rounded-lg" alt="" />
                        </NavLink>
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                        Your collection is empty
                    </p>
                    <h2 className="text-3xl md:text-5xl font-medium">
                        Nothing saved yet.
                    </h2>
                    <p className="max-w-md text-sm text-neutral-500 text-center">
                        Discover animations and save the ones you want to keep
                        for later.
                    </p>
                    <NavLink to={'/collection'} className="relative flex items-center justify-end gap-1.5 bg-lime-300 rounded-full px-5 h-12 cursor-pointer group text-neutral-950">
                        <TextRevealHover
                            text="Collection"
                        />
                    </NavLink>
                </section> */}