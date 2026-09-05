import { createContext, useContext, useEffect, useState } from "react"
import Lenis from "lenis"
import type { ReactNode } from "react"

const LenisContext = createContext<Lenis | null>(null)

export function useLenis() {
    return useContext(LenisContext)
}

type SmoothScrollProps = {
    children: ReactNode
}

export default function SmoothScroll({
    children,
}: SmoothScrollProps) {
    const [lenis, setLenis] = useState<Lenis | null>(null)

    useEffect(() => {
        const instance = new Lenis({
            duration: 2,
            smoothWheel: true,
            touchMultiplier: 2,
        })

        setLenis(instance)

        let animationFrame: number

        function raf(time: number) {
            instance.raf(time)
            animationFrame = requestAnimationFrame(raf)
        }

        animationFrame = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(animationFrame)
            instance.destroy()
            setLenis(null)
        }
    }, [])

    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    )
}