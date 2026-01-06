# HLPFL Artist Portal - Database Setup Guide

This guide explains how to set up and populate the Cloudflare D1 database for the HLPFL Artist Portal.

## Database Overview

The HLPFL Artist Portal uses **Cloudflare D1** (SQLite) for data storage. The database handles:
- Artist profiles and authentication
- Music releases and analytics
- Social media scheduling
- Email campaigns and subscribers
- Crowdfunding campaigns
- Collaborations
- Merchandise management

## Prerequisites

- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed
- Cloudflare account with Pages access
- Database ID: `80d81b5f-61ae-4755-918e-7f6056ac25cb`

## Initial Setup

### 1. Install Wrangler (if not already installed)

```bash
npm install -g wrangler
```

### 2. Authenticate with Cloudflare

```bash
wrangler login
```

### 3. Create the Database (Already created - listed in wrangler.toml)

The database `hlpfl-artist-portal` is already configured in `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "hlpfl-artist-portal"
database_id = "80d81b5f-61ae-4755-918e-7f6056ac25cb"
```

### 4. Initialize the Database Schema

Run the schema file to create all tables:

```bash
wrangler d1 execute hlpfl-artist-portal --remote --file=./schema.sql
```

### 5. Populate with Seed Data

Add demo users and sample data:

```bash
wrangler d1 execute hlpfl-artist-portal --remote --file=./schema-seed.sql
```

## Demo Login Credentials

After seeding the database, you can login with these accounts:

### Demo Artist Account
- **Email:** `demo@hlpfl.org`
- **Password:** `demo123`
- **Role:** Artist
- Use this for general testing

### Alki Artist Account
- **Email:** `alki@hlpfl.org`
- **Password:** `alki123`
- **Role:** Artist
- Real artist profile with actual releases

### Admin Account
- **Email:** `admin@hlpfl.org`
- **Password:** `admin123`
- **Role:** Admin
- Full administrative access

## Database Management

### Query the Database

Execute SQL queries directly:

```bash
wrangler d1 execute hlpfl-artist-portal --command="SELECT * FROM profiles"
```

### Check Profiles

```bash
wrangler d1 execute hlpfl-artist-portal --command="SELECT id, email, artist_name, role FROM profiles"
```

### Check Releases

```bash
wrangler d1 execute hlpfl-artist-portal --command="SELECT id, title, artist_id, total_streams, status FROM releases"
```

### View Analytics

```bash
wrangler d1 execute hlpfl-artist-portal --command="SELECT * FROM analytics_streams ORDER BY date DESC LIMIT 10"
```

## Local Development

**Important:** Cloudflare Pages Functions (including authentication) only work when deployed to Cloudflare Pages. They do NOT work in local development with `npm run dev`.

To test authentication:
1. Deploy to Cloudflare Pages
2. Use the deployed URL
3. Login with one of the demo accounts above

## Deployment

The database is automatically available to your Cloudflare Pages deployment when you push code:

```bash
npm run build
git add -A
git commit -m "Your commit message"
git push
```

Cloudflare Pages will automatically deploy and connect to the D1 database.

## Database Schema

### Main Tables

1. **profiles** - Artist profiles and user accounts
2. **releases** - Music releases (albums, EPs, singles)
3. **analytics_streams** - Streaming analytics data
4. **social_posts** - Scheduled social media posts
5. **email_campaigns** - Email marketing campaigns
6. **email_subscribers** - Email list subscribers
7. **crowdfunding_campaigns** - Crowdfunding projects
8. **crowdfunding_backers** - Campaign supporters
9. **collaborations** - Artist collaboration projects
10. **collaboration_members** - Collaboration participants
11. **merch_products** - Merchandise items
12. **merch_orders** - Merchandise orders

## Troubleshooting

### "Database not found" Error

Make sure you're using the `--remote` flag:

```bash
wrangler d1 execute hlpfl-artist-portal --remote --file=./schema.sql
```

### Login Not Working

1. Ensure you've deployed to Cloudflare Pages (auth doesn't work locally)
2. Verify the database has been seeded with `schema-seed.sql`
3. Check Cloudflare Pages logs for errors:
   ```bash
   wrangler pages deployment tail
   ```

### Resetting the Database

To start fresh:

```bash
# Drop all tables (be careful!)
wrangler d1 execute hlpfl-artist-portal --remote --command="DROP TABLE IF EXISTS profiles; DROP TABLE IF EXISTS releases; DROP TABLE IF EXISTS analytics_streams; DROP TABLE IF EXISTS social_posts; DROP TABLE IF EXISTS email_campaigns; DROP TABLE IF EXISTS email_subscribers; DROP TABLE IF EXISTS crowdfunding_campaigns; DROP TABLE IF EXISTS crowdfunding_backers; DROP TABLE IF EXISTS collaborations; DROP TABLE IF EXISTS collaboration_members; DROP TABLE IF EXISTS merch_products; DROP TABLE IF EXISTS merch_orders;"

# Recreate schema
wrangler d1 execute hlpfl-artist-portal --remote --file=./schema.sql

# Add seed data
wrangler d1 execute hlpfl-artist-portal --remote --file=./schema-seed.sql
```

## Production Considerations

### Security

The demo accounts use hardcoded passwords in `functions/api/auth/login.js`. For production:

1. Add a `password_hash` column to the `profiles` table
2. Use bcrypt or similar for password hashing
3. Implement proper password reset functionality
4. Add rate limiting to prevent brute force attacks
5. Use environment secrets for sensitive data

### Future Enhancements

- [ ] Add password hashing with bcrypt
- [ ] Implement password reset flow
- [ ] Add email verification
- [ ] Implement 2FA (two-factor authentication)
- [ ] Add role-based access control (RBAC)
- [ ] Implement session expiry and refresh tokens
- [ ] Add audit logging for sensitive operations

## Support

For issues or questions:
- Email: contact@hlpfl.org
- GitHub Issues: [HLPFLCG/hlpflrecords](https://github.com/HLPFLCG/hlpflrecords/issues)

## License

Copyright © 2026 HLPFL Records. All rights reserved.
