const cardsFlowing = {
    name: "cards-flowing",
    sectionBefore: true,
    sectionAfter: true,
    id: 6,
    title: "Cards Flowing",
    category: "Scroll",
    video: "/videos/cards-flowing.mp4",
    color: "#cdb4db",
    image: "/images/cards-flowing.png",
    sourcePath: "cardsflowing",
    description: "A scroll-driven card animation where a collection of cards continuously flows through the viewport. The cards move and transition between different positions as the user scrolls, creating a smooth and fluid visual sequence.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout contains a collection of cards inside a dedicated animation container. Each card follows the same structure and can contain text, images or other content depending on the item.",
        "The cards are arranged in a way that allows them to move freely through the viewport. The parent container provides the scrolling area while the individual cards act as independent animation targets."
    ],
    htmlCode: "",
    javascript: [
        "The component selects all cards and prepares them for scroll-based animation. Each card is assigned a position within the animation so the elements can move continuously while the user scrolls.",
        "ScrollTrigger connects the card movement to the scroll progress. As the user moves through the section, the cards are translated, rotated or repositioned to create the flowing effect.",
        "The animation logic is shared between all cards, making it possible to control the entire sequence from a single reusable setup while keeping each card's movement independent."
    ],
    javascriptMethods: [
        "useEffect",
        "querySelectorAll",
        "gsap",
        "ScrollTrigger"
    ],
    javascriptCode: "",
    animation: [
        "The cards move along different positions or paths as the section progresses through the viewport. Their movement is synchronized with scrolling to create a continuous flowing composition rather than a simple entrance animation.",
        "GSAP controls the transforms applied to each card while ScrollTrigger determines the animation progress. Different delays, rotations and translations can be combined to give each card a slightly different trajectory."
    ],
    animationMethods: [
        "GSAP",
        "ScrollTrigger",
        "Transform",
    ],
    gsapCode: "",
    githubLink: "",
}

export default cardsFlowing;