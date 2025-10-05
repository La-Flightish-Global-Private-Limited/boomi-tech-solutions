import { Award, Globe, Shield, Target, Users, Zap } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description: "Your success is our priority. We deliver solutions that align with your business goals.",
  },
  {
    icon: Zap,
    title: "Innovation-Driven",
    description: "We leverage cutting-edge technologies to keep you ahead of the competition.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous testing and best practices ensure reliable, secure solutions.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients worldwide with 24/7 support and flexible engagement models.",
  },
]

const achievements = [
  {
    icon: Award,
    metric: "18+",
    label: "Years of Excellence",
  },
  {
    icon: Users,
    metric: "500+",
    label: "Projects Delivered",
  },
  {
    icon: Globe,
    metric: "50+",
    label: "Countries Served",
  },
  {
    icon: Target,
    metric: "98%",
    label: "Client Retention",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column */}
          <div>
            <h2 className="mb-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
              Building trust through innovation
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground font-light">
              <p>
                Boomi Tech Solutions is a leading technology services company specializing in enterprise-grade solutions
                that drive digital transformation and business growth.
              </p>
              <p>
                With over 18 years of experience, we've helped hundreds of organizations across the globe modernize
                their technology infrastructure, build innovative products, and accelerate their journey to the cloud.
              </p>
              <p>
                Our team of expert engineers, architects, and consultants brings deep technical expertise combined with
                a practical understanding of business challenges.
              </p>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted relative">
              <Image
                src="/business-handshake-partnership-black-and-white.jpg"
                alt="Partnership"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover grayscale"
                loading="lazy"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted relative">
              <Image
                src="/modern-technology-architecture-black-and-white.jpg"
                alt="Technology"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover grayscale"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 aspect-[2/1] overflow-hidden rounded-2xl bg-muted relative">
              <Image
                src="/team-collaboration-modern-office-black-and-white.jpg"
                alt="Team collaboration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-32">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title}>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                    <Icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h4 className="mb-3 text-lg font-semibold text-foreground">{value.title}</h4>
                  <p className="text-base leading-relaxed text-muted-foreground font-light">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
