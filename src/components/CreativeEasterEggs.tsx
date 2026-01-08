'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { trackEvent } from '@/lib/analytics';
import SecretMusicPlayer from '@/components/SecretMusicPlayer';

// Secret music tracks - all 11 unreleased tracks
const SECRET_TRACKS = [
  {
    id: '5d',
    title: '5D',
    artist: 'Alki',
    trigger: 'konami',
    file: '/audio/5d.mp3',
    color: '#c87941',
    description: 'Hidden track unlocked via Konami Code!'
  },
  {
    id: 'home',
    title: 'Home (Alone)',
    artist: 'Alki',
    trigger: 'clicks',
    file: '/audio/home.mp3',
    color: '#d4945c',
    description: 'Hidden track unlocked by clicking!'
  },
  {
    id: 'regrets',
    title: 'Regrets',
    artist: 'Alki',
    trigger: 'scroll',
    file: '/audio/regrets.mp3',
    color: '#a86535',
    description: 'Hidden track unlocked by scrolling!'
  },
  {
    id: 'tear-me-apart',
    title: 'Tear Me Apart',
    artist: 'Alki',
    trigger: 'time',
    file: '/audio/tear-me-apart.mp3',
    color: '#8b5a2b',
    description: 'Hidden track unlocked at 11:11!'
  },
  {
    id: 'writin-my-wrongs',
    title: "Writin' My Wrongs",
    artist: 'Alki',
    trigger: 'pattern',
    file: '/audio/writin-my-wrongs.mp3',
    color: '#6b4423',
    description: 'Hidden track unlocked by drawing!'
  },
  {
    id: 'ptsd',
    title: 'PTSD',
    artist: 'Alki',
    trigger: 'random',
    file: '/audio/ptsd.mp3',
    color: '#4a3728',
    description: 'Hidden track!'
  },
  {
    id: 'lottery',
    title: 'Lottery',
    artist: 'Alki',
    trigger: 'random',
    file: '/audio/lottery.mp3',
    color: '#d4945c',
    description: 'Hidden track!'
  },
  {
    id: 'doomed',
    title: 'Doomed From The Start',
    artist: 'Alki',
    trigger: 'random',
    file: '/audio/doomed.mp3',
    color: '#8b5a2b',
    description: 'Hidden track!'
  },
  {
    id: 'death-of-me',
    title: 'Death Of Me',
    artist: 'Alki',
    trigger: 'random',
    file: '/audio/death-of-me.mp3',
    color: '#a86535',
    description: 'Hidden track!'
  },
  {
    id: 'sad-corvette',
    title: 'Sad! Just In A Corvette',
    artist: 'Alki',
    trigger: 'random',
    file: '/audio/sad-corvette.mp3',
    color: '#c87941',
    description: 'Hidden track!'
  },
  {
    id: '1113',
    title: '1113',
    artist: 'Alki',
    trigger: 'random',
    file: '/audio/1113.mp3',
    color: '#6b4423',
    description: 'Hidden track!'
  }
];

