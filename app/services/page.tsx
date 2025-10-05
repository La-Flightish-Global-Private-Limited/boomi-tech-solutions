import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceDetailSection } from "@/components/service-detail-section"
import { ProcessSection } from "@/components/process-section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - Enterprise Technology Solutions | Boomi Tech Solutions",
  description: "Comprehensive technology services including AI solutions, cloud infrastructure, SAAS development, and digital transformation for modern businesses.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Enterprise Solutions for Modern Businesses
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Comprehensive technology services designed to accelerate your digital transformation and drive
                sustainable growth.
              </p>
            </div>
          </div>
        </section>

        <ServiceDetailSection />
        <ProcessSection />

        {/* CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border/40 bg-gradient-to-br from-primary/10 to-accent/5 p-12 text-center sm:p-16">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Let's Build Something Amazing Together
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Ready to start your project? Our team is here to help.
              </p>
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/#contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
