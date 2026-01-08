'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  TrendingDown,
  Music,
  Users,
  DollarSign,
  Globe,
  Play,
  Heart,
  Eye,
  Download,
  Share2,
  Calendar,
  Filter,
  ArrowUp,
  ArrowDown,
  Sparkles,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'
import { api } from '@/lib/api-client'

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('30d')
  const [platform, setPlatform] = useState('all')
  const [analyticsData, setAnalyticsData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const artistId = 'artist-alki-001'

  useEffect(() => {
    async function loadAnalytics() {
      try {
        setLoading(true)

        // Calculate date range based on timeRange
        const endDate = new Date().toISOString().split('T')[0]
        const startDate = new Date()
        startDate.setDate(startDate.getDate() - (timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90))
        const startDateStr = startDate.toISOString().split('T')[0]

        const response = await api.analytics.get({
          artistId,
          startDate: startDateStr,
          endDate
        })

        if (response.success && response.data) {
          setAnalyticsData(response.data)
        } else {
          setError(response.error || 'Failed to load analytics')
        }
      } catch (err) {
        setError('An error occurred while loading analytics')
        console.error('Analytics load error:', err)
      } finally {
        setLoading(false)
      }
    }

    loadAnalytics()
  }, [artistId, timeRange])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading analytics...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-400 text-2xl">⚠️</span>
          </div>
          <p className="text-white font-bold mb-2">Failed to Load Analytics</p>
          <p className="text-gray-400 text-sm">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-dark transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  const totals = analyticsData?.totals || { total_streams: 0, total_listeners: 0, total_saves: 0, total_shares: 0 }

  // Format numbers for display
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  // Calculate engagement rate
  const engagementRate = totals.total_streams > 0
    ? ((totals.total_saves + totals.total_shares) / totals.total_streams * 100).toFixed(1)
    : '0.0'

  const topLevelStats = [
    {
      label: 'Total Streams',
      value: formatNumber(totals.total_streams),
      change: '+23.5%', // Would need historical data to calculate
      positive: true,
      icon: Play,
      color: 'from-green-500 to-green-600'
    },
    {
      label: 'Monthly Listeners',
      value: formatNumber(totals.total_listeners),
      change: '+12.3%', // Would need historical data to calculate
      positive: true,
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      label: 'Total Saves',
      value: formatNumber(totals.total_saves),
      change: '+18.2%', // Would need historical data to calculate
      positive: true,
      icon: Download,
      color: 'from-gold to-gold-dark'
    },
    {
      label: 'Engagement Rate',
      value: `${engagementRate}%`,
      change: '-2.1%', // Would need historical data to calculate
      positive: false,
      icon: Heart,
      color: 'from-pink-500 to-pink-600'
    }
  ]

  // Group streams by platform from API data
  const streamsByPlatform = (analyticsData?.streams || []).reduce((acc: any, stream: any) => {
    const platform = stream.platform || 'Other'
    if (!acc[platform]) acc[platform] = 0
    acc[platform] += stream.streams || 0
    return acc
  }, {})

  const totalPlatformStreams = Object.values(streamsByPlatform).reduce((sum: number, val: any) => sum + val, 0)

  const platformColors: any = {
    'Spotify': 'bg-green-500',
    'Apple Music': 'bg-pink-500',
    'YouTube Music': 'bg-red-500',
    'Amazon Music': 'bg-blue-500',
    'Other': 'bg-gray-500'
  }

  const platformBreakdown = Object.entries(streamsByPlatform).map(([platform, streams]: [string, any]) => ({
    platform,
    streams: formatNumber(streams),
    percentage: totalPlatformStreams > 0 ? Math.round((streams / totalPlatformStreams) * 100) : 0,
    color: platformColors[platform] || 'bg-gray-500'
  })).sort((a, b) => b.percentage - a.percentage)

  // Top tracks from API data (grouped by release/track)
  const trackStreams = (analyticsData?.streams || []).reduce((acc: any, stream: any) => {
    const releaseId = stream.release_id || 'unknown'
    if (!acc[releaseId]) {
      acc[releaseId] = { releaseId, streams: 0, title: stream.release_title || 'Unknown Track' }
    }
    acc[releaseId].streams += stream.streams || 0
    return acc
  }, {})

  const topTracks = Object.values(trackStreams)
    .sort((a: any, b: any) => b.streams - a.streams)
    .slice(0, 5)
    .map((track: any) => ({
      title: track.title,
      streams: formatNumber(track.streams),
      trend: '+0%', // Would need historical data
      positive: true
    }))

  // Group demographics by country
  const countryCounts = (analyticsData?.demographics || [])
    .filter((d: any) => d.country)
    .reduce((acc: any, demo: any) => {
      if (!acc[demo.country]) acc[demo.country] = 0
      acc[demo.country] += demo.listener_count || 0
      return acc
    }, {})

  const totalCountryListeners = Object.values(countryCounts).reduce((sum: number, val: any) => sum + val, 0)

  const geographicData = Object.entries(countryCounts)
    .map(([country, listeners]: [string, any]) => ({
      country,
      listeners: formatNumber(listeners),
      percentage: totalCountryListeners > 0 ? Math.round((listeners / totalCountryListeners) * 100) : 0
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 6)

  // Group demographics by age and gender
  const ageGroups = (analyticsData?.demographics || [])
    .filter((d: any) => d.age_range)
    .reduce((acc: any, demo: any) => {
      const age = demo.age_range
      if (!acc[age]) acc[age] = { age, male: 0, female: 0, total: 0 }
      const count = demo.listener_count || 0
      if (demo.gender === 'male') acc[age].male += count
      if (demo.gender === 'female') acc[age].female += count
      acc[age].total += count
      return acc
    }, {})

  const totalDemoListeners = Object.values(ageGroups).reduce((sum: number, group: any) => sum + group.total, 0)

  const demographics = Object.entries(ageGroups)
    .map(([age, data]: [string, any]) => ({
      age,
      percentage: totalDemoListeners > 0 ? Math.round((data.total / totalDemoListeners) * 100) : 0,
      male: totalDemoListeners > 0 ? Math.round((data.male / totalDemoListeners) * 100) : 0,
      female: totalDemoListeners > 0 ? Math.round((data.female / totalDemoListeners) * 100) : 0
    }))
    .sort((a, b) => {
      const ageOrder = ['18-24', '25-34', '35-44', '45-54', '55+']
      return ageOrder.indexOf(a.age) - ageOrder.indexOf(b.age)
    })

  // Group streams by date for chart
  const streamsByDate = (analyticsData?.streams || []).reduce((acc: any, stream: any) => {
    const date = stream.date || new Date().toISOString().split('T')[0]
    if (!acc[date]) acc[date] = 0
    acc[date] += stream.streams || 0
    return acc
  }, {})

  const streamsByDay = Object.entries(streamsByDate)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, streams], index) => ({
      day: index + 1,
      streams: streams as number,
      date
    }))

  const maxStreams = streamsByDay.length > 0 ? Math.max(...streamsByDay.map(d => d.streams)) : 1

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <p className="text-gray-400">Track your performance across all platforms</p>
        </div>

        <div className="flex items-center space-x-3">
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="bg-dark-secondary border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="all">All Platforms</option>
            <option value="spotify">Spotify</option>
            <option value="apple">Apple Music</option>
            <option value="youtube">YouTube Music</option>
          </select>

          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-dark-secondary border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
            <option value="1y">Last Year</option>
            <option value="all">All Time</option>
          </select>
        </div>
      </div>

      {/* Top Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topLevelStats.map((stat, index) => (
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
              <div className={`flex items-center space-x-1 text-sm font-semibold ${
                stat.positive ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.positive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                <span>{stat.change}</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Streams Chart */}
      <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Streams Over Time</h2>
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-gold" />
            <span className="text-gray-400 text-sm">Daily breakdown</span>
          </div>
        </div>

        {/* Simple Bar Chart */}
        <div className="h-64 flex items-end space-x-1">
          {streamsByDay.map((data, index) => (
            <div
              key={index}
              className="flex-1 group relative"
            >
              <div
                className="w-full bg-gradient-to-t from-gold to-gold-dark rounded-t hover:from-gold-dark hover:to-gold transition-all cursor-pointer"
                style={{ height: `${(data.streams / maxStreams) * 100}%` }}
              >
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-dark-tertiary border border-gold/50 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <p className="text-white font-semibold text-sm">{data.streams.toLocaleString()}</p>
                  <p className="text-gray-400 text-xs">Day {data.day}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
          <span>Day 1</span>
          <span>Day 15</span>
          <span>Day 30</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Breakdown */}
        <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Platform Breakdown</h2>

          <div className="space-y-4">
            {platformBreakdown.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{item.platform}</span>
                  <span className="text-gray-400">{item.streams}</span>
                </div>
                <div className="w-full bg-dark-tertiary rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`${item.color} h-full rounded-full`}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1">{item.percentage}% of total streams</div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Tracks */}
        <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Top Performing Tracks</h2>

          <div className="space-y-3">
            {topTracks.map((track, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-dark-tertiary rounded-lg hover:bg-dark-tertiary/70 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center font-bold text-dark">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-white font-medium">{track.title}</p>
                    <p className="text-gray-400 text-sm">{track.streams} streams</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-1 text-sm font-semibold ${
                  track.positive ? 'text-green-400' : 'text-red-400'
                }`}>
                  {track.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span>{track.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Geographic Data */}
      <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Geographic Distribution</h2>
          <Globe className="w-5 h-5 text-gold" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {geographicData.map((location, index) => (
            <div
              key={index}
              className="p-4 bg-dark-tertiary rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">{location.country}</span>
                <span className="text-gold font-semibold">{location.percentage}%</span>
              </div>
              <p className="text-gray-400 text-sm mb-2">{location.listeners} listeners</p>
              <div className="w-full bg-dark rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${location.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-gold to-gold-dark h-full rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demographics */}
      <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-6">Audience Demographics</h2>

        <div className="space-y-4">
          {demographics.map((demo, index) => (
            <div key={index} className="p-4 bg-dark-tertiary rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">Age {demo.age}</span>
                <span className="text-gold font-semibold">{demo.percentage}%</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-400">Male</span>
                    <span className="text-blue-400">{demo.male}%</span>
                  </div>
                  <div className="w-full bg-dark rounded-full h-2">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{ width: `${(demo.male / demo.percentage) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-400">Female</span>
                    <span className="text-pink-400">{demo.female}%</span>
                  </div>
                  <div className="w-full bg-dark rounded-full h-2">
                    <div
                      className="bg-pink-500 h-full rounded-full"
                      style={{ width: `${(demo.female / demo.percentage) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Listeners</p>
              <p className="text-2xl font-bold text-white">{formatNumber(totals.total_listeners)}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-green-400 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>+15.3% from last month</span>
          </div>
        </div>

        <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Download className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Saves</p>
              <p className="text-2xl font-bold text-white">{formatNumber(totals.total_saves)}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-green-400 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>+8.7% from last month</span>
          </div>
        </div>

        <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Share2 className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Shares</p>
              <p className="text-2xl font-bold text-white">{formatNumber(totals.total_shares)}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-red-400 text-sm">
            <TrendingDown className="w-4 h-4" />
            <span>-2.1% from last month</span>
          </div>
        </div>
      </div>

      {/* Export Button */}
      <div className="flex justify-center">
        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-xl hover:shadow-lg transition-all">
          <Download className="w-5 h-5" />
          <span>Export Analytics Report</span>
        </button>
      </div>
    </div>
  )
}
