"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { FiAward, FiShield, FiClock, FiStar } from "react-icons/fi"

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
      icon: <FiStar className="w-6 h-6" />,
      title: t("about.warranty.title"),
      description: t("about.warranty.description"),
    },
  ]

  return (
    <section id="about" className="py-24">
      <div className="container max-w-screen-2xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t("about.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("about.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50"
            >
              <CardHeader>
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
