import { AnimatePresence } from "motion/react";
import { NavLink, useLocation } from "react-router-dom";

type MenuProps = {
    readonly toggleMenu: () => void;
    readonly menuIsOpen: boolean;
    readonly isDesktop: boolean;
}

export default function Header({ toggleMenu, menuIsOpen, isDesktop } : MenuProps ) {
    const { pathname } = useLocation();

    return(
        isDesktop ?
            <header
                className="fixed z-50 top-0 left-0 w-full"
            >
                <div className="flex justify-between p-4 items-center">
                    <div>
                        <h1 className={`duration-700 text-2xl font-semibold tracking-tighter ${pathname === "/" ? " text-neutral-950" : " text-neutral-50"}`}>
                            <NavLink to={'/'}>
                                Build With Motion/Gsap
                            </NavLink>
                        </h1>
                    </div>
                    <div >
                        <div className="relative flex items-center justify-center gap-1.5 bg-gray-200 rounded-full px-5 h-12 cursor-pointer">
                            <NavLink to={'/collection'}>
                                Collection
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        :
        <header className="fixed z-50 top-0 left-0 w-full">
            <div className="flex justify-between p-4 items-center">
                <div>
                    <h1 className={`duration-700 text-xl font-semibold tracking-tighter ${pathname === "/" ? " text-neutral-950" : " text-neutral-50"}`}>
                        <NavLink to={'/'}>
                            Build With Motion/Gsap
                        </NavLink>
                    </h1>
                </div>
                <div className="group">
                    <button type="button" className=" relative flex items-center justify-center gap-1.5 bg-gray-200 rounded-full w-12 h-12 cursor-pointer" onClick={toggleMenu}>
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
    )
}