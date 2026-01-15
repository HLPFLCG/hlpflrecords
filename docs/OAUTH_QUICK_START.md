# OAuth Quick Start Guide

> Get OAuth working in ~45 minutes. Follow these steps in order.

---

## Your Pre-Generated Secret

Copy this - you'll need it in Step 5:

```
NEXTAUTH_SECRET=hH5Fkchhgi3IM1qnyp32kADTOwrdkfhUZPaPB29lOe4=
```

---

## Step 1: Spotify OAuth (~5 minutes)

**This is the easiest one - start here.**

### 1.1 Go to Spotify Developer Dashboard
👉 https://developer.spotify.com/dashboard

### 1.2 Create an App
1. Click **"Create app"**
2. Fill in:
   - **App name**: `HLPFL Records`
   - **App description**: `Artist portal login`
   - **Website**: `https://hlpfl.org`
   - **Redirect URI**: `http://localhost:3000/api/auth/callback/spotify`
3. Check the box agreeing to terms
4. Click **"Save"**

### 1.3 Get Your Credentials
1. Click on your new app
2. Click **"Settings"**
3. You'll see:
   - **Client ID**: Copy this → `SPOTIFY_CLIENT_ID`
   - Click **"View client secret"** → Copy this → `SPOTIFY_CLIENT_SECRET`

### 1.4 Add Production Redirect URI
1. Still in Settings, scroll to **"Redirect URIs"**
2. Click **"Add URI"**
3. Add: `https://hlpfl.org/api/auth/callback/spotify`
4. Click **"Save"**

✅ **Spotify Done!** Write down your Client ID and Client Secret.

---

## Step 2: Google OAuth (~10 minutes)

### 2.1 Go to Google Cloud Console
👉 https://console.cloud.google.com/

### 2.2 Create a Project
1. Click the project dropdown (top left, next to "Google Cloud")
2. Click **"New Project"**
3. Name it: `HLPFL Records`
4. Click **"Create"**
5. Wait for it to create, then select it

### 2.3 Enable the Google+ API
1. Go to **APIs & Services** → **Library**
2. Search for **"Google+ API"**
3. Click on it and click **"Enable"**

### 2.4 Configure OAuth Consent Screen
1. Go to **APIs & Services** → **OAuth consent screen**
2. Select **"External"** → Click **"Create"**
3. Fill in:
   - **App name**: `HLPFL Records`
   - **User support email**: Your email
   - **Developer contact**: Your email
4. Click **"Save and Continue"**
5. **Scopes**: Just click **"Save and Continue"** (defaults are fine)
6. **Test users**: Click **"Save and Continue"**
7. Click **"Back to Dashboard"**

### 2.5 Create OAuth Credentials
1. Go to **APIs & Services** → **Credentials**
2. Click **"+ Create Credentials"** → **"OAuth client ID"**
3. Select **"Web application"**
4. Name it: `HLPFL Web Client`
5. Under **"Authorized JavaScript origins"**, add:
   ```
   http://localhost:3000
   https://hlpfl.org
   ```
6. Under **"Authorized redirect URIs"**, add:
   ```
   http://localhost:3000/api/auth/callback/google
   https://hlpfl.org/api/auth/callback/google
   ```
7. Click **"Create"**

### 2.6 Copy Your Credentials
A popup will show:
- **Client ID** → Copy this → `GOOGLE_CLIENT_ID`
- **Client Secret** → Copy this → `GOOGLE_CLIENT_SECRET`

✅ **Google Done!** Write down your Client ID and Client Secret.

---

## Step 3: Facebook OAuth (~10 minutes)

### 3.1 Go to Meta Developer Portal
👉 https://developers.facebook.com/

### 3.2 Create an App
1. Click **"My Apps"** (top right)
2. Click **"Create App"**
3. Select **"Consumer"** → Click **"Next"**
4. Fill in:
   - **App name**: `HLPFL Records`
   - **App contact email**: Your email
5. Click **"Create App"**

### 3.3 Set Up Facebook Login
1. In your app dashboard, find **"Facebook Login"**
2. Click **"Set Up"**
3. Select **"Web"**
4. Enter site URL: `https://hlpfl.org`
5. Click **"Save"** → **"Continue"**
6. Skip the remaining setup steps (click **"Next"** until done)

