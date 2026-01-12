# Quick Guide: Adding Images from Spotify

## 🎯 Goal
Get all album artwork and artist photos displaying in the HLPFL Artist Portal.

## ✅ What's Already Done
- Database tables have `avatar_url` and `cover_art_url` columns
- SQL templates are ready to fill in
- API endpoints will serve images automatically once URLs are added
- Dashboard pages are ready to display images

## 📸 What You Need to Do

### Option 1: Quick Update (Album Artwork Only)
**Time**: ~15 minutes
**File**: `database/update-artwork.sql`

1. Open these Spotify pages:
   - PRIV: https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt
   - Pardyalone: https://open.spotify.com/artist/6M4q5QWjmpjuPAi7LVFEFG

2. For each release:
   - Right-click album artwork
   - Select "Copy Image Address"
   - Paste into `database/update-artwork.sql`

3. Run the update:
   ```bash
   npx wrangler d1 execute hlpfl-artist-portal --file=database/update-artwork.sql
   ```

### Option 2: Complete Profile (Priv)
**Time**: ~30 minutes
**File**: `database/priv-data.sql`

1. Visit Priv's Spotify page
2. Fill in ALL fields in `database/priv-data.sql`:
   - Artist bio and profile photo
   - Every release (title, date, artwork, URLs)
   - Social media handles
   - Streaming platform links

3. Run the update:
   ```bash
   npx wrangler d1 execute hlpfl-artist-portal --file=database/priv-data.sql
   ```

## 🔍 How to Get Image URLs

### Method 1: Right-Click (Easy)
1. Open Spotify in browser
2. Navigate to artist/release
3. Right-click on artwork
4. Select "Copy Image Address" or "Open Image in New Tab"
5. URL format: `https://i.scdn.co/image/ab67616d0000b273XXXXX`

### Method 2: Inspect Element (Detailed)
1. Open Spotify page
2. Right-click artwork → "Inspect"
3. Look for `<img src="...">`
4. Copy the full URL

### Method 3: Third-Party Tools
- https://spotisongdownloader.com/spotify-artwork-downloader/
- https://www.albumcoverdownloader.com/en

## 📝 Example: Updating One Release

**Before** (in update-artwork.sql):
```sql
UPDATE releases
SET cover_art_url = 'PASTE_SWITCHED_UP_ARTWORK_URL_HERE'
WHERE id = 'release-switched-up';
```

**After** (with real URL):
```sql
UPDATE releases
SET cover_art_url = 'https://i.scdn.co/image/ab67616d0000b273abc123def456...'
WHERE id = 'release-switched-up';
```

## 🎨 Where Images Appear

Once URLs are added to the database, images will automatically display in:

1. **Dashboard** - Artist avatar, recent releases
2. **Releases Page** - Album covers for all releases
3. **Analytics** - Release artwork with stats
4. **Merch Store** - Product images (if added)
5. **Community** - User avatars in posts
6. **Social Scheduler** - Preview images for posts

## 🔄 Image Display Flow

```
Spotify → Copy URL → database/*.sql → Run Wrangler → D1 Database
                                                            ↓
Dashboard Pages ← API Client ← Cloudflare Functions ← D1 Database
```

## ✨ Image Optimization

Images from Spotify CDN are already optimized:
- Different sizes available (640x640, 300x300, 64x64)
- Fast CDN delivery
- WebP support where available

Example URL patterns:
```
640x640: https://i.scdn.co/image/ab67616d0000b273XXXXX
300x300: https://i.scdn.co/image/ab67616d00001e02XXXXX
64x64:   https://i.scdn.co/image/ab67616d00004851XXXXX
```

For the database, use the **640x640** version (0000b273).

## 🚨 Common Issues

### Issue: "Images not showing"
**Solution**: Check in this order:
1. Did you run the SQL file? `npx wrangler d1 execute ...`
2. Is the URL correct? Should start with `https://i.scdn.co/image/`
3. Is the dashboard connected to API? Check API_INTEGRATION_GUIDE.md

### Issue: "Image is blurry"
**Solution**: Use the 640x640 version (0000b273 in URL)

### Issue: "Can't find the image on Spotify"
**Solution**:
- Make sure you're on the artist page, not search results
- Some releases may not have artwork yet
- Try opening in Spotify desktop app instead

## 📚 Related Documentation

- `database/README.md` - Full database management guide
- `database/update-artwork.sql` - Quick template for PRIV & Pardyalone
- `database/priv-data.sql` - Complete template for Priv
- `docs/API_INTEGRATION_GUIDE.md` - How to connect dashboard to database
- `VERIFICATION.md` - Complete status and checklist

## 🎯 Quick Start Command

```bash
# 1. Edit the SQL files with real Spotify URLs
# 2. Run this to update local database:
npx wrangler d1 execute hlpfl-artist-portal --file=database/update-artwork.sql

# 3. (Optional) Update production database:
export CLOUDFLARE_API_TOKEN="your_token"
npx wrangler d1 execute hlpfl-artist-portal --remote --file=database/update-artwork.sql
```

## ✅ Success Checklist

- [ ] Visited all 3 artist Spotify pages
- [ ] Copied all album artwork URLs
- [ ] Filled in `database/update-artwork.sql`
- [ ] Filled in `database/priv-data.sql` (for Priv complete profile)
- [ ] Ran wrangler command to update database
- [ ] Verified URLs in database: `npx wrangler d1 execute hlpfl-artist-portal --command "SELECT title, cover_art_url FROM releases LIMIT 5"`
- [ ] Dashboard pages show images (after API integration)

---

**Need help?** Check VERIFICATION.md for complete status or API_INTEGRATION_GUIDE.md for connecting to the database.
