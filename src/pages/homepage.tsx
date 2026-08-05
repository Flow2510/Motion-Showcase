import Hero from "../components/hero/hero";

type Props = {
    readonly isDesktop: boolean;
}

export default function HomePage({ isDesktop } : Props) {
    return(
        <main className="">
            <Hero 
                isDesktop={isDesktop}
            />
            <section className="h-dvh w-full bg-neutral-950"></section>
        </main>
    )
}