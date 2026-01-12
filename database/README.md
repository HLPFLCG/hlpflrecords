# Database Management Guide

## Quick Start

### Initialize Database

```bash
# Local database
npx wrangler d1 execute hlpfl-artist-portal --file=database/schema.sql
npx wrangler d1 execute hlpfl-artist-portal --file=database/seed.sql

# Remote/Production database
npx wrangler d1 execute hlpfl-artist-portal --remote --file=database/schema.sql
npx wrangler d1 execute hlpfl-artist-portal --remote --file=database/seed.sql
```

## Adding Artist Information and Album Artwork from Spotify

### Quick Reference - Artist Spotify Pages

- **PRIV**: https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt
- **Priv**: Use the Spotify URL you have
- **Pardyalone**: https://open.spotify.com/artist/6M4q5QWjmpjuPAi7LVFEFG

### Step 1: Get Spotify Image URLs

#### For PRIV
1. Visit: https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt
2. For each release (Switched Up, 221, Late Nights, etc.):
   - Right-click on the album artwork
   - Select **"Copy Image Address"** or **"Open Image in New Tab"**
   - The URL will look like: `https://i.scdn.co/image/ab67616d0000b273XXXXX`

#### For Priv (Complete Artist Profile)
1. Visit Priv's Spotify artist page
2. Use the dedicated template: `database/priv-data.sql`
3. This file includes:
   - Complete artist profile (bio, avatar, all social media)
   - All releases with full metadata
   - Streaming platform URLs
   - Analytics data templates
   - Individual track listings for EPs/albums
4. Fill in ALL placeholders in the file
5. Run: `npx wrangler d1 execute hlpfl-artist-portal --file=database/priv-data.sql`

#### For Pardyalone
1. Visit: https://open.spotify.com/artist/6M4q5QWjmpjuPAi7LVFEFG
2. Copy image URLs for all releases/albums
3. Note the release titles, dates, and track URLs

### Step 2: Update the SQL File

Edit `database/update-artwork.sql`:

```sql
-- Replace the placeholder text with actual URLs
UPDATE releases
SET cover_art_url = 'https://i.scdn.co/image/ab67616d0000b273ACTUAL_IMAGE_ID'
WHERE id = 'release-switched-up';
```

### Step 3: Run the Update

```bash
# Local database
npx wrangler d1 execute hlpfl-artist-portal --file=database/update-artwork.sql

# Remote database
npx wrangler d1 execute hlpfl-artist-portal --remote --file=database/update-artwork.sql
```

## Alternative: Using Spotify API

If you want to automate this process:

```javascript
// Example using Spotify Web API
const getArtistAlbums = async (artistId) => {
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/albums`,
    {
      headers: {
        'Authorization': `Bearer YOUR_SPOTIFY_TOKEN`
      }
    }
  );
  const data = await response.json();

  data.items.forEach(album => {
    console.log({
      name: album.name,
      artwork: album.images[0].url,  // 640x640
      releaseDate: album.release_date,
      spotifyUrl: album.external_urls.spotify
    });
  });
};

// PRIV
getArtistAlbums('0jIqPF7laDAaZmSeoSzLlt');

// Pardyalone
getArtistAlbums('6M4q5QWjmpjuPAi7LVFEFG');
```

## Database Files

- **schema.sql** - Complete database schema (25+ tables)
- **seed.sql** - Sample data for development
- **update-artwork.sql** - Quick template for adding album artwork URLs
- **priv-data.sql** - Comprehensive template for all Priv artist data (profile + discography)
- **README.md** - This file - database management guide

## Helpful Commands

```bash
# Query the database
npx wrangler d1 execute hlpfl-artist-portal --command "SELECT * FROM releases"

# Backup database
npx wrangler d1 export hlpfl-artist-portal --output backup.sql

# Check database info
npx wrangler d1 info hlpfl-artist-portal
```

## Spotify Resources

- [Pardyalone on Spotify](https://open.spotify.com/artist/6M4q5QWjmpjuPAi7LVFEFG)
- [Spotify for Artists](https://artists.spotify.com)
- [Spotify Album Artwork Downloader](https://spotisongdownloader.com/spotify-artwork-downloader/)
