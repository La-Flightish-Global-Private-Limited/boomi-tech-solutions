export const caseStudies = [
  {
    id: 1,
    title: "Global Supply Chain Transformation with AI-Powered Logistics",
    industry: "Logistics & Supply Chain",
    client: "Fortune 100 Logistics Corporation",
    duration: "14 months",
    image: "/abstract-technology-network-digital-innovation.jpg",
    tags: ["AI/ML", "Cloud Infrastructure", "Real-time Analytics"],
    
    challenge: {
      title: "Fragmented Systems Causing $50M Annual Losses",
      description: "A global logistics giant was hemorrhaging money due to inefficient route planning, delayed shipments, and lack of real-time visibility across 47 countries. Their legacy systems couldn't communicate, leading to duplicate orders, missed deliveries, and customer churn.",
      painPoints: [
        "23% of shipments delayed due to poor route optimization",
        "Manual tracking across 15 disconnected systems",
        "$50M annual loss from inefficiencies and penalties",
        "Customer satisfaction dropped to 67%",
        "Unable to predict demand or optimize inventory",
        "Compliance issues across multiple jurisdictions"
      ]
    },
    
    solution: {
      title: "AI-Driven Unified Logistics Platform",
      description: "We architected and deployed a cloud-native platform powered by machine learning algorithms that unified all systems, optimized routes in real-time, and provided predictive analytics for demand forecasting.",
      approach: [
        "Built microservices architecture on AWS with multi-region deployment",
        "Implemented ML models for route optimization using TensorFlow",
        "Created real-time tracking dashboard with React and WebSocket",
        "Integrated 15 legacy systems via custom API gateway",
        "Deployed predictive analytics for demand forecasting",
        "Implemented automated compliance checking across jurisdictions"
      ],
      technologies: ["AWS", "TensorFlow", "Python", "React", "Kubernetes", "PostgreSQL", "Redis"]
    },
    
    results: {
      metrics: [
        { label: "Cost Savings", value: "$73M annually", impact: "146% ROI in first year" },
        { label: "On-Time Delivery", value: "98.7%", impact: "From 77% baseline" },
        { label: "Route Efficiency", value: "34% improvement", impact: "Reduced fuel costs by $18M" },
        { label: "Customer Satisfaction", value: "94%", impact: "27 point increase" },
        { label: "Processing Speed", value: "12x faster", impact: "Real-time vs 4-hour delays" },
        { label: "Carbon Emissions", value: "28% reduction", impact: "Contributing to sustainability goals" }
      ],
      testimonial: {
        quote: "Boomi Tech didn't just solve our technical problems—they transformed our entire business model. The AI-powered platform has become our competitive advantage in the market.",
        author: "Chief Operations Officer",
        company: "Global Logistics Leader"
      }
    },
    
    globalImpact: "This solution is now being replicated across the logistics industry, helping companies worldwide reduce carbon emissions while improving efficiency. The platform processes over 2 million shipments daily, contributing to more sustainable global trade."
  },

  {
    id: 2,
    title: "Revolutionary Telemedicine Platform Serving 5M+ Patients",
    industry: "Healthcare Technology",
    client: "National Healthcare Network",
    duration: "18 months",
    image: "/modern-office-workspace-innovation.jpg",
    tags: ["HIPAA Compliance", "AI Diagnostics", "Telemedicine"],
    
    challenge: {
      title: "Healthcare Access Crisis in Rural Communities",
      description: "A national healthcare network struggled to serve rural communities where 40% of residents lived more than 50 miles from the nearest specialist. Emergency room overcrowding and delayed diagnoses were leading to preventable complications and deaths.",
      painPoints: [
        "2.3 million patients without access to specialists",
        "Average wait time of 6 weeks for specialist appointments",
        "ER overcrowding with 8-hour average wait times",
        "30% of diagnoses delayed due to lack of access",
        "Paper-based records causing treatment delays",
        "No integration between hospitals and clinics"
      ]
    },
    
    solution: {
      title: "AI-Enhanced Telemedicine Ecosystem",
      description: "We developed a comprehensive telemedicine platform with AI-powered triage, virtual consultations, and integrated electronic health records that connected patients with specialists instantly while maintaining HIPAA compliance.",
      approach: [
        "Built HIPAA-compliant infrastructure on Azure with end-to-end encryption",
        "Developed AI triage system using natural language processing",
        "Created HD video consultation platform with 99.99% uptime",
        "Integrated EHR systems across 200+ facilities",
        "Implemented AI-assisted diagnostic tools for common conditions",
        "Built mobile apps for iOS and Android with offline capabilities"
      ],
      technologies: ["Azure", "Python", "React Native", "Node.js", "MongoDB", "WebRTC", "TensorFlow"]
    },
    
    results: {
      metrics: [
        { label: "Patients Served", value: "5.2M+", impact: "In first 24 months" },
        { label: "Wait Time Reduction", value: "92%", impact: "From 6 weeks to same-day" },
        { label: "ER Visits Reduced", value: "43%", impact: "Saving $180M annually" },
        { label: "Diagnostic Accuracy", value: "96.8%", impact: "AI-assisted triage" },
        { label: "Patient Satisfaction", value: "4.8/5", impact: "Across all demographics" },
        { label: "Cost per Visit", value: "67% lower", impact: "Compared to in-person" }
      ],
      testimonial: {
        quote: "This platform has literally saved lives. We're now reaching patients who previously had no access to specialized care. The AI triage system is remarkably accurate and has reduced our diagnostic errors significantly.",
        author: "Chief Medical Officer",
        company: "National Healthcare Network"
      }
    },
    
    globalImpact: "The platform's success has inspired healthcare systems in 12 countries to adopt similar solutions. It's addressing the global healthcare access crisis, particularly in underserved communities, and has become a model for post-pandemic healthcare delivery."
  },

  {
    id: 3,
    title: "Banking Revolution: Zero-Downtime Migration to Cloud",
    industry: "Financial Services",
    client: "Top 10 Global Bank",
    duration: "22 months",
    image: "/modern-fintech-dashboard.png",
    tags: ["Mainframe Modernization", "Cloud Migration", "Zero Downtime"],
    
    challenge: {
      title: "40-Year-Old Mainframe Holding Back Innovation",
      description: "A major international bank was trapped by legacy COBOL systems that cost $120M annually to maintain, couldn't support mobile banking, and took 18 months to add new features. Competitors were launching innovative products in weeks while they were stuck in the past.",
      painPoints: [
        "$120M annual mainframe maintenance costs",
        "18-month timeline for new feature deployment",
        "Unable to support real-time transactions",
        "Losing 15,000 customers monthly to digital-first banks",
        "Security vulnerabilities in 40-year-old code",
        "Compliance risks with outdated systems",
        "Impossible to hire COBOL developers"
      ]
    },
    
    solution: {
      title: "Phased Cloud Migration with Zero Downtime",
      description: "We executed a sophisticated migration strategy that moved 40 years of banking operations to a modern cloud infrastructure without a single minute of downtime, while simultaneously rebuilding core systems with modern architecture.",
      approach: [
        "Analyzed 15 million lines of COBOL code and created migration roadmap",
        "Built cloud-native microservices architecture on AWS",
        "Implemented strangler fig pattern for gradual migration",
        "Created real-time data synchronization between old and new systems",
        "Deployed comprehensive testing framework with 99.99% coverage",
        "Trained 200+ staff on new systems and processes",
        "Maintained dual-run for 6 months to ensure stability"
      ],
      technologies: ["AWS", "Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Kubernetes"]
    },
    
    results: {
      metrics: [
        { label: "Cost Reduction", value: "$95M annually", impact: "79% decrease in IT costs" },
        { label: "Feature Deployment", value: "2 weeks", impact: "From 18 months" },
        { label: "Transaction Speed", value: "Real-time", impact: "From 24-hour batch processing" },
        { label: "System Uptime", value: "99.99%", impact: "Zero downtime during migration" },
        { label: "Customer Growth", value: "340,000 new", impact: "In 12 months post-migration" },
        { label: "Mobile Adoption", value: "78%", impact: "New mobile banking platform" }
      ],
      testimonial: {
        quote: "Boomi Tech achieved what three other consulting firms said was impossible. They migrated our entire banking infrastructure to the cloud without a single second of downtime. This transformation has positioned us to compete with digital-first banks.",
        author: "Chief Technology Officer",
        company: "Global Banking Institution"
      }
    },
    
    globalImpact: "This migration has become a blueprint for financial institutions worldwide facing similar challenges. The methodology is now being adopted by banks across Europe, Asia, and Latin America, accelerating the global shift to modern banking infrastructure."
  },

  {
    id: 4,
    title: "Smart Manufacturing: IoT-Driven Production Optimization",
    industry: "Manufacturing",
    client: "Fortune 500 Automotive Manufacturer",
    duration: "16 months",
    image: "/modern-technology-architecture-black-and-white.jpg",
    tags: ["IoT", "Predictive Maintenance", "Industry 4.0"],
    
    challenge: {
      title: "Unplanned Downtime Costing $2M Per Hour",
      description: "A global automotive manufacturer faced catastrophic production losses due to unexpected equipment failures. With 12 factories worldwide, unplanned downtime was costing $2M per hour, and quality issues were leading to expensive recalls.",
      painPoints: [
        "$480M annual loss from unplanned downtime",
        "Equipment failures unpredictable and frequent",
        "Quality defects discovered only after production",
        "No real-time visibility across global factories",
        "Manual inspections missing 23% of defects",
        "Supply chain disruptions from production delays",
        "Environmental waste from defective products"
      ]
    },
    
    solution: {
      title: "AI-Powered Predictive Maintenance & Quality Control",
      description: "We deployed an IoT ecosystem with 50,000+ sensors across 12 factories, combined with machine learning models that predict equipment failures 72 hours in advance and detect quality issues in real-time during production.",
      approach: [
        "Installed 50,000+ IoT sensors across production lines",
        "Built edge computing infrastructure for real-time processing",
        "Developed ML models for predictive maintenance using historical data",
        "Created computer vision system for automated quality inspection",
        "Implemented digital twin technology for production simulation",
        "Built centralized dashboard for global factory monitoring",
        "Integrated with existing ERP and supply chain systems"
      ],
      technologies: ["AWS IoT", "Python", "TensorFlow", "OpenCV", "Kafka", "InfluxDB", "Grafana"]
    },
    
    results: {
      metrics: [
        { label: "Downtime Reduction", value: "87%", impact: "Saving $418M annually" },
        { label: "Prediction Accuracy", value: "94%", impact: "72-hour advance warning" },
        { label: "Quality Defects", value: "91% reduction", impact: "From 2.3% to 0.2%" },
        { label: "Maintenance Costs", value: "42% lower", impact: "Proactive vs reactive" },
        { label: "Production Efficiency", value: "31% increase", impact: "Optimized workflows" },
        { label: "Waste Reduction", value: "64%", impact: "Environmental impact" }
      ],
      testimonial: {
        quote: "The predictive maintenance system has transformed our operations. We now fix problems before they happen. The ROI was achieved in just 7 months, and we're expanding this to all our global facilities.",
        author: "VP of Manufacturing Operations",
        company: "Global Automotive Leader"
      }
    },
    
    globalImpact: "This Industry 4.0 solution is revolutionizing manufacturing worldwide. The technology is being adopted across automotive, aerospace, and electronics industries, contributing to more sustainable production and reducing global industrial waste by millions of tons annually."
  },

  {
    id: 5,
    title: "EdTech Platform Democratizing Education for 10M Students",
    industry: "Education Technology",
    client: "International Education Foundation",
    duration: "20 months",
    image: "/team-collaboration-modern-office-black-and-white.jpg",
    tags: ["EdTech", "AI Personalization", "Global Scale"],
    
    challenge: {
      title: "Education Inequality Affecting 800M Students Globally",
      description: "An education foundation wanted to address the global learning crisis where 800 million students lack access to quality education. Traditional online learning had 78% dropout rates, and one-size-fits-all content wasn't working for diverse learners.",
      painPoints: [
        "78% dropout rate in online courses",
        "No personalization for different learning styles",
        "Language barriers for non-English speakers",
        "Limited access in low-bandwidth regions",
        "No way to track learning outcomes effectively",
        "Teachers overwhelmed with 50+ students per class",
        "Expensive content creation limiting course availability"
      ]
    },
    
    solution: {
      title: "AI-Personalized Learning Platform with Offline Capabilities",
      description: "We built a revolutionary learning platform that uses AI to personalize content for each student's learning style, works offline, supports 47 languages, and provides teachers with actionable insights to help struggling students.",
      approach: [
        "Developed adaptive learning algorithms that personalize content",
        "Built progressive web app working offline in low-bandwidth areas",
        "Implemented AI-powered translation for 47 languages",
        "Created teacher dashboard with student progress analytics",
        "Developed gamification system to increase engagement",
        "Built content creation tools reducing production time by 80%",
        "Deployed on global CDN for low-latency access worldwide"
      ],
      technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Redis", "AWS", "WebAssembly"]
    },
    
    results: {
      metrics: [
        { label: "Students Reached", value: "10.2M", impact: "Across 89 countries" },
        { label: "Completion Rate", value: "84%", impact: "From 22% baseline" },
        { label: "Learning Improvement", value: "67% faster", impact: "Compared to traditional methods" },
        { label: "Teacher Efficiency", value: "5x increase", impact: "AI-assisted grading" },
        { label: "Cost per Student", value: "$12/year", impact: "vs $1,200 traditional" },
        { label: "Languages Supported", value: "47", impact: "Breaking language barriers" }
      ],
      testimonial: {
        quote: "This platform is changing lives. Students in remote villages now have access to the same quality education as those in major cities. The AI personalization means every child learns at their own pace and style.",
        author: "Executive Director",
        company: "International Education Foundation"
      }
    },
    
    globalImpact: "The platform is addressing UN Sustainable Development Goal 4 (Quality Education). It's being used by governments in 15 countries as part of their national education strategy, helping bridge the global education gap and creating opportunities for millions of underserved students."
  },

  {
    id: 6,
    title: "Climate Tech: Carbon Tracking Platform for Net-Zero Goals",
    industry: "Climate Technology",
    client: "Global Sustainability Consortium",
    duration: "12 months",
    image: "/business-handshake-partnership-black-and-white.jpg",
    tags: ["Climate Tech", "Blockchain", "ESG Compliance"],
    
    challenge: {
      title: "Corporate Carbon Reporting Crisis and Greenwashing",
      description: "With 5,000+ companies committing to net-zero by 2050, there was no reliable way to track, verify, and report carbon emissions across complex global supply chains. Greenwashing was rampant, and investors couldn't trust ESG reports.",
      painPoints: [
        "No standardized carbon tracking methodology",
        "Manual data collection taking 6+ months",
        "Impossible to track Scope 3 supply chain emissions",
        "Greenwashing undermining legitimate efforts",
        "Investors unable to verify ESG claims",
        "Regulatory compliance becoming mandatory",
        "No real-time visibility into carbon footprint"
      ]
    },
    
    solution: {
      title: "Blockchain-Verified Carbon Tracking Ecosystem",
      description: "We created a comprehensive platform that automatically tracks carbon emissions across entire supply chains, verifies data using blockchain, and provides real-time ESG reporting that meets all major regulatory frameworks.",
      approach: [
        "Built IoT integration for real-time emissions monitoring",
        "Implemented blockchain for immutable carbon credit tracking",
        "Created AI models to estimate Scope 3 supply chain emissions",
        "Developed automated reporting for multiple ESG frameworks",
        "Built supplier portal for supply chain transparency",
        "Integrated with major carbon credit marketplaces",
        "Created investor dashboard for ESG verification"
      ],
      technologies: ["Ethereum", "Python", "React", "Node.js", "PostgreSQL", "AWS", "IoT Core"]
    },
    
    results: {
      metrics: [
        { label: "Companies Using", value: "2,400+", impact: "Across 67 countries" },
        { label: "Reporting Time", value: "Real-time", impact: "From 6 months manual process" },
        { label: "Supply Chain Visibility", value: "100%", impact: "Full Scope 3 tracking" },
        { label: "Carbon Reduced", value: "18M tons", impact: "Through optimization insights" },
        { label: "Greenwashing Prevention", value: "Blockchain verified", impact: "Immutable records" },
        { label: "Investment Unlocked", value: "$4.2B", impact: "ESG-verified companies" }
      ],
      testimonial: {
        quote: "This platform has become the gold standard for carbon tracking. The blockchain verification gives our investors confidence, and the real-time insights have helped us reduce emissions by 34% in just one year.",
        author: "Chief Sustainability Officer",
        company: "Fortune 100 Corporation"
      }
    },
    
    globalImpact: "The platform is accelerating global decarbonization efforts by making carbon tracking transparent and verifiable. It's being adopted by governments for regulatory compliance and has prevented an estimated 18 million tons of CO2 emissions through optimization insights."
  },

  {
    id: 7,
    title: "Cybersecurity Shield: AI-Powered Threat Detection",
    industry: "Cybersecurity",
    client: "Critical Infrastructure Provider",
    duration: "10 months",
    image: "/abstract-flowing-dark-water-waves-technology-textu.jpg",
    tags: ["Cybersecurity", "AI/ML", "Zero Trust"],
    
    challenge: {
      title: "Sophisticated Attacks Bypassing Traditional Security",
      description: "A critical infrastructure provider managing power grids for 50 million people was facing 10,000+ cyberattacks daily. Traditional security tools were missing 40% of threats, and a successful attack could cause widespread blackouts affecting millions.",
      painPoints: [
        "10,000+ daily attack attempts",
        "Traditional tools missing 40% of threats",
        "Average detection time of 197 days for breaches",
        "False positive rate of 85% overwhelming security team",
        "No visibility into insider threats",
        "Compliance requirements for critical infrastructure",
        "Potential for catastrophic blackouts affecting millions"
      ]
    },
    
    solution: {
      title: "AI-Driven Zero Trust Security Architecture",
      description: "We implemented a next-generation security platform using machine learning to detect anomalies in real-time, predict attacks before they happen, and automatically respond to threats while reducing false positives by 94%.",
      approach: [
        "Deployed AI models trained on 10 years of threat data",
        "Implemented zero trust architecture across all systems",
        "Built behavioral analytics for insider threat detection",
        "Created automated incident response workflows",
        "Deployed deception technology (honeypots) for threat intelligence",
        "Integrated with SIEM and existing security tools",
        "Established 24/7 AI-assisted security operations center"
      ],
      technologies: ["Python", "TensorFlow", "Elasticsearch", "Kafka", "Kubernetes", "AWS", "Splunk"]
    },
    
    results: {
      metrics: [
        { label: "Threat Detection", value: "99.7%", impact: "From 60% baseline" },
        { label: "Detection Time", value: "2.3 seconds", impact: "From 197 days average" },
        { label: "False Positives", value: "94% reduction", impact: "From 85% to 5%" },
        { label: "Attacks Prevented", value: "3.6M annually", impact: "Including 47 critical threats" },
        { label: "Response Time", value: "Automated", impact: "Instant vs 4-hour manual" },
        { label: "Compliance", value: "100%", impact: "All regulatory requirements met" }
      ],
      testimonial: {
        quote: "The AI-powered threat detection has been a game-changer. We're now stopping attacks in seconds that would have previously gone undetected for months. This technology is protecting critical infrastructure that millions depend on daily.",
        author: "Chief Information Security Officer",
        company: "Critical Infrastructure Provider"
      }
    },
    
    globalImpact: "This security framework is being adopted by critical infrastructure providers worldwide—power grids, water systems, transportation networks. It's protecting essential services that billions of people depend on and has become a model for national cybersecurity strategies."
  }
]
