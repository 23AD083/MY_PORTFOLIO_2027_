"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface ImageGalleryProps {
  category: "coding" | "webdesign" | "project" | "devops" | "developer" | "tech" | "creative"
}

export default function ImageGallery({ category }: ImageGalleryProps) {
  // Map categories to appropriate Unsplash collection images
  const getImageUrl = () => {
    switch (category) {
      case "coding":
        return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
      case "webdesign":
        return "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop"
      case "project":
        return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
      case "devops":
        return "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop"
      case "developer":
        return "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
      case "tech":
        return "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop"
      case "creative":
        return "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=600&auto=format&fit=crop"
      default:
        return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="overflow-hidden rounded-xl shadow-lg"
    >
      <Card className="border-0 overflow-hidden">
        <CardContent className="p-0">
          <img
            src={getImageUrl() || "/placeholder.svg"}
            alt={`${category} illustration`}
            className="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}
