// Content Configuration - Admin Configurable
// Update these values to customize all website content without touching component code

import { caseStudies as detailedCaseStudies } from './case-studies-data-new'

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
    {
      title: "Professional Training & Cert Prep",
      description: "Expert-led training and certification preparation for cloud platforms, AI/ML, modern frameworks, and career development.",
      icon: "GraduationCap",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Alex Thompson",
      role: "Founder",
      company: "TechStart AI",
      image: "/professional-executive-man.png",
      content:
        "Boomi built our RAG-powered customer support chatbot in just 6 weeks. It handles 80% of our support tickets automatically. The quality and speed of delivery was exceptional.",
      rating: 5,
    },
    {
      name: "Sarah Martinez",
      role: "CTO",
      company: "HealthSync Platform",
      image: "/professional-woman-executive.png",
      content:
        "They helped us build an AI agent that automates medical record processing. What used to take hours now takes minutes. Their expertise in LLMs and healthcare compliance was invaluable.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "CEO",
      company: "DataFlow Analytics",
      image: "/professional-man-director.jpg",
      content:
        "From concept to production in 3 months. Boomi delivered a custom LLM application that analyzes financial documents with 95% accuracy. They're our go-to partner for AI projects.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Product Manager",
      company: "EduTech Solutions",
      image: "/professional-woman-ceo.png",
      content:
        "The AI tutoring system they built uses GPT-4 to provide personalized learning. Our student engagement increased 3x. Boomi made complex AI technology accessible and practical.",
      rating: 5,
    },
  ],

  // Case Studies - Using detailed case studies from case-studies-data.ts

  // Company Stats
  stats: [
    {
      value: "50+",
      label: "Projects Delivered",
      description: "Successfully completed across industries",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      description: "Every client recommends us",
    },
    {
      value: "15+",
      label: "Active Clients",
      description: "Growing startups and SMBs",
    },
    {
      value: "18+",
      label: "Years Experience",
      description: "Combined team expertise",
    },
    {
      value: "5+",
      label: "AI/LLM Projects",
      description: "RAG, agents, and custom models",
    },
    {
      value: "99.9%",
      label: "Uptime SLA",
      description: "Guaranteed service availability",
    },
  ],

  // Trust Indicators - Company Logos
  trustedBy: {
    title: "Built with Industry-Leading Technologies",
    subtitle: "Leveraging cutting-edge tools and platforms to deliver exceptional results",
    companies: [
      { name: "AWS", logo: "/amazon-logo.png" },
      { name: "Google Cloud", logo: "/google-logo.png" },
      { name: "Microsoft Azure", logo: "/microsoft-logo.png" },
      { name: "Oracle Cloud", logo: "/oracle-logo.png" },
      { name: "IBM Cloud", logo: "/ibm-logo.png" },
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
    {
      question: "Do you offer training and certification programs?",
      answer:
        "Yes! We provide professional training and certification preparation in cloud platforms (AWS, Azure, GCP), AI/ML, modern web frameworks (Next.js, React, Astro), cybersecurity, mainframes, Salesforce, big data, and career development (PMP, Agile). Note: We prepare you for exams; certifications are issued by respective organizations. Both corporate and individual training available.",
    },
  ],

  // About Section
  about: {
    title: "Why Choose Boomi Tech Solutions",
    subtitle: "We're not just developers—we're your strategic technology partner",
    description:
      "We're an emerging technology company specializing in AI/LLM applications, modern web development, and cloud solutions. Our team brings 18+ years of combined expertise from leading tech companies, now focused on helping startups and SMBs leverage cutting-edge AI technology.",
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

  // Training Programs
  training: {
    title: "Professional Training & Certification Preparation",
    subtitle: "Prepare your team for industry-recognized certifications with expert-led training",
    categories: [
      {
        name: "Cloud Platforms",
        icon: "Cloud",
        courses: [
          { name: "AWS Solutions Architect", level: "Associate & Professional", duration: "8-12 weeks" },
          { name: "Azure Administrator & Developer", level: "AZ-104, AZ-204", duration: "8-10 weeks" },
          { name: "Google Cloud Engineer", level: "Associate & Professional", duration: "8-12 weeks" },
          { name: "Multi-Cloud Architecture", level: "Advanced", duration: "6 weeks" },
        ]
      },
      {
        name: "AI & Machine Learning",
        icon: "Brain",
        courses: [
          { name: "Generative AI & LLMs", level: "GPT-4, Claude, Gemini", duration: "6 weeks" },
          { name: "RAG & Vector Databases", level: "LangChain, Pinecone", duration: "4 weeks" },
          { name: "AI Agent Development", level: "AutoGPT, LangGraph", duration: "6 weeks" },
          { name: "Machine Learning with Python", level: "TensorFlow, PyTorch", duration: "10 weeks" },
        ]
      },
      {
        name: "Modern Web Development",
        icon: "Code",
        courses: [
          { name: "Next.js 15 & React 19", level: "Beginner to Advanced", duration: "8 weeks" },
          { name: "Astro.js & Modern SSG", level: "Intermediate", duration: "4 weeks" },
          { name: "Full-Stack TypeScript", level: "Node.js, Prisma, tRPC", duration: "10 weeks" },
          { name: "N8N Workflow Automation", level: "No-code/Low-code", duration: "3 weeks" },
        ]
      },
      {
        name: "Enterprise & Legacy",
        icon: "Server",
        courses: [
          { name: "Mainframe Modernization", level: "COBOL to Cloud", duration: "12 weeks" },
          { name: "Salesforce Development", level: "Admin & Developer", duration: "8 weeks" },
          { name: "Big Data Engineering", level: "Spark, Hadoop, Kafka", duration: "10 weeks" },
          { name: "Data Engineering with Python", level: "ETL, Airflow, dbt", duration: "8 weeks" },
        ]
      },
      {
        name: "Security & Compliance",
        icon: "Shield",
        courses: [
          { name: "Cybersecurity Fundamentals", level: "CompTIA Security+", duration: "8 weeks" },
          { name: "Cloud Security", level: "AWS/Azure/GCP", duration: "6 weeks" },
          { name: "DevSecOps", level: "Security in CI/CD", duration: "6 weeks" },
          { name: "Ethical Hacking & Pentesting", level: "CEH Prep", duration: "10 weeks" },
        ]
      },
      {
        name: "Career Development",
        icon: "TrendingUp",
        courses: [
          { name: "PMP Certification Prep", level: "Project Management", duration: "8 weeks" },
          { name: "Agile & Scrum Master", level: "CSM, PSM", duration: "4 weeks" },
          { name: "Tech Leadership", level: "CTO/VP Engineering", duration: "6 weeks" },
          { name: "Interview Preparation", level: "FAANG & Startups", duration: "4 weeks" },
        ]
      },
    ],
    features: [
      "Live instructor-led sessions",
      "Hands-on labs and real-world projects",
      "Exam preparation and study materials",
      "Career guidance and mentorship",
      "Flexible weekend/evening batches",
      "Lifetime access to course materials",
    ],
    disclaimer: "We provide training and exam preparation. Certifications are issued by respective organizations (AWS, Microsoft, Google, PMI, etc.)."
  },
}

// Export detailed case studies for dedicated case studies page
export { detailedCaseStudies }
