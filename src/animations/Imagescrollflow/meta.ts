const imageScrollFlow = {
    name: "image-scroll-flow",
    sectionBefore: true,
    sectionAfter: true,
    id: 8,
    title: "Image Scroll Flow",
    category: "Scroll",
    video: "/videos/image-scroll-flow.mp4",
    color: "#72ddf7",
    image: "/images/image-scroll-flow.png",
    sourcePath: "imagescrollflow",
    description: "A scroll-driven stream of images flowing horizontally across the viewport. Each image appears at a random size and depth, scales in and out while drifting vertically, and travels from right to left in a staggered sequence, creating a continuous river-like flow of visuals as the user scrolls.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
        "@gsap/react",
    ],
    html: [
        "The layout duplicates the article list four times to generate a large pool of image items, each rendered as an absolutely positioned square anchored to the right side of a sticky full-screen container.",
        "The section itself is very tall to provide enough scroll distance for the whole staggered sequence to play out, while the sticky inner container keeps the images visible in a fixed viewport throughout."
    ],
    htmlCode: "",
    javascript: [
        "A single GSAP timeline is driven by a scrubbed ScrollTrigger spanning nearly the entire height of the section, so the whole staggered animation progresses in sync with scroll position rather than playing automatically.",
        "The fromTo call assigns each image a random starting height, width, z-index and a zero scale using gsap.utils.random, with the random ranges adapted depending on whether the layout is detected as desktop or mobile via window.innerWidth.",
        "Each image is animated through two keyframes: first scaling up to full size while moving to a random vertical offset, then scaling back down to zero and returning to its original vertical position, while horizontally translating across the full viewport width with a stagger between items."
    ],
    javascriptMethods: [
        "useRef",
        "useState",
        "useGSAP",
        "gsap.timeline",
        "gsap.utils.random",
        "tl.fromTo",
        "keyframes",
        "stagger",
        "ScrollTrigger",
    ],
    javascriptCode: "",
    animation: [
        "Each image starts invisible at scale 0, with a randomized size and stacking order, positioned on the right edge of the screen.",
        "As the scroll progresses, every image scales up while drifting to a random vertical position, then scales back down to zero and resets its vertical offset, all while continuously translating horizontally from right to left across the viewport.",
        "The stagger between each image's timeline creates a continuous flowing stream rather than a single simultaneous movement, giving the impression of images drifting past at different depths and speeds."
    ],
    animationMethods: [
        "Translate X",
        "Translate Y",
        "Scale",
        "Random Values",
        "Stagger",
        "Keyframes",
        "Scrub",
    ],
    gsapCode: "",
    githubLink: "",
}

export default imageScrollFlow;