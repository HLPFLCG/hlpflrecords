-- HLPFL Artist Portal - Seed Data
-- Sample data for development and testing

-- ============================================================================
-- SAMPLE ARTISTS
-- ============================================================================

INSERT OR IGNORE INTO profiles (id, email, role, artist_name, display_name, bio, spotify_url, instagram_handle, twitter_handle) VALUES
('artist-alki-001', 'alki@hlpflrecords.com', 'artist', 'Alki', 'Alki', 'Seattle-based artist blending punk energy with modern production. Known for raw, emotional tracks that speak to the soul.', 'https://open.spotify.com/artist/alki', '@alkimusic', '@alkimusic'),
('artist-priv-001', 'priv@hlpflrecords.com', 'artist', 'Priv', 'Priv', 'Emerging artist bringing a fresh perspective to the alternative scene.', '', '@privmusic', '@privmusic'),
('artist-pardyalone-001', 'pardyalone@hlpflrecords.com', 'artist', 'Pardyalone', 'Pardyalone', 'Independent artist with millions of streams worldwide.', '', '@pardyalone', '@pardyalone'),
('admin-001', 'admin@hlpflrecords.com', 'admin', NULL, 'HLPFL Admin', 'HLPFL Records Administration', NULL, NULL, NULL);

-- ============================================================================
-- SAMPLE RELEASES
-- ============================================================================

INSERT OR IGNORE INTO releases (id, artist_id, title, slug, release_type, release_date, status, total_streams, total_listeners, genre) VALUES
('release-switched-up', 'artist-alki-001', 'Switched Up', 'switched-up', 'single', '2025-11-01', 'live', 3247891, 156420, 'Alternative/Punk'),
('release-221', 'artist-alki-001', '221', '221', 'single', '2025-12-15', 'live', 423789, 42380, 'Punk/Alternative'),
('release-late-nights', 'artist-alki-001', 'Late Nights', 'late-nights', 'single', '2025-09-10', 'live', 187234, 28934, 'Alternative'),
('release-midnight-dreams', 'artist-alki-001', 'Midnight Dreams', 'midnight-dreams', 'single', '2026-02-14', 'scheduled', 0, 0, 'Alternative'),
('release-summer-ep', 'artist-priv-001', 'Summer Vibes EP', 'summer-vibes-ep', 'ep', '2026-03-01', 'draft', 0, 0, 'Indie/Alternative');

-- ============================================================================
-- SAMPLE ANALYTICS
-- ============================================================================

-- Last 30 days of streaming data for Alki
INSERT OR IGNORE INTO analytics_streams (id, artist_id, release_id, date, platform, streams, listeners) VALUES
('analytics-001', 'artist-alki-001', 'release-switched-up', '2026-01-08', 'spotify', 45230, 8420),
('analytics-002', 'artist-alki-001', 'release-switched-up', '2026-01-07', 'spotify', 43180, 8240),
('analytics-003', 'artist-alki-001', 'release-switched-up', '2026-01-06', 'spotify', 42950, 8120),
('analytics-004', 'artist-alki-001', 'release-221', '2026-01-08', 'spotify', 12420, 3240),
('analytics-005', 'artist-alki-001', 'release-221', '2026-01-07', 'spotify', 11890, 3120),
('analytics-006', 'artist-alki-001', 'release-switched-up', '2026-01-08', 'apple_music', 18240, 2840),
('analytics-007', 'artist-alki-001', 'release-switched-up', '2026-01-08', 'youtube', 8420, 1240);

-- ============================================================================
-- SAMPLE REVENUE
-- ============================================================================

INSERT OR IGNORE INTO revenue_streams (id, artist_id, source, amount, date, description) VALUES
('revenue-001', 'artist-alki-001', 'streaming', 4230.50, '2026-01-01', 'Spotify streaming revenue - December 2025'),
('revenue-002', 'artist-alki-001', 'streaming', 1820.40, '2025-12-20', 'Apple Music streaming revenue - November 2025'),
('revenue-003', 'artist-alki-001', 'merch', 2840.00, '2026-01-05', 'T-shirt sales - 142 units'),
('revenue-004', 'artist-alki-001', 'merch', 1740.00, '2026-01-05', 'Hoodie sales - 58 units'),
('revenue-005', 'artist-alki-001', 'crowdfunding', 3240.80, '2026-01-10', 'Monthly fan support'),
('revenue-006', 'artist-alki-001', 'licensing', 1200.00, '2026-01-12', 'TV Commercial sync license');

