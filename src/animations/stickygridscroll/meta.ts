const stickyGridScroll = {
    name: "sticky-grid-scroll",
    sectionBefore: true,
    sectionAfter: false,
    id: 18,
    title: "Sticky Grid Scroll",
    category: "Scroll",
    video: "/videos/sticky-grid-scroll.mp4",
    image: "/images/sticky-grid-scroll.png",
    color: "#...",
    textcolor: "#...",
    sourcePath: "stickygridscroll",
    alt: "Screenshot of the animation",
    description: "A scroll-driven image composition built around a sticky three-column grid. Images enter the layout from different directions before the grid expands and separates to reveal the content beneath.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout is organized into three vertical columns containing multiple image cards. The columns are positioned inside a sticky viewport so the grid remains fixed while the surrounding section provides the scroll distance for the animation.",
        "The center column uses a reversed image order to create a different visual flow from the outer columns. The images are individually targeted so each column can be animated with its own direction and stagger."
    ],
    htmlCode: "",
    javascript: [
        "The component uses references and GSAP selectors to target the grid, its columns and individual images. The animation is built as a single timeline connected to the section scroll progress through ScrollTrigger.",
        "The images are initially positioned outside their final locations. The left and right columns animate upward into the grid while the center column moves downward, with staggered timing applied to the individual cards.",
        "Once the images have formed the grid, the composition scales up and the outer columns move away from the center. The central cards then separate vertically, progressively exposing the content positioned behind the grid."
    ],
    javascriptMethods: [
        "useRef",
        "useGSAP",
        "querySelectorAll",
        "gsap.timeline",
    ],
    javascriptCode: "",
    animation: [
        "The three columns begin with their images offset outside the final composition. As the user scrolls, the cards slide into position with a staggered rhythm, progressively building the complete grid.",
        "The outer columns move upward while the center column follows the opposite direction. Reversing the order of the center cards reinforces the opposing movement and gives the composition a more dynamic visual rhythm.",
        "After the grid is assembled, the entire composition scales forward while the outer columns move away from the center. The middle cards then split vertically, creating an opening that reveals the content underneath.",
        "The animation is tied directly to scroll progress, so every movement can be controlled by scrolling through the section rather than playing as an independent sequence."
    ],
    animationMethods: [
        "TranslateY",
        "Scale",
        "Stagger",
        "Reverse Order",
        "Split",
        "Sticky Position",
    ],
    gsapCode: "",
    githubLink: "",
}

export default stickyGridScroll;