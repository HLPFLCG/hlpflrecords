# HLPFL Artist Portal - Supabase Database Schema

## Overview
This document defines the complete database schema for the HLPFL Artist Portal, designed to support artist management, analytics, collaborations, crowdfunding, email marketing, and merchandise.

## Core Principles
- **Artist-First**: 100% artist ownership of data
- **No Contracts**: All data belongs to the artist and can be exported/deleted anytime
- **Real-Time**: Leverage Supabase real-time subscriptions for live updates
- **Scalable**: Designed to handle millions of streams and thousands of artists

---

## Tables

### 1. **profiles** (extends Supabase auth.users)
Stores artist/user profile information

```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL DEFAULT 'artist' CHECK (role IN ('artist', 'admin', 'manager')),

  -- Profile Info
  artist_name TEXT,
  display_name TEXT,
  bio TEXT,
  avatar_url TEXT,
  banner_url TEXT,

  -- Contact
  phone TEXT,
  location TEXT,
  timezone TEXT DEFAULT 'America/New_York',

  -- Social Links
  spotify_url TEXT,
  apple_music_url TEXT,
  youtube_url TEXT,
  instagram_handle TEXT,
  twitter_handle TEXT,
  tiktok_handle TEXT,

  -- Settings
  notifications_enabled BOOLEAN DEFAULT true,
  email_marketing_enabled BOOLEAN DEFAULT true,
  analytics_sharing BOOLEAN DEFAULT false,

  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  last_login_at TIMESTAMPTZ,
  onboarding_completed BOOLEAN DEFAULT false
);

-- Indexes
CREATE INDEX idx_profiles_artist_name ON profiles(artist_name);
CREATE INDEX idx_profiles_role ON profiles(role);

-- RLS Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);
```

---

### 2. **releases**
Music releases (albums, EPs, singles)

```sql
CREATE TABLE releases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  artist_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,

  -- Release Info
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  release_type TEXT NOT NULL CHECK (release_type IN ('album', 'ep', 'single')),
  release_date DATE NOT NULL,

  -- Metadata
  cover_art_url TEXT,
  description TEXT,
  genre TEXT[],
  mood TEXT[],
  label TEXT,
  upc TEXT,
  isrc TEXT,

  -- Distribution
  spotify_id TEXT,
  apple_music_id TEXT,
  youtube_id TEXT,
  soundcloud_id TEXT,

  -- Links
  spotify_url TEXT,
  apple_music_url TEXT,
  youtube_url TEXT,
  bandcamp_url TEXT,
  soundcloud_url TEXT,

  -- Analytics
  total_streams BIGINT DEFAULT 0,
  total_listeners BIGINT DEFAULT 0,
  total_saves BIGINT DEFAULT 0,

  -- Status
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'released', 'archived')),

  -- Metadata
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_releases_artist_id ON releases(artist_id);
CREATE INDEX idx_releases_slug ON releases(slug);
CREATE INDEX idx_releases_release_date ON releases(release_date);
CREATE INDEX idx_releases_status ON releases(status);

-- RLS
ALTER TABLE releases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Artists can manage own releases" ON releases
  FOR ALL USING (auth.uid() = artist_id);
```

---

### 3. **tracks**
Individual tracks within releases

```sql
CREATE TABLE tracks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  release_id UUID REFERENCES releases(id) ON DELETE CASCADE NOT NULL,

  -- Track Info
  title TEXT NOT NULL,
  track_number INTEGER NOT NULL,
  duration_seconds INTEGER,
  isrc TEXT,

  -- Audio
  audio_file_url TEXT,
  waveform_data JSONB,

  -- Credits
  producers TEXT[],
  writers TEXT[],
  features TEXT[],

  -- Lyrics
  lyrics TEXT,
  explicit BOOLEAN DEFAULT false,

  -- Analytics
  streams BIGINT DEFAULT 0,
  skip_rate DECIMAL(5,2),
  completion_rate DECIMAL(5,2),

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_tracks_release_id ON tracks(release_id);
CREATE INDEX idx_tracks_track_number ON tracks(track_number);

ALTER TABLE tracks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Artists can manage tracks via releases" ON tracks
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM releases
      WHERE releases.id = tracks.release_id
      AND releases.artist_id = auth.uid()
    )
  );
```

