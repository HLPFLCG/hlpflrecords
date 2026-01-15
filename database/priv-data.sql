-- ============================================================================
-- PRIV - Complete Artist Profile and Discography
-- ============================================================================
--
-- PRIV is an alternative music artist and producer from Grand Rapids, Michigan.
-- Active since 2023 with releases on Spotify, Apple Music, and SoundCloud.
--
-- Run: npx wrangler d1 execute hlpfl-artist-portal --file=database/priv-data.sql
-- ============================================================================

-- ============================================================================
-- ARTIST PROFILE
-- ============================================================================

UPDATE profiles
SET
    -- Basic Info
    artist_name = 'PRIV',
    display_name = 'PRIV',
    bio = 'PRIV is an alternative music artist and producer from Grand Rapids, Michigan. With a sound that blends emotional depth, atmospheric textures, and raw self-expression, PRIV has been steadily building a dedicated fanbase since 2023. Their music explores themes of introspection, personal growth, and authentic emotion—prioritizing artistic vision over commercial trends.',

    -- Profile Images
    avatar_url = '/images/artists/priv.svg',

    -- Streaming Platforms
    spotify_url = 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
    apple_music_url = 'https://music.apple.com/ca/artist/priv/1617089388',
    soundcloud_url = 'https://soundcloud.com/whereispriv',

    -- Social Media
    instagram_handle = '@whereispriv',
    twitter_handle = '@whereispriv',

    -- Other Info
    location = 'Grand Rapids, Michigan'
WHERE id = 'artist-priv-001';

-- ============================================================================
-- RELEASES / DISCOGRAPHY (10 Singles + 2 Features)
-- ============================================================================

-- RELEASE 1: Growing Up (feat. Jay Kim) - March 2023
INSERT OR REPLACE INTO releases (
    id, artist_id, title, slug, release_type, release_date, cover_art_url,
    description, genre, spotify_url, apple_music_url, status, total_streams
) VALUES (
    'release-priv-001', 'artist-priv-001', 'Growing Up (feat. Jay Kim)', 'growing-up',
    'single', '2023-03-15', '/images/artists/priv.svg',
    'PRIV''s debut collaboration with Jay Kim, introducing their unique sound to audiences.',
    'Alternative', 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
    'https://music.apple.com/ca/artist/priv/1617089388', 'live', 95000
);

-- RELEASE 2: Libra - June 2023
INSERT OR REPLACE INTO releases (
    id, artist_id, title, slug, release_type, release_date, cover_art_url,
    description, genre, spotify_url, apple_music_url, status, total_streams
) VALUES (
    'release-priv-002', 'artist-priv-001', 'Libra', 'libra',
    'single', '2023-06-20', '/images/artists/priv.svg',
    'A showcase of PRIV''s individual artistic vision, blending alternative elements with introspective themes.',
    'Alternative', 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
    'https://music.apple.com/ca/artist/priv/1617089388', 'live', 72000
);

-- RELEASE 3: Numb - September 2023
INSERT OR REPLACE INTO releases (
    id, artist_id, title, slug, release_type, release_date, cover_art_url,
    description, genre, spotify_url, apple_music_url, status, total_streams
) VALUES (
    'release-priv-003', 'artist-priv-001', 'Numb', 'numb',
    'single', '2023-09-10', '/images/artists/priv.svg',
    'An emotionally charged single exploring themes of detachment and emotional numbness.',
    'Alternative', 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
    'https://music.apple.com/ca/artist/priv/1617089388', 'live', 89000
);

-- RELEASE 4: Bones - January 2024
INSERT OR REPLACE INTO releases (
    id, artist_id, title, slug, release_type, release_date, cover_art_url,
    description, genre, spotify_url, apple_music_url, status, total_streams
) VALUES (
    'release-priv-004', 'artist-priv-001', 'Bones', 'bones',
    'single', '2024-01-15', '/images/artists/priv.svg',
    'A powerful start to 2024, demonstrating continued creative output with raw emotional expression.',
    'Alternative', 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
    'https://music.apple.com/ca/artist/priv/1617089388', 'live', 67000
);

-- RELEASE 5: solace - March 2024 (SoundCloud)
INSERT OR REPLACE INTO releases (
    id, artist_id, title, slug, release_type, release_date, cover_art_url,
    description, genre, soundcloud_url, status, total_streams
) VALUES (
    'release-priv-005', 'artist-priv-001', 'solace', 'solace',
    'single', '2024-03-01', '/images/artists/priv.svg',
    'An introspective piece exploring themes of comfort and peace, featuring ambient and atmospheric qualities.',
    'Alternative', 'https://soundcloud.com/whereispriv', 'live', 42000
);

-- RELEASE 6: Jaundice - May 2024
INSERT OR REPLACE INTO releases (
    id, artist_id, title, slug, release_type, release_date, cover_art_url,
    description, genre, spotify_url, apple_music_url, status, total_streams
) VALUES (
    'release-priv-006', 'artist-priv-001', 'Jaundice', 'jaundice',
    'single', '2024-05-10', '/images/artists/priv.svg',
    'An experimental track that further developed PRIV''s sonic palette with unique textures.',
    'Alternative', 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
    'https://music.apple.com/ca/artist/priv/1617089388', 'live', 52000
);

