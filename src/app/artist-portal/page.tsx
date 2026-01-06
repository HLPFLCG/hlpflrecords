'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Logo from '@/components/Logo'

export default function ArtistPortalLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Note: In production, Cloudflare Pages Functions are at /api/auth/login
      // During development with static export, this simulates the login
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Important for cookies
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (data.success) {
        // Redirect to dashboard on successful login
        router.push('/dashboard')
      } else {
        setError(data.error || 'Login failed')
      }
    } catch (err) {
      setError('Connection error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#0a0a0a]">
      <div className="w-full max-w-md">
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <Logo width={80} height={80} className="mx-auto" />
          </Link>
          <h1 className="text-white text-2xl font-bold mb-2">HLPFL</h1>
        </div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a1a1a] rounded-3xl p-8 border border-gray-800"
        >
          {/* Lock Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#c87941] to-[#a0613a] rounded-2xl flex items-center justify-center">
              <Lock className="w-10 h-10 text-black" strokeWidth={2.5} />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-white text-3xl font-bold text-center mb-3 tracking-tight">
            ARTIST PORTAL
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Access your dashboard, contracts, and resources
          </p>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 mb-6"
            >
              <p className="text-red-400 text-sm text-center">{error}</p>
            </motion.div>
          )}

          {/* Demo Credentials Info */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
            <p className="text-blue-300 text-xs text-center">
              <strong>Demo Login:</strong> demo@hlpfl.org / demo123
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSignIn} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium mb-3">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-xl py-4 pl-12 pr-4 text-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#c87941] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-white text-sm font-medium mb-3">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-xl py-4 pl-12 pr-4 text-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#c87941] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 bg-[#0a0a0a] border border-gray-700 rounded checked:bg-[#c87941] checked:border-[#c87941] focus:ring-2 focus:ring-[#c87941] transition-all"
                />
                <span className="ml-2 text-gray-300 text-sm">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-[#c87941] hover:text-[#d89558] text-sm font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#c87941] to-[#a0613a] hover:from-[#d89558] hover:to-[#c87941] text-black font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Submit Music Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Not an artist yet?{' '}
              <Link
                href="/submit-music"
                className="text-[#c87941] hover:text-[#d89558] font-medium transition-colors"
              >
                Submit your music
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Chat with HLPFL Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6"
        >
          <button
            onClick={() => {
              // Trigger chatbot
              const chatbotButton = document.querySelector('[data-chatbot-toggle]') as HTMLElement
              if (chatbotButton) chatbotButton.click()
            }}
            className="w-full bg-gradient-to-r from-[#c87941] to-[#a0613a] hover:from-[#d89558] hover:to-[#c87941] text-black font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with HLPFL
          </button>
        </motion.div>

        {/* Support Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Need help accessing your account?{' '}
            <Link
              href="/contact"
              className="text-[#c87941] hover:text-[#d89558] font-medium transition-colors"
            >
              Contact support
            </Link>
          </p>
        </div>

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-2 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-all text-sm"
          >
            hlpfl.org
          </Link>
        </div>
      </div>
    </div>
  )
}
