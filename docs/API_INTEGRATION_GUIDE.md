# API Integration Guide for HLPFL Artist Portal Dashboard

This guide explains how to connect the dashboard pages to the real Cloudflare D1 database via the API endpoints.

## Overview

The Artist Portal now has:
- ✅ Complete database schema with 25+ tables
- ✅ Comprehensive API endpoints (Cloudflare Pages Functions)
- ✅ Type-safe API client library
- ✅ Sample seed data for development

## Quick Start

### 1. Using the API Client

The API client (`src/lib/api-client.ts`) provides a clean, type-safe interface for all API calls:

```typescript
import { api } from '@/lib/api-client';

// In your React component
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  async function fetchData() {
    const response = await api.dashboard.getOverview('artist-alki-001');

    if (response.success) {
      setData(response.data);
    } else {
      setError(response.error);
    }

    setLoading(false);
  }

  fetchData();
}, []);
```

### 2. Getting the Artist ID

In production, get the artist ID from the authenticated user's session:

```typescript
// Example with authentication context
import { useAuth } from '@/contexts/AuthContext';

function DashboardPage() {
  const { user } = useAuth();
  const artistId = user?.id;

  // Use artistId in API calls
  const response = await api.dashboard.getOverview(artistId);
}
```

For development, you can use the sample artist IDs from the seed data:
- `artist-alki-001` - Alki (main artist)
- `artist-priv-001` - Priv
- `artist-pardy-001` - Pardyalone

## Integration Examples by Page

### Main Dashboard (`/dashboard`)

**File**: `src/app/dashboard/page.tsx`

**What to integrate**:
1. Total streams, listeners, revenue, active releases
2. Recent analytics chart (last 30 days)
3. Upcoming releases list
4. Recent community posts

**Example**:
```typescript
'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api-client';

export default function DashboardPage() {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      const response = await api.dashboard.getOverview('artist-alki-001');

      if (response.success) {
        setOverview(response.data);
      }

      setLoading(false);
    }

    loadDashboard();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <StatsCard
          title="Total Streams"
          value={overview?.overview.totalStreams}
          icon={<PlayCircle />}
        />
        <StatsCard
          title="Total Listeners"
          value={overview?.overview.totalListeners}
          icon={<Users />}
        />
        <StatsCard
          title="Revenue (30d)"
          value={`$${overview?.overview.totalRevenue}`}
          icon={<DollarSign />}
        />
        <StatsCard
          title="Active Releases"
          value={overview?.overview.activeReleases}
          icon={<Music />}
        />
      </div>

      {/* Recent Analytics Chart */}
      <AnalyticsChart data={overview?.recentAnalytics} />

      {/* Upcoming Releases */}
      <ReleasesList releases={overview?.upcomingReleases} />

      {/* Recent Community Posts */}
      <CommunityFeed posts={overview?.recentPosts} />
    </div>
  );
}
```

### Analytics Dashboard (`/dashboard/analytics`)

**File**: `src/app/dashboard/analytics/page.tsx`

**What to integrate**:
1. Streaming analytics by platform
2. Listener demographics (country, age, gender)
3. Date range filtering
4. Release-specific analytics

**Example**:
```typescript
'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api-client';

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState(null);
  const [startDate, setStartDate] = useState('2025-12-01');
  const [endDate, setEndDate] = useState('2026-01-08');

  useEffect(() => {
    async function loadAnalytics() {
      const response = await api.analytics.get({
        artistId: 'artist-alki-001',
        startDate,
        endDate,
      });

      if (response.success) {
        setAnalytics(response.data);
      }
    }

    loadAnalytics();
  }, [startDate, endDate]);

  return (
    <div>
      <h1>Analytics</h1>

      {/* Date Range Picker */}
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onChange={(start, end) => {
          setStartDate(start);
          setEndDate(end);
        }}
      />

      {/* Totals */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard
          title="Total Streams"
          value={analytics?.totals.total_streams}
        />
        <StatCard
          title="Total Listeners"
          value={analytics?.totals.total_listeners}
        />
        <StatCard
          title="Total Saves"
          value={analytics?.totals.total_saves}
        />
        <StatCard
          title="Total Shares"
          value={analytics?.totals.total_shares}
        />
      </div>

      {/* Streams Chart by Platform */}
      <StreamsChart data={analytics?.streams} />

      {/* Demographics */}
      <DemographicsSection data={analytics?.demographics} />
    </div>
  );
}
```

