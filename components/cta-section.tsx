import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="border-y border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-balance text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
            Ready to transform your business?
          </h2>
          <p className="mb-10 text-pretty text-xl leading-relaxed text-muted-foreground font-light">
            Let's explore how our technology solutions can help you achieve your business goals. Get in touch with our
            team for a consultation.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-foreground px-8 py-6 text-background hover:bg-foreground/90 font-medium text-base"
            asChild
          >
            <Link href="#contact">Start a conversation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
