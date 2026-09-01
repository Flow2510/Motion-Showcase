import 'swiper/css';
import 'swiper/css/effect-cards';

export default function AboutSection(){

    return(
        <section className="bg-neutral-950 text-neutral-50 px-5 py-20 ">
            <div className="max-w-200 m-auto">
                <div className="flex flex-col gap-10 items-center">
                    <h2 className="text-xl md:text-2xl flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                        <span>Built to explore Motion possibilities</span>
                    </h2>
                    <p className="text-neutral-400 text-3xl font-medium max-w-200 text-center md:text-4xl lg:text-5xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='text-neutral-50 '>Harum rerum repellat</span> similique quidem corrupti fugit, porro assumenda iste dolore minima, <span className='text-neutral-50 '>temporibus quasi nemo.</span>
                    </p>
                </div>
                <div className='w-full'>
                    
                </div>
            </div>
        </section>
    )
}