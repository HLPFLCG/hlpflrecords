-- HLPFL Artist Portal - Demo Data
-- Clean demo account setup for production database

-- ============================================================================
-- CLEAR ALL EXISTING DATA (run these first if needed)
-- ============================================================================
-- DELETE FROM boost_participants;
-- DELETE FROM boost_campaigns;
-- DELETE FROM email_subscribers;
-- DELETE FROM email_campaigns;
-- DELETE FROM scheduled_posts;
-- DELETE FROM social_accounts;
-- DELETE FROM community_likes;
-- DELETE FROM community_comments;
-- DELETE FROM community_posts;
-- DELETE FROM orders;
-- DELETE FROM products;
-- DELETE FROM payouts;
-- DELETE FROM revenue_streams;
-- DELETE FROM analytics_demographics;
-- DELETE FROM analytics_streams;
-- DELETE FROM tracks;
-- DELETE FROM releases;
-- DELETE FROM notifications;
-- DELETE FROM sessions;
-- DELETE FROM profiles;

-- ============================================================================
-- DEMO ACCOUNT
-- ============================================================================

INSERT INTO profiles (id, email, role, artist_name, display_name, bio) VALUES
('demo-artist-001', 'demo@hlpfl.org', 'artist', 'PRIV', 'PRIV', 'PRIV is an alternative music artist and producer from Grand Rapids, Michigan. With a sound that blends emotional depth, atmospheric textures, and raw self-expression, PRIV has been steadily building a dedicated fanbase since 2023.');

-- ============================================================================
-- RELEASES (Actual PRIV Discography)
-- ============================================================================

INSERT INTO releases (id, artist_id, title, slug, release_type, release_date, status, total_streams, total_listeners, genre) VALUES
('release-001', 'demo-artist-001', 'victim', 'victim', 'single', '2024-08-15', 'released', 125000, 45000, 'Alternative');

INSERT INTO releases (id, artist_id, title, slug, release_type, release_date, status, total_streams, total_listeners, genre) VALUES
('release-002', 'demo-artist-001', 'Numb', 'numb', 'single', '2023-09-10', 'released', 89000, 32000, 'Alternative');

INSERT INTO releases (id, artist_id, title, slug, release_type, release_date, status, total_streams, total_listeners, genre) VALUES
('release-003', 'demo-artist-001', 'Growing Up (feat. Jay Kim)', 'growing-up', 'single', '2023-03-15', 'released', 95000, 38000, 'Alternative');

-- ============================================================================
-- ANALYTICS - STREAMS
-- ============================================================================

INSERT INTO analytics_streams (id, artist_id, release_id, date, platform, streams, listeners, saves, country_code) VALUES
('stream-001', 'demo-artist-001', 'release-001', '2026-01-10', 'spotify', 28500, 4200, 850, 'US');

INSERT INTO analytics_streams (id, artist_id, release_id, date, platform, streams, listeners, saves, country_code) VALUES
('stream-002', 'demo-artist-001', 'release-001', '2026-01-09', 'spotify', 27200, 4100, 820, 'US');

INSERT INTO analytics_streams (id, artist_id, release_id, date, platform, streams, listeners, saves, country_code) VALUES
('stream-003', 'demo-artist-001', 'release-002', '2026-01-10', 'spotify', 8500, 1800, 320, 'US');

INSERT INTO analytics_streams (id, artist_id, release_id, date, platform, streams, listeners, saves, country_code) VALUES
('stream-004', 'demo-artist-001', 'release-001', '2026-01-10', 'apple_music', 12400, 2100, 420, 'US');

-- ============================================================================
-- ANALYTICS - DEMOGRAPHICS
-- ============================================================================

INSERT INTO analytics_demographics (id, artist_id, date, age_range, gender, country_code, listeners) VALUES
('demo-001', 'demo-artist-001', '2026-01-10', '18-24', 'male', 'US', 2800);

INSERT INTO analytics_demographics (id, artist_id, date, age_range, gender, country_code, listeners) VALUES
('demo-002', 'demo-artist-001', '2026-01-10', '18-24', 'female', 'US', 2400);

INSERT INTO analytics_demographics (id, artist_id, date, age_range, gender, country_code, listeners) VALUES
('demo-003', 'demo-artist-001', '2026-01-10', '25-34', 'male', 'US', 1900);

-- ============================================================================
-- REVENUE
-- ============================================================================

INSERT INTO revenue_streams (id, artist_id, source, amount, date, description) VALUES
('rev-001', 'demo-artist-001', 'streaming', 2450.00, '2026-01-01', 'Spotify - December 2025');

INSERT INTO revenue_streams (id, artist_id, source, amount, date, description) VALUES
('rev-002', 'demo-artist-001', 'streaming', 980.00, '2026-01-01', 'Apple Music - December 2025');

INSERT INTO revenue_streams (id, artist_id, source, amount, date, description) VALUES
('rev-003', 'demo-artist-001', 'merch', 1850.00, '2026-01-05', 'T-shirt sales');

INSERT INTO payouts (id, artist_id, amount, status, method, scheduled_date) VALUES
('payout-001', 'demo-artist-001', 3430.00, 'pending', 'bank_transfer', '2026-01-15');

-- ============================================================================
-- PRODUCTS
-- ============================================================================

INSERT INTO products (id, artist_id, name, category, price, stock, sales, revenue, status) VALUES
('prod-001', 'demo-artist-001', 'PRIV T-Shirt', 'tshirt', 29.99, 150, 62, 1859.38, 'active');

INSERT INTO products (id, artist_id, name, category, price, stock, sales, revenue, status) VALUES
('prod-002', 'demo-artist-001', 'Logo Hoodie', 'hoodie', 54.99, 80, 34, 1869.66, 'active');

-- ============================================================================
-- COMMUNITY
-- ============================================================================

INSERT INTO community_posts (id, author_id, content, category, likes, comments_count, shares) VALUES
('post-001', 'demo-artist-001', 'Welcome to my artist page! Excited to share my journey with you all. Grand Rapids to the world!', 'update', 45, 12, 5);

INSERT INTO community_posts (id, author_id, content, category, likes, comments_count, shares) VALUES
('post-002', 'demo-artist-001', '"victim" just hit 100K streams! Thank you for all the support!', 'milestone', 128, 34, 28);

-- ============================================================================
-- EMAIL (production schema)
-- ============================================================================

INSERT INTO email_campaigns (id, artist_id, name, subject, status, sent_at, html_content) VALUES
('email-001', 'demo-artist-001', 'New Release Announcement', 'New Single Out Now!', 'sent', '2025-12-01', '<p>Check out the new single!</p>');

INSERT INTO email_subscribers (id, artist_id, email, status) VALUES
('sub-001', 'demo-artist-001', 'fan1@example.com', 'active');
