import { Suspense } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import SuccessCases from "@/components/success-cases"
// import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import StructuredData from "@/components/structured-data" // Added structured data component
// import WhatsAppButton from "@/components/whatsapp-button"

function LoadingSection() {
  return (
    <div className="animate-pulse">
      <div className="h-96 bg-muted/20 rounded-lg"></div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <StructuredData />

      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-secondary/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Suspense fallback={<LoadingSection />}>
          <SuccessCases />
        </Suspense>
        {/* <Suspense fallback={<LoadingSection />}>
          <Testimonials />
        </Suspense> */}
        <Contact />
        <Footer />
        {/* <WhatsAppButton /> */}
      </div>
    </main>
  )
}
