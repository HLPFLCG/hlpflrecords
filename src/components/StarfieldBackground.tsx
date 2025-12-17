'use client'

import { useEffect, useRef } from 'react'
import styles from '../styles/Starfield.module.css'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    // Initialize stars
    const initStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 3000) // Density control
      starsRef.current = []

      for (let i = 0; i < starCount; i++) {
        const sizeChoice = Math.random()
        let size, opacity, twinkleSpeed
        
        if (sizeChoice < 0.7) {
          // Small distant stars (70%)
          size = Math.random() * 0.8 + 0.2
          opacity = Math.random() * 0.3 + 0.2
          twinkleSpeed = Math.random() * 0.015 + 0.005
        } else if (sizeChoice < 0.95) {
          // Medium stars (25%)
          size = Math.random() * 1.5 + 0.8
          opacity = Math.random() * 0.4 + 0.4
          twinkleSpeed = Math.random() * 0.02 + 0.008
        } else {
          // Bright nearby stars (5%)
          size = Math.random() * 2 + 1.5
          opacity = Math.random() * 0.3 + 0.7
          twinkleSpeed = Math.random() * 0.025 + 0.01
        }
        
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: size,
          opacity: opacity,
          twinkleSpeed: twinkleSpeed,
          twinklePhase: Math.random() * Math.PI * 2,
        })
      }
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      starsRef.current.forEach((star) => {
        // Calculate twinkling opacity
        star.twinklePhase += star.twinkleSpeed
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7 // Oscillate between 0.4 and 1.0
        const currentOpacity = star.opacity * twinkle

        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2
        )
        
        // More realistic star colors: white, blue-white, gold-white
        const colorChoice = Math.random()
        if (colorChoice < 0.6) {
          // White stars (60%)
          gradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity})`)
          gradient.addColorStop(0.3, `rgba(255, 255, 255, ${currentOpacity * 0.8})`)
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)
        } else if (colorChoice < 0.85) {
          // Blue-white stars (25%)
          gradient.addColorStop(0, `rgba(200, 220, 255, ${currentOpacity})`)
          gradient.addColorStop(0.3, `rgba(200, 220, 255, ${currentOpacity * 0.8})`)
          gradient.addColorStop(1, `rgba(200, 220, 255, 0)`)
        } else {
          // Gold-white stars (15% - matching site theme)
          gradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity})`)
          gradient.addColorStop(0.3, `rgba(255, 215, 0, ${currentOpacity * 0.6})`)
          gradient.addColorStop(1, `rgba(255, 215, 0, 0)`)
        }

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Add bright center point
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    animate()

    // Handle resize
    window.addEventListener('resize', resizeCanvas)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={styles.starfield}
      aria-hidden="true"
    />
  )
}