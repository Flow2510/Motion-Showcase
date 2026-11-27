import { animations } from "../animations";
import { NavLink } from "react-router-dom";
import Slider from "../components/slider/slider";
import Gallery from "../components/gallery/gallery";

type Props = {
    readonly isDesktop: boolean;
    readonly displayMode: 'grid' | 'slider';
    readonly setDisplayMode: React.Dispatch<React.SetStateAction<"grid" | "slider">>
}

export default function HomePage({ isDesktop, displayMode, setDisplayMode } : Props) {

    return(
        <main
            className='bg-neutral-200 flex flex-col gap-25 lg:flex-row lg:w-full lg:h-dvh lg overflow-hidden'
        >
            <section className='w-full h-full p-5 flex flex-col gap-5 justify-center lg:w-[40%]'>
                <div className='w-full flex flex-col gap-5 pt-20 lg:pt-0'>
                    <p className="uppercase font-semibold">
                        Motion & Interactive
                    </p>
                    <h2 className='flex flex-col text-4xl md:text-6xl lg:text-7xl xl:text-[85px] font-black uppercase leading-n font-[inter]'>
                        <span>
                            Creative
                        </span>
                        <span>
                            Playground
                        </span>            
                    </h2>
                    <p className='max-w-100 tracking-tight leading-5'>
                        Explore a world of motion, where creativity meets interaction. 
                        Discover fluid animations, playful transitions and unique digital experiences 
                        designed to bring ideas to life.
                    </p>
                    <div className="flex gap-5">
                        <button className="border rounded-md px-3.5 py-2 uppercase text-xs font-bold flex gap-2.5 items-center cursor-pointer">
                            <span>
                                Link or button
                            </span>
                            <span>
                                →
                            </span>
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-5 left-5 hidden gap-5 lg:flex">
                    <a href="/">
                        <img src="/icons/logo.jpg" className="w-6 h-6 rounded-[3px]" alt="" aria-label="Go to my website"/>
                    </a>
                    <a href="/">
                        <img src="/icons/square-github-brands-solid.png" className="w-6 h-6" alt="" aria-label="Go to my Github profil"/>
                    </a>
                    <a href="/">
                        <img src="/icons/square-linkedin-brands-solid.png" className="w-6 h-6" alt="" aria-label="Go to my Linkedin profil"/>
                    </a>
                </div>
            </section>
            <section className='lg:flex-1 relative lg:flex lg:justify-between lg:gap-10 lg:w-[60%]'>
                {isDesktop? 
                    <div className="h-full w-full">
                        {displayMode === 'grid' ?
                            <Gallery />
                        :
                            <Slider />
                        }
                        <div className="absolute bottom-5 right-5 flex gap-5">
                            <button 
                                className="flex flex-col gap-0.5 h-5 w-5 cursor-pointer duration-300" 
                                onClick={() => setDisplayMode("slider")} 
                                aria-label="Switch to slider view"
                                style={{
                                    opacity: displayMode === "slider"? 1 : 0.5
                                }}
                            >
                                <div className="h-full w-full bg-neutral-950">

                                </div>
                                <div className="h-full w-full bg-neutral-950">

                                </div>
                                <div className="h-full w-full bg-neutral-950">

                                </div>
                            </button>
                            <button 
                                className="h-5 w-5 relative grid-cols-3 grid grid-rows-3 gap-px cursor-pointer duration-300" 
                                onClick={() => setDisplayMode("grid")} 
                                aria-label="Switch to grid view"
                                style={{
                                    opacity: displayMode === "grid"? 1 : 0.5
                                }}
                            >
                                <div className="h-full w-full bg-neutral-950 col-2 row-1">
                                
                                </div>
                                <div className="h-full w-full bg-neutral-950 col-1 row-2">

                                </div>
                                <div className="h-full w-full bg-neutral-950 col-2 row-3">

                                </div>
                                <div className="h-full w-full bg-neutral-950 col-3 row-2">

                                </div>
                            </button>
                        </div>
                    </div>
                :
                    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-1 lg:hidden p-5 pt-0'>
                        {animations.map((animation, index) => (                        
                            <NavLink to={`/animations/${animation.name}`} key={animation.id + `${index}`} className='w-full slider-item'>
                                <div className='w-full aspect-1.5/1'>
                                    <img src={animation.image} className='w-full h-full object-cover' alt="" />
                                </div>
                                <div className='lg:hidden'>
                                    <h3 className='py-2.5 md:py-5 font-semibold'>
                                    {animation.title}
                                    </h3>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                }
            </section>
        </main>
    )
}