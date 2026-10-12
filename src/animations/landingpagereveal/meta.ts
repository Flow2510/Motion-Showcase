const landingPageReveal = {
    name: "landing-page-reveal",
    sectionBefore: false,
    sectionAfter: true,
    id: 21,
    title: "Landing Page Reveal",
    category: "Loader",
    video: "/videos/landing-page-reveal.mp4",
    color: "#cdb4db",
    image: "/images/landing-page-reveal.png",
    sourcePath: "landingpagereveal",
    alt: "Screenshot of the animation",
    description: "A landing page reveal sequence combining a stack of images, randomized letter animations and a final screen transition. Images appear one after another in a staggered sequence before disappearing in reverse order, revealing the landing page underneath.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
    ],
    html: [
        "The layout contains a full-screen loading composition with a collection of images positioned on top of each other. Each image uses the same structure while its background color and source image are defined from the article data.",
        "A brand title is displayed underneath the image stack with each character wrapped individually, allowing the letters to be animated independently. A second full-screen landing page is positioned over the composition and initially sits below the viewport."
    ],
    htmlCode: "",
    javascript: [
        "The component uses refs to access the main containers and GSAP selectors to collect the image and letter elements. The initial state sets the images to zero scale, the letters below their visible area and the landing page below the viewport.",
        "The letters are shuffled before the animation starts, causing the brand name to reveal one character at a time in a randomized order. The images are then animated sequentially, scaling into view and receiving different Z-axis rotations to create a layered composition.",
        "After a short pause, the images disappear in reverse order while the letters move upward and out of view. The landing page then slides vertically into the viewport and its title fades in to complete the reveal."
    ],
    javascriptMethods: [
        "useRef",
        "useGSAP",
        "gsap.timeline",
        "gsap.utils.shuffle",
        "toReversed"
    ],
    javascriptCode: "",
    animation: [
        "The sequence begins with the brand name hidden below its clipping containers while the images are scaled down. The letters reveal in a randomized staggered order as the images progressively appear one by one.",
        "Each image scales from zero to its final size and receives a different Z-axis rotation, creating a loose fan of overlapping images. After the sequence pauses, the images scale back to zero in reverse order while rotating back to their original orientation.",
        "The brand letters then move upward and disappear before the final landing page slides from the bottom of the viewport. Its title fades in at the end of the timeline, completing the transition from the loading sequence to the main page."
    ],
    animationMethods: [
        "Scale",
        "RotateZ",
        "TranslateY",
        "Stagger",
        "Randomization",
        "Opacity",
    ],
    gsapCode: "",
    githubLink: "",
}

export default landingPageReveal;