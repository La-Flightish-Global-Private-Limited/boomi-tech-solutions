// Content Configuration - Admin Configurable
// Update these values to customize all website content without touching component code

import { caseStudies as detailedCaseStudies } from './case-studies-data'

export const contentConfig = {
  // Hero Section
  hero: {
    title: "Transform Your Business with Enterprise-Grade Technology Solutions",
    subtitle: "Partner with industry-leading experts in AI, Cloud, and Digital Innovation",
    ctaText: "Start Your Project",
    ctaLink: "#contact",
    secondaryCtaText: "View Our Work",
    secondaryCtaLink: "#case-studies",
    backgroundImage: "/abstract-technology-network-digital-innovation.jpg",
  },

  // Services
  services: [
    {
      title: "SAAS Application Development",
      description:
        "Build scalable, secure, and high-performance SAAS platforms that drive business growth and customer satisfaction.",
      icon: "Code",
    },
    {
      title: "AI Product Development",
      description:
        "Leverage cutting-edge AI and machine learning to create intelligent products that solve real-world problems.",
      icon: "Brain",
    },
    {
      title: "AI Agent Development",
      description:
        "Design and deploy autonomous AI agents that automate complex workflows and enhance decision-making.",
      icon: "Bot",
    },
    {
      title: "Mainframes & Modernization",
      description:
        "Transform legacy systems into modern, cloud-native architectures without disrupting business operations.",
      icon: "Server",
    },
    {
      title: "Multi-Cloud Infrastructure",
      description:
        "Design and implement robust multi-cloud strategies for maximum flexibility, reliability, and cost optimization.",
      icon: "Cloud",
    },
    {
      title: "DevOps & CI/CD",
      description:
        "Streamline development workflows with automated pipelines, infrastructure as code, and continuous delivery.",
      icon: "GitBranch",
    },
    {
      title: "API First Architecture",
      description:
        "Build scalable, maintainable systems with API-first design principles and microservices architecture.",
      icon: "Network",
    },
    {
      title: "Custom Application Development",
      description:
        "Tailored software solutions designed specifically for your unique business requirements and workflows.",
      icon: "Wrench",
    },
    {
      title: "Digital Marketing & SEO",
      description: "Boost your online presence with data-driven marketing strategies and search engine optimization.",
      icon: "TrendingUp",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CTO, FinTech Innovations",
      company: "Fortune 500 Financial Services",
      image: "/professional-woman-executive.png",
      content:
        "Boomi Tech Solutions transformed our legacy mainframe systems into a modern cloud-native architecture. Their expertise in modernization saved us millions and improved our time-to-market by 60%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "VP of Engineering",
      company: "HealthTech Global",
      image: "/professional-executive-man.png",
      content:
        "The AI automation solutions delivered by Boomi exceeded our expectations. Their team's deep technical knowledge and commitment to excellence made them an invaluable partner in our digital transformation.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "RetailNext Solutions",
      image: "/professional-woman-ceo.png",
      content:
        "From MVP to full-scale SAAS platform in record time. Boomi's agile approach and technical prowess helped us secure Series A funding. They're not just developers, they're strategic partners.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Director of IT",
      company: "Manufacturing Corp",
      image: "/professional-man-director.jpg",
      content:
        "Their multi-cloud infrastructure expertise helped us achieve 99.99% uptime while reducing our cloud costs by 40%. The DevOps practices they implemented revolutionized our deployment pipeline.",
      rating: 5,
    },
  ],

  // Case Studies - Using detailed case studies from case-studies-data.ts

  // Company Stats
  stats: [
    {
      value: "500+",
      label: "Projects Delivered",
      description: "Successfully completed across industries",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "Based on post-project surveys",
    },
    {
      value: "50+",
      label: "Enterprise Clients",
      description: "Fortune 500 and growing startups",
    },
    {
      value: "15+",
      label: "Years Experience",
      description: "Combined team expertise",
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance",
    },
    {
      value: "99.9%",
      label: "Uptime SLA",
      description: "Guaranteed service availability",
    },
  ],

  // Trust Indicators - Company Logos
  trustedBy: {
    title: "Trusted by Leading Organizations",
    subtitle: "Join hundreds of companies that trust us with their technology needs",
    companies: [
      { name: "Microsoft", logo: "/microsoft-logo.png" },
      { name: "Amazon", logo: "/amazon-logo.png" },
      { name: "Google", logo: "/google-logo.png" },
      { name: "IBM", logo: "/ibm-logo.png" },
      { name: "Oracle", logo: "/oracle-logo.png" },
      { name: "Salesforce", logo: "/salesforce-logo.png" },
    ],
  },

  // FAQ
  faq: [
    {
      question: "What industries do you specialize in?",
      answer:
        "We work across multiple industries including FinTech, Healthcare, E-commerce, Manufacturing, and Enterprise SaaS. Our team has deep expertise in regulated industries and complex technical environments.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity. An MVP can be delivered in 8-12 weeks, while enterprise-scale applications typically take 3-6 months. We provide detailed timelines during our discovery phase.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes! We offer comprehensive support packages including 24/7 monitoring, regular updates, security patches, and dedicated technical support. Our SLA guarantees 99.9% uptime for production systems.",
    },
    {
      question: "What is your development process?",
      answer:
        "We follow an agile methodology with 2-week sprints, regular demos, and continuous client feedback. Our process includes discovery, design, development, testing, deployment, and ongoing optimization.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "We excel at staff augmentation and can seamlessly integrate with your existing development team. We also offer training and knowledge transfer to ensure long-term success.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We specialize in modern tech stacks including Next.js, React, Node.js, Python, AWS, Azure, GCP, Kubernetes, and AI/ML frameworks. We choose technologies based on your specific needs and goals.",
    },
    {
      question: "How do you ensure code quality and security?",
      answer:
        "We implement rigorous code reviews, automated testing, security audits, and follow industry best practices. All code is scanned for vulnerabilities, and we maintain compliance with SOC 2, HIPAA, and GDPR standards.",
    },
    {
      question: "What are your pricing models?",
      answer:
        "We offer flexible pricing including fixed-price projects, time & materials, and dedicated team models. Pricing depends on project scope, timeline, and resource requirements. Contact us for a detailed quote.",
    },
  ],

  // About Section
  about: {
    title: "Why Choose Boomi Tech Solutions",
    subtitle: "We're not just developers—we're your strategic technology partner",
    description:
      "With over 15 years of combined expertise, we've helped hundreds of companies transform their businesses through innovative technology solutions. Our team of seasoned engineers, architects, and consultants brings deep technical knowledge and a proven track record of delivering results.",
    values: [
      {
        title: "Innovation First",
        description:
          "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.",
      },
      {
        title: "Quality Obsessed",
        description:
          "Every line of code is crafted with precision, tested rigorously, and optimized for performance and security.",
      },
      {
        title: "Client Success",
        description:
          "Your success is our success. We're committed to delivering measurable results and exceeding expectations.",
      },
      {
        title: "Transparent Communication",
        description: "Regular updates, clear documentation, and open dialogue ensure you're always in the loop.",
      },
    ],
    images: ["/professional-technology-team-collaboration.jpg", "/modern-office-workspace-innovation.jpg", "/software-development-coding.png"],
  },

  // Newsletter
  newsletter: {
    title: "Stay Updated with Tech Insights",
    subtitle: "Get the latest trends, best practices, and exclusive insights delivered to your inbox monthly.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    successMessage: "Thanks for subscribing! Check your email for confirmation.",
  },

  // CTA Section
  cta: {
    title: "Ready to Transform Your Business?",
    subtitle: "Let's discuss how we can help you achieve your technology goals",
    buttonText: "Schedule a Free Consultation",
    buttonLink: "#contact",
    secondaryText: "Or call us at",
  },
}

// Export detailed case studies for dedicated case studies page
export { detailedCaseStudies }
