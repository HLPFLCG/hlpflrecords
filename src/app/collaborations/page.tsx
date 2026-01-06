'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Music, Search, MessageCircle, Star, MapPin, Headphones } from 'lucide-react'

export default function CollaborationsPage() {
  const [activeTab, setActiveTab] = useState('discover')
  const [selectedGenre, setSelectedGenre] = useState('all')

  const mockData = {
    activeCollabs: 8,
    completedProjects: 23,
    connections: 156,
    matches: [
      {
        name: 'Alex Rivers',
        type: 'Producer',
        genre: 'Hip-Hop / R&B',
        location: 'Los Angeles, CA',
        rating: 4.9,
        projects: 47,
        skills: ['Mixing', 'Mastering', 'Beat Production'],
        image: '👨‍🎤'
      },
      {
        name: 'Sarah Chen',
        type: 'Vocalist',
        genre: 'Pop / Electronic',
        location: 'New York, NY',
        rating: 5.0,
        projects: 89,
        skills: ['Lead Vocals', 'Harmonies', 'Songwriting'],
        image: '👩‍🎤'
      },
      {
        name: 'Marcus Johnson',
        type: 'Songwriter',
        genre: 'Indie / Alternative',
        location: 'Nashville, TN',
        rating: 4.8,
        projects: 124,
        skills: ['Lyrics', 'Melody', 'Top-lining'],
        image: '🎸'
      },
      {
        name: 'Elena Rodriguez',
        type: 'Mix Engineer',
        genre: 'All Genres',
        location: 'Miami, FL',
        rating: 4.9,
        projects: 203,
        skills: ['Mixing', 'Audio Editing', 'Post-Production'],
        image: '🎚️'
      },
    ],
    activeProjects: [
      {
        title: 'Summer Vibes EP',
        collaborator: 'DJ Nova',
        status: 'In Progress',
        progress: 65,
        deadline: '2 weeks',
        role: 'Vocalist'
      },
      {
        title: 'Midnight Dreams Remix',
        collaborator: 'The Beats Collective',
        status: 'Mixing',
        progress: 80,
        deadline: '5 days',
        role: 'Original Artist'
      },
      {
        title: 'Acoustic Sessions Vol. 1',
        collaborator: 'Sarah Mitchell',
        status: 'Recording',
        progress: 45,
        deadline: '1 month',
        role: 'Featured Artist'
      },
    ],
    messages: [
      { from: 'Alex Rivers', preview: 'Hey! Loved your latest track. Want to collab?', time: '2h ago', unread: true },
      { from: 'Sarah Chen', preview: 'I finished the vocal stems. Check them out!', time: '5h ago', unread: true },
      { from: 'Marcus Johnson', preview: 'Thanks for the feedback on the lyrics!', time: '1d ago', unread: false },
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6"
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Collaborations
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with other artists and producers
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
              <Music className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.activeCollabs}</h3>
            <p className="text-gray-400">Active Collaborations</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <Star className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.completedProjects}</h3>
            <p className="text-gray-400">Completed Projects</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <Users className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.connections}</h3>
            <p className="text-gray-400">Connections</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <MessageCircle className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">2</h3>
            <p className="text-gray-400">Unread Messages</p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setActiveTab('discover')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'discover'
                ? 'bg-gold text-dark'
                : 'bg-glass-card text-gray-400 hover:text-white'
            }`}
          >
            Discover Artists
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'projects'
                ? 'bg-gold text-dark'
                : 'bg-glass-card text-gray-400 hover:text-white'
            }`}
          >
            Active Projects
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all relative ${
              activeTab === 'messages'
                ? 'bg-gold text-dark'
                : 'bg-glass-card text-gray-400 hover:text-white'
            }`}
          >
            Messages
            {mockData.messages.filter(m => m.unread).length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                {mockData.messages.filter(m => m.unread).length}
              </span>
            )}
          </button>
        </div>

        {/* Content */}
        {activeTab === 'discover' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-6 flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for artists, producers, songwriters..."
                  className="w-full pl-12 pr-4 py-3 bg-glass-card border border-gold/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="px-6 py-3 bg-glass-card border border-gold/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="all">All Genres</option>
                <option value="hiphop">Hip-Hop</option>
                <option value="pop">Pop</option>
                <option value="electronic">Electronic</option>
                <option value="rock">Rock</option>
                <option value="indie">Indie</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockData.matches.map((artist, index) => (
                <div key={index} className="bg-glass-card p-8 rounded-2xl hover:shadow-gold-hover transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{artist.image}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white">{artist.name}</h3>
                          <p className="text-gold text-sm font-semibold">{artist.type}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-white font-semibold">{artist.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{artist.genre}</p>
                      <p className="text-gray-400 text-sm flex items-center gap-1 mb-4">
                        <MapPin className="w-4 h-4" />
                        {artist.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {artist.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-3 bg-gold text-dark font-semibold rounded-lg hover:shadow-gold-hover transition-all">
                      Connect
                    </button>
                    <button className="px-4 py-3 bg-glass-card text-white font-semibold rounded-lg hover:bg-gray-700 transition-all">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {mockData.activeProjects.map((project, index) => (
              <div key={index} className="bg-glass-card p-8 rounded-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-1">With <span className="text-gold">{project.collaborator}</span></p>
                    <p className="text-gray-400 text-sm">Your role: {project.role}</p>
                  </div>
                  <span className="px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-semibold">
                    {project.status}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white font-semibold">{project.progress}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-gold rounded-full transition-all duration-1000"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Deadline: {project.deadline}</p>
                </div>
                <button className="w-full px-4 py-3 bg-gold text-dark font-semibold rounded-lg hover:shadow-gold-hover transition-all">
                  View Project Details
                </button>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'messages' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Recent Messages</h2>
            <div className="space-y-4">
              {mockData.messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    message.unread ? 'bg-gold/10 border border-gold/30' : 'bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-white">{message.from}</h3>
                        <span className="text-gray-400 text-sm">{message.time}</span>
                      </div>
                      <p className={`${message.unread ? 'text-white font-semibold' : 'text-gray-400'}`}>
                        {message.preview}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
