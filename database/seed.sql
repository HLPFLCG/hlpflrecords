-- HLPFL Artist Portal - Seed Data
-- Sample data for development and testing

-- ============================================================================
-- SAMPLE ARTISTS
-- ============================================================================

INSERT OR IGNORE INTO profiles (id, email, role, artist_name, display_name, bio, spotify_url, instagram_handle, twitter_handle) VALUES
('artist-priv-001', 'priv@hlpflrecords.com', 'artist', 'PRIV', 'PRIV', 'Emerging artist bringing a fresh perspective to the alternative scene. Blending indie vibes with modern production.', 'https://open.spotify.com/artist/priv', '@privmusic', '@privmusic'),
('artist-pardyalone-001', 'pardyalone@hlpflrecords.com', 'artist', 'Pardyalone', 'Pardyalone', 'Independent artist with millions of streams worldwide.', '', '@pardyalone', '@pardyalone'),
('admin-001', 'admin@hlpflrecords.com', 'admin', NULL, 'HLPFL Admin', 'HLPFL Records Administration', NULL, NULL, NULL);

-- ============================================================================
-- SAMPLE RELEASES
-- ============================================================================

INSERT OR IGNORE INTO releases (id, artist_id, title, slug, release_type, release_date, status, total_streams, total_listeners, genre) VALUES
('release-emerging-sounds', 'artist-priv-001', 'Emerging Sounds', 'emerging-sounds', 'single', '2025-11-01', 'live', 2847392, 142380, 'Indie/Alternative'),
('release-night-drive', 'artist-priv-001', 'Night Drive', 'night-drive', 'single', '2025-12-15', 'live', 523789, 52380, 'Alternative'),
('release-city-lights', 'artist-priv-001', 'City Lights', 'city-lights', 'single', '2025-09-10', 'live', 287234, 38934, 'Indie'),
('release-new-horizons', 'artist-priv-001', 'New Horizons', 'new-horizons', 'single', '2026-02-14', 'scheduled', 0, 0, 'Alternative'),
('release-summer-ep', 'artist-priv-001', 'Summer Vibes EP', 'summer-vibes-ep', 'ep', '2026-03-01', 'draft', 0, 0, 'Indie/Alternative');

-- ============================================================================
-- SAMPLE ANALYTICS
-- ============================================================================

-- Last 30 days of streaming data for PRIV
INSERT OR IGNORE INTO analytics_streams (id, artist_id, release_id, date, platform, streams, listeners, saves, country_code) VALUES
('analytics-001', 'artist-priv-001', 'release-emerging-sounds', '2026-01-08', 'spotify', 45230, 8420, 1240, 'US'),
('analytics-002', 'artist-priv-001', 'release-emerging-sounds', '2026-01-07', 'spotify', 43180, 8240, 1180, 'US'),
('analytics-003', 'artist-priv-001', 'release-emerging-sounds', '2026-01-06', 'spotify', 42950, 8120, 1150, 'US'),
('analytics-004', 'artist-priv-001', 'release-night-drive', '2026-01-08', 'spotify', 12420, 3240, 520, 'US'),
('analytics-005', 'artist-priv-001', 'release-night-drive', '2026-01-07', 'spotify', 11890, 3120, 480, 'US'),
('analytics-006', 'artist-priv-001', 'release-emerging-sounds', '2026-01-08', 'apple_music', 18240, 2840, 620, 'US'),
('analytics-007', 'artist-priv-001', 'release-emerging-sounds', '2026-01-08', 'youtube', 8420, 1240, 280, 'US'),
('analytics-008', 'artist-priv-001', 'release-city-lights', '2026-01-08', 'spotify', 8920, 2180, 380, 'US'),
('analytics-009', 'artist-priv-001', 'release-city-lights', '2026-01-07', 'spotify', 8450, 2040, 350, 'US');

-- Analytics demographics
INSERT OR IGNORE INTO analytics_demographics (id, artist_id, date, age_range, gender, country_code, listeners) VALUES
('demo-001', 'artist-priv-001', '2026-01-08', '18-24', 'male', 'US', 4280),
('demo-002', 'artist-priv-001', '2026-01-08', '18-24', 'female', 'US', 3920),
('demo-003', 'artist-priv-001', '2026-01-08', '25-34', 'male', 'US', 2840),
('demo-004', 'artist-priv-001', '2026-01-08', '18-24', 'female', 'GB', 2420),
('demo-005', 'artist-priv-001', '2026-01-08', '25-34', 'male', 'CA', 1890),
('demo-006', 'artist-priv-001', '2026-01-08', '18-24', 'female', 'AU', 1240);

-- ============================================================================
-- SAMPLE REVENUE
-- ============================================================================

