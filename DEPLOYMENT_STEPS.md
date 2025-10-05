# Deploy boomi.tech to Netlify - Complete Guide

## Step 1: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial deployment for boomi.tech"

# Create GitHub repo at github.com/new
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/boomi-tech-solutions.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Netlify

1. Go to **https://app.netlify.com**
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize
4. Select your **boomi-tech-solutions** repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click **"Deploy site"**

## Step 3: Add Environment Variables in Netlify

1. In Netlify dashboard, go to **Site settings** → **Environment variables**
2. Add these variables:

```
NEXT_PUBLIC_SITE_URL = https://boomi.tech
RESEND_API_KEY = your_resend_api_key
EMAIL_FROM = contact@boomi.tech
EMAIL_TO = admin@boomi.tech
```

3. Click **"Redeploy"** after adding variables

## Step 4: Configure Custom Domain in Netlify

1. In Netlify dashboard, go to **Domain settings**
2. Click **"Add custom domain"**
3. Enter: `boomi.tech`
4. Click **"Verify"**
5. Netlify will show you DNS records to add

## Step 5: Update DNS in Namecheap

1. Log in to **Namecheap.com**
2. Go to **Domain List** → Click **Manage** next to boomi.tech
3. Go to **Advanced DNS** tab
4. Delete all existing A Records and CNAME Records
5. Add these records:

### For Apex Domain (boomi.tech):
```
Type: A Record
Host: @
Value: 75.2.60.5
TTL: Automatic
```

### For WWW Subdomain:
```
Type: CNAME Record
Host: www
Value: your-site-name.netlify.app
TTL: Automatic
```

### Example:
If your Netlify site is `boomi-tech-123.netlify.app`, use that as the CNAME value.

6. Click **"Save all changes"**

## Step 6: Enable SSL in Netlify

1. Go back to Netlify → **Domain settings**
2. Scroll to **HTTPS**
3. Click **"Verify DNS configuration"**
4. Wait 5-10 minutes for SSL to provision
5. Enable **"Force HTTPS"**

## Step 7: Setup Email for Resend

1. Go to **https://resend.com** and sign up
2. Click **"Domains"** → **"Add Domain"**
3. Enter: `boomi.tech`
4. Resend will show DNS records to add
5. Go back to Namecheap → **Advanced DNS**
6. Add the DNS records from Resend (TXT, MX, CNAME)
7. Wait 10-15 minutes for verification
8. In Resend, click **"Verify"**
9. Create API key and add to Netlify environment variables

## Step 8: Test Everything

1. Visit **https://boomi.tech** (wait 10-30 min for DNS propagation)
2. Test contact form submission
3. Check if email notifications work
4. Test on mobile devices
5. Run Lighthouse audit

## Troubleshooting

### DNS not working?
- Wait 24-48 hours for full DNS propagation
- Use https://dnschecker.org to check propagation
- Clear browser cache

### SSL not working?
- Wait 10-15 minutes after DNS verification
- Check DNS records are correct
- Contact Netlify support if issue persists

### Contact form not working?
- Check environment variables in Netlify
- Verify Resend API key is correct
- Check Resend domain is verified

## Your Site URLs

- **Production**: https://boomi.tech
- **WWW**: https://www.boomi.tech (redirects to boomi.tech)
- **Netlify**: https://your-site-name.netlify.app

## Next Steps After Deployment

1. Submit sitemap to Google Search Console: https://boomi.tech/sitemap.xml
2. Set up Google Analytics (add ID to environment variables)
3. Test contact form thoroughly
4. Update company info in `lib/site-config.ts`
5. Replace placeholder images
6. Add real testimonials and case studies

## Support

- Netlify Docs: https://docs.netlify.com
- Namecheap Support: https://www.namecheap.com/support/
- Resend Docs: https://resend.com/docs
