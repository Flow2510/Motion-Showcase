const animatedHero = {
    name: "animated-hero",
    sectionBefore: false,
    sectionAfter: true,
    id: 16,
    title: "Animated Hero",
    category: "Scroll",
    video: "/videos/animated-hero.mp4",
    color: "#e7c6ff",
    image: "/images/animated-hero.png",
    sourcePath: "animatedhero",
    alt: "Screenshot of the animation",
    description: "A scroll-driven hero transition where a centered image progressively expands to fill the viewport before leading into a multi-column image composition. Different image columns move at varying speeds to create a layered sense of depth around the central content.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
        "Tailwind",
    ],
    html: [
        "The hero starts with a small centered image inside a full-screen sticky viewport. The image is wrapped in a dedicated container so its position, scale and border radius can be controlled independently during the scroll animation.",
        "Below the hero, the layout is divided into multiple image columns surrounding a central text block. The left and right sides contain repeated image sequences, with the center columns using reversed data to create opposing visual patterns.",
        "The surrounding section provides enough vertical space for the image expansion and keeps the first hero view sticky while the scroll-driven transition takes place."
    ],
    htmlCode: "",
    javascript: [
        "The component uses refs to target the main image, sticky section, text content and image grid. The initial image scale is calculated from the viewport dimensions so that it already covers the entire screen before the animation starts.",
        "A GSAP timeline connected to ScrollTrigger progressively reduces the image scale back to its original size while adding a rounded border radius. This creates the transition from a full-screen visual back to the smaller image.",
        "A second ScrollTrigger timeline controls the image columns below the hero. Each column receives a different vertical movement, creating different scrolling speeds across the composition.",
        "The central text is also repositioned during the column animation, allowing the content to move together with the surrounding image composition while maintaining its position between the different image streams."
    ],
    javascriptMethods: [
        "useRef",
        "useState",
        "useGSAP",
        "gsap.timeline",
        "gsap.set",
        "ScrollTrigger"
    ],
    javascriptCode: "",
    animation: [
        "The initial image is scaled up so that it covers the entire viewport. As the user scrolls, the scale progressively returns to its natural size while the image becomes rounded, creating a smooth transition from a full-screen hero to a contained visual.",
        "Once the image transition is complete, the surrounding image columns begin moving vertically at different speeds. The left and right columns travel further than the inner columns, producing a layered depth effect.",
        "The center image sequences use reversed content to create visual symmetry between the different columns. Their different movement percentages make the composition feel dynamic without requiring each image to have its own timeline.",
        "The entire sequence is controlled by scroll progress through scrubbed GSAP timelines, allowing the expansion, contraction and column movements to remain directly synchronized with the user's scrolling."
    ],
    animationMethods: [
        "Scale",
        "Border Radius",
        "Scroll Scrub",
        "Different Speeds",
        "Staggered Movement"
    ],
    gsapCode: "",
    githubLink: "",
}

export default animatedHero;