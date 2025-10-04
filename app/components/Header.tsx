import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/below-zero-logo.jpg"
            alt="Below Zero LLC"
            width={120}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="text-gray-600 hover:text-[#0AD3DD] transition-colors">
            Features
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-[#0AD3DD] transition-colors">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-[#0AD3DD] transition-colors">
            Pricing
          </Link>
        </nav>
        <Button className="bg-[#0AD3DD] hover:bg-[#0AD3DD]/90 text-[#0B304D] font-semibold">Get Started</Button>
      </div>
    </header>
  )
}
