import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"], // Fixed: Changed from ["40", "70"] to ["400", "700"]
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Naviya Dharshini A S | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in MERN stack, JWT auth, and scalable application architecture. View my projects, skills, and experience.",
  openGraph: {
    title: "Naviya Dharshini A S | Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in MERN stack, JWT auth, and scalable application architecture.",
    url: "https://naviya-portfolio.vercel.app",
    siteName: "Naviya Dharshini Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
        width: 600,
        height: 400,
        alt: "Naviya Dharshini - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'