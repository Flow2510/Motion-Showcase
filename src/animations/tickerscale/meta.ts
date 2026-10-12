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
    description: "A scroll-driven image ticker where two horizontal rows move in opposite directions before a selected image detaches from the ticker and expands to fill the viewport. The transition turns a single card from the scrolling composition into a full-screen visual.",
    librairies: [
        "Framer Motion",
    ],
    html: [
        "The layout contains two horizontal rows of repeated images. Each row is made of fixed-size cards arranged side by side, creating continuous visual tracks that extend beyond the viewport.",
        "The second ticker contains a specific image that acts as the transition target. A separate full-screen image is positioned after the ticker so the selected card can smoothly transition from its original position into the final viewport-sized composition."
    ],
    htmlCode: "",
    javascript: [
        "The component duplicates the article data several times to create the repeated content used by both horizontal tickers. The two rows are translated in opposite directions to create contrasting movement while scrolling.",
        "Two independent scroll progress values control the animation. The first controls the horizontal movement of the ticker rows, while the second controls the transition of the selected image into its full-screen state.",
        "When the selected card enters the transition range, its position and dimensions are measured relative to the animation container. These values are then used as the starting point for the expanding image.",
        "The selected image is rendered as a fixed element during the transition. Its position, width, height and rotation are progressively interpolated until it reaches the full viewport."
    ],
    javascriptMethods: [
        "useRef",
        "useState",
        "useScroll",
        "useTransform",
        "useMotionValueEvent",
    ],
    javascriptCode: "",
    animation: [
        "The two image rows move horizontally in opposite directions as the user scrolls. The different travel distances create a subtle variation between the two tickers rather than moving them as a single block.",
        "When the selected image reaches the transition point, a duplicate of the card is positioned exactly over its original location. The original card is hidden while the animated version takes control of the transition.",
        "The selected image progressively moves toward the top-left corner while its width and height increase until it covers the entire viewport. A small initial rotation is also removed during the expansion.",
        "The transition creates the impression that one image is being pulled directly out of the scrolling ticker and transformed into the large visual that follows."
    ],
    animationMethods: [
        "Horizontal Motion",
        "Opposite Direction",
        "Position Interpolation",
        "Scale",
        "Size Expansion",
        "Fixed Position",
    ],
    gsapCode: "",
    githubLink: "",
}

export default tickerScale;