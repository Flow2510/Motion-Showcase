const svgDecay = {
    name: "svg-decay",
    sectionBefore: true,
    sectionAfter: false,
    id: 10,
    title: "Svg Decay",
    category: "Scroll",
    video: "/videos/svg-decay.mp4",
    color: "#90e0ef",
    image: "/images/svg-decay.png",
    sourcePath: "svgdecay",
    description: "A scroll-driven SVG animation where a graphic progressively breaks apart or distorts as the user moves through the page. The effect transforms a clean vector shape into a fragmented composition, creating a strong visual transition.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout contains an SVG element inside a dedicated scroll section. The SVG is composed of paths or shapes that can be individually targeted and transformed during the animation.",
        "The graphic is placed inside a container that provides the required scrolling space. Its SVG elements remain structured independently so their position, scale or opacity can be modified without rebuilding the graphic."
    ],
    htmlCode: "",
    javascript: [
        "The component selects the SVG elements and prepares their initial properties before the scroll animation starts. Each path or shape can then receive its own transformation during the decay effect.",
        "ScrollTrigger synchronizes the SVG transformations with the user's scroll progress. As the section moves through the viewport, the individual elements progressively move away from their original positions.",
        "The animation uses the same setup across the SVG elements while allowing variations in movement, rotation and timing to make the decay feel organic rather than perfectly uniform."
    ],
    javascriptMethods: [
        "useEffect",
        "querySelectorAll",
        "gsap",
        "ScrollTrigger"
    ],
    javascriptCode: "",
    animation: [
        "The decay effect is created by progressively transforming the individual SVG paths or shapes. Elements can move, rotate, scale or fade away from their original position as the user scrolls.",
        "GSAP controls the transformations while ScrollTrigger links them to the scroll progress. Small variations between the elements create a fragmented and dynamic result as the original SVG gradually loses its initial form."
    ],
    animationMethods: [
        "GSAP",
        "ScrollTrigger",
        "SVG Transform",
    ],
    gsapCode: "",
    githubLink: "",
}
export default svgDecay;