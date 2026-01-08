/**
 * Revenue API - Track and manage revenue streams
 * Cloudflare Pages Function
 */

import type { D1Database } from '../../src/lib/database';

interface Env {
  DB: D1Database;
}

// GET - Fetch revenue data
export async function onRequestGet(context: { env: Env; request: Request }) {
  try {
    const url = new URL(context.request.url);
    const artistId = url.searchParams.get('artistId');
    const startDate = url.searchParams.get('startDate');
    const endDate = url.searchParams.get('endDate');
    const source = url.searchParams.get('source');

    if (!artistId) {
      return new Response(
        JSON.stringify({ error: 'artistId is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;

    // Build revenue query
    let revenueQuery = `
      SELECT
        date,
        source,
        amount,
        currency,
        status,
        description,
        created_at
      FROM revenue_streams
      WHERE artist_id = ?
    `;
    const revenueBindings: any[] = [artistId];

    if (startDate) {
      revenueQuery += ' AND date >= ?';
      revenueBindings.push(startDate);
    }
    if (endDate) {
      revenueQuery += ' AND date <= ?';
      revenueBindings.push(endDate);
    }
    if (source) {
      revenueQuery += ' AND source = ?';
      revenueBindings.push(source);
    }

    revenueQuery += ' ORDER BY date DESC';

    const revenueResult = await db
      .prepare(revenueQuery)
      .bind(...revenueBindings)
      .all();

    // Get revenue totals by source
    const totalsBySourceResult = await db
      .prepare(`
        SELECT
          source,
          SUM(amount) as total_amount,
          COUNT(*) as transaction_count,
          currency
        FROM revenue_streams
        WHERE artist_id = ?
        ${startDate ? 'AND date >= ?' : ''}
        ${endDate ? 'AND date <= ?' : ''}
        GROUP BY source, currency
        ORDER BY total_amount DESC
      `)
      .bind(...revenueBindings.slice(0, startDate && endDate ? 3 : startDate || endDate ? 2 : 1))
      .all();

    // Get payouts
    const payoutsResult = await db
      .prepare(`
        SELECT
          id,
          amount,
          currency,
          status,
          payout_date,
          method,
          created_at
        FROM payouts
        WHERE artist_id = ?
        ${startDate ? 'AND payout_date >= ?' : ''}
        ${endDate ? 'AND payout_date <= ?' : ''}
        ORDER BY payout_date DESC
      `)
      .bind(...revenueBindings.slice(0, startDate && endDate ? 3 : startDate || endDate ? 2 : 1))
      .all();

    // Calculate overall totals
    const overallTotalsResult = await db
      .prepare(`
        SELECT
          SUM(amount) as total_revenue,
          COUNT(*) as total_transactions
        FROM revenue_streams
        WHERE artist_id = ?
        ${startDate ? 'AND date >= ?' : ''}
        ${endDate ? 'AND date <= ?' : ''}
      `)
      .bind(...revenueBindings.slice(0, startDate && endDate ? 3 : startDate || endDate ? 2 : 1))
      .first();

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          revenue: revenueResult.results || [],
          totalsBySource: totalsBySourceResult.results || [],
          payouts: payoutsResult.results || [],
          overallTotals: overallTotalsResult || {
            total_revenue: 0,
            total_transactions: 0,
          },
        },
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
    console.error('Revenue API error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to fetch revenue data',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
