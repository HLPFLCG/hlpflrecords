/**
 * Releases API - Manage music releases
 * Cloudflare Pages Function
 */

import type { D1Database } from '../../src/lib/database';

interface Env {
  DB: D1Database;
}

// GET - Fetch releases for an artist
export async function onRequestGet(context: { env: Env; request: Request }) {
  try {
    const url = new URL(context.request.url);
    const artistId = url.searchParams.get('artistId');
    const releaseId = url.searchParams.get('releaseId');

    if (!artistId) {
      return new Response(
        JSON.stringify({ error: 'artistId is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;

    // If releaseId is provided, fetch single release with tracks
    if (releaseId) {
      const releaseResult = await db
        .prepare('SELECT * FROM releases WHERE id = ? AND artist_id = ?')
        .bind(releaseId, artistId)
        .first();

      if (!releaseResult) {
        return new Response(
          JSON.stringify({ error: 'Release not found' }),
          { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Get tracks for this release
      const tracksResult = await db
        .prepare('SELECT * FROM tracks WHERE release_id = ? ORDER BY track_number ASC')
        .bind(releaseId)
        .all();

      return new Response(
        JSON.stringify({
          success: true,
          data: {
            ...releaseResult,
            tracks: tracksResult.results || [],
          },
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

    // Otherwise, fetch all releases for the artist
    const releasesResult = await db
      .prepare(`
        SELECT r.*, COUNT(t.id) as track_count
        FROM releases r
        LEFT JOIN tracks t ON r.id = t.release_id
        WHERE r.artist_id = ?
        GROUP BY r.id
        ORDER BY r.release_date DESC
      `)
      .bind(artistId)
      .all();

    return new Response(
      JSON.stringify({
        success: true,
        data: releasesResult.results || [],
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=60',
        },
      }
    );
  } catch (error) {
    console.error('Releases API GET error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to fetch releases',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// POST - Create a new release
export async function onRequestPost(context: { env: Env; request: Request }) {
  try {
    const body = await context.request.json();
    const {
      artistId,
      title,
      slug,
      releaseType,
      releaseDate,
      coverArtUrl,
      description,
      genre,
    } = body;

    if (!artistId || !title || !slug || !releaseType || !releaseDate) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;
    const releaseId = `release-${Date.now()}`;

    await db
      .prepare(`
        INSERT INTO releases (
          id, artist_id, title, slug, release_type, release_date,
          cover_art_url, description, genre, status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'draft')
      `)
      .bind(
        releaseId,
        artistId,
        title,
        slug,
        releaseType,
        releaseDate,
        coverArtUrl || null,
        description || null,
        genre || null
      )
      .run();

    // Fetch the created release
    const releaseResult = await db
      .prepare('SELECT * FROM releases WHERE id = ?')
      .bind(releaseId)
      .first();

    return new Response(
      JSON.stringify({
        success: true,
        data: releaseResult,
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Releases API POST error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to create release',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// PUT - Update an existing release
export async function onRequestPut(context: { env: Env; request: Request }) {
  try {
    const body = await context.request.json();
    const {
      releaseId,
      artistId,
      title,
      slug,
      releaseType,
      releaseDate,
      coverArtUrl,
      description,
      genre,
      status,
    } = body;

    if (!releaseId || !artistId) {
      return new Response(
        JSON.stringify({ error: 'releaseId and artistId are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;

    // Build update query dynamically based on provided fields
    const updates: string[] = [];
    const values: any[] = [];

    if (title) {
      updates.push('title = ?');
      values.push(title);
    }
    if (slug) {
      updates.push('slug = ?');
      values.push(slug);
    }
    if (releaseType) {
      updates.push('release_type = ?');
      values.push(releaseType);
    }
    if (releaseDate) {
      updates.push('release_date = ?');
      values.push(releaseDate);
    }
    if (coverArtUrl !== undefined) {
      updates.push('cover_art_url = ?');
      values.push(coverArtUrl);
    }
    if (description !== undefined) {
      updates.push('description = ?');
      values.push(description);
    }
    if (genre !== undefined) {
      updates.push('genre = ?');
      values.push(genre);
    }
    if (status) {
      updates.push('status = ?');
      values.push(status);
    }

    if (updates.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No fields to update' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    values.push(releaseId, artistId);

    await db
      .prepare(`
        UPDATE releases
        SET ${updates.join(', ')}
        WHERE id = ? AND artist_id = ?
      `)
      .bind(...values)
      .run();

    // Fetch the updated release
    const releaseResult = await db
      .prepare('SELECT * FROM releases WHERE id = ?')
      .bind(releaseId)
      .first();

    return new Response(
      JSON.stringify({
        success: true,
        data: releaseResult,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Releases API PUT error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to update release',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// DELETE - Delete a release
export async function onRequestDelete(context: { env: Env; request: Request }) {
  try {
    const url = new URL(context.request.url);
    const releaseId = url.searchParams.get('releaseId');
    const artistId = url.searchParams.get('artistId');

    if (!releaseId || !artistId) {
      return new Response(
        JSON.stringify({ error: 'releaseId and artistId are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;

    await db
      .prepare('DELETE FROM releases WHERE id = ? AND artist_id = ?')
      .bind(releaseId, artistId)
      .run();

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Release deleted successfully',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Releases API DELETE error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to delete release',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
