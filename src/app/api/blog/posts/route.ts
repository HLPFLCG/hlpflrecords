import { NextResponse } from 'next/server';
import { NewsPost } from '@/types';

// In-memory storage (replace with database in production)
let blogPosts: NewsPost[] = [
  {
    id: '1',
    title: 'PRIV Releases "living a lie" - A Raw Exploration of Authenticity',
    slug: 'priv-living-a-lie-release',
    excerpt: 'Grand Rapids alternative artist PRIV returns with "living a lie," an introspective new single exploring themes of self-deception.',
    content: 'Grand Rapids alternative artist PRIV continues their artistic evolution with the release of "living a lie," an introspective single that delves deep into themes of self-deception and the search for authenticity.\n\n"living a lie" represents PRIV\'s most emotionally vulnerable work to date. The track combines atmospheric production with candid lyricism, creating a sonic experience that resonates with anyone who has struggled with being true to themselves.\n\nSince emerging in 2023 with "Growing Up (feat. Jay Kim)," PRIV has released 10 singles, each one pushing their artistic boundaries further. Their discography includes standout tracks like "victim," "Numb," "Bones," and "Throw Away."\n\nStream "living a lie" on SoundCloud and follow PRIV @whereispriv.',
    publishedAt: new Date('2025-07-10'),
    author: 'HLPFL Team',
    category: 'Releases',
    image: '/images/artists/priv.svg',
  },
  {
    id: '2',
    title: 'HLPFL Records Welcomes PRIV to the Roster',
    slug: 'priv-joins-hlpfl',
    excerpt: 'HLPFL Records announces partnership with Grand Rapids alternative artist PRIV.',
    content: 'HLPFL Records is thrilled to announce our partnership with PRIV, an alternative music artist and producer from Grand Rapids, Michigan.\n\nPRIV emerged onto the alternative music scene with a sound that blends emotional depth, atmospheric textures, and raw self-expression. With music available on Spotify, Apple Music, and SoundCloud, PRIV represents the new wave of independent artists leveraging digital platforms for genuine artistic expression.\n\n"PRIV embodies everything HLPFL stands for," says James Rockel, Founder & CEO of HLPFL Records. "Complete creative freedom, no compromises, and a commitment to authenticity."\n\nUnder HLPFL\'s revolutionary partnership model, PRIV maintains 100% ownership of all masters and full creative control over their artistic direction.\n\nFollow PRIV\'s journey on Instagram, Twitter, and SoundCloud @whereispriv.',
    publishedAt: new Date('2023-01-15'),
    author: 'HLPFL Team',
    category: 'News',
    image: '/images/artists/priv.svg',
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