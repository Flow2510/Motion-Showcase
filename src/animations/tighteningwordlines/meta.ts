const tighteningWordLines = {
    name: "tightening-word-lines",
    sectionBefore: true,
    sectionAfter: true,
    sourcePath: "tighteningwordlines",
    id: 3,
    title: "Tightening Word Lines",
    category: "Text",
    video: "/videos/tightening-word-lines.mp4",
    color: "#a2d2ff",
    image: "/images/tightening-word-lines.png",
    description: "A text-focused animation where individual words progressively tighten together to create a compact and dynamic typographic composition. The spacing between words changes smoothly as the animation plays, giving the text a more condensed and expressive appearance.",
    librairies: [
        "GSAP",
    ],
    html: [
        "The layout is built around a text container holding a series of words that can be animated independently. Each word is wrapped in its own element so that its position and spacing can be controlled without affecting the rest of the text.",
        "The words are displayed as a flexible line of text with controlled spacing. The surrounding container provides the visual structure while the individual word elements act as animation targets."
    ],
    htmlCode: "",
    javascript: [
        "The component selects the individual word elements and prepares them as animation targets. Each word can then be manipulated independently to control the final spacing of the line.",
        "The animation is triggered when the component enters the viewport or when the associated interaction occurs. The JavaScript logic coordinates the timing of each word so the tightening effect happens progressively rather than all at once.",
        "The interaction remains lightweight, relying on DOM references and GSAP to update the position and spacing of the words during the animation."
    ],
    javascriptMethods: [
        "useEffect",
        "querySelectorAll",
        "gsap"
    ],
    javascriptCode: "",
    animation: [
        "The main effect comes from progressively reducing the space between the individual words. GSAP interpolates the position of each element to create a smooth transition from the initial loose layout to the final tightened composition.",
        "The animation uses staggered timing so the words do not move simultaneously. This creates a subtle progressive effect and makes the typography feel more dynamic while keeping the overall movement controlled."
    ],
    animationMethods: [
        "GSAP",
        "Stagger",
    ],
    gsapCode: "",
    githubLink: "",
}

export default tighteningWordLines;