export const seoConfig = {
  name: "Below Zero",
  description:
    "Expert commercial and industrial refrigeration services. 24/7 emergency repairs, preventive maintenance, system installation, and technical consultation.",
  url: "https://belowzero.com",
  ogImage: "https://belowzero.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/belowzerorefrig",
    facebook: "https://facebook.com/belowzerorefrig",
    linkedin: "https://linkedin.com/company/below-zero-refrigeration",
  },
  keywords: [
    "refrigeration services",
    "commercial refrigeration",
    "industrial cooling",
    "emergency repair",
    "preventive maintenance",
    "system installation",
    "HVAC services",
    "cold storage",
    "refrigeration maintenance",
    "cooling systems",
    "24/7 repair service",
    "commercial HVAC",
    "industrial refrigeration",
    "food service refrigeration",
    "restaurant cooling",
    "supermarket refrigeration",
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Below Zero Refrigeration Services",
    image: "https://belowzero.com/og-image.jpg",
    description:
      "Professional commercial and industrial refrigeration services including emergency repairs, preventive maintenance, and system installation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Industrial Ave",
      addressLocality: "Cold City",
      addressRegion: "CC",
      postalCode: "12345",
      addressCountry: "US",
    },
    telephone: "+1-555-123-COLD",
    email: "info@belowzero.com",
    url: "https://belowzero.com",
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "40.7128",
        longitude: "-74.0060",
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
