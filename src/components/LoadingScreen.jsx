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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1410] to-[#0a0a0a]"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#c87941]/20 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-8 px-4">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotateY: [0, 360]
              }}
              transition={{
                scale: { duration: 0.5 },
                opacity: { duration: 0.5 },
                rotateY: { duration: 2, repeat: Infinity, ease: "linear" }
              }}
              className="relative"
            >
              {/* Glowing ring around logo */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(200, 121, 65, 0.3)",
                    "0 0 40px rgba(200, 121, 65, 0.6)",
                    "0 0 20px rgba(200, 121, 65, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Logo width={120} height={120} className="relative z-10" />
            </motion.div>

            {/* HLPFL Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-[#c87941] via-[#d89558] to-[#c87941] bg-clip-text text-transparent">
                  HLPFL
                </span>
              </h1>
              <motion.p
                key={loadingPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-gray-400 text-sm md:text-base"
              >
                {loadingMessages[loadingPhase]}
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 md:w-80">
              <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#c87941] to-[#d89558] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>

              {/* Progress Percentage */}
              <motion.div
                className="mt-3 text-center text-[#c87941] font-semibold text-sm"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {Math.round(progress)}%
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-500 text-xs md:text-sm text-center max-w-md"
            >
              Tools, Not Contracts
            </motion.div>
          </div>

          {/* Corner branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-6 right-6 text-gray-600 text-xs"
          >
            hlpfl.org
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
