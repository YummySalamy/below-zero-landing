"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa"
import { FiMessageCircle, FiX } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasBeenOpened, setHasBeenOpened] = useState(false)
  const { t } = useLanguage()

  const phoneNumber = "1234567890" // Replace with actual WhatsApp number
  const message = t("whatsapp.message")

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleToggleExpand = () => {
    if (!isExpanded) {
      setHasBeenOpened(true)
    }
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="whatsapp-float">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-20 right-0 mb-4 mr-2"
          >
            <div className="bg-background/95 backdrop-blur-md border border-border/50 rounded-[25px] p-4 shadow-2xl max-w-md w-64">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <FaWhatsapp className="w-5 h-5 text-white"/>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Below Zero</p>
                    <p className="text-xs text-green-500">Online</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsExpanded(false)}
                  className="h-6 w-6 rounded-full hover:bg-muted"
                >
                  <FiX className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{t("whatsapp.greeting")}</p>
              <Button
                onClick={handleWhatsAppClick}
                size="sm"
                className="w-full rounded-[20px] bg-green-500 hover:bg-green-600 text-white font-medium"
              >
                {t("whatsapp.startChat")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative"
      >
        <Button
          onClick={handleToggleExpand}
          size="lg"
          className="relative rounded-full w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 shadow-2xl transition-all duration-300 overflow-hidden group"
        >
          {/* Animated background pulse */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-green-400 rounded-full"
          />

          <motion.div animate={{ rotate: isHovered ? 10 : 0 }} transition={{ duration: 0.2 }} className="relative z-10">
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="message"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiMessageCircle className="w-8 h-8 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="whatsapp"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaWhatsapp className="w-8 h-8 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Ripple effect on hover */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <span className="sr-only">{t("whatsapp.contactUs")}</span>
        </Button>
      </motion.div>

      <AnimatePresence>
        {!hasBeenOpened && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg"
          />
        )}
      </AnimatePresence>
    </div>
  )
}
