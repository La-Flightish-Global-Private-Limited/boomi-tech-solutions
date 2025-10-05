// Site Configuration
// Update these values to customize your website

export const siteConfig = {
  company: {
    name: "Boomi Tech Solutions",
    shortName: "Boomi Tech",
    legalName: "Boomi Tech Solutions LLC",
    tagline: "Enterprise-Grade Technology Solutions",
    description:
      "Leading technology services company specializing in AI, cloud infrastructure, SAAS development, and digital transformation.",
  },
  contact: {
    email: "contact@boomitech.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Tech Street",
      city: "Silicon Valley",
      state: "CA",
      zip: "94000",
      country: "USA",
    },
  },
  social: {
    linkedin: "https://linkedin.com/company/boomitech",
    twitter: "https://twitter.com/boomitech",
    github: "https://github.com/boomitech",
    facebook: "https://facebook.com/boomitech",
  },
  logo: {
    // Set to true to use a custom logo image, false to use the default letter logo
    useCustomLogo: false,
    // Path to your custom logo (e.g., "/images/logo.png")
    customLogoPath: "/images/logo.png",
    // Logo letter for default logo (first letter of company name)
    defaultLetter: "B",
  },
  business: {
    founded: "2006",
    employees: "50-200",
    headquarters: "Silicon Valley, CA",
  },
}

// Helper function to get full address
export function getFullAddress() {
  const { street, city, state, zip } = siteConfig.contact.address
  return `${street}, ${city}, ${state} ${zip}`
}

// Helper function to format phone number
export function formatPhoneNumber(phone: string) {
  return phone
}
