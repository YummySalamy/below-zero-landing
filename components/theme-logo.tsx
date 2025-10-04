"use client"

import { useTheme } from "@/hooks/use-theme"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import OptimizedImage from "./optimized-image"

interface ThemeLogoProps {
  width?: number
  height?: number
  className?: string
  priority?: boolean
  alt?: string
}

export default function ThemeLogo({
  width = 160,
  height = 80,
  className = "",
  priority = false,
  alt = "Below Zero LLC",
}: ThemeLogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(theme)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && theme !== currentTheme) {
      // Small delay to allow for smooth transition
      const timer = setTimeout(() => {
        setCurrentTheme(theme)
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [theme, mounted, currentTheme])

  if (!mounted) {
    return <div className={`bg-muted animate-pulse rounded ${className}`} style={{ width, height }} />
  }

  const logoSrc = currentTheme === "dark" ? "/below-zero-dark-logo.jpg" : "/below-zero-logo.jpg"

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentTheme}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={className} // Solo aquí se aplica el className externo
      >
        <OptimizedImage
          src={logoSrc}
          alt={alt}
          width={width}
          height={height}
          className="" // Sin className duplicado para evitar conflictos
          priority={priority}
        />
      </motion.div>
    </AnimatePresence>
  )
}
