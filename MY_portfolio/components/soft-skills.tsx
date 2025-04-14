"use client"

import { motion } from "framer-motion"

export default function SoftSkills() {
  const skills = [
    "Problem Solving",
    "Collaboration",
    "Time Management",
    "Critical Thinking",
    "Agile Mindset",
    "Communication",
    "Adaptability",
    "Creativity",
    "Leadership",
    "Attention to Detail",
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm font-medium"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  )
}
