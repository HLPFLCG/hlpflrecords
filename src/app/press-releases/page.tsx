'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Search, Calendar, Share2, ExternalLink } from 'lucide-react'

export default function PressReleasesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const pressReleases = [
    {
      id: 1,
      title: 'Alki Announces Breakthrough Debut Album "Midnight Dreams"',
      category: 'Album Release',
      date: '2024-01-10',
      excerpt: 'Rising artist Alki drops highly anticipated debut album, blending R&B with electronic elements...',
      keywords: ['alki', 'album release', 'R&B', 'new music', 'debut album', 'midnight dreams'],
      seoScore: 95,
      views: 15420
    },
    {
      id: 2,
      title: 'HLPFL Records Signs Multi-Year Deal with Alki',
      category: 'Label News',
      date: '2024-01-08',
      excerpt: 'In a landmark deal, HLPFL Records partners with Alki for exclusive distribution and artist development...',
      keywords: ['hlpfl records', 'alki', 'record deal', 'label partnership', 'music industry'],
      seoScore: 92,
      views: 12350
    },
    {
      id: 3,
      title: 'Alki\'s "Neon Nights" Reaches 1 Million Spotify Streams',
      category: 'Achievement',
      date: '2024-01-05',
      excerpt: 'Viral hit "Neon Nights" crosses 1 million streams milestone on Spotify...',
      keywords: ['alki', 'spotify', 'million streams', 'viral hit', 'neon nights', 'music streaming'],
      seoScore: 98,
      views: 28900
    },
    {
      id: 4,
      title: 'Interview: Alki on His Creative Process and Musical Journey',
      category: 'Interview',
      date: '2024-01-03',
      excerpt: 'Exclusive interview with Alki discussing his inspiration, creative process, and future plans...',
      keywords: ['alki interview', 'artist interview', 'creative process', 'music journey', 'artist development'],
      seoScore: 88,
      views: 9800
    }
  ]

  const categories = ['all', 'Album Release', 'Label News', 'Achievement', 'Interview']

  const filteredReleases = pressReleases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         release.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         release.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || release.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-2xl mb-6"
          >
            <FileText className="w-10 h-10 text-dark" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Press Releases
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest news, releases, and achievements
          </p>
        </div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-glass-card p-6 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search press releases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category
                      ? 'bg-gold text-dark font-semibold'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Press Releases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredReleases.map((release, index) => (
            <motion.article
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-glass-card p-8 rounded-2xl hover:shadow-gold-hover transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full">
                  {release.category}
                </span>
                <span className="flex items-center gap-1 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  {new Date(release.date).toLocaleDateString()}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                {release.title}
              </h2>

              <p className="text-gray-400 mb-4">
                {release.excerpt}
              </p>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2 mb-4">
                {release.keywords.slice(0, 4).map(keyword => (
                  <span key={keyword} className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">
                    {keyword}
                  </span>
                ))}
              </div>

              {/* SEO Score and Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className={`flex items-center gap-1 ${release.seoScore >= 90 ? 'text-green-400' : release.seoScore >= 80 ? 'text-yellow-400' : 'text-red-400'}`}>
                    SEO: {release.seoScore}/100
                  </span>
                  <span className="flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                    {release.views.toLocaleString()} views
                  </span>
                </div>
                <button className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors">
                  Read More
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* SEO Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-gold/20 to-gold/10 p-8 rounded-2xl border border-gold/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">SEO Optimization Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="text-gold font-semibold mb-2">Keyword Research</h4>
              <p className="text-gray-400 text-sm">Target high-volume, low-competition keywords related to Alki and music industry</p>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-2">Meta Tags</h4>
              <p className="text-gray-400 text-sm">Optimize title tags, meta descriptions, and heading hierarchy</p>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-2">Structured Data</h4>
              <p className="text-gray-400 text-sm">Implement schema markup for rich snippets in search results</p>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-2">Social Sharing</h4>
              <p className="text-gray-400 text-sm">Encourage sharing to increase backlinks and domain authority</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}