-- Add new artists to the database
-- Fill in the artist names and other details from Spotify

-- Artist 1: https://open.spotify.com/artist/4NU33b6SZRD7mGTUKFIicG
INSERT INTO profiles (
  id,
  email,
  role,
  artist_name,
  avatar_url,
  spotify_url,
  instagram_url,
  twitter_url,
  bio,
  created_at,
  updated_at
) VALUES (
  'artist-new-001',
  'artist1@hlpfl.org', -- Update with actual email
  'artist',
  'Artist Name 1', -- REPLACE: Get artist name from Spotify
  'https://i.scdn.co/image/XXXXX', -- REPLACE: Get profile image URL from Spotify
  'https://open.spotify.com/artist/4NU33b6SZRD7mGTUKFIicG',
  NULL, -- Add Instagram URL if available
  NULL, -- Add Twitter URL if available
  'Bio for artist 1', -- REPLACE: Add artist bio
  datetime('now'),
  datetime('now')
);

-- Artist 2: https://open.spotify.com/artist/0a8lHob1Gah0QmmzrWZoH5
INSERT INTO profiles (
  id,
  email,
  role,
  artist_name,
  avatar_url,
  spotify_url,
  instagram_url,
  twitter_url,
  bio,
  created_at,
  updated_at
) VALUES (
  'artist-new-002',
  'artist2@hlpfl.org', -- Update with actual email
  'artist',
  'Artist Name 2', -- REPLACE: Get artist name from Spotify
  'https://i.scdn.co/image/XXXXX', -- REPLACE: Get profile image URL from Spotify
  'https://open.spotify.com/artist/0a8lHob1Gah0QmmzrWZoH5',
  NULL, -- Add Instagram URL if available
  NULL, -- Add Twitter URL if available
  'Bio for artist 2', -- REPLACE: Add artist bio
  datetime('now'),
  datetime('now')
);

-- Note: To get artist details from Spotify:
-- 1. Open each Spotify URL in your browser
-- 2. Get the artist name from the page title
-- 3. Right-click the artist profile image and copy the image URL
-- 4. Copy any bio/description text
-- 5. Update the SQL statements above with the real data
-- 6. Run this SQL file against your D1 database:
--    wrangler d1 execute hlpfl-artist-portal --file=./database/add-new-artists.sql
