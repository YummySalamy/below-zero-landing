"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function SuccessCases() {
  const { t } = useLanguage()
  const [selectedCase, setSelectedCase] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const successCases = [
    {
      id: 1,
      title: t("successCases.case1.title"),
      client: t("successCases.case1.client"),
      description: t("successCases.case1.description"),
      results: [t("successCases.case1.result1"), t("successCases.case1.result2"), t("successCases.case1.result3")],
      images: [
        "https://www.multihousingnews.com/wp-content/uploads/sites/57/2024/10/Beacon-Hill-in-Marlboro-N.J-edited.jpg",
        "/hvac-equipment-room-commercial-building.jpg",
        "/modern-boiler-system-installation.jpg",
      ],
      category: "Commercial",
      year: "2024",
    },
    {
      id: 2,
      title: t("successCases.case2.title"),
      client: t("successCases.case2.client"),
      description: t("successCases.case2.description"),
      results: [t("successCases.case2.result1"), t("successCases.case2.result2"), t("successCases.case2.result3")],
      images: [
        "https://images.squarespace-cdn.com/content/v1/5164b16ae4b0cac6e79b081f/1541569970354-V3TN3HYZ7WAUYSGDV8SJ/2018_10_19-485+Marin-DSC00107.jpg?format=2500w",
        "https://i.vimeocdn.com/video/1963951091-821f18d39ef6164752590b7a66206d74d2cb7c2c7d23cc172bfdefd1c8c18fff-d?f=webp",
        "/commercial-office-hvac-ventilation-system.jpg",
      ],
      category: "Commercial",
      year: "2023",
    },
    {
      id: 3,
      title: t("successCases.case3.title"),
      client: t("successCases.case3.client"),
      description: t("successCases.case3.description"),
      results: [t("successCases.case3.result1"), t("successCases.case3.result2"), t("successCases.case3.result3")],
      images: [
        "https://blog.resurtidora.mx/hubfs/Blog/Septiembre2020/aire-acondicionado-industrial-cual-mejor-para-empresa.png",
        "/industrial-hvac-technician-installing-system.jpg",
        "/large-industrial-cooling-towers.jpg",
      ],
      category: "Industrial",
      year: "2023",
    },
    {
      id: 4,
      title: t("successCases.case4.title"),
      client: t("successCases.case4.client"),
      description: t("successCases.case4.description"),
      results: [t("successCases.case4.result1"), t("successCases.case4.result2"), t("successCases.case4.result3")],
      images: [
        "/luxury-hotel-hvac-system-installation.jpg",
        "/hotel-boiler-room-equipment.jpg",
        "/hotel-conference-center-climate-control.jpg",
      ],
      category: "Hospitality",
      year: "2024",
    },
    {
      id: 5,
      title: t("successCases.case5.title"),
      client: t("successCases.case5.client"),
      description: t("successCases.case5.description"),
      results: [t("successCases.case5.result1"), t("successCases.case5.result2"), t("successCases.case5.result3")],
      images: [
        "/medical-facility-hvac-hepa-filtration.jpg",
        "/hospital-grade-air-handling-unit.jpg",
        "/healthcare-plumbing-system-installation.jpg",
      ],
      category: "Healthcare",
      year: "2024",
    },
    {
      id: 6,
      title: t("successCases.case6.title"),
      client: t("successCases.case6.client"),
      description: t("successCases.case6.description"),
      results: [t("successCases.case6.result1"), t("successCases.case6.result2"), t("successCases.case6.result3")],
      images: [
        "/data-center-precision-cooling-system.jpg",
        "/server-room-hvac-redundant-systems.jpg",
        "/data-center-cooling-infrastructure.jpg",
      ],
      category: "Data Centers",
      year: "2023",
    },
  ]

  const categories = [
    { key: "All", label: t("successCases.category.all") },
    { key: "Commercial", label: t("successCases.category.commercial") },
    { key: "Industrial", label: t("successCases.category.industrial") },
    { key: "Hospitality", label: t("successCases.category.hospitality") },
    { key: "Healthcare", label: t("successCases.category.healthcare") },
    { key: "Data Centers", label: t("successCases.category.datacenters") },
  ]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredCases =
    activeCategory === "All" ? successCases : successCases.filter((c) => c.category === activeCategory)

  const nextImage = () => {
    if (selectedCase !== null) {
      const currentCase = successCases.find((c) => c.id === selectedCase)
      if (currentCase) {
        setCurrentImageIndex((prev) => (prev + 1) % currentCase.images.length)
      }
    }
  }

  const prevImage = () => {
    if (selectedCase !== null) {
      const currentCase = successCases.find((c) => c.id === selectedCase)
      if (currentCase) {
        setCurrentImageIndex((prev) => (prev - 1 + currentCase.images.length) % currentCase.images.length)
      }
    }
  }

  return (
    <section id="success-cases" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container max-w-screen-2xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">{t("successCases.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("successCases.subtitle")}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={activeCategory === category.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.key)}
              className={`rounded-[20px] px-6 py-2 transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background/60 backdrop-blur-sm border-border/50 hover:border-primary/50"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredCases.map((case_, index) => (
              <motion.div
                key={case_.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="group h-full overflow-hidden rounded-[30px] border-2 border-border/40 dark:border-0 bg-card/80 dark:bg-card/60 backdrop-blur-md hover:shadow-2xl transition-all duration-500 relative">
                  {/* Frosted glass effect - more visible in light theme */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent backdrop-blur-sm" />

                  <div className="relative z-10">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={case_.images[0] || "/placeholder.svg"}
                        alt={case_.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-[15px] backdrop-blur-sm">
                          {categories.find((cat) => cat.key === case_.category)?.label || case_.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-background/90 text-foreground text-xs font-medium rounded-[15px] backdrop-blur-sm">
                          {case_.year}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {case_.title}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-3">{case_.client}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{case_.description}</p>

                      {/* Results */}
                      <div className="space-y-2 mb-4">
                        {case_.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                            <span className="text-muted-foreground">{result}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedCase(case_.id)
                          setCurrentImageIndex(0)
                        }}
                        className="w-full rounded-[20px] hover:bg-primary/10 transition-colors"
                      >
                        {t("successCases.viewGallery")}
                        <FiExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Image Gallery Modal */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-background/95 backdrop-blur-md rounded-[30px] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const currentCase = successCases.find((c) => c.id === selectedCase)
                  if (!currentCase) return null

                  return (
                    <>
                      {/* Header */}
                      <div className="p-6 border-b border-border/20">
                        <h3 className="text-2xl font-bold">{currentCase.title}</h3>
                        <p className="text-primary font-medium">{currentCase.client}</p>
                      </div>

                      {/* Image Carousel */}
                      <div className="relative h-96">
                        <Image
                          src={currentCase.images[currentImageIndex] || "/placeholder.svg"}
                          alt={`${currentCase.title} - Image ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                        />

                        {/* Navigation Buttons */}
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
                        >
                          <FiChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
                        >
                          <FiChevronRight className="h-4 w-4" />
                        </Button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-[15px] text-sm text-white">
                          {currentImageIndex + 1} / {currentCase.images.length}
                        </div>
                      </div>

                      {/* Thumbnails */}
                      <div className="p-6 flex gap-3 overflow-x-auto">
                        {currentCase.images.map((image, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`relative w-20 h-16 rounded-[15px] overflow-hidden flex-shrink-0 transition-all duration-200 ${
                              idx === currentImageIndex ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                            }`}
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Thumbnail ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
