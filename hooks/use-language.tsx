"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.cases": "Success Cases",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Professional Refrigeration Services",
    "hero.subtitle": "Below Zero",
    "hero.description":
      "Expert refrigeration maintenance and repair services for commercial and industrial systems. Keeping your business cool and running efficiently.",
    "hero.cta.primary": "Get Quote",
    "hero.cta.secondary": "Our Services",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Complete refrigeration solutions for your business",
    "services.maintenance.title": "Preventive Maintenance",
    "services.maintenance.description": "Regular maintenance to prevent breakdowns and extend equipment life",
    "services.repair.title": "Emergency Repairs",
    "services.repair.description": "24/7 emergency repair services to minimize downtime",
    "services.installation.title": "System Installation",
    "services.installation.description": "Professional installation of new refrigeration systems",
    "services.consultation.title": "Technical Consultation",
    "services.consultation.description": "Expert advice on system optimization and upgrades",
    "services.cta": "Get Free Consultation",

    // Additional Services
    "services.additional.title": "Additional Services",
    "services.additional.airQuality.title": "Air Quality Control",
    "services.additional.airQuality.description": "Advanced filtration and air purification systems",
    "services.additional.temperatureMonitoring.title": "Temperature Monitoring",
    "services.additional.temperatureMonitoring.description": "Smart sensors and automated climate control",
    "services.additional.systemProtection.title": "System Protection",
    "services.additional.systemProtection.description": "Comprehensive warranty and insurance coverage",
    "services.additional.support247.title": "24/7 Support",
    "services.additional.support247.description": "Round-the-clock emergency response team",
    "services.additional.qualityAssurance.title": "Quality Assurance",
    "services.additional.qualityAssurance.description": "Certified technicians and premium parts",

    // About
    "about.title": "Why Choose Below Zero?",
    "about.subtitle": "Industry-leading expertise in refrigeration services",
    "about.experience.title": "15+ Years Experience",
    "about.experience.description": "Extensive experience in commercial refrigeration",
    "about.certified.title": "Certified Technicians",
    "about.certified.description": "All our technicians are certified and trained",
    "about.support.title": "24/7 Support",
    "about.support.description": "Round-the-clock emergency support available",
    "about.warranty.title": "Service Warranty",
    "about.warranty.description": "All our work comes with comprehensive warranty",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Trusted by businesses across the region",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to service your refrigeration needs?",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.info.address": "123 Industrial Ave, Cold City, CC 12345",
    "contact.info.phone": "+1 (555) 123-COLD",
    "contact.info.email": "info@belowzero.com",
    "contact.info.hours": "24/7 Emergency Service Available",

    // Footer
    "footer.description": "Professional refrigeration services you can trust",
    "footer.rights": "All rights reserved.",
    "footer.services": "Services",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Info",

    // WhatsApp
    "whatsapp.message": "Hello! I'm interested in your refrigeration services.",
    "whatsapp.greeting": "Hi! How can we help you with your refrigeration needs today?",
    "whatsapp.startChat": "Start Chat",
    "whatsapp.contactUs": "Contact us on WhatsApp",

    // Success Cases
    "successCases.title": "Success Cases",
    "successCases.subtitle": "Discover how we've helped businesses achieve optimal refrigeration performance",
    "successCases.viewGallery": "View Gallery",
    "successCases.category.all": "All",
    "successCases.category.industrial": "Industrial",
    "successCases.category.commercial": "Commercial",
    "successCases.category.healthcare": "Healthcare",
    "successCases.category.retail": "Retail",
    "successCases.category.technology": "Technology",
    "successCases.category.sports": "Sports",

    // Case 1 - Industrial
    "successCases.case1.title": "Industrial Cold Storage Facility",
    "successCases.case1.client": "FreshMart Distribution",
    "successCases.case1.description": "Complete refrigeration system overhaul for a 50,000 sq ft cold storage facility",
    "successCases.case1.result1": "40% energy reduction",
    "successCases.case1.result2": "99.9% uptime achieved",
    "successCases.case1.result3": "ROI in 18 months",

    // Case 2 - Commercial
    "successCases.case2.title": "Restaurant Chain Upgrade",
    "successCases.case2.client": "Gourmet Bistro Network",
    "successCases.case2.description": "Modernized refrigeration systems across 15 restaurant locations",
    "successCases.case2.result1": "30% cost savings",
    "successCases.case2.result2": "Zero food spoilage",
    "successCases.case2.result3": "Improved compliance",

    // Case 3 - Healthcare
    "successCases.case3.title": "Pharmaceutical Cold Chain",
    "successCases.case3.client": "MedTech Solutions",
    "successCases.case3.description": "Critical temperature-controlled storage for pharmaceutical products",
    "successCases.case3.result1": "100% compliance",
    "successCases.case3.result2": "24/7 monitoring",
    "successCases.case3.result3": "Zero temperature deviations",

    // Case 4 - Retail
    "successCases.case4.title": "Supermarket Retrofit",
    "successCases.case4.client": "Metro Grocery Chain",
    "successCases.case4.description": "Energy-efficient refrigeration upgrade for 8 supermarket locations",
    "successCases.case4.result1": "50% energy savings",
    "successCases.case4.result2": "Reduced maintenance",
    "successCases.case4.result3": "Enhanced food safety",

    // Case 5 - Technology
    "successCases.case5.title": "Data Center Cooling",
    "successCases.case5.client": "TechHub Data Centers",
    "successCases.case5.description": "Precision cooling system for mission-critical server infrastructure",
    "successCases.case5.result1": "35°C temperature control",
    "successCases.case5.result2": "99.99% uptime",
    "successCases.case5.result3": "40% efficiency gain",

    // Case 6 - Sports
    "successCases.case6.title": "Ice Rink Facility",
    "successCases.case6.client": "Arctic Sports Complex",
    "successCases.case6.description": "Complete ice rink refrigeration system installation and maintenance",
    "successCases.case6.result1": "Perfect ice quality",
    "successCases.case6.result2": "Energy efficient",
    "successCases.case6.result3": "Extended season",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Nosotros",
    "nav.cases": "Casos de Éxito",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Servicios Profesionales de Refrigeración",
    "hero.subtitle": "Below Zero",
    "hero.description":
      "Servicios expertos de mantenimiento y reparación de refrigeración para sistemas comerciales e industriales. Manteniendo su negocio fresco y funcionando eficientemente.",
    "hero.cta.primary": "Cotizar",
    "hero.cta.secondary": "Nuestros Servicios",

    // Services
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Soluciones completas de refrigeración para su negocio",
    "services.maintenance.title": "Mantenimiento Preventivo",
    "services.maintenance.description": "Mantenimiento regular para prevenir averías y extender la vida del equipo",
    "services.repair.title": "Reparaciones de Emergencia",
    "services.repair.description": "Servicios de reparación de emergencia 24/7 para minimizar el tiempo de inactividad",
    "services.installation.title": "Instalación de Sistemas",
    "services.installation.description": "Instalación profesional de nuevos sistemas de refrigeración",
    "services.consultation.title": "Consultoría Técnica",
    "services.consultation.description": "Asesoramiento experto en optimización y actualizaciones de sistemas",
    "services.cta": "Consulta Gratuita",

    // Additional Services
    "services.additional.title": "Servicios Adicionales",
    "services.additional.airQuality.title": "Control de Calidad del Aire",
    "services.additional.airQuality.description": "Sistemas avanzados de filtración y purificación de aire",
    "services.additional.temperatureMonitoring.title": "Monitoreo de Temperatura",
    "services.additional.temperatureMonitoring.description": "Sensores inteligentes y control climático automatizado",
    "services.additional.systemProtection.title": "Protección del Sistema",
    "services.additional.systemProtection.description": "Cobertura integral de garantía y seguro",
    "services.additional.support247.title": "Soporte 24/7",
    "services.additional.support247.description": "Equipo de respuesta de emergencia las 24 horas",
    "services.additional.qualityAssurance.title": "Garantía de Calidad",
    "services.additional.qualityAssurance.description": "Técnicos certificados y repuestos premium",

    // About
    "about.title": "¿Por Qué Elegir Below Zero?",
    "about.subtitle": "Experiencia líder en la industria en servicios de refrigeración",
    "about.experience.title": "15+ Años de Experiencia",
    "about.experience.description": "Amplia experiencia en refrigeración comercial",
    "about.certified.title": "Técnicos Certificados",
    "about.certified.description": "Todos nuestros técnicos están certificados y capacitados",
    "about.support.title": "Soporte 24/7",
    "about.support.description": "Soporte de emergencia disponible las 24 horas",
    "about.warranty.title": "Garantía de Servicio",
    "about.warranty.description": "Todo nuestro trabajo viene con garantía integral",

    // Testimonials
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "testimonials.subtitle": "Confiado por empresas de toda la región",

    // Contact
    "contact.title": "Contáctanos",
    "contact.subtitle": "¿Listo para atender sus necesidades de refrigeración?",
    "contact.form.name": "Nombre Completo",
    "contact.form.email": "Correo Electrónico",
    "contact.form.phone": "Número de Teléfono",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar Mensaje",
    "contact.info.address": "123 Avenida Industrial, Ciudad Fría, CF 12345",
    "contact.info.phone": "+1 (555) 123-FRIO",
    "contact.info.email": "info@belowzero.com",
    "contact.info.hours": "Servicio de Emergencia 24/7 Disponible",

    // Footer
    "footer.description": "Servicios profesionales de refrigeración en los que puede confiar",
    "footer.rights": "Todos los derechos reservados.",
    "footer.services": "Servicios",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.contact": "Información de Contacto",

    // WhatsApp
    "whatsapp.message": "¡Hola! Estoy interesado en sus servicios de refrigeración.",
    "whatsapp.greeting": "¡Hola! ¿Cómo podemos ayudarte con tus necesidades de refrigeración hoy?",
    "whatsapp.startChat": "Iniciar Chat",
    "whatsapp.contactUs": "Contáctanos por WhatsApp",

    // Success Cases
    "successCases.title": "Casos de Éxito",
    "successCases.subtitle": "Descubre cómo hemos ayudado a empresas a lograr un rendimiento óptimo de refrigeración",
    "successCases.viewGallery": "Ver Galería",
    "successCases.category.all": "Todos",
    "successCases.category.industrial": "Industrial",
    "successCases.category.commercial": "Comercial",
    "successCases.category.healthcare": "Salud",
    "successCases.category.retail": "Retail",
    "successCases.category.technology": "Tecnología",
    "successCases.category.sports": "Deportes",

    // Case 1 - Industrial
    "successCases.case1.title": "Instalación de Almacén Frigorífico Industrial",
    "successCases.case1.client": "Distribución FreshMart",
    "successCases.case1.description":
      "Renovación completa del sistema de refrigeración para una instalación de almacén frío de 50,000 pies cuadrados",
    "successCases.case1.result1": "40% reducción de energía",
    "successCases.case1.result2": "99.9% tiempo de actividad logrado",
    "successCases.case1.result3": "ROI en 18 meses",

    // Case 2 - Commercial
    "successCases.case2.title": "Actualización de Cadena de Restaurantes",
    "successCases.case2.client": "Red Gourmet Bistro",
    "successCases.case2.description": "Sistemas de refrigeración modernizados en 15 ubicaciones de restaurantes",
    "successCases.case2.result1": "30% ahorro en costos",
    "successCases.case2.result2": "Cero deterioro de alimentos",
    "successCases.case2.result3": "Cumplimiento mejorado",

    // Case 3 - Healthcare
    "successCases.case3.title": "Cadena de Frío Farmacéutica",
    "successCases.case3.client": "Soluciones MedTech",
    "successCases.case3.description": "Almacenamiento crítico con temperatura controlada para productos farmacéuticos",
    "successCases.case3.result1": "100% cumplimiento",
    "successCases.case3.result2": "Monitoreo 24/7",
    "successCases.case3.result3": "Cero desviaciones de temperatura",

    // Case 4 - Retail
    "successCases.case4.title": "Modernización de Supermercado",
    "successCases.case4.client": "Cadena Metro Grocery",
    "successCases.case4.description":
      "Actualización de refrigeración eficiente en energía para 8 ubicaciones de supermercados",
    "successCases.case4.result1": "50% ahorro de energía",
    "successCases.case4.result2": "Mantenimiento reducido",
    "successCases.case4.result3": "Seguridad alimentaria mejorada",

    // Case 5 - Technology
    "successCases.case5.title": "Enfriamiento de Centro de Datos",
    "successCases.case5.client": "Centros de Datos TechHub",
    "successCases.case5.description":
      "Sistema de enfriamiento de precisión para infraestructura de servidores críticos",
    "successCases.case5.result1": "Control de temperatura 35°C",
    "successCases.case5.result2": "99.99% tiempo de actividad",
    "successCases.case5.result3": "40% ganancia de eficiencia",

    // Case 6 - Sports
    "successCases.case6.title": "Instalación de Pista de Hielo",
    "successCases.case6.client": "Complejo Deportivo Arctic",
    "successCases.case6.description":
      "Instalación y mantenimiento completo del sistema de refrigeración de pista de hielo",
    "successCases.case6.result1": "Calidad de hielo perfecta",
    "successCases.case6.result2": "Eficiente en energía",
    "successCases.case6.result3": "Temporada extendida",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
