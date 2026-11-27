import { NavLink } from "react-router-dom";

export default function Header() {
    return(
        <header className='fixed top-0 left-0 flex justify-between w-full px-5 py-2.5 items-center z-100 mix-blend-difference text-white'>
            <NavLink to={'/'}>
                <h1 className='text-sm font-semibold'>Sendra Florian</h1>
            </NavLink>
            <div className="flex gap-3 text-sm">
                <button
                    className="cursor-pointer"
                    type="button"
                >
                    Menu
                </button>
            </div>
      </header>
    )
}