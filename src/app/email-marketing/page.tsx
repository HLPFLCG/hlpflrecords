'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Users, TrendingUp, Send, Edit } from 'lucide-react'

export default function EmailMarketingPage() {
  const [activeTab, setActiveTab] = useState('campaigns')

  const mockData = {
    subscribers: {
      total: '45,234',
      growth: '+12.5%',
      openRate: '32.4%',
      clickRate: '4.8%'
    },
    campaigns: [
      { name: 'New Release Announcement', sent: '42,150', opened: '13,680', clicked: '2,023', date: '3 days ago' },
      { name: 'Tour Dates Reveal', sent: '45,234', opened: '16,284', clicked: '3,157', date: '1 week ago' },
      { name: 'Exclusive Merch Drop', sent: '43,890', opened: '14,980', clicked: '4,125', date: '2 weeks ago' },
    ],
    segments: [
      { name: 'All Subscribers', count: '45,234', color: '#c87941' },
      { name: 'Engaged Fans', count: '18,450', color: '#d4945c' },
      { name: 'VIP Members', count: '2,340', color: '#a86535' },
      { name: 'New Subscribers', count: '5,123', color: '#8b5a2b' },
    ]
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl mb-6"
          >
            <Mail className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Email Marketing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with your fans and grow your email list
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <Users className="w-12 h-12 text-pink-500" />
              <span className="text-green-400 font-semibold">{mockData.subscribers.growth}</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.subscribers.total}</h3>
            <p className="text-gray-400">Total Subscribers</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <Mail className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.subscribers.openRate}</h3>
            <p className="text-gray-400">Average Open Rate</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.subscribers.clickRate}</h3>
            <p className="text-gray-400">Click-Through Rate</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <Send className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">12</h3>
            <p className="text-gray-400">Campaigns Sent</p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setActiveTab('campaigns')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'campaigns'
                ? 'bg-gold text-dark'
                : 'bg-glass-card text-gray-400 hover:text-white'
            }`}
          >
            Recent Campaigns
          </button>
          <button
            onClick={() => setActiveTab('segments')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'segments'
                ? 'bg-gold text-dark'
                : 'bg-glass-card text-gray-400 hover:text-white'
            }`}
          >
            Audience Segments
          </button>
        </div>

        {/* Content */}
        {activeTab === 'campaigns' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Recent Campaigns</h2>
              <button className="px-6 py-3 bg-gold text-dark font-semibold rounded-lg hover:shadow-gold-hover transition-all">
                Create Campaign
              </button>
            </div>
            <div className="space-y-4">
              {mockData.campaigns.map((campaign, index) => (
                <div key={index} className="p-6 bg-gray-800/50 rounded-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{campaign.name}</h3>
                      <p className="text-gray-400 text-sm">{campaign.date}</p>
                    </div>
                    <button className="text-gold hover:text-gold-light transition-colors">
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Sent</p>
                      <p className="text-white font-semibold">{campaign.sent}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Opened</p>
                      <p className="text-white font-semibold">{campaign.opened}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Clicked</p>
                      <p className="text-white font-semibold">{campaign.clicked}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'segments' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Audience Segments</h2>
              <button className="px-6 py-3 bg-gold text-dark font-semibold rounded-lg hover:shadow-gold-hover transition-all">
                Create Segment
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockData.segments.map((segment, index) => (
                <div key={index} className="p-6 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: segment.color }}
                    />
                    <h3 className="text-xl font-bold text-white flex-1">{segment.name}</h3>
                  </div>
                  <p className="text-3xl font-bold text-white mb-2">{segment.count}</p>
                  <p className="text-gray-400 text-sm">subscribers</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
