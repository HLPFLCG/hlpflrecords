/**
 * Database Connection Utilities
 *
 * This file provides utilities for connecting to Cloudflare D1 (SQLite) database.
 * Supabase support is optional and requires @supabase/supabase-js to be installed.
 */

// Type-safe database client (will be bound by Cloudflare Workers/Pages)
export type D1Database = {
  prepare: (query: string) => D1PreparedStatement;
  dump: () => Promise<ArrayBuffer>;
  batch: <T = unknown>(statements: D1PreparedStatement[]) => Promise<T[]>;
  exec: (query: string) => Promise<D1ExecResult>;
};

export type D1PreparedStatement = {
  bind: (...values: unknown[]) => D1PreparedStatement;
  first: <T = unknown>(colName?: string) => Promise<T | null>;
  run: () => Promise<D1Result>;
  all: <T = unknown>() => Promise<D1Result<T>>;
  raw: <T = unknown>() => Promise<T[]>;
};

export type D1Result<T = unknown> = {
  results: T[];
  success: boolean;
  meta: {
    duration: number;
    rows_read: number;
    rows_written: number;
  };
};

export type D1ExecResult = {
  count: number;
  duration: number;
};

/**
 * Supabase Client (Optional - requires @supabase/supabase-js package)
 * Uncomment and install the package if you want to use Supabase
 */
// import { createClient } from '@supabase/supabase-js';
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Database Query Helpers
 */

export interface Profile {
  id: string;
  email: string;
  role: 'artist' | 'admin' | 'manager';
  artist_name?: string;
  display_name?: string;
  bio?: string;
  avatar_url?: string;
  spotify_url?: string;
  instagram_handle?: string;
  twitter_handle?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Release {
  id: string;
  artist_id: string;
  title: string;
  slug: string;
  release_type: 'album' | 'ep' | 'single';
  release_date: string;
  cover_art_url?: string;
  description?: string;
  genre?: string;
  spotify_url?: string;
  apple_music_url?: string;
  youtube_url?: string;
  total_streams?: number;
  total_listeners?: number;
  status: 'draft' | 'scheduled' | 'released' | 'archived';
  created_at?: string;
  updated_at?: string;
}

export interface AnalyticsStream {
  id: string;
  artist_id: string;
  release_id?: string;
  date: string;
  platform: 'spotify' | 'apple_music' | 'youtube' | 'soundcloud' | 'other';
  streams?: number;
  listeners?: number;
  saves?: number;
  country_code?: string;
  created_at?: string;
}

/**
 * Cloudflare D1 Database Helper Functions
 * These functions work with the D1 database bound in wrangler.toml
 */

/**
 * Get profile by ID (D1 version)
 * Usage: await getProfile(db, userId)
 */
export async function getProfile(db: D1Database, userId: string): Promise<Profile | null> {
  try {
    const stmt = db.prepare('SELECT * FROM profiles WHERE id = ?').bind(userId);
    const result = await stmt.first<Profile>();
    return result;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

/**
 * Get profile by email (D1 version)
 */
export async function getProfileByEmail(db: D1Database, email: string): Promise<Profile | null> {
  try {
    const stmt = db.prepare('SELECT * FROM profiles WHERE email = ?').bind(email);
    const result = await stmt.first<Profile>();
    return result;
  } catch (error) {
    console.error('Error fetching profile by email:', error);
    return null;
  }
}

/**
 * Get releases for an artist (D1 version)
 */
export async function getArtistReleases(db: D1Database, artistId: string): Promise<Release[]> {
  try {
    const stmt = db.prepare(
      'SELECT * FROM releases WHERE artist_id = ? ORDER BY release_date DESC'
    ).bind(artistId);
    const result = await stmt.all<Release>();
    return result.results || [];
  } catch (error) {
    console.error('Error fetching releases:', error);
    return [];
  }
}

/**
 * Get analytics for an artist (D1 version)
 */
export async function getArtistAnalytics(
  db: D1Database,
  artistId: string,
  startDate?: string,
  endDate?: string
): Promise<AnalyticsStream[]> {
  try {
    let query = 'SELECT * FROM analytics_streams WHERE artist_id = ?';
    const bindings: unknown[] = [artistId];

    if (startDate) {
      query += ' AND date >= ?';
      bindings.push(startDate);
    }
    if (endDate) {
      query += ' AND date <= ?';
      bindings.push(endDate);
    }

    query += ' ORDER BY date DESC';

    const stmt = db.prepare(query).bind(...bindings);
    const result = await stmt.all<AnalyticsStream>();
    return result.results || [];
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return [];
  }
}

/**
 * Create or update profile (D1 version)
 */
export async function upsertProfile(db: D1Database, profile: Partial<Profile>): Promise<Profile | null> {
  try {
    const fields = Object.keys(profile);
    const values = Object.values(profile);
    const placeholders = fields.map(() => '?').join(', ');
    const updates = fields.map(f => `${f} = excluded.${f}`).join(', ');

    const query = `
      INSERT INTO profiles (${fields.join(', ')})
      VALUES (${placeholders})
      ON CONFLICT(id) DO UPDATE SET ${updates}
      RETURNING *
    `;

    const stmt = db.prepare(query).bind(...values);
    const result = await stmt.first<Profile>();
    return result;
  } catch (error) {
    console.error('Error upserting profile:', error);
    return null;
  }
}

/**
 * Check if database is connected (D1 version)
 */
export async function isDatabaseConnected(db: D1Database): Promise<boolean> {
  try {
    const stmt = db.prepare('SELECT 1 as test LIMIT 1');
    await stmt.first();
    return true;
  } catch (error) {
    console.error('Database connection check failed:', error);
    return false;
  }
}

/**
 * Initialize database connection
 * Call this on app startup to verify connectivity
 */
export async function initializeDatabase(db: D1Database): Promise<{
  connected: boolean;
  message: string;
}> {
  const connected = await isDatabaseConnected(db);

  if (connected) {
    return {
      connected: true,
      message: 'Database connected successfully',
    };
  } else {
    return {
      connected: false,
      message: 'Database connection failed. Check Cloudflare D1 configuration.',
    };
  }
}

export default {
  getProfile,
  getProfileByEmail,
  getArtistReleases,
  getArtistAnalytics,
  upsertProfile,
  isDatabaseConnected,
  initializeDatabase,
};
