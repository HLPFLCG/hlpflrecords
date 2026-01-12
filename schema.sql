-- HLPFL Artist Portal - Cloudflare D1 Database Schema
-- SQLite Database for Cloudflare D1
-- Created: 2026-01-06

-- =============================================================================
-- PROFILES TABLE
-- =============================================================================
CREATE TABLE profiles (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL DEFAULT 'artist' CHECK (role IN ('artist', 'admin', 'manager')),

  -- Profile Info
  artist_name TEXT,
  display_name TEXT,
  bio TEXT,
  avatar_url TEXT,

  -- Social Links
  spotify_url TEXT,
  instagram_handle TEXT,
  twitter_handle TEXT,

  -- Metadata
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_profiles_artist_name ON profiles(artist_name);

-- =============================================================================
-- RELEASES TABLE
-- =============================================================================
CREATE TABLE releases (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,

  -- Release Info
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  release_type TEXT NOT NULL CHECK (release_type IN ('album', 'ep', 'single')),
  release_date DATE NOT NULL,

  -- Metadata
  cover_art_url TEXT,
  description TEXT,
  genre TEXT,

  -- Distribution Links
  spotify_url TEXT,
  apple_music_url TEXT,
  youtube_url TEXT,

  -- Analytics
  total_streams INTEGER DEFAULT 0,
  total_listeners INTEGER DEFAULT 0,

  -- Status
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'released', 'archived')),

  -- Metadata
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_releases_artist_id ON releases(artist_id);
CREATE INDEX idx_releases_slug ON releases(slug);
CREATE INDEX idx_releases_status ON releases(status);

-- =============================================================================
-- ANALYTICS STREAMS TABLE
-- =============================================================================
CREATE TABLE analytics_streams (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,
  release_id TEXT,

  -- Date
  date DATE NOT NULL,

  -- Platform
  platform TEXT NOT NULL CHECK (platform IN ('spotify', 'apple_music', 'youtube', 'soundcloud', 'other')),

  -- Metrics
  streams INTEGER DEFAULT 0,
  listeners INTEGER DEFAULT 0,
  saves INTEGER DEFAULT 0,

  -- Geography
  country_code TEXT,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE,
  FOREIGN KEY (release_id) REFERENCES releases(id) ON DELETE CASCADE,

  UNIQUE(artist_id, release_id, date, platform, country_code)
);

CREATE INDEX idx_analytics_artist_date ON analytics_streams(artist_id, date);
CREATE INDEX idx_analytics_platform ON analytics_streams(platform);

-- =============================================================================
-- SOCIAL POSTS TABLE
-- =============================================================================
CREATE TABLE social_posts (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,

  -- Content
  content TEXT NOT NULL,
  media_urls TEXT, -- JSON array stored as text
  platforms TEXT NOT NULL, -- JSON array stored as text

  -- Scheduling
  scheduled_for DATETIME NOT NULL,
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('draft', 'scheduled', 'posted', 'failed', 'cancelled')),

  -- Results
  posted_at DATETIME,
  engagement TEXT, -- JSON object stored as text

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_social_posts_artist_id ON social_posts(artist_id);
CREATE INDEX idx_social_posts_scheduled_for ON social_posts(scheduled_for);
CREATE INDEX idx_social_posts_status ON social_posts(status);

-- =============================================================================
-- EMAIL CAMPAIGNS TABLE
-- =============================================================================
CREATE TABLE email_campaigns (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,

  -- Campaign Info
  name TEXT NOT NULL,
  subject TEXT NOT NULL,
  html_content TEXT NOT NULL,

  -- Scheduling
  scheduled_for DATETIME,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'sending', 'sent', 'failed')),

  -- Results
  sent_at DATETIME,
  sent_count INTEGER DEFAULT 0,
  opened_count INTEGER DEFAULT 0,
  clicked_count INTEGER DEFAULT 0,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_email_campaigns_artist_id ON email_campaigns(artist_id);
CREATE INDEX idx_email_campaigns_status ON email_campaigns(status);

-- =============================================================================
-- EMAIL SUBSCRIBERS TABLE
-- =============================================================================
CREATE TABLE email_subscribers (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,

  -- Subscriber Info
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,

  -- Status
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),

  -- Engagement
  subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  last_opened_at DATETIME,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE,
  UNIQUE(artist_id, email)
);

CREATE INDEX idx_email_subscribers_artist_id ON email_subscribers(artist_id);
CREATE INDEX idx_email_subscribers_email ON email_subscribers(email);

