import CollectionCard from "../collectioncard/collectioncard";

type GalleryProps = {
    readonly selectedAnimations: {
        component: () => React.JSX.Element;
        id: number;
        name: string;
        title: string;
        category: string;
        video: string;
        description: string;
        image: string;
    }[]
};

export default function CollectionGallery({selectedAnimations} : GalleryProps){
    return(
        <div className="w-full grid gap-y-12 pt-4 gap-x-6 max-w-100 m-auto md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] md:max-w-none">
            {selectedAnimations.map((animation) => (
                <CollectionCard 
                    key={animation.name}
                    animation={animation}
                />
            ))}
        </div>
    )
}