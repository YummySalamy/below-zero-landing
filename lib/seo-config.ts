export const seoConfig = {
  name: "Below Zero",
  description:
    "Expert commercial and industrial refrigeration services. 24/7 emergency repairs, preventive maintenance, system installation, and technical consultation.",
  url: "https://www.belowzero-hc.com",
  ogImage: "https://www.belowzero-hc.com/images/social-preview.png",
  links: {
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  keywords: [
    "refrigeration services NJ",
    "commercial refrigeration",
    "industrial cooling",
    "emergency repair",
    "preventive maintenance",
    "system installation",
    "HVAC services Bogota NJ",
    "cold storage repair",
    "refrigeration maintenance",
    "cooling systems",
    "24/7 repair service NJ",
    "commercial HVAC Jersey City",
    "industrial refrigeration NY",
    "food service refrigeration",
    "restaurant cooling",
    "supermarket refrigeration",
    "boiler repair Bergen County",
    "walk-in freezer repair",
    "chiller repair NJ",
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Below Zero LLC",
    image: "https://www.belowzero-hc.com/below-zero-logo.jpg",
    description:
      "Professional commercial and industrial refrigeration services including emergency repairs, preventive maintenance, and system installation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "235 Rodgefield Ave",
      addressLocality: "Bogota",
      addressRegion: "NJ",
      postalCode: "07603",
      addressCountry: "US",
    },
    telephone: "+1-201-640-3065",
    email: "belowzerohc@gmail.com",
    url: "https://www.belowzero-hc.com",
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "40.8764",
        longitude: "-74.0293",
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Refrigeration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Refrigeration Repair",
            description: "24/7 emergency repair services for commercial refrigeration systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Preventive Maintenance",
            description: "Regular maintenance to prevent breakdowns and extend equipment life",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "System Installation",
            description: "Professional installation of new refrigeration systems",
          },
        },
      ],
    },
  },
}
