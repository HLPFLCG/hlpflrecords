'use client'

import React, { useState, useEffect } from 'react'
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
import { api } from '@/lib/api-client'

export default function RevenuePage() {
  const [timeRange, setTimeRange] = useState('30d')
  const [selectedStream, setSelectedStream] = useState<string | null>(null)
  const [revenueData, setRevenueData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const artistId = 'artist-alki-001'

  useEffect(() => {
    async function loadRevenue() {
      try {
        setLoading(true)

        // Calculate date range based on timeRange
        const endDate = new Date().toISOString().split('T')[0]
        const startDate = new Date()

        if (timeRange === '7d') startDate.setDate(startDate.getDate() - 7)
        else if (timeRange === '30d') startDate.setDate(startDate.getDate() - 30)
        else if (timeRange === '90d') startDate.setDate(startDate.getDate() - 90)
        else if (timeRange === '12m') startDate.setMonth(startDate.getMonth() - 12)

        const startDateStr = startDate.toISOString().split('T')[0]

        const response = await api.revenue.get({
          artistId,
          startDate: startDateStr,
          endDate
        })

        if (response.success && response.data) {
          setRevenueData(response.data)
        } else {
          setError(response.error || 'Failed to load revenue data')
        }
      } catch (err) {
        setError('An error occurred while loading revenue')
        console.error('Revenue load error:', err)
      } finally {
        setLoading(false)
      }
    }

    loadRevenue()
  }, [artistId, timeRange])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading revenue data...</p>
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
          <p className="text-white font-bold mb-2">Failed to Load Revenue Data</p>
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

  // Extract data from API response
  const overview = revenueData?.overview || { total_revenue: 0, monthly_growth: 0, pending_payouts: 0, average_monthly: 0 }
  const totalRevenue = overview.total_revenue
  const monthlyGrowth = overview.monthly_growth
  const pendingPayouts = overview.pending_payouts
  const averageMonthly = overview.average_monthly

  // Map API revenue streams to UI format
  const streamIconMap: any = {
    'streaming': Music,
    'merchandise': ShoppingBag,
    'crowdfunding': Users,
    'licensing': Film,
    'email': Mail
  }

  const streamColorMap: any = {
    'streaming': 'from-green-500 to-emerald-600',
    'merchandise': 'from-purple-500 to-pink-600',
    'crowdfunding': 'from-blue-500 to-cyan-600',
    'licensing': 'from-orange-500 to-red-600',
    'email': 'from-yellow-500 to-amber-600'
  }

  const revenueStreams = (revenueData?.streams || []).map((stream: any) => ({
    id: stream.source_type,
    name: stream.source_name || stream.source_type,
    icon: streamIconMap[stream.source_type] || DollarSign,
    amount: stream.amount || 0,
    percentage: totalRevenue > 0 ? ((stream.amount / totalRevenue) * 100).toFixed(1) : 0,
    growth: stream.growth_percentage || 0,
    color: streamColorMap[stream.source_type] || 'from-gray-500 to-gray-600',
    metadata: stream.metadata || {}
  }))

  // Group revenue by month from API data
  const revenueByMonth = (revenueData?.by_month || []).map((item: any) => ({
    month: new Date(item.month).toLocaleDateString('en-US', { month: 'short' }),
    amount: item.total_revenue || 0
  }))

  // Map payouts to payment history and upcoming
  const allPayouts = revenueData?.payouts || []
  const paymentHistory = allPayouts
    .filter((p: any) => p.status === 'paid' || p.status === 'completed')
    .map((payout: any) => ({
      id: payout.id,
      date: new Date(payout.payout_date || payout.created_at),
      description: payout.description || `${payout.platform} payout`,
      amount: payout.amount || 0,
      status: 'completed',
      method: payout.payment_method || 'Bank Transfer'
    }))
    .slice(0, 5)

  const upcomingPayouts = allPayouts
    .filter((p: any) => p.status === 'pending' || p.status === 'scheduled')
    .map((payout: any) => ({
      date: new Date(payout.payout_date || payout.created_at),
      source: payout.platform || payout.source,
      amount: payout.amount || 0
    }))
    .slice(0, 3)

  const maxRevenue = revenueByMonth.length > 0 ? Math.max(...revenueByMonth.map((m: any) => m.amount)) : 1

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
          <p className="text-3xl font-bold text-white mb-1">${averageMonthly.toLocaleString()}</p>
          <p className="text-gray-500 text-xs">Based on selected period</p>
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
          {revenueByMonth.map((data: any, index: number) => (
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
          {revenueStreams.map((stream: any, index: number) => (
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
                  {stream.id === 'streaming' && stream.platforms?.map((platform: any) => (
                    <div key={platform.name} className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm">{platform.name}</p>
                        <p className="text-gray-500 text-xs">{platform.streams.toLocaleString()} streams</p>
                      </div>
                      <p className="text-gray-300 font-semibold">${platform.amount.toLocaleString()}</p>
                    </div>
                  ))}
                  {stream.id === 'merch' && stream.items?.map((item: any) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm">{item.name}</p>
                        <p className="text-gray-500 text-xs">{item.sold} sold</p>
                      </div>
                      <p className="text-gray-300 font-semibold">${item.revenue.toLocaleString()}</p>
                    </div>
                  ))}
                  {stream.id === 'crowdfunding' && stream.tiers?.map((tier: any) => (
                    <div key={tier.name} className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm">{tier.name}</p>
                        <p className="text-gray-500 text-xs">{tier.count} supporters</p>
                      </div>
                      <p className="text-gray-300 font-semibold">${tier.revenue.toLocaleString()}</p>
                    </div>
                  ))}
                  {stream.id === 'licensing' && stream.licenses?.map((license: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm">{license.type}</p>
                        <p className="text-gray-500 text-xs">{license.count} license(s)</p>
                      </div>
                      <p className="text-gray-300 font-semibold">${license.revenue.toLocaleString()}</p>
                    </div>
                  ))}
                  {stream.id === 'email' && stream.campaigns?.map((campaign: any) => (
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
            {paymentHistory.map((payment: any) => (
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
            {upcomingPayouts.map((payout: any, index: number) => (
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
