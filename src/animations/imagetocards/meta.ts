const imageToCards = {
    name: "image-to-cards",
    sectionBefore: true,
    sectionAfter: true,
    id: 20,
    title: "Image To Cards",
    category: "Scroll",
    video: "/videos/image-to-cards.mp4",
    color: "#fdffb6",
    image: "/images/image-to-cards.png",
    alt: "Screenshot of the animation",
    sourcePath: "imagetocards",
    description: "A scroll-driven transition that transforms a single panoramic image into three individual cards. As the user scrolls, the image separates into distinct panels, which then rotate in 3D to reveal a different card design and content on their back faces.",
    librairies: [
        "GSAP",
        "ScrollTrigger",
        "Tailwind",
    ],
    html: [
        "The layout is composed of three equal card containers placed side by side. Each card has a front face showing a different portion of the same panoramic image and a back face containing its own icon, title and description.",
        "Each card uses a 3D transform context with separate front and back faces. The image is positioned at a larger scale inside each panel so the three cards together display one continuous image before the transition begins."
    ],
    htmlCode: "",
    javascript: [
        "The component creates references for the three cards and uses a GSAP timeline controlled by ScrollTrigger. The timeline is pinned to the viewport so the complete transformation takes place while the user scrolls through the section.",
        "At the beginning of the animation, the side cards move slightly away from the center and the image panels receive rounded corners, progressively transforming the original panoramic image into three separate cards.",
        "The three cards then rotate around their Y axis by 180 degrees at the same time, revealing their individual back faces. The side cards also receive a slight rotation and vertical movement to complete the final separated card composition."
    ],
    javascriptMethods: [
        "useRef",
        "useGSAP",
        "gsap.timeline",
        "ScrollTrigger",
    ],
    javascriptCode: "",
    animation: [
        "The animation starts with three panels aligned together to form a single continuous image. The side panels slightly move outward while their corners become rounded, visually separating the image into three cards.",
        "The three panels then perform a synchronized 180-degree Y-axis rotation using CSS 3D transforms. Their back faces become visible during the flip, revealing three distinct cards with different colors, icons and content.",
        "The final state adds a small Z-axis rotation and vertical offset to the left and right cards, creating a slightly fanned-out composition while the center card remains straight."
    ],
    animationMethods: [
        "RotateY",
        "Transform",
        "Border Radius",
        "Perspective",
    ],
    gsapCode: "",
    githubLink: "",
}
export default imageToCards;