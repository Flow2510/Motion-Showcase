import { useRef } from "react";
import Slider from "../components/slider/slider";
import { animations } from "../animations";
import { NavLink } from "react-router-dom";

type Props = {
    readonly isDesktop: boolean;
}

export default function HomePage({ isDesktop } : Props) {
    const mainRef = useRef<HTMLDivElement>(null)

    return(
        <main
            ref={mainRef}
            className='bg-neutral-200 flex flex-col gap-25 lg:flex-row lg:w-full lg:h-dvh lg overflow-hidden'
        >
            <section className='w-full h-full p-5 flex flex-col gap-5 lg:flex-1 justify-center z-10'>
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
                <div className="absolute bottom-5 left-5 flex gap-5">
                    <a href="/">
                        site
                    </a>
                    <a href="/">
                        github
                    </a>
                    <a href="/">
                        linkedin
                    </a>
                </div>
            </section>
            <section className='p-5 lg:flex-1 relative lg:flex lg:justify-between lg:gap-10'>
                {isDesktop? 
                    <Slider mainRef={mainRef}/>
                :
                    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-1 lg:hidden'>
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