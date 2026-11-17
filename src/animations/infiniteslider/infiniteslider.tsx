import { useEffect, useRef } from "react"
import photos from "../../data/photo.json"

const itemsList = [...photos, ...photos]

const config = {
  lerp: 0.075, //lerp : la douceur de l’animation. Chaque frame, on se rapproche de la cible de 7,5 % de la distance restante. Plus petit = plus fluide/lent, plus grand = plus réactif.
  scrollSpeed: 3.5,
  minSize: 0.1,
  growth: 0.25,
  aspect: 1 / 1.25,
  baseline: 0.0,
}

const growthRatio = Math.exp(config.growth) // fonction exponentielle (e puissance 0.25)
const slideCount =
  Math.ceil(Math.log(1 + (growthRatio - 1) / config.minSize) / config.growth) + 4 
  // ceil: arrondi en haut (plafond), floor: arrondi en bas (plancher), log: inverse de exp

const wrap = (value: number, max: number) => ((value % max) + max) % max // modulo qui gere les negatifs pour index -1
const edgeX = (position: number, width: number) =>
  (width * config.minSize * (Math.pow(growthRatio, position) - 1)) / (growthRatio - 1) // pow : a puissance b (growthRatio puissance position)

export default function InfiniteSlider() {
  const sliderRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const total = itemsList.length
    const slides = Array.from(slider.querySelectorAll<HTMLDivElement>(".slide"))
    const slidesStreamIndex = slides.map((_, i) => i)

    const setSlideImage = (slide: HTMLDivElement, index: number) => {
      if (slide.dataset.image === String(index)) return
      slide.dataset.image = String(index)
      const img = slide.querySelector(".slide-image") as HTMLImageElement
      img.src = itemsList[index].img
    }

    let scroll = 0
    let scrollTarget = 0
    let lastPointerX: number | null = null
    let raf = 0

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      scrollTarget += (e.deltaY + e.deltaX) * config.scrollSpeed * 0.0014
    }
    const onPointerDown = (e: PointerEvent) => {
      lastPointerX = e.clientX
      slider.setPointerCapture(e.pointerId)
    }
    const onPointerMove = (e: PointerEvent) => {
      if (lastPointerX === null) return
      scrollTarget += (lastPointerX - e.clientX) * config.scrollSpeed * 0.005
      lastPointerX = e.clientX
    }
    const releasePointer = () => {
      lastPointerX = null
    }

    slider.addEventListener("wheel", onWheel, { passive: false })
    slider.addEventListener("pointerdown", onPointerDown)
    slider.addEventListener("pointermove", onPointerMove)
    slider.addEventListener("pointerup", releasePointer)
    slider.addEventListener("pointercancel", releasePointer)

    const render = () => {
      scroll += (scrollTarget - scroll) * config.lerp // Interpolation : chaque frame, scroll rattrape 7,5 % de l’écart avec scrollTarget. C’est ce qui donne l’effet d’inertie.
      const sliderWidth = slider.clientWidth
      const baselineOffset = slider.clientHeight * config.baseline

      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i]
        let streamIndex = slidesStreamIndex[i]

        while (edgeX(streamIndex + scroll, sliderWidth) > sliderWidth) streamIndex -= slideCount
        while (edgeX(streamIndex + scroll + 1, sliderWidth) < 0) streamIndex += slideCount
        slidesStreamIndex[i] = streamIndex

        //  Le recyclage. 
        //  Si le bord gauche de la slide est au-delà du bord droit de l’écran, 
        //  on la recule de slideCount positions (elle réapparaît donc à gauche).
        //  Si son bord droit est avant le bord gauche de l’écran, on l’avance (elle réapparaît à droite).
        //  C’est ce qui permet de n’avoir que slideCount éléments DOM pour un défilement infini. 
        //  On sauvegarde le nouvel index.

        const left = Math.round(edgeX(streamIndex + scroll, sliderWidth)) //round : arrondi au plus proche (5.4 => 5)
        const right = Math.round(edgeX(streamIndex + scroll + 1, sliderWidth))
        const width = right - left

        setSlideImage(slide, wrap(streamIndex, total))

        slide.style.width = `${width}px`
        slide.style.height = `${width / config.aspect}px`
        slide.style.zIndex = String(right)
        slide.style.transform = `translate(${left}px, ${-baselineOffset}px)`
      }
      raf = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(raf)
      slider.removeEventListener("wheel", onWheel)
      slider.removeEventListener("pointerdown", onPointerDown)
      slider.removeEventListener("pointermove", onPointerMove)
      slider.removeEventListener("pointerup", releasePointer)
      slider.removeEventListener("pointercancel", releasePointer)
    }
  }, [])

  return (
    <section
      ref={sliderRef}
      className="slider bg-neutral-100 text-neutral-950 relative h-dvh active:cursor-grabbing w-full overflow-hidden touch-none cursor-grab"
    >
      {Array.from({ length: slideCount }).map((_, i) => (
        <div
          key={i}
          className="absolute left-0 bottom-0 overflow-hidden will-change-transform slide"
        >
          <img
            alt=""
            className="w-full h-full object-cover block pointer-events-none slide-image"
          />
        </div>
      ))}

      <div className="slider-header absolute top-20 left-5">
        <h1 className="w-1/2 text-[clamp(4rem,6vw,10rem)] font-extrabold uppercase tracking-tight leading-none">
          Infinite Slider
        </h1>
      </div>
    </section>
  )
}