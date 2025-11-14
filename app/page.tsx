import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import { AnnouncementBar } from "@/components/announcement-bar"
import { FlagshipProductSection } from "@/components/flagship-product-section"
import { FloatingWaitlistWidget } from "@/components/floating-waitlist-widget"
import dynamic from "next/dynamic"

const ServicesOverview = dynamic(() => import("@/components/services-overview").then((mod) => mod.ServicesOverview), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
})

const TrustIndicators = dynamic(() => import("@/components/trust-indicators").then((mod) => mod.TrustIndicators), {
  loading: () => <div className="h-48 bg-white animate-pulse" />,
})

const CTASection = dynamic(() => import("@/components/cta-section").then((mod) => mod.CTASection))
const ContactFormSection = dynamic(() =>
  import("@/components/contact-form-section").then((mod) => mod.ContactFormSection),
)
const AboutSection = dynamic(() => import("@/components/about-section").then((mod) => mod.AboutSection))
const TestimonialsSection = dynamic(() =>
  import("@/components/testimonials-section").then((mod) => mod.TestimonialsSection),
)
const CaseStudiesSection = dynamic(() =>
  import("@/components/case-studies-section").then((mod) => mod.CaseStudiesSection),
)
const StatsSection = dynamic(() => import("@/components/stats-section").then((mod) => mod.StatsSection))
const FAQSection = dynamic(() => import("@/components/faq-section").then((mod) => mod.FAQSection))
const NewsletterSection = dynamic(() => import("@/components/newsletter-section").then((mod) => mod.NewsletterSection))
const TrainingSection = dynamic(() => import("@/components/training-section").then((mod) => mod.TrainingSection))
const InvestorSection = dynamic(() => import("@/components/investor-section").then((mod) => mod.InvestorSection))
const ScrollReveal = dynamic(() => import("@/components/scroll-reveal").then((mod) => mod.ScrollReveal))

export default function Home() {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <AnnouncementBar />
      <Navigation />
      <FloatingWaitlistWidget />
      <main id="main-content">
        <HeroSection />
        <ScrollReveal>
          <FlagshipProductSection />
        </ScrollReveal>
        <ScrollReveal>
          <InvestorSection />
        </ScrollReveal>
        <ScrollReveal>
          <TrustIndicators />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <StatsSection />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <ServicesOverview />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <CaseStudiesSection />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <TrainingSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <FAQSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <NewsletterSection />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <CTASection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <ContactFormSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  )
}