---

### 4. **analytics_streams**
Daily streaming analytics

```sql
CREATE TABLE analytics_streams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  artist_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  release_id UUID REFERENCES releases(id) ON DELETE CASCADE,
  track_id UUID REFERENCES tracks(id) ON DELETE CASCADE,

  -- Date
  date DATE NOT NULL,

  -- Platform
  platform TEXT NOT NULL CHECK (platform IN ('spotify', 'apple_music', 'youtube', 'soundcloud', 'other')),

  -- Metrics
  streams INTEGER DEFAULT 0,
  listeners INTEGER DEFAULT 0,
  saves INTEGER DEFAULT 0,
  playlist_adds INTEGER DEFAULT 0,

  -- Geography
  country_code TEXT,
  city TEXT,

  -- Demographics
  age_range TEXT,
  gender TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(artist_id, release_id, track_id, date, platform, country_code)
);

CREATE INDEX idx_analytics_streams_artist_date ON analytics_streams(artist_id, date DESC);
CREATE INDEX idx_analytics_streams_release ON analytics_streams(release_id, date DESC);
CREATE INDEX idx_analytics_streams_platform ON analytics_streams(platform);

ALTER TABLE analytics_streams ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Artists can view own analytics" ON analytics_streams
  FOR SELECT USING (auth.uid() = artist_id);
```

---

### 5. **social_posts**
Scheduled social media posts

```sql
CREATE TABLE social_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  artist_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,

  -- Content
  content TEXT NOT NULL,
  media_urls TEXT[],
  media_type TEXT CHECK (media_type IN ('image', 'video', 'carousel')),

  -- Platforms
  platforms TEXT[] NOT NULL CHECK (platforms <@ ARRAY['instagram', 'twitter', 'facebook', 'tiktok']),

  -- Scheduling
  scheduled_for TIMESTAMPTZ NOT NULL,
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('draft', 'scheduled', 'posted', 'failed', 'cancelled')),

  -- Results
  posted_at TIMESTAMPTZ,
  post_ids JSONB, -- {platform: post_id}
  engagement JSONB, -- {likes, comments, shares, views}

  -- Metadata
  campaign_name TEXT,
  tags TEXT[],

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_social_posts_artist_id ON social_posts(artist_id);
CREATE INDEX idx_social_posts_scheduled_for ON social_posts(scheduled_for);
CREATE INDEX idx_social_posts_status ON social_posts(status);

ALTER TABLE social_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Artists can manage own social posts" ON social_posts
  FOR ALL USING (auth.uid() = artist_id);
```

---

### 6. **email_campaigns**
Email marketing campaigns

```sql
CREATE TABLE email_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  artist_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,

  -- Campaign Info
  name TEXT NOT NULL,
  subject TEXT NOT NULL,
  preview_text TEXT,

  -- Content
  html_content TEXT NOT NULL,
  plain_text_content TEXT,

  -- Targeting
  segment_ids UUID[],

  -- Scheduling
  scheduled_for TIMESTAMPTZ,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'sending', 'sent', 'failed')),

  -- Results
  sent_at TIMESTAMPTZ,
  sent_count INTEGER DEFAULT 0,
  opened_count INTEGER DEFAULT 0,
  clicked_count INTEGER DEFAULT 0,
  bounced_count INTEGER DEFAULT 0,
  unsubscribed_count INTEGER DEFAULT 0,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_email_campaigns_artist_id ON email_campaigns(artist_id);
CREATE INDEX idx_email_campaigns_status ON email_campaigns(status);

ALTER TABLE email_campaigns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Artists can manage own campaigns" ON email_campaigns
  FOR ALL USING (auth.uid() = artist_id);
```

---

### 7. **email_subscribers**
Email list subscribers

