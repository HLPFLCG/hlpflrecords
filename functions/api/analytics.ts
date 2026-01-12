/**
 * Analytics API - Get streaming and listener analytics
 * Cloudflare Pages Function
 */

import type { D1Database } from '../../src/lib/database';

interface Env {
  DB: D1Database;
}

// GET - Fetch analytics data
export async function onRequestGet(context: { env: Env; request: Request }) {
  try {
    const url = new URL(context.request.url);
    const artistId = url.searchParams.get('artistId');
    const startDate = url.searchParams.get('startDate');
    const endDate = url.searchParams.get('endDate');
    const releaseId = url.searchParams.get('releaseId');

    if (!artistId) {
      return new Response(
        JSON.stringify({ error: 'artistId is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;

    // Build query with optional filters
    let query = `
      SELECT
        date,
        release_id,
        platform,
        SUM(streams) as streams,
        SUM(listeners) as listeners,
        SUM(saves) as saves,
        country_code
      FROM analytics_streams
      WHERE artist_id = ?
    `;
    const bindings: any[] = [artistId];

    if (startDate) {
      query += ' AND date >= ?';
      bindings.push(startDate);
    }
    if (endDate) {
      query += ' AND date <= ?';
      bindings.push(endDate);
    }
    if (releaseId) {
      query += ' AND release_id = ?';
      bindings.push(releaseId);
    }

    query += ' GROUP BY date, release_id, platform ORDER BY date DESC';

    const analyticsResult = await db.prepare(query).bind(...bindings).all();

    // Get demographics data
    const demographicsQuery = `
      SELECT
        country_code,
        age_range,
        gender,
        SUM(listeners) as listeners,
        COUNT(*) as count
      FROM analytics_demographics
      WHERE artist_id = ?
      ${startDate ? 'AND date >= ?' : ''}
      ${endDate ? 'AND date <= ?' : ''}
      GROUP BY country_code, age_range, gender
      ORDER BY listeners DESC
    `;

    const demographicsBindings = [artistId];
    if (startDate) demographicsBindings.push(startDate);
    if (endDate) demographicsBindings.push(endDate);

    const demographicsResult = await db
      .prepare(demographicsQuery)
      .bind(...demographicsBindings)
      .all();

    // Calculate totals
    const totalsResult = await db
      .prepare(`
        SELECT
          SUM(streams) as total_streams,
          SUM(listeners) as total_listeners,
          SUM(saves) as total_saves
        FROM analytics_streams
        WHERE artist_id = ?
        ${startDate ? 'AND date >= ?' : ''}
        ${endDate ? 'AND date <= ?' : ''}
      `)
      .bind(...bindings.slice(0, bindings.length - (releaseId ? 1 : 0)))
      .first();

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          streams: analyticsResult.results || [],
          demographics: demographicsResult.results || [],
          totals: totalsResult || {
            total_streams: 0,
            total_listeners: 0,
            total_saves: 0,
          },
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
        },
      }
    );
  } catch (error) {
    console.error('Analytics API error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to fetch analytics',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
