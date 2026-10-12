const scrollingSections = {
    name: "scrolling-sections",
    sectionAfter: true,
    sectionBefore: true,
    id: 9,
    title: "Scrolling Sections",
    category: "Scroll",
    video: "/videos/scrolling-section.mp4",
    color: "#a7c957",
    image: "/images/scrolling-sections.png",
    sourcePath: "scrollingsections",
    description: "A scroll-driven stacked cards layout where each full-screen section sticks to the top of the viewport while the following section slides over it. As a new card covers the previous one, the covered card tilts back in 3D, shrinks, darkens and fades away, creating a continuous stacking effect down the page.",
    librairies: [
        "Motion",
    ],
    html: [
        "The layout is composed of a parent container mapping over an article list, rendering one tall section per item, each containing a sticky full-height card with a title, an index number, an image and a description.",
        "Every card except the last one is set up to receive 3D transforms, while the final card in the list is left static so the stacking sequence has a clean resting point at the end."
    ],
    htmlCode: "",
    javascript: [
        "Each section holds a ref used by useScroll, which tracks scrollYProgress between the offsets \"end end\" and \"end start\", meaning the progress value evolves specifically while the section is being scrolled past and covered by the next one.",
        "Several useTransform hooks derive rotateX, rotateZ, scale, vertical translation, opacity and a brightness filter from that scroll progress, alternating the rotateZ direction depending on whether the card's index is even or odd.",
        "All transformed style values are conditionally applied only when the card is not the last item in the list, and each card receives an incremental z-index based on its index so newer cards stack visually above older ones."
    ],
    javascriptMethods: [
        "useRef",
        "useScroll",
        "useTransform",
        "motion.div",
    ],
    javascriptCode: "",
    animation: [
        "As the user scrolls past a card, it progressively rotates on the X and Z axes inside a 3D perspective container, giving it a subtle tilting-back motion as if it were being pushed down under the next card.",
        "At the same time the card scales down, moves downward, and its brightness darkens, while its opacity only drops sharply at the very end of the scroll range so it disappears just before being fully covered.",
        "Because every section is sticky within its own tall scroll container, the next card's section naturally overlaps and covers the previous one, producing a continuous sequence of cards stacking on top of each other."
    ],
    animationMethods: [
        "3D Rotation",
        "Scale",
        "Translate Y",
        "Opacity",
        "Brightness Filter",
        "Sticky Stacking",
    ],
    gsapCode: "",
    githubLink: "",
}

export default scrollingSections;