'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Users, TrendingUp, Send, Edit, FileText, BarChart3 } from 'lucide-react'

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
      { name: 'Exclusive Merch Drop', sent: '43,890', opened: '14,980', clicked: '4,125', date: '2 weeks ago' }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Email Marketing
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Connect with fans and grow your email list
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Subscribers', value: mockData.subscribers.total, icon: Users, color: 'from-blue-500 to-blue-600' },
            { label: 'Growth Rate', value: mockData.subscribers.growth, icon: TrendingUp, color: 'from-green-500 to-green-600' },
            { label: 'Open Rate', value: mockData.subscribers.openRate, icon: Mail, color: 'from-purple-500 to-purple-600' },
            { label: 'Click Rate', value: mockData.subscribers.clickRate, icon: FileText, color: 'from-pink-500 to-pink-600' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {['campaigns', 'subscribers', 'templates', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'campaigns' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Email Campaigns</h2>
                  <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Send className="w-4 h-4" />
                    Create Campaign
                  </button>
                </div>
                {mockData.campaigns.map((campaign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{campaign.name}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{campaign.date}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Sent</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{campaign.sent}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Opened</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{campaign.opened}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Clicked</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{campaign.clicked}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'subscribers' && (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Subscriber Management</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Import, export, and manage your email subscribers
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Import Subscribers
                </button>
              </div>
            )}

            {activeTab === 'templates' && (
              <div className="text-center py-12">
                <Edit className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Templates</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Create and customize email templates
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Create Template
                </button>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="text-center py-12">
                <BarChart3 className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Detailed analytics and performance metrics
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  View Analytics
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}