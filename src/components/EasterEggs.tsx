'use client'

import { useState, useEffect, useCallback } from 'react'

const EasterEggs = () => {
  const [konamiCode, setKonamiCode] = useState<string[]>([])
  const [konamiActivated, setKonamiActivated] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [secretMode, setSecretMode] = useState(false)
  const [rainbowMode, setRainbowMode] = useState(false)
  const [partyMode, setPartyMode] = useState(false)

  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

  // Track key presses for Konami code
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newCode = [...konamiCode, e.key.toLowerCase()].slice(-10)
      setKonamiCode(newCode)

      if (JSON.stringify(newCode) === JSON.stringify(konamiSequence)) {
        activateKonamiMode()
      }

      // Secret mode: Ctrl + Shift + H + L + P + F + L
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'h') {
        const checkSecretMode = () => {
          setTimeout(() => {
            const secretKeys = ['l', 'p', 'f', 'l']
            let index = 0
            const secretHandler = (e: KeyboardEvent) => {
              if (e.key.toLowerCase() === secretKeys[index]) {
                index++
                if (index === secretKeys.length) {
                  activateSecretMode()
                  document.removeEventListener('keydown', secretHandler)
                }
              } else {
                index = 0
              }
            }
            document.addEventListener('keydown', secretHandler)
          }, 100)
        }
        checkSecretMode()
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

  // Logo click easter egg
  const handleLogoClick = useCallback(() => {
    const newCount = clickCount + 1
    setClickCount(newCount)

    if (newCount === 5) {
      createMusicalNotes()
      showNotification('🎵 You found the musical easter egg!')
    } else if (newCount === 10) {
      document.body.style.animation = 'spin 2s ease-in-out'
      setTimeout(() => {
        document.body.style.animation = ''
      }, 2000)
      showNotification('🌀 The website is spinning!')
    } else if (newCount === 15) {
      activateRainbowMode()
      showNotification('🌈 Rainbow mode activated!')
    }
  }, [clickCount])

  const activateKonamiMode = () => {
    setKonamiActivated(true)
    document.body.style.filter = 'hue-rotate(180deg) invert(1)'
    showNotification('🎮 Konami Code Activated! Welcome to the Matrix!')
    
    // Add matrix rain effect
    createMatrixRain()
    
    // Track Easter egg activation
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'easter_egg_activated', {
        event_category: 'engagement',
        event_label: 'konami_code'
      })
    }

    setTimeout(() => {
      setKonamiActivated(false)
      document.body.style.filter = ''
      removeMatrixRain()
    }, 10000)
  }

  const activateSecretMode = () => {
    setSecretMode(true)
    document.body.classList.add('secret-mode')
    showNotification('🔓 Secret HLPFL Mode Activated! You are now an insider!')
    
    // Add floating HLPFL logos
    createFloatingLogos()
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'easter_egg_activated', {
        event_category: 'engagement',
        event_label: 'secret_mode'
      })
    }

    setTimeout(() => {
      setSecretMode(false)
      document.body.classList.remove('secret-mode')
      removeFloatingLogos()
    }, 8000)
  }

  const activateRainbowMode = () => {
    setRainbowMode(true)
    document.body.classList.add('rainbow-mode')
    showNotification('🌈 Rainbow Power! Everything is fabulous!')
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'easter_egg_activated', {
        event_category: 'engagement',
        event_label: 'rainbow_mode'
      })
    }

    setTimeout(() => {
      setRainbowMode(false)
      document.body.classList.remove('rainbow-mode')
    }, 6000)
  }

  const activatePartyMode = () => {
    setPartyMode(true)
    showNotification('🎉 PARTY TIME! Let\'s celebrate!')
    
    // Create confetti
    createConfetti()
    
    // Play disco lights
    startDiscoLights()
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'easter_egg_activated', {
        event_category: 'engagement',
        event_label: 'party_mode'
      })
    }

    setTimeout(() => {
      setPartyMode(false)
      removeConfetti()
      stopDiscoLights()
    }, 8000)
  }

  const showNotification = (message: string) => {
    const notification = document.createElement('div')
    notification.textContent = message
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
      color: white;
      padding: 15px 25px;
      border-radius: 10px;
      font-weight: bold;
      z-index: 9999;
      animation: slideInRight 0.5s ease-out;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `
    
    document.body.appendChild(notification)
    
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.5s ease-out'
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 500)
    }, 3000)
  }

  const createMusicalNotes = () => {
    const notes = ['♪', '♫', '♬', '♭', '♮', '♯']
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        const note = document.createElement('div')
        note.textContent = notes[Math.floor(Math.random() * notes.length)]
        note.style.cssText = `
          position: fixed;
          left: ${Math.random() * window.innerWidth}px;
          top: ${Math.random() * window.innerHeight}px;
          font-size: 24px;
          color: #4ecdc4;
          animation: floatUp 3s ease-out forwards;
          z-index: 1000;
          pointer-events: none;
        `
        document.body.appendChild(note)
        
        setTimeout(() => {
          if (document.body.contains(note)) {
            document.body.removeChild(note)
          }
        }, 3000)
      }, i * 200)
    }
  }

  const createMatrixRain = () => {
    const canvas = document.createElement('canvas')
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9998;
      opacity: 0.3;
    `
    canvas.id = 'matrix-rain'
    
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const matrix = '01'
    const matrixArray = matrix.split('')
    const fontSize = 10
    const columns = canvas.width / fontSize
    const drops: number[] = []
    
    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = '#0F0'
      ctx.font = fontSize + 'px monospace'
      
      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }
    
    document.body.appendChild(canvas)
    const interval = setInterval(draw, 35)
    ;(canvas as any).interval = interval
  }

  const removeMatrixRain = () => {
    const canvas = document.getElementById('matrix-rain')
    if (canvas) {
      clearInterval((canvas as any).interval)
      document.body.removeChild(canvas)
    }
  }

  const createFloatingLogos = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const logo = document.createElement('div')
        logo.textContent = 'HLPFL'
        logo.style.cssText = `
          position: fixed;
          left: ${Math.random() * window.innerWidth}px;
          top: ${Math.random() * window.innerHeight}px;
          font-size: 20px;
          color: #c87941;
          font-weight: bold;
          animation: floatAround 4s ease-in-out infinite;
          z-index: 1000;
          pointer-events: none;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        `
        logo.id = `floating-logo-${i}`
        document.body.appendChild(logo)
      }, i * 300)
    }
  }

  const removeFloatingLogos = () => {
    for (let i = 0; i < 5; i++) {
      const logo = document.getElementById(`floating-logo-${i}`)
      if (logo) {
        document.body.removeChild(logo)
      }
    }
  }

  const createConfetti = () => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6ab04c']
    
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div')
        confetti.style.cssText = `
          position: fixed;
          left: ${Math.random() * window.innerWidth}px;
          top: -20px;
          width: 10px;
          height: 10px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          animation: confettiFall 3s linear forwards;
          z-index: 1000;
          pointer-events: none;
        `
        document.body.appendChild(confetti)
        
        setTimeout(() => {
          if (document.body.contains(confetti)) {
            document.body.removeChild(confetti)
          }
        }, 3000)
      }, i * 50)
    }
  }

  const removeConfetti = () => {
    const confettiPieces = document.querySelectorAll('[style*="confettiFall"]')
    confettiPieces.forEach(piece => {
      if (document.body.contains(piece)) {
        document.body.removeChild(piece)
      }
    })
  }

  let discoInterval: NodeJS.Timeout
  const startDiscoLights = () => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6ab04c']
    let colorIndex = 0
    
    discoInterval = setInterval(() => {
      document.body.style.backgroundColor = colors[colorIndex]
      colorIndex = (colorIndex + 1) % colors.length
    }, 200)
  }

  const stopDiscoLights = () => {
    if (discoInterval) {
      clearInterval(discoInterval)
      document.body.style.backgroundColor = ''
    }
  }

  // Hidden message on double-click
  useEffect(() => {
    const handleDoubleClick = (e: MouseEvent) => {
      if (e.target === document.body || (e.target as HTMLElement).closest('main')) {
        showSecretMessage()
      }
    }

    document.addEventListener('dblclick', handleDoubleClick)
    return () => document.removeEventListener('dblclick', handleDoubleClick)
  }, [])

  const showSecretMessage = () => {
    const messages = [
      '🎵 Music is the universal language of mankind 🎵',
      '🌟 Dreams don\'t work unless you do 🌟',
      '🎧 Every great record starts with a single note 🎧',
      '🚀 Your potential is endless 🚀',
      '💫 Create something that makes you proud 💫',
      '🎤 The world needs your voice 🎤'
    ]
    
    const message = messages[Math.floor(Math.random() * messages.length)]
    showNotification(message)
  }

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
      
      @keyframes floatUp {
        to {
          transform: translateY(-100px);
          opacity: 0;
        }
      }
      
      @keyframes floatAround {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        25% {
          transform: translateY(-20px) rotate(5deg);
        }
        75% {
          transform: translateY(20px) rotate(-5deg);
        }
      }
      
      @keyframes confettiFall {
        to {
          transform: translateY(100vh) rotate(360deg);
        }
      }
      
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      .secret-mode {
        animation: pulse 2s ease-in-out infinite;
      }
      
      .rainbow-mode {
        animation: rainbow 2s linear infinite;
      }
      
      @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Attach logo click handler to all HLPFL logos
  useEffect(() => {
    const logos = document.querySelectorAll('h1, .logo, [class*="logo"]')
    logos.forEach(logo => {
      logo.addEventListener('click', handleLogoClick)
    })
    
    return () => {
      logos.forEach(logo => {
        logo.removeEventListener('click', handleLogoClick)
      })
    }
  }, [handleLogoClick])

  return null // This component doesn't render anything visible
}

export default EasterEggs