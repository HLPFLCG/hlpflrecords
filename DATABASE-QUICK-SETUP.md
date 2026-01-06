# Database Quick Setup Guide

## 🚀 Quick Start (3 Commands)

### 1. Create the database schema
```bash
wrangler d1 execute hlpfl-artist-portal --remote --file=./schema.sql
```

### 2. Seed with demo data (includes demo, alki, admin accounts)
```bash
wrangler d1 execute hlpfl-artist-portal --remote --file=./schema-seed.sql
```

### 3. Verify the database is properly set up
```bash
wrangler d1 execute hlpfl-artist-portal --remote --file=./verify-database.sql
```

---

## 🔑 Demo Accounts

After seeding, these accounts will work:

1. **Demo Artist**
   - Email: `demo@hlpfl.org`
   - Password: `demo123`

2. **Alki (Real Artist)**
   - Email: `alki@hlpfl.org`
   - Password: `alki123`

3. **Admin**
   - Email: `admin@hlpfl.org`
   - Password: `admin123`

---

## ✅ Expected Results

When you run `verify-database.sql`, you should see:

- **3 profiles** (demo, alki, admin)
- **2 releases** (221, Switched Up)
- **4 analytics_streams** records
- **3 email_subscribers**
- **2 social_posts**

---

## 🔧 Troubleshooting

### Can't see any accounts?
The database hasn't been seeded yet. Run commands 1 and 2 above.

### Can't log in with demo account?
1. Make sure you're using lowercase: `demo@hlpfl.org`
2. Password is exactly: `demo123` (no spaces)
3. Check Cloudflare Pages logs for `[LOGIN]` debug messages

### Database already exists error?
This is normal! The schema uses `CREATE TABLE IF NOT EXISTS` and `INSERT OR REPLACE`, so it's safe to re-run.

---

## 📊 View Database in Cloudflare Dashboard

1. Go to https://dash.cloudflare.com
2. Select your account
3. Go to **Workers & Pages** > **D1**
4. Click on **hlpfl-artist-portal**
5. Use the **Console** tab to run queries

---

## 🔍 Manual Query to Check Accounts

```sql
SELECT email, artist_name, role FROM profiles;
```

This should return 3 rows if properly seeded.
