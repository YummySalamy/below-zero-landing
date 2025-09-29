"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { FiChevronDown } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

const languages = [
  { code: "en", label: "EN", flag: "🇺🇸", name: "English" },
  { code: "es", label: "ES", flag: "🇪🇸", name: "Español" },
]

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as "en" | "es")
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-9 px-3 rounded-[30px] border-2 border-border/50 hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
      >
        <span className="text-lg mr-1">{currentLanguage.flag}</span>
        <span className="font-medium text-sm">{currentLanguage.label}</span>
        <FiChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full mt-2 right-0 w-32 bg-background/95 backdrop-blur-md border-2 border-border/50 rounded-[20px] shadow-xl overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-3 py-2 text-left hover:bg-primary/10 transition-colors duration-200 flex items-center space-x-2 ${
                  language === lang.code ? "bg-primary/20 text-primary" : "text-foreground"
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <div className="flex flex-col">
                  <span className="font-medium text-xs">{lang.label}</span>
                  <span className="text-xs text-muted-foreground">{lang.name}</span>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