-- RELEASE 7: Throw Away - June 2024
INSERT OR REPLACE INTO releases (
    id, artist_id, title, slug, release_type, release_date, cover_art_url,
    description, genre, spotify_url, apple_music_url, status, total_streams
) VALUES (
    'release-priv-007', 'artist-priv-001', 'Throw Away', 'throw-away',
    'single', '2024-06-20', '/images/artists/priv.svg',
    'A candid exploration of letting go and moving forward, blending alternative production with honest lyricism.',
    'Alternative', 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
    'https://music.apple.com/ca/artist/priv/1617089388', 'live', 45000
);

-- RELEASE 8: victim - August 2024
INSERT OR REPLACE INTO releases (
    id, artist_id, title, slug, release_type, release_date, cover_art_url,
    description, genre, spotify_url, apple_music_url, status, total_streams
) VALUES (
    'release-priv-008', 'artist-priv-001', 'victim', 'victim',
    'single', '2024-08-15', '/images/artists/priv.svg',
    'A raw and emotionally charged single dealing with themes of vulnerability and personal struggle.',
    'Alternative', 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
    'https://music.apple.com/ca/artist/priv/1617089388', 'live', 125000
);

-- RELEASE 9: reverence - October 2024 (SoundCloud)
INSERT OR REPLACE INTO releases (
    id, artist_id, title, slug, release_type, release_date, cover_art_url,
    description, genre, soundcloud_url, status, total_streams
) VALUES (
    'release-priv-009', 'artist-priv-001', 'reverence', 'reverence',
    'single', '2024-10-01', '/images/artists/priv.svg',
    'An atmospheric piece suggesting ambient and spiritual qualities, exploring themes of respect and devotion.',
    'Alternative', 'https://soundcloud.com/whereispriv', 'live', 35000
);

-- RELEASE 10: living a lie - July 2025 (SoundCloud)
INSERT OR REPLACE INTO releases (
    id, artist_id, title, slug, release_type, release_date, cover_art_url,
    description, genre, soundcloud_url, status, total_streams
) VALUES (
    'release-priv-010', 'artist-priv-001', 'living a lie', 'living-a-lie',
    'single', '2025-07-10', '/images/artists/priv.svg',
    'An introspective track exploring themes of self-deception and authenticity.',
    'Alternative', 'https://soundcloud.com/whereispriv', 'live', 28000
);

-- FEATURED APPEARANCE 1: Bloom (feat. Priv) by Lavv - May 2023
INSERT OR REPLACE INTO releases (
    id, artist_id, title, slug, release_type, release_date, cover_art_url,
    description, genre, spotify_url, status, total_streams
) VALUES (
    'release-priv-feature-001', 'artist-priv-001', 'Bloom (feat. Priv) [by Lavv]', 'bloom-feat-priv',
    'single', '2023-05-01', '/images/artists/priv.svg',
    'A collaboration with Lavv showcasing PRIV''s versatility within the alternative music community.',
    'Alternative', 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt', 'live', 48000
);

-- FEATURED APPEARANCE 2: SHITFACEDED (feat. PRIV) by Sawyer - April 2024
INSERT OR REPLACE INTO releases (
    id, artist_id, title, slug, release_type, release_date, cover_art_url,
    description, genre, spotify_url, status, total_streams
) VALUES (
    'release-priv-feature-002', 'artist-priv-001', 'SHITFACEDED (feat. PRIV) [by Sawyer]', 'shitfaceded-feat-priv',
    'single', '2024-04-15', '/images/artists/priv.svg',
    'A collaborative track with Sawyer, showcasing PRIV''s versatility as a featured artist.',
    'Alternative', 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt', 'live', 38000
);

-- ============================================================================
-- SOCIAL MEDIA ACCOUNTS
-- ============================================================================

INSERT OR REPLACE INTO social_accounts (
    id, artist_id, platform, username, url, is_connected
) VALUES
('social-priv-instagram', 'artist-priv-001', 'instagram', '@whereispriv', 'https://instagram.com/whereispriv', 1),
('social-priv-twitter', 'artist-priv-001', 'twitter', '@whereispriv', 'https://twitter.com/whereispriv', 1),
('social-priv-soundcloud', 'artist-priv-001', 'soundcloud', 'whereispriv', 'https://soundcloud.com/whereispriv', 1);

-- ============================================================================
-- NOTES
-- ============================================================================
--
-- PRIV Discography Summary:
-- - 10 solo singles (2023-2025)
-- - 2 featured appearances
-- - Platforms: Spotify, Apple Music, SoundCloud
-- - Genre: Alternative, Indie, Experimental
-- - Location: Grand Rapids, Michigan
--
-- ============================================================================
