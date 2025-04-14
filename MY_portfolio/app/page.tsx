"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Server,
  Cpu,
  Braces,
  Terminal,
  ChevronRight,
  ArrowUpRight,
  Menu,
  X,
  Moon,
  Sun,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"

// Custom components
import AnimatedGradientHr from "@/components/animated-gradient-hr"
import ParticlesBg from "@/components/particles-bg"
import TimelineComponent from "@/components/timeline"
import TypewriterText from "@/components/typewriter-text"
import ProjectModal from "@/components/project-modal"
import MouseParallax from "@/components/mouse-parallax"
import TiltCard from "@/components/tilt-card"

// Add the new imports for the components we created
import Certifications from "@/components/certifications"
import Achievements from "@/components/achievements"
import Experience from "@/components/experience"
import SoftSkills from "@/components/soft-skills"
import TechInsights from "@/components/tech-insights"
import ImageGallery from "@/components/image-gallery"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const { theme, setTheme } = useTheme()

  const { scrollYProgress } = useScroll()
  const headerRef = useRef(null)

  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  // Prevent hydration errors with animations
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const openProjectModal = (project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  const projects = [
    {
      id: 1,
      title: "LLM INTEGRATED GEMINI API CHAT-BOT",
      description: "A full-stack chat bot leveraging Gemini LLM API for dynamic conversational AI",
      image: "https://images.unsplash.com/photo-1677442135968-6d89469c5f97?q=80&w=500&auto=format&fit=crop",
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Redux", "JWT", "Gemini API"],
      link: "#",
      github: "https://github.com/yourusername/gemini-chatbot",
      details:
        "Built a full-stack chat bot leveraging Gemini LLM API for dynamic conversational AI. Designed a responsive frontend with React.js and Tailwind CSS, and developed backend services using Node.js and Express.js. Implemented JWT authentication, Redux for state management, and MongoDB for chat persistence. Integrated real-time prompt handling with contextual memory and token optimization.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Redux", "JWT", "Gemini API"],
      features: [
        "Dynamic conversational AI using Gemini LLM API",
        "Responsive frontend with React.js and Tailwind CSS",
        "JWT authentication for secure access",
        "Redux for state management",
        "MongoDB for chat persistence",
        "Real-time prompt handling with contextual memory",
      ],
    },
    {
      id: 2,
      title: "SMART WASTE MANAGEMENT SYSTEM",
      description: "A full-stack waste management system to streamline waste collection and tracking",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=500&auto=format&fit=crop",
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Redux", "JWT", "AI", "Python"],
      link: "#",
      github: "https://github.com/yourusername/waste-management",
      details:
        "Designed and developed a full-stack waste management system to streamline waste collection and tracking. Built the frontend using React.js and developed backend services with Node.js and Express.js using RESTful APIs. Integrated MongoDB for real-time data storage and route mapping of waste collection units. Implemented user roles (Admin, Citizen) with JWT authentication and dynamic dashboards. Deployed via Vercel. Enabled waste request logging, live status tracking, and analytics for smart city integration.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Redux", "JWT", "AI", "Python"],
      features: [
        "Real-time waste collection tracking",
        "User roles with JWT authentication",
        "Dynamic dashboards for different user types",
        "Route mapping for waste collection units",
        "Waste request logging and status tracking",
        "Analytics for smart city integration",
      ],
    },
    {
      id: 3,
      title: "AI POWERED LEAF DISEASE DIAGNOSIS",
      description: "CNN-based plant disease classifier using TensorFlow for multi-class image classification",
      image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=500&auto=format&fit=crop",
      tags: ["AI", "Deep Learning", "CNN", "Python", "TensorFlow", "OpenCV", "Flask"],
      link: "#",
      github: "https://github.com/yourusername/leaf-disease-diagnosis",
      details:
        "Developed a CNN-based plant disease classifier using TensorFlow for multi-class image classification, with OpenCV preprocessing (color normalization, resizing). Deployed via Flask for real-time inference on user-uploaded leaf images, enabling low-latency, AI-driven diagnosis to support precision agriculture.",
      technologies: ["AI", "Deep Learning", "CNN", "Python", "TensorFlow", "OpenCV", "Flask"],
      features: [
        "Multi-class image classification for plant diseases",
        "OpenCV preprocessing for image enhancement",
        "Real-time inference on user-uploaded images",
        "Low-latency AI-driven diagnosis",
        "Support for precision agriculture",
        "Flask deployment for web access",
      ],
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Interactive and responsive Full Stack Developer portfolio website",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=500&auto=format&fit=crop",
      tags: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
      link: "#",
      github: "https://github.com/yourusername/portfolio",
      details:
        "Created a modern, interactive portfolio website using Next.js, React, and Tailwind CSS. Implemented smooth animations with Framer Motion and 3D elements with Three.js. Features responsive design, dark/light mode, and interactive project showcases.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design for all device sizes",
        "Interactive 3D elements and animations",
        "Dark/light mode toggle",
        "Project showcase with detailed modals",
        "Contact form with validation",
        "Performance optimized loading",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-white dark:text-white">
      <ParticlesBg />

      {/* Navigation */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 dark:bg-black/20 border-b border-white/10 dark:border-white/10"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="font-mono text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            >
              dev.future
            </Link>

            <nav className="hidden md:flex space-x-8 font-mono text-sm">
              <Link
                href="#intro"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:underline decoration-pink-500 underline-offset-8"
              >
                // Introduction()
              </Link>
              <Link
                href="#stack"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:underline decoration-blue-500 underline-offset-8"
              >
                ~ Tech.Stack[]
              </Link>
              <Link
                href="#projects"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:underline decoration-green-500 underline-offset-8"
              >
                @ Projects::Deployed
              </Link>
              <Link
                href="#experience"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:underline decoration-blue-500 underline-offset-8"
              >
                &lt; Experience /&gt;
              </Link>
              <Link
                href="#achievements"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:underline decoration-amber-500 underline-offset-8"
              >
                🏆 Achievements
              </Link>
              <Link
                href="#contact"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:underline decoration-purple-500 underline-offset-8"
              >
                : Contact&lt;Me&gt;
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <Button variant="ghost" className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-16 z-40 bg-black/90 backdrop-blur-lg border-b border-white/10"
          >
            <nav className="container mx-auto py-6 px-4 flex flex-col space-y-4 font-mono">
              <Link
                href="#intro"
                className="text-white/70 hover:text-white transition-colors duration-300 py-2 px-4 hover:bg-white/5 rounded-lg"
                onClick={toggleMobileMenu}
              >
                // Introduction()
              </Link>
              <Link
                href="#stack"
                className="text-white/70 hover:text-white transition-colors duration-300 py-2 px-4 hover:bg-white/5 rounded-lg"
                onClick={toggleMobileMenu}
              >
                ~ Tech.Stack[]
              </Link>
              <Link
                href="#projects"
                className="text-white/70 hover:text-white transition-colors duration-300 py-2 px-4 hover:bg-white/5 rounded-lg"
                onClick={toggleMobileMenu}
              >
                @ Projects::Deployed
              </Link>
              <Link
                href="#experience"
                className="text-white/70 hover:text-white transition-colors duration-300 py-2 px-4 hover:bg-white/5 rounded-lg"
                onClick={toggleMobileMenu}
              >
                &lt; Experience /&gt;
              </Link>
              <Link
                href="#achievements"
                className="text-white/70 hover:text-white transition-colors duration-300 py-2 px-4 hover:bg-white/5 rounded-lg"
                onClick={toggleMobileMenu}
              >
                🏆 Achievements
              </Link>
              <Link
                href="#contact"
                className="text-white/70 hover:text-white transition-colors duration-300 py-2 px-4 hover:bg-white/5 rounded-lg"
                onClick={toggleMobileMenu}
              >
                : Contact&lt;Me&gt;
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 py-10">
        {/* Hero Section */}
        <section id="intro" className="min-h-[90vh] flex flex-col justify-center relative">
          <MouseParallax>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="block">Hi, I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                  <TypewriterText text="Naviya Dharshini A S" />
                </span>
                <span className="block">Full Stack Developer</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
                Building seamless digital experiences with MERN Stack.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 text-white border-none">
                  View Resume
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>

                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Contact Me
                </Button>

                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Explore Projects
                </Button>
              </div>

              <div className="flex gap-4 mt-12">
                <motion.a
                  href="https://github.com/23AD083"
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                  rel="noreferrer"
                >
                  <Github className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/naviya-dharshini-a-s-b8ab25286/"
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                  rel="noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="mailto:naviyadharshini33@gmail.com"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </MouseParallax>

          <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" style={{ opacity }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </motion.div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-auto hidden lg:block">
            <ImageGallery category="creative" />
          </div>
        </section>

        <AnimatedGradientHr />

        {/* About Me Section */}
        <section id="about" className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-2 font-mono">
                // Introduction<span className="text-pink-400">.me</span>
              </h2>
              <p className="text-white/70 mb-6">Passionate about creating innovative digital experiences</p>

              <div className="space-y-4 text-white/80">
                <p>
                  Results-driven Full Stack Developer with hands-on experience in MERN stack, JWT auth, CI/CD
                  deployment, and scalable application architecture.
                </p>
                <p>
                  I'm passionate about creating innovative digital experiences that combine cutting-edge technology with
                  intuitive design. Currently pursuing B.Tech in AI-DS at Sri Eshwar College of Engineering with a CGPA
                  of 7.77 (up to 3rd semester).
                </p>
                <p>
                  My technical expertise spans across multiple programming languages and frameworks, with a focus on
                  building responsive applications with robust authentication and database integration.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Badge className="bg-pink-600 hover:bg-pink-700 px-4 py-2 text-sm">MongoDB</Badge>
                <Badge className="bg-purple-600 hover:bg-purple-700 px-4 py-2 text-sm">Express.js</Badge>
                <Badge className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-sm">React.js</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm">Node.js</Badge>
                <Badge className="bg-green-600 hover:bg-green-700 px-4 py-2 text-sm">Python</Badge>
                <Badge className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 text-sm">Java</Badge>
                <Badge className="bg-red-600 hover:bg-red-700 px-4 py-2 text-sm">C/C++</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 text-sm">Tailwind CSS</Badge>
              </div>
            </motion.div>

            <TiltCard>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden p-1">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                    alt="Developer Profile"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </motion.div>
            </TiltCard>
          </div>
        </section>

        <AnimatedGradientHr />

        {/* Skills Section */}
        <section id="stack" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-2 font-mono">
              ~ Tech.Stack<span className="text-blue-400">[]</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              A comprehensive collection of technologies and tools in my developer arsenal
            </p>
          </motion.div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-4 max-w-2xl mx-auto bg-white/5 p-1 rounded-xl">
              <TabsTrigger
                value="frontend"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:via-purple-500 data-[state=active]:to-indigo-500 rounded-lg"
              >
                <Code className="mr-2 h-4 w-4" />
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 rounded-lg"
              >
                <Server className="mr-2 h-4 w-4" />
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="frameworks"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 rounded-lg"
              >
                <Cpu className="mr-2 h-4 w-4" />
                Frameworks
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-yellow-500 rounded-lg"
              >
                <Terminal className="mr-2 h-4 w-4" />
                Tools
              </TabsTrigger>
            </TabsList>

            <div className="mt-8">
              <TabsContent value="frontend" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "WebGL", "CSS/SASS", "HTML5"].map(
                    (skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-indigo-500/30 rounded-full flex items-center justify-center mb-4">
                          <Braces className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold">{skill}</h3>
                      </motion.div>
                    ),
                  )}
                </div>
              </TabsContent>

              <TabsContent value="backend" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Node.js", "Python", "Express", "Django", "GraphQL", "PostgreSQL", "MongoDB", "Firebase"].map(
                    (skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center"
                      >
                        <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mb-4">
                          <Server className="h-8 w-8 text-green-300" />
                        </div>
                        <h3 className="font-bold">{skill}</h3>
                      </motion.div>
                    ),
                  )}
                </div>
              </TabsContent>

              <TabsContent value="frameworks" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["React Native", "Vue.js", "Angular", "Svelte", "Electron", "Flutter", "NestJS", "Laravel"].map(
                    (skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center"
                      >
                        <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mb-4">
                          <Cpu className="h-8 w-8 text-purple-300" />
                        </div>
                        <h3 className="font-bold">{skill}</h3>
                      </motion.div>
                    ),
                  )}
                </div>
              </TabsContent>

              <TabsContent value="tools" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Git", "Docker", "AWS", "CI/CD", "Kubernetes", "Figma", "VS Code", "Linux"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center"
                    >
                      <div className="w-16 h-16 bg-amber-500/30 rounded-full flex items-center justify-center mb-4">
                        <Terminal className="h-8 w-8 text-amber-300" />
                      </div>
                      <h3 className="font-bold">{skill}</h3>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </section>

        <AnimatedGradientHr />

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-2 font-mono">
              @ Projects::<span className="text-green-400">Deployed</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              A showcase of my technical projects and contributions to the tech ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <TiltCard>
                  <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/20 h-full flex flex-col">
                    <motion.div
                      className="relative overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-white border-white/20 hover:bg-white/20"
                          onClick={() => openProjectModal(project)}
                        >
                          View Details
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>

                    <CardHeader>
                      <CardTitle className="text-xl text-white group-hover:text-green-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-white/70">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-white/5 text-white/80 border-white/10">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="border-t border-white/10 pt-4 flex justify-between">
                      <Link href={project.github} className="text-white/70 hover:text-white text-sm flex items-center">
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </Link>
                      <Link
                        href={project.link}
                        className="text-green-400 hover:text-green-300 text-sm flex items-center"
                      >
                        Demo
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
              View All Projects
            </Button>
          </div>
        </section>

        <AnimatedGradientHr />

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-2 font-mono">
              &lt; Professional<span className="text-blue-400">_Experience</span> /&gt;
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              My journey as a Full Stack Developer and software engineering professional
            </p>
          </motion.div>

          <Experience />
        </section>

        <AnimatedGradientHr />

        {/* Certifications Section */}
        <section id="certifications" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-2 font-mono">
              $ Certifications.<span className="text-green-400">verified()</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">Professional certifications and technical qualifications</p>
          </motion.div>

          <Certifications />
        </section>

        <AnimatedGradientHr />

        {/* Achievements Section */}
        <section id="achievements" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-2 font-mono">
              🏆 Achievements.<span className="text-amber-400">unlocked()</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">Recognition, awards, and notable accomplishments</p>
          </motion.div>

          <Achievements />
        </section>

        <AnimatedGradientHr />

        {/* Soft Skills Section */}
        <section id="soft-skills" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-2 font-mono">
              ⚡ Soft<span className="text-purple-400">.Skills</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Professional attributes that complement my technical expertise
            </p>
          </motion.div>

          <SoftSkills />
        </section>

        <AnimatedGradientHr />

        {/* Tech Insights Section */}
        <section id="tech-insights" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-2 font-mono">
              📊 Future<span className="text-cyan-400">.Tech(2027)</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">Insights on the future of technology and development</p>
          </motion.div>

          <TechInsights />
        </section>

        <AnimatedGradientHr />

        {/* Publications Section */}
        <section id="publications" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-2 font-mono">
              # Publications<span className="text-yellow-400"> & Papers</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">Technical writings, research, and thought leadership</p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "The Future of Web Development: 3D Experiences and Immersive Interfaces",
                journal: "Web Development Trends",
                date: "2023",
                abstract:
                  "An exploration of how 3D technologies like Three.js and WebGL are transforming the web from flat pages to immersive experiences.",
                link: "#",
              },
              {
                title: "Building Accessible Interactive Experiences",
                journal: "Frontend Quarterly",
                date: "2023",
                abstract:
                  "A comprehensive guide to creating interactive web experiences that remain accessible to all users, including those with disabilities.",
                link: "#",
              },
              {
                title: "Optimizing React Applications for Performance",
                journal: "React Patterns",
                date: "2022",
                abstract:
                  "Advanced techniques for optimizing React applications, focusing on rendering performance and state management.",
                link: "#",
              },
            ].map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-4 md:items-center">
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{paper.title}</h3>
                    <div className="flex items-center text-white/60 text-sm mb-3">
                      <span>{paper.journal}</span>
                      <span className="mx-2">•</span>
                      <span>{paper.date}</span>
                    </div>
                    <p className="text-white/80">{paper.abstract}</p>
                  </div>

                  <div className="md:w-1/4 flex md:justify-end">
                    <Button variant="outline" className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20">
                      Read Article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Code Snippet Example */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
          >
            <div className="flex items-center justify-between bg-white/5 px-4 py-2 border-b border-white/10">
              <div className="font-mono text-sm text-white/70">three-scene.js</div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <pre className="p-4 overflow-x-auto text-sm font-mono text-white/90">
              <code>{`import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Initialize scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0f1729);

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Set up renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Add controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Create geometry
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
const material = new THREE.MeshStandardMaterial({ 
  color: 0x6366f1,
  metalness: 0.7,
  roughness: 0.2,
});
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// Add lights
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});`}</code>
            </pre>
          </motion.div>
        </section>

        <AnimatedGradientHr />

        {/* Timeline Section */}
        <section id="timeline" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-2 font-mono">
              &gt; Timeline.to<span className="text-cyan-400">(2027)</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">My journey and vision for the future</p>
          </motion.div>

          <TimelineComponent />
        </section>

        <AnimatedGradientHr />

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-2 font-mono">
              : Contact<span className="text-purple-400">&lt;Me&gt;</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">Let's connect and explore potential collaborations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/80">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="naviyadharshini33@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/80">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="Subject"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Email</p>
                      <a
                        href="mailto:naviyadharshini33@gmail.com"
                        className="text-white hover:text-purple-400 transition-colors"
                      >
                        naviyadharshini33@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                      <Linkedin className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/naviya-dharshini-a-s-b8ab25286/"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        linkedin.com/in/naviya-dharshini-a-s-b8ab25286/
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center mr-4">
                      <Github className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">GitHub</p>
                      <a href="https://github.com/23AD083" className="text-white hover:text-gray-400 transition-colors">
                        github.com/23AD083
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center mt-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Phone</p>
                      <a href="tel:9363625699" className="text-white hover:text-green-400 transition-colors">
                        +91 9363625699
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <div className="aspect-video rounded-lg overflow-hidden bg-white/10">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex items-center justify-center">
                    <p className="text-white/60">Interactive Map Placeholder</p>
                  </div>
                </div>
                <p className="mt-4 text-white/80">
                  Based in Tamil Nadu, India
                  <br />
                  Available for remote work worldwide
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <AnimatedGradientHr />

        {/* Timeline Section */}
        <section id="timeline" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-2 font-mono">
              &gt; Timeline.to<span className="text-cyan-400">(2027)</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">My journey and vision for the future</p>
          </motion.div>

          <TimelineComponent />
        </section>

        <AnimatedGradientHr />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Link
                href="/"
                className="font-mono text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-2 inline-block"
              >
                dev.future
              </Link>
              <p className="text-white/60 max-w-md">
                Building the future through code, innovation, and immersive digital experiences.
              </p>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/23AD083"
                target="_blank"
                whileHover={{ y: -5, scale: 1.1 }}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="https://twitter.com"
                target="_blank"
                whileHover={{ y: -5, scale: 1.1 }}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                rel="noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/naviya-dharshini-a-s-b8ab25286/"
                target="_blank"
                whileHover={{ y: -5, scale: 1.1 }}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="mailto:hello@example.com"
                whileHover={{ y: -5, scale: 1.1 }}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-white/60">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={closeProjectModal} />}
      </AnimatePresence>
    </div>
  )
}
