# Cloudflare Pages Deployment Guide

## Overview

This repository contains a Next.js 14 application with server-side rendering (SSR) capabilities, API routes, and a documents library page. This guide explains how to deploy it to Cloudflare Pages.

## Current Configuration

### Files Updated
1. **wrangler.toml** - Cloudflare Pages configuration
2. **package.json** - Build scripts updated
3. **functions/_middleware.js** - Security headers middleware
4. **cloudflare-pages.config.js** - Pages configuration (reference)

### Build Process
- Standard Next.js build: `npm run build`
- Output directory: `.next/` (Next.js server build)
- Static files: `public/`
- API routes: `.next/server/app/api/`

## Deployment Options

### Option 1: Cloudflare Pages with Full Stack (Recommended)

Since this application has API routes and requires server-side rendering, you have two main options:

#### A. Use Cloudflare Pages Functions with Node.js Compatibility
1. Connect your GitHub repository to Cloudflare Pages
2. Set build configuration:
   - **Build command**: `npm run build`
   - **Build output directory**: `.next` (NOT `out`)
   - **Node.js version**: 18 or higher
   - **Environment variables**: Add from your `.env.example`

#### B. Upgrade to Cloudflare Pages with OpenNext Adapter (Recommended for Production)
1. Install OpenNext adapter:
   ```bash
   npm install --save-dev @opennext-cloudflare/cloudflare
   ```

2. Update wrangler.toml to use OpenNext:
   ```toml
   name = "hlpflrecords"
   compatibility_date = "2024-12-17"
   compatibility_flags = ["nodejs_compat"]
   
   [build]
   command = "npm run build"
   cwd = "."
   
   pages_build_output_dir = ".open-next"
   ```

3. Update package.json build script:
   ```json
   "scripts": {
     "build": "next build",
     "build:cloudflare": "opennextjs-cloudflare"
   }
   ```

### Option 2: Cloudflare Workers (Alternative)

For full control, you can deploy to Cloudflare Workers with the Next.js adapter:

1. Install the adapter:
   ```bash
   npm install --save-dev @cloudflare/next-on-pages
   ```

2. Update build process:
   ```bash
   npx @cloudflare/next-on-pages
   ```

## Current Status

✅ **What Works:**
- Documents page is built and included in the build output
- All 64 pages are successfully generated
- Static pages are pre-rendered
- API routes are recognized as dynamic routes

⚠️ **What Needs Configuration:**
- Cloudflare Pages needs to know how to serve the `.next` server build
- Environment variables need to be set in Cloudflare Pages dashboard
- Database connection (D1) needs to be configured

## Documents Page Status

The documents page at `/documents` is:
- ✅ Created and committed to repository
- ✅ Successfully built (4.77 kB)
- ✅ Includes all 5 PDF documents
- ✅ Has search and filtering functionality
- ✅ Mobile responsive design

## Troubleshooting

### Build Fails with "Output directory 'out' not found"

**Solution:** This is expected. The site uses SSR, so it outputs to `.next/`, not `out/`. 
- Remove `pages_build_output_dir = "./out"` from wrangler.toml
- Use the OpenNext adapter or configure Cloudflare Pages to handle `.next` output

### API Routes Not Working

**Solution:** API routes require server-side rendering:
- Ensure you're using Cloudflare Pages with Node.js compatibility
- Or use the OpenNext adapter for full Next.js support
- Verify environment variables are set in Cloudflare Pages dashboard

### Documents Page Shows 404

**Solution:** Verify the build includes the documents page:
```bash
npm run build
# Check that /documents appears in the build output
```

## Environment Variables Required

Set these in Cloudflare Pages dashboard:

```
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://hlpfl.org
NEXT_PUBLIC_GA_ID=G-7W14RQ0K9W
NEXT_PUBLIC_GTM_ID=GTM-WSPNJ5DR
```

And any other variables from your `.env.example` file.

## Next Steps

1. **Choose your deployment option** (A or B above)
2. **Configure Cloudflare Pages** with the correct build settings
3. **Set environment variables** in Cloudflare Pages dashboard
4. **Test deployment** and verify documents page works
5. **Monitor build logs** for any issues

## Resources

- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [OpenNext for Cloudflare](https://opennext.js.org/cloudflare)
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/)