INSERT OR IGNORE INTO revenue_streams (id, artist_id, source, amount, date, description) VALUES
('revenue-001', 'artist-priv-001', 'streaming', 3830.50, '2026-01-01', 'Spotify streaming revenue - December 2025'),
('revenue-002', 'artist-priv-001', 'streaming', 1620.40, '2025-12-20', 'Apple Music streaming revenue - November 2025'),
('revenue-003', 'artist-priv-001', 'merch', 2540.00, '2026-01-05', 'T-shirt sales - 127 units'),
('revenue-004', 'artist-priv-001', 'merch', 1640.00, '2026-01-05', 'Hoodie sales - 54 units'),
('revenue-005', 'artist-priv-001', 'crowdfunding', 2840.80, '2026-01-10', 'Monthly fan support'),
('revenue-006', 'artist-priv-001', 'licensing', 1500.00, '2026-01-12', 'Podcast intro sync license');

INSERT OR IGNORE INTO payouts (id, artist_id, amount, status, method, scheduled_date) VALUES
('payout-001', 'artist-priv-001', 4830.20, 'pending', 'bank_transfer', '2026-01-15'),
('payout-002', 'artist-priv-001', 1980.40, 'pending', 'bank_transfer', '2026-01-20'),
('payout-003', 'artist-priv-001', 790.50, 'pending', 'bank_transfer', '2026-02-01');

-- ============================================================================
-- SAMPLE PRODUCTS
-- ============================================================================

INSERT OR IGNORE INTO products (id, artist_id, name, category, price, stock, sales, revenue, status) VALUES
('product-001', 'artist-priv-001', 'Emerging Sounds T-Shirt', 'tshirt', 29.99, 234, 127, 3808.73, 'active'),
('product-002', 'artist-priv-001', 'PRIV Logo Hoodie', 'hoodie', 54.99, 156, 78, 4289.22, 'active'),
('product-003', 'artist-priv-001', 'Night Drive Vinyl Record', 'vinyl', 34.99, 45, 52, 1819.48, 'active'),
('product-004', 'artist-priv-001', 'Limited Edition Poster Set', 'poster', 19.99, 89, 198, 3958.02, 'active');

-- ============================================================================
-- SAMPLE COMMUNITY POSTS
-- ============================================================================

INSERT OR IGNORE INTO community_posts (id, author_id, content, category, likes, comments_count, shares) VALUES
('post-001', 'artist-priv-001', 'Just finished recording my first EP! Can''t wait to share it with you all. Looking for feedback on the mix - anyone want to give it a listen?', 'update', 45, 12, 5),
('post-002', 'artist-priv-001', 'Huge milestone! "Emerging Sounds" just hit 2 million streams on Spotify. Thank you all for the incredible support!', 'milestone', 189, 54, 72),
('post-003', 'artist-pardyalone-001', 'Looking to collaborate with a producer for my next project. Anyone interested in working together?', 'collaboration', 78, 34, 12);

-- ============================================================================
-- SAMPLE EMAIL CAMPAIGNS
-- ============================================================================

INSERT OR IGNORE INTO email_campaigns (id, artist_id, name, subject, content, status, recipients_count, opens, clicks, sent_at) VALUES
('campaign-001', 'artist-priv-001', 'New Release: Night Drive', 'New Single "Night Drive" is Out Now!', 'Check out our latest single...', 'sent', 38420, 15368, 3842, '2025-12-15'),
('campaign-002', 'artist-priv-001', 'Behind the Scenes: Studio Session', 'Exclusive: See How We Made Our Latest Track', 'Go behind the scenes...', 'sent', 36280, 18140, 7252, '2025-12-28');

INSERT OR IGNORE INTO email_subscribers (id, artist_id, email, name, status) VALUES
('sub-001', 'artist-priv-001', 'fan1@example.com', 'John Doe', 'active'),
('sub-002', 'artist-priv-001', 'fan2@example.com', 'Jane Smith', 'active'),
('sub-003', 'artist-priv-001', 'fan3@example.com', 'Mike Johnson', 'active');

-- ============================================================================
-- SAMPLE BOOST CAMPAIGNS
-- ============================================================================

INSERT OR IGNORE INTO boost_campaigns (id, creator_id, title, content_type, platforms, launch_time, status, participants_count, total_reach, goal_reach) VALUES
('boost-001', 'artist-priv-001', 'New Horizons Release Boost', 'release', '["instagram","twitter","tiktok"]', '2026-02-14T12:00:00Z', 'pending', 38, 0, 400000),
('boost-002', 'artist-priv-001', 'Night Drive Viral Push', 'release', '["instagram","twitter"]', '2025-12-15T09:00:00Z', 'completed', 52, 218420, 180000);

-- ============================================================================
-- SAMPLE SCHEDULED SOCIAL POSTS
-- ============================================================================

INSERT OR IGNORE INTO scheduled_posts (id, artist_id, platforms, content, scheduled_time, status) VALUES
('social-post-001', 'artist-priv-001', '["instagram","twitter"]', 'New music dropping this Friday! Pre-save link in bio', '2026-02-10T18:00:00Z', 'scheduled'),
('social-post-002', 'artist-priv-001', '["instagram","tiktok"]', 'Behind the scenes from today''s studio session', '2026-01-09T15:00:00Z', 'scheduled');
