"use client"

import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"
import { useLanguage } from "@/hooks/use-language"
import ThemeLogo from "./theme-logo"

export default function Footer() {
  const { language, t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-4">
              <ThemeLogo width={80} height={40} />
            </div>
            <p className="text-muted-foreground text-sm">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-muted-foreground hover:text-[#0AD3DD] transition-colors duration-300"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-muted-foreground hover:text-[#0AD3DD] transition-colors duration-300"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-[#0AD3DD] transition-colors duration-300"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t("footer.services")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-[#0AD3DD] transition-colors duration-300"
                >
                  {t("services.maintenance.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-[#0AD3DD] transition-colors duration-300"
                >
                  {t("services.installation.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-[#0AD3DD] transition-colors duration-300"
                >
                  {t("services.repair.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-[#0AD3DD] transition-colors duration-300"
                >
                  {t("services.consultation.title")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-[#0AD3DD] transition-colors duration-300"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-[#0AD3DD] transition-colors duration-300"
                >
                  {t("nav.services")}
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#testimonials"
                  className="text-muted-foreground hover:text-[#0AD3DD] transition-colors duration-300"
                >
                  {t("nav.testimonials")}
                </Link>
              </li> */}
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-[#0AD3DD] transition-colors duration-300"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t("footer.contact")}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <FiPhone className="h-4 w-4 text-[#0AD3DD]" />
                <span className="text-muted-foreground">+1 (201) 640-3065</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="h-4 w-4 text-[#0AD3DD]" />
                <span className="text-muted-foreground">jose.m@belowzero-hc.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="h-4 w-4 text-[#0AD3DD] mt-1" />
                <span className="text-muted-foreground">
                  Bogota, New Jersey
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Below Zero LLC. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
