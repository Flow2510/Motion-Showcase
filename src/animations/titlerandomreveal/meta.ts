const titleRandomReveal = {
    name: "title-random-reveal",
    sectionBefore: true,
    sectionAfter: true,
    id: 13,
    title: "Title Random Reveal",
    category: "Text",
    video: "/videos/title-random-reveal.mp4",
    color: "#f6ac69",
    image: "/images/title-random-reveal.png",
    sourcePath: "titlerandomreveal",
    description: "A text reveal animation where the characters of a title appear progressively in a randomized order. The effect creates an unpredictable and playful entrance while keeping the final typography clean and readable.",
    librairies: [
        "GSAP",
    ],
    html: [
        "The layout is built around a title whose characters are separated into individual elements. Wrapping each character independently makes it possible to control its visibility, opacity or position during the reveal.",
        "The characters remain inside a common text container so the final title keeps its original typography and alignment. Each character acts as an independent animation target while preserving the overall structure of the heading."
    ],
    htmlCode: "",
    javascript: [
        "The component splits the title into individual characters and prepares them for animation. The characters are collected into an array so their animation order can be randomized before the reveal starts.",
        "GSAP animates each character independently, progressively changing its opacity, position or visibility. A randomized sequence makes the title reveal in a different order instead of following the natural reading direction.",
        "Once all characters have been revealed, the animation reaches its final state and the title remains fully visible without requiring additional interaction logic."
    ],
    javascriptMethods: [
        "useEffect",
        "split",
        "map",
        "gsap"
    ],
    javascriptCode: "",
    animation: [
        "The reveal starts with the individual characters hidden or offset from their final position. They then appear one by one in a randomized order until the complete title is visible.",
        "GSAP controls the timing and easing of each character while a randomized sequence determines the order of appearance. Small variations in delay and movement give the reveal a more organic and unpredictable feel."
    ],
    animationMethods: [
        "GSAP",
        "Stagger",
        "Randomization",
    ],
    gsapCode: "",
    githubLink: "",
}

export default titleRandomReveal;