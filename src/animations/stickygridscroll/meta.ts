const stickyGridScroll = {
    name: "sticky-grid-scroll",
    sectionBefore: false,
    sectionAfter: false,
    id: 18,
    title: "Sticky Grid Scroll",
    category: "Scroll",
    video: "/videos/sticky-grid-scroll.mp4",
    color: "#cdb4db",
    image: "/images/sticky-grid-scroll.png",
    sourcePath: "stickygridscroll",
    description: "A scroll-driven grid layout where a collection of elements remains pinned while the surrounding content continues to move. The sticky positioning creates a layered composition that progressively changes as the user scrolls through the section.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
        "Tailwind",
    ],
    html: [
        "The layout is organized as a grid containing multiple visual elements or cards. The grid is placed inside a larger scrolling section so its elements can remain visible while the page continues to move.",
        "Selected grid elements use sticky positioning to stay within the viewport during the scroll. The surrounding containers provide the required scroll space and determine how long the sticky state remains active."
    ],
    htmlCode: "",
    javascript: [
        "The component targets the grid elements that need to react to scrolling and prepares their initial positions. Each element can have its own animation range depending on its position in the grid.",
        "ScrollTrigger monitors the scroll position and coordinates the transformations of the sticky elements. As the user progresses through the section, the grid can shift, scale or reposition while remaining anchored to the viewport.",
        "The animation setup is shared across the grid so the interaction remains consistent and can easily be reused with different numbers of elements."
    ],
    javascriptMethods: [
        "useEffect",
        "querySelectorAll",
        "gsap",
        "ScrollTrigger"
    ],
    javascriptCode: "",
    animation: [
        "The grid remains partially fixed in the viewport while the individual elements react to the user's scroll. Translations, scaling and spacing changes can be combined to create a dynamic layered composition.",
        "CSS sticky positioning provides the base behavior while GSAP and ScrollTrigger control the additional transformations. The result is a scrolling grid that feels anchored while its visual structure continues to evolve."
    ],
    animationMethods: [
        "GSAP",
        "ScrollTrigger",
        "CSS Sticky",
        "Transform",
    ],
    gsapCode: "",
    githubLink: "",
}

export default stickyGridScroll;