import CollectionSection from "../components/collectionsection/collectionsection";

type Props = {
    readonly isDesktop: boolean;
}

export default function CollectionPage({isDesktop} : Props ) {
    return(
        <div className="bg-neutral-950 w-full">
            <main className="min-h-dvh w-full m-auto text-neutral-50 p-5 pt-40">
                <CollectionSection 
                    isDesktop={isDesktop}
                />
            </main>
        </div>
    )
}