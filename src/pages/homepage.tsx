import { useRef } from "react";
import Slider from "../components/slider/slider";
import { animations } from "../animations";
import { NavLink } from "react-router-dom";

type Props = {
    readonly isDesktop: boolean;
}

export default function HomePage({ isDesktop } : Props) {
    const sliderRef = useRef<HTMLDivElement>(null)

    return(
        <main
            className='bg-neutral-200 flex flex-col gap-25 lg:flex-row lg:w-full lg:h-dvh lg overflow-hidden'
        >
            <section className='w-full p-5 flex flex-col gap-5 pt-30 md:pt-30 lg:flex-1'>
                <h2 className='flex flex-col text-6xl font-black uppercase leading-14 font-[inter]'>
                    <span>
                        Creative
                    </span>
                    <span>
                        Playground
                    </span>            
                </h2>
                <p className='max-w-100 tracking-tight leading-5'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit dignissimos consequuntur sequi.
                </p>
                </section>
                <section className='p-5 lg:flex-1 relative lg:flex lg:justify-between lg:gap-10'>
                {isDesktop? 
                    <Slider />
                :
                    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-1 lg:hidden' ref={sliderRef}>
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