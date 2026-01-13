'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  MessageCircle,
  Heart,
  Share2,
  Send,
  Image as ImageIcon,
  Video,
  Music,
  Sparkles,
  TrendingUp,
  Award,
  Plus,
  Search,
  Filter,
  Mic,
  FileText,
  Target
} from 'lucide-react'

interface Post {
  id: string
  author: {
    name: string
    avatar: string
    role: string
  }
  content: string
  media?: {
    type: 'image' | 'video' | 'audio'
    url: string
  }[]
  timestamp: Date
  likes: number
  comments: number
  shares: number
  liked: boolean
  category: 'update' | 'collaboration' | 'milestone' | 'question'
}

// Mock community data
const mockCommunityData = {
  stats: { total_artists: 1, active_posts: 5, collaborations: 2, this_week_growth: 3 },
  leaderboard: [
    { rank: 1, name: 'PRIV', badge: 'Top Contributor', contributions: 15 },
    { rank: 2, name: 'HLPFL Team', badge: 'Staff', contributions: 12 },
    { rank: 3, name: 'Fan Community', badge: 'Active Member', contributions: 8 },
  ],
  posts: [
    {
      id: '1',
      author: { name: 'PRIV', avatar: '/images/artists/priv.svg', role: 'Artist' },
      content: 'Just finished recording some new experimental tracks in the studio. Can\'t wait to share what I\'ve been working on with everyone. The creative process has been incredible!',
      timestamp: new Date('2026-01-12'),
      likes: 42,
      comments: 8,
      shares: 5,
      liked: false,
      category: 'update' as const
    },
    {
      id: '2',
      author: { name: 'PRIV', avatar: '/images/artists/priv.svg', role: 'Artist' },
      content: 'Hit a major milestone today - "Emerging Sounds" just crossed 100K streams! Thank you to everyone who has been supporting the journey. This is just the beginning.',
      timestamp: new Date('2026-01-10'),
      likes: 156,
      comments: 23,
      shares: 18,
      liked: false,
      category: 'milestone' as const
    },
    {
      id: '3',
      author: { name: 'PRIV', avatar: '/images/artists/priv.svg', role: 'Artist' },
      content: 'Looking for a producer who specializes in ambient/experimental sounds. Want to push the boundaries on my next project. DM if interested in collaborating!',
      timestamp: new Date('2026-01-08'),
      likes: 28,
      comments: 12,
      shares: 7,
      liked: false,
      category: 'collaboration' as const
    },
    {
      id: '4',
      author: { name: 'HLPFL Team', avatar: '', role: 'Staff' },
      content: 'Welcome to the HLPFL community! This is your space to connect, collaborate, and grow together. Share your updates, ask questions, and support fellow artists.',
      timestamp: new Date('2026-01-05'),
      likes: 67,
      comments: 15,
      shares: 10,
      liked: false,
      category: 'update' as const
    },
    {
      id: '5',
      author: { name: 'PRIV', avatar: '/images/artists/priv.svg', role: 'Artist' },
      content: 'What software do you all use for creating visuals for your releases? Looking to step up my visual game for the next single drop.',
      timestamp: new Date('2026-01-03'),
      likes: 19,
      comments: 31,
      shares: 2,
      liked: false,
      category: 'question' as const
    },
  ]
}

