const svgHoverCard = {
    name: "svg-hover-card",
    sectionBefore: true,
    sectionAfter: true,
    id: 19,
    title: "SVG Hover Card",
    category: "Hover",
    video: "/videos/svg-hover-cards.mp4",
    color: "#cdb4db",
    image: "/images/svg-hover-cards.png",
    sourcePath: "svghovercard",
    alt: "Screenshot of the animation",
    description: "An interactive image card that reveals animated SVG strokes on hover. The strokes progressively draw themselves across the image while increasing in thickness, followed by a word-by-word title reveal that completes the interaction.",
    librairies: [
        "GSAP",
        "Framer Motion",
    ],
    html: [
        "The card contains a full-size background image with two layered SVG paths positioned over it. The paths use the card color and a contrasting white stroke to create the visual hover effect.",
        "The card title is conditionally rendered when the pointer enters the card. Each word is wrapped individually so its vertical entrance and exit can be animated independently."
    ],
    htmlCode: "",
    javascript: [
        "The component stores a reference to the card and keeps track of the hover state. When the component mounts, each SVG path is measured and its stroke dash properties are initialized so the paths start completely hidden.",
        "On mouse enter, a GSAP timeline animates every SVG path from its hidden dash offset to its full length while simultaneously increasing its stroke width. Any previous timeline is stopped before starting the new hover animation.",
        "On mouse leave, the same paths are animated back to their initial dash offset and thinner stroke width. The hover state is also reset, causing the title to leave through its Framer Motion exit animation."
    ],
    javascriptMethods: [
        "useRef",
        "useState",
        "useGSAP",
        "querySelectorAll",
        "getTotalLength",
        "gsap.timeline",
        "AnimatePresence"
    ],
    javascriptCode: "",
    animation: [
        "The SVG paths begin with their entire length hidden through stroke-dashoffset. When the card is hovered, the dashoffset animates toward zero, progressively drawing the paths across the image.",
        "At the same time, the SVG strokes become significantly thicker, transforming the thin decorative lines into a more prominent visual overlay. Two paths are animated simultaneously, with one rotated to create a layered composition.",
        "The card title appears only while hovered. Each word slides vertically into view with a small delay between words, while leaving the card reverses the sequence and hides the title again."
    ],
    animationMethods: [
        "SVG Stroke",
        "Stroke Dashoffset",
        "Stroke Width",
        "Draw",
        "Stagger",
        "TranslateY",
    ],
    gsapCode: "",
    githubLink: "",
}
export default svgHoverCard;