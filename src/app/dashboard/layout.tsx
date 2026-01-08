'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Calendar,
  TrendingUp,
  Users,
  Video,
  Zap,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  Sparkles,
  Music,
  DollarSign,
  Mail,
  Package
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Social Media', href: '/dashboard/social', icon: Calendar },
    { name: 'Analytics', href: '/dashboard/analytics', icon: TrendingUp },
    { name: 'Community', href: '/dashboard/community', icon: Users },
    { name: 'B-Roll Hub', href: '/dashboard/broll', icon: Video },
    { name: 'Viral Boost', href: '/dashboard/boost', icon: Zap },
    { name: 'Revenue', href: '/dashboard/revenue', icon: DollarSign },
    { name: 'Releases', href: '/dashboard/releases', icon: Music },
    { name: 'Merch', href: '/dashboard/merch', icon: Package },
    { name: 'Email Campaigns', href: '/dashboard/email', icon: Mail },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ]

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href
    }
    return pathname?.startsWith(href)
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-dark-secondary border-b border-gray-800 z-50">
        <div className="flex items-center justify-between h-full px-4">
          {/* Left: Logo and Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden lg:block p-2 rounded-lg hover:bg-dark-tertiary transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-dark-tertiary transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-400" />
              ) : (
                <Menu className="w-5 h-5 text-gray-400" />
              )}
            </button>

            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-dark" />
              </div>
              <span className="font-bold text-white text-lg hidden sm:block">HLPFL Portal</span>
            </Link>
          </div>

          {/* Center: Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search releases, analytics, campaigns..."
                className="w-full bg-dark-tertiary border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
            </div>
          </div>

          {/* Right: Notifications and Profile */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-lg hover:bg-dark-tertiary transition-colors">
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full"></span>
            </button>

            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                <span className="text-dark font-bold text-sm">DA</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-white text-sm font-medium">Demo Artist</p>
                <p className="text-gray-500 text-xs">Artist</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || mobileMenuOpen) && (
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-16 left-0 bottom-0 w-64 bg-dark-secondary border-r border-gray-800 z-40 overflow-y-auto ${
              mobileMenuOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <nav className="p-4 space-y-1">
              {navigation.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      active
                        ? 'bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-dark-tertiary'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Sidebar Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
              <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-dark-tertiary transition-all w-full">
                <LogOut className="w-5 h-5" />
                <span>Log Out</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div
        className={`pt-16 transition-all duration-200 ${
          sidebarOpen ? 'lg:pl-64' : 'lg:pl-0'
        }`}
      >
        <main className="p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}
