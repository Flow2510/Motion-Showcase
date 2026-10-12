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
    description: "A scroll-driven horizontal slider where a sticky row of full-screen cards translates sideways as the user scrolls down, each card taking over the full viewport in sequence. On smaller screens the same cards stack vertically instead, replacing the sticky horizontal behavior with a simple flowing layout.",
    librairies: [
        "Motion",
    ],
    html: [
        "The layout conditionally renders two structures based on viewport width: on desktop, a tall relative container sized to the number of cards wraps a sticky full-height viewport containing a flex row of cards; on smaller screens, the same cards are rendered directly one after another without the sticky wrapper.",
        "Each card is delegated to a separate Cards component, which receives the shared scroll progress value along with its own index so its internal animation can be based on its position in the sequence."
    ],
    htmlCode: "",
    javascript: [
        "A boolean isDesktop is derived once from window.innerWidth at initial render, determining which of the two layout branches is used for the rest of the component's lifetime.",
        "useScroll tracks scrollYProgress against the sticky container using a start/end offset pair, producing a single progress value that spans the entire height of the section.",
        "useTransform maps that scroll progress linearly to a horizontal translation percentage, moving the flex row from 0% to a negative percentage equal to the total width needed to reveal every card beyond the first, and that same scrollYProgress is also passed down to each Cards instance for any per-card animation."
    ],
    javascriptMethods: [
        "useRef",
        "useState",
        "useScroll",
        "useTransform",
        "motion.div",
    ],
    javascriptCode: "",
    animation: [
        "On desktop, the entire row of cards slides horizontally in sync with scroll position, moving further left as the user scrolls down so each subsequent card is progressively revealed while the previous one exits the viewport.",
        "The sticky positioning keeps the row pinned to the top of the screen for the full scroll duration of the section, translating vertical scroll input directly into horizontal movement.",
        "On mobile, the horizontal slide is skipped entirely and the cards are rendered as a simple stacked sequence, while the scroll progress value is still forwarded to each card in case its own internal animation depends on it."
    ],
    animationMethods: [
        "Translate X",
        "Sticky Pinning",
        "Scroll-linked Progress",
        "Responsive Layout Switch",
    ],
    gsapCode: "",
    githubLink: "",
}

export default sectionSlideAnimation;