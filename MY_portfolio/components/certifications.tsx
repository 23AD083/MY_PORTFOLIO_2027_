"use client"

import { motion } from "framer-motion"
import { CheckCircle, Code, Database, Brain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ImageGallery from "@/components/image-gallery"

export default function Certifications() {
  const certifications = [
    {
      title: "Pandas",
      issuer: "Kaggle",
      year: "2023",
      icon: <Database className="h-6 w-6" />,
      color: "blue",
    },
    {
      title: "Python (Advanced)",
      issuer: "GUVI",
      year: "2023",
      icon: <Code className="h-6 w-6" />,
      color: "yellow",
    },
    {
      title: "Advanced Diploma in JAVA Programming",
      issuer: "CSC-Academy",
      year: "2024",
      icon: <Code className="h-6 w-6" />,
      color: "red",
    },
    {
      title: "Data Structure and algorithms using C & C++",
      issuer: "Udemy",
      year: "2024",
      icon: <Code className="h-6 w-6" />,
      color: "green",
    },
    {
      title: "Machine Learning A-Z: AI, Python & R + chatGPT Prize",
      issuer: "Udemy",
      year: "2025",
      icon: <Brain className="h-6 w-6" />,
      color: "purple",
    },
    {
      title: "Full Stack Development",
      issuer: "G-Zoft",
      year: "2025",
      icon: <Code className="h-6 w-6" />,
      color: "pink",
    },
  ]

  return (
    <div>
      <div className="mb-8 max-w-md mx-auto">
        <ImageGallery category="tech" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      cert.color === "blue"
                        ? "bg-blue-500/20 text-blue-400"
                        : cert.color === "yellow"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : cert.color === "red"
                            ? "bg-red-500/20 text-red-400"
                            : cert.color === "green"
                              ? "bg-green-500/20 text-green-400"
                              : cert.color === "purple"
                                ? "bg-purple-500/20 text-purple-400"
                                : "bg-pink-500/20 text-pink-400"
                    }`}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription className="text-white/60">
                      {cert.issuer} • {cert.year}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-white/70 text-sm">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  <span>Verified Credential</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
