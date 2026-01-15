# Environment Variables Setup Guide

## What are Environment Variables?

Environment variables are **secret configuration values** that your app needs but **shouldn't be in your code**. Think of them like passwords - you don't want them in GitHub where anyone can see them!

Examples:
- Database passwords
- API keys
- Secret tokens

---

## Two Places You Need Them

### 1. **Local Development** (your computer)
- File: `.env.local`
- Used when running `npm run dev`
- Lives on your computer only
- **NEVER** committed to GitHub

### 2. **Production** (Cloudflare Pages)
- Set in Cloudflare dashboard
- Used when your site is deployed
- Encrypted and secure

---

## Step 1: Create .env.local (Local Development)

### Using VS Code:

1. **Open VS Code** with your HLPFL project
2. **Click** the "New File" button in the Explorer (or press `Ctrl+N` / `Cmd+N`)
3. **Name it**: `.env.local` (yes, with the dot at the start!)
4. **Save it** in the **root** of your project (same level as `package.json`)

Your file structure should look like:
```
hlpflrecords/
├── .env.local          ← NEW FILE HERE
├── .env.example        ← Template I just created
├── package.json
├── next.config.js
└── src/
```

### Copy the Template:

1. Open `.env.example` (I just created this)
2. Copy all the contents
3. Paste into your new `.env.local`
4. **Replace the placeholder values** with your actual keys (we'll get those in Step 2)

---

## Step 2: Get Your Supabase Keys

### A. Create Supabase Project (if you haven't):

1. Go to **[supabase.com](https://supabase.com)**
2. Click **"Start your project"** (it's free!)
3. Sign up with GitHub (easiest)
4. Click **"New Project"**
   - Organization: Create new or use existing
   - Name: `hlpfl-artist-portal`
   - Database Password: **Choose a strong password and SAVE IT!**
   - Region: Choose closest to you (e.g., "East US")
5. Click **"Create new project"**
6. Wait ~2 minutes for it to set up

### B. Copy Your API Keys:

1. In Supabase dashboard, click **⚙️ Settings** (bottom left)
2. Click **"API"** in the sidebar
3. You'll see two keys:
   - **Project URL**: Copy this
   - **anon public key**: Copy this
   - **service_role key**: Click "Reveal" then copy (keep this secret!)

### C. Add to .env.local:

Replace these lines in your `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Save the file!**

---

## Step 3: Test It Works

### In VS Code Terminal:

```bash
# Restart your dev server
npm run dev
```

Open the browser console (F12) and you should see no Supabase errors!

---

## Step 4: Set Up Production (Cloudflare Pages)

### A. Go to Cloudflare Dashboard:

1. Go to **[dash.cloudflare.com](https://dash.cloudflare.com)**
2. Click **"Workers & Pages"** in the sidebar
3. Find your **hlpflrecords** project
4. Click on it

### B. Add Environment Variables:

1. Click **"Settings"** tab
2. Scroll to **"Environment variables"**
3. Click **"Add variables"**

Add these one by one:

| Variable Name | Value | Production/Preview |
|--------------|-------|-------------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://your-project.supabase.co` | ✅ Both |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbG...` | ✅ Both |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbG...` | ✅ Production only |
| `NEXT_PUBLIC_GA_ID` | `G-7W14RQ0K9W` | ✅ Both |
| `NEXT_PUBLIC_GTM_ID` | `GTM-WSPNJ5DR` | ✅ Both |

**Important**:
- For "Production" vs "Preview": Select **"All"** for most variables
- For `SUPABASE_SERVICE_ROLE_KEY`: Select **"Production"** only (more secure)

### C. Redeploy:

After adding variables:
1. Click **"Deployments"** tab
2. Click **"..." (three dots)** on latest deployment
3. Click **"Retry deployment"**

OR just push a new commit to trigger a build!

---

## Step 5: Verify .env.local is Ignored by Git

Run this in VS Code terminal:

```bash
git status
```

You should **NOT** see `.env.local` in the list!

If you DO see it, run:
```bash
echo ".env.local" >> .gitignore
git add .gitignore
git commit -m "Ensure .env.local is ignored"
```

---

## Quick Reference

### What goes in .env.local?
**Everything secret!** Database passwords, API keys, tokens.

### What goes in .env.example?
**Template only!** Fake/placeholder values showing what variables are needed.

### Can I commit .env.local?
**NO! NEVER!** It has secrets. That's why it's in `.gitignore`.

### Can I commit .env.example?
**YES!** It's just a template with no real secrets.

### What if I accidentally committed .env.local?
1. Remove it immediately:
   ```bash
   git rm --cached .env.local
   git commit -m "Remove .env.local"
   git push
   ```
2. **Rotate ALL your keys** (create new ones in Supabase/other services)
3. Update `.env.local` with new keys

---

## Current Status

Right now:
- ✅ Google Analytics variables are **hardcoded** in the code (working)
- ⚠️ Supabase variables **not yet needed** (mock data still in use)
- 📝 When you're ready to use Supabase, follow Steps 1-4 above

---

## Visual Guide: Where Files Go

```
hlpflrecords/
├── .env.local              ← YOUR SECRETS (never commit!)
├── .env.example            ← TEMPLATE (safe to commit) ✅
├── .gitignore              ← Lists .env.local to ignore it
├── package.json
├── next.config.js
├── README.md
└── src/
    ├── app/
    ├── components/
    └── lib/
        └── supabase.ts     ← Reads from .env.local
```

---

## Need Help?

**VS Code not showing .env.local?**
- Make sure you saved it in the root folder
- Try refreshing the file explorer (click the refresh icon)
- Restart VS Code

**Still seeing "Missing environment variables" error?**
- Check spelling (exact match required!)
- Restart dev server after creating .env.local
- Make sure there are no spaces around the `=` sign

**Variables not working on Cloudflare?**
- Wait 2-3 minutes after adding them
- Trigger a new deployment
- Check the "Logs" tab for errors

---

**You're all set!**

Once you have `.env.local` created, your app will be able to connect to Supabase and other services.

---

## New Feature Variables (2026)

The following environment variables were added for new features. For detailed setup instructions, see the [API Setup Guide](./API_SETUP_GUIDE.md).

### OAuth Authentication (NextAuth)

For social login with Google, Facebook, Spotify, and Apple:

```bash
# NextAuth Configuration
NEXTAUTH_URL=https://hlpflrecords.com
NEXTAUTH_SECRET=generate-a-32-char-secret-here

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Facebook OAuth
FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret

# Spotify OAuth
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret

# Apple Sign-In (advanced)
APPLE_ID=your-apple-service-id
APPLE_SECRET=your-apple-secret-key
```

**Where to get these:**
- Google: [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)
- Facebook: [developers.facebook.com/apps](https://developers.facebook.com/apps)
- Spotify: [developer.spotify.com/dashboard](https://developer.spotify.com/dashboard)
- Apple: [developer.apple.com](https://developer.apple.com) (requires paid developer account)

### Resend Email

For questionnaire submission emails:

```bash
# Get from: https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Admin email to receive submissions
ADMIN_EMAIL=submissions@hlpflrecords.com
```

**Free tier**: 3,000 emails/month

### Stripe Payments

For merch store checkout:

```bash
# Get from: https://dashboard.stripe.com/apikeys
STRIPE_PUBLIC_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE
```

**Note**: Use `pk_test_` and `sk_test_` keys for development. Switch to `pk_live_` and `sk_live_` for production.

### Quick Reference Table

| Variable | Service | Required For | Get From |
|----------|---------|--------------|----------|
| `NEXTAUTH_SECRET` | NextAuth | OAuth login | Generate: `openssl rand -base64 32` |
| `NEXTAUTH_URL` | NextAuth | OAuth login | Your site URL |
| `GOOGLE_CLIENT_ID` | Google | Google login | Google Cloud Console |
| `GOOGLE_CLIENT_SECRET` | Google | Google login | Google Cloud Console |
| `FACEBOOK_CLIENT_ID` | Facebook | Facebook login | Facebook Developers |
| `FACEBOOK_CLIENT_SECRET` | Facebook | Facebook login | Facebook Developers |
| `SPOTIFY_CLIENT_ID` | Spotify | Spotify login | Spotify Developer |
| `SPOTIFY_CLIENT_SECRET` | Spotify | Spotify login | Spotify Developer |
| `APPLE_ID` | Apple | Apple login | Apple Developer |
| `APPLE_SECRET` | Apple | Apple login | Apple Developer |
| `RESEND_API_KEY` | Resend | Questionnaire emails | resend.com |
| `ADMIN_EMAIL` | Resend | Questionnaire emails | Your email |
| `STRIPE_PUBLIC_KEY` | Stripe | Merch checkout | stripe.com |
| `STRIPE_SECRET_KEY` | Stripe | Merch checkout | stripe.com |
| `STRIPE_WEBHOOK_SECRET` | Stripe | Order notifications | stripe.com |

### Production Checklist

Before going live, ensure these are set in Cloudflare Pages:

- [ ] `RESEND_API_KEY` - For email notifications
- [ ] `STRIPE_SECRET_KEY` - For payment processing (use live key!)
- [ ] `NEXTAUTH_SECRET` - For session encryption
- [ ] `NEXTAUTH_URL` - Set to `https://hlpflrecords.com`
- [ ] OAuth credentials for each provider you want to enable

**Detailed setup instructions**: [API Setup Guide](./API_SETUP_GUIDE.md)
