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
    description: "A simple expandable card layout built around a single active panel. Four cards are displayed side by side, with the selected card expanding to reveal its content while the others collapse into compact vertical tabs.",
    librairies: [
        "Tailwind",
    ],
    html: [
        "The layout is made of four buttons displayed in a horizontal flex container. Each item can either render as a compact vertical tab or as the currently expanded panel.",
        "The active panel contains its title, image and description, while the inactive panels only display their title vertically. The same structure is reused for every item."
    ],
    htmlCode: "",
    javascript: [
        "The component keeps track of the currently active card with a single state. This index determines which item should be rendered as the expanded panel.",
        "Clicking a card updates the index with the position of the clicked item. React then re-renders the list and moves the expanded state to the new card.",
        "There is no complex interaction logic here: the animation is mostly driven by the layout changing between the active and inactive states."
    ],
    javascriptMethods: [
        "useState",
        "onClick"
    ],
    javascriptCode: "",
    animation: [
        "The four cards share the available space using flexbox. The active card receives the remaining space with a flexible width, while the inactive cards keep a fixed narrow width.",
        "When another card is clicked, its index becomes active and the layout automatically changes. The width and height transitions create the expanding accordion effect without requiring a complex animation timeline."
    ],
    animationMethods: [
        "CSS",
    ],
    gsapCode: "",
    githubLink: "",
}

export default accordionPanel;