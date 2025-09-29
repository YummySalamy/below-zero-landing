"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { FiTool, FiZap, FiUsers, FiShield, FiClock, FiAward } from "react-icons/fi"
import { MdBuild, MdOutlineAir, MdOutlineThermostat } from "react-icons/md"
import { motion } from "framer-motion"

export default function Services() {
  const { t } = useLanguage()

  const mainServices = [
    {
      icon: <FiTool className="w-8 h-8" />,
      title: t("services.maintenance.title"),
      description: t("services.maintenance.description"),
      color: "from-blue-500 via-blue-600 to-cyan-500",
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: t("services.repair.title"),
      description: t("services.repair.description"),
      color: "from-red-500 via-red-600 to-orange-500",
    },
    {
      icon: <MdBuild className="w-8 h-8" />,
      title: t("services.installation.title"),
      description: t("services.installation.description"),
      color: "from-green-500 via-green-600 to-emerald-500",
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: t("services.consultation.title"),
      description: t("services.consultation.description"),
      color: "from-purple-500 via-purple-600 to-pink-500",
    },
  ]

  const additionalServices = [
    {
      icon: <MdOutlineAir className="w-6 h-6" />,
      title: t("services.additional.airQuality.title"),
      description: t("services.additional.airQuality.description"),
    },
    {
      icon: <MdOutlineThermostat className="w-6 h-6" />,
      title: t("services.additional.temperatureMonitoring.title"),
      description: t("services.additional.temperatureMonitoring.description"),
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: t("services.additional.systemProtection.title"),
      description: t("services.additional.systemProtection.description"),
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: t("services.additional.support247.title"),
      description: t("services.additional.support247.description"),
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: t("services.additional.qualityAssurance.title"),
      description: t("services.additional.qualityAssurance.description"),
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container max-w-screen-2xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {t("services.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-card/60 backdrop-blur-md rounded-[30px] overflow-hidden relative">
                {/* Frosted glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm" />

                <CardHeader className="text-center pb-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`w-20 h-20 mx-auto rounded-[25px] bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 shadow-xl`}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card/40 backdrop-blur-md rounded-[30px] p-8 border border-border/20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">{t("services.additional.title")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-4 rounded-[20px] bg-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-[15px] bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary">
                  {service.icon}
                </div>
                <h4 className="font-semibold text-sm mb-2">{service.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="rounded-[30px] px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary via-blue-600 to-cyan-500 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {t("services.cta")}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
