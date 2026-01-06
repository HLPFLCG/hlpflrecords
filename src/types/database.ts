/**
 * Supabase Database Types
 *
 * Auto-generated types for type-safe database queries
 * Run `npm run update-types` to regenerate after schema changes
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          role: 'artist' | 'admin' | 'manager'
          artist_name: string | null
          display_name: string | null
          bio: string | null
          avatar_url: string | null
          banner_url: string | null
          phone: string | null
          location: string | null
          timezone: string
          spotify_url: string | null
          apple_music_url: string | null
          youtube_url: string | null
          instagram_handle: string | null
          twitter_handle: string | null
          tiktok_handle: string | null
          notifications_enabled: boolean
          email_marketing_enabled: boolean
          analytics_sharing: boolean
          created_at: string
          updated_at: string
          last_login_at: string | null
          onboarding_completed: boolean
        }
        Insert: {
          id: string
          email: string
          role?: 'artist' | 'admin' | 'manager'
          artist_name?: string | null
          display_name?: string | null
          bio?: string | null
          avatar_url?: string | null
          banner_url?: string | null
          phone?: string | null
          location?: string | null
          timezone?: string
          spotify_url?: string | null
          apple_music_url?: string | null
          youtube_url?: string | null
          instagram_handle?: string | null
          twitter_handle?: string | null
          tiktok_handle?: string | null
          notifications_enabled?: boolean
          email_marketing_enabled?: boolean
          analytics_sharing?: boolean
          created_at?: string
          updated_at?: string
          last_login_at?: string | null
          onboarding_completed?: boolean
        }
        Update: {
          id?: string
          email?: string
          role?: 'artist' | 'admin' | 'manager'
          artist_name?: string | null
          display_name?: string | null
          bio?: string | null
          avatar_url?: string | null
          banner_url?: string | null
          phone?: string | null
          location?: string | null
          timezone?: string
          spotify_url?: string | null
          apple_music_url?: string | null
          youtube_url?: string | null
          instagram_handle?: string | null
          twitter_handle?: string | null
          tiktok_handle?: string | null
          notifications_enabled?: boolean
          email_marketing_enabled?: boolean
          analytics_sharing?: boolean
          created_at?: string
          updated_at?: string
          last_login_at?: string | null
          onboarding_completed?: boolean
        }
      }
      releases: {
        Row: {
          id: string
          artist_id: string
          title: string
          slug: string
          release_type: 'album' | 'ep' | 'single'
          release_date: string
          cover_art_url: string | null
          description: string | null
          genre: string[] | null
          mood: string[] | null
          label: string | null
          upc: string | null
          isrc: string | null
          spotify_id: string | null
          apple_music_id: string | null
          youtube_id: string | null
          soundcloud_id: string | null
          spotify_url: string | null
          apple_music_url: string | null
          youtube_url: string | null
          bandcamp_url: string | null
          soundcloud_url: string | null
          total_streams: number
          total_listeners: number
          total_saves: number
          status: 'draft' | 'scheduled' | 'released' | 'archived'
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['releases']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['releases']['Insert']>
      }
      // Add more table types as needed
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
