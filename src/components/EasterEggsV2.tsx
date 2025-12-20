'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

// Rate limiting
const RATE_LIMIT_MS = 1000;
let lastTriggerTime = 0;

const EasterEggsV2 = () => {
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
  const [typedSequence, setTypedSequence] = useState<string>('');
  const logoClickCount = useRef(0);
  const logoClickTimeout = useRef<NodeJS.Timeout>();
  const scrollTriggered = useRef(false);
  const timeTriggered = useRef(false);

  // Rate limiting
  const canTrigger = useCallback(() => {
    const now = Date.now();
    if (now - lastTriggerTime < RATE_LIMIT_MS) return false;
    lastTriggerTime = now;
    return true;
  }, []);

  // Show notification with HLPFL styling
  const showNotification = useCallback((message: string, emoji: string = '✨') => {
    if (!canTrigger()) return;

    const notification = document.createElement('div');
    notification.textContent = `${emoji} ${message}`;
    notification.className = 'fixed top-4 right-4 bg-gradient-to-r from-[#c87941] to-[#d4945c] text-white px-6 py-3 rounded-lg font-semibold shadow-lg z-[10000] animate-slide-in-right';
    notification.style.fontFamily = 'Inter, system-ui, sans-serif';
    
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slide-out-right 0.5s ease-out forwards';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 500);
    }, 3000);
  }, [canTrigger]);

  // Track analytics
  const trackEvent = useCallback((label: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'easter_egg', {
        event_category: 'engagement',
        event_label: label,
      });
    }
  }, []);

  // 1. Konami Code: ↑↑↓↓←→←→BA
  const checkKonamiCode = useCallback((sequence: string[]) => {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    if (JSON.stringify(sequence) === JSON.stringify(konami)) {
      showNotification('KONAMI CODE ACTIVATED!', '🎮');
      trackEvent('konami_code');
      
      const effect = document.createElement('div');
      effect.textContent = 'KONAMI';
      effect.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-green-500 z-[9999] pointer-events-none';
      effect.style.fontFamily = 'monospace';
      effect.style.textShadow = '0 0 20px #0F0';
      effect.style.animation = 'matrix-glow 3s forwards';
      
      document.body.appendChild(effect);
      setTimeout(() => {
        if (document.body.contains(effect)) {
          document.body.removeChild(effect);
        }
      }, 3000);
      
      return true;
    }
    return false;
  }, [showNotification, trackEvent]);

  // 2. HLPFL Secret Code: type "hlpfl"
  const checkSecretCode = useCallback((typed: string) => {
    if (typed.toLowerCase().includes('hlpfl')) {
      const messages = ['Welcome to the Inner Circle', 'You Found the Hidden Path', 'HLPFL Elite Member'];
      const message = messages[Math.floor(Math.random() * messages.length)];
      
      showNotification(message, '🔐');
      trackEvent('secret_code');
      
      const effect = document.createElement('div');
      effect.textContent = message;
      effect.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-[#c87941] z-[9999] text-center pointer-events-none px-8';
      effect.style.fontFamily = 'Inter, system-ui, sans-serif';
      effect.style.textShadow = '0 0 20px #c87941';
      effect.style.animation = 'secret-reveal 3s forwards';
      
      document.body.appendChild(effect);
      setTimeout(() => {
        if (document.body.contains(effect)) {
          document.body.removeChild(effect);
        }
      }, 3000);
      
      return true;
    }
    return false;
  }, [showNotification, trackEvent]);

  // 3. Rainbow Mode: Ctrl+Alt+R
  const activateRainbowMode = useCallback(() => {
    if (!canTrigger()) return;
    
    showNotification('Rainbow Mode Activated!', '🌈');
    trackEvent('rainbow_mode');
    
    let hue = 0;
    const interval = setInterval(() => {
      document.body.style.filter = `hue-rotate(${hue}deg)`;
      hue += 10;
    }, 50);
    
    setTimeout(() => {
      clearInterval(interval);
      document.body.style.filter = '';
    }, 3000);
  }, [canTrigger, showNotification, trackEvent]);

  // 4. Party Mode: Ctrl+Alt+P
  const activatePartyMode = useCallback(() => {
    if (!canTrigger()) return;
    
    showNotification('Party Mode!', '🎉');
    trackEvent('party_mode');
    
    const colors = ['#ff6b6b', '#4ecdc4', '#f9ca24', '#c87941'];
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'fixed w-2 h-2 rounded-full z-[9999] pointer-events-none';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = 'confetti-fall 2s linear forwards';
        
        document.body.appendChild(confetti);
        setTimeout(() => {
          if (document.body.contains(confetti)) {
            document.body.removeChild(confetti);
          }
        }, 2000);
      }, i * 50);
    }
  }, [canTrigger, showNotification, trackEvent]);

  // 5. Typewriter Mode: Ctrl+Alt+T
  const activateTypewriterMode = useCallback(() => {
    if (!canTrigger()) return;
    
    showNotification('Typewriter Mode!', '⌨️');
    trackEvent('typewriter_mode');
    
    const messages = [
      'Music is the language of the soul...',
      'Every beat tells a story...',
      'HLPFL: Where dreams become hits...',
      'Creating legends, one note at a time...'
    ];
    
    const message = messages[Math.floor(Math.random() * messages.length)];
    const typewriter = document.createElement('div');
    typewriter.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white bg-black/80 px-8 py-6 rounded-lg z-[9999] text-center max-w-[80%] pointer-events-none';
    typewriter.style.fontFamily = 'Courier New, monospace';
    
    document.body.appendChild(typewriter);
    
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < message.length) {
        typewriter.textContent = message.slice(0, charIndex + 1);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          if (document.body.contains(typewriter)) {
            document.body.removeChild(typewriter);
          }
        }, 2000);
      }
    }, 100);
  }, [canTrigger, showNotification, trackEvent]);

  // 6. Gravity Mode: Ctrl+Alt+G
  const activateGravityMode = useCallback(() => {
    if (!canTrigger()) return;
    
    showNotification('Gravity Mode!', '🌍');
    trackEvent('gravity_mode');
    
    const elements = document.querySelectorAll('h1, h2, h3, .logo, button');
    elements.forEach((el, index) => {
      if (index < 5) {
        setTimeout(() => {
          (el as HTMLElement).style.transition = 'transform 2s ease-in';
          (el as HTMLElement).style.transform = 'translateY(100vh) rotate(360deg)';
          
          setTimeout(() => {
            (el as HTMLElement).style.transform = '';
            (el as HTMLElement).style.transition = '';
          }, 2000);
        }, index * 200);
      }
    });
  }, [canTrigger, showNotification, trackEvent]);

  // 7. Snake Game: Ctrl+Alt+S
  const activateSnakeGame = useCallback(() => {
    if (!canTrigger()) return;
    
    showNotification('Snake Game!', '🐍');
    trackEvent('snake_game');
    
    const game = document.createElement('div');
    game.textContent = '🐍 Use arrow keys to play! Space to quit.';
    game.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 text-green-500 px-8 py-6 rounded-lg z-[9999] text-center';
    game.style.fontFamily = 'monospace';
    
    document.body.appendChild(game);
    
    let gameActive = true;
    const handleGameKey = (e: KeyboardEvent) => {
      if (!gameActive) return;
      
      if (e.key === ' ') {
        gameActive = false;
        if (document.body.contains(game)) {
          document.body.removeChild(game);
        }
        document.removeEventListener('keydown', handleGameKey);
        return;
      }
      
      const directions = ['↑', '↓', '←', '→'];
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        const dir = directions[['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.key)];
        game.textContent = `🐍 Snake moved ${dir}! Press arrow keys. Space to quit.`;
      }
    };
    
    document.addEventListener('keydown', handleGameKey);
    
    setTimeout(() => {
      gameActive = false;
      if (document.body.contains(game)) {
        document.body.removeChild(game);
      }
      document.removeEventListener('keydown', handleGameKey);
    }, 10000);
  }, [canTrigger, showNotification, trackEvent]);

  // Keyboard event handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input fields
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
        return;
      }

      // Konami code tracking
      const newKonami = [...konamiSequence, e.key.toLowerCase()].slice(-10);
      setKonamiSequence(newKonami);
      if (checkKonamiCode(newKonami)) {
        setKonamiSequence([]);
      }

      // Typed sequence tracking
      const newTyped = (typedSequence + e.key).slice(-10);
      setTypedSequence(newTyped);
      if (checkSecretCode(newTyped)) {
        setTypedSequence('');
      }

      // Keyboard shortcuts
      if (e.ctrlKey && e.altKey) {
        switch (e.key.toLowerCase()) {
          case 'r':
            e.preventDefault();
            activateRainbowMode();
            break;
          case 'p':
            e.preventDefault();
            activatePartyMode();
            break;
          case 't':
            e.preventDefault();
            activateTypewriterMode();
            break;
          case 'g':
            e.preventDefault();
            activateGravityMode();
            break;
          case 's':
            e.preventDefault();
            activateSnakeGame();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [konamiSequence, typedSequence, checkKonamiCode, checkSecretCode, activateRainbowMode, activatePartyMode, activateTypewriterMode, activateGravityMode, activateSnakeGame]);

  // Logo click easter egg
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('h1') || target.closest('.logo') || target.textContent?.includes('HLPFL')) {
        logoClickCount.current++;
        
        clearTimeout(logoClickTimeout.current);
        logoClickTimeout.current = setTimeout(() => {
          logoClickCount.current = 0;
        }, 3000);
        
        if (logoClickCount.current === 3) {
          showNotification('Musical secret discovered!', '🎵');
          trackEvent('logo_click_3');
          
          for (let i = 0; i < 5; i++) {
            const note = document.createElement('div');
            note.textContent = ['♪', '♫', '♬'][Math.floor(Math.random() * 3)];
            note.className = 'fixed text-2xl text-[#4ecdc4] z-[9999] pointer-events-none';
            note.style.left = `${Math.random() * 100}%`;
            note.style.top = `${Math.random() * 100}%`;
            note.style.animation = 'float-up 2s ease-out forwards';
            
            document.body.appendChild(note);
            setTimeout(() => {
              if (document.body.contains(note)) {
                document.body.removeChild(note);
              }
            }, 2000);
          }
        }
        
        if (logoClickCount.current === 7) {
          activateRainbowMode();
          logoClickCount.current = 0;
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      clearTimeout(logoClickTimeout.current);
    };
  }, [showNotification, trackEvent, activateRainbowMode]);

  // Scroll depth easter egg
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 77 && scrollPercent < 78 && !scrollTriggered.current) {
        scrollTriggered.current = true;
        showNotification("You've reached the lucky number 77%!", '🌟');
        trackEvent('scroll_77');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showNotification, trackEvent]);

  // Time-based easter egg
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!timeTriggered.current) {
        timeTriggered.current = true;
        showNotification("You've been here for 30 seconds! Thanks for visiting!", '⏰');
        trackEvent('time_30s');
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [showNotification, trackEvent]);

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slide-in-right {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes slide-out-right {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
      
      @keyframes matrix-glow {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
      }
      
      @keyframes secret-reveal {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
      }
      
      @keyframes float-up {
        to { transform: translateY(-100px) rotate(360deg); opacity: 0; }
      }
      
      @keyframes confetti-fall {
        to { transform: translateY(100vh) rotate(720deg); opacity: 0; }
      }
      
      @media (prefers-reduced-motion: reduce) {
        * { animation: none !important; transition: none !important; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null;
};

export default EasterEggsV2;