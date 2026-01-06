'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Save, Playlist, Users, TrendingUp, Link, Copy, Check } from 'lucide-react'

export default function SpotifyToolsPage() {
  const [copied, setCopied] = useState(false)

  const copyLink = (link: string) => {
    navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const presaveCampaigns = [
    {
      id: 1,
      title: 'Midnight Dreams - Pre-Save Campaign',
      track: 'Midnight Dreams',
      releaseDate: '2024-01-20',
      presaves: 2450,
      goal: 5000,
      progress: 49,
      link: 'https://presave.al.music/alki-midnight-dreams'
    }
  ]

  const playlistTips = [
    {
      title: 'Curator Outreach',
      description: 'Personalize your pitch and focus on playlists that match your genre',
      action: 'View Template'
    },
    {
      title: 'Playlist Optimization',
      description: 'Ensure your tracks have engaging artwork and strong metadata',
      action: 'Learn More'
    },
    {
      title: 'Submission Timing',
      description: 'Submit 2-3 weeks before release for optimal placement',
      action: 'View Calendar'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1DB954] to-[#1ed760] rounded-2xl mb-6"
          >
            <Play className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Spotify Tools
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Maximize your Spotify presence and grow your streams
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-glass-card p-6 rounded-2xl"
          >
            <Play className="w-12 h-12 text-[#1DB954] mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">1.2M</h3>
            <p className="text-gray-400">Monthly Listeners</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-glass-card p-6 rounded-2xl"
          >
            <Users className="w-12 h-12 text-[#1DB954] mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">45.2K</h3>
            <p className="text-gray-400">Followers</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-glass-card p-6 rounded-2xl"
          >
            <Playlist className="w-12 h-12 text-[#1DB954] mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">234</h3>
            <p className="text-gray-400">Playlists Featured</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-glass-card p-6 rounded-2xl"
          >
            <TrendingUp className="w-12 h-12 text-[#1DB954] mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">+23%</h3>
            <p className="text-gray-400">Growth Rate</p>
          </motion.div>
        </div>

        {/* Pre-Save Campaigns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Pre-Save Campaigns</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {presaveCampaigns.map(campaign => (
              <div key={campaign.id} className="bg-gradient-to-br from-[#1DB954]/20 to-[#1ed760]/10 p-8 rounded-2xl border border-[#1DB954]/30">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{campaign.title}</h3>
                    <p className="text-gray-400">Release: {new Date(campaign.releaseDate).toLocaleDateString()}</p>
                  </div>
                  <Save className="w-8 h-8 text-[#1DB954]" />
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white">{campaign.presaves.toLocaleString()} Pre-saves</span>
                    <span className="text-gray-400">Goal: {campaign.goal.toLocaleString()}</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${campaign.progress}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-[#1DB954] rounded-full"
                    />
                  </div>
                  <p className="text-center text-[#1DB954] font-semibold mt-2">
                    {campaign.progress}% to Goal
                  </p>
                </div>

                <button
                  onClick={() => copyLink(campaign.link)}
                  className="w-full px-6 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copy Pre-Save Link
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Playlist Curator Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Playlist Curator Tools</h2>
          
          <div className="bg-glass-card p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {playlistTips.map((tip, index) => (
                <div key={index} className="p-6 bg-gray-800/50 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                  <p className="text-gray-400 mb-4">{tip.description}</p>
                  <button className="text-[#1DB954] hover:text-white transition-colors">
                    {tip.action} →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Spotify Profile Optimization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-glass-card p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Profile Optimization Checklist</h2>
          
          <div className="space-y-4">
            {[
              'Profile image matches across all platforms',
              'Bio includes genre, location, and latest release',
              'Artist pick pinned to latest release',
              'Artist playlist created with your tracks',
              'Merch store integrated',
              'Concert dates listed',
              'Social links verified and active'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl">
                <div className="w-8 h-8 bg-[#1DB954] rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <button className="p-6 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl border border-gold/30 hover:shadow-gold-hover transition-all">
            <Play className="w-8 h-8 text-gold mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Create Pre-Save</h3>
            <p className="text-gray-400 text-sm">Launch a new pre-save campaign</p>
          </button>

          <button className="p-6 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl border border-gold/30 hover:shadow-gold-hover transition-all">
            <Playlist className="w-8 h-8 text-gold mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Submit to Playlists</h3>
            <p className="text-gray-400 text-sm">Track your playlist submissions</p>
          </button>

          <button className="p-6 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl border border-gold/30 hover:shadow-gold-hover transition-all">
            <Link className="w-8 h-8 text-gold mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Generate Links</h3>
            <p className="text-gray-400 text-sm">Create smart links for releases</p>
          </button>
        </motion.div>
      </div>
    </div>
  )
}