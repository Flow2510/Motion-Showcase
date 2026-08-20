export default function TitleRandomLine({ line }: { readonly line: string }) {
    return (
        <span className="title-line">
            {line.split("").map((letter, index) => (
                <span
                    key={letter + index}
                    className="title-random-letter inline-block"
                >
                    {letter === " " ? "\u00A0" : letter}
                </span>
            ))}
        </span>
    )
}