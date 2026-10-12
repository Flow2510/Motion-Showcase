const screenReveal = {
    name: "screen-reveal",
    sectionBefore: false,
    sectionAfter: true,
    id: 7,
    title: "Screen Reveal",
    category: "Loader",
    video: "/videos/screen-reveal.mp4",
    color: "#e7c6ff",
    image: "/images/screen-reveal.png",
    sourcePath: "screenreveal",
    description: "A scroll-triggered loader animation where reaching the top of a sticky section launches a counter from 0 to 100 alongside a progress bar. Once the count completes, the digits slide away, the loader fades out and the underlying landing section is revealed with a subtle rotation and scale entrance.",
    librairies: [
        "GSAP",
        "Framer Motion",
    ],
    html: [
        "The layout is built around a sticky full-screen container holding two stacked layers: a loader overlay with a large animated number and a thin progress bar, and the landing section content sitting underneath it.",
        "The number is split into individual digit characters, each wrapped in its own overflow-hidden span so every digit can be animated independently once the count finishes."
    ],
    htmlCode: "",
    javascript: [
        "useScroll tracks the section's scroll progress with a start/start offset pair, and useMotionValueEvent listens for that progress value to reach exactly 1, which triggers the loader sequence to start.",
        "The loader itself is driven by a GSAP timeline animating a plain object's value from 0 to 100, using onUpdate to synchronously update both the displayed number and the progress bar's width as React state.",
        "Once the counter finishes, the same timeline scales up the number, slides its individual digit spans away horizontally with a stagger, collapses the progress bar's width, fades out the whole loader container, and finally calls setIsLoading(false) to swap in the landing section."
    ],
    javascriptMethods: [
        "useRef",
        "useState",
        "useScroll",
        "useMotionValueEvent",
        "gsap.timeline",
        "AnimatePresence",
        "motion.div",
    ],
    javascriptCode: "",
    animation: [
        "While the loading state is active, a numeric counter climbs from 000 to 100 in sync with a horizontal progress bar filling up beneath it, both driven by the same GSAP-tweened value.",
        "Once the count reaches 100, the number scales up and each digit slides out individually with a stagger, the progress bar collapses to zero width, and the whole loader fades out via its own opacity tween.",
        "After the loader is removed from state, the landing section mounts through Framer Motion's AnimatePresence, entering with a rotateZ and scale animation that settles it into place, completing the reveal."
    ],
    animationMethods: [
        "Timeline Sequencing",
        "Object Tweening",
        "Stagger",
        "Width Animation",
        "Opacity",
        "Rotate + Scale Entrance",
        "AnimatePresence",
    ],
    gsapCode: "",
    githubLink: "",
}

export default screenReveal;