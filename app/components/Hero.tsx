import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-gradient-to-br from-white via-[#0AD3DD]/5 to-[#0B304D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/below-zero-logo.jpg"
            alt="Below Zero LLC"
            width={200}
            height={100}
            className="h-20 w-auto object-contain animate-float"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          <span className="text-[#0B304D]">Professional</span>
          <br />
          <span className="text-[#0AD3DD]">Refrigeration Services</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 mb-10">
          Below Zero LLC provides expert refrigeration solutions for commercial and industrial needs. From installation
          to maintenance, we keep your systems running at peak performance.
        </p>
        <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-[#0AD3DD] to-[#0AD3DD]/80 hover:from-[#0AD3DD]/90 hover:to-[#0AD3DD]/70 text-[#0B304D] font-semibold">
          <span className="relative z-10">Get Quote Today</span>
          <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
        </Button>
      </div>
    </div>
  )
}
