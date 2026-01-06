'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Share2, Image, Video, Music, Plus, Send } from 'lucide-react'

export default function SocialSchedulerPage() {
  const [scheduledPosts, setScheduledPosts] = useState([
    {
      id: 1,
      platform: 'Instagram',
      content: 'New track dropping Friday! 🎵 #NewMusic #Alki',
      media: 'image',
      mediaType: 'image',
      scheduledDate: '2024-01-12',
      scheduledTime: '10:00',
      status: 'scheduled'
    },
    {
      id: 2,
      platform: 'Twitter',
      content: 'Thank you all for 1M streams! 🎉💜 #Grateful',
      media: 'text',
      mediaType: 'text',
      scheduledDate: '2024-01-15',
      scheduledTime: '14:00',
      status: 'scheduled'
    }
  ])

  const [newPost, setNewPost] = useState({
    platform: 'instagram',
    content: '',
    mediaType: 'image',
    scheduledDate: '',
    scheduledTime: ''
  })

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-2xl mb-6"
          >
            <Calendar className="w-10 h-10 text-dark" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Social Media Scheduler
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Plan and schedule your posts across all platforms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create Post Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Create New Post</h2>
            
            <div className="space-y-6">
              {/* Platform Selection */}
              <div>
                <label className="block text-gray-400 mb-2">Platform</label>
                <select
                  value={newPost.platform}
                  onChange={(e) => setNewPost({...newPost, platform: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option value="instagram">Instagram</option>
                  <option value="twitter">Twitter</option>
                  <option value="facebook">Facebook</option>
                  <option value="tiktok">TikTok</option>
                  <option value="youtube">YouTube</option>
                </select>
              </div>

              {/* Content */}
              <div>
                <label className="block text-gray-400 mb-2">Content</label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  placeholder="What's on your mind?"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                />
              </div>

              {/* Media Type */}
              <div>
                <label className="block text-gray-400 mb-2">Media Type</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setNewPost({...newPost, mediaType: 'image'})}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      newPost.mediaType === 'image' 
                        ? 'border-gold bg-gold/20' 
                        : 'border-gray-700 hover:border-gold'
                    }`}
                  >
                    <Image className="w-6 h-6 mx-auto mb-2 text-white" />
                    <span className="text-white text-sm">Image</span>
                  </button>
                  <button
                    onClick={() => setNewPost({...newPost, mediaType: 'video'})}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      newPost.mediaType === 'video' 
                        ? 'border-gold bg-gold/20' 
                        : 'border-gray-700 hover:border-gold'
                    }`}
                  >
                    <Video className="w-6 h-6 mx-auto mb-2 text-white" />
                    <span className="text-white text-sm">Video</span>
                  </button>
                  <button
                    onClick={() => setNewPost({...newPost, mediaType: 'music'})}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      newPost.mediaType === 'music' 
                        ? 'border-gold bg-gold/20' 
                        : 'border-gray-700 hover:border-gold'
                    }`}
                  >
                    <Music className="w-6 h-6 mx-auto mb-2 text-white" />
                    <span className="text-white text-sm">Music</span>
                  </button>
                </div>
              </div>

              {/* Schedule */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-2">Date</label>
                  <input
                    type="date"
                    value={newPost.scheduledDate}
                    onChange={(e) => setNewPost({...newPost, scheduledDate: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Time</label>
                  <input
                    type="time"
                    value={newPost.scheduledTime}
                    onChange={(e) => setNewPost({...newPost, scheduledTime: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>

              <button className="w-full px-8 py-4 bg-gold hover:bg-gold-dark text-dark font-semibold rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" />
                Schedule Post
              </button>
            </div>
          </motion.div>

          {/* Scheduled Posts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Scheduled Posts</h2>
            
            <div className="space-y-4">
              {scheduledPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-gold transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-5 h-5 text-gold" />
                      <span className="text-white font-semibold">{post.platform}</span>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                      {post.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-3">{post.content}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.scheduledDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.scheduledTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      {post.mediaType === 'image' && <Image className="w-4 h-4" />}
                      {post.mediaType === 'video' && <Video className="w-4 h-4" />}
                      {post.mediaType === 'music' && <Music className="w-4 h-4" />}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-gold/20 to-gold/10 p-8 rounded-2xl border border-gold/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-gold font-semibold mb-2">Timing</h4>
              <p className="text-gray-400 text-sm">Post when your audience is most active (typically 10 AM - 2 PM local time)</p>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-2">Consistency</h4>
              <p className="text-gray-400 text-sm">Maintain a regular posting schedule to keep your audience engaged</p>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-2">Engagement</h4>
              <p className="text-gray-400 text-sm">Respond to comments and messages to build community relationships</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}