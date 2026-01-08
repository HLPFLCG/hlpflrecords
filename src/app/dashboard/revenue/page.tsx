'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Download,
  Calendar,
  Music,
  ShoppingBag,
  Users,
  Film,
  Mail,
  CreditCard,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Search
} from 'lucide-react'

export default function RevenuePage() {
  const [timeRange, setTimeRange] = useState('30d')
  const [selectedStream, setSelectedStream] = useState<string | null>(null)

  // Mock data
  const totalRevenue = 18742.35
  const monthlyGrowth = 12.5
  const pendingPayouts = 3420.50

  const revenueStreams = [
    {
      id: 'streaming',
      name: 'Streaming Revenue',
      icon: Music,
      amount: 8420.50,
      percentage: 44.9,
      growth: 15.2,
      color: 'from-green-500 to-emerald-600',
      platforms: [
        { name: 'Spotify', amount: 5230.20, streams: 2847392 },
        { name: 'Apple Music', amount: 2180.40, streams: 982341 },
        { name: 'YouTube Music', amount: 890.50, streams: 421038 },
        { name: 'Other', amount: 119.40, streams: 89234 }
      ]
    },
    {
      id: 'merch',
      name: 'Merchandise Sales',
      icon: ShoppingBag,
      amount: 4850.75,
      percentage: 25.9,
      growth: -5.3,
      color: 'from-purple-500 to-pink-600',
      items: [
        { name: 'T-Shirts', sold: 142, revenue: 2840.00 },
        { name: 'Hoodies', sold: 58, revenue: 1740.00 },
        { name: 'Vinyl Records', sold: 23, revenue: 230.75 },
        { name: 'Other', sold: 12, revenue: 40.00 }
      ]
    },
    {
      id: 'crowdfunding',
      name: 'Fan Support',
      icon: Users,
      amount: 3240.80,
      percentage: 17.3,
      growth: 23.8,
      color: 'from-blue-500 to-cyan-600',
      supporters: 184,
      tiers: [
        { name: 'Bronze ($5)', count: 98, revenue: 490.00 },
        { name: 'Silver ($15)', count: 54, revenue: 810.00 },
        { name: 'Gold ($30)', count: 28, revenue: 840.00 },
        { name: 'Platinum ($50+)', count: 4, revenue: 1100.80 }
      ]
    },
    {
      id: 'licensing',
      name: 'Sync & Licensing',
      icon: Film,
      amount: 1580.30,
      percentage: 8.4,
      growth: 42.1,
      color: 'from-orange-500 to-red-600',
      licenses: [
        { type: 'TV Commercial', count: 1, revenue: 1200.00 },
        { type: 'YouTube Content', count: 3, revenue: 280.30 },
        { type: 'Podcast Intro', count: 1, revenue: 100.00 }
      ]
    },
    {
      id: 'email',
      name: 'Email Campaigns',
      icon: Mail,
      amount: 650.00,
      percentage: 3.5,
      growth: 8.7,
      color: 'from-yellow-500 to-amber-600',
      campaigns: [
        { name: 'New Release Promo', conversions: 42, revenue: 420.00 },
        { name: 'Merch Drop', conversions: 18, revenue: 180.00 },
        { name: 'Exclusive Content', conversions: 5, revenue: 50.00 }
      ]
    }
  ]

  const revenueByMonth = [
    { month: 'Jan', amount: 12450 },
    { month: 'Feb', amount: 13820 },
    { month: 'Mar', amount: 15230 },
    { month: 'Apr', amount: 14680 },
    { month: 'May', amount: 16420 },
    { month: 'Jun', amount: 18742 }
  ]

  const paymentHistory = [
    {
      id: '1',
      date: new Date(2026, 0, 1),
      description: 'Spotify Streaming - December 2025',
      amount: 4230.50,
      status: 'completed',
      method: 'Bank Transfer'
    },
    {
      id: '2',
      date: new Date(2026, 0, 5),
      description: 'Merch Sales - Week 1',
      amount: 1240.80,
      status: 'completed',
      method: 'PayPal'
    },
    {
      id: '3',
      date: new Date(2026, 0, 10),
      description: 'Fan Support - Monthly',
      amount: 3240.80,
      status: 'pending',
      method: 'Stripe'
    },
    {
      id: '4',
      date: new Date(2026, 0, 12),
      description: 'Sync License - TV Commercial',
      amount: 1200.00,
      status: 'pending',
      method: 'Wire Transfer'
    },
    {
      id: '5',
      date: new Date(2025, 11, 20),
      description: 'Apple Music Streaming - November 2025',
      amount: 1820.40,
      status: 'completed',
      method: 'Bank Transfer'
    }
  ]

  const upcomingPayouts = [
    { date: new Date(2026, 0, 15), source: 'Spotify', amount: 5230.20 },
    { date: new Date(2026, 0, 20), source: 'Apple Music', amount: 2180.40 },
    { date: new Date(2026, 1, 1), source: 'YouTube Music', amount: 890.50 }
  ]

  const maxRevenue = Math.max(...revenueByMonth.map(m => m.amount))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Revenue Dashboard</h1>
          <p className="text-gray-400">Track all your income streams and payouts</p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
            <option value="12m">Last 12 Months</option>
            <option value="all">All Time</option>
          </select>

          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gold/20 to-gold-dark/10 border border-gold/30 rounded-2xl p-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-gold" />
            </div>
            <div className="flex items-center gap-1 text-green-400 text-sm">
              <TrendingUp className="w-4 h-4" />
              +{monthlyGrowth}%
            </div>
          </div>
          <h3 className="text-gray-400 text-sm mb-1">Total Revenue</h3>
          <p className="text-3xl font-bold text-white mb-1">${totalRevenue.toLocaleString()}</p>
          <p className="text-gray-500 text-xs">Last 30 days</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <h3 className="text-gray-400 text-sm mb-1">Pending Payouts</h3>
          <p className="text-3xl font-bold text-white mb-1">${pendingPayouts.toLocaleString()}</p>
          <p className="text-gray-500 text-xs">{upcomingPayouts.length} upcoming payments</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <h3 className="text-gray-400 text-sm mb-1">Average Monthly</h3>
          <p className="text-3xl font-bold text-white mb-1">$15,390</p>
          <p className="text-gray-500 text-xs">Based on last 6 months</p>
        </motion.div>
      </div>

      {/* Revenue Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-white mb-6">Revenue Over Time</h2>
        <div className="space-y-4">
          {revenueByMonth.map((data, index) => (
            <div key={data.month} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{data.month}</span>
                <span className="text-white font-semibold">${data.amount.toLocaleString()}</span>
              </div>
              <div className="h-2 bg-dark-tertiary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(data.amount / maxRevenue) * 100}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-gold to-gold-dark rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Revenue Streams */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Revenue Streams</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={stream.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedStream(selectedStream === stream.id ? null : stream.id)}
              className="bg-dark-secondary border border-gray-800 rounded-2xl p-6 cursor-pointer hover:border-gold transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stream.color} rounded-xl flex items-center justify-center`}>
                    <stream.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{stream.name}</h3>
                    <p className="text-gray-500 text-sm">{stream.percentage}% of total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-xl">${stream.amount.toLocaleString()}</p>
                  <div className={`flex items-center gap-1 text-sm ${stream.growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {stream.growth > 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    {Math.abs(stream.growth)}%
                  </div>
                </div>
              </div>

              {/* Expandable Details */}
              {selectedStream === stream.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 pt-4 border-t border-gray-700 space-y-3"
                >
                  {stream.id === 'streaming' && stream.platforms?.map((platform) => (
                    <div key={platform.name} className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm">{platform.name}</p>
                        <p className="text-gray-500 text-xs">{platform.streams.toLocaleString()} streams</p>
                      </div>
                      <p className="text-gray-300 font-semibold">${platform.amount.toLocaleString()}</p>
                    </div>
                  ))}
                  {stream.id === 'merch' && stream.items?.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm">{item.name}</p>
                        <p className="text-gray-500 text-xs">{item.sold} sold</p>
                      </div>
                      <p className="text-gray-300 font-semibold">${item.revenue.toLocaleString()}</p>
                    </div>
                  ))}
                  {stream.id === 'crowdfunding' && stream.tiers?.map((tier) => (
                    <div key={tier.name} className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm">{tier.name}</p>
                        <p className="text-gray-500 text-xs">{tier.count} supporters</p>
                      </div>
                      <p className="text-gray-300 font-semibold">${tier.revenue.toLocaleString()}</p>
                    </div>
                  ))}
                  {stream.id === 'licensing' && stream.licenses?.map((license, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm">{license.type}</p>
                        <p className="text-gray-500 text-xs">{license.count} license(s)</p>
                      </div>
                      <p className="text-gray-300 font-semibold">${license.revenue.toLocaleString()}</p>
                    </div>
                  ))}
                  {stream.id === 'email' && stream.campaigns?.map((campaign) => (
                    <div key={campaign.name} className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm">{campaign.name}</p>
                        <p className="text-gray-500 text-xs">{campaign.conversions} conversions</p>
                      </div>
                      <p className="text-gray-300 font-semibold">${campaign.revenue.toLocaleString()}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Payment History & Upcoming Payouts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Payment History</h2>
            <button className="text-gold text-sm hover:text-gold-dark transition-colors">View All</button>
          </div>

          <div className="space-y-4">
            {paymentHistory.map((payment) => (
              <div key={payment.id} className="flex items-start gap-4 p-4 bg-dark-tertiary rounded-xl">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium mb-1">{payment.description}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{payment.date.toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{payment.method}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold mb-1">${payment.amount.toLocaleString()}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    payment.status === 'completed'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {payment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Payouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Upcoming Payouts</h2>
            <FileText className="w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-4">
            {upcomingPayouts.map((payout, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-dark-tertiary rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{payout.source}</p>
                    <p className="text-gray-500 text-xs">{payout.date.toLocaleDateString()}</p>
                  </div>
                </div>
                <p className="text-white font-bold">${payout.amount.toLocaleString()}</p>
              </div>
            ))}

            <div className="mt-6 p-4 bg-gold/10 border border-gold/30 rounded-xl">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium mb-1">Total Pending</p>
                  <p className="text-2xl font-bold text-gold">${pendingPayouts.toLocaleString()}</p>
                  <p className="text-gray-400 text-xs mt-1">Expected within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tax Documents */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Tax Documents</h2>
            <p className="text-gray-400 text-sm">Download your tax forms and statements</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-dark-tertiary border border-gray-700 rounded-lg hover:border-gold transition-all text-white">
            <Download className="w-4 h-4" />
            Download All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-dark-tertiary border border-gray-700 rounded-xl hover:border-gold transition-all cursor-pointer">
            <FileText className="w-8 h-8 text-gold mb-3" />
            <h3 className="text-white font-semibold mb-1">1099-MISC Form</h3>
            <p className="text-gray-400 text-xs mb-3">Tax Year 2025</p>
            <button className="text-gold text-sm hover:text-gold-dark transition-colors">Download PDF</button>
          </div>

          <div className="p-4 bg-dark-tertiary border border-gray-700 rounded-xl hover:border-gold transition-all cursor-pointer">
            <FileText className="w-8 h-8 text-gold mb-3" />
            <h3 className="text-white font-semibold mb-1">Annual Statement</h3>
            <p className="text-gray-400 text-xs mb-3">January 2026</p>
            <button className="text-gold text-sm hover:text-gold-dark transition-colors">Download PDF</button>
          </div>

          <div className="p-4 bg-dark-tertiary border border-gray-700 rounded-xl hover:border-gold transition-all cursor-pointer">
            <FileText className="w-8 h-8 text-gold mb-3" />
            <h3 className="text-white font-semibold mb-1">Revenue Report</h3>
            <p className="text-gray-400 text-xs mb-3">Q4 2025</p>
            <button className="text-gold text-sm hover:text-gold-dark transition-colors">Download PDF</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
