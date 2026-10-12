const rotatingSlider = {
    name: "rotating-slider",
    sectionBefore: false,
    sectionAfter: true,
    id: 22,
    title: "Rotating Slider",
    category: "Drag",
    video: "/videos/rotating-slider.mp4",
    color: "#cdb4db",
    image: "/images/rotating-slider.png",
    sourcePath: "rotatingslider",
    alt: "Screenshot of the animation",
    description: "A draggable image slider built around a rotating stack of cards. The cards appear progressively from a compact rotated state before the entire slider settles into its final vertical layout, creating a playful entrance animation with an interactive drag gesture.",
    librairies: [
        "GSAP",
        "Motion",
        "Tailwind",
    ],
    html: [
        "The layout is built around a vertical collection of image cards displayed inside a full-screen section. The cards alternate between two sizes to create a varied composition while each item uses its own image and background color.",
        "The complete card list is wrapped inside a draggable Motion container. Vertical drag constraints are calculated from the container height so the user can move through the duplicated list without freely dragging it outside its intended area."
    ],
    htmlCode: "",
    javascript: [
        "The component duplicates the image data to create a continuous-looking list and uses a ref to measure the slider container. The measured height is stored in state and used to calculate the vertical drag boundaries.",
        "GSAP initializes every card with a small scale and a 90-degree rotation while the slider container itself starts rotated by -90 degrees. The cards are then progressively made visible using a staggered sequence.",
        "The timeline rotates the entire container back to its natural position while the cards simultaneously scale up and rotate to their final state. Motion then handles the interactive vertical dragging once the entrance animation is complete."
    ],
    javascriptMethods: [
        "useEffect",
        "useRef",
        "useState",
        "useGSAP",
        "gsap.timeline",
        "motion"
    ],
    javascriptCode: "",
    animation: [
        "The entrance starts with the complete card column rotated by -90 degrees while each card is hidden, scaled down and rotated by 90 degrees. The cards progressively become visible with a short stagger.",
        "The container then rotates from -90 degrees back to 0 while the cards grow from their small scale to their normal size and rotate back to 0 degrees. The overlapping timing makes the cards and their container settle into place together.",
        "Once the entrance sequence is complete, the card column can be dragged vertically. The duplicated list and calculated drag constraints allow the user to move through the collection while keeping the interaction contained within the slider."
    ],
    animationMethods: [
        "RotateZ",
        "Scale",
        "Stagger",
        "Drag",
        "Drag Constraints",
    ],
    gsapCode: "",
    githubLink: "",
}
export default rotatingSlider;