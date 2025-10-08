export const caseStudies = [
  {
    id: 1,
    title: "Regional Logistics Company Improves Delivery Efficiency",
    industry: "Logistics",
    client: "Regional Logistics Company",
    duration: "6 months",
    image: "/abstract-technology-network-digital-innovation.jpg",
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
    image: "/modern-office-workspace-innovation.jpg",
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
