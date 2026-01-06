'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Heart, TrendingUp, Users, Calendar, Target, Award } from 'lucide-react'

export default function CrowdfundingPage() {
  const [activeTab, setActiveTab] = useState('campaigns')

  const mockData = {
    totalRaised: '$12,450',
    activeBackers: '342',
    avgDonation: '$36.40',
    campaigns: [
      {
        name: 'New Album Production',
        goal: '$15,000',
        raised: '$9,450',
        backers: 187,
        daysLeft: 12,
        progress: 63,
        description: 'Help us fund the production of our next album!'
      },
      {
        name: 'Music Video Production',
        goal: '$8,000',
        raised: '$3,000',
        backers: 89,
        daysLeft: 25,
        progress: 37.5,
        description: 'Creating a professional music video for our latest single'
      }
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
            Crowdfunding
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Launch fan support campaigns and accept donations
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Raised', value: mockData.totalRaised, icon: DollarSign, color: 'from-yellow-500 to-yellow-600' },
            { label: 'Active Backers', value: mockData.activeBackers, icon: Users, color: 'from-blue-500 to-blue-600' },
            { label: 'Avg. Donation', value: mockData.avgDonation, icon: Heart, color: 'from-pink-500 to-pink-600' },
            { label: 'Active Campaigns', value: '2', icon: Target, color: 'from-purple-500 to-purple-600' }
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
              {['campaigns', 'backers', 'rewards', 'analytics'].map((tab) => (
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
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Active Campaigns</h2>
                  <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Target className="w-4 h-4" />
                    Create Campaign
                  </button>
                </div>
                {mockData.campaigns.map((campaign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{campaign.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">{campaign.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{campaign.raised}</span>
                        <p className="text-sm text-gray-500 dark:text-gray-400">of {campaign.goal}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${campaign.progress}%` }}
                          transition={{ duration: 0.8 }}
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                        />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{campaign.progress}% funded</p>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-300">{campaign.backers} backers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-300">{campaign.daysLeft} days left</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'backers' && (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Backer Management</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Manage your campaign backers and donations
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  View All Backers
                </button>
              </div>
            )}

            {activeTab === 'rewards' && (
              <div className="text-center py-12">
                <Award className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Rewards & Perks</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Create rewards for different donation levels
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Manage Rewards
                </button>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Campaign Analytics</h3>
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