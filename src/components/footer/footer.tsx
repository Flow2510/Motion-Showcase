import { NavLink } from "react-router-dom";

export default function Footer() {
    return(
        <footer className='w-full bg-neutral-950'>
            <div className='flex flex-col gap-10 bg-neutral-50 rounded-t-xl p-5'>
                <div>
                    <p className="text-[13px] font-semibold text-center uppercase">Voluptatum accusamus doloribus tenetur sed maiores iste alias laboriosam.</p>
                </div>
                <div className="text-center flex flex-col items-center gap-4">
                    <p className="text-5xl font-[Bricolage Grotesque] tracking-tight font-medium">Get ready to animate</p>
                    <NavLink to={'/collection'} className="bg-[#d3d3d3] text-neutral-950 font-medium rounded-full uppercase p-4 px-6 text-sm inline-block font-[Bricolage Grotesque] w-fit">
                        Explore collection
                    </NavLink>
                </div>
                <div className='grid grid-cols-2'>
                    <nav className='flex flex-col'>
                        <p className='font-semibold font-[Bricolage Grotesque]'>Pages</p>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/collectino'}>Collection</NavLink>
                    </nav>
                    <nav>
                        <p className='font-semibold font-[Bricolage Grotesque]'>Contact</p>
                        <a href='mailto:sendra.florian@gmail.com' target='_blank'>Feel free to email me</a>
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