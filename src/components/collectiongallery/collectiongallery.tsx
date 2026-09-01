import type { AnimationTypes } from "../../types/animation";
import CollectionCard from "../collectioncard/collectioncard";

type GalleryProps = {
    readonly selectedAnimations: AnimationTypes[]
    readonly favoritesAnimations: AnimationTypes[];
    readonly setFavoritesAnimations: React.Dispatch<React.SetStateAction<AnimationTypes[]>>;
};

export default function CollectionGallery({selectedAnimations, favoritesAnimations, setFavoritesAnimations} : GalleryProps){

    return(
        <div className="w-full flex flex-wrap gap-x-4 gap-y-12 pt-4 max-w-100 m-auto md:max-w-none">
            {selectedAnimations.map((animation) => (
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
        </div>
    )
}