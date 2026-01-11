'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Music, TrendingUp, DollarSign, Upload, Plus, Users } from 'lucide-react'

export default function ReleaseManagementPage() {
  const [view, setView] = useState('dashboard')

  const releases = [
    {
      id: 1,
      title: 'Midnight Dreams',
      artist: 'Alki',
      type: 'Album',
      releaseDate: '2024-01-20',
      status: 'Upcoming',
      streams: 0,
      revenue: 0,
      progress: 75
    },
    {
      id: 2,
      title: 'Neon Nights',
      artist: 'Alki',
      type: 'Single',
      releaseDate: '2023-12-15',
      status: 'Released',
      streams: 1250000,
      revenue: 4560,
      progress: 100
    },
    {
      id: 3,
      title: 'Summer Vibes',
      artist: 'Various Artists',
      type: 'Compilation',
      releaseDate: '2023-11-01',
      status: 'Released',
      streams: 890000,
      revenue: 3210,
      progress: 100
    }
  ]

  const renderContent = () => {
    switch(view) {
      case 'dashboard':
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-glass-card p-6 rounded-2xl">
                <Music className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-gray-400">Total Releases</p>
              </div>
              <div className="bg-glass-card p-6 rounded-2xl">
                <TrendingUp className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">63M+</h3>
                <p className="text-gray-400">Total Streams</p>
              </div>
              <div className="bg-glass-card p-6 rounded-2xl">
                <DollarSign className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">$12,450</h3>
                <p className="text-gray-400">Total Revenue</p>
              </div>
              <div className="bg-glass-card p-6 rounded-2xl">
                <Users className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">5</h3>
                <p className="text-gray-400">Active Artists</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Recent Releases</h2>
            <div className="space-y-4">
              {releases.map(release => (
                <motion.div
                  key={release.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-glass-card p-6 rounded-2xl hover:shadow-gold-hover transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{release.title}</h3>
                      <p className="text-gray-400">{release.artist} • {release.type}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      release.status === 'Released' ? 'bg-green-500/20 text-green-400' : 'bg-gold/20 text-gold'
                    }`}>
                      {release.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-gray-400 text-sm">Release Date</p>
                      <p className="text-white font-semibold">{new Date(release.releaseDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Streams</p>
                      <p className="text-white font-semibold">{release.streams.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Revenue</p>
                      <p className="text-white font-semibold">${release.revenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Progress</p>
                      <p className="text-white font-semibold">{release.progress}%</p>
                    </div>
                  </div>

                  {release.status === 'Upcoming' && (
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${release.progress}%` }}
                        className="h-full bg-gold rounded-full"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 'new':
        return (
          <div className="bg-glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Create New Release</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Release Title</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Enter release title" />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Artist</label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold">
                  <option>Select artist</option>
                  <option>Alki</option>
                  <option>James Rockel</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Release Type</label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold">
                  <option>Single</option>
                  <option>EP</option>
                  <option>Album</option>
                  <option>Compilation</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Release Date</label>
                <input type="date" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Genre</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold" placeholder="e.g., R&B, Hip-Hop, Pop" />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Description</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold resize-none" placeholder="Release description" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">Cover Art</label>
                  <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-gold transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">Click to upload or drag and drop</p>
                    <p className="text-gray-500 text-sm">PNG, JPG up to 10MB</p>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Audio Files</label>
                  <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-gold transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">Click to upload or drag and drop</p>
                    <p className="text-gray-500 text-sm">WAV, FLAC up to 50MB</p>
                  </div>
                </div>
              </div>

              <button className="w-full px-8 py-4 bg-gold hover:bg-gold-dark text-dark font-semibold rounded-xl transition-all transform hover:scale-105">
                Create Release
              </button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Release Management</h1>
            <p className="text-xl text-gray-400">Manage your music releases and track performance</p>
          </div>
          <button
            onClick={() => setView('new')}
            className="mt-6 md:mt-0 px-8 py-4 bg-gold hover:bg-gold-dark text-dark font-semibold rounded-xl transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New Release
          </button>
        </div>

        {/* View Toggle */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setView('dashboard')}
            className={`px-6 py-3 rounded-xl transition-all ${
              view === 'dashboard' ? 'bg-gold text-dark font-semibold' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setView('new')}
            className={`px-6 py-3 rounded-xl transition-all ${
              view === 'new' ? 'bg-gold text-dark font-semibold' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            New Release
          </button>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  )
}