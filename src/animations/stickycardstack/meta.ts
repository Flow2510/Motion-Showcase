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
    description: "A pinned scroll-driven card deck where cards start pre-scaled into a receding stack. As the user scrolls, the front card flies upward with a rotation and fades out, revealing the next card which scales up to take its place at the front, repeating step by step through the whole stack.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
        "@gsap/react",
    ],
    html: [
        "The layout renders every article as an absolutely positioned full-size card stacked inside a centered flex container, with a decreasing z-index so earlier cards in the array sit visually on top of later ones.",
        "Each card shares the same internal structure with a title, an image and a description, and is pinned inside a wrapper section tall enough to provide scroll distance for the whole sequence."
    ],
    htmlCode: "",
    javascript: [
        "Before the scroll animation starts, every card is given an initial scale that decreases by 0.1 per index, so the stack already appears layered and receding even before any scrolling happens.",
        "A single GSAP timeline is attached to a pinned ScrollTrigger on the wrapper, with its scrollable distance calculated dynamically as a multiple of the total number of cards, and scrub set to a value of 1 for a slightly eased follow of the scroll.",
        "The timeline loops through each card except the last, adding a named label per step: the current card is tweened away with yPercent and an alternating rotateZ direction based on whether its index is even or odd, every following card is scaled up by one step to reflect its new position in the stack, and the departing card's opacity is faded out slightly after, all synchronized on the same timeline label."
    ],
    javascriptMethods: [
        "useRef",
        "useGSAP",
        "gsap.timeline",
        "gsap.set",
        "gsap.utils.toArray",
        "timeline.addLabel",
        "ScrollTrigger",
    ],
    javascriptCode: "",
    animation: [
        "The stack initially appears as a series of cards scaled progressively smaller behind the front one, creating a layered receding effect before any interaction.",
        "As the user scrolls, the frontmost card flies upward off the stack while rotating left or right depending on its position in the sequence, and fades out shortly after it starts leaving.",
        "At the same time, every remaining card scales up by one increment to move closer to the front, so the next card becomes the new full-size top card once the previous one has fully exited, repeating this cycle for each card in the stack."
    ],
    animationMethods: [
        "Pin",
        "Scale",
        "Translate Y",
        "Rotate Z",
        "Opacity",
        "Timeline Labels",
        "Scrub",
    ],
    gsapCode: "",
    githubLink: "",
}

export default stickyCardStack;