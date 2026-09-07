import items from '../../data/article.json'
import SvgHoverCard from './svghovercard';

export default function SvgHoverCards(){

    return(
        <section className='pb-20'>
            <div className="flex flex-col w-full gap-10 items-center max-w-400 m-auto p-5">
                <div className="w-full flex flex-col items-center gap-2">
                    <h2 className='text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl'>Svg Hover Cards</h2>
                    <p className='text-center text-neutral-400'>Move your cursor over the cards to trigger a dynamic vector stroke animation.</p>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10 md:gap-5">
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