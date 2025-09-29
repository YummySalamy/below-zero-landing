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
    default: "Below Zero - Professional Refrigeration Services",
    template: "%s | Below Zero Refrigeration",
  },
  description:
    "Expert commercial and industrial refrigeration services. 24/7 emergency repairs, preventive maintenance, system installation, and technical consultation. Serving businesses with reliable cooling solutions.",
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
  ],
  authors: [{ name: "Below Zero Refrigeration" }],
  creator: "Below Zero Refrigeration",
  publisher: "Below Zero Refrigeration",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://belowzero.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "es-ES": "/es",
    },
  },
  openGraph: {
    title: "Below Zero - Professional Refrigeration Services",
    description:
      "Expert commercial and industrial refrigeration services. 24/7 emergency repairs, preventive maintenance, and system installation.",
    url: "https://belowzero.com",
    siteName: "Below Zero Refrigeration",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Below Zero Professional Refrigeration Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Below Zero - Professional Refrigeration Services",
    description: "Expert commercial and industrial refrigeration services. 24/7 emergency repairs and maintenance.",
    images: ["/og-image.jpg"],
    creator: "@belowzerorefrig",
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
    generator: 'v0.app'
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
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
