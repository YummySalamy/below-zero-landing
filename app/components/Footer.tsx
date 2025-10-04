import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0B304D] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <Image
              src="/below-zero-logo.jpg"
              alt="Below Zero LLC"
              width={150}
              height={75}
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-gray-300">
            Professional refrigeration services for commercial and industrial applications.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#0AD3DD]">Services</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#features" className="text-gray-300 hover:text-[#0AD3DD] transition-colors">
                Installation
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-gray-300 hover:text-[#0AD3DD] transition-colors">
                Maintenance
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-[#0AD3DD] transition-colors">
                Emergency Repair
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#0AD3DD]">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-300 hover:text-[#0AD3DD] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-[#0AD3DD] transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-[#0AD3DD] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#0AD3DD]">Connect</h4>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-300 hover:text-[#0AD3DD] transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-[#0AD3DD] transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-[#0AD3DD] transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-[#0AD3DD] transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-[#0AD3DD]/20 text-center text-gray-300">
        <p>&copy; 2025 Below Zero LLC. All rights reserved.</p>
      </div>
    </footer>
  )
}
