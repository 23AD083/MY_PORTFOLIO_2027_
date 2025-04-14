"use client"

import { motion } from "framer-motion"
import { Cpu, Atom, Brain, Globe, Shield, Database } from "lucide-react"

interface InsightCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export default function InsightCard({ title, description, icon, color }: InsightCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "cpu":
        return <Cpu className="h-6 w-6" />
      case "atom":
        return <Atom className="h-6 w-6" />
      case "brain":
        return <Brain className="h-6 w-6" />
      case "globe":
        return <Globe className="h-6 w-6" />
      case "shield":
        return <Shield className="h-6 w-6" />
      case "database":
        return <Database className="h-6 w-6" />
      default:
        return <Cpu className="h-6 w-6" />
    }
  }

  const getBgColor = () => {
    switch (color) {
      case "purple":
        return "bg-purple-500/20"
      case "blue":
        return "bg-blue-500/20"
      case "pink":
        return "bg-pink-500/20"
      case "green":
        return "bg-green-500/20"
      case "amber":
        return "bg-amber-500/20"
      default:
        return "bg-purple-500/20"
    }
  }

  const getTextColor = () => {
    switch (color) {
      case "purple":
        return "text-purple-400"
      case "blue":
        return "text-blue-400"
      case "pink":
        return "text-pink-400"
      case "green":
        return "text-green-400"
      case "amber":
        return "text-amber-400"
      default:
        return "text-purple-400"
    }
  }

  const getBorderColor = () => {
    switch (color) {
      case "purple":
        return "border-purple-500/30"
      case "blue":
        return "border-blue-500/30"
      case "pink":
        return "border-pink-500/30"
      case "green":
        return "border-green-500/30"
      case "amber":
        return "border-amber-500/30"
      default:
        return "border-purple-500/30"
    }
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white/5 backdrop-blur-sm border ${getBorderColor()} rounded-xl p-6 transition-all duration-300`}
    >
      <div className="flex items-start">
        <div className={`${getBgColor()} ${getTextColor()} p-3 rounded-lg mr-4`}>{getIcon()}</div>
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-white/70 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
