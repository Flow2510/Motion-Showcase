import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import TextRevealHover from "../textrevealhover/textrevealhover";

type CardProps = {
    readonly animation: {
        component: () => React.JSX.Element;
        id: number;
        name: string;
        title: string;
        category: string;
        video: string;
        description: string;
        image: string;
    }
}

export default function CollectionCard({ animation } : CardProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [playVideo, setPlayVideo] = useState(false)
    const [isHover, setIsHover] = useState(false)
    const [isDesktop, ] = useState(window.innerWidth > 768)

    const toggleVideo = () => {
        setPlayVideo(prev => !prev)
    }

    useEffect(() => {
        if (!videoRef.current) return
        if (playVideo) {
            videoRef.current.currentTime = 0
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }, [playVideo])

    useEffect(() => {
        if (!videoRef.current || !isDesktop) return

        if (isHover) {
            setPlayVideo(true)
            videoRef.current.currentTime = 0
            videoRef.current.play()
        } else {
            setPlayVideo(false)
            videoRef.current.pause()
            videoRef.current.currentTime = 3.5
        }
    }, [isHover, isDesktop])

    return(
        <motion.article 
            onHoverStart={() => isDesktop ? setIsHover(true) : setIsHover(false)}       
            onHoverEnd={() => setIsHover(false)}      
            className="flex flex-col gap-4 cursor-pointer"
        >
            <div className="aspect-[1/0.8] w-full bg-gray-200 rounded-2xl flex items-center justify-center relative">
                <div className="duration-300 bg-neutral-950 rounded-sm aspect-video w-[80%]" style={{ scale: isHover? 1.05 : 1 }}>
                    {isHover || playVideo ?
                        <video 
                            onPlay={() => setPlayVideo(true)}
                            onPause={() => setPlayVideo(false)}
                            src={animation.video} 
                            className="w-full h-full rounded-sm object-cover" 
                            ref={videoRef}
                            muted
                            loop
                        >

                        </video>
                    :
                        <img src={animation.image} alt="" className="w-full h-full rounded-sm object-cover"/>
                    }
                </div>
                {!isDesktop && 
                    <button 
                        type="button"
                        onClick={toggleVideo}
                        className="absolute lg:hidden left-4 bottom-4 flex items-center rounded-full bg-neutral-50 px-4 py-2 text-neutral-950 text-[11px] font-semibold uppercase cursor-pointer"
                    >
                        {playVideo?
                            "Stop"
                        :
                            "Play"
                        }
                    </button>
                }
                {isDesktop && isHover &&
                    <button type="button" className="absolute right-4 top-4 text-neutral-950">
                        Fav
                    </button>
                }
                {!isDesktop && 
                    <button type="button" className="absolute right-4 top-4 text-neutral-950">
                        Fav
                    </button>
                }
            </div>
            <div className="flex justify-between w-full items-center">
                <div className="">
                    <p className="text-sm leading-[110%] flex gap-2">
                        <span>
                            {String(animation.id).padStart(3, "0")}
                        </span>
                        <span className="uppercase">
                            {animation.title}
                        </span>
                    </p>
                    <p className="text-sm uppercase leading-[110%] opacity-50">{animation.category}</p>
                </div>
                <div className="flex gap-1">
                    <NavLink to={`/collection/${animation.name}`} className={'flex items-center rounded-full bg-neutral-50 px-4 py-2 text-neutral-950 text-[11px] font-semibold uppercase group'}>
                        <TextRevealHover 
                            text="Info"
                        />
                    </NavLink>
                    <NavLink to={`/collection/${animation.name}/demo`} className={'flex items-center rounded-full bg-neutral-50 px-4 py-2 text-neutral-950 text-[11px] font-semibold uppercase group'}>
                        <TextRevealHover 
                            text="Demo"
                        />
                    </NavLink>
                </div>
            </div>
        </motion.article>
    )
}