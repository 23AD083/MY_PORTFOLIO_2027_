"use client"

import { motion } from "framer-motion"

export default function TimelineComponent() {
  // Update the timelineItems array with Naviya's education and experience
  const timelineItems = [
    {
      year: "2019-2020",
      title: "SSLC",
      description: "Holy Innocents High School, PASS",
      icon: "📝",
      color: "purple",
    },
    {
      year: "2022-2023",
      title: "HSC",
      description: "Holy Innocents High School, 77.7%",
      icon: "📚",
      color: "green",
    },
    {
      year: "2023-2027",
      title: "B.Tech in AI-DS",
      description: "Sri Eshwar College of Engineering, CGPA: 7.77 (up to 3rd semester)",
      icon: "🎓",
      color: "blue",
    },
    {
      year: "Feb 2025",
      title: "Full Stack Development Internship",
      description: "Better Tomorrow - Enhanced programming and designing skills",
      icon: "💼",
      color: "pink",
    },
    {
      year: "Apr 2025",
      title: "Software Developer Intern",
      description: "AlgoTutor - Engaged in programming and problem solving, focusing on DSA",
      icon: "💻",
      color: "cyan",
    },
  ]

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 transform md:-translate-x-1/2"></div>

      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30 flex items-center justify-center transform -translate-x-1/2 z-10">
              <span className="text-sm">{item.icon}</span>
            </div>

            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <div
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors ${
                  item.color === "blue"
                    ? "hover:shadow-blue-500/20"
                    : item.color === "green"
                      ? "hover:shadow-green-500/20"
                      : item.color === "purple"
                        ? "hover:shadow-purple-500/20"
                        : item.color === "pink"
                          ? "hover:shadow-pink-500/20"
                          : "hover:shadow-cyan-500/20"
                } hover:shadow-lg`}
              >
                <div className="flex items-center mb-2">
                  <span
                    className={`
                    text-sm font-bold px-3 py-1 rounded-full mr-3
                    ${
                      item.color === "blue"
                        ? "bg-blue-500/20 text-blue-300"
                        : item.color === "green"
                          ? "bg-green-500/20 text-green-300"
                          : item.color === "purple"
                            ? "bg-purple-500/20 text-purple-300"
                            : item.color === "pink"
                              ? "bg-pink-500/20 text-pink-300"
                              : "bg-cyan-500/20 text-cyan-300"
                    }
                  `}
                  >
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-white/70">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
