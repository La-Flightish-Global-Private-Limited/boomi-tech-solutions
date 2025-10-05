import { Cloud, Database, GitBranch, Layers, LineChart, Settings, Sparkles, Users, Code } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "AI Product Development",
    description: "Build intelligent applications powered by cutting-edge AI and machine learning technologies.",
    features: ["AI Agent Development", "AI Automation", "AI Training"],
  },
  {
    icon: Cloud,
    title: "Multi-Cloud Infrastructure",
    description: "Design and deploy scalable cloud solutions across AWS, Azure, and Google Cloud platforms.",
    features: ["Cloud Architecture", "Cloud Training", "Migration Services"],
  },
  {
    icon: Code,
    title: "SAAS Application Development",
    description: "Create robust, scalable software-as-a-service platforms tailored to your business needs.",
    features: ["Custom Development", "API Architecture", "MVP Consulting"],
  },
  {
    icon: Database,
    title: "Mainframes & Modernization",
    description: "Transform legacy systems into modern, efficient, and maintainable applications.",
    features: ["Legacy Migration", "System Optimization", "Architecture Redesign"],
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description: "Streamline your development pipeline with automated testing, deployment, and monitoring.",
    features: ["Pipeline Automation", "Infrastructure as Code", "Continuous Delivery"],
  },
  {
    icon: Layers,
    title: "API First Architecture",
    description: "Design scalable, secure, and well-documented APIs that power your digital ecosystem.",
    features: ["RESTful APIs", "GraphQL", "Microservices"],
  },
  {
    icon: LineChart,
    title: "Digital Marketing",
    description: "Boost your internet presence with data-driven marketing strategies and SEO optimization.",
    features: ["SEO Strategy", "Content Marketing", "Analytics"],
  },
  {
    icon: Settings,
    title: "Custom ERP Solutions",
    description: "Develop tailored enterprise resource planning systems to optimize your business operations.",
    features: ["Process Automation", "Integration", "Custom Workflows"],
  },
  {
    icon: Users,
    title: "Manpower Augmentation",
    description: "Access skilled technology professionals to scale your team and accelerate project delivery.",
    features: ["Staff Augmentation", "Dedicated Teams", "Expert Consultants"],
  },
]

export function ServicesOverview() {
  return (
    <section id="services" className="bg-background py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
            Enterprise solutions that scale with your vision
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Comprehensive technology services designed to transform your business through innovation and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 hover:border-gray-300"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Icon */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 transition-all duration-300 ease-out group-hover:bg-black group-hover:scale-110">
                  <Icon
                    className="h-7 w-7 text-gray-900 transition-all duration-300 ease-out group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-gray-900 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="mb-6 text-base leading-relaxed text-gray-600 font-light">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400 transition-all duration-200 group-hover:bg-black group-hover:scale-150" />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
