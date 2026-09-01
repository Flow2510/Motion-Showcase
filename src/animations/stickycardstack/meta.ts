const stickyCardStack = {
    name: "sticky-card-stack",
    sectionBefore: true,
    sectionAfter: true,
    id: 4,
    title: "Sticky Card Stack",
    category: "Scroll",
    video: "/videos/sticky-card-stack.mp4",
    color: "#d4a373",
    image: "/images/sticky-card-stack.png",
    sourcePath: "stickycardstack",
    description: "A scroll-driven card layout where multiple cards progressively stack on top of each other as the user moves through the section. Each card stays pinned in place while the following cards overlap it, creating a layered and interactive scrolling experience.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
        "Tailwind",
    ],
    html: [
        "The layout is built around a vertical collection of cards placed inside a scrollable section. Each card contains its own content and is positioned so that it can remain visible while the following cards move into the stack.",
        "The cards share a common structure and are wrapped inside a parent container that provides the necessary scroll space. Sticky positioning allows each card to remain fixed within the viewport while the stack progressively builds."
    ],
    htmlCode: "",
    javascript: [
        "The component selects the card elements and creates a scroll-based animation for each one. The current scroll position determines when a card should become sticky and how the following cards interact with the existing stack.",
        "ScrollTrigger is used to synchronize the card animations with the user's scroll progress. Each card is assigned its own trigger and animation range so the stacking effect happens progressively throughout the section.",
        "The logic is reusable across multiple cards, allowing the same animation behavior to be applied to the entire collection without having to define each card individually."
    ],
    javascriptMethods: [
        "useEffect",
        "querySelectorAll",
        "gsap",
        "ScrollTrigger"
    ],
    javascriptCode: "",
    animation: [
        "The cards use sticky positioning combined with scroll-based transforms to create the stacking effect. As the user scrolls, each new card moves into the viewport and overlaps the previous cards while they remain pinned in place.",
        "Small changes in scale, position or spacing can be applied to the cards as they stack. ScrollTrigger controls the timing of these transformations, keeping the animation directly connected to the user's scroll position."
    ],
    animationMethods: [
        "GSAP",
        "ScrollTrigger",
        "CSS Sticky",
    ],
    gsapCode: "",
    githubLink: "",
}

export default stickyCardStack;