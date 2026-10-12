const diaporamaScrollingScale = {
    name: "diaporama-scrolling-scale",
    sectionBefore: true,
    sectionAfter: true,
    id: 14,
    title: "Diaporama Scrolling Scale",
    category: "Scroll",
    video: "/videos/diaporama-scrolling-scale.mp4",
    color: "#c2e2ea",
    image: "/images/diaporama-scrolling-scale.png",
    sourcePath: "diaporamascrollingscale",
    alt: "Screenshot of the animation",
    description: "A scroll-driven image sequence where the displayed image changes progressively through a collection while the visual container smoothly scales down. A title is revealed letter by letter during the transition, creating a synchronized slideshow and typography effect.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
        "Framer Motion",
    ],
    html: [
        "The layout is built around a tall scroll section containing a sticky full-screen viewport. Inside it, a visual container holds the currently active image and a title positioned over the composition.",
        "The image container starts at the full viewport size and progressively becomes smaller during the scroll. The title is split into individual words and letters, allowing each character to be animated independently during the transition."
    ],
    htmlCode: "",
    javascript: [
        "The component uses Motion's scroll progress to determine which image should currently be displayed. The article data is duplicated to create a longer continuous sequence, and the current image index is updated according to the scroll position.",
        "The image container width and height are transformed from 100% to 50% during the first half of the scroll progress, creating the main scaling effect while the active image changes underneath it.",
        "A separate GSAP timeline targets every title letter and moves it from below its container into its final position. Each letter starts slightly before the previous animation finishes, creating an overlapping reveal sequence.",
        "ScrollTrigger synchronizes the typography reveal with the section scroll position, while Motion handles the image selection and responsive container dimensions."
    ],
    javascriptMethods: [
        "useState",
        "useRef",
        "useTransform",
        "useMotionValueEvent",
        "useGSAP",
        "Math.floor"
    ],
    javascriptCode: "",
    animation: [
        "The image initially fills the entire viewport and progressively scales down to half of its width and height as the user scrolls. The scale is directly linked to the scroll progress, making the transition continuous and user-controlled.",
        "As the scroll progresses, the displayed image changes through the collection according to discrete scroll steps. This creates a slideshow effect where each new image replaces the previous one while remaining inside the same animated frame.",
        "The title is revealed character by character from below its masked container. The letters overlap slightly in time, producing a fluid staggered typography reveal rather than displaying the entire title at once.",
        "The image scaling and letter reveal are synchronized with the scroll, combining the changing visuals and typography into a single progressive transition."
    ],
    animationMethods: [
        "Scale",
        "Scroll Scrub",
        "Step Transition",
        "Letter Reveal",
        "Stagger"
    ],
    gsapCode: "",
    githubLink: "",
}

export default diaporamaScrollingScale;