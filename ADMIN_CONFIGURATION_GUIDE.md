# Admin Configuration Guide

This guide explains how to configure all dynamic content on the Boomi Tech Solutions website without touching component code.

## Configuration Files

### 1. Site Configuration (`lib/site-config.ts`)
Controls company information, contact details, and logo settings.

**Configurable Items:**
- Company name, tagline, and description
- Contact email, phone, and address
- Social media links (LinkedIn, Twitter, GitHub, Facebook)
- Logo settings (custom logo or default letter logo)
- Business information (founded year, employees, headquarters)

**Example:**
\`\`\`typescript
export const siteConfig = {
  company: {
    name: "Your Company Name",
    tagline: "Your Tagline",
  },
  contact: {
    email: "your@email.com",
    phone: "+1 (555) 123-4567",
  },
  logo: {
    useCustomLogo: true,
    customLogoPath: "/images/your-logo.png",
  },
}
\`\`\`

### 2. Content Configuration (`lib/content-config.ts`)
Controls all page content including hero, services, testimonials, case studies, stats, FAQ, and more.

**Configurable Sections:**

#### Hero Section
- Main title and subtitle
- CTA button text and links
- Background image

#### Services
- Service title, description, and icon
- Add/remove/reorder services

#### Testimonials
- Client name, role, company
- Testimonial content and rating
- Client photo

#### Case Studies
- Project title, industry, challenge, solution
- Results and technologies used
- Project image

#### Company Stats
- Stat value, label, and description
- Add/remove stats

#### Trust Indicators
- Company logos and names
- Section title and subtitle

#### FAQ
- Questions and answers
- Add/remove FAQ items

#### About Section
- Company description and values
- Team images

#### Newsletter
- Section title, subtitle, and button text
- Success message

#### CTA Section
- Call-to-action text and links

## How to Update Content

### Step 1: Update Site Configuration
1. Open `lib/site-config.ts`
2. Update company information, contact details, or logo settings
3. Save the file

### Step 2: Update Content Configuration
1. Open `lib/content-config.ts`
2. Find the section you want to update
3. Modify the content (text, images, links, etc.)
4. Save the file

### Step 3: Update Images
1. Place your images in the `/public` folder
2. Update the image paths in the configuration files
3. For logos: Update `customLogoPath` in `lib/site-config.ts`
4. For other images: Update image paths in `lib/content-config.ts`

## Examples

### Adding a New Testimonial
\`\`\`typescript
// In lib/content-config.ts
testimonials: [
  // ... existing testimonials
  {
    name: "John Doe",
    role: "CTO",
    company: "Tech Company Inc",
    image: "/images/john-doe.jpg",
    content: "Amazing work! Highly recommended.",
    rating: 5,
  },
]
\`\`\`

### Adding a New Service
\`\`\`typescript
// In lib/content-config.ts
services: [
  // ... existing services
  {
    title: "New Service",
    description: "Description of the new service",
    icon: "Sparkles", // Lucide icon name
  },
]
\`\`\`

### Updating Contact Information
\`\`\`typescript
// In lib/site-config.ts
contact: {
  email: "newemail@company.com",
  phone: "+1 (555) 999-8888",
  address: {
    street: "456 New Street",
    city: "New City",
    state: "NY",
    zip: "10001",
    country: "USA",
  },
}
\`\`\`

### Changing the Logo
\`\`\`typescript
// In lib/site-config.ts
logo: {
  useCustomLogo: true, // Set to false to use letter logo
  customLogoPath: "/images/new-logo.png", // Your logo path
  defaultLetter: "B", // Letter to use if useCustomLogo is false
}
\`\`\`

## Tips

1. **Always backup** your configuration files before making changes
2. **Test changes** in a development environment first
3. **Use high-quality images** for best results (recommended: 1920x1080 for hero images)
4. **Keep content concise** for better user experience
5. **Update regularly** to keep content fresh and relevant

## Need Help?

If you need assistance with configuration, contact your development team or refer to the component documentation.
