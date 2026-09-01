const stripeWipe = {
    name: "stripe-wipe",
    sectionBefore: true,
    sectionAfter: true,
    id: 15,
    title: "Stripe Wipe",
    category: "Scroll",
    video: "/videos/stripe-wipe.mp4",
    color: "#84ffc9",
    image: "/images/stripe-wipe.png",
    sourcePath: "stripewipe",
    description: "A scroll-driven transition built from multiple horizontal or vertical stripes that progressively wipe across the screen. The layered movement creates a bold visual reveal that can be used to transition between sections or uncover new content.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout contains a group of stripe elements positioned inside a full-screen container. Each stripe acts as an independent layer that can move across the viewport during the wipe transition.",
        "The stripes are grouped inside a parent overlay so they can cover or reveal the underlying content. Their shared structure makes it possible to animate the complete transition while keeping individual stripes independently controllable."
    ],
    htmlCode: "",
    javascript: [
        "The component selects the stripe elements and prepares their initial positions before the scroll animation starts. Each stripe is positioned outside or across the viewport depending on the direction of the wipe.",
        "ScrollTrigger connects the movement of the stripes to the user's scroll progress. As the section reaches the trigger area, the stripes move across the screen in a coordinated sequence to reveal the content underneath.",
        "The animation uses the same logic for every stripe while small timing offsets can be applied to create a staggered and more dynamic wipe effect."
    ],
    javascriptMethods: [
        "useEffect",
        "querySelectorAll",
        "gsap",
        "ScrollTrigger"
    ],
    javascriptCode: "",
    animation: [
        "The wipe is created by moving multiple stripes across the viewport so they progressively cover or reveal the underlying content. Their movement can be horizontal or vertical depending on the desired transition.",
        "GSAP controls the position of each stripe while ScrollTrigger synchronizes the animation with scrolling. A stagger between the stripes creates a layered transition instead of moving every element at exactly the same time."
    ],
    animationMethods: [
        "GSAP",
        "ScrollTrigger",
        "Stagger",
        "Transform",
    ],
    gsapCode: "",
    githubLink: "",
}

export default stripeWipe;