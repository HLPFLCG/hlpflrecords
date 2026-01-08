/**
 * Database Connection Utilities
 *
 * This file provides utilities for connecting to Supabase (PostgreSQL)
 * and Cloudflare D1 (SQLite) databases.
 */

import { createClient } from '@supabase/supabase-js';

// Supabase Configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

/**
 * Public Supabase Client (Client-side)
 * Use this for public operations that don't require elevated privileges
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Admin Supabase Client (Server-side only)
 * Use this for admin operations that require service role privileges
 * NEVER expose this on the client side
 */
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

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
 * Get profile by ID
 */
export async function getProfile(userId: string): Promise<Profile | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

/**
 * Get profile by email
 */
export async function getProfileByEmail(email: string): Promise<Profile | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', email)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching profile by email:', error);
    return null;
  }
}

/**
 * Get releases for an artist
 */
export async function getArtistReleases(artistId: string): Promise<Release[]> {
  try {
    const { data, error } = await supabase
      .from('releases')
      .select('*')
      .eq('artist_id', artistId)
      .order('release_date', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching releases:', error);
    return [];
  }
}

/**
 * Get analytics for an artist
 */
export async function getArtistAnalytics(
  artistId: string,
  startDate?: string,
  endDate?: string
): Promise<AnalyticsStream[]> {
  try {
    let query = supabase
      .from('analytics_streams')
      .select('*')
      .eq('artist_id', artistId);

    if (startDate) {
      query = query.gte('date', startDate);
    }
    if (endDate) {
      query = query.lte('date', endDate);
    }

    const { data, error } = await query.order('date', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return [];
  }
}

/**
 * Create or update profile
 */
export async function upsertProfile(profile: Partial<Profile>): Promise<Profile | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('profiles')
      .upsert(profile)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error upserting profile:', error);
    return null;
  }
}

/**
 * Check if database is connected
 */
export async function isDatabaseConnected(): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('profiles')
      .select('id')
      .limit(1);

    return !error;
  } catch (error) {
    console.error('Database connection check failed:', error);
    return false;
  }
}

/**
 * Initialize database connection
 * Call this on app startup to verify connectivity
 */
export async function initializeDatabase(): Promise<{
  connected: boolean;
  message: string;
}> {
  const connected = await isDatabaseConnected();

  if (connected) {
    return {
      connected: true,
      message: 'Database connected successfully',
    };
  } else {
    return {
      connected: false,
      message: 'Database connection failed. Check environment variables.',
    };
  }
}

export default {
  supabase,
  supabaseAdmin,
  getProfile,
  getProfileByEmail,
  getArtistReleases,
  getArtistAnalytics,
  upsertProfile,
  isDatabaseConnected,
  initializeDatabase,
};