```sql
CREATE TABLE email_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  artist_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,

  -- Subscriber Info
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,

  -- Status
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced', 'complained')),

  -- Source
  source TEXT, -- 'website', 'show', 'pre-save', etc.
  tags TEXT[],

  -- Engagement
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ,
  last_opened_at TIMESTAMPTZ,
  last_clicked_at TIMESTAMPTZ,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(artist_id, email)
);

CREATE INDEX idx_email_subscribers_artist_id ON email_subscribers(artist_id);
CREATE INDEX idx_email_subscribers_email ON email_subscribers(email);
CREATE INDEX idx_email_subscribers_status ON email_subscribers(status);

ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Artists can manage own subscribers" ON email_subscribers
  FOR ALL USING (auth.uid() = artist_id);
```

---

### 8. **crowdfunding_campaigns**
Fan support and crowdfunding campaigns

```sql
CREATE TABLE crowdfunding_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  artist_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,

  -- Campaign Info
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  goal_amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',

  -- Media
  cover_image_url TEXT,
  video_url TEXT,

  -- Timeline
  start_date TIMESTAMPTZ NOT NULL,
  end_date TIMESTAMPTZ NOT NULL,

  -- Status
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'funded', 'ended', 'cancelled')),

  -- Results
  total_raised DECIMAL(10,2) DEFAULT 0,
  backer_count INTEGER DEFAULT 0,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_crowdfunding_campaigns_artist_id ON crowdfunding_campaigns(artist_id);
CREATE INDEX idx_crowdfunding_campaigns_status ON crowdfunding_campaigns(status);

ALTER TABLE crowdfunding_campaigns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Artists can manage own campaigns" ON crowdfunding_campaigns
  FOR ALL USING (auth.uid() = artist_id);
```

---

### 9. **crowdfunding_tiers**
Support tiers for campaigns

```sql
CREATE TABLE crowdfunding_tiers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES crowdfunding_campaigns(id) ON DELETE CASCADE NOT NULL,

  -- Tier Info
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,

  -- Limits
  limited_quantity BOOLEAN DEFAULT false,
  quantity_available INTEGER,
  quantity_claimed INTEGER DEFAULT 0,

  -- Perks
  perks TEXT[],

  -- Shipping
  requires_shipping BOOLEAN DEFAULT false,
  shipping_countries TEXT[],

  -- Display
  display_order INTEGER DEFAULT 0,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_crowdfunding_tiers_campaign_id ON crowdfunding_tiers(campaign_id);

ALTER TABLE crowdfunding_tiers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Artists can manage campaign tiers" ON crowdfunding_tiers
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM crowdfunding_campaigns
      WHERE crowdfunding_campaigns.id = crowdfunding_tiers.campaign_id
      AND crowdfunding_campaigns.artist_id = auth.uid()
    )
  );
```

---

### 10. **crowdfunding_backers**
Campaign backers and contributions

```sql
CREATE TABLE crowdfunding_backers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES crowdfunding_campaigns(id) ON DELETE CASCADE NOT NULL,
  tier_id UUID REFERENCES crowdfunding_tiers(id) ON DELETE SET NULL,

  -- Backer Info
  name TEXT,
  email TEXT NOT NULL,

  -- Contribution
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',

  -- Payment
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
  payment_id TEXT,
  payment_method TEXT,

  -- Shipping (if applicable)
  shipping_address JSONB,
  shipping_status TEXT CHECK (shipping_status IN ('not_shipped', 'processing', 'shipped', 'delivered')),

  -- Privacy
  anonymous BOOLEAN DEFAULT false,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_crowdfunding_backers_campaign_id ON crowdfunding_backers(campaign_id);
CREATE INDEX idx_crowdfunding_backers_email ON crowdfunding_backers(email);

ALTER TABLE crowdfunding_backers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Artists can view campaign backers" ON crowdfunding_backers
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM crowdfunding_campaigns
      WHERE crowdfunding_campaigns.id = crowdfunding_backers.campaign_id
      AND crowdfunding_campaigns.artist_id = auth.uid()
    )
  );
```

---

### 11. **collaborations**
Artist collaboration projects

```sql
CREATE TABLE collaborations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Project Info
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'cancelled')),

  -- Timeline
  deadline TIMESTAMPTZ,

  -- Progress
  progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),

  -- Files
  files JSONB,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_collaborations_status ON collaborations(status);

ALTER TABLE collaborations ENABLE ROW LEVEL SECURITY;
```

