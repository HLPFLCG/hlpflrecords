'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Music,
  Plus,
  Calendar,
  Upload,
  CheckCircle,
  Clock,
  TrendingUp,
  Share2,
  Edit,
  Trash2,
  Download,
  Play,
  Eye,
  Heart,
  BarChart3,
  Globe,
  X,
  Image as ImageIcon,
  FileAudio,
  Tag,
  Users
} from 'lucide-react'
import { api } from '@/lib/api-client'

interface Release {
  id: string
  title: string
  artist: string
  cover_art_url?: string
  coverArt?: string
  release_date: string
  releaseDate?: Date
  status: 'draft' | 'scheduled' | 'live' | 'archived'
  release_type: 'single' | 'ep' | 'album'
  type?: 'single' | 'ep' | 'album'
  tracks?: number
  total_streams?: number
  streams?: number
  platforms?: string[]
  presaves?: number
}

export default function ReleasesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [showNewReleaseModal, setShowNewReleaseModal] = useState(false)
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null)
  const [releases, setReleases] = useState<Release[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Use Alki as default artist
  const artistId = 'artist-alki-001'

  useEffect(() => {
    async function loadReleases() {
      try {
        setLoading(true)
        const response = await api.releases.getAll(artistId)

        if (response.success && response.data) {
          // Transform API data to match component interface
          const transformedReleases = (response.data as any[]).map((release: any) => ({
            ...release,
            coverArt: release.cover_art_url || '/api/placeholder/300/300',
            releaseDate: new Date(release.release_date),
            type: release.release_type,
            streams: release.total_streams || 0,
            tracks: release.track_count || 1,
            platforms: ['spotify', 'apple', 'youtube', 'tidal']
          }))
          setReleases(transformedReleases)
        } else {
          setError(response.error || 'Failed to load releases')
        }
      } catch (err) {
        setError('An error occurred while loading releases')
        console.error('Releases load error:', err)
      } finally {
        setLoading(false)
      }
    }

    loadReleases()
  }, [artistId])

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading releases...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-400 text-2xl">⚠️</span>
          </div>
          <p className="text-white font-bold mb-2">Failed to Load Releases</p>
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

  const platforms = [
    { id: 'spotify', name: 'Spotify', icon: Music, color: 'text-green-400' },
    { id: 'apple', name: 'Apple Music', icon: Music, color: 'text-pink-400' },
    { id: 'youtube', name: 'YouTube Music', icon: Play, color: 'text-red-400' },
    { id: 'tidal', name: 'Tidal', icon: Music, color: 'text-blue-400' },
    { id: 'amazon', name: 'Amazon Music', icon: Music, color: 'text-orange-400' },
    { id: 'soundcloud', name: 'SoundCloud', icon: Music, color: 'text-orange-500' }
  ]

  const filteredReleases = filterStatus === 'all'
    ? releases
    : releases.filter(r => r.status === filterStatus)

  const stats = {
    totalReleases: releases.length,
    liveReleases: releases.filter(r => r.status === 'live').length,
    scheduledReleases: releases.filter(r => r.status === 'scheduled').length,
    totalStreams: releases.reduce((sum, r) => sum + (r.streams || 0), 0)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Release Management</h1>
          <p className="text-gray-400">Manage your music releases and distribution</p>
        </div>

        <button
          onClick={() => setShowNewReleaseModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all"
        >
          <Plus className="w-5 h-5" />
          New Release
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <Music className="w-10 h-10 text-gold mb-4" />
          <h3 className="text-3xl font-bold text-white mb-2">{stats.totalReleases}</h3>
          <p className="text-gray-400">Total Releases</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <CheckCircle className="w-10 h-10 text-green-400 mb-4" />
          <h3 className="text-3xl font-bold text-white mb-2">{stats.liveReleases}</h3>
          <p className="text-gray-400">Live Releases</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <Clock className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-3xl font-bold text-white mb-2">{stats.scheduledReleases}</h3>
          <p className="text-gray-400">Scheduled</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <TrendingUp className="w-10 h-10 text-purple-400 mb-4" />
          <h3 className="text-3xl font-bold text-white mb-2">{(stats.totalStreams / 1000000).toFixed(1)}M</h3>
          <p className="text-gray-400">Total Streams</p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filterStatus === 'all'
                ? 'bg-gold text-dark font-semibold'
                : 'bg-dark-tertiary text-gray-400 hover:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterStatus('live')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filterStatus === 'live'
                ? 'bg-gold text-dark font-semibold'
                : 'bg-dark-tertiary text-gray-400 hover:text-white'
            }`}
          >
            Live
          </button>
          <button
            onClick={() => setFilterStatus('scheduled')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filterStatus === 'scheduled'
                ? 'bg-gold text-dark font-semibold'
                : 'bg-dark-tertiary text-gray-400 hover:text-white'
            }`}
          >
            Scheduled
          </button>
          <button
            onClick={() => setFilterStatus('draft')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filterStatus === 'draft'
                ? 'bg-gold text-dark font-semibold'
                : 'bg-dark-tertiary text-gray-400 hover:text-white'
            }`}
          >
            Drafts
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${
              viewMode === 'grid' ? 'bg-gold text-dark' : 'bg-dark-tertiary text-gray-400'
            }`}
          >
            <BarChart3 className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${
              viewMode === 'list' ? 'bg-gold text-dark' : 'bg-dark-tertiary text-gray-400'
            }`}
          >
            <Music className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Releases Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReleases.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedRelease(release)}
              className="bg-dark-secondary border border-gray-800 rounded-2xl overflow-hidden hover:border-gold transition-all cursor-pointer group"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                    release.status === 'live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    release.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  }`}>
                    {release.status.charAt(0).toUpperCase() + release.status.slice(1)}
                  </span>
                </div>
                <ImageIcon className="w-20 h-20 text-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>

              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-gold transition-colors">
                  {release.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{release.artist}</p>

                <div className="flex items-center justify-between text-sm mb-3">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {release.releaseDate ? new Date(release.releaseDate).toLocaleDateString() : 'TBA'}
                  </div>
                  <span className="text-gray-500 uppercase text-xs">{release.type}</span>
                </div>

                {release.status === 'live' && (
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Play className="w-4 h-4" />
                      {((release.streams || 0) / 1000).toFixed(0)}K
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Music className="w-4 h-4" />
                      {release.tracks || 0} {(release.tracks || 0) === 1 ? 'track' : 'tracks'}
                    </div>
                  </div>
                )}

                {release.status === 'scheduled' && release.presaves && (
                  <div className="flex items-center gap-1 text-blue-400 text-sm">
                    <Heart className="w-4 h-4" />
                    {release.presaves.toLocaleString()} pre-saves
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredReleases.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedRelease(release)}
              className="bg-dark-secondary border border-gray-800 rounded-2xl p-6 hover:border-gold transition-all cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ImageIcon className="w-10 h-10 text-gray-700" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-white font-bold text-lg">{release.title}</h3>
                      <p className="text-gray-400 text-sm">{release.artist}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      release.status === 'live' ? 'bg-green-500/20 text-green-400' :
                      release.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {release.status.charAt(0).toUpperCase() + release.status.slice(1)}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {release.releaseDate.toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Music className="w-4 h-4" />
                      {release.tracks || 0} {(release.tracks || 0) === 1 ? 'track' : 'tracks'}
                    </div>
                    {release.status === 'live' && (
                      <div className="flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        {((release.streams || 0) / 1000).toFixed(0)}K streams
                      </div>
                    )}
                    {release.status === 'scheduled' && release.presaves && (
                      <div className="flex items-center gap-2 text-blue-400">
                        <Heart className="w-4 h-4" />
                        {release.presaves.toLocaleString()} pre-saves
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 bg-dark-tertiary rounded-lg hover:bg-gold hover:text-dark transition-all">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-dark-tertiary rounded-lg hover:bg-red-500 hover:text-white transition-all">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* New Release Modal */}
      <AnimatePresence>
        {showNewReleaseModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowNewReleaseModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark-secondary border border-gray-800 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Create New Release</h2>
                <button
                  onClick={() => setShowNewReleaseModal(false)}
                  className="p-2 hover:bg-dark-tertiary rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Cover Art Upload */}
                <div>
                  <label className="block text-white font-semibold mb-2">Cover Art</label>
                  <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-gold transition-colors cursor-pointer">
                    <ImageIcon className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                    <p className="text-gray-400 mb-1">Click to upload cover art</p>
                    <p className="text-gray-600 text-sm">3000x3000px minimum, JPG or PNG</p>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Release Title</label>
                    <input
                      type="text"
                      placeholder="Enter release title"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Artist Name</label>
                    <input
                      type="text"
                      placeholder="Enter artist name"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Release Type</label>
                    <select className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent">
                      <option value="single">Single</option>
                      <option value="ep">EP</option>
                      <option value="album">Album</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Release Date</label>
                    <input
                      type="date"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Platforms */}
                <div>
                  <label className="block text-white font-semibold mb-3">Distribution Platforms</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {platforms.map((platform) => (
                      <label key={platform.id} className="flex items-center gap-3 p-3 bg-dark-tertiary border border-gray-700 rounded-lg cursor-pointer hover:border-gold transition-colors">
                        <input type="checkbox" className="w-4 h-4 text-gold" />
                        <platform.icon className={`w-5 h-5 ${platform.color}`} />
                        <span className="text-gray-300 text-sm">{platform.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Audio Upload */}
                <div>
                  <label className="block text-white font-semibold mb-2">Upload Tracks</label>
                  <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-gold transition-colors cursor-pointer">
                    <FileAudio className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                    <p className="text-gray-400 mb-1">Click to upload audio files</p>
                    <p className="text-gray-600 text-sm">WAV or FLAC format, 16-bit minimum</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4">
                  <button className="flex-1 px-6 py-3 bg-dark-tertiary border border-gray-700 text-white rounded-lg hover:border-gold transition-all">
                    Save as Draft
                  </button>
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all">
                    Schedule Release
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Release Detail Modal */}
      <AnimatePresence>
        {selectedRelease && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedRelease(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark-secondary border border-gray-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="w-16 h-16 text-gray-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedRelease.title}</h2>
                    <p className="text-gray-400 text-lg mb-3">{selectedRelease.artist}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      selectedRelease.status === 'live' ? 'bg-green-500/20 text-green-400' :
                      selectedRelease.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {selectedRelease.status.charAt(0).toUpperCase() + selectedRelease.status.slice(1)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedRelease(null)}
                  className="p-2 hover:bg-dark-tertiary rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {selectedRelease.status === 'live' && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-dark-tertiary rounded-xl p-4">
                    <Play className="w-8 h-8 text-gold mb-2" />
                    <p className="text-2xl font-bold text-white mb-1">{(selectedRelease.streams / 1000).toFixed(0)}K</p>
                    <p className="text-gray-400 text-sm">Total Streams</p>
                  </div>
                  <div className="bg-dark-tertiary rounded-xl p-4">
                    <Heart className="w-8 h-8 text-pink-400 mb-2" />
                    <p className="text-2xl font-bold text-white mb-1">12.4K</p>
                    <p className="text-gray-400 text-sm">Saves</p>
                  </div>
                  <div className="bg-dark-tertiary rounded-xl p-4">
                    <Users className="w-8 h-8 text-blue-400 mb-2" />
                    <p className="text-2xl font-bold text-white mb-1">8.2K</p>
                    <p className="text-gray-400 text-sm">Listeners</p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-3">Distribution Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedRelease.platforms.map((platformId) => {
                      const platform = platforms.find(p => p.id === platformId)
                      return platform ? (
                        <div key={platformId} className="flex items-center gap-2 px-3 py-2 bg-dark-tertiary rounded-lg">
                          <platform.icon className={`w-4 h-4 ${platform.color}`} />
                          <span className="text-gray-300 text-sm">{platform.name}</span>
                        </div>
                      ) : null
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gold text-dark font-semibold rounded-lg hover:shadow-lg transition-all">
                    <Edit className="w-5 h-5" />
                    Edit Release
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-dark-tertiary border border-gray-700 text-white rounded-lg hover:border-gold transition-all">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-dark-tertiary border border-gray-700 text-white rounded-lg hover:border-gold transition-all">
                    <Download className="w-5 h-5" />
                    Download Assets
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
