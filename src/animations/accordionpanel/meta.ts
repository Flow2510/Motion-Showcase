const accordionPanel = {
    name: "accordion-panel",
    sectionBefore: false,
    sectionAfter: false,
    sourcePath: "accordionpanel",
    id: 1,
    title: "Accordion Panel",
    category: "Click",
    video: "/videos/accordion-panel.mp4",
    color: "#ffafcc",
    image: '/images/accordion-panel.png',
    alt: "Screenshot of the animation",
    description: "A responsive accordion where four cards sit side by side on desktop and stacked vertically on mobile, with the active card expanding to fill the available space while the others collapse into narrow tabs, one showing its title rotated on its side, the other keeping it horizontal.",
    librairies: [
        "Motion",
    ],
    html: [
        "The component renders one of two full layouts depending on viewport width: a horizontal row of buttons on desktop where inactive tabs are narrow rounded pills with a rotated title, or a vertical stack on mobile where inactive tabs stay horizontal and simply shrink in height.",
        "In both layouts, the active button expands to show the full card content — a title, an image and a description — while every inactive button only renders its title, styled with the item's own background and text color."
    ],
    htmlCode: "",
    javascript: [
        "A resize event listener updates an isDesktop boolean state whenever the window crosses the 768px breakpoint, which determines which of the two JSX layouts is rendered.",
        "A single accordionIndex state tracks which of the first four article items is currently active, defaulting to the first one on mount.",
        "Clicking any button, active or inactive, calls setAccordionIndex with that button's index, causing React to re-render the list with the new item expanded and the previous one collapsed back into a tab."
    ],
    javascriptMethods: [
        "useState",
        "useEffect",
        "addEventListener",
        "onClick",
    ],
    javascriptCode: "",
    animation: [
        "The expansion effect relies entirely on CSS width, height and border-radius changes transitioning over duration-300 as the active index changes, rather than an explicit JavaScript-driven animation.",
        "On desktop, the active card grows to fill the full width and height of the row while inactive cards shrink to a fixed 100px-wide rounded pill, with their title rotated -90 degrees to read vertically.",
        "On mobile, the same active/inactive distinction plays out vertically instead, with inactive tabs collapsing to a fixed 80px height while keeping their title horizontal, and the active card expanding to fill the remaining vertical space."
    ],
    animationMethods: [
        "CSS Transition",
        "Width/Height Toggle",
        "Border Radius Toggle",
        "Responsive Layout Switch",
    ],
    gsapCode: "",
    githubLink: "https://github.com/Flow2510/Motion-Showcase/tree/main/src/animations/accordionpanel",
}

export default accordionPanel;