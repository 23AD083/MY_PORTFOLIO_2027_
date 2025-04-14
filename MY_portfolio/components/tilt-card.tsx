"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface TiltCardProps {
  children: ReactNode
  scale?: number
  tiltMaxAngleX?: number
  tiltMaxAngleY?: number
  perspective?: number
  speed?: number
}

export default function TiltCard({
  children,
  scale = 1.05,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  perspective = 1000,
  speed = 500,
}: TiltCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const rotateX = useTransform(springY, [-0.5, 0.5], [tiltMaxAngleX, -tiltMaxAngleX])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-tiltMaxAngleY, tiltMaxAngleY])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate mouse position relative to the card
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5

    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective,
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        transition: `transform ${speed}ms ease-out`,
      }}
      animate={{ scale: isHovered ? scale : 1 }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ transformStyle: "preserve-3d" }}>{children}</div>
    </motion.div>
  )
}
