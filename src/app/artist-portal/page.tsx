'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Lock, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Logo from '@/components/Logo'

// OAuth Provider Icons
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
  </svg>
)

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1DB954">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

export default function ArtistPortalLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [oauthLoading, setOauthLoading] = useState<string | null>(null)
  const [error, setError] = useState('')
  const router = useRouter()

  // Check if user is already logged in
  useEffect(() => {
    const isAuth = sessionStorage.getItem('hlpfl_auth') || localStorage.getItem('hlpfl_remember')
    if (isAuth) {
      router.push('/dashboard')
    }
  }, [router])

  const handleOAuthSignIn = async (provider: string) => {
    setOauthLoading(provider)
    setError('')

    // OAuth requires server-side configuration
    // Show a message to indicate this feature needs setup
    setTimeout(() => {
      setError(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login requires OAuth configuration. Please use email login or contact support for access.`)
      setOauthLoading(null)
    }, 500)
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate async operation for better UX
    await new Promise(resolve => setTimeout(resolve, 500))

    // Client-side authentication for demo purposes
    // Works with static export (no server required)
    if (email === 'demo@hlpfl.org' && password === 'demo123') {
      // Store auth state in sessionStorage
      sessionStorage.setItem('hlpfl_auth', 'true')
      sessionStorage.setItem('hlpfl_user', JSON.stringify({
        email: 'demo@hlpfl.org',
        artistName: 'Demo Artist',
        role: 'artist'
      }))

      // Remember me functionality
      if (rememberMe) {
        localStorage.setItem('hlpfl_remember', 'true')
        localStorage.setItem('hlpfl_user', JSON.stringify({
          email: 'demo@hlpfl.org',
          artistName: 'Demo Artist',
          role: 'artist'
        }))
      }

      setIsLoading(false)
      router.push('/dashboard')
    } else {
      setIsLoading(false)
      setError('Invalid email or password. Please try the demo credentials.')
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

          {/* OAuth Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => handleOAuthSignIn('google')}
              disabled={oauthLoading !== null}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50"
            >
              {oauthLoading === 'google' ? (
                <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <GoogleIcon />
              )}
              Continue with Google
            </button>

            <button
              onClick={() => handleOAuthSignIn('facebook')}
              disabled={oauthLoading !== null}
              className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50"
            >
              {oauthLoading === 'facebook' ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <FacebookIcon />
              )}
              Continue with Facebook
            </button>

            <button
              onClick={() => handleOAuthSignIn('apple')}
              disabled={oauthLoading !== null}
              className="w-full flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-semibold py-3 px-4 rounded-xl border border-gray-700 transition-all duration-300 disabled:opacity-50"
            >
              {oauthLoading === 'apple' ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <AppleIcon />
              )}
              Continue with Apple
            </button>

            <button
              onClick={() => handleOAuthSignIn('spotify')}
              disabled={oauthLoading !== null}
              className="w-full flex items-center justify-center gap-3 bg-[#1DB954] hover:bg-[#1ed760] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50"
            >
              {oauthLoading === 'spotify' ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <SpotifyIcon />
              )}
              Continue with Spotify
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#1a1a1a] text-gray-500">or sign in with email</span>
            </div>
          </div>

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
              {isLoading ? 'Signing In...' : 'Sign In with Email'}
            </button>
          </form>

          {/* Submit Music Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Not an artist yet?{' '}
              <Link
                href="/artist-questionnaire"
                className="text-[#c87941] hover:text-[#d89558] font-medium transition-colors"
              >
                Start your application
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
