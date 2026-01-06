'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Calendar, User, Filter, ArrowRight, Loader2 } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { NewsPost } from '@/types'

export default function NewsPage() {
  const [news, setNews] = useState<NewsPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'News', 'Releases', 'Artists', 'Events', 'Industry']

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true)
        setError(null)

        // Try to fetch from API first
        const apiResponse = await fetch('/api/blog/posts')
        const apiData = await apiResponse.json()

        if (apiData.success && apiData.posts.length > 0) {
          setNews(apiData.posts)
        } else {
          // Fallback to mockData
          const { mockNews } = await import('@/data/mockData')
          setNews(mockNews)
        }
      } catch (err) {
        console.error('Error fetching news:', err)
        setError('Failed to load news')

        // Fallback to mockData on error
        try {
          const { mockNews } = await import('@/data/mockData')
          setNews(mockNews)
        } catch (fallbackErr) {
          console.error('Failed to load mock data:', fallbackErr)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  const filteredNews = selectedCategory === 'All' 
    ? news 
    : news.filter(post => post.category === selectedCategory)

  const featuredPost = filteredNews[0]
  const otherPosts = filteredNews.slice(1)

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-gold animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Loading news...</p>
        </div>
      </div>
    )
  }

  if (error && news.length === 0) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            News & <span className="text-gold">Updates</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay up to date with the latest from HLPFL. 
            From new artist signings to album releases and industry insights, discover what's happening in our world.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gold" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category 
                        ? 'bg-gold text-dark' 
                        : 'bg-dark-secondary text-gray-300 hover:text-gold hover:bg-dark-tertiary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="text-gray-400">
              <span className="text-gold font-semibold">{filteredNews.length}</span> Articles
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <Card className="overflow-hidden bg-gradient-to-br from-gold/5 to-dark-secondary border-gold/20">
              <div className="lg:grid lg:grid-cols-2 gap-8">
                <div className="aspect-square lg:aspect-auto bg-gradient-to-br from-gold/20 to-dark-tertiary flex items-center justify-center">
                  {featuredPost.image ? (
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-gold text-2xl font-bold">📰</span>
                      </div>
                      <p className="text-gray-400">Featured Image</p>
                    </div>
                  )}
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gold text-dark px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm capitalize">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 hover:text-gold transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(featuredPost.publishedAt)}</span>
                      </div>
                    </div>
                    <Button>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((article) => (
              <Card key={article.id} hover className="overflow-hidden group">
                {article.image && (
                  <div className="aspect-video bg-gradient-to-br from-gold/20 to-dark-tertiary flex items-center justify-center overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-gold/10 text-gold px-2 py-1 rounded text-xs font-medium capitalize">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay <span className="text-gold">Connected</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest news, exclusive content, and behind-the-scenes updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
            />
            <Button>
              Subscribe
            </Button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  )
}
