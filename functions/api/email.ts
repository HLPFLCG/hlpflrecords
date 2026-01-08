/**
 * Email Campaigns API - Manage email marketing campaigns
 * Cloudflare Pages Function
 */

import type { D1Database } from '../../src/lib/database';

interface Env {
  DB: D1Database;
}

// GET - Fetch email campaigns or subscribers
export async function onRequestGet(context: { env: Env; request: Request }) {
  try {
    const url = new URL(context.request.url);
    const artistId = url.searchParams.get('artistId');
    const type = url.searchParams.get('type'); // 'campaigns' or 'subscribers'
    const campaignId = url.searchParams.get('campaignId');

    if (!artistId) {
      return new Response(
        JSON.stringify({ error: 'artistId is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;

    // Fetch subscribers
    if (type === 'subscribers') {
      const subscribersResult = await db
        .prepare(`
          SELECT *
          FROM email_subscribers
          WHERE artist_id = ?
          ORDER BY subscribed_at DESC
        `)
        .bind(artistId)
        .all();

      return new Response(
        JSON.stringify({
          success: true,
          data: subscribersResult.results || [],
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=300',
          },
        }
      );
    }

    // If campaignId is provided, fetch single campaign with analytics
    if (campaignId) {
      const campaignResult = await db
        .prepare('SELECT * FROM email_campaigns WHERE id = ? AND artist_id = ?')
        .bind(campaignId, artistId)
        .first();

      if (!campaignResult) {
        return new Response(
          JSON.stringify({ error: 'Campaign not found' }),
          { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Get send analytics
      const sendsResult = await db
        .prepare(`
          SELECT
            status,
            COUNT(*) as count
          FROM email_sends
          WHERE campaign_id = ?
          GROUP BY status
        `)
        .bind(campaignId)
        .all();

      return new Response(
        JSON.stringify({
          success: true,
          data: {
            ...campaignResult,
            analytics: sendsResult.results || [],
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

    // Otherwise, fetch all campaigns for the artist
    const campaignsResult = await db
      .prepare(`
        SELECT
          ec.*,
          (SELECT COUNT(*) FROM email_sends WHERE campaign_id = ec.id) as total_sends,
          (SELECT COUNT(*) FROM email_sends WHERE campaign_id = ec.id AND status = 'delivered') as delivered_count,
          (SELECT COUNT(*) FROM email_sends WHERE campaign_id = ec.id AND opened_at IS NOT NULL) as opened_count,
          (SELECT COUNT(*) FROM email_sends WHERE campaign_id = ec.id AND clicked_at IS NOT NULL) as clicked_count
        FROM email_campaigns ec
        WHERE ec.artist_id = ?
        ORDER BY ec.created_at DESC
      `)
      .bind(artistId)
      .all();

    return new Response(
      JSON.stringify({
        success: true,
        data: campaignsResult.results || [],
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
    console.error('Email API GET error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to fetch email data',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// POST - Create a new email campaign
export async function onRequestPost(context: { env: Env; request: Request }) {
  try {
    const body = await context.request.json();
    const {
      artistId,
      name,
      subject,
      previewText,
      htmlContent,
      scheduledFor,
    } = body;

    if (!artistId || !name || !subject || !htmlContent) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;
    const campaignId = `campaign-${Date.now()}`;

    await db
      .prepare(`
        INSERT INTO email_campaigns (
          id, artist_id, name, subject, preview_text,
          html_content, scheduled_for, status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, 'draft')
      `)
      .bind(
        campaignId,
        artistId,
        name,
        subject,
        previewText || null,
        htmlContent,
        scheduledFor || null
      )
      .run();

    // Fetch the created campaign
    const campaignResult = await db
      .prepare('SELECT * FROM email_campaigns WHERE id = ?')
      .bind(campaignId)
      .first();

    return new Response(
      JSON.stringify({
        success: true,
        data: campaignResult,
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Email API POST error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to create email campaign',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