### Releases Management (`/dashboard/releases`)

**File**: `src/app/dashboard/releases/page.tsx`

**What to integrate**:
1. List all releases
2. Create new release
3. Edit release details
4. Delete release
5. View tracks for each release

**Example**:
```typescript
'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api-client';

export default function ReleasesPage() {
  const [releases, setReleases] = useState([]);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    loadReleases();
  }, []);

  async function loadReleases() {
    const response = await api.releases.getAll('artist-alki-001');
    if (response.success) {
      setReleases(response.data);
    }
  }

  async function handleCreateRelease(releaseData) {
    const response = await api.releases.create({
      artistId: 'artist-alki-001',
      ...releaseData,
    });

    if (response.success) {
      await loadReleases(); // Refresh list
      setIsCreating(false);
    }
  }

  async function handleDeleteRelease(releaseId) {
    const confirmed = confirm('Delete this release?');
    if (!confirmed) return;

    const response = await api.releases.delete('artist-alki-001', releaseId);
    if (response.success) {
      await loadReleases(); // Refresh list
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Releases</h1>
        <button onClick={() => setIsCreating(true)}>
          New Release
        </button>
      </div>

      {/* Create Release Modal */}
      {isCreating && (
        <CreateReleaseModal
          onSubmit={handleCreateRelease}
          onCancel={() => setIsCreating(false)}
        />
      )}

      {/* Releases List */}
      <div className="grid gap-4">
        {releases.map(release => (
          <ReleaseCard
            key={release.id}
            release={release}
            onDelete={() => handleDeleteRelease(release.id)}
          />
        ))}
      </div>
    </div>
  );
}
```

### Revenue Tracking (`/dashboard/revenue`)

**File**: `src/app/dashboard/revenue/page.tsx`

**What to integrate**:
1. Revenue by source (streaming, merch, licensing, crowdfunding)
2. Payout history
3. Date filtering
4. Transaction details

**Example**:
```typescript
'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api-client';

export default function RevenuePage() {
  const [revenue, setRevenue] = useState(null);
  const [startDate, setStartDate] = useState('2025-12-01');
  const [endDate, setEndDate] = useState('2026-01-08');

  useEffect(() => {
    async function loadRevenue() {
      const response = await api.revenue.get({
        artistId: 'artist-alki-001',
        startDate,
        endDate,
      });

      if (response.success) {
        setRevenue(response.data);
      }
    }

    loadRevenue();
  }, [startDate, endDate]);

  return (
    <div>
      <h1>Revenue</h1>

      {/* Date Range Filter */}
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onChange={(start, end) => {
          setStartDate(start);
          setEndDate(end);
        }}
      />

      {/* Overall Totals */}
      <div className="bg-card p-6">
        <h2>Total Revenue</h2>
        <p className="text-4xl">${revenue?.overallTotals.total_revenue}</p>
        <p className="text-sm text-muted">
          {revenue?.overallTotals.total_transactions} transactions
        </p>
      </div>

      {/* Revenue by Source */}
      <div className="grid grid-cols-4 gap-4">
        {revenue?.totalsBySource.map(source => (
          <SourceCard
            key={source.source}
            source={source.source}
            amount={source.total_amount}
            count={source.transaction_count}
          />
        ))}
      </div>

      {/* Recent Transactions */}
      <TransactionsTable transactions={revenue?.revenue} />

      {/* Payouts */}
      <PayoutsTable payouts={revenue?.payouts} />
    </div>
  );
}
```

### Community Management (`/dashboard/community`)

**File**: `src/app/dashboard/community/page.tsx`

**What to integrate**:
1. Community posts feed
2. Create new post
3. View post details with comments
4. Delete posts
5. Pagination

