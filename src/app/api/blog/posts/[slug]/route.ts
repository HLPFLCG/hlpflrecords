import { NextResponse } from 'next/server';
import { NewsPost } from '@/types';

// In-memory storage (in production, use a database)
const blogPosts: NewsPost[] = [
  {
    id: '1',
    title: 'Alki Drops New Single "221"',
    slug: 'alki-221-release',
    excerpt: 'Alki returns with his most aggressive track yet...',
    content: 'Full content here...',
    publishedAt: new Date('2025-01-17'),
    author: 'HLPFL Team',
    category: 'Releases',
    image: '/images/team/IMG_2768.png',
  },
];

// GET: Fetch single blog post by slug
export async function GET(
  request: Request,
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