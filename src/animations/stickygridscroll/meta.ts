const stickyGridScroll = {
    name: "sticky-grid-scroll",
    sectionBefore: false,
    sectionAfter: false,
    id: 18,
    title: "Sticky Grid Scroll",
    category: "Scroll",
    video: "/videos/sticky-grid-scroll.mp4",
    image: "/images/sticky-grid-scroll.png",
    color: "#...",
    textcolor: "#...",
    sourcePath: "stickygridscroll",
    description: "A scroll-driven image composition built around a sticky three-column grid. The images progressively move into view from opposite directions before the entire composition scales and opens up to reveal the content underneath.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout is composed of three vertical columns containing a series of square images. The central column uses the same images in reverse order to create a contrasting movement between the columns.",
        "The grid and its content are kept inside a sticky viewport, while the surrounding section provides enough scroll space for the entire sequence to unfold progressively."
    ],
    htmlCode: "",
    javascript: [
        "The animation is controlled by a single GSAP timeline connected to the section scroll progress. Each image is initially positioned outside the visible grid and brought into place as the user scrolls.",
        "The left and right columns enter from below, while the center column enters from above. The center cards use a reversed stagger so that their movement follows the opposite visual direction.",
        "Once the grid is assembled, the container scales up while the outer columns move away from the center. The central cards then split vertically, creating space around the text content.",
        "The final text scale is synchronized with the split to make the transition from the image composition to the content feel like one continuous movement."
    ],
    javascriptMethods: [
        "useRef",
        "useGSAP",
        "querySelectorAll",
        "gsap.timeline",
    ],
    javascriptCode: "",
    animation: [
        "The images start outside the viewport and progressively slide into their final positions. A small delay between each card creates a staggered movement while keeping the three columns visually connected.",
        "The center column moves in the opposite direction and uses a reversed order, giving the grid a more dynamic rhythm as the images settle into place.",
        "After the grid is assembled, the whole composition scales up while the left and right columns move outward. The central cards then separate vertically, revealing the content positioned underneath.",
        "All of these movements are tied to the scroll position through ScrollTrigger and scrub, allowing the user to control the progression of the animation directly."
    ],
    animationMethods: [
        "gsap.set",
        "gsap.timeline",
        "gsap.to",
    ],
    gsapCode: "",
    githubLink: "",
}

export default stickyGridScroll;