### 3.4 Configure OAuth Settings
1. In left sidebar: **Facebook Login** → **Settings**
2. Under **"Valid OAuth Redirect URIs"**, add:
   ```
   http://localhost:3000/api/auth/callback/facebook
   https://hlpfl.org/api/auth/callback/facebook
   ```
3. Click **"Save Changes"**

### 3.5 Get Your Credentials
1. In left sidebar: **Settings** → **Basic**
2. You'll see:
   - **App ID** → Copy this → `FACEBOOK_CLIENT_ID`
   - **App Secret** → Click **"Show"** → Copy this → `FACEBOOK_CLIENT_SECRET`

### 3.6 Go Live (Required for production)
1. At the top of the page, toggle **"App Mode"** from **"Development"** to **"Live"**
2. You may need to provide a Privacy Policy URL: `https://hlpfl.org/legal/privacy`

✅ **Facebook Done!** Write down your App ID and App Secret.

---

## Step 4: Apple Sign-In (~15 minutes) - ADVANCED

**Note**: Requires Apple Developer Program ($99/year). Skip this if you don't have it.

### 4.1 Go to Apple Developer Portal
👉 https://developer.apple.com/account/

### 4.2 Create an App ID
1. Go to **Certificates, Identifiers & Profiles**
2. Click **Identifiers** → **"+"** button
3. Select **"App IDs"** → **"Continue"**
4. Select **"App"** → **"Continue"**
5. Fill in:
   - **Description**: `HLPFL Records`
   - **Bundle ID**: `org.hlpfl.records` (Explicit)
6. Scroll down, check **"Sign In with Apple"**
7. Click **"Continue"** → **"Register"**

### 4.3 Create a Services ID
1. Click **Identifiers** → **"+"** button
2. Select **"Services IDs"** → **"Continue"**
3. Fill in:
   - **Description**: `HLPFL Records Web`
   - **Identifier**: `org.hlpfl.records.web`
4. Click **"Continue"** → **"Register"**

### 4.4 Configure the Services ID
1. Click on your new Services ID
2. Check **"Sign In with Apple"** → Click **"Configure"**
3. Fill in:
   - **Primary App ID**: Select `HLPFL Records`
   - **Domains**: `hlpfl.org`
   - **Return URLs**:
     ```
     http://localhost:3000/api/auth/callback/apple
     https://hlpfl.org/api/auth/callback/apple
     ```
4. Click **"Save"** → **"Continue"** → **"Save"**

Your **Services ID** (`org.hlpfl.records.web`) → `APPLE_ID`

### 4.5 Create a Private Key
1. Go to **Keys** → Click **"+"**
2. Fill in:
   - **Key Name**: `HLPFL Sign In Key`
3. Check **"Sign In with Apple"** → Click **"Configure"**
4. Select your App ID → Click **"Save"**
5. Click **"Continue"** → **"Register"**
6. **Download the key file** (you can only do this once!)
7. Note your **Key ID** (10 characters)

### 4.6 Generate Apple Client Secret

Run this in your terminal (replace the values):

```bash
# Install the package if needed
npm install -g apple-signin-auth

# Or use this Node.js script:
node -e "
const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('path/to/AuthKey_XXXXX.p8');
const teamId = 'YOUR_TEAM_ID';  // From Apple Developer account
const clientId = 'org.hlpfl.records.web';
const keyId = 'YOUR_KEY_ID';  // 10 character Key ID

const token = jwt.sign({}, privateKey, {
  algorithm: 'ES256',
  expiresIn: '180d',
  audience: 'https://appleid.apple.com',
  issuer: teamId,
  subject: clientId,
  keyid: keyId,
});

console.log('APPLE_SECRET=' + token);
"
```

**Note**: Apple secrets expire every 6 months. You'll need to regenerate.

✅ **Apple Done!** (or skipped)

---

## Step 5: Create Your .env.local File

Create a file called `.env.local` in your project root:

```bash
# In your hlpflrecords folder
touch .env.local
```

