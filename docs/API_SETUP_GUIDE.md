# API Setup Guide

Complete step-by-step instructions for connecting all external services: Resend (email), Stripe (payments), and OAuth providers (Google, Facebook, Spotify, Apple).

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Resend Email Setup](#1-resend-email-setup)
3. [Stripe Payments Setup](#2-stripe-payments-setup)
4. [Google OAuth Setup](#3-google-oauth-setup)
5. [Facebook OAuth Setup](#4-facebook-oauth-setup)
6. [Spotify OAuth Setup](#5-spotify-oauth-setup)
7. [Apple Sign-In Setup](#6-apple-sign-in-setup-advanced)
8. [Cloudflare Pages Deployment](#7-cloudflare-pages-deployment)
9. [Testing Your Setup](#8-testing-your-setup)
10. [Troubleshooting](#9-troubleshooting)

---

## Prerequisites

Before starting, you'll need:

- [ ] Access to the HLPFL Records codebase
- [ ] A `.env.local` file in your project root (copy from `.env.example`)
- [ ] Access to Cloudflare Pages dashboard (for production)

### Create Your .env.local File

```bash
# In your project root
cp .env.example .env.local
```

Your `.env.local` file should look like this:
```
hlpflrecords/
├── .env.local          ← Your secrets (never commit!)
├── .env.example        ← Template (safe to commit)
├── package.json
└── src/
```

---

## 1. Resend Email Setup

Resend sends questionnaire submissions to your email.

### Step 1: Create Resend Account

1. Go to **[resend.com](https://resend.com)**
2. Click **"Get Started"** (free tier: 3,000 emails/month)
3. Sign up with GitHub or email
4. Verify your email address

### Step 2: Get Your API Key

1. In Resend dashboard, click **"API Keys"** in sidebar
2. Click **"Create API Key"**
3. Name it: `hlpfl-questionnaire`
4. Permission: **"Sending access"**
5. Click **"Create"**
6. **Copy the key immediately** (starts with `re_`)

### Step 3: Add to .env.local

```bash
# In .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
ADMIN_EMAIL=your-email@example.com
```

### Step 4: (Optional) Verify Your Domain

For production emails to not go to spam:

1. In Resend, go to **"Domains"**
2. Click **"Add Domain"**
3. Enter: `hlpflrecords.com`
4. Add the DNS records shown to your domain provider
5. Wait for verification (usually 5-10 minutes)

### Step 5: Test It

1. Start your dev server: `npm run dev`
2. Go to `http://localhost:3000/artist-questionnaire`
3. Fill out and submit the form
4. Check your email!

---

## 2. Stripe Payments Setup

Stripe handles merch store checkout.

### Step 1: Create Stripe Account

1. Go to **[stripe.com](https://stripe.com)**
2. Click **"Start now"**
3. Enter your email and create password
4. Verify your email
5. Complete account setup (business info)

### Step 2: Get API Keys

1. In Stripe Dashboard, click **"Developers"** (top right)
2. Click **"API keys"**
3. You'll see two keys:
   - **Publishable key**: `pk_test_...` (public, safe for frontend)
   - **Secret key**: `sk_test_...` (private, server only)

**Important**: Use **test keys** first (they start with `pk_test_` and `sk_test_`)

### Step 3: Add to .env.local

```bash
# In .env.local
STRIPE_PUBLIC_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
```

### Step 4: (Optional) Set Up Webhooks

For order notifications:

1. In Stripe, go to **"Developers" → "Webhooks"**
2. Click **"Add endpoint"**
3. URL: `https://hlpflrecords.com/api/webhooks/stripe`
4. Select events: `checkout.session.completed`
5. Click **"Add endpoint"**
6. Copy the **Signing secret** (`whsec_...`)

```bash
# In .env.local
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE
```

### Step 5: Test It

1. Start your dev server: `npm run dev`
2. Go to `http://localhost:3000/merch`
3. Add items to cart
4. Click "Checkout with Stripe"
5. Use test card: `4242 4242 4242 4242`
6. Any future date, any CVC

### Going Live

When ready for real payments:

1. Complete Stripe account verification
2. Switch to **live keys** (`pk_live_...` and `sk_live_...`)
3. Update `.env.local` and Cloudflare environment variables

---

## 3. Google OAuth Setup

Allow users to sign in with their Google account.

### Step 1: Create Google Cloud Project

1. Go to **[console.cloud.google.com](https://console.cloud.google.com)**
2. Click project dropdown (top bar) → **"New Project"**
3. Name: `HLPFL Records`
4. Click **"Create"**
5. Wait for project creation, then select it

### Step 2: Configure OAuth Consent Screen

1. In sidebar, go to **"APIs & Services" → "OAuth consent screen"**
2. Select **"External"** → Click **"Create"**
3. Fill in required fields:
   - App name: `HLPFL Records`
   - User support email: Your email
   - Developer contact: Your email
4. Click **"Save and Continue"**
5. Scopes: Click **"Add or Remove Scopes"**
   - Select: `email`, `profile`, `openid`
   - Click **"Update"** → **"Save and Continue"**
6. Test users: Add your email for testing
7. Click **"Save and Continue"** → **"Back to Dashboard"**

### Step 3: Create OAuth Credentials

1. Go to **"APIs & Services" → "Credentials"**
2. Click **"Create Credentials" → "OAuth client ID"**
3. Application type: **"Web application"**
4. Name: `HLPFL Web App`
5. **Authorized JavaScript origins**:
   - `http://localhost:3000`
   - `https://hlpflrecords.com`
6. **Authorized redirect URIs**:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://hlpflrecords.com/api/auth/callback/google`
7. Click **"Create"**
8. Copy **Client ID** and **Client Secret**

### Step 4: Add to .env.local

```bash
# In .env.local
GOOGLE_CLIENT_ID=xxxxxxxxxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-xxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 4. Facebook OAuth Setup

Allow users to sign in with their Facebook account.

### Step 1: Create Facebook App

1. Go to **[developers.facebook.com](https://developers.facebook.com)**
2. Click **"My Apps"** → **"Create App"**
3. Select **"Consumer"** → Click **"Next"**
4. App name: `HLPFL Records`
5. Contact email: Your email
6. Click **"Create App"**

### Step 2: Configure Facebook Login

1. In your app dashboard, find **"Facebook Login"**
2. Click **"Set Up"**
3. Select **"Web"**
4. Site URL: `https://hlpflrecords.com`
5. Click **"Save"** → **"Continue"**

### Step 3: Add Redirect URIs

1. Go to **"Facebook Login" → "Settings"** (in sidebar)
2. In **"Valid OAuth Redirect URIs"** add:
   - `http://localhost:3000/api/auth/callback/facebook`
   - `https://hlpflrecords.com/api/auth/callback/facebook`
3. Click **"Save Changes"**

### Step 4: Get App Credentials

1. Go to **"Settings" → "Basic"**
2. Copy **App ID** and **App Secret** (click "Show")

### Step 5: Add to .env.local

```bash
# In .env.local
FACEBOOK_CLIENT_ID=xxxxxxxxxxxxxxxx
FACEBOOK_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Step 6: (For Production) Submit for App Review

To allow non-test users:

1. Go to **"App Review"** in sidebar
2. Submit your app for review
3. Provide privacy policy URL
4. This can take several days

---

## 5. Spotify OAuth Setup

Allow users to sign in with their Spotify account.

### Step 1: Create Spotify App

1. Go to **[developer.spotify.com/dashboard](https://developer.spotify.com/dashboard)**
2. Log in with your Spotify account
3. Click **"Create app"**
4. Fill in:
   - App name: `HLPFL Records`
   - App description: `Artist portal login`
   - Website: `https://hlpflrecords.com`
   - Redirect URI: `http://localhost:3000/api/auth/callback/spotify`
5. Check the agreement box
6. Click **"Save"**

### Step 2: Add Production Redirect URI

1. Click **"Settings"** on your app
2. Click **"Edit"**
3. Add another redirect URI:
   - `https://hlpflrecords.com/api/auth/callback/spotify`
4. Click **"Save"**

### Step 3: Get Credentials

1. In app settings, you'll see:
   - **Client ID** (visible)
   - **Client Secret** (click "View client secret")
2. Copy both values

### Step 4: Add to .env.local

```bash
# In .env.local
SPOTIFY_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SPOTIFY_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 6. Apple Sign-In Setup (Advanced)

Apple Sign-In requires an Apple Developer account ($99/year).

### Prerequisites

- Apple Developer Program membership
- Access to Apple Developer portal

### Step 1: Create App ID

1. Go to **[developer.apple.com/account](https://developer.apple.com/account)**
2. Go to **"Certificates, Identifiers & Profiles"**
3. Click **"Identifiers"** → **"+"**
4. Select **"App IDs"** → **"Continue"**
5. Select **"App"** → **"Continue"**
6. Fill in:
   - Description: `HLPFL Records`
   - Bundle ID: `com.hlpflrecords.web`
7. Enable **"Sign in with Apple"**
8. Click **"Continue"** → **"Register"**

### Step 2: Create Service ID

1. Click **"Identifiers"** → **"+"**
2. Select **"Services IDs"** → **"Continue"**
3. Fill in:
   - Description: `HLPFL Records Web`
   - Identifier: `com.hlpflrecords.web.signin`
4. Click **"Continue"** → **"Register"**
5. Click on the service ID you just created
6. Enable **"Sign in with Apple"**
7. Click **"Configure"**
8. Primary App ID: Select your App ID
9. Website URLs:
   - Domains: `hlpflrecords.com`, `localhost`
   - Return URLs:
     - `http://localhost:3000/api/auth/callback/apple`
     - `https://hlpflrecords.com/api/auth/callback/apple`
10. Click **"Save"** → **"Continue"** → **"Save"**

### Step 3: Create Private Key

1. Go to **"Keys"** → **"+"**
2. Name: `HLPFL Sign in with Apple`
3. Enable **"Sign in with Apple"**
4. Click **"Configure"**
5. Select your App ID
6. Click **"Save"** → **"Continue"** → **"Register"**
7. **Download the key** (`.p8` file) - you can only do this once!
8. Note the **Key ID**

### Step 4: Generate Client Secret

Apple requires a JWT as the client secret. Use this Node.js script:

```javascript
// generate-apple-secret.js
const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('./AuthKey_XXXXXXXXXX.p8');
const teamId = 'YOUR_TEAM_ID';      // From Apple Developer account
const clientId = 'com.hlpflrecords.web.signin';  // Your Service ID
const keyId = 'XXXXXXXXXX';         // Key ID from step 3

const token = jwt.sign({}, privateKey, {
  algorithm: 'ES256',
  expiresIn: '180d',
  audience: 'https://appleid.apple.com',
  issuer: teamId,
  subject: clientId,
  keyid: keyId
});

console.log('Apple Client Secret:', token);
```

Run: `node generate-apple-secret.js`

### Step 5: Add to .env.local

```bash
# In .env.local
APPLE_ID=com.hlpflrecords.web.signin
APPLE_SECRET=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhYWFhYWFhYWFgifQ...
```

**Note**: Apple secrets expire after 6 months. Set a reminder to regenerate.

---

## 7. Cloudflare Pages Deployment

Add environment variables to production.

### Step 1: Access Cloudflare Dashboard

1. Go to **[dash.cloudflare.com](https://dash.cloudflare.com)**
2. Click **"Workers & Pages"** in sidebar
3. Find and click **"hlpflrecords"**

### Step 2: Add Environment Variables

1. Click **"Settings"** tab
2. Scroll to **"Environment variables"**
3. Click **"Add variable"** for each:

| Variable | Value | Environment |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_xxx...` | Production |
| `STRIPE_SECRET_KEY` | `sk_live_xxx...` | Production |
| `GOOGLE_CLIENT_ID` | `xxx.apps.googleusercontent.com` | All |
| `GOOGLE_CLIENT_SECRET` | `GOCSPX-xxx...` | Production |
| `FACEBOOK_CLIENT_ID` | `xxx...` | All |
| `FACEBOOK_CLIENT_SECRET` | `xxx...` | Production |
| `SPOTIFY_CLIENT_ID` | `xxx...` | All |
| `SPOTIFY_CLIENT_SECRET` | `xxx...` | Production |
| `NEXTAUTH_SECRET` | (generate random 32+ chars) | Production |
| `NEXTAUTH_URL` | `https://hlpflrecords.com` | Production |

### Step 3: Generate NEXTAUTH_SECRET

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

Or use: [generate-secret.vercel.app](https://generate-secret.vercel.app/)

### Step 4: Trigger Redeployment

After adding variables:

1. Go to **"Deployments"** tab
2. Click **"..."** on the latest deployment
3. Click **"Retry deployment"**

Or push a new commit to trigger automatic deployment.

---

## 8. Testing Your Setup

### Test Checklist

- [ ] **Resend**: Submit questionnaire, check email received
- [ ] **Stripe**: Complete test checkout with card `4242 4242 4242 4242`
- [ ] **Google OAuth**: Click "Continue with Google", complete login
- [ ] **Facebook OAuth**: Click "Continue with Facebook", complete login
- [ ] **Spotify OAuth**: Click "Continue with Spotify", complete login
- [ ] **Apple OAuth**: Click "Continue with Apple", complete login

### Local Testing

```bash
# Start dev server
npm run dev

# Test each feature at:
# - http://localhost:3000/artist-portal (OAuth)
# - http://localhost:3000/merch (Stripe)
# - http://localhost:3000/artist-questionnaire (Resend)
```

### Production Testing

After deployment:
1. Visit `https://hlpflrecords.com`
2. Test each feature with real credentials
3. Check that emails arrive
4. Complete a test Stripe purchase (use test mode first!)

---

## 9. Troubleshooting

### Resend Issues

**"Email not received"**
- Check spam folder
- Verify `RESEND_API_KEY` is correct
- Check Resend dashboard for delivery logs
- Verify domain if sending to external addresses

**"Invalid API key"**
- Make sure key starts with `re_`
- Regenerate key if needed

### Stripe Issues

**"Invalid API key"**
- Make sure you're using the right environment (test vs live)
- Test keys start with `pk_test_` and `sk_test_`
- Live keys start with `pk_live_` and `sk_live_`

**"Checkout redirects back immediately"**
- Check browser console for errors
- Verify `STRIPE_SECRET_KEY` is set

### OAuth Issues

**"Redirect URI mismatch"**
- Exact match required including trailing slashes
- Add both `http://localhost:3000` and `https://hlpflrecords.com`
- Callback path: `/api/auth/callback/{provider}`

**"App not verified" (Google)**
- Add test users in Google Console
- Or complete Google app verification

**"Invalid client_id"**
- Double-check the client ID is copied correctly
- Make sure there are no extra spaces

### General Issues

**"Environment variable not found"**
- Restart dev server after changing `.env.local`
- Check spelling (exact match required)
- No spaces around `=` sign

**"Works locally but not in production"**
- Verify variables are added to Cloudflare
- Trigger a new deployment after adding variables
- Check that redirect URIs include production domain

---

## Quick Reference

### All Environment Variables

```bash
# Resend (Email)
RESEND_API_KEY=re_xxxx
ADMIN_EMAIL=submissions@hlpflrecords.com

# Stripe (Payments)
STRIPE_PUBLIC_KEY=pk_test_YOUR_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_KEY
STRIPE_WEBHOOK_SECRET=whsec_YOUR_KEY

# NextAuth
NEXTAUTH_URL=https://hlpflrecords.com
NEXTAUTH_SECRET=your-32-char-secret

# Google OAuth
GOOGLE_CLIENT_ID=xxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-xxxx

# Facebook OAuth
FACEBOOK_CLIENT_ID=xxxx
FACEBOOK_CLIENT_SECRET=xxxx

# Spotify OAuth
SPOTIFY_CLIENT_ID=xxxx
SPOTIFY_CLIENT_SECRET=xxxx

# Apple OAuth
APPLE_ID=com.hlpflrecords.web.signin
APPLE_SECRET=eyJxxx...
```

### Redirect URIs by Provider

| Provider | Local | Production |
|----------|-------|------------|
| Google | `http://localhost:3000/api/auth/callback/google` | `https://hlpflrecords.com/api/auth/callback/google` |
| Facebook | `http://localhost:3000/api/auth/callback/facebook` | `https://hlpflrecords.com/api/auth/callback/facebook` |
| Spotify | `http://localhost:3000/api/auth/callback/spotify` | `https://hlpflrecords.com/api/auth/callback/spotify` |
| Apple | `http://localhost:3000/api/auth/callback/apple` | `https://hlpflrecords.com/api/auth/callback/apple` |

---

## Need More Help?

- **New Features Guide**: See [NEW_FEATURES_GUIDE.md](./NEW_FEATURES_GUIDE.md)
- **Environment Variables**: See [ENVIRONMENT_VARIABLES_GUIDE.md](./ENVIRONMENT_VARIABLES_GUIDE.md)
- **Resend Docs**: [resend.com/docs](https://resend.com/docs)
- **Stripe Docs**: [stripe.com/docs](https://stripe.com/docs)
- **NextAuth Docs**: [next-auth.js.org](https://next-auth.js.org)
