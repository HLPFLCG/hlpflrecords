-- Add new HLPFL artists to the database
-- Artist profiles for Writ3rs Block and Adam Rodway

-- Artist 1: Writ3rs Block
-- Spotify: https://open.spotify.com/artist/4NU33b6SZRD7mGTUKFIicG
INSERT INTO profiles (
  id,
  email,
  role,
  artist_name,
  avatar_url,
  spotify_url,
  instagram_handle,
  twitter_handle,
  bio,
  created_at,
  updated_at
) VALUES (
  'artist-writ3rsblock-001',
  'writ3rsblockmusic@gmail.com',
  'artist',
  'Writ3rs Block',
  NULL, -- Add profile image URL from Spotify: Right-click artist image > Copy image address
  'https://open.spotify.com/artist/4NU33b6SZRD7mGTUKFIicG',
  'writ3rsblockmusic',
  NULL,
  'HLPFL Records artist bringing innovative sounds and creative vision.',
  datetime('now'),
  datetime('now')
);

-- Artist 2: Adam Rodway
-- Spotify: https://open.spotify.com/artist/0a8lHob1Gah0QmmzrWZoH5
INSERT INTO profiles (
  id,
  email,
  role,
  artist_name,
  avatar_url,
  spotify_url,
  instagram_handle,
  twitter_handle,
  bio,
  created_at,
  updated_at
) VALUES (
  'artist-adamrodway-001',
  'adamrodway@hlpfl.org', -- Update with actual email if provided
  'artist',
  'Adam Rodway',
  NULL, -- Add profile image URL from Spotify: Right-click artist image > Copy image address
  'https://open.spotify.com/artist/0a8lHob1Gah0QmmzrWZoH5',
  'adam.rodway',
  NULL,
  'HLPFL Records artist creating unique musical experiences.',
  datetime('now'),
  datetime('now')
);

-- Optional: Add sample analytics data for new artists
-- Uncomment and customize as needed

-- Writ3rs Block Analytics
-- INSERT INTO analytics_streams (id, artist_id, release_id, platform, date, streams, listeners, created_at)
-- VALUES
--   (lower(hex(randomblob(16))), 'artist-writ3rsblock-001', NULL, 'Spotify', date('now', '-7 days'), 1250, 980, datetime('now')),
--   (lower(hex(randomblob(16))), 'artist-writ3rsblock-001', NULL, 'Apple Music', date('now', '-7 days'), 450, 320, datetime('now'));

-- Adam Rodway Analytics
-- INSERT INTO analytics_streams (id, artist_id, release_id, platform, date, streams, listeners, created_at)
-- VALUES
--   (lower(hex(randomblob(16))), 'artist-adamrodway-001', NULL, 'Spotify', date('now', '-7 days'), 890, 670, datetime('now')),
--   (lower(hex(randomblob(16))), 'artist-adamrodway-001', NULL, 'Apple Music', date('now', '-7 days'), 320, 240, datetime('now'));

-- ============================================================================
-- INSTRUCTIONS TO COMPLETE SETUP:
-- ============================================================================
--
-- 1. GET PROFILE IMAGES:
--    - Open each artist's Spotify page in your browser
--    - Right-click on their profile image
--    - Select "Copy image address" or "Copy image URL"
--    - Update the avatar_url fields above with the copied URLs
--
-- 2. RUN THIS SQL FILE:
--    Local database:
--      wrangler d1 execute hlpfl-artist-portal --local --file=./database/add-new-artists.sql
--
--    Production database:
--      wrangler d1 execute hlpfl-artist-portal --file=./database/add-new-artists.sql
--
-- 3. ADD RELEASES (Optional):
--    You can add their releases using the dashboard at /dashboard/releases
--    or by creating additional SQL INSERT statements
--
-- 4. VERIFY:
--    Check the artists appear in your dashboard at /dashboard
--    View their profiles to ensure all data is correct
--
-- ============================================================================
