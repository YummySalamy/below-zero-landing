"use client"

import { useState } from "react"
import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  onLoad?: () => void
}

export default function OptimizedImage({
  src,
  alt,
  width = 400,
  height = 200,
  className = "",
  priority = false,
  onLoad,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setIsError(true)
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && !isError && (
        <div
          className="absolute inset-0 bg-muted/20 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}

      {/* Main image with fade-in effect */}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
        className={`
          transition-opacity duration-500 ease-out object-contain
          ${isLoaded ? "opacity-100" : "opacity-0"}
          ${className}
        `}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />

      {/* Error state */}
      {isError && (
        <div
          className="flex items-center justify-center bg-muted/20 text-muted-foreground text-sm"
          style={{ width, height }}
        >
          Failed to load image
        </div>
      )}
    </div>
  )
}
