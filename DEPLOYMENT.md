# Deployment Guide

This guide will walk you through deploying your website to the internet.

## 🚀 Recommended: Vercel (Easiest & Free)

Vercel is the easiest way to deploy Next.js websites and offers a generous free tier.

### Prerequisites

1. A GitHub account (free at [github.com](https://github.com))
2. A Vercel account (free at [vercel.com](https://vercel.com))

### Step 1: Push Code to GitHub

If your code isn't already on GitHub:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Marine upholstery website"

# Create main branch
git branch -M main

# Add your GitHub repository URL
git remote add origin https://github.com/yourusername/tt-upholstery.git

# Push to GitHub
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click **"Deploy"**

Your site will be live in 2-3 minutes! 🎉

### Step 3: Get Your URL

After deployment:
- You'll get a URL like: `https://tt-upholstery.vercel.app`
- You can customize this or add a custom domain

### Step 4: Add Environment Variables (If Needed)

If you're using form integration:

1. Go to your project in Vercel
2. Click **"Settings"** → **"Environment Variables"**
3. Add your variables:
   - `RESEND_API_KEY` (if using Resend)
   - `FORMSPREE_FORM_ID` (if using Formspree)
4. Click **"Save"**
5. Redeploy your site

## 🌐 Adding a Custom Domain

### Option 1: Buy Domain Through Vercel

1. In your Vercel project, go to **"Settings"** → **"Domains"**
2. Click **"Buy Domain"**
3. Search for available domains
4. Complete purchase (around $15-20/year)
5. Domain is automatically configured

### Option 2: Use Existing Domain

If you already own a domain (e.g., from GoDaddy, Namecheap):

1. In Vercel, go to **"Settings"** → **"Domains"**
2. Enter your domain (e.g., `toysservices.com`)
3. Click **"Add"**
4. Vercel will show you DNS records to add
5. Log into your domain registrar
6. Add the DNS records Vercel provided
7. Wait 24-48 hours for DNS to propagate

**DNS Records you'll typically need:**
```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

## 🔄 Updating Your Website

Once deployed, any new changes pushed to GitHub will automatically deploy:

```bash
# Make your changes to files
git add .
git commit -m "Update services page"
git push

# Vercel will automatically deploy the changes
```

## 📊 Setting Up Analytics (Optional)

### Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (e.g., `G-XXXXXXXXXX`)
3. Add to `app/layout.tsx`:

```tsx
import Script from 'next/script'

// Add inside the <body> tag:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🔒 SSL Certificate

Vercel automatically provides free SSL certificates for all domains. Your site will be served over HTTPS with no configuration needed.

## 🎯 Performance Optimization

Your site is already optimized, but here are some tips:

### Image Optimization
- Use WebP format when possible
- Keep images under 500KB
- Resize images before uploading

### Content Delivery
- Vercel automatically uses a global CDN
- Your site loads fast worldwide
- No additional configuration needed

## 📈 Monitoring

### Vercel Dashboard

Monitor your site through the Vercel dashboard:
- **Deployments**: See deployment history
- **Analytics**: View page views and performance (paid feature)
- **Logs**: Debug any issues

## 🆘 Troubleshooting

### Deployment Failed

**Check:**
1. Is your `package.json` correctly formatted?
2. Are all dependencies installed?
3. Did you commit all necessary files?
4. Check build logs in Vercel for errors

### Domain Not Working

**Check:**
1. Wait 24-48 hours after adding DNS records
2. Verify DNS records are correct (use [dnschecker.org](https://dnschecker.org))
3. Clear your browser cache
4. Try incognito/private browsing mode

### Form Not Working

**Check:**
1. Did you add environment variables in Vercel?
2. Did you redeploy after adding env variables?
3. Check function logs in Vercel dashboard
4. Verify your API key is correct

## 💰 Costs

### Free Tier (Sufficient for Most)
- Vercel: Free for personal projects
- Bandwidth: 100GB/month
- Deployments: Unlimited

### If You Exceed Free Tier
- Vercel Pro: $20/month
- Includes more bandwidth and features

### Domain
- New domain: $15-20/year (varies by TLD)
- SSL certificate: Free (included)

## 🔐 Security Best Practices

1. **Never commit** `.env.local` to GitHub
2. **Use environment variables** for sensitive data
3. **Regularly update** dependencies:
   ```bash
   npm update
   ```
4. **Enable** Vercel's DDoS protection (automatic)

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: support@vercel.com
- **Community**: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

## Quick Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created and deployed
- [ ] Custom domain added (if applicable)
- [ ] DNS records configured (if using custom domain)
- [ ] Environment variables added (if needed)
- [ ] SSL certificate active (automatic)
- [ ] Test all pages and forms
- [ ] Google Analytics added (optional)
- [ ] Monitor first week for issues

**Your website is now live! 🎉**
