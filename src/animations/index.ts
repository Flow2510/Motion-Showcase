import CardsFlowing from "./cardsflowing/cardsflowing";
import cardsFlowing from "./cardsflowing/meta";
import CircularStack from "./circularstack/circularstack";
import circularStack from "./circularstack/meta";
import ImageScrollFlow from "./Imagescrollflow/imagescrollflow";
import imageScrollFlow from "./Imagescrollflow/meta";
import ImageToCards from "./imagetocards/imagetocards";
import imageToCards from "./imagetocards/meta";
import InfiniteCarousel from "./infinitcarousel/infinitecarousel";
import infiniteCarousel from "./infinitcarousel/meta";
import InfiniteSlider from "./infiniteslider/infiniteslider";
import infiniteSlider from "./infiniteslider/meta";
import puzzleImage from "./puzzleimage/meta";
import PuzzleImage from "./puzzleimage/puzzleimage";
import rotatingGallery from "./rotatinggallery/meta";
import RotatingGallery from "./rotatinggallery/rotatinggallery";
import rotatingSlider from "./rotatingslider/meta";
import RotatingSlider from "./rotatingslider/rotatingslider";
import rotatingSphere from "./rotatingsphere/meta";
import RotatingSphere from "./rotatingsphere/rotatingsphere";
import scrollingSections from "./scrollingsections/meta";
import ScrollingSections from "./scrollingsections/scrollingsections";
import stickyCardStack from "./stickycardstack/meta";
import StickyCardStack from "./stickycardstack/stickycardstack";
import stickyGridScroll from "./stickygridscroll/meta";
import StickyGridScroll from "./stickygridscroll/stickygridscroll";
import svgHoverCards from "./svghovercards/meta";
import SvgHoverCards from "./svghovercards/svghovercards";

export const animations = [
    {
        ...infiniteCarousel,
        component: InfiniteCarousel,
    },
    {
        ...stickyCardStack,
        component: StickyCardStack,
    },
    {
        ...cardsFlowing,
        component: CardsFlowing
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
        ...stickyGridScroll,
        component: StickyGridScroll,
    },
    {
        ...svgHoverCards,
        component: SvgHoverCards,
    },
    {
        ...imageToCards,
        component: ImageToCards,
    },
    {
        ...rotatingSlider,
        component: RotatingSlider,
    }, 
    {
        ...circularStack,
        component: CircularStack,
    },
    {
        ...rotatingSphere,
        component: RotatingSphere,
    },
    {
        ...puzzleImage,
        component:PuzzleImage,
    },{
        ...infiniteSlider,
        component:InfiniteSlider,
    },
    {
        ...rotatingGallery,
        component: RotatingGallery,
    }
]