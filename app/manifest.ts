import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Below Zero HVAC & Refrigeration",
    short_name: "Below Zero",
    description: "Expert commercial and industrial refrigeration & HVAC services in NJ & NY.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0ea5e9",
    icons: [
      {
        src: "/below-zero-logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/below-zero-logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  }
}
