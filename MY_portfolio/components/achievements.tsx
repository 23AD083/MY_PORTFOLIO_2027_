"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Award, Medal, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ImageGallery from "@/components/image-gallery"

export default function Achievements() {
  const achievements = [
    {
      title: "CODEATHON 2023",
      description: "Top Winner at Sri Eshwar College of Engineering",
      icon: <Trophy className="h-6 w-6" />,
      color: "gold",
    },
    {
      title: "Leetcode",
      description: "Maximum Rating: 1571 | Secured 3+ Badges | Top 4.3%",
      icon: <Star className="h-6 w-6" />,
      color: "orange",
    },
    {
      title: "Codeforces",
      description: "Maximum Rating: 4725 || 2 Star Rating in div 2",
      icon: <Award className="h-6 w-6" />,
      color: "red",
    },
    {
      title: "HackerRank",
      description: "Gold badge in C++",
      icon: <Medal className="h-6 w-6" />,
      color: "yellow",
    },
    {
      title: "FIEASTA'25",
      description: "Project Presentation Runner",
      icon: <Trophy className="h-6 w-6" />,
      color: "silver",
    },
    {
      title: "SAP 2025",
      description: "Selected for the final (ongoing)",
      icon: <Target className="h-6 w-6" />,
      color: "blue",
    },
    {
      title: "HackStorm 2K25",
      description: "Project Presentation Winner || participated in 36 hrs hackathon",
      icon: <Trophy className="h-6 w-6" />,
      color: "purple",
    },
  ]

  return (
    <div>
      <div className="mb-8 max-w-md mx-auto">
        <ImageGallery category="coding" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
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
                      achievement.color === "gold"
                        ? "bg-amber-500/20 text-amber-400"
                        : achievement.color === "orange"
                          ? "bg-orange-500/20 text-orange-400"
                          : achievement.color === "red"
                            ? "bg-red-500/20 text-red-400"
                            : achievement.color === "yellow"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : achievement.color === "silver"
                                ? "bg-gray-400/20 text-gray-300"
                                : achievement.color === "blue"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-purple-500/20 text-purple-400"
                    }`}
                  >
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{achievement.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
