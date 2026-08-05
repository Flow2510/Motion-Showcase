import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import Line from "./line";

type ContainerProps = {
    readonly title: string;
    readonly text: string;
}

export default function Tighteningcontainer({ title, text } : ContainerProps){
    const textRef = useRef<HTMLParagraphElement>(null)
    const titleRef = useRef<HTMLParagraphElement>(null)
    const [linesText, setLinesText] = useState<string[]>([])

    useEffect(() => {
        if (!textRef.current) return

        const split = new SplitType(textRef.current, {
            types: "lines",
        })

        if (!split.lines) return

        setLinesText(
            split.lines.map(line => line.textContent ?? "")
        )

        return () => split.revert()
    }, [])

    return(
        <div className="overflow-x-hidden">
            <div className="absolute invisible flex flex-col gap-2 p-5 max-w-">
                <h2 className="text-2xl" ref={titleRef}>
                    {title}
                </h2>
                <p className="" ref={textRef}>
                    {text}
                </p>
            </div>
            <div className="flex flex-col gap-2 p-5">
                <h2 className="text-2xl">
                    <Line 
                        line={title}
                    />
                </h2>
                <p>
                    {linesText.map((line, index) => (
                        <Line
                            key={index + line}
                            line={line}
                        />
                    ))}
                </p>
            </div>
        </div>
    )
}