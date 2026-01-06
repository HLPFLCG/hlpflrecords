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
        avatar: '/images/team/alex.jpg',
        rating: 4.8,
        projects: 45
      },
      {
        name: 'Maria Santos',
        type: 'Vocalist',
        genre: 'Pop / Electronic',
        location: 'Miami, FL',
        avatar: '/images/team/maria.jpg',
        rating: 4.9,
        projects: 32
      },
      {
        name: 'Jordan Lee',
        type: 'Songwriter',
        genre: 'R&B / Soul',
        location: 'New York, NY',
        avatar: '/images/team/jordan.jpg',
        rating: 4.7,
        projects: 28
      }
    ],
    activeCollaborations: [
      {
        name: 'Summer Vibes EP',
        partner: 'DJ Kameron',
        role: 'Featured Artist',
        status: 'In Progress',
        progress: 65
      },
      {
        name: 'Remix Project',
        partner: 'BeatMaster',
        role: 'Producer',
        status: 'Review',
        progress: 90
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
            Collaboration Finder
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Connect with other artists and producers
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Active Collabs', value: mockData.activeCollabs, icon: Music, color: 'from-blue-500 to-blue-600' },
            { label: 'Completed', value: mockData.completedProjects, icon: Star, color: 'from-green-500 to-green-600' },
            { label: 'Connections', value: mockData.connections, icon: Users, color: 'from-purple-500 to-purple-600' },
            { label: 'New Matches', value: '12', icon: MessageCircle, color: 'from-pink-500 to-pink-600' }
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
              {['discover', 'active', 'requests', 'messages'].map((tab) => (
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
            {activeTab === 'discover' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Discover Collaborators</h2>
                  <div className="flex gap-3">
                    <select 
                      value={selectedGenre}
                      onChange={(e) => setSelectedGenre(e.target.value)}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="all">All Genres</option>
                      <option value="hiphop">Hip-Hop</option>
                      <option value="rnb">R&B</option>
                      <option value="pop">Pop</option>
                      <option value="electronic">Electronic</option>
                    </select>
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <Search className="w-4 h-4" />
                      Search
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockData.matches.map((match, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                            {match.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">{match.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{match.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{match.rating}</span>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Headphones className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600 dark:text-gray-300">{match.genre}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600 dark:text-gray-300">{match.location}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500 dark:text-gray-400">{match.projects} projects</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                          <MessageCircle className="w-4 h-4 inline mr-1" />
                          Connect
                        </button>
                        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                          View Profile
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'active' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Active Collaborations</h2>
                {mockData.activeCollaborations.map((collab, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{collab.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          Partner: <span className="font-medium">{collab.partner}</span>
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        collab.status === 'In Progress' 
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                      }`}>
                        {collab.status}
                      </span>
                    </div>
                    <div className="mb-3">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${collab.progress}%` }}
                          transition={{ duration: 0.8 }}
                          className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                        />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{collab.progress}% complete</p>
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                      View Project →
                    </button>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'requests' && (
              <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Collaboration Requests</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Manage incoming collaboration requests
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  View Requests
                </button>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Messages</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Chat with your collaborators
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Open Messages
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}