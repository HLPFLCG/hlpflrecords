'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

// Security: Rate limiting for Easter egg triggers
const RATE_LIMIT_MS = 1000
const MAX_CONCURRENT_EFFECTS = 10

const EasterEggs = () => {
  const [konamiCode, setKonamiCode] = useState<string[]>([])
  const [secretCode, setSecretCode] = useState<string[]>([])
  const [scrollDepth, setScrollDepth] = useState(0)
  const [isThrottled, setIsThrottled] = useState(false)
  const lastTriggerTime = useRef(0)
  const activeEffects = useRef(new Set())
  const secretSequence = ['h', 'l', 'p', 'f', 'l']

  // Rate limiting function
  const canTriggerEasterEgg = useCallback(() => {
    const now = Date.now()
    if (now - lastTriggerTime.current < RATE_LIMIT_MS) {
      return false
    }
    if (activeEffects.current.size >= MAX_CONCURRENT_EFFECTS) {
      return false
    }
    lastTriggerTime.current = now
    return true
  }, [])

  // Sanitize user input for security
  const sanitizeMessage = useCallback((message: string): string => {
    // Remove potentially dangerous characters and patterns
    return message
      .replace(/[<>]/g, '') // Remove HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .slice(0, 200) // Limit length for safety
  }, [])

  // Security: Safe DOM element creation
  const createSafeElement = useCallback((tag: string, text: string, styles: string): HTMLElement => {
    const element = document.createElement(tag)
    element.textContent = sanitizeMessage(text)
    element.setAttribute('style', styles)
    element.setAttribute('data-easter-egg', 'true')
    return element
  }, [sanitizeMessage])

  // Security: Safe element removal
  const safeRemoveElement = useCallback((element: HTMLElement) => {
    try {
      if (element && element.parentNode && element.parentNode.contains(element)) {
        element.parentNode.removeChild(element)
      }
      activeEffects.current.delete(element)
    } catch (error) {
      console.warn('Failed to remove Easter egg element:', error)
    }
  }, [])

  // Analytics tracking with error handling
  const trackEasterEgg = useCallback((label: string) => {
    try {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'easter_egg_activated', {
          event_category: 'engagement',
          event_label: sanitizeMessage(label),
          non_interaction: true
        })
      }
    } catch (error) {
      console.warn('Analytics tracking failed:', error)
    }
  }, [sanitizeMessage])

  // Security: Safe notification display
  const showNotification = useCallback((message: string) => {
    if (!canTriggerEasterEgg()) return

    const notification = createSafeElement(
      'div',
      sanitizeMessage(message),
      `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #c87941, #4ecdc4);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 9999;
        animation: slideInRight 0.5s ease-out;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        font-family: inherit;
        max-width: 300px;
        word-wrap: break-word;
      `
    )

    document.body.appendChild(notification)
    activeEffects.current.add(notification)

    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.5s ease-out'
      setTimeout(() => safeRemoveElement(notification), 500)
    }, 3000)
  }, [canTriggerEasterEgg, createSafeElement, sanitizeMessage, safeRemoveElement])

  // Enhanced Konami Mode with better security
  const activateKonamiMode = useCallback(() => {
    if (!canTriggerEasterEgg()) return

    showNotification('🎮 Konami Code Activated!')
    
    const effect = createSafeElement(
      'div',
      'KONAMI',
      `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 72px;
        color: #0F0;
        font-weight: bold;
        z-index: 9999;
        animation: matrixGlow 3s forwards;
        text-shadow: 0 0 20px #0F0;
        font-family: monospace;
        pointer-events: none;
      `
    )

    document.body.appendChild(effect)
    activeEffects.current.add(effect)
    trackEasterEgg('konami_code')

    setTimeout(() => safeRemoveElement(effect), 3000)
  }, [canTriggerEasterEgg, showNotification, createSafeElement, safeRemoveElement, trackEasterEgg])

  // Enhanced Secret Mode
  const activateSecretMode = useCallback(() => {
    if (!canTriggerEasterEgg()) return

    showNotification('🔓 HLPFL Secret Mode!')
    
    const messages = ['Welcome to the Inner Circle', 'You Found the Hidden Path', 'HLPFL Elite Member']
    const message = messages[Math.floor(Math.random() * messages.length)]
    
    const effect = createSafeElement(
      'div',
      message,
      `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 32px;
        color: #c87941;
        font-weight: bold;
        z-index: 9999;
        animation: secretReveal 3s forwards;
        text-shadow: 0 0 20px #c87941;
        text-align: center;
        pointer-events: none;
        max-width: 80%;
      `
    )

    document.body.appendChild(effect)
    activeEffects.current.add(effect)
    trackEasterEgg('secret_mode')

    setTimeout(() => safeRemoveElement(effect), 3000)
  }, [canTriggerEasterEgg, showNotification, createSafeElement, safeRemoveElement, trackEasterEgg])

  // Enhanced Rainbow Mode with performance optimization
  const activateRainbowMode = useCallback(() => {
    if (!canTriggerEasterEgg()) return

    showNotification('🌈 Rainbow Mode!')
    
    const colors = ['#ff6b6b', '#f9ca24', '#6ab04c', '#4ecdc4', '#45b7d1', '#c87941']
    let colorIndex = 0
    let animationFrame: number
    
    const animate = () => {
      document.body.style.filter = `hue-rotate(${colorIndex * 60}deg)`
      colorIndex = (colorIndex + 1) % colors.length
      animationFrame = requestAnimationFrame(animate)
    }
    
    // Use requestAnimationFrame for better performance
    let intervalCounter = 0
    const frameBasedInterval = () => {
      intervalCounter++
      if (intervalCounter % 12 === 0) { // ~200ms at 60fps
        animate()
      }
      if (intervalCounter < 180) { // ~3 seconds
        requestAnimationFrame(frameBasedInterval)
      } else {
        cancelAnimationFrame(animationFrame)
        document.body.style.filter = ''
      }
    }
    
    requestAnimationFrame(frameBasedInterval)
    trackEasterEgg('rainbow_mode')
  }, [canTriggerEasterEgg, showNotification, trackEasterEgg])

  // Enhanced Party Mode
  const activatePartyMode = useCallback(() => {
    if (!canTriggerEasterEgg()) return

    showNotification('🎉 Party Mode!')
    
    // Optimized confetti generation
    const confettiCount = Math.min(20, MAX_CONCURRENT_EFFECTS)
    for (let i = 0; i < confettiCount; i++) {
      setTimeout(() => {
        const confetti = createSafeElement(
          'div',
          '',
          `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: -10px;
            width: 8px;
            height: 8px;
            background: ${['#ff6b6b', '#4ecdc4', '#f9ca24', '#c87941'][Math.floor(Math.random() * 4)]};
            animation: confettiFall 2s linear forwards;
            z-index: 9999;
            pointer-events: none;
            border-radius: 50%;
          `
        )

        document.body.appendChild(confetti)
        activeEffects.current.add(confetti)
        
        setTimeout(() => safeRemoveElement(confetti), 2000)
      }, i * 50)
    }
    
    trackEasterEgg('party_mode')
  }, [canTriggerEasterEgg, showNotification, createSafeElement, safeRemoveElement, trackEasterEgg])

  // New Easter Egg: Typewriter Mode
  const activateTypewriterMode = useCallback(() => {
    if (!canTriggerEasterEgg()) return

    showNotification('⌨️ Typewriter Mode!')
    
    const messages = [
      'Music is the language of the soul...',
      'Every beat tells a story...',
      'HLPFL: Where dreams become hits...',
      'Creating legends, one note at a time...'
    ]
    
    const message = messages[Math.floor(Math.random() * messages.length)]
    const typewriter = createSafeElement(
      'div',
      '',
      `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 24px;
        color: #fff;
        font-family: 'Courier New', monospace;
        z-index: 9999;
        background: rgba(0,0,0,0.8);
        padding: 20px;
        border-radius: 10px;
        max-width: 80%;
        text-align: center;
        pointer-events: none;
      `
    )

    document.body.appendChild(typewriter)
    activeEffects.current.add(typewriter)

    // Typewriter effect
    let charIndex = 0
    const typeInterval = setInterval(() => {
      if (charIndex < message.length) {
        typewriter.textContent = message.slice(0, charIndex + 1)
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => safeRemoveElement(typewriter), 2000)
      }
    }, 100)

    trackEasterEgg('typewriter_mode')
  }, [canTriggerEasterEgg, showNotification, createSafeElement, safeRemoveElement, trackEasterEgg])

  // New Easter Egg: Gravity Mode
  const activateGravityMode = useCallback(() => {
    if (!canTriggerEasterEgg()) return

    showNotification('🌍 Gravity Mode!')
    
    const elements = document.querySelectorAll('h1, h2, h3, .logo, button')
    elements.forEach((el, index) => {
      if (index < 5) { // Limit to prevent performance issues
        setTimeout(() => {
          (el as HTMLElement).style.transition = 'transform 2s ease-in'
          ;(el as HTMLElement).style.transform = 'translateY(100vh) rotate(360deg)'
          
          setTimeout(() => {
            ;(el as HTMLElement).style.transform = ''
            ;(el as HTMLElement).style.transition = ''
          }, 2000)
        }, index * 200)
      }
    })
    
    trackEasterEgg('gravity_mode')
  }, [canTriggerEasterEgg, showNotification, trackEasterEgg])

  // New Easter Egg: Snake Game
  const activateSnakeGame = useCallback(() => {
    if (!canTriggerEasterEgg()) return

    showNotification('🐍 Snake Game!')
    trackEasterEgg('snake_game')
    
    // Simple snake game implementation
    const gameContainer = createSafeElement(
      'div',
      '🐍 Press arrow keys to play! Space to quit.',
      `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,0.9);
        color: #0F0;
        padding: 20px;
        border-radius: 10px;
        font-family: monospace;
        z-index: 9999;
        text-align: center;
        pointer-events: auto;
      `
    )

    document.body.appendChild(gameContainer)
    activeEffects.current.add(gameContainer)

    // Simple game logic
    let gameActive = true
    const handleGameKeyPress = (e: KeyboardEvent) => {
      if (!gameActive) return
      
      if (e.key === ' ') {
        gameActive = false
        safeRemoveElement(gameContainer)
        document.removeEventListener('keydown', handleGameKeyPress)
        return
      }

      const directions = ['↑', '↓', '←', '→']
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        const dir = directions[['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.key)]
        gameContainer.textContent = `🐍 Snake moved ${dir}! Press arrow keys to play! Space to quit.`
      }
    }

    document.addEventListener('keydown', handleGameKeyPress)
    
    setTimeout(() => {
      gameActive = false
      safeRemoveElement(gameContainer)
      document.removeEventListener('keydown', handleGameKeyPress)
    }, 10000)
  }, [canTriggerEasterEgg, showNotification, trackEasterEgg, createSafeElement, safeRemoveElement])

  // Enhanced keyboard event handler with security
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Prevent Easter eggs from triggering in input fields
      if (e.target && (e.target as HTMLElement).tagName === 'INPUT' || 
          (e.target as HTMLElement).tagName === 'TEXTAREA' ||
          (e.target as HTMLElement).contentEditable === 'true') {
        return
      }

      const newCode = [...konamiCode, e.key.toLowerCase()].slice(-10)
      setKonamiCode(newCode)

      if (JSON.stringify(newCode) === JSON.stringify(['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'])) {
        activateKonamiMode()
        setKonamiCode([]) // Reset after activation
      }

      // HLPFL secret code
      if (e.key.toLowerCase() === secretSequence[secretCode.length]) {
        const newSecretCode = [...secretCode, e.key.toLowerCase()]
        setSecretCode(newSecretCode)
        
        if (JSON.stringify(newSecretCode) === JSON.stringify(secretSequence)) {
          activateSecretMode()
          setSecretCode([]) // Reset after activation
        }
      } else {
        setSecretCode([]) // Reset if wrong sequence
      }

      // Other keyboard shortcuts
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'r') {
        activateRainbowMode()
      }
      
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'p') {
        activatePartyMode()
      }

      // New shortcuts
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 't') {
        activateTypewriterMode()
      }

      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'g') {
        activateGravityMode()
      }

      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 's') {
        activateSnakeGame()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [konamiCode, secretCode, activateKonamiMode, activateSecretMode, activateRainbowMode, activatePartyMode, activateTypewriterMode, activateGravityMode, activateSnakeGame])

  // Enhanced logo click easter egg with security
  useEffect(() => {
    let clickCount = 0
    let clickTimeout: NodeJS.Timeout
    
    const handleLogoClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Check if clicked element is a logo or contains HLPFL text
      if (target.closest('h1') || 
          target.closest('.logo') || 
          target.textContent?.includes('HLPFL') ||
          target.alt?.includes('HLPFL')) {
        
        clickCount++
        
        // Reset click count after 3 seconds of inactivity
        clearTimeout(clickTimeout)
        clickTimeout = setTimeout(() => {
          clickCount = 0
        }, 3000)
        
        if (clickCount === 3) {
          showNotification('🎵 Musical secret discovered!')
          // Add musical notes with security
          for (let i = 0; i < 5; i++) {
            const note = createSafeElement(
              'div',
              ['♪', '♫', '♬'][Math.floor(Math.random() * 3)],
              `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                font-size: 24px;
                color: #4ecdc4;
                animation: floatUp 2s ease-out forwards;
                z-index: 1000;
                pointer-events: none;
              `
            )
            document.body.appendChild(note)
            activeEffects.current.add(note)
            setTimeout(() => safeRemoveElement(note), 2000)
          }
        }
        
        if (clickCount === 7) {
          activateRainbowMode()
          clickCount = 0 // Reset
        }
      }
    }

    // Use event delegation for better performance
    document.addEventListener('click', handleLogoClick, { passive: true })
    return () => {
      document.removeEventListener('click', handleLogoClick)
      clearTimeout(clickTimeout)
    }
  }, [showNotification, createSafeElement, safeRemoveElement, activateRainbowMode])

  // Scroll-triggered Easter egg
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setScrollDepth(Math.round(scrollPercent))
      
      // Easter egg at 77% scroll depth
      if (scrollPercent >= 77 && scrollPercent < 78) {
        showNotification('🌟 You\'ve reached the lucky number 77%!')
        trackEasterEgg('scroll_depth_77')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showNotification, trackEasterEgg])

  // Time-based Easter egg (after 30 seconds on page)
  useEffect(() => {
    const timer = setTimeout(() => {
      showNotification('⏰ You\'ve been here for 30 seconds! Thanks for visiting!')
      trackEasterEgg('time_30s')
    }, 30000)

    return () => clearTimeout(timer)
  }, [showNotification, trackEasterEgg])

  // Enhanced CSS animations with performance optimization
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes slideOutRight {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
      
      @keyframes matrixGlow {
        0% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.5);
        }
        50% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.2);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(1);
        }
      }
      
      @keyframes secretReveal {
        0% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.8) rotate(-10deg);
        }
        50% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.1) rotate(5deg);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(1) rotate(0deg);
        }
      }
      
      @keyframes floatUp {
        to {
          transform: translateY(-100px) rotate(360deg);
          opacity: 0;
        }
      }
      
      @keyframes confettiFall {
        to {
          transform: translateY(100vh) rotate(720deg);
          opacity: 0;
        }
      }
      
      /* Performance optimizations */
      [data-easter-egg="true"] {
        will-change: transform, opacity;
        contain: layout style paint;
      }
      
      /* Reduce motion for accessibility */
      @media (prefers-reduced-motion: reduce) {
        [data-easter-egg="true"] {
          animation: none !important;
          transition: none !important;
        }
      }
    `
    document.head.appendChild(style)
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Clean up any remaining Easter egg elements
      activeEffects.current.forEach(element => {
        safeRemoveElement(element)
      })
      activeEffects.current.clear()
    }
  }, [safeRemoveElement])

  return null // This component doesn't render anything visible
}

export default EasterEggs