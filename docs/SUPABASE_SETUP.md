# Supabase Setup Guide for HLPFL Artist Portal

## Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works great!)
- Git installed

---

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create a new organization (if you don't have one)
4. Click "New Project"
   - **Project name**: hlpfl-artist-portal
   - **Database password**: (save this securely!)
   - **Region**: Choose closest to your users
5. Wait for project to provision (~2 minutes)

---

## Step 2: Get Your API Keys

1. In your Supabase project dashboard, click "Settings" (gear icon)
2. Click "API" in the sidebar
3. Copy these values:
   - **Project URL**
   - **anon/public key**
   - **service_role key** (keep this secret!)

---

## Step 3: Configure Environment Variables

Create or update `/home/user/hlpflrecords/.env.local`:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Existing Google Analytics (keep these)
NEXT_PUBLIC_GA_ID=G-7W14RQ0K9W
NEXT_PUBLIC_GTM_ID=GTM-WSPNJ5DR
```

**Important**: Never commit `.env.local` to git!

---

## Step 4: Install Dependencies

```bash
npm install @supabase/supabase-js
```

---

## Step 5: Run Database Migrations

### Option A: Using Supabase Dashboard (Easiest)

1. Go to your Supabase project
2. Click "SQL Editor" in sidebar
3. Click "New query"
4. Copy the entire content from `docs/SUPABASE_DATABASE_SCHEMA.md`
5. Paste into SQL Editor
6. Click "Run"
7. Verify tables were created in "Table Editor"

### Option B: Using Supabase CLI (Recommended for Production)

```bash
# Install Supabase CLI globally
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-id

# Push database schema
supabase db push
```

---

## Step 6: Set Up Storage Buckets

### Using Dashboard:

1. Go to "Storage" in Supabase dashboard
2. Create three buckets:
   - **audio** (private)
   - **cover-art** (public)
   - **merch** (public)

### Using SQL:

```sql
INSERT INTO storage.buckets (id, name, public)
VALUES
  ('audio', 'audio', false),
  ('cover-art', 'cover-art', true),
  ('merch', 'merch', true);
```

---

## Step 7: Enable Row Level Security

All tables already have RLS enabled in the schema. Verify by going to:
1. "Authentication" → "Policies"
2. You should see policies for each table

---

## Step 8: Enable Real-Time (Optional but Recommended)

For live updates on analytics and orders:

1. Go to "Database" → "Replication"
2. Enable replication for these tables:
   - `analytics_streams`
   - `social_posts`
   - `crowdfunding_backers`
   - `merch_orders`

---

## Step 9: Set Up Authentication

### Enable Email/Password Auth:

1. Go to "Authentication" → "Providers"
2. Enable "Email" provider
3. Configure email templates (optional):
   - Customize confirmation emails
   - Customize password reset emails

### Enable OAuth (Optional):

Enable these for social login:
- Google
- Facebook
- Twitter
- Spotify (great for music artists!)

---

## Step 10: Test the Connection

Create a test file `test-supabase.ts`:

```typescript
import { supabase } from '@/lib/supabase'

async function testConnection() {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .limit(1)

  if (error) {
    console.error('Connection failed:', error)
  } else {
    console.log('✅ Connected to Supabase!')
    console.log('Profiles:', data)
  }
}

testConnection()
```

Run: `npx ts-node test-supabase.ts`

---

## Step 11: Create Your First User

### Using Supabase Dashboard:

1. Go to "Authentication" → "Users"
2. Click "Add user"
3. Enter email and password
4. User will appear in `auth.users` table
5. Manually create a profile:

```sql
INSERT INTO profiles (id, email, artist_name, role)
VALUES (
  'user-uuid-from-auth-users',
  'artist@example.com',
  'Test Artist',
  'artist'
);
```

### Using Sign Up API:

```typescript
const { data, error } = await supabase.auth.signUp({
  email: 'artist@example.com',
  password: 'securepassword123',
  options: {
    data: {
      artist_name: 'Test Artist',
    },
  },
})
```

---

## Step 12: Update Artist Portal Pages

Now that the database is ready, update the pages to use real data:

### Example: Update `src/app/analytics/page.tsx`

Replace mock data with:

```typescript
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AnalyticsPage() {
  const [streams, setStreams] = useState([])

  useEffect(() => {
    async function fetchStreams() {
      const { data } = await supabase
        .from('analytics_streams')
        .select('*')
        .order('date', { ascending: false })
        .limit(30)

      setStreams(data || [])
    }

    fetchStreams()
  }, [])

  // Rest of component...
}
```

---

## Database Maintenance

### Backup Your Database:

```bash
supabase db dump > backup.sql
```

### Restore from Backup:

```bash
supabase db reset
psql $DATABASE_URL < backup.sql
```

### Generate TypeScript Types:

```bash
supabase gen types typescript --project-id your-project-id > src/types/database.ts
```

---

## Security Best Practices

✅ **DO**:
- Use Row Level Security (RLS) policies
- Validate all user input
- Use parameterized queries
- Keep service role key secret
- Enable MFA for Supabase account
- Regularly update dependencies

❌ **DON'T**:
- Expose service role key in client code
- Disable RLS without good reason
- Store sensitive data unencrypted
- Use same password for multiple services

---

## Common Issues & Solutions

### Issue: "Invalid API key"
**Solution**: Check `.env.local` file has correct keys and restart dev server

### Issue: "Row Level Security policy violation"
**Solution**: Make sure user is authenticated and RLS policies are correct

### Issue: "Failed to fetch"
**Solution**: Check Supabase URL is correct and project is active

### Issue: "Storage bucket not found"
**Solution**: Create storage buckets as described in Step 6

---

## Next Steps

1. ✅ Database schema created
2. ✅ Authentication set up
3. ✅ Storage buckets configured
4. ⏳ Replace mock data with Supabase queries
5. ⏳ Implement real-time subscriptions
6. ⏳ Add Spotify/YouTube API integrations
7. ⏳ Set up email service (Resend, SendGrid, etc.)
8. ⏳ Configure payment processing (Stripe)

---

## Resources

- [Supabase Docs](https://supabase.com/docs)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase CLI Reference](https://supabase.com/docs/reference/cli/introduction)

---

**You're all set!** 🎉

The database is ready to power the HLPFL Artist Portal. Start replacing mock data with real Supabase queries and watch your platform come to life!
