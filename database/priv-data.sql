-- ============================================================================
-- PRIV - Complete Artist Profile and Discography
-- ============================================================================
--
-- This file contains all information for artist Priv
-- Fill in the placeholders with actual data from Spotify
--
-- Instructions:
-- 1. Visit Priv's Spotify artist page
-- 2. Copy all release information (titles, dates, artwork URLs)
-- 3. Replace ALL_CAPS placeholders below
-- 4. Run: npx wrangler d1 execute hlpfl-artist-portal --file=database/priv-data.sql
-- ============================================================================

-- ============================================================================
-- ARTIST PROFILE
-- ============================================================================

UPDATE profiles
SET
    -- Basic Info
    artist_name = 'Priv',
    display_name = 'Priv',
    bio = 'PASTE_PRIV_BIO_HERE',

    -- Profile Images
    avatar_url = 'PASTE_PRIV_PROFILE_IMAGE_URL_HERE',

    -- Streaming Platforms
    spotify_url = 'PASTE_PRIV_SPOTIFY_ARTIST_URL_HERE',
    apple_music_url = 'PASTE_PRIV_APPLE_MUSIC_URL_HERE',
    youtube_url = 'PASTE_PRIV_YOUTUBE_CHANNEL_URL_HERE',
    soundcloud_url = 'PASTE_PRIV_SOUNDCLOUD_URL_HERE',
    tidal_url = 'PASTE_PRIV_TIDAL_URL_HERE',

    -- Social Media
    instagram_handle = '@PRIV_INSTAGRAM',
    twitter_handle = '@PRIV_TWITTER',
    tiktok_handle = '@PRIV_TIKTOK',

    -- Other Info
    location = 'CITY, STATE',
    website = 'https://PRIV_WEBSITE_URL'
WHERE id = 'artist-priv-001';

-- ============================================================================
-- RELEASES / DISCOGRAPHY
-- ============================================================================
-- Add all of Priv's releases below
-- Copy this template for each release

-- RELEASE 1
-- ----------------------------------------------------------------------------
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
    soundcloud_url,
    tidal_url,
    amazon_music_url,
    status,
    total_streams,
    total_listeners,
    presaves
) VALUES (
    'release-priv-001',
    'artist-priv-001',
    'RELEASE_TITLE_1',                    -- e.g., "Midnight Drive"
    'release-slug-1',                      -- e.g., "midnight-drive" (lowercase, hyphenated)
    'single',                              -- 'single', 'ep', or 'album'
    '2025-XX-XX',                          -- Release date (YYYY-MM-DD)
    'PASTE_ARTWORK_URL_1',                 -- Album artwork URL from Spotify
    'PASTE_DESCRIPTION_HERE',              -- Brief description of the release
    'Alternative/Indie',                   -- Genre(s)
    'PASTE_SPOTIFY_TRACK_URL_1',          -- Full Spotify track/album URL
    'PASTE_APPLE_MUSIC_URL_1',            -- Apple Music URL
    'PASTE_YOUTUBE_URL_1',                -- YouTube Music/Video URL
    'PASTE_SOUNDCLOUD_URL_1',             -- SoundCloud URL (if available)
    'PASTE_TIDAL_URL_1',                  -- Tidal URL (if available)
    'PASTE_AMAZON_MUSIC_URL_1',           -- Amazon Music URL (if available)
    'live',                                -- 'draft', 'scheduled', 'live', or 'archived'
    0,                                     -- Total streams (update with real number)
    0,                                     -- Total listeners (update with real number)
    0                                      -- Presaves (if applicable)
);

-- RELEASE 2
-- ----------------------------------------------------------------------------
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
    soundcloud_url,
    tidal_url,
    amazon_music_url,
    status,
    total_streams,
    total_listeners,
    presaves
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
    'PASTE_SOUNDCLOUD_URL_2',
    'PASTE_TIDAL_URL_2',
    'PASTE_AMAZON_MUSIC_URL_2',
    'live',
    0,
    0,
    0
);

