const scrollStaggeredReveal = {
    name: "scroll-staggered-reveal",
    sectionBefore: true,
    sectionAfter: true,
    id: 2,
    title: "Staggered Scroll Reveal",
    category: "Text",
    video: "/videos/scroll-staggered-reveal.mp4",
    image: "/images/scroll-staggered-reveal.png",
    color: "#a7c957",
    textcolor: "#1a1a1a",
    sourcePath: "scrollstaggeredreveal",
    description:
        "A typography-focused scroll effect where each letter enters the screen at a slightly different point in the scroll. Letters alternate between two vertical starting positions, creating a staggered and irregular reveal as the word comes together.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The text is split into individual letters and each letter is rendered inside its own span. This gives every character an independent element that can be animated separately.",
        "The component also accepts the text, colors and direction as props, making the same animation reusable with different words and visual variations."
    ],
    htmlCode: "",
    javascript: [
        "GSAP is used to create an individual ScrollTrigger for each letter. The trigger position is progressively offset according to the letter index, creating the staggered timing.",
        "The direction of each letter alternates between the top and bottom of the screen. This gives the reveal a less uniform movement while keeping the overall animation synchronized with the scroll.",
        "A separate ScrollTrigger moves the complete word horizontally into view. The direction can be reversed through a prop, allowing the same component to enter from either side."
    ],
    javascriptMethods: [
        "useGSAP",
        "useRef",
        
    ],
    javascriptCode: "",
    animation: [
        "Each letter starts outside its final position and progressively moves toward the baseline as the user scrolls. The start position alternates between negative and positive Y values, making consecutive letters come from opposite directions.",
        "The stagger is created by progressively changing the ScrollTrigger start and end positions for each letter. Because the animation is scrubbed, the movement remains directly connected to the user's scroll position.",
        "The entire word also slides horizontally into the viewport, creating a second layer of movement behind the individual letter reveals."
    ],
    animationMethods: [
        "gsap.set",
        "gsap.fromTo",
        "gsap.to",
    ],
    gsapCode: "",
    githubLink: "",
}

export default scrollStaggeredReveal;