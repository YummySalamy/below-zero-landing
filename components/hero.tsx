"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { FiArrowRight, FiThermometer } from "react-icons/fi"
import { BsSnow2 } from "react-icons/bs"

export default function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-1/4 animate-float">
        <BsSnow2 className="w-8 h-8 text-primary/30" />
      </div>
      <div className="absolute top-1/3 right-1/3 animate-float" style={{ animationDelay: "1s" }}>
        <FiThermometer className="w-6 h-6 text-primary/40" />
      </div>
      <div className="absolute bottom-1/3 left-1/5 animate-float" style={{ animationDelay: "2s" }}>
        <BsSnow2 className="w-10 h-10 text-primary/20" />
      </div>

      <div className="container relative z-10 max-w-screen-2xl px-4">
        <div className="flex flex-col items-center text-center space-y-8 py-24">
          {/* Logo/Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-3xl flex items-center justify-center mb-4 animate-pulse-glow">
            <BsSnow2 className="w-10 h-10 text-white" />
          </div>

          {/* Main Content */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </h1>

            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-4">{t("hero.subtitle")}</div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("hero.description")}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full group"
              onClick={() => scrollToSection("contact")}
            >
              {t("hero.cta.primary")}
              <FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-transparent"
              onClick={() => scrollToSection("services")}
            >
              {t("hero.cta.secondary")}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 w-full max-w-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
