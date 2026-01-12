-- Update Album Artwork URLs from Spotify
-- Instructions: Replace the placeholder URLs with actual Spotify album artwork URLs
-- To get Spotify artwork URLs:
--   1. Visit the artist page on Spotify
--   2. Right-click on album artwork and "Copy Image Address"
--   3. Paste the URL below

-- ============================================================================
-- PRIV - Album Artwork (Primary Artist)
-- ============================================================================

-- "Emerging Sounds" single
UPDATE releases
SET cover_art_url = 'PASTE_EMERGING_SOUNDS_ARTWORK_URL_HERE'
WHERE id = 'release-emerging-sounds';

-- "Night Drive" single
UPDATE releases
SET cover_art_url = 'PASTE_NIGHT_DRIVE_ARTWORK_URL_HERE'
WHERE id = 'release-night-drive';

-- "City Lights" single
UPDATE releases
SET cover_art_url = 'PASTE_CITY_LIGHTS_ARTWORK_URL_HERE'
WHERE id = 'release-city-lights';

-- "New Horizons" single (upcoming)
UPDATE releases
SET cover_art_url = 'PASTE_NEW_HORIZONS_ARTWORK_URL_HERE'
WHERE id = 'release-new-horizons';

-- ============================================================================
-- PRIV - Complete Artist Information
-- Spotify Artist: PASTE_PRIV_SPOTIFY_ARTIST_URL_HERE
-- ============================================================================

-- Update Priv artist profile with complete information
UPDATE profiles
SET
    avatar_url = 'PASTE_PRIV_PROFILE_IMAGE_URL_HERE',
    bio = 'PASTE_PRIV_BIO_HERE',
    spotify_url = 'PASTE_PRIV_SPOTIFY_URL_HERE',
    apple_music_url = 'PASTE_PRIV_APPLE_MUSIC_URL_HERE',
    instagram_handle = '@PRIV_INSTAGRAM_HANDLE',
    twitter_handle = '@PRIV_TWITTER_HANDLE',
    tiktok_handle = '@PRIV_TIKTOK_HANDLE',
    youtube_url = 'PASTE_PRIV_YOUTUBE_URL_HERE'
WHERE id = 'artist-priv-001';

-- Add/Update Priv releases
-- Release 1
INSERT OR REPLACE INTO releases (
    id,
    artist_id,
    title,
    slug,
    release_type,
    release_date,
    cover_art_url,
    description,
    genre,
    spotify_url,
    apple_music_url,
    youtube_url,
    status,
    total_streams,
    total_listeners
) VALUES (
    'release-priv-001',
    'artist-priv-001',
    'RELEASE_TITLE_1',
    'release-slug-1',
    'single',  -- or 'ep' or 'album'
    '2025-XX-XX',
    'PASTE_ARTWORK_URL_1',
    'PASTE_DESCRIPTION_HERE',
    'Alternative/Indie',
    'PASTE_SPOTIFY_TRACK_URL_1',
    'PASTE_APPLE_MUSIC_URL_1',
    'PASTE_YOUTUBE_URL_1',
    'live',  -- or 'scheduled' or 'draft'
    0,  -- update with actual stream count
    0   -- update with actual listener count
);

-- Release 2
INSERT OR REPLACE INTO releases (
    id,
    artist_id,
    title,
    slug,
    release_type,
    release_date,
    cover_art_url,
    description,
    genre,
    spotify_url,
    apple_music_url,
    youtube_url,
    status,
    total_streams,
    total_listeners
) VALUES (
    'release-priv-002',
    'artist-priv-001',
    'RELEASE_TITLE_2',
    'release-slug-2',
    'single',
    '2025-XX-XX',
    'PASTE_ARTWORK_URL_2',
    'PASTE_DESCRIPTION_HERE',
    'Alternative/Indie',
    'PASTE_SPOTIFY_TRACK_URL_2',
    'PASTE_APPLE_MUSIC_URL_2',
    'PASTE_YOUTUBE_URL_2',
    'live',
    0,
    0
);

-- Release 3
INSERT OR REPLACE INTO releases (
    id,
    artist_id,
    title,
    slug,
    release_type,
    release_date,
    cover_art_url,
    description,
    genre,
    spotify_url,
    apple_music_url,
    youtube_url,
    status,
    total_streams,
    total_listeners
) VALUES (
    'release-priv-003',
    'artist-priv-001',
    'RELEASE_TITLE_3',
    'release-slug-3',
    'ep',
    '2025-XX-XX',
    'PASTE_ARTWORK_URL_3',
    'PASTE_DESCRIPTION_HERE',
    'Alternative/Indie',
    'PASTE_SPOTIFY_ALBUM_URL_3',
    'PASTE_APPLE_MUSIC_URL_3',
    'PASTE_YOUTUBE_URL_3',
    'live',
    0,
    0
);

-- Add more releases as needed by copying the template above
-- Just increment the ID: release-priv-004, release-priv-005, etc.

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
