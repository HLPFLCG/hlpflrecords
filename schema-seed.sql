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

-- Alki - Real Artist Profile
INSERT OR REPLACE INTO profiles (id, email, artist_name, display_name, role, bio, spotify_url, instagram_handle, twitter_handle, created_at, updated_at)
VALUES (
  'alki-artist-1',
  'alki@hlpfl.org',
  'Alki',
  'Alki',
  'artist',
  'Boundary-pushing artist creating the future of alternative music. Nearly 48,000 monthly listeners and millions of streams.',
  'https://open.spotify.com/artist/1Jof1vMpSF5pIWUvG9cizl',
  'alkiotis',
  'alkiotis',
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
  '221-single',
  'alki-artist-1',
  '221',
  '221-alki',
  'single',
  '2025-01-17',
  '/images/releases/221.png',
  'Angsty and punchy rap record that screams, "I hate you"',
  250000,
  45000,
  'released',
  'https://open.spotify.com/album/468FaHLWX75g0RJdoEUABD',
  'https://music.apple.com/album/221-single/1853361772',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

INSERT OR REPLACE INTO releases (id, artist_id, title, slug, release_type, release_date, cover_art_url, description, total_streams, total_listeners, status, spotify_url, created_at, updated_at)
VALUES (
  'switched-up-single',
  'alki-artist-1',
  'Switched Up',
  'switched-up-alki',
  'single',
  '2024-09-20',
  '/images/releases/switched-up.jpg',
  'Alki''s breakout hit with nearly 3 million streams.',
  2950000,
  890000,
  'released',
  'https://open.spotify.com/album/4EF7LaxKklISvrfAqVyWkl',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

-- =============================================================================
-- DEMO ANALYTICS
-- =============================================================================

INSERT OR REPLACE INTO analytics_streams (id, artist_id, release_id, date, platform, streams, listeners, saves, country_code, created_at)
VALUES
  ('analytics-1', 'alki-artist-1', '221-single', DATE('now', '-1 day'), 'spotify', 15420, 8932, 523, 'US', CURRENT_TIMESTAMP),
  ('analytics-2', 'alki-artist-1', '221-single', DATE('now', '-1 day'), 'apple_music', 5234, 3122, 189, 'US', CURRENT_TIMESTAMP),
  ('analytics-3', 'alki-artist-1', 'switched-up-single', DATE('now', '-1 day'), 'spotify', 28490, 18234, 1421, 'US', CURRENT_TIMESTAMP),
  ('analytics-4', 'demo-user-1', NULL, DATE('now', '-1 day'), 'spotify', 1200, 450, 23, 'US', CURRENT_TIMESTAMP);

-- =============================================================================
-- DEMO EMAIL SUBSCRIBERS
-- =============================================================================

INSERT OR REPLACE INTO email_subscribers (id, artist_id, email, first_name, last_name, status, subscribed_at, created_at)
VALUES
  ('sub-1', 'alki-artist-1', 'fan1@example.com', 'John', 'Doe', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('sub-2', 'alki-artist-1', 'fan2@example.com', 'Jane', 'Smith', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('sub-3', 'demo-user-1', 'testfan@example.com', 'Test', 'Fan', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- =============================================================================
-- DEMO SOCIAL POSTS
-- =============================================================================

INSERT OR REPLACE INTO social_posts (id, artist_id, content, platforms, scheduled_for, status, created_at, updated_at)
VALUES
  ('post-1', 'alki-artist-1', 'New single "221" out now! Stream everywhere 🔥', '["instagram", "twitter"]', DATETIME('now', '+1 day'), 'scheduled', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('post-2', 'demo-user-1', 'Testing the social scheduler!', '["instagram"]', DATETIME('now', '+2 days'), 'scheduled', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