-- RELEASE 3
-- ----------------------------------------------------------------------------
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
    soundcloud_url,
    tidal_url,
    amazon_music_url,
    status,
    total_streams,
    total_listeners,
    presaves
) VALUES (
    'release-priv-003',
    'artist-priv-001',
    'RELEASE_TITLE_3',
    'release-slug-3',
    'ep',
    '2026-XX-XX',
    'PASTE_ARTWORK_URL_3',
    'PASTE_DESCRIPTION_HERE',
    'Alternative/Indie',
    'PASTE_SPOTIFY_ALBUM_URL_3',
    'PASTE_APPLE_MUSIC_URL_3',
    'PASTE_YOUTUBE_URL_3',
    'PASTE_SOUNDCLOUD_URL_3',
    'PASTE_TIDAL_URL_3',
    'PASTE_AMAZON_MUSIC_URL_3',
    'scheduled',
    0,
    0,
    0
);

-- ADD MORE RELEASES HERE
-- Copy the template above and increment the ID: release-priv-004, release-priv-005, etc.

-- ============================================================================
-- TRACKS (Optional - for EPs and Albums)
-- ============================================================================
-- If adding an EP or Album, list individual tracks here

-- Example for EP/Album tracks:
/*
INSERT OR REPLACE INTO tracks (
    id,
    release_id,
    title,
    track_number,
    duration,
    isrc,
    spotify_url,
    apple_music_url
) VALUES
('track-priv-ep-001', 'release-priv-003', 'Track 1 Title', 1, 180, 'PASTE_ISRC', 'PASTE_SPOTIFY_URL', 'PASTE_APPLE_URL'),
('track-priv-ep-002', 'release-priv-003', 'Track 2 Title', 2, 195, 'PASTE_ISRC', 'PASTE_SPOTIFY_URL', 'PASTE_APPLE_URL'),
('track-priv-ep-003', 'release-priv-003', 'Track 3 Title', 3, 210, 'PASTE_ISRC', 'PASTE_SPOTIFY_URL', 'PASTE_APPLE_URL');
*/

-- ============================================================================
-- ANALYTICS DATA (Optional - for realistic dashboard)
-- ============================================================================
-- Add streaming analytics for the last 30 days

/*
INSERT OR REPLACE INTO analytics_streams (id, artist_id, release_id, date, platform, streams, listeners, saves, shares) VALUES
('analytics-priv-001', 'artist-priv-001', 'release-priv-001', '2026-01-08', 'spotify', 0, 0, 0, 0),
('analytics-priv-002', 'artist-priv-001', 'release-priv-001', '2026-01-07', 'spotify', 0, 0, 0, 0),
('analytics-priv-003', 'artist-priv-001', 'release-priv-002', '2026-01-08', 'spotify', 0, 0, 0, 0);
*/

-- ============================================================================
-- SOCIAL MEDIA ACCOUNTS (Optional)
-- ============================================================================

/*
INSERT OR REPLACE INTO social_accounts (
    id,
    artist_id,
    platform,
    username,
    url,
    followers,
    is_connected,
    access_token_expires
) VALUES
('social-priv-instagram', 'artist-priv-001', 'instagram', '@PRIV_INSTAGRAM', 'https://instagram.com/PRIV_INSTAGRAM', 0, 0, NULL),
('social-priv-twitter', 'artist-priv-001', 'twitter', '@PRIV_TWITTER', 'https://twitter.com/PRIV_TWITTER', 0, 0, NULL),
('social-priv-tiktok', 'artist-priv-001', 'tiktok', '@PRIV_TIKTOK', 'https://tiktok.com/@PRIV_TIKTOK', 0, 0, NULL);
*/

-- ============================================================================
-- NOTES
-- ============================================================================
--
-- How to get Spotify artwork URLs:
-- 1. Open Priv's Spotify page in browser
-- 2. Right-click album artwork → "Copy Image Address"
-- 3. URL format: https://i.scdn.co/image/ab67616d0000b273XXXXX
--
-- Slug naming convention:
-- - Lowercase only
-- - Replace spaces with hyphens
-- - Remove special characters
-- - Example: "Summer Vibes!" → "summer-vibes"
--
-- Release types:
-- - 'single' - 1-2 tracks
-- - 'ep' - 3-6 tracks
-- - 'album' - 7+ tracks
--
-- Status options:
-- - 'draft' - Not yet released, work in progress
-- - 'scheduled' - Release date set, waiting to go live
-- - 'live' - Currently released and available
-- - 'archived' - Older release, still available but not actively promoted
--
-- ============================================================================
