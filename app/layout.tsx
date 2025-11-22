import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import { ThemeProvider } from "@/hooks/use-theme"
import { LanguageProvider } from "@/hooks/use-language"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Below Zero - HVAC & Refrigeration Services NJ & NY",
    template: "%s | Below Zero HVAC & Refrigeration",
  },
  description:
    "Expert commercial and industrial refrigeration & HVAC services in NJ & NY. 24/7 emergency repairs, boiler installation, and cooling solutions. Call 201-889-4820.",
  keywords: [
    "refrigeration services NJ",
    "commercial HVAC New Jersey",
    "boiler repair NJ",
    "industrial cooling NY",
    "emergency HVAC repair",
    "Below Zero LLC",
    "mechanical services Bogota NJ",
    "walk-in cooler repair",
    "commercial heating installation",
    "hvac maintenance contract",
    "Bergen County HVAC",
    "Jersey City refrigeration",
    "Hoboken boiler repair",
    "Hackensack commercial cooling",
  ],
  authors: [{ name: "Below Zero HVAC & Refrigeration" }],
  creator: "Below Zero HVAC & Refrigeration",
  publisher: "Below Zero HVAC & Refrigeration",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.belowzero-hc.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "es-ES": "/es",
    },
  },
  openGraph: {
    title: "Below Zero - Professional HVAC & Refrigeration Services",
    description:
      "Premier commercial HVAC and refrigeration experts serving NJ & NY. 24/7 emergency support for boilers, chillers, and industrial systems.",
    url: "https://www.belowzero-hc.com",
    siteName: "Below Zero HVAC & Refrigeration",
    images: [
      {
        url: "/images/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Below Zero Professional HVAC & Refrigeration Services - Landing Page Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Below Zero - HVAC & Refrigeration Experts NJ/NY",
    description:
      "Expert commercial and industrial refrigeration services. 24/7 emergency repairs and maintenance in New Jersey and New York.",
    images: ["/images/social-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="color-scheme" content="light dark" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/below-zero-logo.jpg" sizes="any" />
        <link rel="icon" href="/below-zero-logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <MouseMoveEffect />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
