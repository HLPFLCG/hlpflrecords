-- HLPFL Artist Portal Database Schema for Cloudflare D1
-- SQLite Database
-- Created: 2026-01-08

-- ============================================================================
-- USERS & AUTHENTICATION
-- ============================================================================

-- User profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK (role IN ('artist', 'admin', 'manager')),
  artist_name TEXT,
  display_name TEXT,
  bio TEXT,
  avatar_url TEXT,
  location TEXT,
  website TEXT,

  -- Social links
  spotify_url TEXT,
  apple_music_url TEXT,
  instagram_handle TEXT,
  twitter_handle TEXT,
  tiktok_handle TEXT,
  youtube_url TEXT,

  -- Settings
  email_notifications INTEGER DEFAULT 1,
  push_notifications INTEGER DEFAULT 1,
  theme TEXT DEFAULT 'dark',
  language TEXT DEFAULT 'en',
  timezone TEXT DEFAULT 'America/Los_Angeles',

  -- Metadata
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  last_login_at TEXT
);

CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_profiles_role ON profiles(role);

-- Sessions table
CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  token TEXT NOT NULL UNIQUE,
  expires_at TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_sessions_token ON sessions(token);
CREATE INDEX idx_sessions_user_id ON sessions(user_id);

-- ============================================================================
-- RELEASES MANAGEMENT
-- ============================================================================

CREATE TABLE IF NOT EXISTS releases (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  release_type TEXT NOT NULL CHECK (release_type IN ('album', 'ep', 'single')),
  release_date TEXT NOT NULL,
  cover_art_url TEXT,
  description TEXT,
  genre TEXT,

  -- Platform URLs
  spotify_url TEXT,
  apple_music_url TEXT,
  youtube_url TEXT,
  soundcloud_url TEXT,
  tidal_url TEXT,
  amazon_music_url TEXT,

  -- Stats
  total_streams INTEGER DEFAULT 0,
  total_listeners INTEGER DEFAULT 0,
  presaves INTEGER DEFAULT 0,

  -- Status
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'live', 'archived')),

  -- Metadata
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_releases_artist_id ON releases(artist_id);
CREATE INDEX idx_releases_status ON releases(status);
CREATE INDEX idx_releases_release_date ON releases(release_date);

-- Tracks table (for albums/EPs)
CREATE TABLE IF NOT EXISTS tracks (
  id TEXT PRIMARY KEY,
  release_id TEXT NOT NULL,
  title TEXT NOT NULL,
  track_number INTEGER NOT NULL,
  duration_seconds INTEGER,
  isrc TEXT,
  streams INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (release_id) REFERENCES releases(id) ON DELETE CASCADE
);

CREATE INDEX idx_tracks_release_id ON tracks(release_id);

-- ============================================================================
-- ANALYTICS
-- ============================================================================

CREATE TABLE IF NOT EXISTS analytics_streams (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,
  release_id TEXT,
  date TEXT NOT NULL,
  platform TEXT NOT NULL CHECK (platform IN ('spotify', 'apple_music', 'youtube', 'soundcloud', 'tidal', 'other')),
  streams INTEGER DEFAULT 0,
  listeners INTEGER DEFAULT 0,
  saves INTEGER DEFAULT 0,
  country_code TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE,
  FOREIGN KEY (release_id) REFERENCES releases(id) ON DELETE SET NULL
);

CREATE INDEX idx_analytics_artist_id ON analytics_streams(artist_id);
CREATE INDEX idx_analytics_release_id ON analytics_streams(release_id);
CREATE INDEX idx_analytics_date ON analytics_streams(date);
CREATE INDEX idx_analytics_platform ON analytics_streams(platform);

