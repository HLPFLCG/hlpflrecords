'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Upload,
  Video,
  Scissors,
  Download,
  Share2,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Maximize,
  Search,
  Filter,
  Grid3x3,
  List,
  Clock,
  Eye,
  Users,
  Sparkles,
  Zap,
  Film,
  Music,
  Image as ImageIcon,
  FolderOpen,
  Star,
  Trash2
} from 'lucide-react'

interface VideoFile {
  id: string
  title: string
  thumbnail: string
  duration: string
  size: string
  uploadedAt: Date
  category: 'performance' | 'bts' | 'studio' | 'lifestyle'
  tags: string[]
  views: number
  clips: number
}

export default function BRollHub() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showUploader, setShowUploader] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<VideoFile | null>(null)

  const videos: VideoFile[] = [
    {
      id: '1',
      title: 'Studio Session - Recording "Midnight Dreams"',
      thumbnail: '/images/broll/studio-1.jpg',
      duration: '12:34',
      size: '1.2 GB',
      uploadedAt: new Date(2026, 0, 8),
      category: 'studio',
      tags: ['recording', 'vocals', 'production'],
      views: 45,
      clips: 8
    },
    {
      id: '2',
      title: 'Live Performance - NYC Show Highlights',
      thumbnail: '/images/broll/live-1.jpg',
      duration: '45:12',
      size: '4.8 GB',
      uploadedAt: new Date(2026, 0, 7),
      category: 'performance',
      tags: ['live', 'concert', 'nyc'],
      views: 120,
      clips: 15
    },
    {
      id: '3',
      title: 'Behind The Scenes - Music Video Shoot',
      thumbnail: '/images/broll/bts-1.jpg',
      duration: '28:45',
      size: '3.2 GB',
      uploadedAt: new Date(2026, 0, 6),
      category: 'bts',
      tags: ['music video', 'bts', 'production'],
      views: 89,
      clips: 12
    },
    {
      id: '4',
      title: 'Day in the Life - Tour Vlog',
      thumbnail: '/images/broll/lifestyle-1.jpg',
      duration: '18:20',
      size: '2.1 GB',
      uploadedAt: new Date(2026, 0, 5),
      category: 'lifestyle',
      tags: ['vlog', 'tour', 'lifestyle'],
      views: 67,
      clips: 6
    }
  ]

  const stats = [
    { label: 'Total Videos', value: '124', icon: Video, color: 'from-blue-500 to-blue-600' },
    { label: 'Total Clips', value: '456', icon: Scissors, color: 'from-purple-500 to-purple-600' },
    { label: 'Storage Used', value: '48.2 GB', icon: FolderOpen, color: 'from-gold to-gold-dark' },
    { label: 'Total Views', value: '12.4K', icon: Eye, color: 'from-green-500 to-green-600' }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'performance': return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'bts': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'studio': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'lifestyle': return 'bg-green-500/20 text-green-400 border-green-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">B-Roll Hub</h1>
          <p className="text-gray-400">Upload, organize, and edit your video content</p>
        </div>

        <button
          onClick={() => setShowUploader(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
        >
          <Upload className="w-5 h-5" />
          <span>Upload Video</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-secondary border border-gray-800 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Filters and View Toggle */}
      <div className="bg-dark-secondary border border-gray-800 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search videos..."
                className="w-64 bg-dark-tertiary border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-dark-tertiary border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="all">All Categories</option>
              <option value="performance">Performance</option>
              <option value="bts">Behind The Scenes</option>
              <option value="studio">Studio</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-gold text-dark' : 'bg-dark-tertiary text-gray-400 hover:text-white'
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-gold text-dark' : 'bg-dark-tertiary text-gray-400 hover:text-white'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Library */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
      }`}>
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-secondary border border-gray-800 rounded-xl overflow-hidden hover:border-gold/50 transition-all group"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-dark-tertiary">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Film className="w-16 h-16 text-gold/50 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Video Preview</p>
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-white text-xs font-semibold">
                {video.duration}
              </div>

              {/* Play Overlay */}
              <button
                onClick={() => setSelectedVideo(video)}
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-dark ml-1" />
                </div>
              </button>
            </div>

            {/* Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold leading-tight">{video.title}</h3>
                <button className="text-gray-400 hover:text-gold transition-colors">
                  <Star className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center space-x-2 mb-3">
                <span className={`px-2 py-1 rounded text-xs font-semibold border ${getCategoryColor(video.category)}`}>
                  {video.category}
                </span>
                <span className="text-gray-500 text-xs">{video.size}</span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{video.views}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Scissors className="w-4 h-4" />
                    <span>{video.clips}</span>
                  </span>
                </div>
                <span className="text-xs">{video.uploadedAt.toLocaleDateString()}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {video.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-dark-tertiary rounded text-xs text-gray-400">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <button className="flex-1 py-2 bg-gold/10 border border-gold/30 rounded-lg text-gold text-sm font-medium hover:bg-gold/20 transition-colors flex items-center justify-center space-x-1">
                  <Scissors className="w-4 h-4" />
                  <span>Create Clip</span>
                </button>
                <button className="p-2 bg-dark-tertiary border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gold transition-colors">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 bg-dark-tertiary border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gold transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI-Powered Features */}
      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">AI-Powered Features</h2>
            <p className="text-gray-400 text-sm">Intelligent video processing and editing</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-dark-secondary border border-purple-500/30 rounded-xl text-left hover:bg-dark-secondary/70 transition-colors group">
            <Zap className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-white font-semibold mb-1">Auto-Highlight Detection</h3>
            <p className="text-gray-400 text-sm">AI finds the best moments automatically</p>
          </button>

          <button className="p-4 bg-dark-secondary border border-purple-500/30 rounded-xl text-left hover:bg-dark-secondary/70 transition-colors group">
            <Music className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-white font-semibold mb-1">Music Sync</h3>
            <p className="text-gray-400 text-sm">Auto-sync clips to your tracks</p>
          </button>

          <button className="p-4 bg-dark-secondary border border-purple-500/30 rounded-xl text-left hover:bg-dark-secondary/70 transition-colors group">
            <ImageIcon className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-white font-semibold mb-1">Smart Captions</h3>
            <p className="text-gray-400 text-sm">Generate captions from audio</p>
          </button>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploader && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dark-secondary border border-gray-800 rounded-2xl max-w-2xl w-full p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Upload B-Roll</h2>
              <button
                onClick={() => setShowUploader(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Drag & Drop Area */}
            <div className="border-2 border-dashed border-gray-700 rounded-xl p-12 text-center mb-6 hover:border-gold/50 transition-colors cursor-pointer bg-dark-tertiary/30">
              <Upload className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-white font-semibold mb-2">Drag and drop your videos here</p>
              <p className="text-gray-400 text-sm mb-4">or click to browse</p>
              <p className="text-gray-600 text-xs">Supports MP4, MOV, AVI up to 10GB</p>
            </div>

            {/* Details */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-white font-medium mb-2 block">Video Title</label>
                <input
                  type="text"
                  placeholder="e.g., Studio Session - Recording Vocals"
                  className="w-full bg-dark-tertiary border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-white font-medium mb-2 block">Category</label>
                <select className="w-full bg-dark-tertiary border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold">
                  <option>Performance</option>
                  <option>Behind The Scenes</option>
                  <option>Studio</option>
                  <option>Lifestyle</option>
                </select>
              </div>

              <div>
                <label className="text-white font-medium mb-2 block">Tags (comma separated)</label>
                <input
                  type="text"
                  placeholder="live, concert, nyc"
                  className="w-full bg-dark-tertiary border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end space-x-3">
              <button
                onClick={() => setShowUploader(false)}
                className="px-6 py-3 bg-dark-tertiary border border-gray-700 rounded-lg text-white hover:bg-dark-tertiary/70 transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all">
                <Upload className="w-4 h-4 inline mr-2" />
                Start Upload
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-6xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">{selectedVideo.title}</h2>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Video Player */}
            <div className="bg-black rounded-xl overflow-hidden mb-4">
              <div className="aspect-video bg-gradient-to-br from-gold/20 via-dark to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-24 h-24 text-gold/50 mx-auto mb-4" />
                  <p className="text-gray-500">Video Player</p>
                </div>
              </div>

              {/* Controls */}
              <div className="bg-dark-secondary p-4">
                <div className="flex items-center space-x-4">
                  <button className="text-white hover:text-gold transition-colors">
                    <SkipBack className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-dark hover:bg-gold-light transition-colors">
                    <Play className="w-5 h-5 ml-0.5" />
                  </button>
                  <button className="text-white hover:text-gold transition-colors">
                    <SkipForward className="w-5 h-5" />
                  </button>

                  <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-gold"></div>
                  </div>

                  <span className="text-white text-sm">04:32 / 12:34</span>

                  <button className="text-white hover:text-gold transition-colors">
                    <Volume2 className="w-5 h-5" />
                  </button>
                  <button className="text-white hover:text-gold transition-colors">
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Clip Creation */}
            <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Create Clip</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Start Time</label>
                  <input
                    type="text"
                    placeholder="00:00"
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">End Time</label>
                  <input
                    type="text"
                    placeholder="00:30"
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>
              <button className="w-full mt-4 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all">
                <Scissors className="w-4 h-4 inline mr-2" />
                Create Clip
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
