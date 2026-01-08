-- Update Album Artwork URLs from Spotify
-- Instructions: Replace the placeholder URLs with actual Spotify album artwork URLs
-- To get Spotify artwork URLs:
--   1. Visit the artist page on Spotify
--   2. Right-click on album artwork and "Copy Image Address"
--   3. Paste the URL below

-- ============================================================================
-- ALKI - Album Artwork
-- Spotify Artist: https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt
-- ============================================================================

-- "Switched Up" single
UPDATE releases
SET cover_art_url = 'PASTE_SWITCHED_UP_ARTWORK_URL_HERE'
WHERE id = 'release-switched-up';

-- "221" single
UPDATE releases
SET cover_art_url = 'PASTE_221_ARTWORK_URL_HERE'
WHERE id = 'release-221';

-- "Late Nights" single
UPDATE releases
SET cover_art_url = 'PASTE_LATE_NIGHTS_ARTWORK_URL_HERE'
WHERE id = 'release-late-nights';

-- "Midnight Dreams" single (upcoming)
UPDATE releases
SET cover_art_url = 'PASTE_MIDNIGHT_DREAMS_ARTWORK_URL_HERE'
WHERE id = 'release-midnight-dreams';

-- Update Alki artist profile avatar
UPDATE profiles
SET avatar_url = 'PASTE_ALKI_PROFILE_IMAGE_URL_HERE',
    spotify_url = 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt'
WHERE id = 'artist-alki-001';

-- ============================================================================
-- PARDYALONE - Album Artwork
-- Spotify Artist: https://open.spotify.com/artist/6M4q5QWjmpjuPAi7LVFEFG
-- ============================================================================

-- Add Pardyalone releases (customize with actual release data)
INSERT OR REPLACE INTO releases (id, artist_id, title, slug, release_type, release_date, cover_art_url, status, total_streams, total_listeners, genre, spotify_url) VALUES
('release-pardy-001', 'artist-pardyalone-001', 'RELEASE_TITLE_1', 'release-slug-1', 'single', '2025-XX-XX', 'PASTE_ARTWORK_URL_1', 'live', 0, 0, 'Alternative', 'PASTE_SPOTIFY_TRACK_URL_1'),
('release-pardy-002', 'artist-pardyalone-001', 'RELEASE_TITLE_2', 'release-slug-2', 'single', '2025-XX-XX', 'PASTE_ARTWORK_URL_2', 'live', 0, 0, 'Alternative', 'PASTE_SPOTIFY_TRACK_URL_2'),
('release-pardy-003', 'artist-pardyalone-001', 'RELEASE_TITLE_3', 'release-slug-3', 'album', '2025-XX-XX', 'PASTE_ARTWORK_URL_3', 'live', 0, 0, 'Alternative', 'PASTE_SPOTIFY_ALBUM_URL_3');

-- Update Pardyalone artist profile
UPDATE profiles
SET avatar_url = 'PASTE_PARDYALONE_PROFILE_IMAGE_URL_HERE',
    spotify_url = 'https://open.spotify.com/artist/6M4q5QWjmpjuPAi7LVFEFG'
WHERE id = 'artist-pardyalone-001';

-- ============================================================================
-- HOW TO GET SPOTIFY IMAGE URLS:
-- ============================================================================
--
-- Method 1: Right-click on Spotify Web Player
--   1. Open artist page in browser
--   2. Right-click on album artwork
--   3. Select "Copy Image Address" or "Open Image in New Tab"
--   4. The URL will look like: https://i.scdn.co/image/ab67616d0000b273XXXXX
--
-- Method 2: Use Spotify API (for developers)
--   - Get artist albums: GET /v1/artists/{id}/albums
--   - Album images are in the response: albums.items[].images[]
--
-- Method 3: Use third-party tools
--   - spotisongdownloader.com/spotify-artwork-downloader/
--   - albumcoverdownloader.com
--
-- ============================================================================

-- After updating the URLs above, run this file:
-- npx wrangler d1 execute hlpfl-artist-portal --file=database/update-artwork.sql
-- For remote: npx wrangler d1 execute hlpfl-artist-portal --remote --file=database/update-artwork.sql
