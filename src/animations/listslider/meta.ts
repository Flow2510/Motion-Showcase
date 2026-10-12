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
    alt: "Screenshot of the animation",
    description: "A hover-based list interaction where each item reveals its associated image and index alongside the title. The text is introduced word by word when it enters the viewport, while hovering an item brings its visual preview into view with a smooth scaling transition.",
    librairies: [
        "Framer Motion",
    ],
    html: [
        "The layout is composed of a vertical list of interactive titles. Each title is split into individual words and wrapped in an overflow-hidden container so every word can move independently during the initial reveal.",
        "On desktop, each item also contains a hidden image preview positioned to the left of the title and its corresponding index positioned on the right. These elements are only rendered while the item is hovered."
    ],
    htmlCode: "",
    javascript: [
        "The component uses local hover state to determine when the visual elements of an item should be displayed. Mouse enter and leave events toggle this state and control the title color and preview visibility.",
        "Each title is split into individual words so Framer Motion can animate every word separately. The words use a small incremental delay to create a staggered upward reveal when they enter the viewport.",
        "The same ListItem component is reused for every entry in the collection. On desktop, the hover state controls both the image preview and item number, while the mobile layout keeps the interaction focused on the animated title."
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
        "Each word of the title starts below its visible container and slides upward into place when the item enters the viewport. The incremental delay between words creates a short staggered text reveal.",
        "When an item is hovered, its title changes from white to its associated text color. At the same time, the image preview appears on the left and scales from zero to its natural size.",
        "The item number appears on the opposite side using the same scale transition. When the pointer leaves, both the image and number scale back down and are removed from the layout.",
        "AnimatePresence allows the hover elements to animate when they are mounted and unmounted, giving the interaction a smooth entrance and exit instead of an immediate visibility change."
    ],
    animationMethods: [
        "Hover",
        "Scale",
        "TranslateY",
        "Stagger",
        "Viewport Reveal",
    ],
    gsapCode: "",
    githubLink: "",
}

export default listSlider;