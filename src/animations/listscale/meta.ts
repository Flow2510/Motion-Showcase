const listScale = {
    name: "list-scale",
    sectionBefore: true,
    sectionAfter: true,
    id: 11,
    title: "List Scale",
    category: "Scroll",
    video: "/videos/list-scale.mp4",
    color: "#d9f2b4",
    image: "/images/list-scale.png",
    sourcePath: "listscale",
    description: "A scroll-driven list animation where individual items smoothly scale as they move through the viewport. The focused item becomes more prominent while the surrounding items remain smaller, creating a clear sense of hierarchy and depth.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout is built around a vertical list of items contained inside a dedicated scrolling section. Each item follows the same structure and can contain text, images or additional content.",
        "The list items are kept as individual elements so their scale and visual properties can be controlled independently. The surrounding container provides the scroll area required for the animation."
    ],
    htmlCode: "",
    javascript: [
        "The component selects the list items and prepares them for individual scroll-based transformations. Their position within the viewport determines how much each item should scale.",
        "ScrollTrigger monitors the position of each item and updates its animation as the user scrolls. Items closer to the active area become larger while items further away return to their smaller scale.",
        "The same animation logic is applied to the complete list, making the effect reusable regardless of the number of items displayed."
    ],
    javascriptMethods: [
        "useEffect",
        "querySelectorAll",
        "gsap",
        "ScrollTrigger"
    ],
    javascriptCode: "",
    animation: [
        "The main effect comes from smoothly scaling each list item according to its position in the viewport. The currently focused item grows while the surrounding elements remain smaller, creating a subtle depth effect.",
        "The scale changes are synchronized with scrolling rather than triggered by a fixed timeline. GSAP handles the transformations while ScrollTrigger continuously updates the animation based on the item's position."
    ],
    animationMethods: [
        "GSAP",
        "ScrollTrigger",
        "Scale",
    ],
    gsapCode: "",
    githubLink: "",
}

export default listScale;