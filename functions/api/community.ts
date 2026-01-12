/**
 * Community API - Manage community posts, comments, and engagement
 * Cloudflare Pages Function
 */

import type { D1Database } from '../../src/lib/database';

interface Env {
  DB: D1Database;
}

// GET - Fetch community posts
export async function onRequestGet(context: { env: Env; request: Request }) {
  try {
    const url = new URL(context.request.url);
    const artistId = url.searchParams.get('artistId');
    const postId = url.searchParams.get('postId');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = parseInt(url.searchParams.get('offset') || '0');

    if (!artistId) {
      return new Response(
        JSON.stringify({ error: 'artistId is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;

    // If postId is provided, fetch single post with comments
    if (postId) {
      const postResult = await db
        .prepare(`
          SELECT
            p.*,
            pr.artist_name,
            pr.avatar_url,
            (SELECT COUNT(*) FROM community_likes WHERE post_id = p.id) as likes_count,
            (SELECT COUNT(*) FROM community_comments WHERE post_id = p.id) as comments_count
          FROM community_posts p
          JOIN profiles pr ON p.author_id = pr.id
          WHERE p.id = ? AND p.author_id = ?
        `)
        .bind(postId, artistId)
        .first();

      if (!postResult) {
        return new Response(
          JSON.stringify({ error: 'Post not found' }),
          { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Get comments for this post
      const commentsResult = await db
        .prepare(`
          SELECT
            c.*,
            pr.artist_name,
            pr.avatar_url
          FROM community_comments c
          JOIN profiles pr ON c.author_id = pr.id
          WHERE c.post_id = ?
          ORDER BY c.created_at ASC
        `)
        .bind(postId)
        .all();

      return new Response(
        JSON.stringify({
          success: true,
          data: {
            ...postResult,
            comments: commentsResult.results || [],
          },
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=30',
          },
        }
      );
    }

    // Otherwise, fetch all posts for the artist
    const postsResult = await db
      .prepare(`
        SELECT
          p.*,
          pr.artist_name,
          pr.avatar_url,
          (SELECT COUNT(*) FROM community_likes WHERE post_id = p.id) as likes_count,
          (SELECT COUNT(*) FROM community_comments WHERE post_id = p.id) as comments_count
        FROM community_posts p
        JOIN profiles pr ON p.author_id = pr.id
        WHERE p.author_id = ?
        ORDER BY p.created_at DESC
        LIMIT ? OFFSET ?
      `)
      .bind(artistId, limit, offset)
      .all();

    // Get total count
    const countResult = await db
      .prepare('SELECT COUNT(*) as total FROM community_posts WHERE author_id = ?')
      .bind(artistId)
      .first<{ total: number }>();

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          posts: postsResult.results || [],
          total: countResult?.total || 0,
          limit,
          offset,
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=30',
        },
      }
    );
  } catch (error) {
    console.error('Community API GET error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to fetch community posts',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// POST - Create a new community post
export async function onRequestPost(context: { env: Env; request: Request }) {
  try {
    const body = await context.request.json();
    const { artistId, content, category, mediaUrls } = body;

    if (!artistId || !content) {
      return new Response(
        JSON.stringify({ error: 'artistId and content are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;
    const postId = `post-${Date.now()}`;

    await db
      .prepare(`
        INSERT INTO community_posts (
          id, author_id, content, category, media_urls
        )
        VALUES (?, ?, ?, ?, ?)
      `)
      .bind(postId, artistId, content, category || 'update', mediaUrls ? JSON.stringify(mediaUrls) : null)
      .run();

    // Fetch the created post
    const postResult = await db
      .prepare(`
        SELECT
          p.*,
          pr.artist_name,
          pr.avatar_url
        FROM community_posts p
        JOIN profiles pr ON p.author_id = pr.id
        WHERE p.id = ?
      `)
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
    console.error('Community API POST error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to create post',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// DELETE - Delete a community post
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
      .prepare('DELETE FROM community_posts WHERE id = ? AND artist_id = ?')
      .bind(postId, artistId)
      .run();

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Post deleted successfully',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Community API DELETE error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to delete post',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
