import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We start by understanding your business goals, challenges, and requirements through in-depth consultation sessions.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Our experts develop a comprehensive strategy and roadmap tailored to your specific needs and objectives.",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "We bring your vision to life with cutting-edge technology, best practices, and agile development methodologies.",
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing ensures your solution meets the highest standards of quality, security, and performance.",
  },
  {
    number: "05",
    title: "Deployment & Launch",
    description:
      "We handle the complete deployment process, ensuring a smooth transition and successful launch of your solution.",
  },
  {
    number: "06",
    title: "Support & Optimization",
    description:
      "Ongoing support, monitoring, and optimization to ensure your solution continues to deliver value and evolve with your needs.",
  },
]

export function ProcessSection() {
  return (
    <section className="border-y border-border/40 bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Proven Process</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A systematic approach to delivering exceptional results, from concept to completion.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-mono text-lg font-bold text-primary">
                  {step.number}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border/40 bg-card p-8">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="mb-2 text-lg font-semibold">Quality Guaranteed</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every project is backed by our commitment to excellence, with 24/7 support and a satisfaction guarantee.
                We don't just deliver solutions—we build lasting partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
