"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { FiAward, FiShield, FiClock, FiCheckCircle } from "react-icons/fi"
import { motion } from "framer-motion"
import { MdVerifiedUser, MdSecurity, MdFlashOn, MdWorkspacePremium } from "react-icons/md"

export default function About() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <FiAward className="w-6 h-6" />,
      title: t("about.experience.title"),
      description: t("about.experience.description"),
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: t("about.certified.title"),
      description: t("about.certified.description"),
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: t("about.support.title"),
      description: t("about.support.description"),
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: t("about.warranty.title"),
      description: t("about.warranty.description"),
    },
  ]

  const badges = [
    { label: t("about.badge.epa"), icon: <MdVerifiedUser className="w-5 h-5" /> },
    { label: t("about.badge.licensed"), icon: <MdSecurity className="w-5 h-5" /> },
    { label: t("about.badge.emergency"), icon: <MdFlashOn className="w-5 h-5" /> },
    { label: t("about.badge.warranty"), icon: <MdWorkspacePremium className="w-5 h-5" /> },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container max-w-screen-2xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">{t("about.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("about.subtitle")}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/30 h-full">
                <CardHeader>
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center items-center gap-6 pt-8 border-t border-border/30"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={badgeVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
            >
              <span className="text-primary">{badge.icon}</span>
              <span className="text-sm font-semibold text-foreground">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
