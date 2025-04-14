"use client"

import { useState, useEffect, type ReactNode } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface MouseParallaxProps {
  children: ReactNode
  strength?: number
}

export default function MouseParallax({ children, strength = 20 }: MouseParallaxProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 50, stiffness: 300 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      // Calculate mouse position relative to the center of the screen
      const mouseX = (clientX - windowWidth / 2) / windowWidth
      const mouseY = (clientY - windowHeight / 2) / windowHeight

      setMousePosition({ x: mouseX, y: mouseY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    x.set(mousePosition.x * strength * -1)
    y.set(mousePosition.y * strength * -1)
  }, [mousePosition, strength, x, y])

  return <motion.div style={{ x: springX, y: springY }}>{children}</motion.div>
}
