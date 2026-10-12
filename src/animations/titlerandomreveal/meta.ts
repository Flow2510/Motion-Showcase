const titleRandomReveal = {
    name: "title-random-reveal",
    sectionBefore: true,
    sectionAfter: true,
    id: 13,
    title: "Title Random Reveal",
    category: "Text",
    video: "/videos/title-random-reveal.mp4",
    color: "#f6ac69",
    image: "/images/title-random-reveal.png",
    sourcePath: "titlerandomreveal",
    description: "A scroll-driven text reveal where the letters of a title appear in a randomized order before scattering away to reveal a card underneath. The combination of random sequencing, radial movement and rotation creates a playful transition from typography to visual content.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout contains a large title split into separate lines and individual letter elements. Each character is wrapped independently so it can be revealed, moved and hidden without affecting the other characters.",
        "A card is positioned behind the title and starts outside the visible area. It becomes part of the animation later in the sequence, creating a transition from the text composition to the visual content."
    ],
    htmlCode: "",
    javascript: [
        "The component selects each title line and collects its individual letters. The letters are shuffled independently so their reveal order is different from the natural reading order.",
        "A GSAP timeline controls the initial reveal by progressively changing each letter from hidden to visible. All lines are added to the same timeline so the complete title can appear as one coordinated sequence.",
        "A second timeline prepares the exit animation. Each letter receives a position calculated around a circular path, then moves away from the center while rotating and fading out.",
        "When the title starts leaving the screen, the card moves upward into view. ScrollTrigger is used to trigger this second transition near the end of the section."
    ],
    javascriptMethods: [
        "useRef",
        "useGSAP",
        "querySelectorAll",
        "gsap.utils.shuffle",
        "gsap.timeline",
        "ScrollTrigger.create",
    ],
    javascriptCode: "",
    animation: [
        "The title begins with all of its letters hidden. The characters are then revealed one after another in a randomized order, creating a reveal that does not follow the normal reading direction.",
        "After the title has been fully revealed, the letters scatter outward from the center. Each character follows a different position around a circular trajectory and receives an individual rotation before fading away.",
        "At the same time, the card positioned behind the title moves upward into the viewport. This creates a transition where the typography breaks apart and gives way to the visual content underneath.",
        "The combination of randomized sequencing, radial movement, rotation and opacity creates a playful text transition rather than a conventional letter-by-letter reveal."
    ],
    animationMethods: [
        "Randomization",
        "Stagger",
        "Radial Motion",
        "Rotation",
        "Opacity",
        "Scroll Reveal",
    ],
    gsapCode: "",
    githubLink: "",
}

export default titleRandomReveal;