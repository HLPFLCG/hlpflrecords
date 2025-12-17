'use client'

import { useEffect, useState } from 'react'

const EasterEggs = () => {
  const [konamiCode, setKonamiCode] = useState<string[]>([])
  
  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newCode = [...konamiCode, e.key.toLowerCase()].slice(-10)
      setKonamiCode(newCode)

      if (JSON.stringify(newCode) === JSON.stringify(konamiSequence)) {
        activateKonamiMode()
      }

      // Secret mode: Ctrl + Shift + HLPFL
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'h') {
        activateSecretMode()
      }

      // Rainbow mode: Ctrl + Alt + R
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'r') {
        activateRainbowMode()
      }

      // Party mode: Ctrl + Alt + P
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'p') {
        activatePartyMode()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [konamiCode])

  const activateKonamiMode = () => {
    showNotification('🎮 Konami Code Activated!')
    
    // Add simple effect
    const effect = document.createElement('div')
    effect.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 72px;
      color: #0F0;
      font-weight: bold;
      z-index: 9999;
      animation: fadeOut 3s forwards;
      text-shadow: 0 0 20px #0F0;
      font-family: monospace;
    `
    effect.textContent = 'KONAMI'
    document.body.appendChild(effect)
    
    // Track in analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'easter_egg_activated', {
        event_category: 'engagement',
        event_label: 'konami_code'
      })
    }

    setTimeout(() => {
      if (document.body.contains(effect)) {
        document.body.removeChild(effect)
      }
    }, 3000)
  }

  const activateSecretMode = () => {
    showNotification('🔓 HLPFL Secret Mode!')
    
    const effect = document.createElement('div')
    effect.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 48px;
      color: #c87941;
      font-weight: bold;
      z-index: 9999;
      animation: fadeOut 3s forwards;
      text-shadow: 0 0 20px #c87941;
    `
    effect.textContent = 'HLPFL'
    document.body.appendChild(effect)
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'easter_egg_activated', {
        event_category: 'engagement',
        event_label: 'secret_mode'
      })
    }

    setTimeout(() => {
      if (document.body.contains(effect)) {
        document.body.removeChild(effect)
      }
    }, 3000)
  }

  const activateRainbowMode = () => {
    showNotification('🌈 Rainbow Mode!')
    
    const colors = ['#ff6b6b', '#f9ca24', '#6ab04c', '#4ecdc4', '#45b7d1', '#c87941']
    let colorIndex = 0
    
    const interval = setInterval(() => {
      document.body.style.filter = `hue-rotate(${colorIndex * 60}deg)`
      colorIndex = (colorIndex + 1) % colors.length
    }, 200)
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'easter_egg_activated', {
        event_category: 'engagement',
        event_label: 'rainbow_mode'
      })
    }

    setTimeout(() => {
      clearInterval(interval)
      document.body.style.filter = ''
    }, 3000)
  }

  const activatePartyMode = () => {
    showNotification('🎉 Party Mode!')
    
    // Create simple confetti
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div')
        confetti.style.cssText = `
          position: fixed;
          left: ${Math.random() * window.innerWidth}px;
          top: -10px;
          width: 8px;
          height: 8px;
          background: ${['#ff6b6b', '#4ecdc4', '#f9ca24', '#c87941'][Math.floor(Math.random() * 4)]};
          animation: fall 2s linear forwards;
          z-index: 9999;
        `
        document.body.appendChild(confetti)
        
        setTimeout(() => {
          if (document.body.contains(confetti)) {
            document.body.removeChild(confetti)
          }
        }, 2000)
      }, i * 100)
    }
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'easter_egg_activated', {
        event_category: 'engagement',
        event_label: 'party_mode'
      })
    }
  }

  const showNotification = (message: string) => {
    const notification = document.createElement('div')
    notification.textContent = message
    notification.style.cssText = `
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
    `
    
    document.body.appendChild(notification)
    
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.5s ease-out'
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification)
        }
      }, 500)
    }, 3000)
  }

  // Logo click easter egg
  useEffect(() => {
    let clickCount = 0
    
    const handleLogoClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('h1') || target.closest('.logo') || target.textContent?.includes('HLPFL')) {
        clickCount++
        
        if (clickCount === 5) {
          showNotification('🎵 Musical secret discovered!')
          // Add musical notes
          for (let i = 0; i < 5; i++) {
            const note = document.createElement('div')
            note.textContent = ['♪', '♫', '♬'][Math.floor(Math.random() * 3)]
            note.style.cssText = `
              position: fixed;
              left: ${Math.random() * window.innerWidth}px;
              top: ${Math.random() * window.innerHeight}px;
              font-size: 24px;
              color: #4ecdc4;
              animation: floatUp 2s ease-out forwards;
              z-index: 1000;
              pointer-events: none;
            `
            document.body.appendChild(note)
            setTimeout(() => {
              if (document.body.contains(note)) {
                document.body.removeChild(note)
              }
            }, 2000)
          }
        }
        
        if (clickCount === 10) {
          showNotification('🌟 You\'re a superfan!')
          clickCount = 0 // Reset
        }
      }
    }

    document.addEventListener('click', handleLogoClick)
    return () => document.removeEventListener('click', handleLogoClick)
  }, [])

  // Add CSS animations
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
      
      @keyframes fadeOut {
        from {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        to {
          opacity: 0;
          transform: translate(-50%, -50%) scale(1.5);
        }
      }
      
      @keyframes floatUp {
        to {
          transform: translateY(-100px);
          opacity: 0;
        }
      }
      
      @keyframes fall {
        to {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
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

  return null // This component doesn't render anything visible
}

export default EasterEggs