export default function CommunityFeed() {
  const [showComposer, setShowComposer] = useState(false)
  const [filter, setFilter] = useState('all')

  const communityData = mockCommunityData
  const stats = communityData.stats
  const leaderboard = communityData.leaderboard
  const posts: Post[] = communityData.posts

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'collaboration': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'milestone': return 'bg-gold/20 text-gold border-gold/30'
      case 'question': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'collaboration': return Users
      case 'milestone': return Award
      case 'question': return MessageCircle
      default: return Sparkles
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Community Feed</h1>
          <p className="text-gray-400">Connect with fellow HLPFL artists</p>
        </div>
        <button
          onClick={() => setShowComposer(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>Create Post</span>
        </button>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-dark-secondary border border-gray-800 rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Artists</p>
              <p className="text-xl font-bold text-white">{stats.total_artists}</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-secondary border border-gray-800 rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Active Posts</p>
              <p className="text-xl font-bold text-white">{stats.active_posts}</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-secondary border border-gray-800 rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Collaborations</p>
              <p className="text-xl font-bold text-white">{stats.collaborations}</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-secondary border border-gray-800 rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">This Week</p>
              <p className="text-xl font-bold text-white">+{stats.this_week_growth}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Filters */}
          <div className="bg-dark-secondary border border-gray-800 rounded-xl p-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-full bg-dark-tertiary border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-dark-tertiary border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="all">All Posts</option>
                <option value="updates">Updates</option>
                <option value="collaborations">Collaborations</option>
                <option value="milestones">Milestones</option>
                <option value="questions">Questions</option>
              </select>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post, index) => {
            const CategoryIcon = getCategoryIcon(post.category)
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-secondary border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
              >
                {/* Author Info */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                      {post.author.avatar ? (
                        <img src={post.author.avatar} alt={post.author.name} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        <span className="text-dark font-bold">
                          {post.author.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{post.author.name}</p>
                      <p className="text-gray-500 text-sm">{post.author.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(post.category)}`}>
                      <CategoryIcon className="w-3 h-3 inline mr-1" />
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-4">{post.content}</p>

                {/* Timestamp */}
                <p className="text-gray-500 text-sm mb-4">
                  {post.timestamp.toLocaleDateString()} at {post.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-6">
                    <button className={`flex items-center space-x-2 transition-colors ${
                      post.liked ? 'text-gold' : 'text-gray-400 hover:text-gold'
                    }`}>
                      <Heart className={`w-5 h-5 ${post.liked ? 'fill-current' : ''}`} />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>

                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </button>

                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span className="text-sm font-medium">{post.shares}</span>
                    </button>
                  </div>

                  <button className="text-gold text-sm font-medium hover:text-gold-light transition-colors">
                    View Thread
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Leaderboard */}
          <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="w-5 h-5 text-gold" />
              <h2 className="text-xl font-bold text-white">Top Contributors</h2>
            </div>

            <div className="space-y-3">
              {leaderboard.map((user: any) => (
                <div
                  key={user.rank}
                  className="flex items-center justify-between p-3 bg-dark-tertiary rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      user.rank === 1 ? 'bg-gold text-dark' :
                      user.rank === 2 ? 'bg-gray-400 text-dark' :
                      'bg-amber-600 text-dark'
                    }`}>
                      {user.rank}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{user.name}</p>
                      <p className="text-gray-500 text-xs">{user.badge}</p>
                    </div>
                  </div>
                  <span className="text-gold font-semibold text-sm">{user.contributions}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Collaborations */}
          <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-bold text-white">Active Collabs</h2>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-dark-tertiary rounded-lg cursor-pointer hover:bg-dark-tertiary/70 transition-colors">
                <p className="text-white font-medium text-sm mb-1">Demo Artist × Producer Needed</p>
                <p className="text-gray-400 text-xs mb-2">Looking for beats in indie alternative style</p>
                <span className="text-xs text-green-400">3 interested</span>
              </div>

              <div className="p-3 bg-dark-tertiary rounded-lg cursor-pointer hover:bg-dark-tertiary/70 transition-colors">
                <p className="text-white font-medium text-sm mb-1">Demo Artist × Mixer</p>
                <p className="text-gray-400 text-xs mb-2">Need mixing engineer for new EP</p>
                <span className="text-xs text-green-400">5 interested</span>
              </div>
            </div>

            <button className="w-full mt-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 text-sm font-medium hover:bg-purple-500/20 transition-colors">
              View All Collaborations
            </button>
          </div>

          {/* Quick Links */}
          <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>

            <div className="space-y-2">
              <button className="w-full p-3 bg-dark-tertiary rounded-lg text-left text-white hover:bg-dark-tertiary/70 transition-colors">
                <Mic className="w-4 h-4 inline mr-2 text-gold" />
                Find Collaborators
              </button>
              <button className="w-full p-3 bg-dark-tertiary rounded-lg text-left text-white hover:bg-dark-tertiary/70 transition-colors">
                <FileText className="w-4 h-4 inline mr-2 text-gold" />
                Share Resources
              </button>
              <button className="w-full p-3 bg-dark-tertiary rounded-lg text-left text-white hover:bg-dark-tertiary/70 transition-colors">
                <Sparkles className="w-4 h-4 inline mr-2 text-gold" />
                Feature Request
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Post Composer Modal */}
      {showComposer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dark-secondary border border-gray-800 rounded-2xl max-w-2xl w-full p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Create Post</h2>
              <button
                onClick={() => setShowComposer(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Category Selection */}
            <div className="mb-6">
              <label className="text-white font-medium mb-3 block">Post Category</label>
              <div className="grid grid-cols-2 gap-3">
                {['update', 'collaboration', 'milestone', 'question'].map((cat) => {
                  const Icon = getCategoryIcon(cat)
                  return (
                    <button
                      key={cat}
                      className={`p-4 rounded-xl border-2 transition-all ${getCategoryColor(cat)} hover:scale-105`}
                    >
                      <Icon className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-medium capitalize">{cat}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <label className="text-white font-medium mb-3 block">What's on your mind?</label>
              <textarea
                placeholder="Share an update, ask for help, celebrate a win..."
                className="w-full h-32 bg-dark-tertiary border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
              />
            </div>

            {/* Media Options */}
            <div className="mb-6 flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-dark-tertiary border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gold transition-colors">
                <ImageIcon className="w-4 h-4" />
                <span className="text-sm">Photo</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-dark-tertiary border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gold transition-colors">
                <Video className="w-4 h-4" />
                <span className="text-sm">Video</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-dark-tertiary border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gold transition-colors">
                <Music className="w-4 h-4" />
                <span className="text-sm">Audio</span>
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end space-x-3">
              <button
                onClick={() => setShowComposer(false)}
                className="px-6 py-3 bg-dark-tertiary border border-gray-700 rounded-lg text-white hover:bg-dark-tertiary/70 transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all">
                <Send className="w-4 h-4 inline mr-2" />
                Post to Community
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