-- =============================================================================
-- CROWDFUNDING CAMPAIGNS TABLE
-- =============================================================================
CREATE TABLE crowdfunding_campaigns (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,

  -- Campaign Info
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  goal_amount REAL NOT NULL,

  -- Timeline
  start_date DATETIME NOT NULL,
  end_date DATETIME NOT NULL,

  -- Status
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'funded', 'ended', 'cancelled')),

  -- Results
  total_raised REAL DEFAULT 0,
  backer_count INTEGER DEFAULT 0,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_crowdfunding_campaigns_artist_id ON crowdfunding_campaigns(artist_id);
CREATE INDEX idx_crowdfunding_campaigns_status ON crowdfunding_campaigns(status);

-- =============================================================================
-- CROWDFUNDING BACKERS TABLE
-- =============================================================================
CREATE TABLE crowdfunding_backers (
  id TEXT PRIMARY KEY,
  campaign_id TEXT NOT NULL,

  -- Backer Info
  name TEXT,
  email TEXT NOT NULL,

  -- Contribution
  amount REAL NOT NULL,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),

  -- Privacy
  anonymous INTEGER DEFAULT 0, -- SQLite uses 0/1 for boolean

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (campaign_id) REFERENCES crowdfunding_campaigns(id) ON DELETE CASCADE
);

CREATE INDEX idx_crowdfunding_backers_campaign_id ON crowdfunding_backers(campaign_id);
CREATE INDEX idx_crowdfunding_backers_email ON crowdfunding_backers(email);

-- =============================================================================
-- COLLABORATIONS TABLE
-- =============================================================================
CREATE TABLE collaborations (
  id TEXT PRIMARY KEY,

  -- Project Info
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'cancelled')),

  -- Timeline
  deadline DATETIME,

  -- Progress
  progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_collaborations_status ON collaborations(status);

-- =============================================================================
-- COLLABORATION MEMBERS TABLE
-- =============================================================================
CREATE TABLE collaboration_members (
  id TEXT PRIMARY KEY,
  collaboration_id TEXT NOT NULL,
  artist_id TEXT NOT NULL,

  -- Role
  role TEXT NOT NULL,
  role_description TEXT,

  -- Status
  status TEXT DEFAULT 'active' CHECK (status IN ('invited', 'active', 'left')),

  -- Dates
  joined_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (collaboration_id) REFERENCES collaborations(id) ON DELETE CASCADE,
  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE,
  UNIQUE(collaboration_id, artist_id)
);

CREATE INDEX idx_collaboration_members_collaboration_id ON collaboration_members(collaboration_id);
CREATE INDEX idx_collaboration_members_artist_id ON collaboration_members(artist_id);

-- =============================================================================
-- MERCH PRODUCTS TABLE
-- =============================================================================
CREATE TABLE merch_products (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,

  -- Product Info
  name TEXT NOT NULL,
  description TEXT,
  category TEXT,

  -- Pricing
  price REAL NOT NULL,

  -- Inventory
  stock_quantity INTEGER DEFAULT 0,

  -- Images
  images TEXT, -- JSON array stored as text

  -- Status
  status TEXT DEFAULT 'active' CHECK (status IN ('draft', 'active', 'sold_out', 'archived')),

  -- Stats
  total_sold INTEGER DEFAULT 0,
  total_views INTEGER DEFAULT 0,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_merch_products_artist_id ON merch_products(artist_id);
CREATE INDEX idx_merch_products_status ON merch_products(status);

-- =============================================================================
-- MERCH ORDERS TABLE
-- =============================================================================
CREATE TABLE merch_orders (
  id TEXT PRIMARY KEY,
  artist_id TEXT NOT NULL,

  -- Customer Info
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,

  -- Order Details
  items TEXT NOT NULL, -- JSON array stored as text
  total REAL NOT NULL,

  -- Payment
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),

  -- Fulfillment
  fulfillment_status TEXT DEFAULT 'pending' CHECK (fulfillment_status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),

  -- Dates
  shipped_at DATETIME,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (artist_id) REFERENCES profiles(id) ON DELETE CASCADE
);

CREATE INDEX idx_merch_orders_artist_id ON merch_orders(artist_id);
CREATE INDEX idx_merch_orders_fulfillment_status ON merch_orders(fulfillment_status);

-- =============================================================================
-- SEED DATA (Optional - for testing)
-- =============================================================================

-- Insert demo artist profile
INSERT INTO profiles (id, email, artist_name, display_name, role, spotify_url, instagram_handle)
VALUES (
  'demo-artist-1',
  'priv@hlpfl.org',
  'PRIV',
  'PRIV',
  'artist',
  'https://open.spotify.com/artist/priv',
  'privmusic'
);

-- Insert demo release
INSERT INTO releases (id, artist_id, title, slug, release_type, release_date, total_streams, status)
VALUES (
  'demo-release-1',
  'demo-artist-1',
  'Emerging Sounds',
  'emerging-sounds-priv',
  'single',
  '2025-11-01',
  2847392,
  'released'
);
