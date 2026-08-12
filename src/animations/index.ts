import AccordionPanel from "./accordionpanel/accordionpanel";
import accordionPanel from "./accordionpanel/meta";
import ImageScrollFlow from "./Imagescrollflow/imagescrollflow";
import imageScrollFlow from "./Imagescrollflow/meta";
import ListScale from "./listscale/listscale";
import listScale from "./listscale/meta";
import screenReveal from "./screenreveal/meta";
import ScreenReveal from "./screenreveal/screenreveal";
import scrollingSections from "./scrollingsections/meta";
import ScrollingSections from "./scrollingsections/scrollingsections";
import scrollStaggeredReveal from "./scrollstaggeredreveal/meta";
import ScrollStaggeredRevealComponent from "./scrollstaggeredreveal/scrollstaggeredrevealcomponent";
import sectionSlideAnimation from "./sectionslideanimation/meta";
import SectionSlideAnimation from "./sectionslideanimation/sectionslideanimation";
import stickyCardStack from "./stickycardstack/meta";
import StickyCardStack from "./stickycardstack/stickycardstack";
import svgDecay from "./svgdecay/meta";
import SvgDecay from "./svgdecay/svgdecay";
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
    }, 
    {
        ...screenReveal,
        component: ScreenReveal,
    },
    {
        ...imageScrollFlow,
        component: ImageScrollFlow,
    },
    {
        ...scrollingSections,
        component: ScrollingSections,
    },
    {
        ...svgDecay,
        component: SvgDecay,
    },
    {
        ...listScale,
        component: ListScale,
    }
]