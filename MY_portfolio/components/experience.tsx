"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ImageGallery from "@/components/image-gallery"

export default function Experience() {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-blue-400" />
          Full Stack Developer Experience
        </CardTitle>
        <CardDescription>Professional experience and internships</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-l-2 border-blue-500 pl-4 py-2"
        >
          <div className="mb-6">
            <ImageGallery category="developer" />
          </div>
          <div className="flex items-center text-sm text-white/60 mb-1">
            <Calendar className="h-4 w-4 mr-2" />
            <span>February 2025</span>
            <MapPin className="h-4 w-4 ml-4 mr-2" />
            <span>Better Tomorrow</span>
          </div>
          <h3 className="text-lg font-bold">MERN Stack Developer Internship</h3>
          <ul className="mt-2 space-y-2 text-white/80">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              Completed a 1-month Full Stack Developer role using the MERN stack.
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              Built responsive apps with JWT auth and MongoDB-backed APIs.
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              Deployed via GitHub Actions & Vercel with zero downtime.
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">→</span>
              Explored SSR, authentication flows, and RBAC implementation.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-l-2 border-purple-500 pl-4 py-2"
        >
          <div className="flex items-center text-sm text-white/60 mb-1">
            <Calendar className="h-4 w-4 mr-2" />
            <span>April 2025</span>
            <MapPin className="h-4 w-4 ml-4 mr-2" />
            <span>AlgoTutor</span>
          </div>
          <h3 className="text-lg font-bold">Software Developer Intern</h3>
          <ul className="mt-2 space-y-2 text-white/80">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">→</span>
              Currently interning with DSA, actively engaged in programming and problem solving.
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">→</span>
              Working under mentorship to enhance expertise in data structures and algorithms.
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">→</span>
              Developing optimized solutions for complex computational problems.
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">→</span>
              Implementing efficient algorithms with a focus on time and space complexity.
            </li>
          </ul>
        </motion.div>
      </CardContent>
    </Card>
  )
}
