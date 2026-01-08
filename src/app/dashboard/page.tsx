'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  TrendingUp,
  DollarSign,
  Music,
  Users,
  Calendar,
  Zap,
  Eye,
  Heart,
  Play,
  ShoppingBag,
  Mail,
  Video,
  ArrowUpRight,
  Clock,
  MessageSquare,
  Star,
  Target
} from 'lucide-react'

export default function DashboardPage() {
  // Mock data - would come from API in production
  const stats = {
    totalStreams: 3894523,
    monthlyListeners: 46231,
    revenue: 18742.35,
    followers: 23847,
    engagement: 12.4
  }

  const recentActivity = [
    {
      id: '1',
      type: 'release',
      title: 'New single "221" reached 100K streams',
      time: '2 hours ago',
      icon: Music,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: '2',
      type: 'community',
      title: 'Priv commented on your post',
      time: '5 hours ago',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: '3',
      type: 'revenue',
      title: 'Payment of $4,230.50 processed',
      time: '1 day ago',
      icon: DollarSign,
      color: 'from-gold to-gold-dark'
    },
    {
      id: '4',
      type: 'boost',
      title: 'Viral boost campaign achieved 250K reach',
      time: '2 days ago',
      icon: Zap,
      color: 'from-purple-500 to-pink-600'
    }
  ]

  const upcomingEvents = [
    {
      id: '1',
      title: 'New Release: Midnight Dreams',
      date: new Date(2026, 1, 14),
      type: 'release',
      icon: Music
    },
    {
      id: '2',
      title: 'Email Campaign: Valentine\'s Merch',
      date: new Date(2026, 1, 10),
      type: 'email',
      icon: Mail
    },
    {
      id: '3',
      title: 'Spotify Editorial Playlist Submission',
      date: new Date(2026, 0, 15),
      type: 'promotion',
      icon: Star
    }
  ]

  const topTracks = [
    { title: 'Switched Up', streams: 3247891, change: 12.5 },
    { title: '221', streams: 423789, change: 45.2 },
    { title: 'Late Nights', streams: 187234, change: -5.3 },
    { title: 'Better Days', streams: 145892, change: 8.7 }
  ]

  const quickActions = [
    {
      title: 'Schedule Social Post',
      description: 'Plan your next social media post',
      href: '/dashboard/social',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Upload B-Roll',
      description: 'Add new video content',
      href: '/dashboard/broll',
      icon: Video,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Start Viral Boost',
      description: 'Launch a new campaign',
      href: '/dashboard/boost',
      icon: Zap,
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Create Email',
      description: 'Send to your fans',
      href: '/dashboard/email',
      icon: Mail,
      color: 'from-green-500 to-emerald-600'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Alki 👋</h1>
        <p className="text-gray-400">Here's what's happening with your music today</p>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gold/20 to-gold-dark/10 border border-gold/30 rounded-2xl p-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
              <Play className="w-6 h-6 text-gold" />
            </div>
            <div className="flex items-center gap-1 text-green-400 text-sm">
              <TrendingUp className="w-4 h-4" />
              +12.5%
            </div>
          </div>
          <h3 className="text-gray-400 text-sm mb-1">Total Streams</h3>
          <p className="text-3xl font-bold text-white">{(stats.totalStreams / 1000000).toFixed(1)}M</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex items-center gap-1 text-green-400 text-sm">
              <TrendingUp className="w-4 h-4" />
              +8.2%
            </div>
          </div>
          <h3 className="text-gray-400 text-sm mb-1">Monthly Listeners</h3>
          <p className="text-3xl font-bold text-white">{(stats.monthlyListeners / 1000).toFixed(1)}K</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
            <div className="flex items-center gap-1 text-green-400 text-sm">
              <TrendingUp className="w-4 h-4" />
              +15.3%
            </div>
          </div>
          <h3 className="text-gray-400 text-sm mb-1">Revenue (30d)</h3>
          <p className="text-3xl font-bold text-white">${(stats.revenue / 1000).toFixed(1)}K</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex items-center gap-1 text-green-400 text-sm">
              <TrendingUp className="w-4 h-4" />
              +6.7%
            </div>
          </div>
          <h3 className="text-gray-400 text-sm mb-1">Followers</h3>
          <p className="text-3xl font-bold text-white">{(stats.followers / 1000).toFixed(1)}K</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex items-center gap-1 text-green-400 text-sm">
              <TrendingUp className="w-4 h-4" />
              +2.1%
            </div>
          </div>
          <h3 className="text-gray-400 text-sm mb-1">Engagement</h3>
          <p className="text-3xl font-bold text-white">{stats.engagement}%</p>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickActions.map((action, index) => (
          <motion.div
            key={action.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <Link href={action.href}>
              <div className="bg-dark-secondary border border-gray-800 rounded-2xl p-6 hover:border-gold transition-all cursor-pointer group">
                <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold mb-1 group-hover:text-gold transition-colors">{action.title}</h3>
                <p className="text-gray-400 text-sm">{action.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="lg:col-span-2 bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Activity</h2>
            <Link href="/dashboard/analytics" className="text-gold text-sm hover:text-gold-dark transition-colors">
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 p-4 bg-dark-tertiary rounded-xl hover:bg-opacity-80 transition-all">
                <div className={`w-10 h-10 bg-gradient-to-br ${activity.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <activity.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium mb-1">{activity.title}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {activity.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Upcoming</h2>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-4 bg-dark-tertiary rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <event.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium mb-2 text-sm">{event.title}</p>
                    <p className="text-gray-500 text-xs">{event.date.toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link href="/dashboard/social">
            <button className="w-full mt-4 px-4 py-2 bg-dark-tertiary border border-gray-700 text-white rounded-lg hover:border-gold transition-all">
              View Calendar
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Top Tracks Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Top Performing Tracks</h2>
          <Link href="/dashboard/analytics" className="text-gold text-sm hover:text-gold-dark transition-colors flex items-center gap-1">
            View Analytics
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {topTracks.map((track, index) => (
            <div key={track.title} className="p-4 bg-dark-tertiary rounded-xl">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                  <Music className="w-5 h-5 text-gold" />
                </div>
                <div className={`flex items-center gap-1 text-xs ${track.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  <TrendingUp className={`w-3 h-3 ${track.change < 0 ? 'rotate-180' : ''}`} />
                  {Math.abs(track.change)}%
                </div>
              </div>
              <h3 className="text-white font-semibold mb-1">{track.title}</h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Play className="w-4 h-4" />
                {(track.streams / 1000).toFixed(0)}K streams
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Platform Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Platform Performance</h2>
            <Link href="/dashboard/analytics" className="text-gold text-sm hover:text-gold-dark transition-colors">
              Details
            </Link>
          </div>

          <div className="space-y-4">
            {[
              { platform: 'Spotify', streams: 2847392, percentage: 73, color: 'from-green-500 to-emerald-600' },
              { platform: 'Apple Music', streams: 982341, percentage: 25, color: 'from-pink-500 to-red-600' },
              { platform: 'YouTube Music', streams: 421038, percentage: 11, color: 'from-red-500 to-orange-600' },
              { platform: 'Other', streams: 143752, percentage: 4, color: 'from-gray-500 to-gray-700' }
            ].map((platform, index) => (
              <div key={platform.platform}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{platform.platform}</span>
                  <span className="text-gray-400 text-sm">{(platform.streams / 1000).toFixed(0)}K</span>
                </div>
                <div className="h-2 bg-dark-tertiary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${platform.percentage}%` }}
                    transition={{ duration: 0.8, delay: 1.3 + index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${platform.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Community Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Community Highlights</h2>
            <Link href="/dashboard/community" className="text-gold text-sm hover:text-gold-dark transition-colors">
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {[
              { author: 'Priv', action: 'started a new collaboration', time: '3h ago' },
              { author: 'Pardyalone', action: 'reached 5M streams milestone', time: '1d ago' },
              { author: 'HLPFL Team', action: 'posted a platform update', time: '2d ago' }
            ].map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-dark-tertiary rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-sm font-bold text-dark flex-shrink-0">
                  {highlight.author.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm">
                    <span className="font-semibold">{highlight.author}</span> {highlight.action}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{highlight.time}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/dashboard/community">
            <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all">
              Join the Conversation
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
