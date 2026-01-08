/**
 * Products API - Manage merchandise products and orders
 * Cloudflare Pages Function
 */

import type { D1Database } from '../../src/lib/database';

interface Env {
  DB: D1Database;
}

// GET - Fetch products or orders
export async function onRequestGet(context: { env: Env; request: Request }) {
  try {
    const url = new URL(context.request.url);
    const artistId = url.searchParams.get('artistId');
    const productId = url.searchParams.get('productId');
    const type = url.searchParams.get('type'); // 'products' or 'orders'

    if (!artistId) {
      return new Response(
        JSON.stringify({ error: 'artistId is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;

    // Fetch orders if type is 'orders'
    if (type === 'orders') {
      const ordersResult = await db
        .prepare(`
          SELECT
            o.*,
            pr.artist_name,
            pr.email
          FROM orders o
          JOIN profiles pr ON o.customer_id = pr.id
          WHERE o.artist_id = ?
          ORDER BY o.created_at DESC
        `)
        .bind(artistId)
        .all();

      // Get order items for each order
      const ordersWithItems = await Promise.all(
        (ordersResult.results || []).map(async (order: any) => {
          const itemsResult = await db
            .prepare(`
              SELECT
                oi.*,
                p.name as product_name,
                p.category
              FROM order_items oi
              JOIN products p ON oi.product_id = p.id
              WHERE oi.order_id = ?
            `)
            .bind(order.id)
            .all();

          return {
            ...order,
            items: itemsResult.results || [],
          };
        })
      );

      return new Response(
        JSON.stringify({
          success: true,
          data: ordersWithItems,
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

    // If productId is provided, fetch single product with images
    if (productId) {
      const productResult = await db
        .prepare('SELECT * FROM products WHERE id = ? AND artist_id = ?')
        .bind(productId, artistId)
        .first();

      if (!productResult) {
        return new Response(
          JSON.stringify({ error: 'Product not found' }),
          { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Get images for this product
      const imagesResult = await db
        .prepare('SELECT * FROM product_images WHERE product_id = ? ORDER BY position ASC')
        .bind(productId)
        .all();

      return new Response(
        JSON.stringify({
          success: true,
          data: {
            ...productResult,
            images: imagesResult.results || [],
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
    }

    // Otherwise, fetch all products for the artist
    const productsResult = await db
      .prepare(`
        SELECT
          p.*,
          (SELECT COUNT(*) FROM product_images WHERE product_id = p.id) as image_count
        FROM products p
        WHERE p.artist_id = ?
        ORDER BY p.created_at DESC
      `)
      .bind(artistId)
      .all();

    return new Response(
      JSON.stringify({
        success: true,
        data: productsResult.results || [],
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
    console.error('Products API GET error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to fetch products',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// POST - Create a new product
export async function onRequestPost(context: { env: Env; request: Request }) {
  try {
    const body = await context.request.json();
    const {
      artistId,
      name,
      description,
      category,
      price,
      currency,
      stock,
      sizes,
      colors,
    } = body;

    if (!artistId || !name || !category || !price) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const db = context.env.DB;
    const productId = `product-${Date.now()}`;
    const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    await db
      .prepare(`
        INSERT INTO products (
          id, artist_id, name, slug, description, category,
          price, currency, stock, sizes, colors, status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')
      `)
      .bind(
        productId,
        artistId,
        name,
        slug,
        description || null,
        category,
        price,
        currency || 'USD',
        stock || 0,
        sizes ? JSON.stringify(sizes) : null,
        colors ? JSON.stringify(colors) : null
      )
      .run();

    // Fetch the created product
    const productResult = await db
      .prepare('SELECT * FROM products WHERE id = ?')
      .bind(productId)
      .first();

    return new Response(
      JSON.stringify({
        success: true,
        data: productResult,
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Products API POST error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to create product',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
