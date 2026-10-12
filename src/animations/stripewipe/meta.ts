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
    alt: "Screenshot of the animation",
    description: "A scroll-driven transition made from a sequence of progressively sized stripes. The stripes move downward in a cascading pattern while the central content moves upward and the text gradually appears, creating a layered wipe transition.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout uses a full-screen sticky container with a stack of thirty stripe elements covering the viewport. Each stripe is given a progressively increasing height, creating a stepped visual pattern across the section.",
        "The central content is positioned independently from the stripe layer and contains a text block split into individual words. This allows the stripe transition and text reveal to be controlled separately while remaining visually connected."
    ],
    htmlCode: "",
    javascript: [
        "The stripe heights are generated programmatically so each successive stripe becomes slightly taller than the previous one. This creates the diagonal or stepped rhythm used by the wipe effect.",
        "A GSAP timeline targets every stripe and moves them downward by more than their own height. The animation is synchronized with scrolling through ScrollTrigger and each stripe receives a progressively delayed start based on its reversed index.",
        "At the same time, the central content container is translated upward, matching the duration of the stripe animation so that the content moves away as the stripes reveal the next part of the page.",
        "A separate GSAP timeline controls the text words. Each word starts hidden and progressively changes its opacity as the section moves through the viewport."
    ],
    javascriptMethods: [
        "useState",
        "useGSAP",
        "Array.from",
        "gsap.timeline",
        "gsap.to",
        "ScrollTrigger"
    ],
    javascriptCode: "",
    animation: [
        "The transition is built from thirty stripes with progressively increasing heights. Each stripe moves downward by 105% of its height, producing a cascading wipe rather than a uniform movement across the screen.",
        "The animation starts from the last stripe toward the first one, creating a reversed stagger where the different stripe sizes progressively reveal the content underneath.",
        "While the stripes move downward, the central content is translated upward by one viewport height. The two movements run together to create a continuous transition through the section.",
        "The text uses a separate opacity reveal synchronized with scrolling. Individual words progressively become visible while the stripe transition and content movement take place."
    ],
    animationMethods: [
        "Scroll Scrub",
        "Stagger",
        "Opacity Reveal",
        "TranslateY",
        "Layered Transition"
    ],
    gsapCode: "",
    githubLink: "",
}

export default stripeWipe;