import {
  Cloud,
  Database,
  GitBranch,
  Layers,
  LineChart,
  Settings,
  Sparkles,
  Users,
  Code,
  Zap,
  TrendingUp,
} from "lucide-react"

const serviceDetails = [
  {
    icon: Sparkles,
    title: "AI Product Development",
    description:
      "Harness the power of artificial intelligence to create intelligent applications that learn, adapt, and deliver exceptional user experiences.",
    capabilities: [
      "Custom AI Agent Development",
      "Machine Learning Model Training",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "AI Automation & Workflow Optimization",
      "Predictive Analytics",
    ],
    benefits: ["Increased Efficiency", "Data-Driven Insights", "Competitive Advantage"],
  },
  {
    icon: Cloud,
    title: "Multi-Cloud Infrastructure",
    description:
      "Design, deploy, and manage scalable cloud solutions across AWS, Azure, and Google Cloud platforms with expert guidance and support.",
    capabilities: [
      "Cloud Architecture Design",
      "Multi-Cloud Strategy",
      "Cloud Migration Services",
      "Infrastructure as Code",
      "Cloud Security & Compliance",
      "Cloud Training & Workshops",
    ],
    benefits: ["Scalability", "Cost Optimization", "High Availability"],
  },
  {
    icon: Code,
    title: "SAAS Application Development",
    description:
      "Build robust, scalable software-as-a-service platforms with modern architectures that grow with your business needs.",
    capabilities: [
      "Full-Stack Development",
      "API-First Architecture",
      "Microservices Design",
      "Multi-Tenant Solutions",
      "MVP Development & Consulting",
      "Performance Optimization",
    ],
    benefits: ["Rapid Time-to-Market", "Scalable Architecture", "Recurring Revenue"],
  },
  {
    icon: Database,
    title: "Mainframes & Modernization",
    description:
      "Transform legacy systems into modern, cloud-native applications while preserving critical business logic and data integrity.",
    capabilities: [
      "Legacy System Assessment",
      "Modernization Strategy",
      "Data Migration",
      "Application Re-architecture",
      "Hybrid Integration",
      "Performance Tuning",
    ],
    benefits: ["Reduced Costs", "Improved Agility", "Enhanced Security"],
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description:
      "Streamline your development lifecycle with automated pipelines, continuous integration, and deployment best practices.",
    capabilities: [
      "CI/CD Pipeline Setup",
      "Infrastructure Automation",
      "Container Orchestration",
      "Monitoring & Logging",
      "Security Integration",
      "DevOps Culture Training",
    ],
    benefits: ["Faster Releases", "Higher Quality", "Better Collaboration"],
  },
  {
    icon: Layers,
    title: "API First Architecture",
    description:
      "Design and implement scalable, secure, and well-documented APIs that power your digital ecosystem and enable seamless integrations.",
    capabilities: [
      "RESTful API Design",
      "GraphQL Implementation",
      "API Gateway Setup",
      "API Documentation",
      "Rate Limiting & Security",
      "Microservices Architecture",
    ],
    benefits: ["Flexibility", "Faster Integration", "Better Developer Experience"],
  },
  {
    icon: LineChart,
    title: "Digital Marketing & SEO",
    description:
      "Boost your online presence with data-driven marketing strategies, SEO optimization, and comprehensive digital campaigns.",
    capabilities: [
      "SEO Strategy & Implementation",
      "Content Marketing",
      "Social Media Management",
      "Analytics & Reporting",
      "Conversion Optimization",
      "Brand Development",
    ],
    benefits: ["Increased Visibility", "Higher Conversions", "Brand Authority"],
  },
  {
    icon: Settings,
    title: "Custom ERP Solutions",
    description:
      "Develop tailored enterprise resource planning systems that optimize your business operations and improve efficiency.",
    capabilities: [
      "Business Process Analysis",
      "Custom ERP Development",
      "System Integration",
      "Workflow Automation",
      "Reporting & Analytics",
      "Training & Support",
    ],
    benefits: ["Streamlined Operations", "Better Visibility", "Cost Savings"],
  },
  {
    icon: Users,
    title: "Manpower Augmentation",
    description:
      "Access skilled technology professionals to scale your team quickly and accelerate project delivery with expert resources.",
    capabilities: [
      "Staff Augmentation",
      "Dedicated Development Teams",
      "Expert Consultants",
      "Project-Based Resources",
      "Long-Term Partnerships",
      "Flexible Engagement Models",
    ],
    benefits: ["Rapid Scaling", "Cost Efficiency", "Access to Expertise"],
  },
]

export function ServiceDetailSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={service.title}
                className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${isEven ? "" : "lg:grid-flow-dense"}`}
              >
                {/* Content */}
                <div className={isEven ? "" : "lg:col-start-2"}>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{service.title}</h2>
                  <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{service.description}</p>

                  {/* Capabilities */}
                  <div className="mb-6">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                      Key Capabilities
                    </h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.capabilities.map((capability) => (
                        <li key={capability} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                      Business Benefits
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                        >
                          <TrendingUp className="h-3 w-3" />
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={`relative ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-32 w-32 text-primary/20" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
