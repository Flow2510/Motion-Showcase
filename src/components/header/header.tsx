import { AnimatePresence } from "motion/react";
import { NavLink } from "react-router-dom";
import TextRevealHover from "../textrevealhover/textrevealhover";

type MenuProps = {
    readonly toggleMenu: () => void;
    readonly menuIsOpen: boolean;
    readonly isDesktop: boolean;
}

export default function Header({ toggleMenu, menuIsOpen, isDesktop } : MenuProps ) {
    return(
        <>
            <h1 className="fixed z-51 top-5 md:top-5.5 left-4 duration-700 text-2xl font-medium tracking-tight text-white mix-blend-difference">
                <NavLink to={'/'} className={'hover:cursor-pointer'}>
                    <TextRevealHover 
                        text="The Motion Library"
                    />
                </NavLink>
            </h1>
            {isDesktop ?
                <header className="fixed z-50 top-0 left-0 w-full">
                    <div className="flex justify-end p-4 items-center">
                        <div className=" flex gap-2">
                            <NavLink to={'/favorites'} className="relative flex items-center justify-center p-2 gap-1.5 bg-lime-300 rounded-full w-12 h-12 cursor-pointer font-medium tracking-tight">
                                <img src="/icons/heart-filled.png" className="brightness-[0]" alt="" />
                            </NavLink>
                            <NavLink to={'/collection'} className={'relative flex items-center justify-end gap-1.5 bg-gray-200 rounded-full px-5 h-12 cursor-pointer group font-medium tracking-tight'}>
                                <TextRevealHover 
                                    text="Collection"
                                />
                            </NavLink>                            
                        </div>
                    </div>
                </header>
            :
                <header className="fixed z-50 top-0 left-0 w-full">
                    <div className="flex justify-end p-4 items-center gap-2">
                        <div>
                            <NavLink to={'/favorites'} className="relative flex items-center justify-center p-2 gap-1.5 bg-lime-300 rounded-full w-10 h-10 cursor-pointer">
                                <img src="/icons/heart-filled.png" className="brightness-[0]" alt="" />
                            </NavLink>
                        </div>
                        <div className="group">
                            <button type="button" className="relative flex items-center justify-center gap-1.5 bg-gray-200 rounded-full w-10 h-10 cursor-pointer" onClick={toggleMenu}>
                                <AnimatePresence>
                                    {menuIsOpen ?
                                        <div className="relative size-5">
                                            <div className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 rotate-45 bg-neutral-950 duration-300" />
                                            <div className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 -rotate-45 bg-neutral-950 duration-300" />
                                        </div>
                                    :
                                        <div className="flex flex-col gap-1.5 absolute items-end">
                                            <div className="duration-300 h-px w-5 bg-neutral-950"></div>
                                            <div className="duration-300 h-px w-3 bg-neutral-950 group-hover:w-5 group-active:w-5"></div>
                                        </div>
                                    }
                                </AnimatePresence>
                            </button>
                        </div>                        
                    </div>
                </header>
            }
        </>
    )
}