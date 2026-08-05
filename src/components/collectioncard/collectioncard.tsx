import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

type CardProps = {
    readonly animation: {
        component: () => React.JSX.Element;
        id: number;
        name: string;
        title: string;
        category: string;
        video: string;
        description: string;
    }
    readonly index: number;
}

export default function CollectionCard({ animation, index } : CardProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [playVideo, setPlayVideo] = useState(false)

    const toggleVideo = () => {
        if (!videoRef.current) return

        if (playVideo) {
            videoRef.current.pause()
        } else {
            videoRef.current.play()
        }

        setPlayVideo(!playVideo)
    }

    return(
        <article className="flex flex-col gap-4">
            <div className="aspect-square w-full bg-gray-200 rounded-2xl flex items-center justify-center relative">
                <div className="bg-neutral-950 rounded-sm aspect-video w-[80%]">
                    <video 
                        onPlay={() => setPlayVideo(true)}
                        onPause={() => setPlayVideo(false)}
                        src={animation.video} className="w-full h-full object-cover" 
                        ref={videoRef}
                        muted
                    >

                    </video>
                </div>
                <button 
                    type="button"
                    onClick={toggleVideo}
                    className="absolute left-4 bottom-4 flex items-center rounded-full bg-neutral-50 px-4 py-2 text-neutral-950 text-[11px] font-semibold uppercase cursor-pointer"
                >
                    {playVideo?
                        "Pause"
                    :
                        "Play"
                    }
                </button>
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
                <div>
                    <NavLink to={`/collection/${animation.name}`} className={'flex items-center rounded-full bg-neutral-50 px-4 py-2 text-neutral-950 text-[11px] font-semibold uppercase'}>
                        Demo
                    </NavLink>
                </div>
            </div>
        </article>
    )
}