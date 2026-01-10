/**
 * API Client for HLPFL Artist Portal
 *
 * Provides type-safe interface for Cloudflare Pages Functions API
 * All API calls return consistent response format with success/error handling
 *
 * @version 2.0.0
 * @module api-client
 */

// Response types
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

// Base API configuration
const API_BASE_URL = typeof window !== 'undefined'
  ? window.location.origin
  : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8788';

/**
 * Generic API fetch wrapper with error handling
 */
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

/**
 * Dashboard API Client
 */
export const dashboardApi = {
  /**
   * Get dashboard overview data
   */
  async getOverview(artistId: string) {
    return apiFetch(`/api/dashboard?artistId=${artistId}`);
  },
};

/**
 * Releases API Client
 */
export const releasesApi = {
  /**
   * Get all releases for an artist
   */
  async getAll(artistId: string) {
    return apiFetch(`/api/releases?artistId=${artistId}`);
  },

  /**
   * Get a single release with tracks
   */
  async getById(artistId: string, releaseId: string) {
    return apiFetch(`/api/releases?artistId=${artistId}&releaseId=${releaseId}`);
  },

  /**
   * Create a new release
   */
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

  /**
   * Update an existing release
   */
  async update(releaseId: string, updates: any) {
    return apiFetch('/api/releases', {
      method: 'PUT',
      body: JSON.stringify({ releaseId, ...updates }),
    });
  },

  /**
   * Delete a release
   */
  async delete(artistId: string, releaseId: string) {
    return apiFetch(`/api/releases?artistId=${artistId}&releaseId=${releaseId}`, {
      method: 'DELETE',
    });
  },
};

/**
 * Analytics API Client
 */
export const analyticsApi = {
  /**
   * Get analytics data with optional filters
   */
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

/**
 * Revenue API Client
 */
export const revenueApi = {
  /**
   * Get revenue data with optional filters
   */
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

/**
 * Community API Client
 */
export const communityApi = {
  /**
   * Get all community posts
   */
  async getPosts(artistId: string, limit = 20, offset = 0) {
    return apiFetch(`/api/community?artistId=${artistId}&limit=${limit}&offset=${offset}`);
  },

  /**
   * Get a single post with comments
   */
  async getPost(artistId: string, postId: string) {
    return apiFetch(`/api/community?artistId=${artistId}&postId=${postId}`);
  },

  /**
   * Create a new community post
   */
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

  /**
   * Delete a community post
   */
  async deletePost(artistId: string, postId: string) {
    return apiFetch(`/api/community?artistId=${artistId}&postId=${postId}`, {
      method: 'DELETE',
    });
  },
};

/**
 * Products API Client (Merch)
 */
export const productsApi = {
  /**
   * Get all products
   */
  async getAll(artistId: string) {
    return apiFetch(`/api/products?artistId=${artistId}`);
  },

  /**
   * Get a single product with images
   */
  async getById(artistId: string, productId: string) {
    return apiFetch(`/api/products?artistId=${artistId}&productId=${productId}`);
  },

  /**
   * Get all orders
   */
  async getOrders(artistId: string) {
    return apiFetch(`/api/products?artistId=${artistId}&type=orders`);
  },

  /**
   * Create a new product
   */
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

/**
 * Social Media API Client
 */
export const socialApi = {
  /**
   * Get connected social accounts
   */
  async getAccounts(artistId: string) {
    return apiFetch(`/api/social?artistId=${artistId}&type=accounts`);
  },

  /**
   * Get scheduled posts
   */
  async getPosts(artistId: string) {
    return apiFetch(`/api/social?artistId=${artistId}&type=posts`);
  },

  /**
   * Schedule a new post
   */
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

  /**
   * Delete a scheduled post
   */
  async deletePost(artistId: string, postId: string) {
    return apiFetch(`/api/social?artistId=${artistId}&postId=${postId}`, {
      method: 'DELETE',
    });
  },
};

/**
 * Email Campaigns API Client
 */
export const emailApi = {
  /**
   * Get all email campaigns
   */
  async getCampaigns(artistId: string) {
    return apiFetch(`/api/email?artistId=${artistId}&type=campaigns`);
  },

  /**
   * Get a single campaign with analytics
   */
  async getCampaign(artistId: string, campaignId: string) {
    return apiFetch(`/api/email?artistId=${artistId}&campaignId=${campaignId}`);
  },

  /**
   * Get all subscribers
   */
  async getSubscribers(artistId: string) {
    return apiFetch(`/api/email?artistId=${artistId}&type=subscribers`);
  },

  /**
   * Create a new email campaign
   */
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

/**
 * Combined API object with all endpoint clients
 * This is the main export used by dashboard pages
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
 * Default export for convenience
 */
export default api;
