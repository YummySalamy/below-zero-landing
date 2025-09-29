"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { FiStar } from "react-icons/fi"

export default function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "Maria Rodriguez",
      company: "Fresh Market Supermarket",
      content:
        "Below Zero saved our business when our main refrigeration system failed during peak summer. Their 24/7 emergency service is outstanding!",
      rating: 5,
    },
    {
      name: "John Smith",
      company: "Cold Storage Solutions",
      content:
        "Professional, reliable, and knowledgeable. They've been maintaining our industrial freezers for 3 years without a single breakdown.",
      rating: 5,
    },
    {
      name: "Ana Garcia",
      company: "Restaurant El Sabor",
      content:
        "Quick response time and fair pricing. Our walk-in cooler has never run better since they started servicing it.",
      rating: 5,
    },
    {
      name: "David Chen",
      company: "Pharmaceutical Depot",
      content:
        "Critical temperature control for our medications. Below Zero understands the importance and delivers exceptional service.",
      rating: 5,
    },
    {
      name: "Lisa Johnson",
      company: "Ice Cream Factory",
      content:
        "They installed our new blast freezer system perfectly. The team was professional and completed the job on time.",
      rating: 5,
    },
    {
      name: "Carlos Mendez",
      company: "Seafood Distributor",
      content:
        "Preventive maintenance program has reduced our emergency calls by 90%. Highly recommend their services!",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container max-w-screen-2xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t("testimonials.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-0"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
