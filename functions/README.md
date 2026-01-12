# HLPFL Artist Portal - API Documentation

This directory contains Cloudflare Pages Functions that provide the backend API for the HLPFL Artist Portal dashboard.

## Overview

All API functions are deployed as Cloudflare Pages Functions and have direct access to the Cloudflare D1 database (bound as `env.DB` in wrangler.toml).

## Base URL

- **Local Development**: `http://localhost:8788/api/*`
- **Production**: `https://your-domain.com/api/*`

## Authentication

All API endpoints currently expect an `artistId` parameter. In production, implement proper authentication:

1. Use Cloudflare Access or implement JWT tokens
2. Store sessions in D1 or use Cloudflare KV
3. Validate user permissions before database operations

## API Endpoints

### Dashboard API

**Endpoint**: `/api/dashboard`

**Method**: `GET`

**Query Parameters**:
- `artistId` (required): Artist ID

**Response**:
```json
{
  "success": true,
  "data": {
    "overview": {
      "totalStreams": 3671680,
      "totalListeners": 198800,
      "totalRevenue": 11310,
      "activeReleases": 3
    },
    "recentAnalytics": [...],
    "upcomingReleases": [...],
    "recentPosts": [...]
  }
}
```

### Releases API

**Endpoint**: `/api/releases`

**Methods**: `GET`, `POST`, `PUT`, `DELETE`

#### GET - Fetch releases
- `?artistId=<id>` - Get all releases for an artist
- `?artistId=<id>&releaseId=<id>` - Get single release with tracks

#### POST - Create release
```json
{
  "artistId": "artist-id",
  "title": "Release Name",
  "slug": "release-name",
  "releaseType": "single|ep|album",
  "releaseDate": "2026-01-15",
  "coverArtUrl": "https://...",
  "description": "...",
  "genre": "Alternative"
}
```

#### PUT - Update release
```json
{
  "releaseId": "release-id",
  "artistId": "artist-id",
  "title": "Updated Title",
  ...
}
```

#### DELETE - Delete release
- `?releaseId=<id>&artistId=<id>`

### Analytics API

**Endpoint**: `/api/analytics`

**Method**: `GET`

**Query Parameters**:
- `artistId` (required)
- `startDate` (optional): YYYY-MM-DD
- `endDate` (optional): YYYY-MM-DD
- `releaseId` (optional): Filter by release

**Response**:
```json
{
  "success": true,
  "data": {
    "streams": [...],
    "demographics": [...],
    "totals": {
      "total_streams": 3671680,
      "total_listeners": 198800,
      "total_saves": 42180,
      "total_shares": 8920
    }
  }
}
```

### Revenue API

**Endpoint**: `/api/revenue`

**Method**: `GET`

**Query Parameters**:
- `artistId` (required)
- `startDate` (optional)
- `endDate` (optional)
- `source` (optional): Filter by source (streaming, merch, licensing, etc.)

**Response**:
```json
{
  "success": true,
  "data": {
    "revenue": [...],
    "totalsBySource": [...],
    "payouts": [...],
    "overallTotals": {
      "total_revenue": 11310,
      "total_transactions": 142
    }
  }
}
```

### Community API

**Endpoint**: `/api/community`

**Methods**: `GET`, `POST`, `DELETE`

#### GET - Fetch posts
- `?artistId=<id>` - Get all posts
- `?artistId=<id>&postId=<id>` - Get single post with comments
- `?artistId=<id>&limit=20&offset=0` - Pagination

#### POST - Create post
```json
{
  "artistId": "artist-id",
  "userId": "user-id",
  "content": "Post content...",
  "imageUrl": "https://...",
  "videoUrl": "https://..."
}
```

#### DELETE - Delete post
- `?postId=<id>&artistId=<id>`

### Products API (Merch)

**Endpoint**: `/api/products`

**Methods**: `GET`, `POST`

#### GET - Fetch products or orders
- `?artistId=<id>` - Get all products
- `?artistId=<id>&productId=<id>` - Get single product with images
- `?artistId=<id>&type=orders` - Get all orders

#### POST - Create product
```json
{
  "artistId": "artist-id",
  "name": "Product Name",
  "description": "...",
  "category": "apparel|accessories|music|other",
  "price": 29.99,
  "currency": "USD",
  "stock": 100,
  "sizes": ["S", "M", "L", "XL"],
  "colors": ["Black", "White"]
}
```

### Social Media API

**Endpoint**: `/api/social`

**Methods**: `GET`, `POST`, `DELETE`

#### GET - Fetch accounts or scheduled posts
- `?artistId=<id>&type=accounts` - Get connected social accounts
- `?artistId=<id>&type=posts` - Get scheduled posts

#### POST - Schedule a post
```json
{
  "artistId": "artist-id",
  "accountId": "account-id",
  "content": "Post content...",
  "mediaUrls": ["https://..."],
  "scheduledFor": "2026-01-15T10:00:00Z",
  "platforms": ["instagram", "twitter", "tiktok"]
}
```

#### DELETE - Delete scheduled post
- `?postId=<id>&artistId=<id>`

### Email Campaigns API

**Endpoint**: `/api/email`

**Methods**: `GET`, `POST`

#### GET - Fetch campaigns or subscribers
- `?artistId=<id>&type=campaigns` - Get all campaigns
- `?artistId=<id>&campaignId=<id>` - Get single campaign with analytics
- `?artistId=<id>&type=subscribers` - Get all subscribers

#### POST - Create campaign
```json
{
  "artistId": "artist-id",
  "name": "Campaign Name",
  "subject": "Email Subject",
  "previewText": "Preview text...",
  "htmlContent": "<html>...</html>",
  "scheduledFor": "2026-01-15T10:00:00Z"
}
```

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": "Error message",
  "details": "Detailed error information"
}
```

**HTTP Status Codes**:
- `200` - Success
- `201` - Created
- `400` - Bad Request (missing parameters)
- `404` - Not Found
- `500` - Server Error

## Database Access

All functions have access to the D1 database via `context.env.DB`:

```typescript
const db = context.env.DB;
const result = await db
  .prepare('SELECT * FROM table WHERE id = ?')
  .bind(id)
  .first();
```

## Local Development

1. Run the local D1 database:
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
   curl http://localhost:8788/api/dashboard?artistId=artist-priv-001
   ```

## Deployment

Functions are automatically deployed with Cloudflare Pages. To deploy manually:

```bash
npx wrangler pages deploy
```

## Security Considerations

1. **Authentication**: Implement proper user authentication before production
2. **Authorization**: Verify users can only access their own data
3. **Input Validation**: All endpoints validate required parameters
4. **SQL Injection**: All queries use prepared statements with `.bind()`
5. **Rate Limiting**: Consider adding rate limiting for production
6. **CORS**: Configure CORS headers if needed for external access

## Caching

API responses include appropriate cache headers:
- Dashboard: 1 minute
- Analytics: 5 minutes
- Static content (products, releases): 5 minutes
- Real-time data (community, social): 30 seconds

## Next Steps

1. Implement authentication system (Cloudflare Access, JWT, or OAuth)
2. Add rate limiting middleware
3. Set up monitoring and error tracking
4. Implement webhook handlers for social platform OAuth callbacks
5. Add image upload endpoints with Cloudflare R2
6. Create admin endpoints for user management
