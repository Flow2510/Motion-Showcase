const tighteningWordLines = {
    name: "tightening-word-lines",
    sectionBefore: true,
    sectionAfter: true,
    sourcePath: "tighteningwordlines",
    id: 3,
    title: "Tightening Word Lines",
    category: "Text",
    video: "/videos/tightening-word-lines.mp4",
    color: "#a2d2ff",
    image: "/images/tightening-word-lines.png",
    description: "A text reveal animation where paragraphs are split into individual lines using SplitType, then each line is rendered through a dedicated Line component that animates it independently, creating a progressive line-by-line reveal effect for both the title and the description text.",
    librairies: [
        "split-type",
    ],
    html: [
        "Each article item is rendered inside its own container holding a hidden, invisible duplicate of the title and text used purely for measurement, plus the visible version of the content built from a title and two paragraphs.",
        "The visible title is passed directly to a single Line component, while the visible paragraphs map over an array of split line strings, rendering one Line component per line so each one can be animated on its own."
    ],
    htmlCode: "",
    javascript: [
        "On mount, a SplitType instance is created on the hidden text paragraph with the \"lines\" type, splitting the text into individual line elements purely to extract their text content.",
        "The extracted line strings are stored in React state and used to render the visible paragraph as a list of Line components, one per line, while the SplitType instance is reverted on cleanup since it's only used for measurement.",
        "The actual animation logic lives inside the Line component, which isn't included here, so the per-line reveal or tightening behavior it applies to each line can't be precisely described without its code."
    ],
    javascriptMethods: [
        "useRef",
        "useState",
        "useEffect",
        "SplitType",
    ],
    javascriptCode: "",
    animation: [
        "The title and each line of the description are handed off individually to a Line component, suggesting a line-by-line reveal where lines animate in sequence rather than the whole block appearing at once.",
        "Because the animation itself is implemented inside the Line component, which wasn't provided, the exact transform, easing or trigger used to produce the \"tightening\" effect can't be confirmed here."
    ],
    animationMethods: [
        "Line-by-line Reveal",
        "Text Splitting",
    ],
    gsapCode: "",
    githubLink: "",
}

export default tighteningWordLines;