const screenReveal = {
    name: "screen-reveal",
    sectionBefore: false,
    sectionAfter: true,
    id: 7,
    title: "Screen Reveal",
    category: "Loader",
    video: "/videos/screen-reveal.mp4",
    color: "#e7c6ff",
    image: "/images/screen-reveal.png",
    sourcePath: "screenreveal",
    description: "A screen-based loading animation where layered elements progressively reveal the page content. The transition uses a clean visual mask to move from the loading state to the main interface, creating a smooth and polished entrance.",
    librairies: [
        "GSAP",
        "Tailwind",
    ],
    html: [
        "The layout is built around a full-screen loader that sits above the main page content. The loader contains the visual elements used to create the reveal effect while the underlying content remains hidden during the transition.",
        "The screen is divided into layered elements that can be animated independently. Once the loading sequence is complete, the loader moves away or disappears to expose the content underneath."
    ],
    htmlCode: "",
    javascript: [
        "The component controls the loading state and triggers the reveal animation once the initial page setup is complete. The loader remains visible until the animation sequence has finished.",
        "GSAP is used to animate the different screen elements in a controlled sequence. The JavaScript logic coordinates the timing of each layer so the transition feels continuous rather than instantaneous.",
        "After the reveal animation completes, the loader is removed from the visible layout or its interaction is disabled, allowing the user to access the main page normally."
    ],
    javascriptMethods: [
        "useEffect",
        "useState",
        "gsap",
        "onComplete"
    ],
    javascriptCode: "",
    animation: [
        "The reveal is created by animating one or several full-screen layers away from the viewport. The layers can slide, scale or clip to progressively uncover the page underneath.",
        "GSAP controls the timing and easing of the transition, allowing multiple elements to animate in sequence. A short stagger or overlapping timeline can be used to make the loader feel more fluid and cinematic."
    ],
    animationMethods: [
        "GSAP",
        "Timeline",
        "CSS",
    ],
    gsapCode: "",
    githubLink: "",
}

export default screenReveal;