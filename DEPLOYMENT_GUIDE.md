# HLPFL Records - Deployment Guide

## 🎯 Overview

Your site is deployed to **Cloudflare Pages** (not GitHub Pages). The deployment happens automatically through Cloudflare's GitHub integration whenever you push to the `main` branch.

## ✅ Recent Fixes Applied

1. **Removed static export requirement** - Your site uses SSR with API routes, so it cannot use static export
2. **Disabled GitHub Pages workflow** - Removed conflicting GitHub Actions deployment workflow
3. **Updated configuration** - wrangler.toml and package.json properly configured for Cloudflare Pages
4. **Added deployment documentation** - See CLOUDFLARE_DEPLOYMENT.md for detailed options

## 🚀 How Deployment Works

### Automatic Deployment (Current Setup)

When you push to the `main` branch:
1. Cloudflare Pages automatically detects the push via GitHub webhook
2. Cloudflare builds your site using the configured build command
3. Your site is deployed to Cloudflare Pages

### Current Configuration

**wrangler.toml:**
```toml
name = "hlpflrecords"
compatibility_date = "2024-12-17"
compatibility_flags = ["nodejs_compat"]
```

**Build Settings in Cloudflare Pages Dashboard:**
- **Build command**: `npm run build` (should be set in your Cloudflare Pages project)
- **Build output directory**: `.next` (Next.js server build)
- **Node.js version**: 18 or higher

## 🔧 Current Status

### ✅ What's Working
- Documents page created and committed
- All 5 PDF documents uploaded to `public/documents/`
- Build completes successfully
- All 64 pages generated including `/documents`

### ⚠️ What Needs Configuration in Cloudflare Pages

If your Cloudflare Pages deployment is still failing, you need to:

1. **Update Build Settings** in Cloudflare Pages dashboard:
   - Go to: Your Project → Settings → Builds & deployments
   - Build command: `npm run build`
   - Build output directory: `.next` (NOT `out`)
   - Node.js version: 18 or higher

2. **Set Environment Variables**:
   - Go to: Your Project → Settings → Environment variables
   - Add variables from your `.env.example` file:
     - `NODE_ENV=production`
     - `NEXT_PUBLIC_API_URL=https://hlpfl.org`
     - `NEXT_PUBLIC_GA_ID=G-7W14RQ0K9W`
     - `NEXT_PUBLIC_GTM_ID=GTM-WSPNJ5DR`
     - And any other required variables

3. **Enable Node.js Compatibility**:
   - Your `wrangler.toml` already has `compatibility_flags = ["nodejs_compat"]`
   - This should be enabled in your Cloudflare Pages project settings

## 📋 Deployment Options

### Option 1: Current Setup (Recommended for Now)

Use Cloudflare Pages with Node.js compatibility:
- **Pros**: Simple, already configured, works with SSR
- **Cons**: Limited to Cloudflare's Node.js runtime
- **Setup**: Already done, just need to verify Cloudflare Pages settings

### Option 2: OpenNext Adapter (Recommended for Production)

For better Next.js support and performance:
```bash
npm install --save-dev @opennext-cloudflare/cloudflare
```

Then update your configuration to use the OpenNext adapter.

See `CLOUDFLARE_DEPLOYMENT.md` for detailed instructions.

## 🧪 Testing Your Deployment

### Before Deployment (Local Testing)
```bash
cd /workspace/hlpflrecords
npm install
npm run build
npm start
```
Then visit `http://localhost:3000/documents` to verify the documents page works.

### After Deployment (Cloudflare Pages)

1. **Check deployment status**: Go to Cloudflare Pages dashboard
2. **Visit your site**: 
   - `https://hlpflrecords.pages.dev/documents`
   - Or your custom domain if configured
3. **Test functionality**:
   - Documents page loads
   - Search works
   - Category filters work
   - PDF downloads work
   - Mobile responsive design

## 🔍 Troubleshooting

### Deployment Fails with "Output directory not found"

**Cause**: Cloudflare Pages is looking for `out` directory (static export)
**Solution**: Update build output directory to `.next` in Cloudflare Pages settings

### API Routes Don't Work

**Cause**: API routes require server-side rendering
**Solution**: 
- Ensure Node.js compatibility is enabled
- Verify environment variables are set
- Use Option 2 (OpenNext adapter) for full support

### Documents Page Shows 404

**Solution**: 
```bash
# Verify the page is in the build
npm run build
# Check that /documents appears in the build output
```

### Build Succeeds But Site Doesn't Work

**Solution**: 
- Check Cloudflare Pages deployment logs
- Verify all environment variables are set
- Ensure Node.js compatibility is enabled
- Check for runtime errors in Cloudflare Pages dashboard

## 📚 Additional Resources

- **Cloudflare Pages Documentation**: https://developers.cloudflare.com/pages/
- **Next.js on Cloudflare Pages**: https://developers.cloudflare.com/pages/framework-guides/nextjs/
- **OpenNext for Cloudflare**: https://opennext.js.org/cloudflare

## 🎉 Success Criteria

Your deployment is successful when:
- ✅ Cloudflare Pages build completes without errors
- ✅ Site is accessible at your Cloudflare Pages URL
- ✅ Documents page at `/documents` loads correctly
- ✅ All 5 PDF documents are downloadable
- ✅ Search and filtering work
- ✅ Site is mobile responsive
- ✅ API routes (if used) work correctly

## 🆘 Need Help?

If you encounter issues:
1. Check Cloudflare Pages deployment logs
2. Review `CLOUDFLARE_DEPLOYMENT.md` for detailed options
3. Verify environment variables are set correctly
4. Ensure Node.js compatibility is enabled

## 📝 Next Steps

1. ✅ Fix applied - disabled GitHub Pages workflow
2. ✅ Configuration updated - wrangler.toml and package.json
3. ✅ Documentation created - CLOUDFLARE_DEPLOYMENT.md
4. ⏭️ **Your action needed**: Update Cloudflare Pages settings (see above)
5. ⏭️ **Your action needed**: Set environment variables in Cloudflare Pages
6. ⏭️ Monitor Cloudflare Pages deployment and verify site works

---

**Last Updated**: January 15, 2026
**Deployment Target**: Cloudflare Pages (not GitHub Pages)
**Current Branch**: main