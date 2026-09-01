const tickerScale = {
    name: "ticker-scale",
    sectionBefore: true,
    sectionAfter: true,
    id: 12,
    title: "Ticker Scale",
    category: "Scroll",
    video: "/videos/ticker-scale.mp4",
    color: "#d0ffb7",
    image: "/images/ticker-scale.png",
    sourcePath: "tickerscale",
    description: "A scroll-driven ticker animation where a continuous line of content changes scale as it moves through the viewport. The effect combines horizontal movement with progressive scaling to create a dynamic and immersive scrolling element.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout is built around a ticker containing repeated text or visual elements arranged along a horizontal line. The ticker is placed inside a dedicated section that provides the space required for the scroll interaction.",
        "The content is structured as individual elements so the ticker can be translated and scaled while maintaining a continuous visual flow. Repeated items can be used to create the impression of an endless track."
    ],
    htmlCode: "",
    javascript: [
        "The component targets the ticker container and its content elements to prepare the scroll animation. The initial position and scale are defined before the user reaches the animated section.",
        "ScrollTrigger synchronizes the ticker movement with the user's scroll progress. As the ticker moves across the viewport, its scale changes to create a stronger visual emphasis at specific points.",
        "The animation remains reusable by applying the same transformation logic to the ticker regardless of the amount of content it contains."
    ],
    javascriptMethods: [
        "useEffect",
        "querySelector",
        "gsap",
        "ScrollTrigger"
    ],
    javascriptCode: "",
    animation: [
        "The ticker moves horizontally while its scale changes according to the scroll position. The combination of translation and scaling creates a dynamic transition as the content passes through the viewport.",
        "GSAP controls the movement and scale interpolation while ScrollTrigger connects the animation directly to scrolling. The result is a smooth ticker effect that reacts naturally to the user's scroll speed and direction."
    ],
    animationMethods: [
        "GSAP",
        "ScrollTrigger",
        "Scale",
        "Translate",
    ],
    gsapCode: "",
    githubLink: "",
}

export default tickerScale;