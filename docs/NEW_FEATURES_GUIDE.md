# New Features Guide

This guide explains the new features added to HLPFL Records: OAuth login, Stripe merch store, and the artist questionnaire email system.

---

## Overview

| Feature | Description | Location |
|---------|-------------|----------|
| **OAuth Login** | Sign in with Google, Facebook, Apple, or Spotify | `/artist-portal` |
| **Merch Store** | Shopping cart with Stripe checkout | `/merch` |
| **Artist Questionnaire** | 8-step form with email notifications | `/artist-questionnaire` |

---

## 1. Artist Portal OAuth Login

### What It Does

The Artist Portal now supports social login with four providers:
- **Google** - Sign in with your Google account
- **Facebook** - Sign in with Facebook
- **Apple** - Sign in with Apple ID
- **Spotify** - Sign in with your Spotify account (great for artists!)

### How It Works

**Without OAuth configured** (default):
- OAuth buttons show a message directing users to use email login
- Demo credentials work: `demo@hlpfl.org` / `demo123`
- Client-side authentication stores session in browser

**With OAuth configured** (see [API Setup Guide](./API_SETUP_GUIDE.md)):
- Clicking a provider redirects to their login page
- After authentication, users return to the dashboard
- Sessions are managed server-side

### Demo Login

For testing without OAuth setup:

| Field | Value |
|-------|-------|
| Email | `demo@hlpfl.org` |
| Password | `demo123` |

### Files Involved

```
src/
├── app/
│   └── artist-portal/
│       └── page.tsx        # Login page with OAuth buttons
└── lib/
    └── auth.ts             # NextAuth configuration
```

---

## 2. PRIV Merch Store

### What It Does

A fully functional e-commerce store for PRIV merchandise:
- Product catalog with 6 items
- Shopping cart with quantity controls
- Size and color selection
- Stripe Checkout integration

### Products Available

| Product | Price | Options |
|---------|-------|---------|
| PRIV Logo T-Shirt | $29.99 | Sizes: S-2XL, Colors: Black/White |
| Emerging Sounds Hoodie | $54.99 | Sizes: S-XL, Colors: Black/Navy |
| New Horizons EP Vinyl | $34.99 | - |
| PRIV Tour Poster | $19.99 | - |
| Limited Edition Cap | $24.99 | Colors: Black/Gold |
| Fan Bundle | $89.99 | Sizes: S-XL |

### How Shopping Works

1. **Browse Products** - View all merchandise at `/merch`
2. **Select Options** - Choose size/color if available
3. **Add to Cart** - Click "Add to Cart" button
4. **Review Cart** - Click cart icon (top right) to open sidebar
5. **Checkout** - Click "Checkout with Stripe"
6. **Payment** - Complete payment on Stripe's secure page
7. **Confirmation** - Redirected back with success message

### Cart Features

- **Quantity Controls** - Increase/decrease item quantities
- **Remove Items** - Click X to remove from cart
- **Running Total** - See subtotal before checkout
- **Persistent** - Cart survives page navigation (session-based)

### Checkout Flow

```
User clicks "Checkout with Stripe"
         ↓
POST /api/checkout (creates Stripe session)
         ↓
Redirect to Stripe Checkout page
         ↓
User completes payment
         ↓
Redirect to /merch?checkout=success
         ↓
Success message displayed
```

### Without Stripe Configured

If `STRIPE_SECRET_KEY` is not set:
- Checkout shows a demo success message
- No real payment is processed
- Good for testing the flow

### Files Involved

```
src/
├── app/
│   ├── merch/
│   │   └── page.tsx           # Store page with cart
│   └── api/
│       └── checkout/
│           └── route.ts       # Stripe checkout API
```

---

## 3. Artist Questionnaire

### What It Does

An 8-step onboarding questionnaire for prospective artists:
- Collects comprehensive information
- Validates required fields
- Sends formatted email to admin on submission
- Shows success/error feedback

### The 8 Steps

| Step | Title | What's Collected |
|------|-------|------------------|
| 1 | Basic Information | Name, email, phone, location |
| 2 | Business Entity | LLC status, EIN, formation details |
| 3 | Legal | Lawyer info, contracts, trademarks |
| 4 | Current Operations | Years active, revenue, team |
| 5 | Existing Deals | Distribution, publishing, sync, label |
| 6 | Music Catalog | Track counts, ownership status |
| 7 | Goals | Short/long term goals, support needed |
| 8 | Review & Submit | Review all answers, submit |

### Form Features

- **Progress Indicator** - Shows current step and completion
- **Back/Continue** - Navigate between steps
- **Validation** - Required fields checked before submission
- **Loading State** - Spinner shown during submission
- **Error Handling** - Clear error messages if submission fails

### Email Notification

When submitted, an email is sent containing:
- All form responses organized by section
- Artist contact information
- Timestamp of submission
- Beautiful HTML formatting

### Without Resend Configured

If `RESEND_API_KEY` is not set:
- Form submission still "succeeds"
- Data is logged to console
- No email is actually sent
- Good for testing the form flow

### Files Involved

```
src/
├── app/
│   ├── artist-questionnaire/
│   │   └── page.tsx           # 8-step form
│   └── api/
│       └── questionnaire/
│           └── route.ts       # Email submission API
```

---

## Quick Reference

### URLs

| Feature | URL |
|---------|-----|
| Artist Portal Login | `/artist-portal` |
| Dashboard (after login) | `/dashboard` |
| Merch Store | `/merch` |
| Artist Questionnaire | `/artist-questionnaire` |
| Submit Music (links to questionnaire) | `/submit-music` |

### Environment Variables Needed

| Variable | Service | Required For |
|----------|---------|--------------|
| `RESEND_API_KEY` | Resend | Questionnaire emails |
| `STRIPE_SECRET_KEY` | Stripe | Merch checkout |
| `GOOGLE_CLIENT_ID` | Google | OAuth login |
| `GOOGLE_CLIENT_SECRET` | Google | OAuth login |
| `FACEBOOK_CLIENT_ID` | Facebook | OAuth login |
| `FACEBOOK_CLIENT_SECRET` | Facebook | OAuth login |
| `SPOTIFY_CLIENT_ID` | Spotify | OAuth login |
| `SPOTIFY_CLIENT_SECRET` | Spotify | OAuth login |
| `APPLE_ID` | Apple | OAuth login |
| `APPLE_SECRET` | Apple | OAuth login |
| `NEXTAUTH_SECRET` | NextAuth | Session encryption |
| `NEXTAUTH_URL` | NextAuth | Callback URLs |

### Demo Credentials

For testing without full configuration:

- **Artist Portal**: `demo@hlpfl.org` / `demo123`
- **Merch Store**: Works without Stripe (mock checkout)
- **Questionnaire**: Works without Resend (logs to console)

---

## What's Next?

To fully enable these features in production:

1. **Read the [API Setup Guide](./API_SETUP_GUIDE.md)** for step-by-step instructions
2. **Configure environment variables** in Cloudflare Pages
3. **Test each feature** in production

---

## Need Help?

- **Setup Issues**: See [API Setup Guide](./API_SETUP_GUIDE.md)
- **Environment Variables**: See [Environment Variables Guide](./ENVIRONMENT_VARIABLES_GUIDE.md)
- **General Questions**: Contact support@hlpfl.org
