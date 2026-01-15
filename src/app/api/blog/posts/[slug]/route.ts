import { NextRequest, NextResponse } from 'next/server';
import { NewsPost } from '@/types';

// In-memory storage (in production, use a database)
const blogPosts: NewsPost[] = [
  {
    id: '1',
    title: 'PRIV Releases New Single "Emerging Sounds"',
    slug: 'priv-emerging-sounds-release',
    excerpt: 'PRIV drops debut single blending indie vibes with modern production...',
    content: 'Full content here...',
    publishedAt: new Date('2025-11-01'),
    author: 'HLPFL Team',
    category: 'Releases',
    image: '/images/artists/priv.svg',
  },
];

// Required for static export - generate params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// GET: Fetch single blog post by slug
export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    const post = blogPosts.find(post => post.slug === slug);

    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      post,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}
