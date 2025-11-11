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
    email: "mydearkarthikeyan@gmail.com",
    phone: "+91 9789998455",
    address: {
      street: "30 N Gould St Ste R",
      city: "Sheridan",
      state: "WY",
      zip: "82801",
      country: "USA",
    },
    tradeAddress: {
      street: "D142, SBIOA Unity Enclave, Mambakkam",
      city: "Chennai",
      state: "Tamil Nadu",
      zip: "600127",
      country: "India",
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
    headquarters: "Sheridan, WY",
    registrationNumber: "EIN: 35-2822033",
    businessType: "Registered company",
    owner: "Karthikeyan Veeran",
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
