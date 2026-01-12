/**
 * Dashboard API - Get overview data for the artist dashboard
 * Cloudflare Pages Function
 */

import type { D1Database } from '../../src/lib/database';

interface Env {
  DB: D1Database;
}

export async function onRequestGet(context: { env: Env; request: Request }) {
  try {
    const url = new URL(context.request.url);
    const artistId = url.searchParams.get('artistId');

    if (!artistId) {
      return new Response(
        JSON.stringify({ error: 'artistId is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;

    // Get total streams
    const totalStreamsResult = await db
      .prepare('SELECT SUM(streams) as total FROM analytics_streams WHERE artist_id = ?')
      .bind(artistId)
      .first<{ total: number }>();

    const totalStreams = totalStreamsResult?.total || 0;

    // Get total listeners (unique)
    const totalListenersResult = await db
      .prepare('SELECT SUM(listeners) as total FROM analytics_streams WHERE artist_id = ?')
      .bind(artistId)
      .first<{ total: number }>();

    const totalListeners = totalListenersResult?.total || 0;

    // Get total revenue (last 30 days)
    const revenueResult = await db
      .prepare(`
        SELECT SUM(amount) as total
        FROM revenue_streams
        WHERE artist_id = ?
        AND date >= date('now', '-30 days')
      `)
      .bind(artistId)
      .first<{ total: number }>();

    const totalRevenue = revenueResult?.total || 0;

    // Get active releases count
    const releasesResult = await db
      .prepare('SELECT COUNT(*) as count FROM releases WHERE artist_id = ? AND status = ?')
      .bind(artistId, 'live')
      .first<{ count: number }>();

    const activeReleases = releasesResult?.count || 0;

    // Get recent analytics (last 30 days)
    const recentAnalyticsResult = await db
      .prepare(`
        SELECT date, SUM(streams) as streams, SUM(listeners) as listeners
        FROM analytics_streams
        WHERE artist_id = ?
        AND date >= date('now', '-30 days')
        GROUP BY date
        ORDER BY date DESC
      `)
      .bind(artistId)
      .all();

    const recentAnalytics = recentAnalyticsResult.results || [];

    // Get upcoming releases
    const upcomingReleasesResult = await db
      .prepare(`
        SELECT id, title, release_date, status, cover_art_url
        FROM releases
        WHERE artist_id = ?
        AND status IN ('scheduled', 'draft')
        AND release_date >= date('now')
        ORDER BY release_date ASC
        LIMIT 5
      `)
      .bind(artistId)
      .all();

    const upcomingReleases = upcomingReleasesResult.results || [];

    // Get recent community posts
    const recentPostsResult = await db
      .prepare(`
        SELECT p.*, pr.artist_name
        FROM community_posts p
        JOIN profiles pr ON p.author_id = pr.id
        WHERE p.author_id = ?
        ORDER BY p.created_at DESC
        LIMIT 5
      `)
      .bind(artistId)
      .all();

    const recentPosts = recentPostsResult.results || [];

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          overview: {
            totalStreams,
            totalListeners,
            totalRevenue,
            activeReleases,
          },
          recentAnalytics,
          upcomingReleases,
          recentPosts,
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=60', // Cache for 1 minute
        },
      }
    );
  } catch (error) {
    console.error('Dashboard API error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to fetch dashboard data',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
