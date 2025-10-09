export const caseStudies = [
  {
    id: 1,
    title: "Local Delivery Service Cuts Route Planning Time",
    industry: "Logistics",
    client: "Local Delivery Service",
    duration: "5 months",
    image: "/abstract-technology-network-digital-innovation.jpg",
    tags: ["AI/ML", "Cloud Infrastructure", "Real-time Analytics"],
    
    challenge: {
      title: "Manual Route Planning Wasting Time Daily",
      description: "A local delivery service with 8 drivers was planning routes manually each morning. The owner spent 90 minutes daily figuring out the best routes, and drivers often got lost or took wrong turns.",
      painPoints: [
        "Owner spending 90 minutes daily on route planning",
        "Drivers getting lost or taking wrong routes",
        "Customers calling asking where their delivery is",
        "No way to prove delivery times",
        "Wasting fuel on inefficient routes"
      ]
    },
    
    solution: {
      title: "Simple Route Planning Tool",
      description: "We built a basic web app that takes the day's addresses and creates optimized routes. Drivers use their phones to follow the route and mark deliveries complete. Customers get a text when their delivery is nearby.",
      approach: [
        "Built route optimizer using Google Maps API",
        "Created mobile-friendly driver interface",
        "Added simple SMS notifications via Twilio",
        "Made it work on any smartphone browser"
      ],
      technologies: ["React", "Node.js", "Google Maps API", "Twilio", "Heroku"]
    },
    
    results: {
      metrics: [
        { label: "Route Planning Time", value: "10 minutes", impact: "From 90 minutes daily" },
        { label: "Deliveries Per Day", value: "32", impact: "From 24 average" },
        { label: "Fuel Savings", value: "~$400/month", impact: "Better routes" },
        { label: "Customer Calls", value: "Way less", impact: "They get text updates" },
        { label: "Project Cost", value: "$8,500", impact: "Paid in 3 months" },
        { label: "Monthly Cost", value: "$65", impact: "Hosting + SMS" }
      ],
      testimonial: {
        quote: "This tool saves me over an hour every morning. My drivers know exactly where to go, and customers love getting text updates. Best money I've spent on the business.",
        author: "Owner",
        company: "Local Delivery Service"
      }
    },
    
    globalImpact: "The business has grown from 8 to 12 drivers since launching the tool. They're now handling 50% more deliveries with the same level of stress."
  },

  {
    id: 2,
    title: "Family Doctor Adds Video Appointments",
    industry: "Healthcare",
    client: "Family Medical Practice",
    duration: "3 months",
    image: "/modern-office-workspace-innovation.jpg",
    tags: ["HIPAA Compliance", "AI Diagnostics", "Telemedicine"],
    
    challenge: {
      title: "Patients Wanted Video Appointments During COVID",
      description: "A family doctor with 2 physicians wanted to offer video appointments but didn't know where to start. They were losing patients to larger practices that had telehealth options.",
      painPoints: [
        "Patients asking for video appointments",
        "Losing patients to bigger clinics with telehealth",
        "Needed HIPAA-compliant solution",
        "Receptionist overwhelmed with scheduling",
        "No online booking available"
      ]
    },
    
    solution: {
      title: "Simple Video Appointment System",
      description: "We set up a basic HIPAA-compliant video system using Doxy.me and built a simple booking page. Patients can book video or in-person appointments online, and get reminder texts.",
      approach: [
        "Integrated Doxy.me for HIPAA-compliant video",
        "Built simple online booking calendar",
        "Added automated SMS reminders",
        "Created patient instructions page"
      ],
      technologies: ["Next.js", "Doxy.me", "Calendly API", "Twilio"]
    },
    
    results: {
      metrics: [
        { label: "Video Visits", value: "15-20/week", impact: "Started from zero" },
        { label: "No-Shows", value: "Down to 5%", impact: "From 20% before" },
        { label: "Online Bookings", value: "60%", impact: "Less phone time" },
        { label: "Patient Feedback", value: "Really positive", impact: "Love the convenience" },
        { label: "Project Cost", value: "$6,800", impact: "Done in 6 weeks" },
        { label: "Monthly Cost", value: "$45", impact: "Very affordable" }
      ],
      testimonial: {
        quote: "We were worried telehealth would be complicated and expensive, but this was easy to set up. Our patients love it, especially for follow-ups and minor issues. Wish we'd done this sooner.",
        author: "Dr. Sarah Chen",
        company: "Family Medical Practice"
      }
    },
    
    globalImpact: "The practice kept all their patients and even gained new ones who wanted telehealth options. They're now doing 15-20 video visits weekly."
  },

  {
    id: 3,
    title: "Local Restaurant Chain Launches Online Ordering",
    industry: "Food & Beverage",
    client: "Regional Restaurant Chain",
    duration: "3 months",
    image: "/modern-fintech-dashboard.png",
    tags: ["E-commerce", "Mobile App", "Payment Integration"],
    
    challenge: {
      title: "Tired of Paying DoorDash 30% Commission",
      description: "A pizza restaurant with 3 locations was paying huge commissions to DoorDash and UberEats. The owner wanted their own ordering website but thought it would cost $50K+.",
      painPoints: [
        "Paying 30% commission on delivery orders",
        "No customer emails or phone numbers",
        "Customers complaining about delivery app fees",
        "Wanted to offer loyalty rewards",
        "Thought custom solution would be too expensive"
      ]
    },
    
    solution: {
      title: "Simple Online Ordering Website",
      description: "We built a straightforward ordering website where customers can order pickup or delivery. Integrated with Square for payments and added a basic points system for repeat customers.",
      approach: [
        "Built mobile-friendly ordering site",
        "Integrated Square for payments",
        "Added simple loyalty points (10th pizza free)",
        "Set up SMS order confirmations",
        "Connected to their existing Square POS"
      ],
      technologies: ["Next.js", "Square API", "Twilio", "Vercel"]
    },
    
    results: {
      metrics: [
        { label: "Direct Orders", value: "80-100/week", impact: "Started from zero" },
        { label: "Commission Saved", value: "~$1,200/month", impact: "No more 30% fees" },
        { label: "Repeat Customers", value: "Growing", impact: "Loyalty program working" },
        { label: "Project Cost", value: "$9,500", impact: "Way less than expected" },
        { label: "Monthly Cost", value: "$55", impact: "Hosting + SMS" },
        { label: "ROI", value: "8 months", impact: "Already profitable" }
      ],
      testimonial: {
        quote: "I thought this would cost $50K. For under $10K we got our own ordering site and we're saving over a thousand bucks a month. Customers love ordering direct and getting rewards.",
        author: "Tony M.",
        company: "Tony's Pizza (3 locations)"
      }
    },
    
    globalImpact: "The restaurant is now getting 80-100 direct orders weekly. They're planning to add catering orders to the site next."
  },

  {
    id: 4,
    title: "Fitness Studio Automates Class Bookings",
    industry: "Health & Wellness",
    client: "Local Fitness Studio",
    duration: "2 months",
    image: "/modern-technology-architecture-black-and-white.jpg",
    tags: ["Booking System", "Automation", "Mobile-First"],
    
    challenge: {
      title: "Manual Booking Process Causing Scheduling Chaos",
      description: "A fitness studio with 3 instructors was managing class bookings through phone calls and a paper calendar. Double bookings were common, no-shows were at 35%, and staff spent hours on scheduling.",
      painPoints: [
        "Double bookings happening weekly",
        "35% no-show rate costing revenue",
        "Staff spending 10+ hours/week on scheduling",
        "No way to collect payments upfront",
        "Customers frustrated with busy phone lines",
        "No waitlist management"
      ]
    },
    
    solution: {
      title: "Automated Class Booking and Payment System",
      description: "We built a simple booking platform where customers can see class schedules, book spots, and pay online. Automated reminders reduced no-shows, and the waitlist feature fills cancelled spots automatically.",
      approach: [
        "Built mobile-friendly booking interface",
        "Integrated Stripe for upfront payments",
        "Added automated SMS/email reminders",
        "Created waitlist with auto-fill feature",
        "Built instructor dashboard for class management",
        "Added class packages and memberships"
      ],
      technologies: ["Next.js", "Stripe", "Twilio", "PostgreSQL", "Vercel"]
    },
    
    results: {
      metrics: [
        { label: "No-Show Rate", value: "Much better", impact: "From 35% to around 10%" },
        { label: "Time Saved", value: "10+ hours/week", impact: "No more phone tag" },
        { label: "Classes Filled", value: "Up 25%", impact: "Waitlist feature helps" },
        { label: "Online Bookings", value: "90%+", impact: "People love it" },
        { label: "Project Cost", value: "$7,200", impact: "Done in 8 weeks" },
        { label: "Monthly Cost", value: "$48", impact: "Very affordable" }
      ],
      testimonial: {
        quote: "I was managing everything in a notebook and on my phone. This system is so much easier. No more double bookings, people pay when they book, and I get my evenings back.",
        author: "Jessica R.",
        company: "CoreFit Studio"
      }
    },
    
    globalImpact: "The studio is now consistently filling classes and has added 2 more instructors. They're looking at opening a second location next year."
  },

  {
    id: 5,
    title: "Real Estate Agency Launches Property Portal",
    industry: "Real Estate",
    client: "Local Real Estate Agency",
    duration: "4 months",
    image: "/team-collaboration-modern-office-black-and-white.jpg",
    tags: ["Property Management", "CRM", "Lead Generation"],
    
    challenge: {
      title: "Losing Leads to Zillow and Realtor.com",
      description: "A real estate agency with 12 agents was paying high fees to listing sites and losing leads to competitors. They had no online presence and were managing properties in spreadsheets.",
      painPoints: [
        "Paying $800/month to listing sites",
        "Leads going to competitors",
        "No professional website",
        "Managing properties in Excel spreadsheets",
        "Agents manually following up with leads",
        "No way to showcase virtual tours"
      ]
    },
    
    solution: {
      title: "Custom Property Portal with CRM",
      description: "We built a property listing website with virtual tour integration, lead capture forms, and a simple CRM for agents to manage leads and follow-ups. The site is optimized for local SEO.",
      approach: [
        "Built property listing site with search filters",
        "Integrated Matterport for virtual tours",
        "Created lead capture and distribution system",
        "Built agent CRM for lead management",
        "Optimized for local SEO",
        "Added automated email follow-ups"
      ],
      technologies: ["Next.js", "Sanity CMS", "Matterport API", "SendGrid", "Vercel"]
    },
    
    results: {
      metrics: [
        { label: "Website Leads", value: "10-15/month", impact: "vs 0 before" },
        { label: "Listings Closed", value: "3 so far", impact: "From website leads" },
        { label: "Organic Traffic", value: "Growing", impact: "Local SEO taking time" },
        { label: "Agent Feedback", value: "Positive", impact: "Love having own site" },
        { label: "Project Cost", value: "$11,500", impact: "Done in 10 weeks" },
        { label: "Monthly Cost", value: "$35", impact: "Just hosting" }
      ],
      testimonial: {
        quote: "We finally have our own professional website. We're getting leads directly instead of paying Zillow for every click. It's early but we've already closed 3 deals from the site.",
        author: "Mike Patterson",
        company: "Patterson Realty"
      }
    },
    
    globalImpact: "The agency is building their online presence and getting leads without paying per-click fees. They're adding more listings and optimizing for local search."
  },

  {
    id: 6,
    title: "Accounting Firm Automates Client Onboarding",
    industry: "Professional Services",
    client: "Regional Accounting Firm",
    duration: "2 months",
    image: "/business-handshake-partnership-black-and-white.jpg",
    tags: ["Workflow Automation", "Document Management", "Client Portal"],
    
    challenge: {
      title: "Manual Client Onboarding Taking 2 Weeks",
      description: "An accounting firm with 25 staff was spending 2 weeks onboarding each new client with back-and-forth emails, paper forms, and manual data entry. Tax season was especially chaotic.",
      painPoints: [
        "Client onboarding taking 2 weeks",
        "Chasing clients for documents via email",
        "Manual data entry from paper forms",
        "Lost documents and missing information",
        "Staff overwhelmed during tax season",
        "No secure way to share sensitive documents"
      ]
    },
    
    solution: {
      title: "Automated Client Portal and Workflow System",
      description: "We built a secure client portal where new clients complete forms online, upload documents, and e-sign agreements. The system automatically creates client folders and notifies staff when everything is ready.",
      approach: [
        "Built secure client portal with encryption",
        "Created digital intake forms with validation",
        "Integrated DocuSign for e-signatures",
        "Added secure document upload and storage",
        "Built automated workflow notifications",
        "Integrated with QuickBooks"
      ],
      technologies: ["React", "Node.js", "DocuSign API", "AWS S3", "PostgreSQL"]
    },
    
    results: {
      metrics: [
        { label: "Onboarding Time", value: "3-4 days", impact: "From 2 weeks" },
        { label: "Staff Time Saved", value: "A lot", impact: "Less back-and-forth" },
        { label: "Client Feedback", value: "Great", impact: "Much easier for them" },
        { label: "Tax Season", value: "Way smoother", impact: "Less chaos" },
        { label: "Project Cost", value: "$8,900", impact: "Done in 7 weeks" },
        { label: "Monthly Cost", value: "$42", impact: "Very reasonable" }
      ],
      testimonial: {
        quote: "Tax season used to be chaos with clients emailing documents all over the place. Now everything comes through the portal organized. Clients find it easy to use and we're way more efficient.",
        author: "Linda Chen, CPA",
        company: "Chen & Associates"
      }
    },
    
    globalImpact: "The firm handled tax season much more smoothly and is now taking on more clients. They're planning to add more features to the portal."
  },

  {
    id: 7,
    title: "E-commerce Store Increases Sales with Custom Features",
    industry: "E-commerce",
    client: "Online Retail Store",
    duration: "3 months",
    image: "/abstract-flowing-dark-water-waves-technology-textu.jpg",
    tags: ["E-commerce", "Shopify", "Conversion Optimization"],
    
    challenge: {
      title: "High Cart Abandonment and Low Conversion Rate",
      description: "An online store selling custom products had 78% cart abandonment rate and was losing sales to competitors. Their Shopify store lacked product customization features customers wanted.",
      painPoints: [
        "78% cart abandonment rate",
        "No product customization options",
        "Slow checkout process",
        "No abandoned cart recovery",
        "Limited product recommendations",
        "Mobile experience was poor"
      ]
    },
    
    solution: {
      title: "Custom Shopify App with Product Configurator",
      description: "We built a custom Shopify app that lets customers personalize products with live previews, added one-click checkout, automated cart recovery emails, and AI-powered product recommendations.",
      approach: [
        "Built custom product configurator with live preview",
        "Integrated Shopify Checkout API for faster checkout",
        "Created automated cart abandonment email sequence",
        "Added AI product recommendations",
        "Optimized mobile experience",
        "Integrated with existing inventory system"
      ],
      technologies: ["React", "Shopify API", "Node.js", "Klaviyo", "AWS Lambda"]
    },
    
    results: {
      metrics: [
        { label: "Cart Abandonment", value: "Down to 55%", impact: "From 78% before" },
        { label: "Conversion Rate", value: "3.2%", impact: "From 1.8% before" },
        { label: "Average Order", value: "$68", impact: "From $52 before" },
        { label: "Monthly Sales", value: "Up 60%", impact: "In 4 months" },
        { label: "Project Cost", value: "$12,800", impact: "Done in 9 weeks" },
        { label: "Recovery Emails", value: "Working great", impact: "Getting 15-20% back" }
      ],
      testimonial: {
        quote: "The custom product builder was a game changer. People can see exactly what they're ordering before they buy. Sales are way up and the cart recovery emails bring back customers who left.",
        author: "Rachel K.",
        company: "CustomPrint Co."
      }
    },
    
    globalImpact: "The store is growing steadily and now ships to 8 states. They're planning to add more product options to the configurator."
  },

  {
    id: 8,
    title: "Startup MVP Built in 8 Weeks",
    industry: "Tech Startup",
    client: "Local Tech Startup",
    duration: "8 weeks",
    image: "/modern-fintech-dashboard.png",
    tags: ["MVP Development", "Rapid Scaling", "Series A"],
    
    challenge: {
      title: "Founders Needed MVP to Show Investors",
      description: "Two founders had an idea for a marketplace app but no technical co-founder. They had $15K saved and needed an MVP to show potential investors and get early user feedback.",
      painPoints: [
        "No technical co-founder",
        "Limited budget ($15K)",
        "Needed something to show investors",
        "Wanted to test the idea with real users",
        "Didn't know where to start"
      ]
    },
    
    solution: {
      title: "Simple MVP to Test the Idea",
      description: "We built a basic but functional marketplace where users can list items and others can browse and message sellers. Kept it simple to stay in budget while including the core features needed to test the concept.",
      approach: [
        "Built web app with core marketplace features",
        "Added user authentication and profiles",
        "Created listing and messaging system",
        "Made it mobile-responsive",
        "Set up basic analytics to track usage"
      ],
      technologies: ["Next.js", "Supabase", "Stripe", "Vercel"]
    },
    
    results: {
      metrics: [
        { label: "Time to Launch", value: "8 weeks", impact: "On time" },
        { label: "Early Users", value: "~150", impact: "Friends, family, local community" },
        { label: "Listings Posted", value: "80+", impact: "People using it" },
        { label: "Investor Meetings", value: "5 scheduled", impact: "Having something to show helps" },
        { label: "Project Cost", value: "$14,500", impact: "Under budget" },
        { label: "Monthly Cost", value: "$25", impact: "Very affordable to run" }
      ],
      testimonial: {
        quote: "We had no idea how to build an app. Boomi Tech made it happen in 8 weeks for a price we could afford. Now we have something real to show investors and we're getting actual user feedback.",
        author: "Co-Founder",
        company: "Local Marketplace Startup"
      }
    },
    
    globalImpact: "The founders are now talking to investors and iterating based on user feedback. They're learning what works and what doesn't before investing more."
  },

  {
    id: 9,
    title: "Side Project Turned Profitable SaaS",
    industry: "SaaS",
    client: "Solo Founder",
    duration: "4 months",
    image: "/ecommerce-saas-platform.jpg",
    tags: ["SaaS Platform", "B2B", "Product-Market Fit"],
    
    challenge: {
      title: "Developer Wanted to Launch Side Project",
      description: "A developer had a side project idea for a simple SaaS tool but didn't have time to build everything. Needed help with payments, user management, and getting it launched.",
      painPoints: [
        "Working full-time, limited time for side project",
        "Didn't want to deal with payment integration",
        "Needed user authentication and billing",
        "Wanted to launch and see if people would pay",
        "Budget was tight"
      ]
    },
    
    solution: {
      title: "Simple SaaS with Stripe Subscriptions",
      description: "We helped finish the core features, set up Stripe subscriptions with 3 pricing tiers, added user authentication, and got it launched. Kept it simple so it's easy to maintain.",
      approach: [
        "Finished core product features",
        "Set up Stripe subscription billing",
        "Added user auth and account management",
        "Created simple admin dashboard",
        "Deployed and set up domain"
      ],
      technologies: ["Next.js", "Supabase", "Stripe", "Vercel"]
    },
    
    results: {
      metrics: [
        { label: "Time to Launch", value: "4 months", impact: "Part-time work" },
        { label: "Paying Users", value: "28", impact: "After 3 months live" },
        { label: "Monthly Revenue", value: "~$800", impact: "Growing slowly" },
        { label: "Churn", value: "Pretty low", impact: "People seem to like it" },
        { label: "Project Cost", value: "$10,500", impact: "Affordable" },
        { label: "Monthly Costs", value: "$30", impact: "Hosting + database" }
      ],
      testimonial: {
        quote: "I had the idea but not the time to build everything. Boomi Tech helped me launch in 4 months. I'm making $800/month now and it's growing. Not quitting my job yet but it's exciting!",
        author: "Alex M.",
        company: "Solo SaaS Founder"
      }
    },
    
    globalImpact: "The SaaS is growing organically through word of mouth. The founder is adding features based on user requests and considering going full-time if it hits $3K/month."
  },

  {
    id: 10,
    title: "Simple AI Tool for Content Creators",
    industry: "AI Tool",
    client: "Content Creator",
    duration: "6 weeks",
    image: "/software-development-coding.png",
    tags: ["AI", "Content Creation", "Side Project"],
    
    challenge: {
      title: "Creator Wanted AI Tool for Their Audience",
      description: "A content creator with a YouTube following wanted to build a simple AI tool for their audience. They had the idea and the audience, but no coding experience.",
      painPoints: [
        "No coding experience",
        "Wanted something simple their audience could use",
        "Worried about OpenAI API costs getting out of control",
        "Needed to charge to cover costs",
        "Wanted to launch quickly"
      ]
    },
    
    solution: {
      title: "Simple AI Tool with Usage Limits",
      description: "We built a straightforward AI tool that does one thing well. Added usage limits for free users and a simple paid plan. Set up cost controls so API costs don't spiral.",
      approach: [
        "Integrated OpenAI API with good prompts",
        "Added usage limits and rate limiting",
        "Set up simple Stripe payment for pro plan",
        "Made it super easy to use",
        "Added cost monitoring and alerts"
      ],
      technologies: ["Next.js", "OpenAI API", "Stripe", "Vercel"]
    },
    
    results: {
      metrics: [
        { label: "Time to Launch", value: "6 weeks", impact: "Quick turnaround" },
        { label: "Users", value: "~400", impact: "From YouTube audience" },
        { label: "Paid Users", value: "18", impact: "$9/month plan" },
        { label: "Monthly Revenue", value: "$162", impact: "Covers costs + profit" },
        { label: "Project Cost", value: "$5,800", impact: "Within budget" },
        { label: "API Costs", value: "~$45/month", impact: "Under control" }
      ],
      testimonial: {
        quote: "I had zero coding skills but wanted to make something useful for my audience. Boomi Tech built exactly what I needed. It's making a bit of money and people actually use it!",
        author: "Sarah J.",
        company: "YouTube Creator (85K subs)"
      }
    },
    
    globalImpact: "The tool is being used by the creator's audience and generating some revenue. They're thinking about adding more features based on user feedback."
  }
]
