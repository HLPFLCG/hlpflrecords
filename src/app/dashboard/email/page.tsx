'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Plus,
  Send,
  Users,
  TrendingUp,
  Eye,
  MousePointer,
  Calendar,
  Edit,
  Trash2,
  Copy,
  X,
  Image as ImageIcon,
  Link as LinkIcon,
  Sparkles,
  CheckCircle,
  Clock,
  BarChart3,
  Filter,
  Search,
  FileText,
  Target
} from 'lucide-react'

interface Campaign {
  id: string
  name: string
  subject: string
  status: 'draft' | 'scheduled' | 'sent'
  recipients: number
  opens: number
  clicks: number
  sentDate?: Date
  scheduledDate?: Date
}

interface Subscriber {
  id: string
  email: string
  name: string
  subscribed: Date
  status: 'active' | 'unsubscribed'
  tags: string[]
}

export default function EmailPage() {
  const [showNewCampaignModal, setShowNewCampaignModal] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null)
  const [activeTab, setActiveTab] = useState<'campaigns' | 'subscribers' | 'templates'>('campaigns')

  // Mock campaigns data for PRIV (actual releases)
  const campaigns: Campaign[] = [
    {
      id: '1',
      name: '"living a lie" Release Announcement',
      subject: 'New Music Out Now! 🎵',
      status: 'sent',
      recipients: 2847,
      opens: 1423,
      clicks: 456,
      sentDate: new Date('2025-07-10')
    },
    {
      id: '2',
      name: '"victim" Release Campaign',
      subject: 'Out Now: victim',
      status: 'sent',
      recipients: 3124,
      opens: 1892,
      clicks: 623,
      sentDate: new Date('2024-08-15')
    },
    {
      id: '3',
      name: 'Valentine\'s Day Merch Drop',
      subject: 'Limited Edition Valentine\'s Merch 💜',
      status: 'scheduled',
      recipients: 3200,
      opens: 0,
      clicks: 0,
      scheduledDate: new Date('2026-02-10')
    },
    {
      id: '4',
      name: 'Fan Appreciation Newsletter',
      subject: 'Thank You For Your Support!',
      status: 'draft',
      recipients: 0,
      opens: 0,
      clicks: 0
    }
  ]

  // Mock subscribers data
  const subscribers: Subscriber[] = [
    {
      id: '1',
      email: 'fan1@example.com',
      name: 'Alex Thompson',
      subscribed: new Date('2024-06-15'),
      status: 'active',
      tags: ['VIP', 'Early Supporter']
    },
    {
      id: '2',
      email: 'musiclover@example.com',
      name: 'Jordan Smith',
      subscribed: new Date('2024-08-22'),
      status: 'active',
      tags: ['Merch Buyer']
    },
    {
      id: '3',
      email: 'indiefan@example.com',
      name: 'Casey Rivera',
      subscribed: new Date('2024-11-05'),
      status: 'active',
      tags: ['New Subscriber']
    },
    {
      id: '4',
      email: 'superfan@example.com',
      name: 'Morgan Lee',
      subscribed: new Date('2024-03-10'),
      status: 'active',
      tags: ['VIP', 'Concert Attendee']
    }
  ]

  const templates = [
    {
      id: '1',
      name: 'New Release Announcement',
      description: 'Perfect for announcing new singles, EPs, or albums',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: '2',
      name: 'Event Invitation',
      description: 'Invite fans to shows, listening parties, or meet & greets',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: '3',
      name: 'Merch Drop',
      description: 'Promote new merchandise and limited edition items',
      thumbnail: '/api/placeholder/400/300'
    }
  ]

  const stats = {
    totalSubscribers: 3247,
    activeSubscribers: 3124,
    avgOpenRate: 52.4,
    avgClickRate: 18.2,
    totalCampaigns: campaigns.length,
    sentCampaigns: campaigns.filter(c => c.status === 'sent').length
  }

  const calculateOpenRate = (campaign: Campaign) => {
    if (campaign.recipients === 0) return 0
    return ((campaign.opens / campaign.recipients) * 100).toFixed(1)
  }

  const calculateClickRate = (campaign: Campaign) => {
    if (campaign.opens === 0) return 0
    return ((campaign.clicks / campaign.opens) * 100).toFixed(1)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Email Marketing</h1>
          <p className="text-gray-400">Connect with your fans through email campaigns</p>
        </div>

        <button
          onClick={() => setShowNewCampaignModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all"
        >
          <Plus className="w-5 h-5" />
          New Campaign
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <Users className="w-10 h-10 text-gold mb-4" />
          <h3 className="text-3xl font-bold text-white mb-2">{stats.totalSubscribers.toLocaleString()}</h3>
          <p className="text-gray-400">Total Subscribers</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <Eye className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-3xl font-bold text-white mb-2">{stats.avgOpenRate}%</h3>
          <p className="text-gray-400">Avg Open Rate</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <MousePointer className="w-10 h-10 text-green-400 mb-4" />
          <h3 className="text-3xl font-bold text-white mb-2">{stats.avgClickRate}%</h3>
          <p className="text-gray-400">Avg Click Rate</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <Send className="w-10 h-10 text-purple-400 mb-4" />
          <h3 className="text-3xl font-bold text-white mb-2">{stats.sentCampaigns}</h3>
          <p className="text-gray-400">Campaigns Sent</p>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-800">
        <button
          onClick={() => setActiveTab('campaigns')}
          className={`px-6 py-3 font-semibold transition-all ${
            activeTab === 'campaigns'
              ? 'text-gold border-b-2 border-gold'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Campaigns
        </button>
        <button
          onClick={() => setActiveTab('subscribers')}
          className={`px-6 py-3 font-semibold transition-all ${
            activeTab === 'subscribers'
              ? 'text-gold border-b-2 border-gold'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Subscribers
        </button>
        <button
          onClick={() => setActiveTab('templates')}
          className={`px-6 py-3 font-semibold transition-all ${
            activeTab === 'templates'
              ? 'text-gold border-b-2 border-gold'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Templates
        </button>
      </div>

      {/* Campaigns Tab */}
      {activeTab === 'campaigns' && (
        <div className="space-y-4">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-secondary border border-gray-800 rounded-2xl p-6 hover:border-gold transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-bold text-lg">{campaign.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      campaign.status === 'sent' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      campaign.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}>
                      {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">{campaign.subject}</p>

                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      {campaign.recipients.toLocaleString()} recipients
                    </div>
                    {campaign.status === 'sent' && (
                      <>
                        <div className="flex items-center gap-2 text-blue-400">
                          <Eye className="w-4 h-4" />
                          {calculateOpenRate(campaign)}% open rate
                        </div>
                        <div className="flex items-center gap-2 text-green-400">
                          <MousePointer className="w-4 h-4" />
                          {calculateClickRate(campaign)}% click rate
                        </div>
                      </>
                    )}
                    {campaign.sentDate && (
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        Sent {campaign.sentDate.toLocaleDateString()}
                      </div>
                    )}
                    {campaign.scheduledDate && (
                      <div className="flex items-center gap-2 text-blue-400">
                        <Clock className="w-4 h-4" />
                        Scheduled for {campaign.scheduledDate.toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {campaign.status === 'sent' && (
                    <button
                      onClick={() => setSelectedCampaign(campaign)}
                      className="p-2 bg-dark-tertiary rounded-lg hover:bg-gold hover:text-dark transition-all"
                    >
                      <BarChart3 className="w-5 h-5" />
                    </button>
                  )}
                  {campaign.status === 'draft' && (
                    <button className="p-2 bg-dark-tertiary rounded-lg hover:bg-gold hover:text-dark transition-all">
                      <Edit className="w-5 h-5" />
                    </button>
                  )}
                  <button className="p-2 bg-dark-tertiary rounded-lg hover:bg-gold hover:text-dark transition-all">
                    <Copy className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-dark-tertiary rounded-lg hover:bg-red-500 hover:text-white transition-all">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {campaign.status === 'sent' && (
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white mb-1">{campaign.opens.toLocaleString()}</p>
                    <p className="text-gray-500 text-xs">Opens</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white mb-1">{campaign.clicks.toLocaleString()}</p>
                    <p className="text-gray-500 text-xs">Clicks</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white mb-1">{(campaign.recipients - campaign.opens).toLocaleString()}</p>
                    <p className="text-gray-500 text-xs">Unopened</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Subscribers Tab */}
      {activeTab === 'subscribers' && (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search subscribers..."
                className="w-full bg-dark-tertiary border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-3 bg-dark-tertiary border border-gray-700 text-white rounded-lg hover:border-gold transition-all">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>

          {/* Subscribers List */}
          <div className="bg-dark-secondary border border-gray-800 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-dark-tertiary">
                <tr>
                  <th className="text-left text-gray-400 font-semibold px-6 py-4">Email</th>
                  <th className="text-left text-gray-400 font-semibold px-6 py-4">Name</th>
                  <th className="text-left text-gray-400 font-semibold px-6 py-4">Subscribed</th>
                  <th className="text-left text-gray-400 font-semibold px-6 py-4">Tags</th>
                  <th className="text-left text-gray-400 font-semibold px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="border-t border-gray-800 hover:bg-dark-tertiary transition-colors">
                    <td className="px-6 py-4 text-white">{subscriber.email}</td>
                    <td className="px-6 py-4 text-gray-300">{subscriber.name}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{subscriber.subscribed.toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {subscriber.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gold/20 text-gold text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        subscriber.status === 'active'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {subscriber.status.charAt(0).toUpperCase() + subscriber.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Subscriber Growth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6">Subscriber Growth</h3>
            <div className="space-y-4">
              {Array.from({ length: 6 }, (_, i) => ({
                month: new Date(2025, 6 + i, 1).toLocaleDateString('en-US', { month: 'short' }),
                subscribers: Math.floor(Math.random() * 5000) + 38000
              })).map((data, index) => (
                <div key={data.month} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{data.month}</span>
                    <span className="text-white font-semibold">{data.subscribers.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-dark-tertiary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(data.subscribers / 45000) * 100}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-gold to-gold-dark rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Templates Tab */}
      {activeTab === 'templates' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-secondary border border-gray-800 rounded-2xl overflow-hidden hover:border-gold transition-all group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <FileText className="w-16 h-16 text-gray-700" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gold transition-colors">
                  {template.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{template.description}</p>
                <button className="w-full px-4 py-2 bg-dark-tertiary border border-gray-700 text-white rounded-lg hover:bg-gold hover:text-dark hover:border-gold transition-all">
                  Use Template
                </button>
              </div>
            </motion.div>
          ))}

          {/* AI Template Generator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">AI Template Generator</h3>
            <p className="text-gray-400 text-sm mb-4">
              Let AI create a custom email template based on your campaign goals
            </p>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all">
              Generate with AI
            </button>
          </motion.div>
        </div>
      )}

      {/* New Campaign Modal */}
      <AnimatePresence>
        {showNewCampaignModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowNewCampaignModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark-secondary border border-gray-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Create Email Campaign</h2>
                <button
                  onClick={() => setShowNewCampaignModal(false)}
                  className="p-2 hover:bg-dark-tertiary rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Campaign Name</label>
                  <input
                    type="text"
                    placeholder="Internal name for this campaign"
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email Subject</label>
                  <input
                    type="text"
                    placeholder="What subscribers will see in their inbox"
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Recipients</label>
                  <select className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent">
                    <option>All Subscribers (45,231)</option>
                    <option>Active Subscribers (45,231)</option>
                    <option>VIP Subscribers (2,847)</option>
                    <option>Recent Subscribers (8,421)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email Content</label>
                  <div className="bg-dark-tertiary border border-gray-700 rounded-lg p-4 min-h-[300px]">
                    <p className="text-gray-500 text-sm">Email editor would go here...</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex-1 px-6 py-3 bg-dark-tertiary border border-gray-700 text-white rounded-lg hover:border-gold transition-all">
                    Save as Draft
                  </button>
                  <button className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                    Schedule Send
                  </button>
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all">
                    Send Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Campaign Analytics Modal */}
      <AnimatePresence>
        {selectedCampaign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCampaign(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark-secondary border border-gray-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedCampaign.name}</h2>
                  <p className="text-gray-400">{selectedCampaign.subject}</p>
                </div>
                <button
                  onClick={() => setSelectedCampaign(null)}
                  className="p-2 hover:bg-dark-tertiary rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-dark-tertiary rounded-xl p-4">
                  <Users className="w-8 h-8 text-gold mb-2" />
                  <p className="text-2xl font-bold text-white mb-1">{selectedCampaign.recipients.toLocaleString()}</p>
                  <p className="text-gray-400 text-sm">Recipients</p>
                </div>
                <div className="bg-dark-tertiary rounded-xl p-4">
                  <Eye className="w-8 h-8 text-blue-400 mb-2" />
                  <p className="text-2xl font-bold text-white mb-1">{selectedCampaign.opens.toLocaleString()}</p>
                  <p className="text-gray-400 text-sm">Opens ({calculateOpenRate(selectedCampaign)}%)</p>
                </div>
                <div className="bg-dark-tertiary rounded-xl p-4">
                  <MousePointer className="w-8 h-8 text-green-400 mb-2" />
                  <p className="text-2xl font-bold text-white mb-1">{selectedCampaign.clicks.toLocaleString()}</p>
                  <p className="text-gray-400 text-sm">Clicks ({calculateClickRate(selectedCampaign)}%)</p>
                </div>
                <div className="bg-dark-tertiary rounded-xl p-4">
                  <Target className="w-8 h-8 text-purple-400 mb-2" />
                  <p className="text-2xl font-bold text-white mb-1">{((selectedCampaign.clicks / selectedCampaign.recipients) * 100).toFixed(1)}%</p>
                  <p className="text-gray-400 text-sm">CTR</p>
                </div>
              </div>

              <div className="bg-dark-tertiary rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Performance Over Time</h3>
                <div className="space-y-3">
                  <p className="text-gray-400 text-sm">Opens and clicks data visualization would go here...</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
