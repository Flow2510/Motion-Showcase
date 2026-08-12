import { useEffect, useRef, useState } from "react"
import SplitType from "split-type"
import Line from "./line"

export default function ColorStaggerReveal() {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quidem nemo veritatis labore pariatur minus sed cupiditate deleniti exercitationem adipisci commodi rem tenetur harum, doloremque, natus quae dolorem obcaecati!"
    const textRef= useRef(null)
    const [lines, setLines] = useState<HTMLElement[]>([])

    useEffect(() => {
        if (!textRef.current) return

        const split = new SplitType(textRef.current, {
            types: "lines",
        })

        setLines(split.lines as HTMLElement[])

        return () => {
            split.revert()
        }
    }, [])

    return (
        <div className="w-full relative">
            <p className="absolute invisible w-full pointer-events-none" ref={textRef}>
                {text}
            </p>
            <p>
                {lines.map((line, index) => (
                   <Line 
                        key={index}
                        line={line}
                   />
                ))}
            </p>
        </div>
    )
}