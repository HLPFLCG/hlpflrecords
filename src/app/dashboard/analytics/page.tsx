'use client'

import React, { useState } from 'react'
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

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('30d')
  const [platform, setPlatform] = useState('all')

  const topLevelStats = [
    {
      label: 'Total Streams',
      value: '2.4M',
      change: '+23.5%',
      positive: true,
      icon: Play,
      color: 'from-green-500 to-green-600'
    },
    {
      label: 'Monthly Listeners',
      value: '124.5K',
      change: '+12.3%',
      positive: true,
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      label: 'Total Revenue',
      value: '$12,450',
      change: '+18.2%',
      positive: true,
      icon: DollarSign,
      color: 'from-gold to-gold-dark'
    },
    {
      label: 'Engagement Rate',
      value: '8.2%',
      change: '-2.1%',
      positive: false,
      icon: Heart,
      color: 'from-pink-500 to-pink-600'
    }
  ]

  const platformBreakdown = [
    { platform: 'Spotify', streams: '1.2M', percentage: 50, color: 'bg-green-500' },
    { platform: 'Apple Music', streams: '480K', percentage: 20, color: 'bg-pink-500' },
    { platform: 'YouTube Music', streams: '360K', percentage: 15, color: 'bg-red-500' },
    { platform: 'Amazon Music', streams: '240K', percentage: 10, color: 'bg-blue-500' },
    { platform: 'Other', streams: '120K', percentage: 5, color: 'bg-gray-500' }
  ]

  const topTracks = [
    { title: 'Midnight Dreams', streams: '456K', trend: '+12%', positive: true },
    { title: 'Switched Up', streams: '3.2M', trend: '+5%', positive: true },
    { title: 'Too Much', streams: '1.1M', trend: '-3%', positive: false },
    { title: 'Deceiving', streams: '810K', trend: '+8%', positive: true },
    { title: 'Planes', streams: '400K', trend: '+15%', positive: true }
  ]

  const geographicData = [
    { country: 'United States', listeners: '45.2K', percentage: 36 },
    { country: 'United Kingdom', listeners: '18.7K', percentage: 15 },
    { country: 'Canada', listeners: '12.4K', percentage: 10 },
    { country: 'Australia', listeners: '9.3K', percentage: 7 },
    { country: 'Germany', listeners: '8.1K', percentage: 6 },
    { country: 'Other', listeners: '30.8K', percentage: 26 }
  ]

  const demographics = [
    { age: '18-24', percentage: 32, male: 18, female: 14 },
    { age: '25-34', percentage: 28, male: 15, female: 13 },
    { age: '35-44', percentage: 20, male: 11, female: 9 },
    { age: '45-54', percentage: 12, male: 6, female: 6 },
    { age: '55+', percentage: 8, male: 4, female: 4 }
  ]

  // Simulated chart data - In production, this would be real data
  const streamsByDay = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    streams: Math.floor(Math.random() * 50000) + 30000
  }))

  const maxStreams = Math.max(...streamsByDay.map(d => d.streams))

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
              <p className="text-gray-400 text-sm">Profile Views</p>
              <p className="text-2xl font-bold text-white">34.2K</p>
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
              <p className="text-2xl font-bold text-white">12.8K</p>
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
              <p className="text-2xl font-bold text-white">5.4K</p>
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
