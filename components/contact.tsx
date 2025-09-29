"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/hooks/use-language"
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi"

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24">
      <div className="container max-w-screen-2xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder={t("contact.form.name")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-full"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t("contact.form.email")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-full"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder={t("contact.form.phone")}
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t("contact.form.message")}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="rounded-3xl"
                  />
                </div>
                <Button type="submit" className="w-full rounded-full group">
                  {t("contact.form.submit")}
                  <FiSend className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary to-blue-600 text-white border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FiMapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="opacity-90">{t("contact.info.address")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FiPhone className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="opacity-90">{t("contact.info.phone")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FiMail className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="opacity-90">{t("contact.info.email")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FiClock className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Emergency Service</p>
                      <p className="opacity-90">{t("contact.info.hours")}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-500/10 border-red-500/20 border-2">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold text-red-600 mb-2">Emergency Service</h4>
                <p className="text-muted-foreground mb-4">Need immediate assistance?</p>
                <Button variant="destructive" className="rounded-full">
                  <FiPhone className="mr-2 h-4 w-4" />
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
