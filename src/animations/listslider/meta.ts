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
        "Framer Motion",
    ],
    html: [ 
        "The layout is built around a centered list of interactive items. Each item contains a title split into individual words, allowing the text to be animated independently.", 
        "Each list item acts as a hover target and contains an associated image preview positioned outside the main title. A separate item number is displayed on the opposite side when the item becomes active."
    ],
    htmlCode: "",
    javascript: [ 
        "The component stores the hovered state of each list item with useState. Mouse enter and mouse leave events are used to activate and deactivate the corresponding visual elements.", 
        "Each title is split into individual words using the split method. The words are rendered as separate elements so they can animate independently when they enter the viewport.", 
        "The same ListItem component is reused for every item in the list through map, allowing the interaction logic and animation behavior to remain consistent across all entries." 
    ],
    javascriptMethods: [ 
        "useState", 
        "onMouseEnter", 
        "onMouseLeave", 
        "map", 
        "split", 
    ],
    javascriptCode: "",
    animation: [ 
        "When a list item enters the viewport, each word of its title slides upward from below its container. A small delay between each word creates a staggered text reveal effect.", 
        "When the user hovers over an item, its title changes to the item's associated text color. At the same time, an image preview appears on the left side of the title and smoothly scales from zero to its full size.", 
        "An item number appears on the opposite side of the title using the same scale-based transition. Both the image preview and number disappear smoothly when the pointer leaves the item.", 
        "AnimatePresence handles the mounting and unmounting of the hover elements, allowing their entrance and exit animations to play smoothly instead of instantly appearing or disappearing." 
    ],
    animationMethods: [ 
        "Hover", 
        "Scale", 
        "Translate", 
        "Stagger", 
        "AnimatePresence", 
        "Viewport Reveal"
    ],
    gsapCode: "",
    githubLink: "",
}

export default listSlider;