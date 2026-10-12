const circularStack = {
    name: "circular-stack",
    sectionBefore: true,
    sectionAfter: true,
    id: 23,
    title: "Circular Stack",
    category: "Scroll",
    video: "/videos/circular-stack.mp4",
    color: "#cdb4db",
    image: "/images/circular-stack.png",
    sourcePath: "circularstack",
    alt: "Screenshot of the animation",
    description: "A scroll-driven card composition where scattered images follow circular trajectories and progressively converge toward the center. Each card starts at a different position with a subtle random rotation before forming a compact central stack.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout is built around a collection of image cards positioned absolutely inside a large scrolling section. Each card shares the same dimensions and is centered within a sticky viewport while remaining independently transformable.",
        "The cards are initially hidden and positioned around the center using a set of predefined coordinates. Their images are displayed with rounded corners and remain layered through z-index changes during the animation."
    ],
    htmlCode: "",
    javascript: [
        "The component stores references to each card and defines a set of starting positions distributed around the center. For every card, its initial radius and angle are calculated from its starting coordinates.",
        "A GSAP timeline is connected to ScrollTrigger with scrub enabled. Each card receives a proxy value that progresses from 0 to 1, allowing its circular position to be recalculated continuously during the scroll.",
        "As the proxy progresses, the card's radius decreases toward zero while its angle completes a full 360-degree rotation. At the same time, the card's opacity increases and its initial random rotation progressively returns to zero."
    ],
    javascriptMethods: [
        "useRef",
        "useGSAP",
        "gsap.timeline",
        "Math.atan2",
        "Math.sqrt",
        "Math.cos",
        "Math.sin"
    ],
    javascriptCode: "",
    animation: [
        "Each card begins far from the center at a predefined position and with a small random rotation. The animation converts these Cartesian positions into a radius and angle to create a circular trajectory for every card.",
        "During the scroll, the radius progressively decreases while the angle advances by a complete revolution. This makes each card orbit around the center while simultaneously moving closer to it.",
        "The cards gradually become visible as they approach the center, while their initial rotations return to zero. Their z-index is also updated throughout the animation so the cards naturally layer into a central stack."
    ],
    animationMethods: [
        "Circular Motion",
        "Orbit",
        "Scale",
        "Opacity",
        "Rotation",
        "Z-Index",
    ],
    gsapCode: "",
    githubLink: "",
}
export default circularStack;