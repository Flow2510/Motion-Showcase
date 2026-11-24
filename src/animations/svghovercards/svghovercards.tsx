import items from '../../data/photo.json'
import SvgHoverCard from './svghovercard';

export default function SvgHoverCards(){

    return(
        <section className='w-full pt-15 md:h-dvh'>
            <div className="flex flex-col w-full h-full gap-10 items-center max-w-400 m-auto p-5">
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10 md:gap-5">
                    {items.slice(0, 4).map((item) => (
                        <SvgHoverCard 
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}