import { useParams } from "react-router-dom";
import { animations } from "../animations";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import NextCta from "../components/nextcta/nextcta";

gsap.registerPlugin(ScrollTrigger)

export default function DemoPage() {
    const { slug } = useParams();
    const animationIndex = animations.findIndex(a => a.name === slug)
    const animation = animations[animationIndex]


    if (!animation) {
        return <h2>404</h2>
    }

    const Component = animation.component

    return(
        <main 
            className="bg-neutral-200 w-full text-neutral-50"
        >
            <Component />
            {animation.sectionAfter &&
                <NextCta />
            }
         </main>
    )
}