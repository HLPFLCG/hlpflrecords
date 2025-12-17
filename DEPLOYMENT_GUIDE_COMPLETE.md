# Complete Deployment Guide - HLPFL Records

## Overview
This guide provides step-by-step instructions for deploying the HLPFL Records website to production. The site is built with Next.js 14 and configured for static export.

---

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Environment Setup](#environment-setup)
3. [Build Process](#build-process)
4. [Deployment Options](#deployment-options)
5. [Post-Deployment Verification](#post-deployment-verification)
6. [Rollback Procedures](#rollback-procedures)
7. [Troubleshooting](#troubleshooting)

---

## 1. Pre-Deployment Checklist

### 1.1 Code Review
- [x] All code changes reviewed
- [x] No console.log statements in production code
- [x] TypeScript compilation successful
- [x] No linting errors
- [x] All tests passing (when implemented)

### 1.2 Build Verification
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install

# Run type check
npm run type-check

# Run build
npm run build
```

Expected output:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Generating static pages (12/12)
✓ Finalizing page optimization
```

### 1.3 Content Verification
- [ ] All text content is final and proofread
- [ ] All images are optimized and compressed
- [ ] Contact information is correct
- [ ] Social media links are correct
- [ ] Copyright year is current

### 1.4 SEO Verification
- [x] Sitemap.xml is present
- [x] Robots.txt is configured
- [x] Meta tags are set on all pages
- [x] Structured data is implemented
- [ ] Google Search Console is set up

### 1.5 Security Verification
- [x] No sensitive data in code
- [x] Environment variables are secure
- [x] Form validation is implemented
- [x] Rate limiting is configured
- [x] Input sanitization is working

---

## 2. Environment Setup

### 2.1 Environment Variables
Create a `.env.production` file (if needed):

```bash
# Production environment variables
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://hlpfl.org
NEXT_PUBLIC_API_URL=https://api.hlpfl.org

# Analytics (optional)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_MIXPANEL_TOKEN=your_token

# Email service (for contact form)
# EMAIL_SERVICE_API_KEY=your_key
# EMAIL_FROM=noreply@hlpflrecords.com
# EMAIL_TO=contact@hlpflrecords.com
```

### 2.2 Domain Configuration
Ensure your domain is properly configured:
- DNS records point to hosting provider
- SSL certificate is valid
- WWW redirect is configured (if desired)

---

## 3. Build Process

### 3.1 Production Build
```bash
# Install dependencies
npm ci

# Build for production
npm run build
```

This creates an `out` directory with static files ready for deployment.

### 3.2 Build Output
The build creates:
```
out/
├── _next/           # Next.js assets
├── images/          # Static images
├── index.html       # Homepage
├── about.html       # About page
├── artists.html     # Artists page
├── contact.html     # Contact page
├── releases.html    # Releases page
├── news.html        # News page
├── minimal.html     # Minimal page
├── manifest.json    # PWA manifest
├── robots.txt       # Robots file
├── sitemap.xml      # Sitemap
└── sw.js           # Service worker
```

### 3.3 Build Verification
```bash
# Serve the build locally to test
npx serve out

# Or use http-server
npx http-server out -p 8080
```

Visit `http://localhost:8080` and verify:
- All pages load correctly
- Images display properly
- Forms work
- No console errors

---

## 4. Deployment Options

### 4.1 Cloudflare Pages (Recommended)

#### Initial Setup:
1. **Connect Repository**
   ```bash
   # Push your code to GitHub
   git push origin main
   ```

2. **Create Cloudflare Pages Project**
   - Go to Cloudflare Dashboard
   - Navigate to Pages
   - Click "Create a project"
   - Connect your GitHub repository
   - Select the `HLPFLCG/hlpflrecords` repository

3. **Configure Build Settings**
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: out
   Root directory: /
   Environment variables: (add if needed)
   ```

4. **Deploy**
   - Click "Save and Deploy"
   - Wait for build to complete
   - Site will be available at: `https://hlpflrecords.pages.dev`

#### Custom Domain Setup:
1. Go to your Cloudflare Pages project
2. Click "Custom domains"
3. Add `hlpfl.org` and `www.hlpfl.org`
4. Follow DNS configuration instructions
5. Wait for SSL certificate to provision

#### Automatic Deployments:
- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Rollback to previous deployments easily

### 4.2 Vercel

#### Deploy via CLI:
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

#### Deploy via Git:
1. Import repository at vercel.com
2. Configure project settings
3. Deploy automatically on push

### 4.3 Netlify

#### Deploy via CLI:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=out
```

#### Deploy via Git:
1. Connect repository at netlify.com
2. Configure build settings:
   ```
   Build command: npm run build
   Publish directory: out
   ```
3. Deploy

### 4.4 AWS S3 + CloudFront

#### Setup:
```bash
# Install AWS CLI
# Configure credentials
aws configure

# Sync to S3
aws s3 sync out/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### 4.5 GitHub Pages

#### Setup:
```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts
"deploy": "gh-pages -d out"

# Deploy
npm run deploy
```

---

## 5. Post-Deployment Verification

### 5.1 Immediate Checks
After deployment, verify:

```bash
# Check if site is accessible
curl -I https://hlpfl.org

# Expected: HTTP/2 200
```

**Manual Verification:**
- [ ] Homepage loads (https://hlpfl.org)
- [ ] All pages are accessible
- [ ] Images load correctly
- [ ] Forms submit successfully
- [ ] No console errors
- [ ] SSL certificate is valid
- [ ] Redirects work (www to non-www or vice versa)

### 5.2 Performance Testing
```bash
# Run Lighthouse audit
lighthouse https://hlpfl.org --view

# Or use PageSpeed Insights
# Visit: https://pagespeed.web.dev/
```

**Target Scores:**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

### 5.3 SEO Verification
- [ ] Submit sitemap to Google Search Console
  ```
  https://search.google.com/search-console
  Add property: https://hlpfl.org
  Submit sitemap: https://hlpfl.org/sitemap.xml
  ```

- [ ] Verify robots.txt
  ```
  https://hlpfl.org/robots.txt
  ```

- [ ] Test structured data
  ```
  https://search.google.com/test/rich-results
  Test URL: https://hlpfl.org
  ```

### 5.4 Monitoring Setup

#### Error Tracking (Sentry - Optional):
```bash
# Install Sentry
npm install @sentry/nextjs

# Configure in next.config.js
```

#### Analytics (Google Analytics - Optional):
```javascript
// Add to layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

#### Uptime Monitoring:
- Set up monitoring with:
  - UptimeRobot (free)
  - Pingdom
  - StatusCake
  - Cloudflare Analytics (included)

---

## 6. Rollback Procedures

### 6.1 Cloudflare Pages Rollback
1. Go to Cloudflare Pages dashboard
2. Navigate to your project
3. Click "Deployments"
4. Find the previous working deployment
5. Click "..." menu → "Rollback to this deployment"

### 6.2 Git-Based Rollback
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push origin main --force
```

### 6.3 Manual Rollback
If you have a backup of the `out` directory:
```bash
# Re-deploy previous build
# (method depends on hosting provider)
```

---

## 7. Troubleshooting

### 7.1 Build Failures

**Issue**: Build fails with "localStorage is not defined"
```bash
# Solution: Already fixed with dynamic import
# Verify src/app/layout.tsx has:
const Chatbot = dynamic(() => import('@/components/ui/Chatbot')..., {
  ssr: false,
})
```

**Issue**: TypeScript errors
```bash
# Run type check
npm run type-check

# Fix errors and rebuild
npm run build
```

**Issue**: Out of memory during build
```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### 7.2 Deployment Issues

**Issue**: 404 errors on page refresh
```bash
# For static hosting, ensure:
# 1. Trailing slashes are configured
# 2. Fallback to index.html is set up
# 3. Check next.config.js has: trailingSlash: true
```

**Issue**: Images not loading
```bash
# Check:
# 1. Images are in public/ directory
# 2. Paths are correct (relative, not absolute)
# 3. Images are included in build output
```

**Issue**: Forms not submitting
```bash
# Check:
# 1. API routes are accessible
# 2. CORS is configured (if needed)
# 3. Network tab for errors
# 4. Console for JavaScript errors
```

### 7.3 Performance Issues

**Issue**: Slow page load
```bash
# Solutions:
# 1. Optimize images (convert to WebP)
# 2. Enable CDN caching
# 3. Minimize JavaScript bundle
# 4. Use lazy loading for images
```

**Issue**: Large bundle size
```bash
# Analyze bundle
npm run analyze

# Solutions:
# 1. Remove unused dependencies
# 2. Use dynamic imports
# 3. Optimize images
```

### 7.4 SSL/HTTPS Issues

**Issue**: SSL certificate errors
```bash
# Solutions:
# 1. Wait for certificate to provision (can take up to 24 hours)
# 2. Verify DNS records are correct
# 3. Check with hosting provider
```

**Issue**: Mixed content warnings
```bash
# Solutions:
# 1. Ensure all resources use HTTPS
# 2. Update external links to HTTPS
# 3. Check for hardcoded HTTP URLs
```

---

## 8. Continuous Deployment

### 8.1 GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: hlpflrecords
          directory: out
```

---

## 9. Maintenance

### 9.1 Regular Updates
```bash
# Update dependencies monthly
npm outdated
npm update

# Test after updates
npm run build
npm test
```

### 9.2 Security Updates
```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### 9.3 Content Updates
For content updates:
1. Update content in code
2. Commit changes
3. Push to main branch
4. Automatic deployment triggers
5. Verify changes on live site

---

## 10. Emergency Procedures

### 10.1 Site Down
1. Check hosting provider status
2. Verify DNS records
3. Check SSL certificate
4. Review recent deployments
5. Rollback if needed
6. Contact hosting support

### 10.2 Security Breach
1. Take site offline immediately
2. Review access logs
3. Change all credentials
4. Audit code for vulnerabilities
5. Deploy patched version
6. Monitor for further issues

### 10.3 Data Loss
1. Restore from backup
2. Verify data integrity
3. Test thoroughly
4. Deploy restored version
5. Document incident

---

## 11. Deployment Checklist

### Pre-Deployment:
- [x] Code reviewed and approved
- [x] Build successful locally
- [x] All tests passing
- [x] Environment variables configured
- [ ] Backup current production version
- [ ] Notify team of deployment

### During Deployment:
- [ ] Start deployment process
- [ ] Monitor build logs
- [ ] Verify build completion
- [ ] Check deployment status

### Post-Deployment:
- [ ] Verify site is accessible
- [ ] Test critical functionality
- [ ] Check for console errors
- [ ] Verify forms work
- [ ] Test on multiple devices
- [ ] Monitor error logs
- [ ] Update documentation
- [ ] Notify team of completion

---

## 12. Support Contacts

### Hosting Provider:
- **Cloudflare**: https://dash.cloudflare.com/
- **Support**: https://support.cloudflare.com/

### Domain Registrar:
- Check your domain registrar's support

### Development Team:
- Repository: https://github.com/HLPFLCG/hlpflrecords
- Issues: https://github.com/HLPFLCG/hlpflrecords/issues

---

## Conclusion

This deployment guide provides comprehensive instructions for deploying the HLPFL Records website. Follow these steps carefully to ensure a smooth deployment process.

**Current Status**: ✅ Ready for deployment  
**Build Status**: ✅ Successful (12/12 pages)  
**Last Updated**: December 17, 2025  
**Next Review**: After first deployment

---

## Quick Reference

### Essential Commands:
```bash
# Install dependencies
npm ci

# Build for production
npm run build

# Test build locally
npx serve out

# Deploy (Cloudflare Pages)
git push origin main

# Rollback
# Use Cloudflare dashboard or git revert
```

### Important URLs:
- Production: https://hlpfl.org
- Repository: https://github.com/HLPFLCG/hlpflrecords
- Cloudflare Dashboard: https://dash.cloudflare.com/

### Emergency Contacts:
- Development Team: [Add contact info]
- Hosting Support: [Add contact info]
- Domain Support: [Add contact info]