/**
 * API Client for HLPFL Artist Portal Dashboard
 *
 * This is the COMPLETE and ONLY correct version of this file.
 * It provides ALL API endpoints needed for the dashboard pages.
 *
 * DO NOT REPLACE with chatbot code - this is for dashboard API calls.
 *
 * @version 3.0.0
 * @date 2026-01-09
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  details?: string;
}

export interface PaginatedResponse<T = any> {
  success: boolean;
  data: {
    items: T[];
    total: number;
    limit: number;
    offset: number;
  };
}

// ============================================================================
// BASE CONFIGURATION
// ============================================================================

const API_BASE_URL = typeof window !== 'undefined'
  ? window.location.origin
  : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8788';

// ============================================================================
// CORE FETCH WRAPPER
// ============================================================================

async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Request failed',
        details: data.details,
      };
    }

    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

// ============================================================================
// DASHBOARD API
// ============================================================================

export const dashboardApi = {
  async getOverview(artistId: string) {
    return apiFetch(`/api/dashboard?artistId=${artistId}`);
  },
};

// ============================================================================
// RELEASES API
// ============================================================================

export const releasesApi = {
  async getAll(artistId: string) {
    return apiFetch(`/api/releases?artistId=${artistId}`);
  },

  async getById(artistId: string, releaseId: string) {
    return apiFetch(`/api/releases?artistId=${artistId}&releaseId=${releaseId}`);
  },

  async create(release: {
    artistId: string;
    title: string;
    slug: string;
    releaseType: 'single' | 'ep' | 'album';
    releaseDate: string;
    coverArtUrl?: string;
    description?: string;
    genre?: string;
  }) {
    return apiFetch('/api/releases', {
      method: 'POST',
      body: JSON.stringify(release),
    });
  },

  async update(releaseId: string, updates: any) {
    return apiFetch('/api/releases', {
      method: 'PUT',
      body: JSON.stringify({ releaseId, ...updates }),
    });
  },

  async delete(artistId: string, releaseId: string) {
    return apiFetch(`/api/releases?artistId=${artistId}&releaseId=${releaseId}`, {
      method: 'DELETE',
    });
  },
};

// ============================================================================
// ANALYTICS API
// ============================================================================

export const analyticsApi = {
  async get(params: {
    artistId: string;
    startDate?: string;
    endDate?: string;
    releaseId?: string;
  }) {
    const query = new URLSearchParams(
      Object.entries(params).filter(([_, v]) => v !== undefined) as [string, string][]
    );
    return apiFetch(`/api/analytics?${query}`);
  },
};

// ============================================================================
// REVENUE API
// ============================================================================

export const revenueApi = {
  async get(params: {
    artistId: string;
    startDate?: string;
    endDate?: string;
    source?: string;
  }) {
    const query = new URLSearchParams(
      Object.entries(params).filter(([_, v]) => v !== undefined) as [string, string][]
    );
    return apiFetch(`/api/revenue?${query}`);
  },
};

// ============================================================================
// COMMUNITY API
// ============================================================================

export const communityApi = {
  async getPosts(artistId: string, limit = 20, offset = 0) {
    return apiFetch(`/api/community?artistId=${artistId}&limit=${limit}&offset=${offset}`);
  },

  async getPost(artistId: string, postId: string) {
    return apiFetch(`/api/community?artistId=${artistId}&postId=${postId}`);
  },

  async createPost(post: {
    artistId: string;
    userId: string;
    content: string;
    imageUrl?: string;
    videoUrl?: string;
  }) {
    return apiFetch('/api/community', {
      method: 'POST',
      body: JSON.stringify(post),
    });
  },

  async deletePost(artistId: string, postId: string) {
    return apiFetch(`/api/community?artistId=${artistId}&postId=${postId}`, {
      method: 'DELETE',
    });
  },
};

// ============================================================================
// PRODUCTS/MERCH API
// ============================================================================

export const productsApi = {
  async getAll(artistId: string) {
    return apiFetch(`/api/products?artistId=${artistId}`);
  },

  async getById(artistId: string, productId: string) {
    return apiFetch(`/api/products?artistId=${artistId}&productId=${productId}`);
  },

  async getOrders(artistId: string) {
    return apiFetch(`/api/products?artistId=${artistId}&type=orders`);
  },

  async create(product: {
    artistId: string;
    name: string;
    description?: string;
    category: 'apparel' | 'accessories' | 'music' | 'other';
    price: number;
    currency?: string;
    stock?: number;
    sizes?: string[];
    colors?: string[];
  }) {
    return apiFetch('/api/products', {
      method: 'POST',
      body: JSON.stringify(product),
    });
  },
};

// ============================================================================
// SOCIAL MEDIA API
// ============================================================================

export const socialApi = {
  async getAccounts(artistId: string) {
    return apiFetch(`/api/social?artistId=${artistId}&type=accounts`);
  },

  async getPosts(artistId: string) {
    return apiFetch(`/api/social?artistId=${artistId}&type=posts`);
  },

  async schedulePost(post: {
    artistId: string;
    accountId?: string;
    content: string;
    mediaUrls?: string[];
    scheduledFor: string;
    platforms?: string[];
  }) {
    return apiFetch('/api/social', {
      method: 'POST',
      body: JSON.stringify(post),
    });
  },

  async deletePost(artistId: string, postId: string) {
    return apiFetch(`/api/social?artistId=${artistId}&postId=${postId}`, {
      method: 'DELETE',
    });
  },
};

// ============================================================================
// EMAIL CAMPAIGNS API
// ============================================================================

export const emailApi = {
  async getCampaigns(artistId: string) {
    return apiFetch(`/api/email?artistId=${artistId}&type=campaigns`);
  },

  async getCampaign(artistId: string, campaignId: string) {
    return apiFetch(`/api/email?artistId=${artistId}&campaignId=${campaignId}`);
  },

  async getSubscribers(artistId: string) {
    return apiFetch(`/api/email?artistId=${artistId}&type=subscribers`);
  },

  async createCampaign(campaign: {
    artistId: string;
    name: string;
    subject: string;
    previewText?: string;
    htmlContent: string;
    scheduledFor?: string;
  }) {
    return apiFetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(campaign),
    });
  },
};

// ============================================================================
// MAIN API EXPORT - THIS IS WHAT DASHBOARD PAGES IMPORT
// ============================================================================

/**
 * Combined API client object.
 * This is the main export used throughout the dashboard.
 *
 * Usage:
 *   import { api } from '@/lib/api-client'
 *   const data = await api.dashboard.getOverview(artistId)
 */
export const api = {
  dashboard: dashboardApi,
  releases: releasesApi,
  analytics: analyticsApi,
  revenue: revenueApi,
  community: communityApi,
  products: productsApi,
  social: socialApi,
  email: emailApi,
};

/**
 * Default export
 */
export default api;
