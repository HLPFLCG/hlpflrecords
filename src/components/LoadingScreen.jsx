'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [loadingPhase, setLoadingPhase] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const canvasRef = useRef(null)

  const loadingMessages = [
    "Empowering creators...",
    "Zero upfront costs...",
    "Aligning incentives...",
    "Building partnerships...",
    "We earn when you earn..."
  ]

  // Canvas particle system for premium effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    const particles = []
    const particleCount = 60

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 121, 65, ${particle.opacity})`
        ctx.fill()

        // Draw connections
        particles.forEach((other, j) => {
          if (i === j) return
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(200, 121, 65, ${0.15 * (1 - distance / 120)})`
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
        >
          {/* Canvas particle network */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0"
            style={{ opacity: 0.7 }}
          />

          {/* Background elements */}
          <div className="absolute inset-0 z-[1]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,121,65,0.15)_0%,_transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(200,121,65,0.02)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(200,121,65,0.02)_1px,_transparent_1px)] bg-[size:40px_40px]" />

            {/* Morphing gradient orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#c87941]/25 to-transparent rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#c87941]/20 to-transparent rounded-full blur-[80px]"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -40, 0],
                y: [0, 40, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-8 px-4">
            {/* Logo with 3D rotation and glow */}
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
                rotateY: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
              }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              {/* Multi-layer glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl -m-6"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(200, 121, 65, 0.3), 0 0 80px rgba(200, 121, 65, 0.1)",
                    "0 0 60px rgba(200, 121, 65, 0.5), 0 0 120px rgba(200, 121, 65, 0.2)",
                    "0 0 40px rgba(200, 121, 65, 0.3), 0 0 80px rgba(200, 121, 65, 0.1)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 -m-10 rounded-full border-2 border-dashed border-[#c87941]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Second rotating ring (opposite direction) */}
              <motion.div
                className="absolute inset-0 -m-14 rounded-full border border-[#c87941]/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Logo container */}
              <motion.div
                className="relative w-36 h-36 bg-gradient-to-br from-[#c87941]/15 to-transparent rounded-2xl flex items-center justify-center backdrop-blur-xl border border-[#c87941]/30 shadow-2xl"
                animate={{
                  rotateY: [0, 5, -5, 0],
                  rotateX: [0, -5, 5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Logo width={110} height={110} className="relative z-10 drop-shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#c87941]/10 via-transparent to-[#c87941]/5 rounded-2xl" />
              </motion.div>
            </motion.div>

            {/* HLPFL Text with gradient animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <motion.h1
                className="text-6xl md:text-7xl font-black mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}
              >
                <motion.span
                  className="inline-block bg-gradient-to-r from-[#c87941] via-[#e8a86d] via-[#c87941] to-[#a86535] bg-clip-text text-transparent bg-[length:300%_auto]"
                  animate={{
                    backgroundPosition: ['0% center', '100% center', '0% center']
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  HLPFL
                </motion.span>
              </motion.h1>

              {/* Nonprofit badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center px-4 py-1.5 mb-4 bg-[#c87941]/10 border border-[#c87941]/30 rounded-full"
              >
                <span className="text-[#c87941] text-xs font-semibold tracking-wider">501(c)(3) NONPROFIT</span>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={loadingPhase}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 text-lg md:text-xl font-medium"
                >
                  {loadingMessages[loadingPhase]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Progress Bar with enhanced effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="w-80 md:w-[400px]"
            >
              <div className="relative h-1.5 bg-gray-900/80 rounded-full overflow-hidden backdrop-blur-sm border border-[#c87941]/10">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#a86535] via-[#c87941] to-[#e8a86d] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#c87941] rounded-full blur-md"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />

                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>

              {/* Progress Percentage */}
              <motion.div className="mt-4 text-center text-[#c87941] font-bold text-lg tracking-wider tabular-nums">
                {Math.round(progress)}%
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-500 text-sm md:text-base text-center max-w-md font-light tracking-wide"
            >
              Empowering Creative Entrepreneurs
            </motion.div>
          </div>

          {/* Corner branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 right-8 text-[#c87941]/40 text-xs font-medium tracking-widest"
          >
            HLPFL.ORG
          </motion.div>

          {/* Bottom line accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c87941]/50 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
