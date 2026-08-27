import { NavLink } from "react-router-dom";
import CollectionCard from "../components/collectioncard/collectioncard";
import TextRevealHover from "../components/textrevealhover/textrevealhover";
import type { AnimationTypes } from "../types/animation"
import { animations } from "../animations";

type FavoritesProps={
    readonly setFavoritesAnimations: React.Dispatch<React.SetStateAction<AnimationTypes[]>>;
    readonly favoritesAnimations: AnimationTypes[];
}

export default function FavoritesPage({ favoritesAnimations, setFavoritesAnimations } : FavoritesProps){
    return(
        <main className="pt-20">
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
            {favoritesAnimations.length !== 0?
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
                :
                <section className="w-full flex flex-col items-center gap-5 max-w-100 m-auto md:max-w-none text-neutral-50 px-5 pt-15 pb-20">
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
                </section>
            }
        </main>
    )
}