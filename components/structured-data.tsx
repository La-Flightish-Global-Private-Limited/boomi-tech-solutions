export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Boomi Tech Solutions LLC",
    description:
      "Leading tech solutions provider specializing in SAAS development, AI products, cloud infrastructure, and custom application development.",
    url: "https://boomitechsolutions.com",
    logo: "https://boomitechsolutions.com/logo.png",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      availableLanguage: ["English"],
    },
    sameAs: [
      // Add your social media profiles here
      // 'https://www.linkedin.com/company/boomi-tech-solutions',
      // 'https://twitter.com/boomitechsolutions',
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "SAAS Application Development",
      "AI Product Development",
      "Cloud Infrastructure",
      "DevOps Services",
      "Custom Application Development",
      "Mainframe Modernization",
      "AI Automation",
      "Digital Marketing",
    ],
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Technology Consulting",
    provider: {
      "@type": "Organization",
      name: "Boomi Tech Solutions LLC",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Technology Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SAAS Application Development",
            description: "Custom SAAS application development and deployment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Product Development",
            description: "AI-powered product development and AI agent solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Infrastructure",
            description: "Multi-cloud infrastructure setup and management",
          },
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  )
}
