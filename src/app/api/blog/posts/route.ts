import { NextResponse } from 'next/server';
import { NewsPost } from '@/types';

// In-memory storage (replace with database in production)
let blogPosts: NewsPost[] = [
  {
    id: '1',
    title: 'PRIV Releases New Single "Emerging Sounds"',
    slug: 'priv-emerging-sounds-release',
    excerpt: 'PRIV drops debut single "Emerging Sounds" - a fresh indie track that blends modern production with authentic emotion.',
    content: 'PRIV drops debut single "Emerging Sounds" - a fresh indie track that blends modern production with authentic emotion. This new single showcases PRIV\'s unique perspective as an emerging artist in the alternative scene.\n\nThe track represents a bold new direction for HLPFL. "Emerging Sounds" delivers the kind of authenticity and energy that connects with listeners looking for something genuine.\n\nFans can expect a fresh take on indie alternative, with modern production techniques and heartfelt lyrics.\n\nThis single marks the beginning of an exciting new chapter for PRIV and HLPFL. We\'re not just releasing music - we\'re building a movement that puts artists first and creates genuine connections with fans.',
    publishedAt: new Date('2025-11-01'),
    author: 'HLPFL Team',
    category: 'Releases',
    image: '/images/artists/priv.svg',
  },
  {
    id: '2',
    title: 'Pardyalone Surpasses 400K Monthly Listeners',
    slug: 'pardyalone-milestone',
    excerpt: 'Celebrating a major milestone as Pardyalone continues to resonate with fans worldwide.',
    content: 'Celebrating a major milestone as Pardyalone continues to resonate with fans worldwide. The artist has now surpassed 400,000 monthly listeners on Spotify, solidifying their position as one of the most exciting artists in the alternative space.\n\nPardyalone has been on an incredible journey. From viral moments to Spotify playlist placements, the music has found its way into the hearts of millions of listeners who connect with its raw energy and authentic message.\n\nThis milestone isn\'t just about numbers - it\'s about proving that independent artists can thrive when they have the right partnership. Pardyalone\'s success with HLPFL demonstrates the power of our model, where artists retain ownership and control while getting the support they need to reach their audience.\n\nThank you to every fan who has streamed, shared, and supported. We\'re just getting started, and there\'s much more to come from the HLPFL family.',
    publishedAt: new Date('2025-12-15'),
    author: 'HLPFL Team',
    category: 'News',
  },
];

// GET: Fetch all blog posts
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      posts: blogPosts.sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      ),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

// POST: Create new blog post
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: title, slug, content' },
        { status: 400 }
      );
    }
    
    // Check for duplicate slug
    const slugExists = blogPosts.some(post => post.slug === body.slug);
    if (slugExists) {
      return NextResponse.json(
        { success: false, error: 'A post with this slug already exists' },
        { status: 409 }
      );
    }
    
    // Create new post
    const newPost: NewsPost = {
      id: body.id || Date.now().toString(),
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt || body.content.substring(0, 200) + '...',
      content: body.content,
      publishedAt: body.publishedAt ? new Date(body.publishedAt) : new Date(),
      author: body.author || 'HLPFL Team',
      category: body.category || 'News',
      image: body.image || undefined,
    };
    
    // Add to beginning of array (newest first)
    blogPosts.unshift(newPost);
    
    return NextResponse.json(
      { 
        success: true, 
        post: newPost,
        message: 'Blog post created successfully'
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create post' },
      { status: 500 }
    );
  }
}

// DELETE: Delete a blog post
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Post ID is required' },
        { status: 400 }
      );
    }
    
    const initialLength = blogPosts.length;
    blogPosts = blogPosts.filter(post => post.id !== id);
    
    if (blogPosts.length === initialLength) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Post deleted successfully' 
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}