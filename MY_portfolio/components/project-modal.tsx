"use client"

import { motion } from "framer-motion"
import { X, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectModalProps {
  project: any
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-slate-900/80 backdrop-blur-sm border-b border-white/10">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="aspect-video mb-6 overflow-hidden rounded-lg">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-white/80">{project.details}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <Badge key={tech} className="bg-white/10 hover:bg-white/20 text-white">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1 text-white/80">
                {project.features.map((feature: string) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
            <Button variant="outline" className="border-white/20" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
