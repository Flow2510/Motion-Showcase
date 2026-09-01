const sectionSlideAnimation = {
    name: "section-slide-animation",
    sectionBefore: true,
    sectionAfter: true,
    id: 5,
    title: "Section Slide Animation",
    category: "Scroll",
    video: "/videos/section-slide-animation.mp4",
    color: "#ffbe0b",
    image: "/images/section-slide-animation.png",
    sourcePath: "sectionslideanimation",
    description: "A scroll-driven section transition where content smoothly slides into view as the user moves through the page. The animation creates a continuous movement between sections, giving the layout a fluid and dynamic scrolling experience.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout is composed of multiple full-width sections containing their own content and visual elements. Each section is structured independently so it can be animated as the user reaches it during the scroll.",
        "The sections are positioned inside a main scrolling container. Their structure provides the elements needed for the slide transition while keeping the content organized and responsive."
    ],
    htmlCode: "",
    javascript: [
        "The component targets the individual sections and creates scroll-based animations for each one. The current scroll position determines when a section should start moving into or out of the viewport.",
        "ScrollTrigger synchronizes the section movement with the user's scroll progress, allowing the animation to feel directly connected to the scrolling interaction.",
        "The same animation logic is applied to multiple sections so the transition remains consistent throughout the page without requiring separate animation logic for every section."
    ],
    javascriptMethods: [
        "useEffect",
        "querySelectorAll",
        "gsap",
        "ScrollTrigger"
    ],
    javascriptCode: "",
    animation: [
        "The sections slide vertically or horizontally as the user scrolls, creating the impression that each new section is replacing or pushing the previous one. The movement is controlled by the scroll position rather than a fixed animation duration.",
        "GSAP handles the transformation of each section while ScrollTrigger controls the animation progress. This combination creates smooth transitions and keeps the movement synchronized with the user's scrolling speed."
    ],
    animationMethods: [
        "GSAP",
        "ScrollTrigger",
    ],
    gsapCode: "",
    githubLink: "",
}

export default sectionSlideAnimation;