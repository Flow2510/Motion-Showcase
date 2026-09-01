import { motion } from "motion/react";
import CollectionSection from "../components/collectionsection/collectionsection";
import type { AnimationTypes } from "../types/animation";

type Props = {
    readonly isDesktop: boolean;
    readonly favoritesAnimations: AnimationTypes[];
    readonly setFavoritesAnimations: React.Dispatch<React.SetStateAction<AnimationTypes[]>>;
}

export default function CollectionPage({isDesktop, favoritesAnimations, setFavoritesAnimations} : Props ) {
    return(
        <motion.main 
            key={'Collectionpage'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3 }}
            className="bg-neutral-950 w-full"
        >
            <main className="min-h-dvh w-full m-auto text-neutral-50 pt-40">
                <CollectionSection
                    favoritesAnimations={favoritesAnimations} 
                    setFavoritesAnimations={setFavoritesAnimations}
                    isDesktop={isDesktop}
                />
            </main>
        </motion.main>
    )
}