Copy this template and fill in your values:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=hH5Fkchhgi3IM1qnyp32kADTOwrdkfhUZPaPB29lOe4=

# Spotify OAuth
SPOTIFY_CLIENT_ID=paste_your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=paste_your_spotify_client_secret_here

# Google OAuth
GOOGLE_CLIENT_ID=paste_your_google_client_id_here
GOOGLE_CLIENT_SECRET=paste_your_google_client_secret_here

# Facebook OAuth
FACEBOOK_CLIENT_ID=paste_your_facebook_app_id_here
FACEBOOK_CLIENT_SECRET=paste_your_facebook_app_secret_here

# Apple Sign-In (optional)
APPLE_ID=org.hlpfl.records.web
APPLE_SECRET=paste_your_generated_apple_secret_here
```

---

## Step 6: Test Locally

### 6.1 Start the Development Server
```bash
npm run dev
```

### 6.2 Test Each Provider
1. Go to http://localhost:3000/artist-portal
2. Click each OAuth button:
   - **Spotify** - Should redirect to Spotify login
   - **Google** - Should redirect to Google login
   - **Facebook** - Should redirect to Facebook login
   - **Apple** - Should redirect to Apple login (if configured)
3. After logging in, you should be redirected to `/dashboard`

### 6.3 Troubleshooting Login Issues

**"redirect_uri_mismatch" error:**
- Make sure your redirect URIs exactly match in the provider settings
- For local: `http://localhost:3000/api/auth/callback/[provider]`
- Check for trailing slashes

**"invalid_client" error:**
- Double-check your Client ID and Secret
- Make sure you copied the full values

**Stuck on provider login page:**
- Check browser console for errors
- Verify your .env.local file has no typos

---

## Step 7: Deploy to Production

### Option A: Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com and import your repo
3. Add environment variables in Vercel dashboard:
   - Go to **Settings** → **Environment Variables**
   - Add each variable from your .env.local
   - Change `NEXTAUTH_URL` to `https://hlpfl.org`
4. Deploy!

### Option B: Deploy to Railway

1. Go to https://railway.app
2. Create new project from GitHub repo
3. Add environment variables in **Variables** tab
4. Deploy!

### Production Environment Variables

```env
NEXTAUTH_URL=https://hlpfl.org
NEXTAUTH_SECRET=hH5Fkchhgi3IM1qnyp32kADTOwrdkfhUZPaPB29lOe4=

SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

FACEBOOK_CLIENT_ID=your_facebook_app_id
FACEBOOK_CLIENT_SECRET=your_facebook_app_secret

APPLE_ID=org.hlpfl.records.web
APPLE_SECRET=your_apple_secret
```

---

## Quick Reference

### Redirect URIs to Add

| Provider | Local | Production |
|----------|-------|------------|
| Spotify | `http://localhost:3000/api/auth/callback/spotify` | `https://hlpfl.org/api/auth/callback/spotify` |
| Google | `http://localhost:3000/api/auth/callback/google` | `https://hlpfl.org/api/auth/callback/google` |
| Facebook | `http://localhost:3000/api/auth/callback/facebook` | `https://hlpfl.org/api/auth/callback/facebook` |
| Apple | `http://localhost:3000/api/auth/callback/apple` | `https://hlpfl.org/api/auth/callback/apple` |

### Developer Console Links

- **Spotify**: https://developer.spotify.com/dashboard
- **Google**: https://console.cloud.google.com/apis/credentials
- **Facebook**: https://developers.facebook.com/apps
- **Apple**: https://developer.apple.com/account/resources/identifiers

### Demo Credentials (Always Work)

If OAuth isn't set up, users can still log in with:
- **Email**: `demo@hlpfl.org`
- **Password**: `demo123`

---

## Checklist

- [ ] Spotify Client ID and Secret obtained
- [ ] Google Client ID and Secret obtained
- [ ] Facebook App ID and Secret obtained
- [ ] Apple Service ID and Secret generated (optional)
- [ ] `.env.local` file created with all values
- [ ] Local testing completed
- [ ] Production redirect URIs added to all providers
- [ ] Deployed to Vercel/Railway with environment variables

---

**Need help?** Email contact@hlpfl.org

*Last updated: January 2026*