const CreativeEasterEggs: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<typeof SECRET_TRACKS[0] | null>(null);
  const [discoveredTracks, setDiscoveredTracks] = useState<Set<string>>(new Set());

  // Notification system
  const showNotification = useCallback((message: string) => {
    if (typeof window === 'undefined') return;
    
    // Simple notification (you can enhance this)
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = 'fixed top-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slideDown';
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }, []);

  // Track discovery
  const discoverTrack = useCallback((trackId: string) => {
    // Find the track
    const track = SECRET_TRACKS.find(t => t.id === trackId);
    if (!track) {
      console.error('❌ Track not found:', trackId);
      return;
    }

    
    // Set active track to play it
    setActiveTrack(track);
    
    // Add to discovered tracks if not already
    if (!discoveredTracks.has(trackId)) {
      setDiscoveredTracks(prev => new Set([...Array.from(prev), trackId]));
      
      trackEvent('easter_egg_discovered', 'Easter Egg', track.title, undefined, {
        track_id: trackId,
        trigger: track.trigger
      });

      showNotification(`🎵 Secret track discovered: ${track.title}`);
    } else {
    }
  }, [discoveredTracks, showNotification]);

  // Check if we can trigger (cooldown system)
  const [canTrigger, setCanTrigger] = useState(true);

  const triggerCooldown = useCallback(() => {
    setCanTrigger(false);
    setTimeout(() => setCanTrigger(true), 5000); // 5 second cooldown
  }, []);

  // 1. ENHANCED KONAMI CODE: ↑↑↓↓←→←→BA + SHIFT (must complete within 10 seconds)
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    let konamiTimer: NodeJS.Timeout | null = null;
    let shiftPressed = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!canTrigger) return;

      // Track shift key
      if (e.key === 'Shift') {
        shiftPressed = true;
        return;
      }

      // Start timer on first key
      if (konamiIndex === 0) {
        if (konamiTimer) clearTimeout(konamiTimer);
        konamiTimer = setTimeout(() => {
          konamiIndex = 0;
        }, 10000); // 10 second window
      }

      // Check if key matches and shift is pressed
      if (e.key === konamiCode[konamiIndex] && shiftPressed) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          discoverTrack('5d');
          triggerCooldown();
          konamiIndex = 0;
          if (konamiTimer) clearTimeout(konamiTimer);
        }
      } else if (e.key === konamiCode[konamiIndex]) {
        // Right key but no shift - reset
        konamiIndex = 0;
        if (konamiTimer) clearTimeout(konamiTimer);
      } else {
        konamiIndex = 0;
        if (konamiTimer) clearTimeout(konamiTimer);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Shift') shiftPressed = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (konamiTimer) clearTimeout(konamiTimer);
    };
  }, [canTrigger, discoverTrack, triggerCooldown]);

  // 2. ENHANCED CLICK PATTERN: Triple-click logo exactly 3 times (with 1-2 second gaps between triple-clicks)
  useEffect(() => {
    let tripleClickCount = 0;
    let lastTripleClickTime = 0;
    let clickTimer: NodeJS.Timeout | null = null;

    const handleLogoClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-logo]') || !canTrigger) return;

      // Detect triple click (3 rapid clicks)
      if (e.detail === 3) {
        const now = Date.now();
        const timeSinceLastTriple = now - lastTripleClickTime;

        // Must be between 1-2.5 seconds since last triple-click
        if (tripleClickCount === 0 || (timeSinceLastTriple >= 1000 && timeSinceLastTriple <= 2500)) {
          tripleClickCount++;
          lastTripleClickTime = now;

          if (tripleClickCount >= 3) {
            discoverTrack('home');
            triggerCooldown();
            tripleClickCount = 0;
          } else {
            // Reset if no triple-click within 3 seconds
            if (clickTimer) clearTimeout(clickTimer);
            clickTimer = setTimeout(() => {
              tripleClickCount = 0;
            }, 3000);
          }
        } else {
          // Wrong timing, reset
          tripleClickCount = 0;
        }
      }
    };

    document.addEventListener('click', handleLogoClick);
    return () => {
      document.removeEventListener('click', handleLogoClick);
      if (clickTimer) clearTimeout(clickTimer);
    };
  }, [canTrigger, discoverTrack, triggerCooldown]);

  // 3. ADVANCED SCROLL PATTERN: Scroll down to 66.6%, then up to 33.3%, then down to 88.8% within 15 seconds
  useEffect(() => {
    let scrollStage = 0;
    let scrollTimer: NodeJS.Timeout | null = null;
    const targetScrolls = [66.6, 33.3, 88.8];
    const tolerance = 1.5; // ±1.5%

    const handleScroll = () => {
      if (!canTrigger) return;

      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const targetScroll = targetScrolls[scrollStage];

      // Check if we hit the current target scroll depth
      if (Math.abs(scrollPercent - targetScroll) <= tolerance) {
        scrollStage++;

        // Start timer on first hit
        if (scrollStage === 1) {
          scrollTimer = setTimeout(() => {
            scrollStage = 0;
          }, 15000); // 15 second window to complete pattern
        }

        // Complete pattern
        if (scrollStage === 3) {
          discoverTrack('regrets');
          triggerCooldown();
          scrollStage = 0;
          if (scrollTimer) clearTimeout(scrollTimer);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, [canTrigger, discoverTrack, triggerCooldown]);

  // 4. TIME-BASED: Visit at 11:11 AM or PM
  useEffect(() => {
    const checkTime = () => {
      if (!canTrigger) return;
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      if ((hours === 11 || hours === 23) && minutes === 11) {
        // Check if already triggered this session
        if (!sessionStorage.getItem('timeEasterEggTriggered')) {
          discoverTrack('tear-me-apart');
          triggerCooldown();
          sessionStorage.setItem('timeEasterEggTriggered', 'true');
        }
      }
    };

    const interval = setInterval(checkTime, 1000);
    checkTime(); // Check immediately

    return () => clearInterval(interval);
  }, [canTrigger, discoverTrack, triggerCooldown]);

  // 5. MOUSE PATTERN: Draw a circle with mouse
  useEffect(() => {
    const positions: { x: number; y: number; time: number }[] = [];
    let isDrawing = false;

    const handleMouseDown = () => {
      isDrawing = true;
      positions.length = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawing || !canTrigger) return;
      positions.push({
        x: e.clientX,
        y: e.clientY,
        time: Date.now()
      });

      // Keep only last 50 positions
      if (positions.length > 50) positions.shift();

      // Check if pattern resembles a circle
      if (positions.length >= 30) {
        const isCircle = checkCirclePattern(positions);
        if (isCircle) {
          discoverTrack('writin-my-wrongs');
          triggerCooldown();
          positions.length = 0;
          isDrawing = false;
        }
      }
    };

    const handleMouseUp = () => {
      isDrawing = false;
    };

    const checkCirclePattern = (points: typeof positions) => {
      if (points.length < 30) return false;
      // Calculate center
      const centerX = points.reduce((sum, p) => sum + p.x, 0) / points.length;
      const centerY = points.reduce((sum, p) => sum + p.y, 0) / points.length;

      // Calculate average distance from center
      const avgDistance = points.reduce((sum, p) => {
        const dist = Math.sqrt(Math.pow(p.x - centerX, 2) + Math.pow(p.y - centerY, 2));
        return sum + dist;
      }, 0) / points.length;

      // Check if distances are relatively consistent (circle-like)
      const variance = points.reduce((sum, p) => {
        const dist = Math.sqrt(Math.pow(p.x - centerX, 2) + Math.pow(p.y - centerY, 2));
        return sum + Math.pow(dist - avgDistance, 2);
      }, 0) / points.length;

      return variance < avgDistance * 0.3 && avgDistance > 50;
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [canTrigger, discoverTrack, triggerCooldown]);

  // 6. ADVANCED HIDDEN TEXT: Type "hlpfl" but each letter must be typed with ALT key held
  useEffect(() => {
    let typedText = '';
    const secretWord = 'hlpfl';
    let altPressed = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        altPressed = true;
        return;
      }

      if (!canTrigger || !altPressed) {
        // Reset if typing without alt key
        if (!altPressed && e.key.toLowerCase().match(/[a-z]/)) {
          typedText = '';
        }
        return;
      }

      // Only count if alt is pressed
      if (altPressed && e.key.toLowerCase().match(/[a-z]/)) {
        typedText += e.key.toLowerCase();

        if (typedText.length > secretWord.length) {
          typedText = typedText.slice(-secretWord.length);
        }

        if (typedText === secretWord) {
          // Select a random track from all 11 tracks
          const randomTrack = SECRET_TRACKS[Math.floor(Math.random() * SECRET_TRACKS.length)];
          discoverTrack(randomTrack.id);
          triggerCooldown();
          typedText = '';
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        altPressed = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [canTrigger, discoverTrack, triggerCooldown]);

  // 7. ADVANCED FOOTER EASTER EGG: Right-click footer, then left-click within 2 seconds, 3 times in a row
  useEffect(() => {
    let rightClickCount = 0;
    let leftClickCount = 0;
    let sequenceTimer: NodeJS.Timeout | null = null;

    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('footer') || !canTrigger) return;

      e.preventDefault(); // Prevent context menu

      // Start sequence
      if (leftClickCount === 0) {
        rightClickCount++;

        // Start timer
        if (sequenceTimer) clearTimeout(sequenceTimer);
        sequenceTimer = setTimeout(() => {
          rightClickCount = 0;
          leftClickCount = 0;
        }, 2000);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('footer') || !canTrigger) return;

      // Only count left clicks after a right click
      if (rightClickCount > 0) {
        leftClickCount++;

        if (leftClickCount === 1) {
          // Reset for next sequence
          rightClickCount = 0;

          // Start new timer
          if (sequenceTimer) clearTimeout(sequenceTimer);
          sequenceTimer = setTimeout(() => {
            leftClickCount = 0;
          }, 2000);
        }
      }

      // Check if we've completed 3 sequences
      if (leftClickCount >= 3) {
        const randomTrack = SECRET_TRACKS[Math.floor(Math.random() * SECRET_TRACKS.length)];
        discoverTrack(randomTrack.id);
        triggerCooldown();
        rightClickCount = 0;
        leftClickCount = 0;
        if (sequenceTimer) clearTimeout(sequenceTimer);
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
      if (sequenceTimer) clearTimeout(sequenceTimer);
    };
  }, [canTrigger, discoverTrack, triggerCooldown]);

  return (
    <>
      {activeTrack && (
        <SecretMusicPlayer
          track={activeTrack}
          onClose={() => setActiveTrack(null)}
        />
      )}
    </>
  );
};

export default CreativeEasterEggs;
