## 🚀 DEPLOY HLPFL TO CLOUDFLARE - QUICK START

### Step 1: Install Wrangler (Cloudflare CLI)

```bash
npm install -g wrangler

# Login to Cloudflare
wrangler login
```

This will open a browser window - click "Allow" to authorize.

---

### Step 2: Create D1 Database

```bash
# Create the database
wrangler d1 create hlpfl-artist-portal
```

**IMPORTANT**: Copy the `database_id` from the output!

It will look like:
```
✅ Successfully created DB 'hlpfl-artist-portal'
database_id = "abc123-def456-ghi789"
```

**Copy that ID** and paste it into `wrangler.toml` where it says:
```toml
database_id = "" # <-- PASTE HERE
```

---

### Step 3: Initialize Database with Schema

```bash
# Run the schema to create tables
wrangler d1 execute hlpfl-artist-portal --file=schema.sql
```

You should see:
```
✅ Executed 25 commands in 0.5 seconds
```

---

### Step 4: Verify Database

```bash
# Check tables were created
wrangler d1 execute hlpfl-artist-portal --command="SELECT name FROM sqlite_master WHERE type='table';"
```

You should see all the tables listed:
- profiles
- releases
- analytics_streams
- social_posts
- email_campaigns
- etc.

---

### Step 5: Deploy to Cloudflare Pages

Option A: **Push to GitHub** (Automatic Deploy)
```bash
git add -A
git commit -m "Switch to Cloudflare D1 database and deploy"
git push origin claude/ai-music-poetry-prompt-Swg7S
```

Cloudflare will automatically detect the push and deploy!

Option B: **Manual Deploy via Wrangler**
```bash
npm run build
wrangler pages deploy out --project-name=hlpflrecords
```

---

### Step 6: Link D1 Database to Pages Project

1. Go to Cloudflare Dashboard: https://dash.cloudflare.com
2. Click **Workers & Pages**
3. Click your **hlpflrecords** project
4. Go to **Settings** → **Functions**
5. Scroll to **D1 database bindings**
6. Click **Add binding**
   - Variable name: `DB`
   - D1 database: Select `hlpfl-artist-portal`
7. Click **Save**
8. Go to **Deployments** → Click **"..."** on latest → **Retry deployment**

---

### ✅ DONE!

Your site is now live with a working database!

Visit: `https://hlpflrecords.pages.dev` (or your custom domain)

---

### Verify It's Working

1. Go to your deployed site
2. Navigate to Artist Portal
3. Open browser console (F12)
4. You should see no database errors

---

### Troubleshooting

**"database_id is required"**
- Add the database_id to wrangler.toml (Step 2)

**"Binding DB not found"**
- Link D1 database in Cloudflare dashboard (Step 6)

**"Table doesn't exist"**
- Run the schema.sql file (Step 3)

---

### Next: Add Real Data

The database is initialized with demo data. To add your real artist profile:

```bash
wrangler d1 execute hlpfl-artist-portal --command="
  INSERT INTO profiles (id, email, artist_name, display_name, role)
  VALUES ('your-id', 'your@email.com', 'Your Name', 'Display Name', 'artist');
"
```

---

**That's it! Your artist portal is now LIVE with a real database!** 🎉
