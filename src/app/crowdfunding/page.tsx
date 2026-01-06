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
        status: 'active'
      },
      {
        name: 'Music Video for "Midnight Dreams"',
        goal: '$8,000',
        raised: '$8,200',
        backers: 154,
        daysLeft: 0,
        progress: 100,
        status: 'funded'
      },
      {
        name: 'Tour Support Fund',
        goal: '$5,000',
        raised: '$3,000',
        backers: 89,
        daysLeft: 25,
        progress: 60,
        status: 'active'
      },
    ],
    recentBackers: [
      { name: 'Sarah M.', amount: '$50', tier: 'Gold Supporter', time: '2 hours ago' },
      { name: 'Mike R.', amount: '$25', tier: 'Silver Fan', time: '5 hours ago' },
      { name: 'Alex T.', amount: '$100', tier: 'Platinum Patron', time: '1 day ago' },
      { name: 'Jamie L.', amount: '$15', tier: 'Bronze Backer', time: '1 day ago' },
    ],
    tiers: [
      { name: 'Bronze Backer', amount: '$10', backers: 89, perks: ['Digital thank you', 'Name in credits'] },
      { name: 'Silver Fan', amount: '$25', backers: 124, perks: ['All Bronze perks', 'Early access to songs', 'Exclusive updates'] },
      { name: 'Gold Supporter', amount: '$50', backers: 98, perks: ['All Silver perks', 'Signed merchandise', 'Private listening party invite'] },
      { name: 'Platinum Patron', amount: '$100+', backers: 31, perks: ['All Gold perks', 'Executive producer credit', 'One-on-one video call'] },
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl mb-6"
          >
            <DollarSign className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Crowdfunding
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Launch fan support campaigns and accept donations
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
              <DollarSign className="w-12 h-12 text-yellow-500" />
              <span className="text-green-400 font-semibold">+18%</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.totalRaised}</h3>
            <p className="text-gray-400">Total Raised</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <Heart className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.activeBackers}</h3>
            <p className="text-gray-400">Active Backers</p>
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
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.avgDonation}</h3>
            <p className="text-gray-400">Average Donation</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <Target className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">2/3</h3>
            <p className="text-gray-400">Goals Reached</p>
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
            Active Campaigns
          </button>
          <button
            onClick={() => setActiveTab('backers')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'backers'
                ? 'bg-gold text-dark'
                : 'bg-glass-card text-gray-400 hover:text-white'
            }`}
          >
            Recent Backers
          </button>
          <button
            onClick={() => setActiveTab('tiers')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'tiers'
                ? 'bg-gold text-dark'
                : 'bg-glass-card text-gray-400 hover:text-white'
            }`}
          >
            Support Tiers
          </button>
        </div>

        {/* Content */}
        {activeTab === 'campaigns' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Active Campaigns</h2>
              <button className="px-6 py-3 bg-gold text-dark font-semibold rounded-lg hover:shadow-gold-hover transition-all">
                Create Campaign
              </button>
            </div>
            {mockData.campaigns.map((campaign, index) => (
              <div key={index} className="bg-glass-card p-8 rounded-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{campaign.name}</h3>
                    <div className="flex gap-4 text-gray-400 text-sm">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {campaign.backers} backers
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {campaign.daysLeft > 0 ? `${campaign.daysLeft} days left` : 'Completed'}
                      </span>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    campaign.status === 'funded'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {campaign.status === 'funded' ? 'Funded!' : 'Active'}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-white mb-2">
                    <span className="text-3xl font-bold">{campaign.raised}</span>
                    <span className="text-gray-400">of {campaign.goal}</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-gold rounded-full transition-all duration-1000"
                      style={{ width: `${campaign.progress}%` }}
                    />
                  </div>
                  <p className="text-gold text-sm font-semibold mt-2">{campaign.progress}% funded</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'backers' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Recent Backers</h2>
            <div className="space-y-4">
              {mockData.recentBackers.map((backer, index) => (
                <div key={index} className="flex items-center justify-between p-6 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{backer.name}</h3>
                      <p className="text-gray-400 text-sm">{backer.tier}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gold">{backer.amount}</p>
                    <p className="text-gray-400 text-sm">{backer.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'tiers' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {mockData.tiers.map((tier, index) => (
              <div key={index} className="bg-glass-card p-8 rounded-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-3xl font-bold text-gold mb-4">{tier.amount}</p>
                  </div>
                  <Award className="w-10 h-10 text-gold" />
                </div>
                <p className="text-gray-400 text-sm mb-4">{tier.backers} backers</p>
                <div className="space-y-2">
                  <p className="text-white font-semibold text-sm mb-2">Perks:</p>
                  {tier.perks.map((perk, i) => (
                    <p key={i} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {perk}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
