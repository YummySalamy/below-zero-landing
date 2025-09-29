import { seoConfig } from "@/lib/seo-config"

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(seoConfig.structuredData),
      }}
    />
  )
}