CREATE TABLE IF NOT EXISTS analytics_demographics (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,
  date TEXT NOT NULL,
  age_range TEXT NOT NULL,
  gender TEXT,
  country_code TEXT,
  listeners INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_demographics_artist_id ON analytics_demographics(artist_id);
CREATE INDEX idx_demographics_date ON analytics_demographics(date);

-- ============================================================================
-- REVENUE TRACKING
-- ============================================================================

CREATE TABLE IF NOT EXISTS revenue_streams (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,
  source TEXT NOT NULL CHECK (source IN ('streaming', 'merch', 'crowdfunding', 'licensing', 'email', 'other')),
  amount REAL NOT NULL,
  currency TEXT DEFAULT 'USD',
  date TEXT NOT NULL,
  description TEXT,
  metadata TEXT, -- JSON string for additional data
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_revenue_artist_id ON revenue_streams(artist_id);
CREATE INDEX idx_revenue_source ON revenue_streams(source);
CREATE INDEX idx_revenue_date ON revenue_streams(date);

CREATE TABLE IF NOT EXISTS payouts (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,
  amount REAL NOT NULL,
  currency TEXT DEFAULT 'USD',
  status TEXT NOT NULL CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
  method TEXT NOT NULL CHECK (method IN ('bank_transfer', 'paypal', 'stripe', 'wire_transfer')),
  scheduled_date TEXT,
  completed_date TEXT,
  description TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_payouts_artist_id ON payouts(artist_id);
CREATE INDEX idx_payouts_status ON payouts(status);

-- ============================================================================
-- MERCHANDISE
-- ============================================================================

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('tshirt', 'hoodie', 'vinyl', 'poster', 'accessory', 'other')),
  price REAL NOT NULL,
  description TEXT,
  images TEXT, -- JSON array of image URLs
  variants TEXT, -- JSON object for sizes/colors
  stock INTEGER DEFAULT 0,
  sales INTEGER DEFAULT 0,
  revenue REAL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'draft', 'sold_out', 'archived')),
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_products_artist_id ON products(artist_id);
CREATE INDEX idx_products_status ON products(status);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  customer_email TEXT NOT NULL,
  customer_name TEXT,
  total_amount REAL NOT NULL,
  currency TEXT DEFAULT 'USD',
  status TEXT NOT NULL CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
  items TEXT NOT NULL, -- JSON array of order items
  shipping_address TEXT, -- JSON object
  tracking_number TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_orders_customer_email ON orders(customer_email);
CREATE INDEX idx_orders_status ON orders(status);

-- ============================================================================
-- SOCIAL MEDIA
-- ============================================================================

CREATE TABLE IF NOT EXISTS social_accounts (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,
  platform TEXT NOT NULL CHECK (platform IN ('instagram', 'twitter', 'tiktok', 'facebook', 'youtube')),
  account_id TEXT NOT NULL,
  account_name TEXT,
  access_token TEXT,
  refresh_token TEXT,
  token_expires_at TEXT,
  connected_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE,
  UNIQUE(artist_id, platform)
);

CREATE INDEX idx_social_accounts_artist_id ON social_accounts(artist_id);

