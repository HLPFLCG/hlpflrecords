'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3,
  Calendar,
  Play,
  Music,
  Users,
  TrendingUp,
  DollarSign,
  Upload,
  FileText,
  Sparkles,
  Mail,
  LogOut
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Verify session on mount
    const verifySession = async () => {
      try {
        const response = await fetch('/api/auth/verify', {
          method: 'GET',
          credentials: 'include'
        })

        const data = await response.json()

        if (data.success && data.authenticated) {
          setIsAuthenticated(true)
          setUser(data.user)
        } else {
          setIsAuthenticated(false)
          router.push('/artist-portal')
        }
      } catch (error) {
        console.error('Session verification error:', error)
        setIsAuthenticated(false)
        router.push('/artist-portal')
      }
    }

    verifySession()
  }, [router])

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/login', {
        method: 'DELETE',
        credentials: 'include'
      })
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      router.push('/artist-portal')
    }
  }

  // Show loading while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#c87941] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Verifying session...</p>
        </div>
      </div>
    )
  }

  // If not authenticated, show nothing (will redirect)
  if (!isAuthenticated) {
    return null
  }

  const tools = [
    {
      title: 'Analytics Dashboard',
      description: 'Track your performance across Spotify, YouTube, and social platforms',
      icon: BarChart3,
      href: '/analytics',
      color: 'from-blue-500 to-blue-600',
      stats: '2.4M streams'
    },
    {
      title: 'Social Scheduler',
      description: 'Plan and schedule posts across Instagram, Twitter, and more',
      icon: Calendar,
      href: '/social-scheduler',
      color: 'from-purple-500 to-purple-600',
      stats: '12 scheduled posts'
    },
    {
      title: 'Spotify Tools',
      description: 'Pre-save campaigns, playlist submissions, and profile optimization',
      icon: Play,
      href: '/spotify-tools',
      color: 'from-green-500 to-green-600',
      stats: '1.2M monthly listeners'
    },
    {
      title: 'Email Marketing',
      description: 'Connect with fans and grow your email list',
      icon: Mail,
      href: '/email-marketing',
      color: 'from-pink-500 to-pink-600',
      stats: '45.2K subscribers'
    },
    {
      title: 'Crowdfunding',
      description: 'Launch fan support campaigns and accept donations',
      icon: DollarSign,
      href: '/crowdfunding',
      color: 'from-yellow-500 to-yellow-600',
      stats: '$12,450 raised'
    },
    {
      title: 'Collaboration Finder',
      description: 'Connect with other artists and producers',
      icon: Users,
      href: '/collaborations',
      color: 'from-orange-500 to-orange-600',
      stats: '8 active collaborations'
    },
    {
      title: 'Music Licensing',
      description: 'License your music for films, TV, and commercials',
      icon: Music,
      href: '/licensing',
      color: 'from-red-500 to-red-600',
      stats: '5 active licenses'
    },
    {
      title: 'Merch Store',
      description: 'Create and sell merchandise to your fans',
      icon: Upload,
      href: '/merch',
      color: 'from-indigo-500 to-indigo-600',
      stats: '234 items sold'
    }
  ]

  const upcomingTasks = [
    { task: 'Complete "Midnight Dreams" pre-save campaign', due: '2 days', priority: 'high' },
    { task: 'Submit to 5 editorial playlists', due: '5 days', priority: 'medium' },
    { task: 'Schedule Instagram posts for release week', due: '7 days', priority: 'high' },
    { task: 'Update artist profile on Spotify', due: '10 days', priority: 'low' }
  ]

  const recentActivity = [
    { action: 'New follower milestone reached', detail: '45K followers on Spotify', time: '2 hours ago' },
    { action: 'Playlist placement', detail: 'Added to "New Music Friday" playlist', time: '5 hours ago' },
    { action: 'Social media post', detail: 'Instagram post reached 10K likes', time: '1 day ago' },
    { action: 'Revenue update', detail: 'Monthly revenue: $4,560', time: '2 days ago' }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#c87941] to-[#a0613a] rounded-2xl mb-4"
            >
              <Sparkles className="w-8 h-8 text-black" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Artist Dashboard
            </h1>
            <p className="text-lg text-gray-400">
              Welcome back! Here's your complete toolkit
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-glass-card p-6 rounded-2xl border border-gray-800">
            <TrendingUp className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">+23%</h3>
            <p className="text-gray-400">Growth this month</p>
          </div>
          <div className="bg-glass-card p-6 rounded-2xl border border-gray-800">
            <Play className="w-10 h-10 text-[#c87941] mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">2.4M</h3>
            <p className="text-gray-400">Total streams</p>
          </div>
          <div className="bg-glass-card p-6 rounded-2xl border border-gray-800">
            <Users className="w-10 h-10 text-[#c87941] mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">45.2K</h3>
            <p className="text-gray-400">Total followers</p>
          </div>
          <div className="bg-glass-card p-6 rounded-2xl border border-gray-800">
            <DollarSign className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">$12.4K</h3>
            <p className="text-gray-400">Monthly revenue</p>
          </div>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Artist Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Link key={index} href={tool.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-glass-card p-6 rounded-2xl border border-gray-800 hover:border-[#c87941] transition-all duration-300 cursor-pointer group"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${tool.color} rounded-xl mb-4`}>
                    <tool.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#c87941] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                  <p className="text-[#c87941] text-sm font-semibold">{tool.stats}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Tasks */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-glass-card p-8 rounded-2xl border border-gray-800"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Upcoming Tasks</h2>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl">
                  <div className={`w-3 h-3 rounded-full mt-2 ${
                    task.priority === 'high' ? 'bg-red-500' :
                    task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-white mb-1">{task.task}</p>
                    <p className="text-gray-400 text-sm">Due in {task.due}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-glass-card p-8 rounded-2xl border border-gray-800"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl">
                  <div className="w-10 h-10 bg-[#c87941]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-[#c87941]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white mb-1">{activity.action}</p>
                    <p className="text-gray-400 text-sm">{activity.detail}</p>
                    <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Link href="/release-management">
            <button className="w-full p-6 bg-gradient-to-br from-[#c87941]/20 to-[#a0613a]/10 rounded-2xl border border-[#c87941]/30 hover:shadow-lg hover:shadow-[#c87941]/20 transition-all text-left">
              <Music className="w-8 h-8 text-[#c87941] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Release Music</h3>
              <p className="text-gray-400 text-sm">Manage your releases and distribution</p>
            </button>
          </Link>

          <Link href="/press-releases">
            <button className="w-full p-6 bg-gradient-to-br from-[#c87941]/20 to-[#a0613a]/10 rounded-2xl border border-[#c87941]/30 hover:shadow-lg hover:shadow-[#c87941]/20 transition-all text-left">
              <FileText className="w-8 h-8 text-[#c87941] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Press & PR</h3>
              <p className="text-gray-400 text-sm">Create press releases and media content</p>
            </button>
          </Link>

          <Link href="/analytics">
            <button className="w-full p-6 bg-gradient-to-br from-[#c87941]/20 to-[#a0613a]/10 rounded-2xl border border-[#c87941]/30 hover:shadow-lg hover:shadow-[#c87941]/20 transition-all text-left">
              <BarChart3 className="w-8 h-8 text-[#c87941] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">View Analytics</h3>
              <p className="text-gray-400 text-sm">Track your performance metrics</p>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
