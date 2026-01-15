'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar as CalendarIcon,
  Plus,
  Instagram,
  Twitter,
  Facebook,
  Music as TikTok,
  Youtube,
  Image as ImageIcon,
  Video,
  Clock,
  Send,
  Save,
  Sparkles,
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
  Share2,
  BarChart3,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

interface SocialPost {
  id: string
  platform: ('instagram' | 'twitter' | 'tiktok' | 'facebook' | 'youtube')[]
  content: string
  media?: string[]
  scheduledFor: Date
  status: 'draft' | 'scheduled' | 'published'
  engagement?: {
    likes: number
    comments: number
    shares: number
  }
}

export default function SocialMediaDashboard() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [showComposer, setShowComposer] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'from-pink-500 to-purple-500', connected: true },
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'from-blue-400 to-blue-600', connected: true },
    { id: 'tiktok', name: 'TikTok', icon: TikTok, color: 'from-black to-gray-800', connected: false },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'from-blue-600 to-blue-800', connected: true },
    { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'from-red-500 to-red-700', connected: false }
  ]

  // Mock scheduled posts for PRIV (actual releases)
  const scheduledPosts: SocialPost[] = [
    {
      id: '1',
      platform: ['instagram', 'twitter'],
      content: 'New music dropping soon! Been working on something special for you all 🎵✨ #NewMusic #IndieArtist #Alternative',
      scheduledFor: new Date('2026-01-15T14:00:00'),
      status: 'scheduled'
    },
    {
      id: '2',
      platform: ['instagram'],
      content: 'Behind the scenes from the studio session last week. Working on new material after "living a lie" 🔥',
      scheduledFor: new Date('2026-01-12T18:00:00'),
      status: 'published',
      engagement: {
        likes: 1247,
        comments: 89,
        shares: 34
      }
    },
    {
      id: '3',
      platform: ['twitter', 'facebook'],
      content: 'Thank you for 100K streams on "victim"! Your support means everything 💜',
      scheduledFor: new Date('2026-01-10T12:00:00'),
      status: 'published',
      engagement: {
        likes: 892,
        comments: 156,
        shares: 67
      }
    },
    {
      id: '4',
      platform: ['instagram'],
      content: 'Valentine\'s Day merch drop coming Feb 10th! Limited edition pieces 💝',
      scheduledFor: new Date('2026-02-08T10:00:00'),
      status: 'scheduled'
    }
  ]

  const stats = [
    { label: 'Total Reach', value: '124.5K', change: '+12.3%', positive: true, icon: Users },
    { label: 'Engagement Rate', value: '8.2%', change: '+2.1%', positive: true, icon: Heart },
    { label: 'Posts This Week', value: '12', change: '+4', positive: true, icon: BarChart3 },
    { label: 'Followers Growth', value: '+1,234', change: '+18.2%', positive: true, icon: TrendingUp }
  ]

  const bestTimes = [
    { day: 'Monday', time: '2:00 PM - 4:00 PM', engagement: '92%' },
    { day: 'Wednesday', time: '12:00 PM - 2:00 PM', engagement: '88%' },
    { day: 'Friday', time: '6:00 PM - 8:00 PM', engagement: '95%' },
    { day: 'Sunday', time: '10:00 AM - 12:00 PM', engagement: '85%' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Social Media Manager</h1>
          <p className="text-gray-400">Schedule, automate, and analyze your social presence</p>
        </div>
        <button
          onClick={() => setShowComposer(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>Create Post</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-secondary border border-gray-800 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-10 h-10 text-gold" />
              <span className={`text-sm font-semibold ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Platform Connection Status */}
      <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Connected Platforms</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className={`relative p-4 rounded-xl border-2 transition-all ${
                platform.connected
                  ? 'border-green-500 bg-green-500/10'
                  : 'border-gray-700 bg-dark-tertiary hover:border-gold'
              }`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <platform.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-center text-white font-medium text-sm">{platform.name}</p>
              <div className="absolute top-2 right-2">
                {platform.connected ? (
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                ) : (
                  <button className="text-xs text-gold hover:text-gold-light">Connect</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-2 bg-dark-secondary border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Content Calendar</h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-dark-tertiary rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </button>
              <span className="text-white font-medium">
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
              <button className="p-2 hover:bg-dark-tertiary rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Simplified Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-gray-500 text-sm font-medium py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 3
              const hasPost = day === 10 || day === 9 || day === 11
              return (
                <div
                  key={i}
                  className={`aspect-square p-2 rounded-lg text-center ${
                    day >= 1 && day <= 31
                      ? hasPost
                        ? 'bg-gold/20 border border-gold text-white cursor-pointer hover:bg-gold/30'
                        : 'bg-dark-tertiary text-gray-400 hover:bg-dark-tertiary/70 cursor-pointer'
                      : 'bg-transparent text-gray-700'
                  }`}
                >
                  {day >= 1 && day <= 31 && (
                    <div>
                      <div className="text-sm">{day}</div>
                      {hasPost && <div className="w-2 h-2 bg-gold rounded-full mx-auto mt-1"></div>}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Best Times to Post */}
        <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="w-5 h-5 text-gold" />
            <h2 className="text-xl font-bold text-white">Best Times to Post</h2>
          </div>
          <p className="text-gray-400 text-sm mb-6">AI-recommended posting times based on your audience</p>

          <div className="space-y-4">
            {bestTimes.map((time, index) => (
              <div key={index} className="p-4 bg-dark-tertiary rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{time.day}</span>
                  <span className="text-gold text-sm font-semibold">{time.engagement}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{time.time}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 bg-gold/10 border border-gold/30 rounded-lg text-gold font-medium hover:bg-gold/20 transition-colors">
            Schedule at Best Times
          </button>
        </div>
      </div>

      {/* Scheduled Posts */}
      <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-6">Scheduled Posts</h2>

        <div className="space-y-4">
          {scheduledPosts.map((post) => (
            <div key={post.id} className="p-4 bg-dark-tertiary rounded-xl border border-gray-700 hover:border-gold/50 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  {post.platform.map((p) => {
                    const platform = platforms.find(pl => pl.id === p)
                    if (!platform) return null
                    return (
                      <div key={p} className={`w-8 h-8 bg-gradient-to-br ${platform.color} rounded-lg flex items-center justify-center`}>
                        <platform.icon className="w-4 h-4 text-white" />
                      </div>
                    )
                  })}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  post.status === 'published'
                    ? 'bg-green-500/20 text-green-400'
                    : post.status === 'scheduled'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {post.status}
                </span>
              </div>

              <p className="text-white mb-3">{post.content}</p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{post.scheduledFor.toLocaleDateString()} at {post.scheduledFor.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>

                {post.engagement && (
                  <div className="flex items-center space-x-4 text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.engagement.likes.toLocaleString()}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.engagement.comments}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Share2 className="w-4 h-4" />
                      <span>{post.engagement.shares}</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
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

            {/* Platform Selection */}
            <div className="mb-6">
              <label className="text-white font-medium mb-3 block">Select Platforms</label>
              <div className="flex flex-wrap gap-3">
                {platforms.filter(p => p.connected).map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => {
                      setSelectedPlatforms(prev =>
                        prev.includes(platform.id)
                          ? prev.filter(p => p !== platform.id)
                          : [...prev, platform.id]
                      )
                    }}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      selectedPlatforms.includes(platform.id)
                        ? 'border-gold bg-gold/10'
                        : 'border-gray-700 bg-dark-tertiary hover:border-gold/50'
                    }`}
                  >
                    <platform.icon className="w-5 h-5 text-white" />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Input */}
            <div className="mb-6">
              <label className="text-white font-medium mb-3 block">Content</label>
              <textarea
                placeholder="What's on your mind?"
                className="w-full h-32 bg-dark-tertiary border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
              />
            </div>

            {/* Media Upload */}
            <div className="mb-6">
              <label className="text-white font-medium mb-3 block">Media</label>
              <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-gold/50 transition-colors cursor-pointer">
                <ImageIcon className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-400">Click to upload images or videos</p>
                <p className="text-gray-600 text-sm mt-1">PNG, JPG, MP4 up to 50MB</p>
              </div>
            </div>

            {/* Schedule */}
            <div className="mb-6">
              <label className="text-white font-medium mb-3 block">Schedule</label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="bg-dark-tertiary border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
                <input
                  type="time"
                  className="bg-dark-tertiary border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white transition-colors">
                <Sparkles className="w-4 h-4" />
                <span>AI Enhance</span>
              </button>

              <div className="flex items-center space-x-3">
                <button className="px-6 py-3 bg-dark-tertiary border border-gray-700 rounded-lg text-white hover:bg-dark-tertiary/70 transition-colors">
                  <Save className="w-4 h-4 inline mr-2" />
                  Save Draft
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all">
                  <Send className="w-4 h-4 inline mr-2" />
                  Schedule Post
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
