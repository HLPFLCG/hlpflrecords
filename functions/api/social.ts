/**
 * Social Media API - Manage social accounts and scheduled posts
 * Cloudflare Pages Function
 */

import type { D1Database } from '../../src/lib/database';

interface Env {
  DB: D1Database;
}

// GET - Fetch social accounts or scheduled posts
export async function onRequestGet(context: { env: Env; request: Request }) {
  try {
    const url = new URL(context.request.url);
    const artistId = url.searchParams.get('artistId');
    const type = url.searchParams.get('type'); // 'accounts' or 'posts'

    if (!artistId) {
      return new Response(
        JSON.stringify({ error: 'artistId is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;

    // Fetch scheduled posts
    if (type === 'posts') {
      const postsResult = await db
        .prepare(`
          SELECT
            sp.*,
            sa.platform,
            sa.username
          FROM scheduled_posts sp
          JOIN social_accounts sa ON sp.account_id = sa.id
          WHERE sp.artist_id = ?
          ORDER BY sp.scheduled_for ASC
        `)
        .bind(artistId)
        .all();

      return new Response(
        JSON.stringify({
          success: true,
          data: postsResult.results || [],
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=60',
          },
        }
      );
    }

    // Fetch social accounts
    const accountsResult = await db
      .prepare(`
        SELECT
          sa.*,
          (SELECT COUNT(*) FROM scheduled_posts WHERE account_id = sa.id AND status = 'scheduled') as scheduled_count
        FROM social_accounts sa
        WHERE sa.artist_id = ?
        ORDER BY sa.platform ASC
      `)
      .bind(artistId)
      .all();

    return new Response(
      JSON.stringify({
        success: true,
        data: accountsResult.results || [],
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300',
        },
      }
    );
  } catch (error) {
    console.error('Social API GET error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to fetch social data',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// POST - Create a scheduled social media post
export async function onRequestPost(context: { env: Env; request: Request }) {
  try {
    const body = await context.request.json();
    const {
      artistId,
      accountId,
      content,
      mediaUrls,
      scheduledFor,
      platforms,
    } = body;

    if (!artistId || !content || !scheduledFor) {
      return new Response(
        JSON.stringify({ error: 'artistId, content, and scheduledFor are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;
    const postId = `social-post-${Date.now()}`;

    await db
      .prepare(`
        INSERT INTO scheduled_posts (
          id, artist_id, account_id, content, media_urls,
          scheduled_for, platforms, status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, 'scheduled')
      `)
      .bind(
        postId,
        artistId,
        accountId || null,
        content,
        mediaUrls ? JSON.stringify(mediaUrls) : null,
        scheduledFor,
        platforms ? JSON.stringify(platforms) : null
      )
      .run();

    // Fetch the created post
    const postResult = await db
      .prepare('SELECT * FROM scheduled_posts WHERE id = ?')
      .bind(postId)
      .first();

    return new Response(
      JSON.stringify({
        success: true,
        data: postResult,
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Social API POST error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to create scheduled post',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// DELETE - Delete a scheduled post
export async function onRequestDelete(context: { env: Env; request: Request }) {
  try {
    const url = new URL(context.request.url);
    const postId = url.searchParams.get('postId');
    const artistId = url.searchParams.get('artistId');

    if (!postId || !artistId) {
      return new Response(
        JSON.stringify({ error: 'postId and artistId are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;

    await db
      .prepare('DELETE FROM scheduled_posts WHERE id = ? AND artist_id = ?')
      .bind(postId, artistId)
      .run();

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Scheduled post deleted successfully',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Social API DELETE error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to delete scheduled post',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
