# Cloudflare Pages Functions Fix

## The Problem

Next.js with `output: 'export'` (static export) doesn't support API routes because there's no server runtime.

## The Solution

Use **Cloudflare Pages Functions** instead! These are serverless functions that run on Cloudflare's edge network.

## What I Fixed

Created Cloudflare Pages Functions in `/functions/` directory:
- `/functions/api/auth/login.js` - Login endpoint
- `/functions/api/auth/verify.js` - Session verification

## How It Works

Cloudflare Pages automatically deploys any `.js` or `.ts` files in the `/functions/` directory as serverless functions.

File structure:
```
/functions/api/auth/login.js  →  /api/auth/login
/functions/api/auth/verify.js →  /api/auth/verify
```

## Test the Login

1. **Rebuild and deploy**:
   ```bash
   npm run build
   git add -A
   git commit -m "Add Cloudflare Pages Functions for authentication"
   git push
   ```

2. **Wait 2-3 minutes** for Cloudflare to deploy

3. **Visit your site** and go to `/artist-portal`

4. **Login with**:
   - Email: `demo@hlpfl.org`
   - Password: `demo123`

## Local Development

To test Pages Functions locally, use Wrangler:

```bash
npx wrangler pages dev ./out
```

Then visit `http://localhost:8788/artist-portal`

## How Cloudflare Pages Functions Work

### Exports:
- `onRequestGet` - Handles GET requests
- `onRequestPost` - Handles POST requests
- `onRequestPut` - Handles PUT requests
- `onRequestDelete` - Handles DELETE requests
- `onRequest` - Handles all request methods

### Context Object:
```javascript
export async function onRequestPost(context) {
  const {
    request,    // Fetch API Request object
    env,        // Environment bindings (D1, KV, etc.)
    params,     // URL parameters
    data,       // Shared data between functions
  } = context
}
```

### Access D1 Database:
```javascript
export async function onRequestPost(context) {
  // Access your D1 database
  const result = await context.env.DB.prepare(
    'SELECT * FROM profiles WHERE email = ?'
  ).bind(email).first()
}
```

## Next Steps

Once deployed:
1. Test the login at `/artist-portal`
2. Verify you can access `/dashboard`
3. Check that sessions persist (cookies work)

## Connecting Real Database

To use the actual D1 database instead of demo login:

```javascript
// In /functions/api/auth/login.js
export async function onRequestPost(context) {
  const { email, password } = await context.request.json()

  // Query D1 database
  const user = await context.env.DB.prepare(
    'SELECT * FROM profiles WHERE email = ?'
  ).bind(email).first()

  if (user && await verifyPassword(password, user.password_hash)) {
    // Create session
    return new Response(JSON.stringify({ success: true, user }), {
      headers: {
        'Set-Cookie': `session=${token}; HttpOnly; Secure`
      }
    })
  }

  return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
    status: 401
  })
}
```

## Debugging

If login still doesn't work:

1. **Check Cloudflare deployment logs**:
   - Go to Cloudflare Dashboard
   - Navigate to Pages → your project
   - Check Functions tab

2. **Check browser console**:
   - Open DevTools (F12)
   - Go to Network tab
   - Try logging in
   - Check the `/api/auth/login` request

3. **Verify Functions deployed**:
   - Check if `/functions/` directory exists in your repo
   - Verify files are pushed to GitHub

## Why This Happens

Static export (`output: 'export'`) generates:
- ✅ HTML, CSS, JavaScript files
- ❌ No server-side API routes

Cloudflare Pages Functions provide:
- ✅ Serverless API endpoints
- ✅ Access to D1, KV, R2
- ✅ Edge computing (fast!)
- ✅ Automatic deployment

## Reference

- [Cloudflare Pages Functions Docs](https://developers.cloudflare.com/pages/platform/functions/)
- [D1 Database Bindings](https://developers.cloudflare.com/d1/platform/pages-functions-integration/)