**Example**:
```typescript
'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api-client';

export default function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const limit = 20;

  useEffect(() => {
    loadPosts();
  }, [page]);

  async function loadPosts() {
    const response = await api.community.getPosts(
      'artist-alki-001',
      limit,
      page * limit
    );

    if (response.success) {
      setPosts(response.data.posts);
      setTotal(response.data.total);
    }
  }

  async function handleCreatePost(content, imageUrl, videoUrl) {
    const response = await api.community.createPost({
      artistId: 'artist-alki-001',
      userId: 'artist-alki-001', // Current user
      content,
      imageUrl,
      videoUrl,
    });

    if (response.success) {
      await loadPosts(); // Refresh feed
    }
  }

  async function handleDeletePost(postId) {
    const response = await api.community.deletePost('artist-alki-001', postId);
    if (response.success) {
      await loadPosts(); // Refresh feed
    }
  }

  return (
    <div>
      <h1>Community</h1>

      {/* Create Post */}
      <CreatePostForm onSubmit={handleCreatePost} />

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onDelete={() => handleDeletePost(post.id)}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalItems={total}
        itemsPerPage={limit}
        onPageChange={setPage}
      />
    </div>
  );
}
```

## API Client Reference

### Available APIs

All APIs are available through the `api` object:

```typescript
import { api } from '@/lib/api-client';

// Dashboard
api.dashboard.getOverview(artistId)

// Releases
api.releases.getAll(artistId)
api.releases.getById(artistId, releaseId)
api.releases.create(release)
api.releases.update(releaseId, updates)
api.releases.delete(artistId, releaseId)

// Analytics
api.analytics.get({ artistId, startDate?, endDate?, releaseId? })

// Revenue
api.revenue.get({ artistId, startDate?, endDate?, source? })

// Community
api.community.getPosts(artistId, limit, offset)
api.community.getPost(artistId, postId)
api.community.createPost(post)
api.community.deletePost(artistId, postId)

// Products (Merch)
api.products.getAll(artistId)
api.products.getById(artistId, productId)
api.products.getOrders(artistId)
api.products.create(product)

// Social Media
api.social.getAccounts(artistId)
api.social.getPosts(artistId)
api.social.schedulePost(post)
api.social.deletePost(artistId, postId)

// Email Campaigns
api.email.getCampaigns(artistId)
api.email.getCampaign(artistId, campaignId)
api.email.getSubscribers(artistId)
api.email.createCampaign(campaign)
```

### Error Handling

All API calls return a consistent response format:

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  details?: string;
}
```

Handle errors gracefully:

```typescript
const response = await api.releases.getAll(artistId);

if (response.success) {
  // Success - use response.data
  setReleases(response.data);
} else {
  // Error - show response.error
  console.error(response.error);
  toast.error(response.error);
}
```

## Testing

### Local Development

1. Initialize the local D1 database:
   ```bash
   npx wrangler d1 execute hlpfl-artist-portal --file=database/schema.sql
   npx wrangler d1 execute hlpfl-artist-portal --file=database/seed.sql
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Test API endpoints:
   ```bash
   # Get dashboard overview
   curl http://localhost:8788/api/dashboard?artistId=artist-alki-001

   # Get releases
   curl http://localhost:8788/api/releases?artistId=artist-alki-001

   # Get analytics
   curl http://localhost:8788/api/analytics?artistId=artist-alki-001&startDate=2025-12-01
   ```

### Sample Artist IDs

Use these IDs from the seed data for testing:
- `artist-alki-001` - Alki (3.2M streams, multiple releases)
- `artist-priv-001` - Priv (423K streams)
- `artist-pardy-001` - Pardyalone (187K streams)

## Next Steps

1. **Authentication**: Implement user authentication to get real artist IDs
   - Use Cloudflare Access, Auth0, or custom JWT solution
   - Store sessions in Cloudflare KV or D1

2. **Real-time Updates**: Add websocket or polling for live data
   - Consider Cloudflare Durable Objects for real-time features
   - Use SWR or React Query for automatic data refetching

3. **File Uploads**: Implement image/audio uploads
   - Use Cloudflare R2 for storing media files
   - Add signed upload URLs for security

4. **OAuth Integration**: Connect real social media platforms
   - Implement OAuth flows for Instagram, Twitter, TikTok
   - Store tokens securely in D1 with encryption

5. **Testing**: Add comprehensive tests
   - Unit tests for API client
   - Integration tests for API endpoints
   - E2E tests for dashboard flows

## Support

For API documentation, see `functions/README.md`
For database schema, see `database/schema.sql`
For sample data, see `database/seed.sql`
