import AccordionPanel from "./accordionpanel/accordionpanel";
import accordionPanel from "./accordionpanel/meta";
import scrollStaggeredReveal from "./scrollstaggeredreveal/meta";
import ScrollStaggeredRevealComponent from "./scrollstaggeredreveal/scrollstaggeredrevealcomponent";
import sectionSlideAnimation from "./sectionslideanimation/meta";
import SectionSlideAnimation from "./sectionslideanimation/sectionslideanimation";
import stickyCardStack from "./stickycardstack/meta";
import StickyCardStack from "./stickycardstack/stickycardstack";
import textAssembly from "./textassembly/meta";
import TextAssembly from "./textassembly/textassembly";
import tighteningWordLines from "./tighteningwordlines/meta";
import TighteningWordLines from "./tighteningwordlines/tighteningwordlines";

export const animations = [
    {
        ...accordionPanel,
        component: AccordionPanel,
    },
    {
        ...scrollStaggeredReveal,
        component: ScrollStaggeredRevealComponent,
    },
    {
        ...tighteningWordLines,
        component: TighteningWordLines,
    },
    {
        ...stickyCardStack,
        component: StickyCardStack,
    },
    {
        ...sectionSlideAnimation,
        component: SectionSlideAnimation,
    },
    {
        ...textAssembly,
        component: TextAssembly,
    }
]