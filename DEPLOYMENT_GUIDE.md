# Deployment Guide

## Prerequisites

1. Node.js 18+ installed
2. npm or yarn package manager
3. Git for version control

## Environment Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Configure environment variables:
   - `RESEND_API_KEY`: Get from https://resend.com (for email notifications)
   - `EMAIL_FROM`: Your verified sender email
   - `EMAIL_TO`: Email to receive contact form submissions
   - `NEXT_PUBLIC_SITE_URL`: Your production domain
   - `NEXT_PUBLIC_GA_ID`: Google Analytics ID (optional)
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`: Plausible domain (optional)

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Production Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Build the application:
```bash
npm run build
npm start
```

## Post-Deployment Checklist

- [ ] Update `lib/site-config.ts` with your company information
- [ ] Replace placeholder images in `/public`
- [ ] Add custom logo or configure letter logo
- [ ] Test contact form submissions
- [ ] Verify email notifications work
- [ ] Check analytics tracking
- [ ] Test all pages for responsiveness
- [ ] Run accessibility audit
- [ ] Submit sitemap to Google Search Console
- [ ] Configure DNS and SSL certificate

## Email Service Setup (Resend)

1. Sign up at https://resend.com
2. Verify your domain
3. Create API key
4. Add to environment variables
5. Test contact form

## Analytics Setup

### Google Analytics
1. Create GA4 property
2. Get Measurement ID
3. Add to `NEXT_PUBLIC_GA_ID`

### Plausible (Privacy-friendly alternative)
1. Sign up at https://plausible.io
2. Add your domain
3. Add to `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`

## Database Setup (Optional)

For lead storage, integrate with:
- Supabase
- Neon
- PlanetScale
- MongoDB Atlas

Update `app/api/contact/route.ts` to save leads to database.

## Security Recommendations

- Enable rate limiting (already configured)
- Use HTTPS in production
- Keep dependencies updated
- Monitor error logs
- Regular security audits
- Implement CAPTCHA if spam becomes an issue

## Performance Optimization

- Images are lazy-loaded
- Components are code-split
- CSS is optimized
- Consider adding CDN for static assets

## Monitoring

Consider adding:
- Sentry for error tracking
- Vercel Analytics (already included)
- Uptime monitoring (UptimeRobot, Pingdom)

## Support

For issues, contact: contact@boomitech.com
