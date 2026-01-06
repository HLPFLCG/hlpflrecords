-- HLPFL Artist Portal - Database Verification Query
-- Run this to verify the database is properly seeded
-- Command: wrangler d1 execute hlpfl-artist-portal --remote --file=./verify-database.sql

-- =============================================================================
-- CHECK ALL PROFILES
-- =============================================================================
SELECT '=== ALL PROFILES ===' as section;
SELECT id, email, artist_name, display_name, role, created_at
FROM profiles
ORDER BY created_at DESC;

-- =============================================================================
-- CHECK SPECIFIC DEMO ACCOUNTS
-- =============================================================================
SELECT '=== DEMO ACCOUNT ===' as section;
SELECT * FROM profiles WHERE email = 'demo@hlpfl.org';

SELECT '=== ALKI ACCOUNT ===' as section;
SELECT * FROM profiles WHERE email = 'alki@hlpfl.org';

SELECT '=== ADMIN ACCOUNT ===' as section;
SELECT * FROM profiles WHERE email = 'admin@hlpfl.org';

-- =============================================================================
-- COUNT RECORDS IN EACH TABLE
-- =============================================================================
SELECT '=== TABLE COUNTS ===' as section;
SELECT 'profiles' as table_name, COUNT(*) as count FROM profiles
UNION ALL
SELECT 'releases' as table_name, COUNT(*) as count FROM releases
UNION ALL
SELECT 'analytics_streams' as table_name, COUNT(*) as count FROM analytics_streams
UNION ALL
SELECT 'email_subscribers' as table_name, COUNT(*) as count FROM email_subscribers
UNION ALL
SELECT 'social_posts' as table_name, COUNT(*) as count FROM social_posts;

-- =============================================================================
-- CHECK RELEASES
-- =============================================================================
SELECT '=== ALL RELEASES ===' as section;
SELECT id, artist_id, title, release_type, status, total_streams
FROM releases
ORDER BY release_date DESC;
