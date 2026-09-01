import { NavLink } from "react-router-dom";
import TextRevealHover from "../textrevealhover/textrevealhover";

export default function Cta() {
    return(
        <section className="w-full relative text-neutral-50 py-20 md:py-25 lg:py-30">
            <div className="flex flex-col items-center gap-10 p-5">
                <h2 className="text-xl md:text-2xl flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                    <span>A playground for motion</span>
                </h2>
                <p className="text-neutral-400 text-3xl font-medium max-w-200 text-center md:text-4xl lg:text-5xl">
                    Explore a collection of <span className="text-neutral-50">motion experiments</span> designed to explore how movement, timing, and interaction can <span className="text-neutral-50">transform</span> the way a digital experience feels.                        
                </p>
                <p className="max-w-180 text-center">
                    This is a space for experimenting with transitions, interactions, and small details that shape the way a digital experience feels. Browse the collection, find something that catches your eye, and take it wherever you want.
                </p>
                <NavLink
                    to="/collection"
                    className="relative flex items-center justify-end gap-1.5 bg-lime-300 text-neutral-950 rounded-full px-5 h-12 cursor-pointer group font-medium tracking-tight"
                >
                    <TextRevealHover text="Explore collection" />
                </NavLink>
            </div>
        </section>
    )
}