-- HLPFL Artist Portal - Demo Data
-- Clean demo account setup

-- ============================================================================
-- CLEAR ALL EXISTING DATA
-- ============================================================================

DELETE FROM boost_participants;
DELETE FROM boost_campaigns;
DELETE FROM email_subscribers;
DELETE FROM email_campaigns;
DELETE FROM scheduled_posts;
DELETE FROM social_accounts;
DELETE FROM community_likes;
DELETE FROM community_comments;
DELETE FROM community_posts;
DELETE FROM broll_clips;
DELETE FROM broll_videos;
DELETE FROM orders;
DELETE FROM products;
DELETE FROM payouts;
DELETE FROM revenue_streams;
DELETE FROM analytics_demographics;
DELETE FROM analytics_streams;
DELETE FROM tracks;
DELETE FROM releases;
DELETE FROM notifications;
DELETE FROM sessions;
DELETE FROM profiles;

-- ============================================================================
-- DEMO ACCOUNT
-- ============================================================================

INSERT INTO profiles (id, email, role, artist_name, display_name, bio, spotify_url, instagram_handle, twitter_handle) VALUES
('demo-artist-001', 'demo@hlpfl.org', 'artist', 'Demo Artist', 'Demo Artist', 'Welcome to the HLPFL Records demo account. This showcases all platform features.', 'https://open.spotify.com/artist/demo', '@demoartist', '@demoartist');

-- ============================================================================
-- RELEASES
-- ============================================================================

INSERT INTO releases (id, artist_id, title, slug, release_type, release_date, status, total_streams, total_listeners, genre) VALUES
('release-001', 'demo-artist-001', 'First Light', 'first-light', 'single', '2025-10-15', 'live', 1250000, 85000, 'Alternative'),
('release-002', 'demo-artist-001', 'Midnight Run', 'midnight-run', 'single', '2025-12-01', 'live', 450000, 32000, 'Indie'),
('release-003', 'demo-artist-001', 'New Dawn EP', 'new-dawn-ep', 'ep', '2026-02-01', 'scheduled', 0, 0, 'Alternative');

-- ============================================================================
-- ANALYTICS - STREAMS
-- ============================================================================

INSERT INTO analytics_streams (id, artist_id, release_id, date, platform, streams, listeners, saves, country_code) VALUES
('stream-001', 'demo-artist-001', 'release-001', '2026-01-10', 'spotify', 28500, 4200, 850, 'US'),
('stream-002', 'demo-artist-001', 'release-001', '2026-01-09', 'spotify', 27200, 4100, 820, 'US'),
('stream-003', 'demo-artist-001', 'release-001', '2026-01-08', 'spotify', 26800, 3950, 790, 'US'),
('stream-004', 'demo-artist-001', 'release-002', '2026-01-10', 'spotify', 8500, 1800, 320, 'US'),
('stream-005', 'demo-artist-001', 'release-002', '2026-01-09', 'spotify', 8200, 1750, 300, 'US'),
('stream-006', 'demo-artist-001', 'release-001', '2026-01-10', 'apple_music', 12400, 2100, 420, 'US'),
('stream-007', 'demo-artist-001', 'release-001', '2026-01-10', 'youtube', 5200, 980, 180, 'US');

-- ============================================================================
-- ANALYTICS - DEMOGRAPHICS
-- ============================================================================

INSERT INTO analytics_demographics (id, artist_id, date, age_range, gender, country_code, listeners) VALUES
('demo-001', 'demo-artist-001', '2026-01-10', '18-24', 'male', 'US', 2800),
('demo-002', 'demo-artist-001', '2026-01-10', '18-24', 'female', 'US', 2400),
('demo-003', 'demo-artist-001', '2026-01-10', '25-34', 'male', 'US', 1900),
('demo-004', 'demo-artist-001', '2026-01-10', '25-34', 'female', 'GB', 1200),
('demo-005', 'demo-artist-001', '2026-01-10', '18-24', 'male', 'CA', 950);

-- ============================================================================
-- REVENUE
-- ============================================================================

INSERT INTO revenue_streams (id, artist_id, source, amount, date, description) VALUES
('rev-001', 'demo-artist-001', 'streaming', 2450.00, '2026-01-01', 'Spotify - December 2025'),
('rev-002', 'demo-artist-001', 'streaming', 980.00, '2026-01-01', 'Apple Music - December 2025'),
('rev-003', 'demo-artist-001', 'merch', 1850.00, '2026-01-05', 'T-shirt sales'),
('rev-004', 'demo-artist-001', 'crowdfunding', 1200.00, '2026-01-10', 'Fan support');

INSERT INTO payouts (id, artist_id, amount, status, method, scheduled_date) VALUES
('payout-001', 'demo-artist-001', 3430.00, 'pending', 'bank_transfer', '2026-01-15');

-- ============================================================================
-- PRODUCTS
-- ============================================================================

INSERT INTO products (id, artist_id, name, category, price, stock, sales, revenue, status) VALUES
('prod-001', 'demo-artist-001', 'Demo Artist T-Shirt', 'tshirt', 29.99, 150, 62, 1859.38, 'active'),
('prod-002', 'demo-artist-001', 'Logo Hoodie', 'hoodie', 54.99, 80, 34, 1869.66, 'active');

-- ============================================================================
-- COMMUNITY
-- ============================================================================

INSERT INTO community_posts (id, author_id, content, category, likes, comments_count, shares) VALUES
('post-001', 'demo-artist-001', 'Welcome to my artist page! Excited to share my journey with you all.', 'update', 45, 12, 5),
('post-002', 'demo-artist-001', 'First Light just hit 1 million streams! Thank you for all the support!', 'milestone', 128, 34, 28);

-- ============================================================================
-- EMAIL
-- ============================================================================

INSERT INTO email_campaigns (id, artist_id, name, subject, content, status, recipients_count, opens, clicks, sent_at) VALUES
('email-001', 'demo-artist-001', 'New Release Announcement', 'New Single Out Now!', 'Check out my latest single...', 'sent', 2500, 1200, 380, '2025-12-01');

INSERT INTO email_subscribers (id, artist_id, email, name, status) VALUES
('sub-001', 'demo-artist-001', 'fan1@example.com', 'Fan One', 'active'),
('sub-002', 'demo-artist-001', 'fan2@example.com', 'Fan Two', 'active'),
('sub-003', 'demo-artist-001', 'fan3@example.com', 'Fan Three', 'active');

-- ============================================================================
-- BOOST CAMPAIGNS
-- ============================================================================

INSERT INTO boost_campaigns (id, creator_id, title, content_type, platforms, launch_time, status, participants_count, total_reach, goal_reach) VALUES
('boost-001', 'demo-artist-001', 'New Dawn EP Launch', 'release', '["instagram","twitter"]', '2026-02-01T12:00:00Z', 'pending', 15, 0, 100000);

-- ============================================================================
-- SCHEDULED POSTS
-- ============================================================================

INSERT INTO scheduled_posts (id, artist_id, platforms, content, scheduled_time, status) VALUES
('social-001', 'demo-artist-001', '["instagram","twitter"]', 'New music coming soon! Stay tuned...', '2026-01-20T18:00:00Z', 'scheduled');
