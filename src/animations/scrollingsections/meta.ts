const scrollingSections = {
    name: "scrolling-sections",
    sectionAfter: true,
    sectionBefore: true,
    id: 9,
    title: "Scrolling Sections",
    category: "Scroll",
    video: "/videos/scrolling-section.mp4",
    color: "#a7c957",
    image: "/images/scrolling-sections.png",
    sourcePath: "scrollingsections",
    description: "A scroll-based section transition where each section moves into view as the user progresses through the page. The layout creates a continuous sequence of full-screen sections with smooth movement and controlled transitions between each part.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout is composed of multiple full-screen sections stacked vertically inside a main scrolling container. Each section contains its own content and visual elements while following the same structural pattern.",
        "The sections are organized to create a continuous scrolling experience. Their containers provide the necessary space for the scroll interaction while the individual sections act as animation targets."
    ],
    htmlCode: "",
    javascript: [
        "The component selects the different sections and prepares them for scroll-based animation. Each section is associated with its position in the page so the transition can be triggered at the appropriate moment.",
        "ScrollTrigger connects the movement of each section to the user's scroll position. This allows the sections to animate progressively as they enter or leave the viewport.",
        "The same animation setup is reused across the section collection, keeping the behavior consistent while allowing each section to contain different content."
    ],
    javascriptMethods: [
        "useEffect",
        "querySelectorAll",
        "gsap",
        "ScrollTrigger"
    ],
    javascriptCode: "",
    animation: [
        "Each section moves through the viewport as the user scrolls, creating smooth transitions from one full-screen block to the next. The movement can combine translations, scaling or opacity changes depending on the desired visual effect.",
        "ScrollTrigger controls the progress of the animations based on the scroll position. This keeps the transitions synchronized with the user's movement and creates a fluid scrolling sequence."
    ],
    animationMethods: [
        "GSAP",
        "ScrollTrigger",
        "CSS",
    ],
    gsapCode: "",
    githubLink: "",
}

export default scrollingSections;