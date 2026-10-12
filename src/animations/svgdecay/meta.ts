const svgDecay = {
    name: "svg-decay",
    sectionBefore: true,
    sectionAfter: true,
    id: 10,
    title: "SVG Decay",
    category: "Scroll",
    video: "/videos/svg-decay.mp4",
    color: "#cdb4db",
    image: "/images/svg-decay.png",
    sourcePath: "svgdecay",
    alt: "Screenshot of the animation",
    description: "A scroll-driven logo animation where two duplicated SVG instances start off-screen on opposite horizontal and vertical sides, then converge diagonally toward a static central logo. As the merged logos shrink, a navigation list of article titles slides up from the bottom of the screen.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
        "@gsap/react",
    ],
    html: [
        "The layout is built around a tall sticky section containing three stacked instances of the same SVG logo, positioned absolutely on top of one another, along with a vertical navigation list of article titles hidden below the viewport.",
        "One logo instance is translated fully above the viewport, the other fully below, while the third stays centered as a static base layer with a dark background."
    ],
    htmlCode: "",
    javascript: [
        "The component collects every logo instance with gsap.utils.toArray and sets their initial horizontal offsets, alongside the hidden state of the navigation list.",
        "Four separate GSAP timelines are each linked to the same ScrollTrigger but with staggered start and end percentages, so horizontal movement, vertical movement, scaling, and the list reveal unfold as overlapping phases rather than one single sequence.",
        "The scrub option ties every timeline directly to scroll position, letting the different phases blend smoothly into one continuous animation as the user scrolls through the section."
    ],
    javascriptMethods: [
        "useRef",
        "useGSAP",
        "gsap.timeline",
        "gsap.set",
        "gsap.utils.toArray",
        "ScrollTrigger",
    ],
    javascriptCode: "",
    animation: [
        "The top logo instance slides in horizontally from the right while the bottom instance slides in from the left, both starting fully off-screen.",
        "As scrolling continues, the top instance moves downward and the bottom instance moves upward, causing both duplicates to converge toward the static central logo.",
        "Once merged, all three logo instances scale down together, after which the navigation list of article titles slides up from below to reveal the final menu."
    ],
    animationMethods: [
        "Translate X",
        "Translate Y",
        "Scale",
        "Timeline Sequencing",
        "Scrub",
    ],
    gsapCode: "",
    githubLink: "",
}
export default svgDecay;