INSERT OR IGNORE INTO payouts (id, artist_id, amount, status, method, scheduled_date) VALUES
('payout-001', 'artist-alki-001', 5230.20, 'pending', 'bank_transfer', '2026-01-15'),
('payout-002', 'artist-alki-001', 2180.40, 'pending', 'bank_transfer', '2026-01-20'),
('payout-003', 'artist-alki-001', 890.50, 'pending', 'bank_transfer', '2026-02-01');

-- ============================================================================
-- SAMPLE PRODUCTS
-- ============================================================================

INSERT OR IGNORE INTO products (id, artist_id, name, category, price, stock, sales, revenue, status) VALUES
('product-001', 'artist-alki-001', '221 Album Cover T-Shirt', 'tshirt', 29.99, 234, 142, 4258.58, 'active'),
('product-002', 'artist-alki-001', 'HLPFL Records Hoodie', 'hoodie', 54.99, 156, 89, 4894.11, 'active'),
('product-003', 'artist-alki-001', 'Switched Up Vinyl Record', 'vinyl', 34.99, 45, 67, 2344.33, 'active'),
('product-004', 'artist-alki-001', 'Limited Edition Poster Set', 'poster', 19.99, 89, 234, 4677.66, 'active');

-- ============================================================================
-- SAMPLE COMMUNITY POSTS
-- ============================================================================

INSERT OR IGNORE INTO community_posts (id, author_id, content, category, likes, comments_count, shares) VALUES
('post-001', 'artist-priv-001', 'Just finished recording my first EP! Can''t wait to share it with you all. Looking for feedback on the mix - anyone want to give it a listen?', 'update', 45, 12, 5),
('post-002', 'artist-alki-001', 'Huge milestone! "Switched Up" just hit 3 million streams on Spotify. Thank you all for the incredible support! 🎉', 'milestone', 234, 67, 89),
('post-003', 'artist-pardyalone-001', 'Looking to collaborate with a producer for my next project. Anyone interested in working together?', 'collaboration', 78, 34, 12);

-- ============================================================================
-- SAMPLE EMAIL CAMPAIGNS
-- ============================================================================

INSERT OR IGNORE INTO email_campaigns (id, artist_id, name, subject, content, status, recipients_count, opens, clicks, sent_at) VALUES
('campaign-001', 'artist-alki-001', 'New Release: 221', '🎵 Our New Single "221" is Out Now!', 'Check out our latest single...', 'sent', 45231, 18492, 4523, '2025-12-15'),
('campaign-002', 'artist-alki-001', 'Behind the Scenes: Studio Session', '🎬 Exclusive: See How We Made Our Latest Track', 'Go behind the scenes...', 'sent', 42850, 21425, 8570, '2025-12-28');

INSERT OR IGNORE INTO email_subscribers (id, artist_id, email, name, status) VALUES
('sub-001', 'artist-alki-001', 'fan1@example.com', 'John Doe', 'active'),
('sub-002', 'artist-alki-001', 'fan2@example.com', 'Jane Smith', 'active'),
('sub-003', 'artist-alki-001', 'fan3@example.com', 'Mike Johnson', 'active');

-- ============================================================================
-- SAMPLE BOOST CAMPAIGNS
-- ============================================================================

INSERT OR IGNORE INTO boost_campaigns (id, creator_id, title, content_type, platforms, launch_time, status, participants_count, total_reach, goal_reach) VALUES
('boost-001', 'artist-alki-001', 'Midnight Dreams Release Boost', 'release', '["instagram","twitter","tiktok"]', '2026-02-14T12:00:00Z', 'pending', 42, 0, 500000),
('boost-002', 'artist-alki-001', '221 Viral Push', 'release', '["instagram","twitter"]', '2025-12-15T09:00:00Z', 'completed', 58, 247820, 200000);

-- ============================================================================
-- SAMPLE SCHEDULED SOCIAL POSTS
-- ============================================================================

INSERT OR IGNORE INTO scheduled_posts (id, artist_id, platforms, content, scheduled_time, status) VALUES
('social-post-001', 'artist-alki-001', '["instagram","twitter"]', 'New music dropping this Friday! Pre-save link in bio 🔥', '2026-02-10T18:00:00Z', 'scheduled'),
('social-post-002', 'artist-alki-001', '["instagram","tiktok"]', 'Behind the scenes from today''s studio session 🎙️', '2026-01-09T15:00:00Z', 'scheduled');
