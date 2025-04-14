"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TechInsights() {
  const insights = [
    "By 2027, AI-integrated frontends will dominate 60% of enterprise UI workflows.",
    "MERN remains one of the most demanded full stack ecosystems in 2027 job market.",
    "WebAssembly adoption will grow by 200% by 2026, enabling near-native performance for web apps.",
    "75% of new web applications will use some form of AI/ML integration by 2027.",
    "Serverless architecture will power over 50% of new enterprise applications by 2026.",
    "Low-code development platforms will account for 65% of application development by 2027.",
    "Edge computing will reduce latency by up to 80% for critical web applications by 2026.",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % insights.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [insights.length])

  const nextInsight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % insights.length)
  }

  const prevInsight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + insights.length) % insights.length)
  }

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={prevInsight}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          aria-label="Previous insight"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>

      <div className="mx-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10">
              <CardContent className="p-6 text-center">
                <p className="text-lg font-medium">{insights[currentIndex]}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={nextInsight}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          aria-label="Next insight"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {insights.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/30"}`}
            aria-label={`Go to insight ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
