import { motion } from "motion/react"
import { useEffect, useState } from "react"
import article from '../../data/article.json'

export default function AccordionPanel() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)
    
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768)
        }
    
        window.addEventListener('resize', handleResize)
    
        return () => window.removeEventListener('resize', handleResize)
    })
      
    const [accordionIndex, setAccordionIndex] = useState(0)
    const accordionItems = article.slice(0, 4)

    return(
        isDesktop ? 
            <section className="h-dvh w-full p-5 flex justify-center items-center">
                <div className="w-full h-full max-w-250 m-auto max-h-[70dvh] flex items-center gap-2 text-neutral-950">
                    {accordionItems.map((item, index) => (
                        index === accordionIndex ?
                            <button 
                                key={item.id} 
                                type="button" onClick={() => setAccordionIndex(index)} 
                                className="duration-300 relative flex items-center justify-center p-5 overflow-hidden" 
                                style={{ 
                                    background: item.color, 
                                    color: item.textcolor,
                                    borderRadius: 20,
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <div className="h-full w-full flex flex-col text-left justify-between">
                                    <div className="relative">
                                        <h2 className="text-8xl max-w-130">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <div className="w-full h-full max-h-[50%] grid grid-cols-2 gap-8">
                                        <div className="w-full h-full">
                                            <img alt="" src={item.img} className="h-full w-full bg-white object-cover rounded-lg" loading="lazy"/>
                                        </div>
                                        <p className="">{item.description}</p>
                                    </div>
                                </div>
                            </button>
                        :
                            <button 
                                key={item.id} 
                                type="button" onClick={() => setAccordionIndex(index)} 
                                className="duration-300 relative cursor-pointer"
                                style={{ 
                                    background: item.color,
                                    color: item.textcolor,
                                    borderRadius: 80,
                                    width: 100,
                                    height: "90%",
                                }}
                            >
                                <div className="absolute text-nowrap origin-center w-fit h-fit flex items-center justify-center -rotate-z-90 top-[50%] left-[50%] translate-[-50%] font-semibold text-2xl">
                                    <motion.h2                                        
                                    >{item.title}</motion.h2>
                                </div>
                            </button>
                    ))}
                </div>
            </section>
        :
        <section className="h-dvh bg-neutral-950 w-full p-5 flex">
            <div className="w-full h-full flex flex-col items-center gap-1 pt-12 max-w-150 m-auto">
                {accordionItems.map((item, index) => (
                    index === accordionIndex ?
                    <button 
                        type="button" 
                        key={item.id} 
                        className={`relative text-neutral-950 duration-300 cursor-pointer overflow-hidden flex items-center justify-center p-5`} 
                        onClick={() => setAccordionIndex(index)} 
                        style={{ 
                            background: item.color, 
                            color: item.textcolor,
                            borderRadius: 20,
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <div className="w-full h-full flex flex-col gap-2">
                            <h2 className="font-semibold text-4xl">{item.title}</h2>
                            <div className="-w-full h-full">
                                <img src={item.img} alt="" className="w-full h-full object-cover bg-white rounded-lg"/>
                            </div>
                            <div>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </button>
                    :
                    <button 
                        type="button" 
                        key={item.id} 
                        className={`relative text-neutral-950 duration-300 cursor-pointer overflow-hidden flex items-center justify-center`} 
                        onClick={() => setAccordionIndex(index)} 
                        style={{ 
                            background: item.color, 
                            color: item.textcolor,
                            borderRadius: 80,
                            width: "90%",
                            height: 80,
                        }}
                    >
                        <div className="">
                            <h2 className="font-semibold">{item.title}</h2>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    )
}