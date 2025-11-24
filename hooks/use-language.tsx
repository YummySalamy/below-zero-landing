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
    "hero.title": "Professional HVAC & Mechanical Solutions",
    "hero.subtitle": "Residential • Commercial • Industrial",
    "hero.description":
      "Expert heating, cooling, and plumbing services across NJ & NY. 24/7 emergency support, preventive maintenance, and professional installations.",
    "hero.cta.primary": "Get Free Quote",
    "hero.cta.secondary": "Our Services",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Complete HVAC & mechanical system solutions for your business",
    "services.maintenance.title": "Preventive Maintenance",
    "services.maintenance.description":
      "Scheduled maintenance programs to prevent breakdowns and optimize system performance",
    "services.repair.title": "Emergency Repairs",
    "services.repair.description": "24/7 emergency repair services for heating, cooling, and plumbing systems",
    "services.installation.title": "System Installation",
    "services.installation.description": "Professional installation of HVAC equipment, boilers, and plumbing systems",
    "services.consultation.title": "Energy Efficiency",
    "services.consultation.description": "Expert consultation on system optimization and energy-saving upgrades",
    "services.cta": "Get Free Consultation",

    // Additional Services
    "services.additional.title": "Additional Services",
    "services.additional.industrialHeating.title": "Industrial Heating Systems",
    "services.additional.industrialHeating.description":
      "Large-scale boiler installations and heating solutions for industrial facilities",
    "services.additional.ventilation.title": "Advanced Ventilation Systems",
    "services.additional.ventilation.description":
      "3D-designed ventilation and air distribution systems for optimal airflow",
    "services.additional.refrigeration.title": "Commercial Refrigeration",
    "services.additional.refrigeration.description":
      "Industrial-grade cooling and refrigeration system maintenance and repair",
    "services.additional.hotWater.title": "Hot Water Systems",
    "services.additional.hotWater.description":
      "Commercial hot water heater installation, maintenance, and emergency repairs",
    "services.additional.plumbing.title": "Commercial Plumbing Systems",
    "services.additional.plumbing.description":
      "Complete plumbing installation, maintenance, and repair for commercial and industrial facilities",
    "services.additional.specializedPlumbing.title": "Specialized Plumbing Solutions",
    "services.additional.specializedPlumbing.description":
      "Advanced piping systems, backflow prevention, and specialized industrial plumbing",

    // About
    "about.title": "Why Choose Below Zero?",
    "about.subtitle": "Industry-leading expertise in HVAC & Mechanical Solutions",
    "about.experience.title": "15+ Years | 500+ Projects",
    "about.experience.description":
      "Serving NJ & NY since 2009 with proven expertise in commercial and industrial HVAC",
    "about.certified.title": "EPA Certified & Licensed",
    "about.certified.description": "Fully licensed, insured, and EPA certified professionals with ongoing training",
    "about.support.title": "24/7 Emergency Service",
    "about.support.description": "Rapid response team available anytime, anywhere across NJ & NY",
    "about.warranty.title": "100% Satisfaction Guarantee",
    "about.warranty.description": "Quality workmanship backed by comprehensive warranty and insurance",
    "about.badge.epa": "EPA Certified",
    "about.badge.licensed": "Licensed & Insured",
    "about.badge.emergency": "24/7 Emergency",
    "about.badge.warranty": "Full Warranty",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Trusted by businesses across the region",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to service your HVAC & Mechanical needs?",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.info.address": "Bogota, New Jersey",
    "contact.info.phone": "+1 (201) 640-3065",
    "contact.info.email": "jose.m@belowzero-hc.com",
    "contact.info.hours": "24/7 Emergency Service Available",

    // Footer
    "footer.description": "HVAC & Mechanical Systems - Professional service you can trust",
    "footer.rights": "All rights reserved.",
    "footer.services": "Services",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Info",

    // WhatsApp
    "whatsapp.message": "Hello! I'm interested in your HVAC & Mechanical services.",
    "whatsapp.greeting": "Hi! How can we help you with your HVAC & Mechanical needs today?",
    "whatsapp.startChat": "Start Chat",
    "whatsapp.contactUs": "Contact us on WhatsApp",

    // Success Cases
    "successCases.title": "Success Cases",
    "successCases.subtitle": "Proven results across commercial and industrial HVAC projects in NJ & NY",
    "successCases.viewGallery": "View Gallery",
    "successCases.category.all": "All",
    "successCases.category.commercial": "Commercial",
    "successCases.category.industrial": "Industrial",
    "successCases.category.hospitality": "Hospitality",
    "successCases.category.residential": "Residential",
    "successCases.category.mixeduse": "Mixed Use",
    "successCases.category.healthcare": "Healthcare",
    "successCases.category.datacenters": "Data Centers",

    // Case 1 - Commercial Building (Beacon Hill)
    "successCases.case1.title": "Beacon Hill Residential Complex - HVAC Upgrade",
    "successCases.case1.client": "KRE Group | Marlboro, NJ",
    "successCases.case1.description":
      "Complete HVAC system modernization for luxury residential building with 200+ units",
    "successCases.case1.result1": "↓ 35% energy consumption",
    "successCases.case1.result2": "99.9% system uptime",
    "successCases.case1.result3": "ROI achieved in 24 months",

    // Case 2 - Commercial Office (485 Marin)
    "successCases.case2.title": "485 Marin Boulevard - Commercial HVAC Installation",
    "successCases.case2.client": "Commercial Office Complex | Jersey City, NJ",
    "successCases.case2.description":
      "New HVAC and ventilation system installation for modern office building with advanced climate control",
    "successCases.case2.result1": "↓ 40% operational costs",
    "successCases.case2.result2": "Enhanced air quality",
    "successCases.case2.result3": "Smart climate control",

    // Case 3 - Industrial HVAC
    "successCases.case3.title": "Industrial Manufacturing Facility - Climate Control",
    "successCases.case3.client": "Manufacturing Plant | Newark, NJ",
    "successCases.case3.description":
      "Large-scale industrial HVAC system for temperature-sensitive manufacturing processes",
    "successCases.case3.result1": "Precise temperature control",
    "successCases.case3.result2": "24/7 monitoring system",
    "successCases.case3.result3": "↓ 30% maintenance costs",

    // Case 4 - Hospitality
    "successCases.case4.title": "Hotel & Conference Center - Complete HVAC Retrofit",
    "successCases.case4.client": "Luxury Hotel Chain | New York, NY",
    "successCases.case4.description":
      "Full HVAC retrofit including boilers, chillers, and individual room climate control for 150-room hotel",
    "successCases.case4.result1": "Guest satisfaction ↑ 45%",
    "successCases.case4.result2": "↓ 50% energy bills",
    "successCases.case4.result3": "Zero downtime during operation",

    // Case 5 - Healthcare
    "successCases.case5.title": "Luxury Residential Complex - Mechanical Upgrade",
    "successCases.case5.client": "Residential Management | Hoboken, NJ",
    "successCases.case5.description":
      "Complete mechanical room modernization including high-efficiency Lochinvar boilers and domestic hot water systems for a 300-unit complex.",
    "successCases.case5.result1": "96% thermal efficiency",
    "successCases.case5.result2": "Reliable hot water delivery",
    "successCases.case5.result3": "Reduced maintenance costs",

    // Case 6 - Data Center
    "successCases.case6.title": "Metropolitan Office Tower - HVAC Retrofit",
    "successCases.case6.client": "Commercial Property | Jersey City, NJ",
    "successCases.case6.description":
      "Rooftop HVAC unit replacement and interior climate control upgrades for a high-rise commercial building in the city center.",
    "successCases.case6.result1": "Improved air distribution",
    "successCases.case6.result2": "Smart building integration",
    "successCases.case6.result3": "Energy efficient operation",

    // Case 7 - Industrial Bakery
    "successCases.case7.title": "Industrial Bakery - Ventilation & Ovens",
    "successCases.case7.client": "Commercial Bakery | Brooklyn, NY",
    "successCases.case7.description":
      "Installation of high-capacity industrial ovens and custom ventilation systems for large-scale bakery operations",
    "successCases.case7.result1": "Optimized airflow design",
    "successCases.case7.result2": "Energy-efficient heating",
    "successCases.case7.result3": "Health code compliant",

    // Case 8 - Advanced Boiler System
    "successCases.case8.title": "Advanced Boiler & Pump System",
    "successCases.case8.client": "Industrial Complex | Queens, NY",
    "successCases.case8.description":
      "Complete mechanical room overhaul with high-efficiency boilers, vertical turbine pumps, and smart controls",
    "successCases.case8.result1": "95% thermal efficiency",
    "successCases.case8.result2": "Automated pump control",
    "successCases.case8.result3": "Reduced water waste",
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
    "hero.title": "Soluciones Profesionales HVAC y Mecánicas",
    "hero.subtitle": "Residencial • Comercial • Industrial",
    "hero.description":
      "Servicios expertos de calefacción, refrigeración y plomería en NJ y NY. Soporte de emergencia 24/7, mantenimiento preventivo e instalaciones profesionales.",
    "hero.cta.primary": "Cotización Gratis",
    "hero.cta.secondary": "Nuestros Servicios",

    // Services
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Soluciones completas de HVAC y sistemas mecánicos para su negocio",
    "services.maintenance.title": "Mantenimiento Preventivo",
    "services.maintenance.description":
      "Programas de mantenimiento programado para prevenir averías y optimizar el rendimiento del sistema",
    "services.repair.title": "Reparaciones de Emergencia",
    "services.repair.description":
      "Servicios de reparación de emergencia 24/7 para sistemas de calefacción, refrigeración y plomería",
    "services.installation.title": "Instalación de Sistemas",
    "services.installation.description": "Instalación profesional de equipos HVAC, calderas y sistemas de plomería",
    "services.consultation.title": "Eficiencia Energética",
    "services.consultation.description":
      "Consultoría experta en optimización de sistemas y actualizaciones de ahorro de energía",
    "services.cta": "Consulta Gratuita",

    // Additional Services
    "services.additional.title": "Servicios Adicionales",
    "services.additional.industrialHeating.title": "Sistemas de Calefacción Industrial",
    "services.additional.industrialHeating.description":
      "Instalaciones de calderas a gran escala y soluciones de calefacción para instalaciones industriales",
    "services.additional.ventilation.title": "Sistemas de Ventilación Avanzados",
    "services.additional.ventilation.description":
      "Sistemas de ventilación y distribución de aire diseñados en 3D para flujo de aire óptimo",
    "services.additional.refrigeration.title": "Refrigeración Comercial",
    "services.additional.refrigeration.description":
      "Mantenimiento y reparación de sistemas de refrigeración de grado industrial",
    "services.additional.hotWater.title": "Sistemas de Agua Caliente",
    "services.additional.hotWater.description":
      "Instalación, mantenimiento y reparaciones de emergencia de calentadores de agua comerciales",
    "services.additional.plumbing.title": "Sistemas de Plomería Comercial",
    "services.additional.plumbing.description":
      "Instalación, mantenimiento y reparación completa de plomería para instalaciones comerciales e industriales",
    "services.additional.specializedPlumbing.title": "Soluciones de Plomería Especializada",
    "services.additional.specializedPlumbing.description":
      "Sistemas de tuberías avanzados, prevención de reflujo y plomería industrial especializada",

    // About
    "about.title": "¿Por Qué Elegir Below Zero?",
    "about.subtitle": "Experiencia líder en la industria en soluciones HVAC y mecánicas",
    "about.experience.title": "15+ Años | 500+ Proyectos",
    "about.experience.description":
      "Sirviendo NJ & NY desde 2009 con experiencia comprobada en HVAC comercial e industrial",
    "about.certified.title": "Certificados EPA y Licenciados",
    "about.certified.description":
      "Profesionales completamente licenciados, asegurados y certificados EPA con capacitación continua",
    "about.support.title": "Servicio de Emergencia 24/7",
    "about.support.description": "Equipo de respuesta rápida disponible en cualquier momento y lugar en NJ & NY",
    "about.warranty.title": "Garantía de Satisfacción 100%",
    "about.warranty.description": "Trabajo de calidad respaldado por garantía integral y seguro",
    "about.badge.epa": "Certificado EPA",
    "about.badge.licensed": "Licenciado y Asegurado",
    "about.badge.emergency": "Emergencia 24/7",
    "about.badge.warranty": "Garantía Completa",

    // Testimonials
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "testimonials.subtitle": "Confiado por empresas de toda la región",

    // Contact
    "contact.title": "Contáctanos",
    "contact.subtitle": "¿Listo para atender sus necesidades de HVAC y mecánicas?",
    "contact.form.name": "Nombre Completo",
    "contact.form.email": "Correo Electrónico",
    "contact.form.phone": "Número de Teléfono",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar Mensaje",
    "contact.info.address": "Bogota, New Jersey",
    "contact.info.phone": "+1 (201) 640-3065",
    "contact.info.email": "jose.m@belowzero-hc.com",
    "contact.info.hours": "Servicio de Emergencia 24/7 Disponible",

    // Footer
    "footer.description": "Sistemas HVAC y Mecánicos - Servicio profesional en el que puede confiar",
    "footer.rights": "Todos los derechos reservados.",
    "footer.services": "Servicios",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.contact": "Información de Contacto",

    // WhatsApp
    "whatsapp.message": "¡Hola! Estoy interesado en sus servicios de HVAC y mecánicas.",
    "whatsapp.greeting": "¡Hola! ¿Cómo podemos ayudarte con tus necesidades de HVAC y mecánicas hoy?",
    "whatsapp.startChat": "Iniciar Chat",
    "whatsapp.contactUs": "Contáctanos por WhatsApp",

    // Success Cases
    "successCases.title": "Casos de Éxito",
    "successCases.subtitle": "Resultados comprobados en proyectos HVAC comerciales e industriales en NJ & NY",
    "successCases.viewGallery": "Ver Galería",
    "successCases.category.all": "Todos",
    "successCases.category.commercial": "Comercial",
    "successCases.category.industrial": "Industrial",
    "successCases.category.hospitality": "Hospitalidad",
    "successCases.category.residential": "Residencial",
    "successCases.category.mixeduse": "Uso Mixto",
    "successCases.category.healthcare": "Salud",
    "successCases.category.datacenters": "Centros de Datos",

    // Case 1 - Commercial Building (Beacon Hill)
    "successCases.case1.title": "Complejo Residencial Beacon Hill - Actualización HVAC",
    "successCases.case1.client": "KRE Group | Marlboro, NJ",
    "successCases.case1.description":
      "Modernización completa del sistema HVAC para edificio residencial de lujo con más de 200 unidades",
    "successCases.case1.result1": "↓ 35% consumo de energía",
    "successCases.case1.result2": "99.9% tiempo de actividad",
    "successCases.case1.result3": "ROI logrado en 24 meses",

    // Case 2 - Commercial Office (485 Marin)
    "successCases.case2.title": "485 Marin Boulevard - Instalación HVAC Comercial",
    "successCases.case2.client": "Complejo de Oficinas Comerciales | Jersey City, NJ",
    "successCases.case2.description":
      "Instalación de nuevo sistema HVAC y ventilación para edificio de oficinas moderno con control climático avanzado",
    "successCases.case2.result1": "↓ 40% costos operativos",
    "successCases.case2.result2": "Calidad de aire mejorada",
    "successCases.case2.result3": "Control climático inteligente",

    // Case 3 - Industrial HVAC
    "successCases.case3.title": "Planta de Manufactura Industrial - Control Climático",
    "successCases.case3.client": "Planta de Manufactura | Newark, NJ",
    "successCases.case3.description":
      "Sistema HVAC industrial a gran escala para procesos de manufactura sensibles a la temperatura",
    "successCases.case3.result1": "Control preciso de temperatura",
    "successCases.case3.result2": "Sistema de monitoreo 24/7",
    "successCases.case3.result3": "↓ 30% costos de mantenimiento",

    // Case 4 - Hospitality
    "successCases.case4.title": "Hotel & Centro de Conferencias - Renovación HVAC Completa",
    "successCases.case4.client": "Cadena Hotelera de Lujo | New York, NY",
    "successCases.case4.description":
      "Renovación completa de HVAC incluyendo calderas, enfriadores y control climático individual para hotel de 150 habitaciones",
    "successCases.case4.result1": "Satisfacción de huéspedes ↑ 45%",
    "successCases.case4.result2": "↓ 50% facturas de energía",
    "successCases.case4.result3": "Cero tiempo de inactividad",

    // Case 5 - Healthcare
    "successCases.case5.title": "Complejo Residencial de Lujo - Actualización Mecánica",
    "successCases.case5.client": "Gestión Residencial | Hoboken, NJ",
    "successCases.case5.description":
      "Modernización completa de la sala de máquinas, incluyendo calderas Lochinvar de alta eficiencia y sistemas de agua caliente sanitaria para un complejo de 300 unidades.",
    "successCases.case5.result1": "96% de eficiencia térmica",
    "successCases.case5.result2": "Suministro confiable de agua caliente",
    "successCases.case5.result3": "Reducción de costos de mantenimiento",

    // Case 6 - Data Center
    "successCases.case6.title": "Torre de Oficinas Metropolitana - Renovación HVAC",
    "successCases.case6.client": "Propiedad Comercial | Jersey City, NJ",
    "successCases.case6.description":
      "Reemplazo de unidad HVAC en la azotea y mejoras en el control climático interior para un edificio comercial de gran altura en el centro de la ciudad.",
    "successCases.case6.result1": "Distribución de aire mejorada",
    "successCases.case6.result2": "Integración con edificio inteligente",
    "successCases.case6.result3": "Operación energéticamente eficiente",

    // Case 7 - Industrial Bakery
    "successCases.case7.title": "Panadería Industrial - Ventilación y Hornos",
    "successCases.case7.client": "Panadería Comercial | Brooklyn, NY",
    "successCases.case7.description":
      "Instalación de hornos industriales de alta capacidad y sistemas de ventilación personalizados para operaciones de panadería a gran escala",
    "successCases.case7.result1": "Diseño de flujo de aire optimizado",
    "successCases.case7.result2": "Calefacción energéticamente eficiente",
    "successCases.case7.result3": "Cumplimiento de códigos de salud",

    // Case 8 - Advanced Boiler System
    "successCases.case8.title": "Sistema Avanzado de Calderas y Bombas",
    "successCases.case8.client": "Complejo Industrial | Queens, NY",
    "successCases.case8.description":
      "Revisión completa de sala mecánica con calderas de alta eficiencia, bombas de turbina vertical y controles inteligentes",
    "successCases.case8.result1": "95% de eficiencia térmica",
    "successCases.case8.result2": "Control de bombas automatizado",
    "successCases.case8.result3": "Reducción de desperdicio de agua",
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
