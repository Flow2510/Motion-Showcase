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
    description: "A typography scroll effect where a word slides horizontally into view from either edge of the screen while its individual letters simultaneously drop or rise into place from alternating vertical offsets, each letter's entrance slightly delayed relative to the next based on its index.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
        "@gsap/react",
    ],
    html: [
        "The component renders a full-screen colored background behind a large heading, with the text prop split into individual characters and each one wrapped in its own inline span so it can be animated independently.",
        "A right prop, along with color and textColor props, lets the same component be reused with different words, background colors, text colors and entrance directions."
    ],
    htmlCode: "",
    javascript: [
        "Depending on the right prop, the whole text block is initially positioned fully off-screen either to the right or to the left using gsap.set with a viewport-relative x value.",
        "A single gsap.to tween, tied to a scrubbed ScrollTrigger on the container, brings the whole text block back to x: 0dvw as the user scrolls through the section.",
        "Every letter except the first is collected with gsap.utils.toArray and animated from an alternating vertical offset back to y: 0 with gsap.fromTo, each letter using its own ScrollTrigger whose start and end points are offset by a value proportional to its index, producing the staggered timing."
    ],
    javascriptMethods: [
        "useRef",
        "useGSAP",
        "gsap.set",
        "gsap.to",
        "gsap.fromTo",
        "gsap.utils.toArray",
        "ScrollTrigger",
    ],
    javascriptCode: "",
    animation: [
        "The full word slides in horizontally from off-screen, entering from the right or left depending on the right prop, synchronized with the scroll progress of the container.",
        "At the same time, each letter (aside from the first) rises or falls into its resting position, alternating between a negative and positive starting Y offset so consecutive letters appear to come from opposite directions.",
        "Because each letter's ScrollTrigger start and end points are individually offset based on its index, the vertical settling of the letters ripples across the word rather than happening all at once, layering on top of the word's horizontal entrance."
    ],
    animationMethods: [
        "Translate X",
        "Translate Y",
        "Alternating Offsets",
        "Per-letter ScrollTrigger",
        "Scrub",
    ],
    gsapCode: "",
    githubLink: "",
}

export default scrollStaggeredReveal;
