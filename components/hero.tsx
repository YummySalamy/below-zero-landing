"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { FiArrowRight, FiThermometer } from "react-icons/fi"
import { RiSnowflakeLine } from "react-icons/ri"
import ThemeLogo from "./theme-logo"
import { useState, useEffect } from "react"

export default function Hero() {
  const { t, language } = useLanguage()
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  useEffect(() => {
    const serviceTypes = 3 // Residential, Commercial, Industrial
    let currentIndex = 0

    const interval = setInterval(() => {
      setHighlightedIndex(currentIndex)
      currentIndex = (currentIndex + 1) % serviceTypes

      // After one complete cycle, stop highlighting
      if (currentIndex === 0) {
        setTimeout(() => setHighlightedIndex(null), 2000)
        clearInterval(interval)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [language]) // Reset animation when language changes

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const subtitle = t("hero.subtitle")
  const serviceTypes = subtitle.split(" • ")

  const title = t("hero.title")
  const highlightWord = language === "es" ? "Profesionales" : "Solutions"
  const titleParts = title.split(highlightWord)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#0AD3DD]/5" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0B304D]/5 rounded-full blur-3xl animate-pulse" />

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-1/4 animate-float">
        <RiSnowflakeLine className="w-8 h-8 text-[#0AD3DD]/30" />
      </div>
      <div className="absolute top-1/4 right-1/3 animate-float" style={{ animationDelay: "1s" }}>
        <FiThermometer className="w-6 h-6 text-[#0AD3DD]/40" />
      </div>
      <div className="absolute bottom-1/3 left-1/5 animate-float" style={{ animationDelay: "2s" }}>
        <RiSnowflakeLine className="w-10 h-10 text-[#0AD3DD]/20" />
      </div>

      <div className="container relative z-10 max-w-screen-2xl px-4">
        <div className="flex flex-col items-center text-center space-y-8 py-24">
          <div className="flex justify-center mb-8">
            <ThemeLogo width={240} height={120} priority />
          </div>

          {/* Main Content */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-[#0B304D] dark:text-white">{titleParts[0]}</span>
              <span className="text-[#0AD3DD]">{highlightWord}</span>
              {titleParts[1] && <span className="text-[#0B304D] dark:text-white">{titleParts[1]}</span>}
            </h1>

            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B304D] dark:text-white mb-4">
              {serviceTypes.map((type, index) => (
                <span key={index}>
                  <span
                    className={`transition-colors duration-500 hover:text-[#0AD3DD] cursor-default ${
                      highlightedIndex === index ? "text-[#0AD3DD]" : ""
                    }`}
                  >
                    {type}
                  </span>
                  {index < serviceTypes.length - 1 && " • "}
                </span>
              ))}
            </div>

            <p className="text-lg sm:text-xl text-[#0B304D]/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
              {t("hero.description").split("New Jersey")[0]}
              <span className="text-[#0AD3DD] font-semibold">New Jersey</span>
              {t("hero.description").split("New Jersey")[1]}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full group bg-[#0AD3DD] hover:bg-[#0AD3DD]/90 text-[#0B304D] font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              {t("hero.cta.primary")}
              <FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-transparent border-[#0AD3DD] text-[#0AD3DD] hover:bg-[#0AD3DD]/10"
              onClick={() => scrollToSection("services")}
            >
              {t("hero.cta.secondary")}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 pt-16 w-full max-w-3xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0AD3DD]">15+</div>
              <div className="text-sm text-[#0B304D]/60 dark:text-white/60">
                {language === "es" ? "Años de Experiencia" : "Years Experience"}
              </div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-[#0AD3DD]">24/7</div>
              <div className="text-sm text-[#0B304D]/60 dark:text-white/60">
                {language === "es" ? "Soporte" : "Support"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
