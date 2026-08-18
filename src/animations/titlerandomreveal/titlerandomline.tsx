export default function TitleRandomLine({ line }: { line: string }) {
    return (
        <span className="title-line">
            {line.split("").map((letter, index) => (
                <span
                    key={index}
                    className="title-random-letter inline-block"
                >
                    {letter === " " ? "\u00A0" : letter}
                </span>
            ))}
        </span>
    )
}