const listScale = {
    name: "list-scale",
    sectionBefore: true,
    sectionAfter: true,
    id: 11,
    title: "List Scale",
    category: "Scroll",
    video: "/videos/list-scale.mp4",
    color: "#d9f2b4",
    image: "/images/list-scale.png",
    sourcePath: "listscale",
    description: "A scroll-driven list where the central item progressively scales up until it fills the viewport. As the selected title grows beyond the screen, the background transitions and a content panel rises into view, creating a transition from the list to the following content.",
    librairies: [
        "Framer Motion",
    ],
    html: [
        "The layout contains a vertical list of titles with one central item acting as the main animation target. The items are rendered from the same data source while the middle item receives the scroll-driven transformation.",
        "A full-screen content panel is positioned over the list and starts below the viewport. Its vertical position and the section background are animated as the central title reaches its enlarged state."
    ],
    htmlCode: "",
    javascript: [
        "The component uses the section scroll progress to drive several motion values. The central list item is identified from the middle of the article array and receives the main scale transformation.",
        "The scale value progressively increases from its original size to an extremely large value. At the same time, the content panel moves vertically into the viewport and the section background transitions from transparent to the selected item's color.",
        "The scroll progress controls all transformations continuously, allowing the user to determine the exact progression of the scale and content reveal by scrolling.",
        "The list and content panel remain structurally independent, making it possible to transform the central title without changing the layout of the surrounding items."
    ],
    javascriptMethods: [
        "useRef",
        "useScroll",
        "useTransform",
        "map",
    ],
    javascriptCode: "",
    animation: [
        "The central title starts at its normal scale and progressively grows as the user scrolls. The scale increases dramatically until the title expands beyond the viewport and becomes a visual transition rather than a readable list item.",
        "While the title scales up, the section background progressively changes from transparent to the central item's text color, creating a visual shift behind the expanding typography.",
        "A content panel positioned above the list moves upward from below the viewport. Its movement is synchronized with the scroll progress so it becomes visible as the central title reaches its enlarged state.",
        "The combination of extreme scaling, background transition and vertical movement transforms a simple list into a full-screen transition toward the following content."
    ],
    animationMethods: [
        "Scroll Progress",
        "Scale",
        "Translate",
        "Color Transition",
    ],
    gsapCode: "",
    githubLink: "",
}

export default listScale;