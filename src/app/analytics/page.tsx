'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Users, Play, Download } from 'lucide-react'

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState('7d')
  const [platform, setPlatform] = useState('all')

  const mockData = {
    streams: {
      total: '2.4M',
      growth: '+23.5%',
      byPlatform: [
        { platform: 'Spotify', streams: '1.8M', color: '#1DB954' },
        { platform: 'YouTube', streams: '420K', color: '#FF0000' },
        { platform: 'Apple Music', streams: '180K', color: '#FA2D48' },
      ]
    },
    audience: {
      total: '45.2K',
      new: '+8.3K',
      byCountry: [
        { country: 'United States', percentage: 45 },
        { country: 'United Kingdom', percentage: 18 },
        { country: 'Canada', percentage: 12 },
        { country: 'Germany', percentage: 8 },
        { country: 'Australia', percentage: 7 },
      ]
    },
    engagement: {
      avgDaily: '12.5K',
      retention: '68%',
      skipRate: '12%'
    }
  }

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
            <BarChart3 className="w-10 h-10 text-dark" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Track your performance across all platforms in one place
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-6 py-3 bg-gold/10 border border-gold/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
            <option value="1y">Last Year</option>
          </select>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="px-6 py-3 bg-gold/10 border border-gold/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="all">All Platforms</option>
            <option value="spotify">Spotify</option>
            <option value="youtube">YouTube</option>
            <option value="apple">Apple Music</option>
          </select>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <Play className="w-12 h-12 text-gold" />
              <span className="text-green-400 font-semibold">{mockData.streams.growth}</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.streams.total}</h3>
            <p className="text-gray-400">Total Streams</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <Users className="w-12 h-12 text-gold" />
              <span className="text-green-400 font-semibold">{mockData.audience.new}</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.audience.total}</h3>
            <p className="text-gray-400">Total Listeners</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-12 h-12 text-gold" />
              <span className="text-green-400 font-semibold">{mockData.engagement.retention}</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.engagement.avgDaily}</h3>
            <p className="text-gray-400">Daily Engagement</p>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Platform Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Streams by Platform</h2>
            <div className="space-y-4">
              {mockData.streams.byPlatform.map((item) => (
                <div key={item.platform}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{item.platform}</span>
                    <span className="text-gray-400">{item.streams}</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.random() * 40 + 60}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Audience Demographics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Top Countries</h2>
            <div className="space-y-4">
              {mockData.audience.byCountry.map((item) => (
                <div key={item.country}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{item.country}</span>
                    <span className="text-gray-400">{item.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage * 2}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gold rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Engagement Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-glass-card p-8 rounded-2xl mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Engagement Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-2">{mockData.engagement.retention}</p>
              <p className="text-gray-400">Listener Retention</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-2">{mockData.engagement.skipRate}</p>
              <p className="text-gray-400">Skip Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-2">4.2</p>
              <p className="text-gray-400">Average Streams Per User</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-gold/20 to-gold/10 p-8 rounded-2xl border border-gold/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Export Your Data</h3>
              <p className="text-gray-400">Download detailed analytics reports for your records</p>
            </div>
            <button className="px-8 py-4 bg-gold hover:bg-gold-dark text-dark font-semibold rounded-xl transition-all transform hover:scale-105 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Report
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}