const listSlider = {
    name: "list-slider",
    sectionBefore: false,
    sectionAfter: false,
    id: 17,
    title: "List Slider",
    category: "Hover",
    video: "/videos/list-slider.mp4",
    color: "#f9f6b4",
    image: "/images/list-slider.png",
    sourcePath: "listslider",
    description: "A hover-driven list interaction where moving across the different items smoothly changes the position of a visual slider or preview. The effect creates a responsive connection between the selected list item and its associated content.",
    librairies: [
        "GSAP",
    ],
    html: [
        "The layout is built around a vertical or horizontal list of interactive items. Each item contains its label or content and can be associated with a specific visual element displayed by the slider.",
        "The list items are kept as individual interactive elements so hover events can identify the active item. A separate visual container is used to display and transition between the associated content."
    ],
    htmlCode: "",
    javascript: [
        "The component tracks the item currently being hovered and uses its index to determine which visual content should be displayed. Moving between items updates the active state and triggers the corresponding transition.",
        "Mouse enter events are used to detect the selected item and update the slider position. GSAP then animates the visual element toward its new position instead of instantly changing it.",
        "The interaction remains lightweight and responsive, with the same logic reused across all list items."
    ],
    javascriptMethods: [
        "useState",
        "onMouseEnter",
        "map",
        "gsap"
    ],
    javascriptCode: "",
    animation: [
        "When the user hovers over a list item, the associated slider or preview smoothly moves into place. The transition can combine horizontal or vertical movement with opacity or scale changes to make the interaction feel fluid.",
        "GSAP handles the movement between the different states, using easing to avoid abrupt changes when the user quickly moves from one item to another."
    ],
    animationMethods: [
        "GSAP",
        "Hover",
        "Transform",
    ],
    gsapCode: "",
    githubLink: "",
}

export default listSlider;