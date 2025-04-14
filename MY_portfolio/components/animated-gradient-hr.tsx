"use client"

import { motion } from "framer-motion"

export default function AnimatedGradientHr() {
  return (
    <div className="relative py-8">
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center"
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>
    </div>
  )
}
