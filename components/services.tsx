"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { FiTool, FiZap, FiUsers, FiShield } from "react-icons/fi"
import { MdBuild, MdOutlineAir, MdOutlineThermostat, MdPlumbing } from "react-icons/md"
import { motion } from "framer-motion"
import Image from "next/image"

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
      icon: <MdOutlineThermostat className="w-6 h-6" />,
      title: t("services.additional.industrialHeating.title"),
      description: t("services.additional.industrialHeating.description"),
      image:
        "https://boiler.mx/wp-content/uploads/2021/02/La-calefaccion-industrial-importancia-de-su-uso-en-las-industrias.jpeg",
    },
    {
      icon: <MdOutlineAir className="w-6 h-6" />,
      title: t("services.additional.ventilation.title"),
      description: t("services.additional.ventilation.description"),
      image: "https://www.suministrosfenollar.com/wp-content/uploads/2024/01/3d-rendering-ventilation-system.jpg",
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: t("services.additional.refrigeration.title"),
      description: t("services.additional.refrigeration.description"),
      image: "https://inverter.mx/wp-content/uploads/2021/08/tipos-de-aire-acondicionado-industrial.jpg",
    },
    {
      icon: <FiTool className="w-6 h-6" />,
      title: t("services.additional.hotWater.title"),
      description: t("services.additional.hotWater.description"),
      image: "https://new.phdheatingcooling.com/wp-content/uploads/2022/06/Air-Conditioning-Maintenance-1024x576.jpg",
    },
    {
      icon: <MdPlumbing className="w-6 h-6" />,
      title: t("services.additional.plumbing.title"),
      description: t("services.additional.plumbing.description"),
      image: "https://www.abtersteel.com/wp-content/uploads/2022/06/tesisat-sistemleri-muayene.jpg",
    },
    {
      icon: <MdPlumbing className="w-6 h-6" />,
      title: t("services.additional.specializedPlumbing.title"),
      description: t("services.additional.specializedPlumbing.description"),
      image: "https://www.novemark.com/public/cargas/productos/obj26/big_vyuduAbk.jpg",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">{t("services.title")}</h2>
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
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-border/40 dark:border-0 bg-card/80 dark:bg-card/60 backdrop-blur-md rounded-[30px] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent backdrop-blur-sm" />

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-primary">
            {t("services.additional.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full overflow-hidden rounded-[25px] border-2 border-border/40 dark:border-0 bg-card/80 dark:bg-card/60 backdrop-blur-md hover:shadow-xl transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent backdrop-blur-sm" />

                  <div className="relative z-10">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      <div className="absolute top-3 left-3">
                        <div className="w-10 h-10 rounded-[15px] bg-primary/90 backdrop-blur-sm flex items-center justify-center text-white shadow-lg">
                          {service.icon}
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <h4 className="font-bold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
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
