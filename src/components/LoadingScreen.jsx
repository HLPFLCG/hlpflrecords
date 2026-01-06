'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [loadingPhase, setLoadingPhase] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const loadingMessages = [
    "Tuning instruments...",
    "Loading your stage...",
    "Setting up the studio...",
    "Preparing your toolkit...",
    "Almost ready to rock..."
  ]

  useEffect(() => {
    // Smooth progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        const increment = Math.random() * 12 + 3
        return Math.min(prev + increment, 100)
      })
    }, 80)

    // Change loading messages
    const messageInterval = setInterval(() => {
      setLoadingPhase((prev) => (prev + 1) % loadingMessages.length)
    }, 600)

    // Hide loading screen after completion
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        const loader = document.getElementById('loading-screen')
        if (loader) {
          loader.style.display = 'none'
        }
      }, 800)
    }, 2500)

    return () => {
      clearInterval(interval)
      clearInterval(messageInterval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#0a0a0a]"
        >
          {/* Hero-style background pattern - matching landing page */}
          <div className="absolute inset-0">
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,121,65,0.08)_0%,_transparent_50%)]" />

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(200,121,65,0.03)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(200,121,65,0.03)_1px,_transparent_1px)] bg-[size:50px_50px]" />

            {/* Floating orbs matching hero */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#c87941]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#c87941]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          </div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-[#c87941]/30 rounded-full"
                initial={{
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
                  scale: 0
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-8 px-4">
            {/* Logo with premium treatment */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotateY: 0
              }}
              transition={{
                scale: { duration: 0.6, ease: "easeOut" },
                opacity: { duration: 0.6 },
                rotateY: { duration: 1, ease: "easeOut" }
              }}
              className="relative"
            >
              {/* Glowing rings */}
              <motion.div
                className="absolute inset-0 rounded-full -m-4"
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(200, 121, 65, 0.2)",
                    "0 0 60px rgba(200, 121, 65, 0.4)",
                    "0 0 30px rgba(200, 121, 65, 0.2)"
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full -m-8"
                animate={{
                  boxShadow: [
                    "0 0 60px rgba(200, 121, 65, 0.1)",
                    "0 0 90px rgba(200, 121, 65, 0.2)",
                    "0 0 60px rgba(200, 121, 65, 0.1)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />

              {/* Logo container with premium styling */}
              <div className="relative w-32 h-32 bg-gradient-to-br from-[#c87941]/10 to-transparent rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#c87941]/20">
                <Logo width={100} height={100} className="relative z-10 drop-shadow-2xl" />
              </div>
            </motion.div>

            {/* HLPFL Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-black mb-3 tracking-tight" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
                <span className="bg-gradient-to-r from-[#c87941] via-[#d89558] to-[#c87941] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  HLPFL
                </span>
              </h1>
              <AnimatePresence mode="wait">
                <motion.p
                  key={loadingPhase}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 text-base md:text-lg font-medium"
                >
                  {loadingMessages[loadingPhase]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Enhanced Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="w-80 md:w-96"
            >
              <div className="relative h-2 bg-gray-900/80 rounded-full overflow-hidden backdrop-blur-sm border border-[#c87941]/20 shadow-lg">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#c87941] via-[#d89558] to-[#c87941] rounded-full bg-[length:200%_auto]"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${progress}%`,
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    width: { duration: 0.3 },
                    backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
                  }}
                >
                  {/* Enhanced shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>

              {/* Progress Percentage */}
              <motion.div
                className="mt-4 text-center text-[#c87941] font-bold text-base tracking-wider"
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {Math.round(progress)}%
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-500 text-sm md:text-base text-center max-w-md font-light tracking-wide"
              style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.05em' }}
            >
              Tools, Not Contracts
            </motion.div>
          </div>

          {/* Corner branding - matching hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 right-8 text-[#c87941]/40 text-xs font-medium tracking-widest"
          >
            HLPFL.ORG
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