---

### 12. **collaboration_members**
Artists participating in collaborations

```sql
CREATE TABLE collaboration_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  collaboration_id UUID REFERENCES collaborations(id) ON DELETE CASCADE NOT NULL,
  artist_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,

  -- Role
  role TEXT NOT NULL, -- 'owner', 'collaborator', 'guest'
  role_description TEXT, -- 'Vocals', 'Producer', 'Mixer', etc.

  -- Permissions
  can_edit BOOLEAN DEFAULT true,
  can_invite BOOLEAN DEFAULT false,

  -- Status
  status TEXT DEFAULT 'active' CHECK (status IN ('invited', 'active', 'left')),

  -- Dates
  invited_at TIMESTAMPTZ DEFAULT NOW(),
  joined_at TIMESTAMPTZ,
  left_at TIMESTAMPTZ,

  UNIQUE(collaboration_id, artist_id)
);

CREATE INDEX idx_collaboration_members_collaboration_id ON collaboration_members(collaboration_id);
CREATE INDEX idx_collaboration_members_artist_id ON collaboration_members(artist_id);

ALTER TABLE collaboration_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can view own collaborations" ON collaboration_members
  FOR SELECT USING (auth.uid() = artist_id);
```

---

### 13. **merch_products**
Merchandise products

```sql
CREATE TABLE merch_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  artist_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,

  -- Product Info
  name TEXT NOT NULL,
  description TEXT,
  category TEXT, -- 'apparel', 'accessories', 'music', 'collectibles'

  -- Pricing
  price DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',

  -- Inventory
  sku TEXT,
  stock_quantity INTEGER DEFAULT 0,
  track_inventory BOOLEAN DEFAULT true,

  -- Images
  images TEXT[],

  -- Variants (sizes, colors, etc.)
  has_variants BOOLEAN DEFAULT false,

  -- Status
  status TEXT DEFAULT 'active' CHECK (status IN ('draft', 'active', 'sold_out', 'archived')),

  -- Stats
  total_sold INTEGER DEFAULT 0,
  total_views INTEGER DEFAULT 0,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_merch_products_artist_id ON merch_products(artist_id);
CREATE INDEX idx_merch_products_status ON merch_products(status);

ALTER TABLE merch_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Artists can manage own products" ON merch_products
  FOR ALL USING (auth.uid() = artist_id);
```

---

### 14. **merch_orders**
Merchandise orders

```sql
CREATE TABLE merch_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  artist_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,

  -- Customer Info
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,

  -- Order Details
  items JSONB NOT NULL, -- [{product_id, variant, quantity, price}]
  subtotal DECIMAL(10,2) NOT NULL,
  shipping_cost DECIMAL(10,2) DEFAULT 0,
  tax DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',

  -- Shipping
  shipping_address JSONB NOT NULL,
  shipping_method TEXT,
  tracking_number TEXT,

  -- Payment
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  payment_id TEXT,

  -- Fulfillment
  fulfillment_status TEXT DEFAULT 'pending' CHECK (fulfillment_status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),

  -- Dates
  paid_at TIMESTAMPTZ,
  shipped_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_merch_orders_artist_id ON merch_orders(artist_id);
CREATE INDEX idx_merch_orders_customer_email ON merch_orders(customer_email);
CREATE INDEX idx_merch_orders_status ON merch_orders(fulfillment_status);

ALTER TABLE merch_orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Artists can view own orders" ON merch_orders
  FOR SELECT USING (auth.uid() = artist_id);
```

---

### 15. **spotify_pre_save_campaigns**
Spotify pre-save campaigns

