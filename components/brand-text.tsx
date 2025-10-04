"use client"

import { motion } from "framer-motion"

interface BrandTextProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function BrandText({ className = "", size = "md" }: BrandTextProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <motion.div
      className={`font-bold leading-tight ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-start">
        <div
          className={`${sizeClasses[size]} text-foreground tracking-wide`}
          style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
          BELOW
        </div>
        <div className="flex items-baseline gap-1">
          <span
            className={`${sizeClasses[size]} text-[#0AD3DD] font-extrabold tracking-wide`}
            style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
          >
            ZERO
          </span>
          <span
            className={`text-sm text-muted-foreground font-medium tracking-wider`}
            style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
          >
            LLC
          </span>
        </div>
      </div>
    </motion.div>
  )
}
