import { NavLink } from "react-router-dom";
import TextRevealHover from "../textrevealhover/textrevealhover";

export default function Footer() {
    return(
        <footer className='w-full bg-neutral-950'>
            <div className='flex flex-col gap-10 bg-neutral-50 rounded-t-xl p-5'>
                <div>
                    <p className="text-[13px] font-semibold text-center uppercase">Voluptatum accusamus doloribus tenetur sed maiores iste alias laboriosam.</p>
                </div>
                <div className="text-center flex flex-col items-center gap-4">
                    <p className="text-5xl font-[Bricolage Grotesque] tracking-tight font-medium">Get ready to animate</p>
                    <NavLink to={'/collection'} className="relative flex items-center justify-end gap-1.5 bg-gray-300 rounded-full px-5 h-12 cursor-pointer group'">
                        <TextRevealHover 
                            text="Explore collection"
                        />
                    </NavLink>
                </div>
                <div className='grid grid-cols-2'>
                    <nav className='flex flex-col'>
                        <p className='font-semibold font-[Bricolage Grotesque]'>Pages</p>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/collectino'}>Collection</NavLink>
                    </nav>
                    <nav className='flex flex-col'>
                        <p className='font-semibold font-[Bricolage Grotesque]'>Contact</p>
                        <a href='mailto:sendra.florian@gmail.com' target='_blank'>Email me</a>
                        <a href='mailto:sendra.florian@gmail.com' target='_blank'>My portfolio</a>
                    </nav>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-[13px] uppercase font-medium'>©2026 Build With Motion/Gsap</p>
                    <p className="font-medium text-xl tracking-tight flex gap-1 items-center">
                        <span className="w-8 bg-black h-4"></span>
                        <span>Logo</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}