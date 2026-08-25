type EffectCardProps = {
    readonly animation: {
        component: () => React.JSX.Element;
        id: number;
        name: string;
        title: string;
        category: string;
        video: string;
        description: string;
        color: string;
    }
}

export default function EffectCard({ animation } : EffectCardProps) {
    return(
        <article className="w-full p-6 bg-[#232323] rounded-2xl flex flex-col gap-4">
            <div className="w-full aspect-video overflow-hidden rounded-lg">
                <video className="w-full h-full object-cover" style={{ background: animation.color}} autoPlay muted src={animation.video}>

                </video>
            </div>
            <div className="text-lg flex flex-col gap-4 font-medium">
                <h2 className="flex gap-2">
                    <span>{String(animation.id).padStart(3, "0")}</span>
                    <span className="text-[#999999] inline-block">{animation.title}</span>
                </h2>
                <p>
                    {animation.description}
                </p>
            </div>
        </article>
    )
}