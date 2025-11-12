export const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Document Analysis Platform",
    industry: "Legal Tech",
    client: "LegalFlow AI",
    duration: "3 months",
    image: "/software-development-coding.png",
    tags: ["LLM", "RAG", "GPT-4"],
    
    challenge: {
      title: "Manual Contract Review Taking Days",
      description: "A legal startup needed to analyze thousands of contracts quickly. Their lawyers were spending 2-3 hours per contract doing manual review, creating a bottleneck.",
      painPoints: [
        "Manual contract review taking 2-3 hours each",
        "Missing critical clauses and risks",
        "Can't scale to handle more clients",
        "High cost per contract reviewed",
        "Inconsistent analysis quality"
      ]
    },
    
    solution: {
      title: "RAG-Powered Contract Analysis System",
      description: "Built an AI system using GPT-4 and RAG (Retrieval Augmented Generation) that analyzes contracts, extracts key terms, identifies risks, and generates summaries in minutes.",
      approach: [
        "Implemented RAG with vector database (Pinecone)",
        "Fine-tuned prompts for legal document analysis",
        "Built document parsing pipeline (PDF to text)",
        "Created risk scoring algorithm",
        "Added human-in-the-loop review workflow"
      ],
      technologies: ["GPT-4", "LangChain", "Pinecone", "Next.js", "Python"]
    },
    
    results: {
      metrics: [
        { label: "Analysis Time", value: "5 minutes", impact: "From 2-3 hours" },
        { label: "Accuracy", value: "94%", impact: "Validated by lawyers" },
        { label: "Cost per Contract", value: "$2", impact: "From $150 manual" },
        { label: "Contracts/Day", value: "200+", impact: "From 10-15" },
        { label: "Project Cost", value: "$18K", impact: "3-month timeline" },
        { label: "Monthly Cost", value: "$400", impact: "OpenAI + hosting" }
      ],
      testimonial: {
        quote: "This AI system transformed our business. We can now analyze 200+ contracts daily with 94% accuracy. Our clients get results in minutes instead of days.",
        author: "Sarah Kim, CEO",
        company: "LegalFlow AI"
      }
    },
    
    globalImpact: "The startup raised $2M seed funding after demonstrating the platform's capabilities. Now processing 5K+ contracts monthly."
  },

  {
    id: 2,
    title: "Custom AI Agent for E-commerce Support",
    industry: "E-commerce",
    client: "ShopSmart Online",
    duration: "6 weeks",
    image: "/ecommerce-saas-platform.jpg",
    tags: ["AI Agents", "GPT-4", "Automation"],
    
    challenge: {
      title: "Customer Support Team Overwhelmed",
      description: "An e-commerce store with 50K monthly orders had 3 support agents handling 500+ tickets daily. Response times were 24+ hours, causing customer complaints.",
      painPoints: [
        "500+ support tickets daily",
        "24+ hour response times",
        "3 agents completely overwhelmed",
        "Repetitive questions (order status, returns, etc.)",
        "Customer satisfaction dropping"
      ]
    },
    
    solution: {
      title: "Intelligent AI Support Agent",
      description: "Built an AI agent using GPT-4 that handles common queries, checks order status, processes returns, and escalates complex issues to humans. Integrated with Shopify and email.",
      approach: [
        "Trained GPT-4 on company policies and FAQs",
        "Integrated with Shopify API for order data",
        "Built email and chat interfaces",
        "Created escalation logic for complex cases",
        "Added sentiment analysis for priority routing"
      ],
      technologies: ["GPT-4", "LangChain", "Shopify API", "Next.js", "Vercel"]
    },
    
    results: {
      metrics: [
        { label: "Tickets Automated", value: "80%", impact: "400+ daily" },
        { label: "Response Time", value: "< 1 minute", impact: "From 24+ hours" },
        { label: "Customer Satisfaction", value: "4.8/5", impact: "From 3.2/5" },
        { label: "Support Cost", value: "60% reduction", impact: "Huge savings" },
        { label: "Project Cost", value: "$12K", impact: "6-week delivery" },
        { label: "Monthly Cost", value: "$250", impact: "OpenAI + hosting" }
      ],
      testimonial: {
        quote: "The AI agent handles 80% of our support tickets instantly. Our team now focuses on complex issues. Customer satisfaction went from 3.2 to 4.8 stars.",
        author: "Mike Rodriguez",
        company: "ShopSmart Online"
      }
    },
    
    globalImpact: "The company scaled from 50K to 100K monthly orders without hiring more support staff. Planning to expand AI to other departments."
  },

  {
    id: 3,
    title: "RAG-Based Knowledge Management System",
    industry: "SaaS",
    client: "DevDocs Platform",
    duration: "2 months",
    image: "/professional-technology-team-collaboration.jpg",
    tags: ["RAG", "Vector DB", "Embeddings"],
    
    challenge: {
      title: "Developers Can't Find Documentation",
      description: "A developer tools company had 10K+ documentation pages. Developers spent hours searching for answers, and support was flooded with questions already answered in docs.",
      painPoints: [
        "10K+ documentation pages",
        "Developers can't find answers",
        "Search returns irrelevant results",
        "Support team answering same questions",
        "Documentation scattered across platforms"
      ]
    },
    
    solution: {
      title: "AI-Powered Documentation Search",
      description: "Built a RAG system that understands natural language questions and returns precise answers from documentation with source citations. Works like ChatGPT but for their docs.",
      approach: [
        "Embedded all documentation using OpenAI",
        "Stored vectors in Pinecone database",
        "Built semantic search with GPT-4",
        "Added source citation and links",
        "Created feedback loop for improvements"
      ],
      technologies: ["GPT-4", "OpenAI Embeddings", "Pinecone", "Next.js", "TypeScript"]
    },
    
    results: {
      metrics: [
        { label: "Search Accuracy", value: "92%", impact: "Finds right answer" },
        { label: "Time to Answer", value: "< 10 seconds", impact: "From 30+ minutes" },
        { label: "Support Tickets", value: "50% reduction", impact: "Fewer questions" },
        { label: "Developer Satisfaction", value: "4.7/5", impact: "Love the feature" },
        { label: "Project Cost", value: "$15K", impact: "8-week timeline" },
        { label: "Monthly Cost", value: "$180", impact: "Very affordable" }
      ],
      testimonial: {
        quote: "Developers love this. They ask questions in plain English and get instant, accurate answers with source links. Support tickets dropped 50%.",
        author: "Lisa Chen, Head of Product",
        company: "DevDocs Platform"
      }
    },
    
    globalImpact: "Feature became a key differentiator. Competitors are now trying to copy it. Company added 2K new users in 3 months."
  },

  {
    id: 4,
    title: "Regional Logistics Company Improves Delivery Efficiency",
    industry: "Logistics",
    client: "Regional Logistics Company",
    duration: "6 months",
    image: "/modern-technology-architecture-black-and-white.jpg",
    tags: ["Route Optimization", "GPS Tracking"],
    
    challenge: {
      title: "Manual Route Planning Causing Delays",
      description: "A regional logistics company with 50 trucks was struggling with manual route planning. Drivers were taking inefficient routes, and dispatchers had no real-time visibility.",
      painPoints: [
        "30% of deliveries running late",
        "Manual route planning taking 2 hours daily",
        "Extra fuel costs from inefficient routes",
        "Customer complaints increasing",
        "No real-time tracking",
        "Difficulty scaling operations"
      ]
    },
    
    solution: {
      title: "Route Optimization and Tracking System",
      description: "We built a web-based route optimization tool with real-time GPS tracking. Dispatchers can see all trucks on a map and customers get delivery updates.",
      approach: [
        "Built route optimization using Google Maps API",
        "Created dispatcher dashboard with real-time locations",
        "Added customer tracking portal",
        "Integrated with existing dispatch software",
        "Set up automated SMS notifications",
        "Deployed on cloud for easy access"
      ],
      technologies: ["React", "Node.js", "Google Maps API", "PostgreSQL", "Heroku"]
    },
    
    results: {
      metrics: [
        { label: "On-Time Delivery", value: "92%", impact: "From 70% baseline" },
        { label: "Route Planning Time", value: "15 minutes", impact: "From 2 hours daily" },
        { label: "Fuel Savings", value: "18%", impact: "Saving ~$2K/month" },
        { label: "Customer Complaints", value: "60% reduction", impact: "Better communication" },
        { label: "Project Cost", value: "$28K", impact: "6-month timeline" },
        { label: "Monthly Hosting", value: "$150", impact: "Affordable to maintain" }
      ],
      testimonial: {
        quote: "We can finally see where all our trucks are in real-time. Route planning that used to take 2 hours now takes 15 minutes. Our drivers love it and customers are happier.",
        author: "Operations Manager",
        company: "Regional Logistics Company"
      }
    },
    
    globalImpact: "The company has since expanded from 50 to 75 trucks using the same system."
  },

  {
    id: 2,
    title: "Local Clinic Launches Telemedicine Platform",
    industry: "Healthcare",
    client: "Regional Healthcare Clinic",
    duration: "4 months",
    image: "/healthcare-ai-interface.jpg",
    tags: ["Telemedicine", "HIPAA Compliance"],
    
    challenge: {
      title: "Rural Patients Traveling 2+ Hours for Appointments",
      description: "A regional clinic with 8 doctors wanted to serve rural patients who had to drive 2+ hours for appointments. Many patients were skipping follow-ups.",
      painPoints: [
        "Patients driving 2+ hours each way",
        "30% of patients missing follow-ups",
        "No way to do virtual consultations",
        "Doctors spending evenings on phone calls",
        "Limited appointment slots",
        "Needed HIPAA-compliant solution"
      ]
    },
    
    solution: {
      title: "Video Consultation Platform",
      description: "We built a HIPAA-compliant video consultation platform. Patients can book and attend appointments from home. Doctors can review records and prescribe medications.",
      approach: [
        "Integrated Twilio Video for HIPAA-compliant calls",
        "Built appointment booking system",
        "Created patient portal for medical records",
        "Added e-prescription integration",
        "Set up automated appointment reminders",
        "Made it mobile-friendly for patients"
      ],
      technologies: ["React", "Node.js", "Twilio Video", "PostgreSQL", "Stripe"]
    },
    
    results: {
      metrics: [
        { label: "Virtual Visits", value: "1,200+", impact: "In first 6 months" },
        { label: "Patient No-Shows", value: "75% reduction", impact: "Much more convenient" },
        { label: "Doctor Efficiency", value: "5 more patients/day", impact: "No travel time" },
        { label: "Patient Satisfaction", value: "4.6/5", impact: "Love the convenience" },
        { label: "Project Cost", value: "$22K", impact: "4-month timeline" },
        { label: "Monthly Cost", value: "$180", impact: "Twilio + hosting" }
      ],
      testimonial: {
        quote: "Our rural patients love this. They can see their doctor from home instead of driving 2 hours. We're doing 20-30 video visits per day now.",
        author: "Clinic Director",
        company: "Regional Healthcare Clinic"
      }
    },
    
    globalImpact: "Two other clinics in the area have asked about implementing similar systems."
  },

  {
    id: 3,
    title: "Community Bank Modernizes Online Banking",
    industry: "Financial Services",
    client: "Community Bank",
    duration: "8 months",
    image: "/modern-fintech-dashboard.png",
    tags: ["Mobile Banking", "Modernization"],
    
    challenge: {
      title: "Outdated Online Banking Losing Customers",
      description: "A community bank with 15,000 customers had an outdated online banking system from 2010. It didn't work on mobile phones, and younger customers were switching to banks with better apps.",
      painPoints: [
        "Online banking didn't work on mobile",
        "Losing younger customers to digital banks",
        "Couldn't add features like mobile check deposit",
        "Customer complaints about outdated interface",
        "Security concerns with old system",
        "Expensive maintenance from legacy vendor"
      ]
    },
    
    solution: {
      title: "Modern Mobile-First Online Banking",
      description: "We built a new online banking platform that works great on phones and computers. Customers can check balances, transfer money, deposit checks with their camera, and pay bills.",
      approach: [
        "Built responsive web app that works on all devices",
        "Integrated with bank's core banking system API",
        "Added mobile check deposit using camera",
        "Implemented two-factor authentication",
        "Created bill pay and transfer features",
        "Migrated existing customers smoothly"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Plaid API", "AWS"]
    },
    
    results: {
      metrics: [
        { label: "Mobile Users", value: "65%", impact: "From 0% previously" },
        { label: "Customer Satisfaction", value: "4.5/5", impact: "Up from 2.8/5" },
        { label: "Support Calls", value: "40% reduction", impact: "Easier to use" },
        { label: "Customer Retention", value: "Improved", impact: "Stopped losing young customers" },
        { label: "Project Cost", value: "$38K", impact: "8-month timeline" },
        { label: "Monthly Hosting", value: "$220", impact: "AWS + services" }
      ],
      testimonial: {
        quote: "Our customers love the new online banking. We're finally competitive with the big banks. Young people are actually opening accounts with us now.",
        author: "IT Director",
        company: "Community Bank"
      }
    },
    
    globalImpact: "The bank has grown deposits by 15% since launch."
  }
]
