-- HLPFL Artist Portal - Database Seed Data
-- Run this after creating the schema to populate with demo data
-- Created: 2026-01-06

-- =============================================================================
-- DEMO PROFILES
-- =============================================================================

-- Demo Artist Profile (for testing login)
INSERT OR REPLACE INTO profiles (id, email, artist_name, display_name, role, bio, spotify_url, instagram_handle, twitter_handle, created_at, updated_at)
VALUES (
  'demo-user-1',
  'demo@hlpfl.org',
  'Demo Artist',
  'Demo Artist',
  'artist',
  'Demo artist profile for testing the artist portal. Login with demo@hlpfl.org / demo123',
  'https://open.spotify.com/artist/demo',
  'demoartist',
  'demoartist',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

-- PRIV - Artist Profile
INSERT OR REPLACE INTO profiles (id, email, artist_name, display_name, role, bio, spotify_url, instagram_handle, twitter_handle, created_at, updated_at)
VALUES (
  'priv-artist-1',
  'priv@hlpfl.org',
  'PRIV',
  'PRIV',
  'artist',
  'Emerging artist bringing a fresh perspective to the alternative scene. Blending indie vibes with modern production.',
  'https://open.spotify.com/artist/priv',
  'privmusic',
  'privmusic',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

-- Admin Profile
INSERT OR REPLACE INTO profiles (id, email, artist_name, display_name, role, bio, created_at, updated_at)
VALUES (
  'admin-1',
  'admin@hlpfl.org',
  'Admin',
  'HLPFL Admin',
  'admin',
  'HLPFL Administrator',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

-- =============================================================================
-- DEMO RELEASES
-- =============================================================================

INSERT OR REPLACE INTO releases (id, artist_id, title, slug, release_type, release_date, cover_art_url, description, total_streams, total_listeners, status, spotify_url, apple_music_url, created_at, updated_at)
VALUES (
  'emerging-sounds-single',
  'priv-artist-1',
  'Emerging Sounds',
  'emerging-sounds-priv',
  'single',
  '2025-11-01',
  '/images/releases/emerging-sounds.png',
  'Fresh indie track blending modern production with authentic emotion',
  2847392,
  142380,
  'released',
  'https://open.spotify.com/album/priv-emerging-sounds',
  'https://music.apple.com/album/emerging-sounds',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

INSERT OR REPLACE INTO releases (id, artist_id, title, slug, release_type, release_date, cover_art_url, description, total_streams, total_listeners, status, spotify_url, created_at, updated_at)
VALUES (
  'night-drive-single',
  'priv-artist-1',
  'Night Drive',
  'night-drive-priv',
  'single',
  '2025-12-15',
  '/images/releases/night-drive.jpg',
  'PRIV''s atmospheric single exploring late night thoughts.',
  523789,
  52380,
  'released',
  'https://open.spotify.com/album/priv-night-drive',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

-- =============================================================================
-- DEMO ANALYTICS
-- =============================================================================

INSERT OR REPLACE INTO analytics_streams (id, artist_id, release_id, date, platform, streams, listeners, saves, country_code, created_at)
VALUES
  ('analytics-1', 'priv-artist-1', '221-single', DATE('now', '-1 day'), 'spotify', 15420, 8932, 523, 'US', CURRENT_TIMESTAMP),
  ('analytics-2', 'priv-artist-1', '221-single', DATE('now', '-1 day'), 'apple_music', 5234, 3122, 189, 'US', CURRENT_TIMESTAMP),
  ('analytics-3', 'priv-artist-1', 'switched-up-single', DATE('now', '-1 day'), 'spotify', 28490, 18234, 1421, 'US', CURRENT_TIMESTAMP),
  ('analytics-4', 'demo-user-1', NULL, DATE('now', '-1 day'), 'spotify', 1200, 450, 23, 'US', CURRENT_TIMESTAMP);

-- =============================================================================
-- DEMO EMAIL SUBSCRIBERS
-- =============================================================================

INSERT OR REPLACE INTO email_subscribers (id, artist_id, email, first_name, last_name, status, subscribed_at, created_at)
VALUES
  ('sub-1', 'priv-artist-1', 'fan1@example.com', 'John', 'Doe', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('sub-2', 'priv-artist-1', 'fan2@example.com', 'Jane', 'Smith', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('sub-3', 'demo-user-1', 'testfan@example.com', 'Test', 'Fan', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- =============================================================================
-- DEMO SOCIAL POSTS
-- =============================================================================

INSERT OR REPLACE INTO social_posts (id, artist_id, content, platforms, scheduled_for, status, created_at, updated_at)
VALUES
  ('post-1', 'priv-artist-1', 'New single "221" out now! Stream everywhere 🔥', '["instagram", "twitter"]', DATETIME('now', '+1 day'), 'scheduled', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('post-2', 'demo-user-1', 'Testing the social scheduler!', '["instagram"]', DATETIME('now', '+2 days'), 'scheduled', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
