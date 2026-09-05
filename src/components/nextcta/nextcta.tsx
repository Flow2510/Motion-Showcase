import { NavLink } from "react-router-dom"
import TextRevealHover from "../textrevealhover/textrevealhover"
import { animations } from "../../animations"

export default function NextCta(){
    const randomAnimations = Array.from(
        { length: 3 },
        () => Math.floor(Math.random() * animations.length)
    )

    return(
        <section className="h-dvh w-full flex justify-center items-center">
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
    )
}