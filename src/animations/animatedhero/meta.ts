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
    description: "A dynamic hero section enhanced with scroll-based animations that progressively transform the main visual elements as the user moves through the page. The combination of movement, scaling and layered transitions creates an engaging introduction to the website.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
        "Tailwind",
    ],
    html: [
        "The layout is centered around a full-screen hero section containing the main heading, supporting content and visual elements. The different parts of the hero are structured independently so they can be animated without affecting the overall layout.",
        "The hero uses a layered composition with a main content container and visual elements positioned around it. This structure provides individual animation targets for the scroll interactions."
    ],
    htmlCode: "",
    javascript: [
        "The component selects the main hero elements and prepares their initial animation states when the section is mounted. Each element can have its own movement, scale or opacity behavior.",
        "ScrollTrigger connects the hero animations to the user's scroll position. As the user moves away from the hero, the different elements progressively transform to create a smooth transition into the following section.",
        "The animation logic coordinates several elements through a shared GSAP timeline, keeping the different movements synchronized while allowing each element to have its own transformation."
    ],
    javascriptMethods: [
        "useEffect",
        "querySelector",
        "gsap",
        "ScrollTrigger"
    ],
    javascriptCode: "",
    animation: [
        "The hero elements react progressively to scrolling through a combination of translations, scaling and opacity changes. The main visual can move or scale while the surrounding content transitions at a different speed to create depth.",
        "GSAP handles the individual transformations while ScrollTrigger controls their progress based on the scroll position. The overlapping movements create a fluid transition from the hero into the rest of the page."
    ],
    animationMethods: [
        "GSAP",
        "ScrollTrigger",
        "Timeline",
        "Parallax",
    ],
    gsapCode: "",
    githubLink: "",
}

export default animatedHero;