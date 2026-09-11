import { NavLink } from "react-router-dom"
import TextRevealHover from "../textrevealhover/textrevealhover"
import Cards3dHover from "../cards3dhover/cards3dhover";

export default function NextCta(){

    return(
        <section className="min-h-dvh w-full flex justify-center items-center">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center gap-5">
                    <h2 className="flex gap-2 items-center">
                        <span className="h-2 w-2 bg-lime-300 rounded-full"></span>
                        <span>
                            What's next?
                        </span>
                    </h2>
                    <h3 className="text-5xl tracking-tight font-semibold md:text-6xl lg:text-7xl xl:text-9xl flex flex-col leading-[100%] items-center -mb-2">
                        <span>Explore more</span>
                        <span className="text-neutral-400">animations</span>
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
    )
}