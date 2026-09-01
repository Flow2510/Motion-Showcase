const imageScrollFlow = {
    name: "image-scroll-flow",
    sectionBefore: true,
    sectionAfter: true,
    id: 8,
    title: "Image Scroll Flow",
    category: "Scroll",
    video: "/videos/image-scroll-flow.mp4",
    color: "#72ddf7",
    image: "/images/image-scroll-flow.png",
    sourcePath: "imagescrollflow",
    description: "A scroll-driven image animation where visuals smoothly move through the viewport as the user scrolls. The images follow a continuous flow that creates depth and movement while keeping the content connected to the scrolling experience.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout is built around a collection of image elements placed inside a dedicated scrolling section. Each image is wrapped in its own container so its position, size and movement can be controlled independently.",
        "The images are arranged along the scrolling area to create a continuous visual composition. The parent container provides the space required for the animation while each image acts as an individual animation target."
    ],
    htmlCode: "",
    javascript: [
        "The component selects the image elements and prepares their initial positions before the scroll animation starts. Each image can then be transformed according to its position within the scrolling section.",
        "ScrollTrigger links the image movement directly to the user's scroll progress. As the section moves through the viewport, the images are translated or scaled to create the flowing visual effect.",
        "The animation logic is reused for the entire image collection, allowing multiple images to move with the same overall behavior while maintaining individual positions and timing."
    ],
    javascriptMethods: [
        "useEffect",
        "querySelectorAll",
        "gsap",
        "ScrollTrigger"
    ],
    javascriptCode: "",
    animation: [
        "The images move progressively as the user scrolls, creating a smooth flow between different positions in the composition. Transforms such as translate, scale or rotation can be combined to give the movement more depth.",
        "The animation is directly connected to scroll progress, making the images respond naturally to the user's movement. GSAP handles the transformations while ScrollTrigger keeps the animation synchronized with the viewport."
    ],
    animationMethods: [
        "GSAP",
        "ScrollTrigger",
        "Transform",
    ],
    gsapCode: "",
    githubLink: "",
}

export default imageScrollFlow;