CREATE TABLE IF NOT EXISTS scheduled_posts (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,
  platforms TEXT NOT NULL, -- JSON array of platform names
  content TEXT NOT NULL,
  media_urls TEXT, -- JSON array of media URLs
  scheduled_time TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'scheduled' CHECK (status IN ('draft', 'scheduled', 'published', 'failed')),
  posted_at TEXT,
  metadata TEXT, -- JSON for post IDs on each platform
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_scheduled_posts_artist_id ON scheduled_posts(artist_id);
CREATE INDEX idx_scheduled_posts_status ON scheduled_posts(status);
CREATE INDEX idx_scheduled_posts_scheduled_time ON scheduled_posts(scheduled_time);

-- ============================================================================
-- COMMUNITY
-- ============================================================================

CREATE TABLE IF NOT EXISTS community_posts (
  id TEXT PRIMARY KEY,
  author_id TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('update', 'collaboration', 'milestone', 'question')),
  media_urls TEXT, -- JSON array
  likes INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  shares INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_community_posts_author_id ON community_posts(author_id);
CREATE INDEX idx_community_posts_category ON community_posts(category);
CREATE INDEX idx_community_posts_created_at ON community_posts(created_at);

CREATE TABLE IF NOT EXISTS community_comments (
  id TEXT PRIMARY KEY,
  post_id TEXT NOT NULL,
  author_id TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES community_posts(id) ON DELETE CASCADE,
  FOREIGN KEY (author_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_community_comments_post_id ON community_comments(post_id);

CREATE TABLE IF NOT EXISTS community_likes (
  post_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (post_id, user_id),
  FOREIGN KEY (post_id) REFERENCES community_posts(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE
);

-- ============================================================================
-- B-ROLL HUB
-- ============================================================================

CREATE TABLE IF NOT EXISTS broll_videos (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,
  title TEXT NOT NULL,
  file_url TEXT NOT NULL,
  thumbnail_url TEXT,
  duration_seconds INTEGER,
  file_size_mb REAL,
  category TEXT CHECK (category IN ('performance', 'bts', 'studio', 'lifestyle', 'other')),
  tags TEXT, -- JSON array
  views INTEGER DEFAULT 0,
  clips_created INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_broll_videos_artist_id ON broll_videos(artist_id);
CREATE INDEX idx_broll_videos_category ON broll_videos(category);

CREATE TABLE IF NOT EXISTS broll_clips (
  id TEXT PRIMARY KEY,
  video_id TEXT NOT NULL,
  artist_id TEXT NOT NULL,
  title TEXT NOT NULL,
  start_time_seconds INTEGER NOT NULL,
  end_time_seconds INTEGER NOT NULL,
  clip_url TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (video_id) REFERENCES broll_videos(id) ON DELETE CASCADE,
  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_broll_clips_video_id ON broll_clips(video_id);

-- ============================================================================
-- VIRAL BOOST CAMPAIGNS
-- ============================================================================

CREATE TABLE IF NOT EXISTS boost_campaigns (
  id TEXT PRIMARY KEY,
  creator_id TEXT NOT NULL,
  title TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('release', 'video', 'announcement', 'event')),
  platforms TEXT NOT NULL, -- JSON array
  launch_time TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'pending', 'active', 'completed', 'cancelled')),
  participants_count INTEGER DEFAULT 0,
  total_reach INTEGER DEFAULT 0,
  goal_reach INTEGER,
  description TEXT,
  post_template TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (creator_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_boost_campaigns_creator_id ON boost_campaigns(creator_id);
CREATE INDEX idx_boost_campaigns_status ON boost_campaigns(status);

CREATE TABLE IF NOT EXISTS boost_participants (
  campaign_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  joined_at TEXT DEFAULT CURRENT_TIMESTAMP,
  posted INTEGER DEFAULT 0,
  reach INTEGER DEFAULT 0,
  PRIMARY KEY (campaign_id, user_id),
  FOREIGN KEY (campaign_id) REFERENCES boost_campaigns(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE
);

-- ============================================================================
-- EMAIL MARKETING
-- ============================================================================

CREATE TABLE IF NOT EXISTS email_campaigns (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,
  name TEXT NOT NULL,
  subject TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'sent', 'cancelled')),
  recipients_count INTEGER DEFAULT 0,
  opens INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  scheduled_time TEXT,
  sent_at TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_email_campaigns_artist_id ON email_campaigns(artist_id);
CREATE INDEX idx_email_campaigns_status ON email_campaigns(status);

CREATE TABLE IF NOT EXISTS email_subscribers (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
  tags TEXT, -- JSON array
  subscribed_at TEXT DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at TEXT,
  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE,
  UNIQUE(artist_id, email)
);

CREATE INDEX idx_email_subscribers_artist_id ON email_subscribers(artist_id);
CREATE INDEX idx_email_subscribers_email ON email_subscribers(email);
CREATE INDEX idx_email_subscribers_status ON email_subscribers(status);

-- ============================================================================
-- NOTIFICATIONS
-- ============================================================================

CREATE TABLE IF NOT EXISTS notifications (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  action_url TEXT,
  read INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_read ON notifications(read);

-- ============================================================================
-- TRIGGERS FOR UPDATED_AT
-- ============================================================================

CREATE TRIGGER update_profiles_timestamp
  AFTER UPDATE ON profiles
  FOR EACH ROW
  BEGIN
    UPDATE profiles SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;

CREATE TRIGGER update_releases_timestamp
  AFTER UPDATE ON releases
  FOR EACH ROW
  BEGIN
    UPDATE releases SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;

CREATE TRIGGER update_products_timestamp
  AFTER UPDATE ON products
  FOR EACH ROW
  BEGIN
    UPDATE products SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;

CREATE TRIGGER update_orders_timestamp
  AFTER UPDATE ON orders
  FOR EACH ROW
  BEGIN
    UPDATE orders SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;

CREATE TRIGGER update_community_posts_timestamp
  AFTER UPDATE ON community_posts
  FOR EACH ROW
  BEGIN
    UPDATE community_posts SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;
