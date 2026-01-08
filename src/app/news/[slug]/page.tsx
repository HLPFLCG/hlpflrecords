import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { User, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { formatDate } from '@/lib/utils'
import { mockNews } from '@/data/mockData'

// REQUIRED FOR STATIC EXPORT
// Generate static params for all blog posts
export async function generateStaticParams() {
  // Return all blog post slugs from mock data
  return mockNews.map((post) => ({
    slug: post.slug,
  }))
}

async function getBlogPost(slug: string) {
  // Use mockData directly during build time
  // This avoids network calls during static generation
  const { mockNews } = await import('@/data/mockData')
  return mockNews.find(post => post.slug === slug)
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found | HLPFL',
    }
  }

  return {
    title: `${post.title} | HLPFL`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="py-8 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <Link href="/news">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium capitalize">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-400 text-sm">
                {formatDate(post.publishedAt)}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-white font-medium">{post.author}</p>
                  <p className="text-gray-400 text-sm">HLPFL Team</p>
                </div>
              </div>

              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-12 border-t border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Share this article</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline">
                Share on Twitter
              </Button>
              <Button variant="outline">
                Share on Facebook
              </Button>
              <Button variant="outline">
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 px-4 bg-dark-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">More from HLPFL</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <span className="text-gold text-sm font-medium">Coming Soon</span>
              <h3 className="text-lg font-bold text-white mt-2">More articles</h3>
              <p className="text-gray-400 mt-2">We're working on more great content for you.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
