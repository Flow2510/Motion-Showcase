import { NavLink } from "react-router-dom"

type CardProps = {
    readonly name: string;
    readonly image: string;
}

export default function SliderCard({ name, image } : CardProps){
    return(
        <NavLink to={`/animations/${name}`} className={'h-full w-full active:cursor-grabbing'} >
            <div className={'h-full w-full'}>
                <img src={image} alt="" className={'h-full w-full object-cover'} />
            </div>
        </NavLink>
    )
}