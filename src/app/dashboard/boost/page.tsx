'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Users,
  TrendingUp,
  Target,
  Calendar,
  Clock,
  Send,
  Play,
  Pause,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  Award,
  Sparkles,
  Plus,
  Check,
  X,
  BarChart3,
  Globe,
  ArrowUp,
  Settings,
  Copy,
  Download
} from 'lucide-react'

interface BoostCampaign {
  id: string
  title: string
  creator: string
  contentType: 'release' | 'video' | 'announcement' | 'event'
  contentUrl: string
  platforms: string[]
  launchTime: Date
  status: 'draft' | 'pending' | 'active' | 'completed'
  participants: number
  totalReach: number
  engagement: number
  goal: number
}

export default function ViralBoostDashboard() {
  const [showCreator, setShowCreator] = useState(false)
  const [filter, setFilter] = useState('all')

  const campaigns: BoostCampaign[] = [
    {
      id: '1',
      title: 'New Dawn EP Release',
      creator: 'Demo Artist',
      contentType: 'release',
      contentUrl: 'https://open.spotify.com/...',
      platforms: ['instagram', 'twitter', 'tiktok'],
      launchTime: new Date(2026, 1, 1, 12, 0),
      status: 'pending',
      participants: 15,
      totalReach: 0,
      engagement: 0,
      goal: 100000
    },
    {
      id: '2',
      title: 'First Light Music Video',
      creator: 'Demo Artist',
      contentType: 'video',
      contentUrl: 'https://youtube.com/...',
      platforms: ['instagram', 'twitter', 'youtube'],
      launchTime: new Date(2026, 0, 10, 18, 0),
      status: 'active',
      participants: 22,
      totalReach: 145230,
      engagement: 12450,
      goal: 200000
    },
    {
      id: '3',
      title: 'Midnight Run Hits 500K!',
      creator: 'Demo Artist',
      contentType: 'announcement',
      contentUrl: 'https://spotify.com/...',
      platforms: ['instagram', 'twitter', 'facebook'],
      launchTime: new Date(2026, 0, 8, 12, 0),
      status: 'completed',
      participants: 20,
      totalReach: 234560,
      engagement: 18920,
      goal: 150000
    }
  ]

  const stats = [
    {
      label: 'Active Campaigns',
      value: '3',
      change: '+2 this week',
      icon: Zap,
      color: 'from-gold to-gold-dark'
    },
    {
      label: 'Total Participants',
      value: '24',
      change: '92% participation',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      label: 'Combined Reach',
      value: '380K',
      change: '+45% this month',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600'
    },
    {
      label: 'Success Rate',
      value: '87%',
      change: 'Goals achieved',
      icon: Target,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const participants = [
    { name: 'PRIV', avatar: '/images/artists/priv.svg', credits: 42, participated: 15 },
    { name: 'Pardyalone', avatar: '/images/artists/IMG_0146.png', credits: 38, participated: 14 },
    { name: 'James Rockel', avatar: '/images/team/james-rockel.webp', credits: 28, participated: 12 }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'pending': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'completed': return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
      default: return 'bg-gold/20 text-gold border-gold/30'
    }
  }

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'release': return Play
      case 'video': return Eye
      case 'announcement': return MessageCircle
      case 'event': return Calendar
      default: return Sparkles
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Viral Boost System</h1>
          <p className="text-gray-400">Coordinate campaigns for maximum algorithmic impact</p>
        </div>

        <button
          onClick={() => setShowCreator(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>Create Campaign</span>
        </button>
      </div>

      {/* Stats */}
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
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className="text-gold text-xs">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-gold/10 to-purple-500/10 border border-gold/30 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Sparkles className="w-6 h-6 text-gold" />
          <h2 className="text-xl font-bold text-white">How Viral Boost Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-dark-secondary/50 rounded-xl">
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-dark font-bold mb-3">1</div>
            <h3 className="text-white font-semibold mb-2">Create Campaign</h3>
            <p className="text-gray-400 text-sm">Set up your content and goals</p>
          </div>

          <div className="p-4 bg-dark-secondary/50 rounded-xl">
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-dark font-bold mb-3">2</div>
            <h3 className="text-white font-semibold mb-2">Artists Opt-In</h3>
            <p className="text-gray-400 text-sm">Network receives notifications</p>
          </div>

          <div className="p-4 bg-dark-secondary/50 rounded-xl">
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-dark font-bold mb-3">3</div>
            <h3 className="text-white font-semibold mb-2">Simultaneous Post</h3>
            <p className="text-gray-400 text-sm">All share at optimal time</p>
          </div>

          <div className="p-4 bg-dark-secondary/50 rounded-xl">
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-dark font-bold mb-3">4</div>
            <h3 className="text-white font-semibold mb-2">Viral Effect</h3>
            <p className="text-gray-400 text-sm">Algorithm boosts content</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Campaigns List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Active Campaigns</h2>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-dark-secondary border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="all">All Campaigns</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {campaigns.map((campaign, index) => {
            const ContentIcon = getContentTypeIcon(campaign.contentType)
            const progress = (campaign.totalReach / campaign.goal) * 100

            return (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-secondary border border-gray-800 rounded-xl p-6 hover:border-gold/50 transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center flex-shrink-0">
                      <ContentIcon className="w-6 h-6 text-dark" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight mb-1">{campaign.title}</h3>
                      <p className="text-gray-400 text-sm">by {campaign.creator}</p>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(campaign.status)}`}>
                    {campaign.status}
                  </span>
                </div>

                {/* Launch Time */}
                <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4">
                  <Clock className="w-4 h-4" />
                  <span>Launches {campaign.launchTime.toLocaleDateString()} at {campaign.launchTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>

                {/* Platforms */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-gray-400 text-sm">Platforms:</span>
                  {campaign.platforms.map((platform) => (
                    <span key={platform} className="px-2 py-1 bg-dark-tertiary rounded text-xs text-gray-300 capitalize">
                      {platform}
                    </span>
                  ))}
                </div>

                {/* Progress */}
                {campaign.status !== 'draft' && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-400">Reach Goal Progress</span>
                      <span className="text-white font-semibold">{campaign.totalReach.toLocaleString()} / {campaign.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-dark-tertiary rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-gold to-gold-dark h-full rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{Math.round(progress)}% achieved</p>
                  </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-dark-tertiary rounded-lg">
                    <Users className="w-5 h-5 text-gold mx-auto mb-1" />
                    <p className="text-white font-bold">{campaign.participants}</p>
                    <p className="text-gray-400 text-xs">Participants</p>
                  </div>

                  <div className="text-center p-3 bg-dark-tertiary rounded-lg">
                    <Eye className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                    <p className="text-white font-bold">{campaign.totalReach > 0 ? (campaign.totalReach / 1000).toFixed(1) + 'K' : '0'}</p>
                    <p className="text-gray-400 text-xs">Total Reach</p>
                  </div>

                  <div className="text-center p-3 bg-dark-tertiary rounded-lg">
                    <Heart className="w-5 h-5 text-pink-400 mx-auto mb-1" />
                    <p className="text-white font-bold">{campaign.engagement > 0 ? (campaign.engagement / 1000).toFixed(1) + 'K' : '0'}</p>
                    <p className="text-gray-400 text-xs">Engagement</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                  {campaign.status === 'pending' && (
                    <>
                      <button className="flex-1 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm font-medium hover:bg-green-500/20 transition-colors flex items-center justify-center space-x-1">
                        <Check className="w-4 h-4" />
                        <span>Join Campaign</span>
                      </button>
                      <button className="p-2 bg-dark-tertiary border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gold transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </>
                  )}
                  {campaign.status === 'active' && (
                    <>
                      <button className="flex-1 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors flex items-center justify-center space-x-1">
                        <BarChart3 className="w-4 h-4" />
                        <span>View Analytics</span>
                      </button>
                      <button className="p-2 bg-dark-tertiary border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gold transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </>
                  )}
                  {campaign.status === 'completed' && (
                    <>
                      <button className="flex-1 py-2 bg-gold/10 border border-gold/30 rounded-lg text-gold text-sm font-medium hover:bg-gold/20 transition-colors flex items-center justify-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>Download Report</span>
                      </button>
                      <button className="p-2 bg-dark-tertiary border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gold transition-colors">
                        <Copy className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Participant Leaderboard */}
          <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="w-5 h-5 text-gold" />
              <h2 className="text-xl font-bold text-white">Top Boosters</h2>
            </div>

            <div className="space-y-3">
              {participants.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-dark-tertiary rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      index === 0 ? 'bg-gold text-dark' :
                      index === 1 ? 'bg-gray-400 text-dark' :
                      index === 2 ? 'bg-amber-600 text-dark' :
                      'bg-dark text-gray-400'
                    }`}>
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{user.name}</p>
                      <p className="text-gray-500 text-xs">{user.participated} campaigns</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gold font-bold text-sm">{user.credits}</p>
                    <p className="text-gray-500 text-xs">credits</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credits System */}
          <div className="bg-gradient-to-br from-gold/20 to-gold-dark/10 border border-gold/30 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <h2 className="text-xl font-bold text-white">Your Credits</h2>
            </div>

            <div className="text-center mb-4">
              <p className="text-5xl font-bold text-gold mb-2">24</p>
              <p className="text-gray-400 text-sm">Available Credits</p>
            </div>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-center justify-between text-gray-300">
                <span>Earned:</span>
                <span className="text-green-400">+32</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>Used:</span>
                <span className="text-blue-400">-8</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Earn credits by participating in boost campaigns. Use credits to launch your own campaigns with more participants.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Quick Stats</h2>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Success Rate</span>
                <span className="text-green-400 font-semibold">87%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Avg. Reach Per Campaign</span>
                <span className="text-white font-semibold">127K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Network Size</span>
                <span className="text-gold font-semibold">24 Artists</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Combined Followers</span>
                <span className="text-white font-semibold">1.2M</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Creator Modal */}
      {showCreator && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dark-secondary border border-gray-800 rounded-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Create Boost Campaign</h2>
              <button
                onClick={() => setShowCreator(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Campaign Title */}
              <div>
                <label className="text-white font-medium mb-2 block">Campaign Title</label>
                <input
                  type="text"
                  placeholder="e.g., New Single Release - Midnight Dreams"
                  className="w-full bg-dark-tertiary border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              {/* Content Type */}
              <div>
                <label className="text-white font-medium mb-3 block">Content Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {['release', 'video', 'announcement', 'event'].map((type) => {
                    const Icon = getContentTypeIcon(type)
                    return (
                      <button
                        key={type}
                        className="p-4 bg-dark-tertiary border-2 border-gray-700 rounded-xl hover:border-gold transition-all"
                      >
                        <Icon className="w-6 h-6 text-gold mx-auto mb-2" />
                        <span className="text-white text-sm font-medium capitalize">{type}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Content URL */}
              <div>
                <label className="text-white font-medium mb-2 block">Content URL</label>
                <input
                  type="url"
                  placeholder="https://open.spotify.com/..."
                  className="w-full bg-dark-tertiary border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              {/* Platforms */}
              <div>
                <label className="text-white font-medium mb-3 block">Target Platforms</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Instagram', 'Twitter', 'TikTok', 'Facebook', 'YouTube', 'LinkedIn'].map((platform) => (
                    <label key={platform} className="flex items-center space-x-2 p-3 bg-dark-tertiary border border-gray-700 rounded-lg cursor-pointer hover:border-gold transition-colors">
                      <input type="checkbox" className="w-4 h-4 accent-gold" />
                      <span className="text-white text-sm">{platform}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Launch Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white font-medium mb-2 block">Launch Date</label>
                  <input
                    type="date"
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-white font-medium mb-2 block">Launch Time</label>
                  <input
                    type="time"
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
              </div>

              {/* Reach Goal */}
              <div>
                <label className="text-white font-medium mb-2 block">Reach Goal</label>
                <input
                  type="number"
                  placeholder="100000"
                  className="w-full bg-dark-tertiary border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Target number of people to reach</p>
              </div>

              {/* Custom Message */}
              <div>
                <label className="text-white font-medium mb-2 block">Custom Message Template</label>
                <textarea
                  placeholder="Check out my new single 'Midnight Dreams'! Link in bio 🎵✨"
                  className="w-full h-24 bg-dark-tertiary border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">Participants can customize this message</p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-700">
                <button
                  onClick={() => setShowCreator(false)}
                  className="px-6 py-3 bg-dark-tertiary border border-gray-700 rounded-lg text-white hover:bg-dark-tertiary/70 transition-colors"
                >
                  Cancel
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all">
                  <Zap className="w-4 h-4 inline mr-2" />
                  Launch Campaign
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
