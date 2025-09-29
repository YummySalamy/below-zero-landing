"use client"

import { useEffect } from "react"

export function usePerformanceMonitoring() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("[v0] LCP:", entry.startTime)
          }
        }
      })

      try {
        observer.observe({ entryTypes: ["largest-contentful-paint"] })
      } catch (e) {
        // Fallback for browsers that don't support this
      }

      // First Input Delay (FID) and Interaction to Next Paint (INP)
      const interactionObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "first-input") {
            console.log("[v0] FID:", entry.processingStart - entry.startTime)
          }
        }
      })

      try {
        interactionObserver.observe({ entryTypes: ["first-input"] })
      } catch (e) {
        // Fallback for browsers that don't support this
      }

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        }
        console.log("[v0] CLS:", clsValue)
      })

      try {
        clsObserver.observe({ entryTypes: ["layout-shift"] })
      } catch (e) {
        // Fallback for browsers that don't support this
      }

      return () => {
        observer.disconnect()
        interactionObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])
}
