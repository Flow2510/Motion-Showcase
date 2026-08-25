type Props = {
    readonly text: string;
}

export default function TextRevealHover({ text } : Props) {
    return (
        <span className="group relative inline-block overflow-hidden">
            <span className="block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                {text}
            </span>

            <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
                {text}
            </span>
        </span>
    )
}