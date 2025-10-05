# SEO Configuration Guide

## Overview
All SEO and metadata settings are centralized in `lib/seo-config.ts` for easy management.

## How to Update SEO Settings

### 1. Basic Site Information
Edit `lib/seo-config.ts`:

\`\`\`typescript
siteName: "Your Company Name",
siteUrl: "https://yourwebsite.com",
title: "Your Page Title | Your Company",
description: "Your meta description (150-160 characters recommended)",
\`\`\`

### 2. Keywords
Add or modify keywords for better search engine visibility:

\`\`\`typescript
keywords: [
  "your main keyword",
  "secondary keyword",
  "service keyword",
  // Add more relevant keywords
],
\`\`\`

### 3. Open Graph (Social Media Sharing)
Update how your site appears when shared on social media:

\`\`\`typescript
openGraph: {
  title: "Title for social media",
  description: "Description for social media",
  image: {
    url: "/og-image.png", // Create a 1200x630px image
    width: 1200,
    height: 630,
    alt: "Alt text for your image",
  },
}
\`\`\`

### 4. Search Engine Verification
Add verification codes from search engines:

\`\`\`typescript
verification: {
  google: "your-google-verification-code",
  bing: "your-bing-verification-code",
  yandex: "your-yandex-verification-code",
}
\`\`\`

**How to get verification codes:**
- **Google**: [Google Search Console](https://search.google.com/search-console)
- **Bing**: [Bing Webmaster Tools](https://www.bing.com/webmasters)

### 5. Create Open Graph Image
Create an image at `public/og-image.png` with:
- Dimensions: 1200x630 pixels
- Format: PNG or JPG
- Content: Your logo, company name, and tagline

## SEO Best Practices

### Title Tags
- Keep under 60 characters
- Include primary keyword
- Make it compelling and unique

### Meta Descriptions
- 150-160 characters optimal
- Include call-to-action
- Summarize page content
- Include target keywords naturally

### Keywords
- Focus on 5-10 primary keywords
- Use long-tail keywords (3-4 words)
- Match user search intent
- Avoid keyword stuffing

## Structured Data
Structured data is automatically generated in `components/structured-data.tsx` and includes:
- Organization information
- Website information
- Contact information

This helps search engines understand your business better.

## After Making Changes

1. Edit `lib/seo-config.ts`
2. Commit and push to GitHub
3. Vercel will automatically redeploy
4. Verify changes using:
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Monitoring SEO Performance

After deployment, monitor your SEO with:
- **Google Search Console** - Track search performance
- **Google Analytics** - Monitor traffic and user behavior
- **Bing Webmaster Tools** - Track Bing search performance

## Need Help?

Refer to:
- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