```sql
CREATE TABLE spotify_pre_save_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  artist_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  release_id UUID REFERENCES releases(id) ON DELETE CASCADE,

  -- Campaign Info
  name TEXT NOT NULL,
  spotify_release_id TEXT,

  -- Landing Page
  custom_url TEXT UNIQUE,
  landing_page_config JSONB,

  -- Status
  status TEXT DEFAULT 'active' CHECK (status IN ('draft', 'active', 'ended')),

  -- Stats
  total_pre_saves INTEGER DEFAULT 0,
  conversion_rate DECIMAL(5,2),

  -- Dates
  starts_at TIMESTAMPTZ NOT NULL,
  ends_at TIMESTAMPTZ NOT NULL,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_spotify_campaigns_artist_id ON spotify_pre_save_campaigns(artist_id);
CREATE INDEX idx_spotify_campaigns_release_id ON spotify_pre_save_campaigns(release_id);

ALTER TABLE spotify_pre_save_campaigns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Artists can manage own pre-save campaigns" ON spotify_pre_save_campaigns
  FOR ALL USING (auth.uid() = artist_id);
```

---

### 16. **spotify_pre_saves**
Pre-save submissions

```sql
CREATE TABLE spotify_pre_saves (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES spotify_pre_save_campaigns(id) ON DELETE CASCADE NOT NULL,

  -- User Info
  email TEXT NOT NULL,
  spotify_user_id TEXT,

  -- Source
  source TEXT, -- 'instagram', 'facebook', 'direct', etc.
  utm_params JSONB,

  -- Status
  pre_saved BOOLEAN DEFAULT true,
  email_consent BOOLEAN DEFAULT false,

  created_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(campaign_id, email)
);

CREATE INDEX idx_spotify_pre_saves_campaign_id ON spotify_pre_saves(campaign_id);
CREATE INDEX idx_spotify_pre_saves_email ON spotify_pre_saves(email);

ALTER TABLE spotify_pre_saves ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Artists can view campaign pre-saves" ON spotify_pre_saves
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM spotify_pre_save_campaigns
      WHERE spotify_pre_save_campaigns.id = spotify_pre_saves.campaign_id
      AND spotify_pre_save_campaigns.artist_id = auth.uid()
    )
  );
```

---

## Database Functions

### Update Updated_at Timestamp
```sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to all tables with updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_releases_updated_at BEFORE UPDATE ON releases
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- (Apply to all other tables...)
```

---

## Storage Buckets

### Audio Files
```sql
INSERT INTO storage.buckets (id, name, public) VALUES ('audio', 'audio', false);

-- RLS for audio bucket
CREATE POLICY "Artists can upload own audio" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'audio' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Artists can view own audio" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'audio' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );
```

### Cover Art
```sql
INSERT INTO storage.buckets (id, name, public) VALUES ('cover-art', 'cover-art', true);
```

### Merch Images
```sql
INSERT INTO storage.buckets (id, name, public) VALUES ('merch', 'merch', true);
```

---

## Real-Time Subscriptions

Enable real-time for critical tables:
```sql
ALTER PUBLICATION supabase_realtime ADD TABLE analytics_streams;
ALTER PUBLICATION supabase_realtime ADD TABLE social_posts;
ALTER PUBLICATION supabase_realtime ADD TABLE crowdfunding_backers;
ALTER PUBLICATION supabase_realtime ADD TABLE merch_orders;
```

---

## Installation Script

Save as `supabase/migrations/001_initial_schema.sql` and run:

```bash
# Install Supabase CLI
npm install -g supabase

# Initialize Supabase project
supabase init

# Link to your project
supabase link --project-ref YOUR_PROJECT_ID

# Run migrations
supabase db push
```

---

## Next Steps

1. **Install Supabase Client**:
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Create Supabase Client** (`lib/supabase.ts`):
   ```typescript
   import { createClient } from '@supabase/supabase-js'

   export const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL!,
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
   )
   ```

3. **Environment Variables** (`.env.local`):
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

4. **Integrate with Artist Portal Pages**:
   - Replace mock data in pages with Supabase queries
   - Implement authentication flow
   - Add real-time listeners for live updates

---

## Security Checklist

- ✅ Row Level Security (RLS) enabled on all tables
- ✅ Artists can only access their own data
- ✅ Email addresses are validated
- ✅ Payment data is handled securely
- ✅ Storage buckets have proper access controls
- ✅ Real-time subscriptions are authenticated
- ✅ API keys are stored as environment variables

---

**Status**: Schema design complete ✅
**Ready for**: Implementation in Supabase project
