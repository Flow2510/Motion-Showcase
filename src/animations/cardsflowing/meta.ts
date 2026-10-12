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
    description: "A scroll-driven horizontal card carousel where a duplicated row of cards translates across the full width of the screen inside a 3D perspective container. As the row scrolls past, each card tips forward from below and later flips away with a reversed stagger, creating a wave-like 3D flip effect.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
        "@gsap/react",
    ],
    html: [
        "The layout duplicates the article list once to fill a horizontal row of cards, all placed inside a flex container that sits within a perspective-enabled, overflow-hidden sticky viewport.",
        "Each card is a fixed-size rounded rectangle displaying an image, with 3D transform capabilities enabled on both the row container and the individual cards so they can be rotated in space."
    ],
    htmlCode: "",
    javascript: [
        "On mount, the component measures the row's full scrollable width against the viewport width, then positions the row fully off-screen to the left using gsap.set, while every card is set to an initial rotated and vertically offset state with rotateX and yPercent.",
        "Two separate GSAP timelines share the same ScrollTrigger configuration on the section, one driving the horizontal translation of the whole row from its off-screen position to fully off-screen on the right, the other animating each card's 3D flip.",
        "The cards timeline loops through every card in reverse order, tweening each one's yPercent and rotateX back to neutral, offset by a small delay per reversed index so the last cards in the row animate first, creating a staggered wave across the row."
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
        "The entire row of cards is dragged horizontally across the screen as the user scrolls, moving from fully off-screen on the left to fully off-screen on the right over the course of the section.",
        "At the same time, each card starts tilted backward and pushed downward in 3D space, then straightens up into its flat resting position as its turn comes up in the staggered sequence.",
        "The stagger is applied in reverse card order, so the flipping motion appears to ripple backward through the row rather than progressing card by card in a straightforward line, reinforcing the sense of a continuous flowing wave."
    ],
    animationMethods: [
        "Translate X",
        "3D Rotation",
        "Perspective",
        "Reversed Stagger",
        "Timeline Sequencing",
        "Scrub",
    ],
    gsapCode: "",
    githubLink: "",
}

export default cardsFlowing;