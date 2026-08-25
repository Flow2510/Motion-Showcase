import { useEffect } from 'react'
import Lenis from 'lenis'
import type { ReactNode } from 'react'

type SmoothScrollProps = {
  children: ReactNode
}

export default function SmoothScroll({ children } : SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 2,
    })

    let animationFrame: number;

    function raf(time : number) {
      lenis.raf(time)
      animationFrame = requestAnimationFrame(raf)
    }

    animationFrame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrame)
      lenis.destroy()
    }
  }, [])

  return children
}