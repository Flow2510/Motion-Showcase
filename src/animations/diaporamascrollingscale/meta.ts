const diaporamaScrollingScale = {
    name: "diaporama-scrolling-scale",
    sectionBefore: true,
    sectionAfter: true,
    id: 14,
    title: "Diaporama Scrolling Scale",
    category: "Scroll",
    video: "/videos/diaporama-scrolling-scale.mp4",
    color: "#c2e2ea",
    image: "/images/diaporama-scrolling-scale.png",
    sourcePath: "diaporamascrollingscale",
    description: "A scroll-driven slideshow where images transition one after another while smoothly scaling inside the viewport. The combination of image transitions and progressive scaling creates a cinematic presentation controlled entirely by the user's scroll.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout is built around a slideshow container containing multiple images or visual panels. Each slide follows the same structure and is positioned within the same visual area so the images can transition between one another.",
        "The slides are layered inside a parent container, allowing the active image to appear above the previous one. The structure provides independent animation targets for controlling opacity, scale and position during the transition."
    ],
    htmlCode: "",
    javascript: [
        "The component selects the slides and prepares their initial states before the scroll animation starts. Each image is assigned a position in the slideshow so the transitions can happen in a controlled sequence.",
        "ScrollTrigger divides the scrolling progress between the different slides. As the user moves through the section, the current image transitions into the next one while its scale changes smoothly.",
        "The animation logic is shared across the entire slideshow, making the component reusable with different numbers of images without changing the core interaction."
    ],
    javascriptMethods: [
        "useEffect",
        "querySelectorAll",
        "gsap",
        "ScrollTrigger"
    ],
    javascriptCode: "",
    animation: [
        "Each image progressively scales while transitioning between slides. The current image can zoom in or out as the next image fades or moves into position, creating a smooth slideshow effect tied directly to scrolling.",
        "GSAP controls the scale, opacity and positioning of each slide while ScrollTrigger synchronizes the sequence with the user's scroll progress. The overlapping transitions create a continuous cinematic flow between images."
    ],
    animationMethods: [
        "GSAP",
        "ScrollTrigger",
        "Scale",
        "Opacity",
    ],
    gsapCode: "",
    githubLink: "",
}

export default diaporamaScrollingScale;