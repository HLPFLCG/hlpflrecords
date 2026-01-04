'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { trackEvent } from '@/lib/analytics';

// Secret music tracks
const SECRET_TRACKS = [
  {
    id: 'secret-1',
    title: '5D',
    artist: 'Alki',
    trigger: 'konami',
    audioUrl: '/audio/secret/5D.mp3',
    coverUrl: '/images/releases/secret-5d.jpg',
    description: 'Hidden track unlocked via Konami Code!'
  },
  {
    id: 'secret-2',
    title: 'Home (Alone)',
    artist: 'Alki',
    trigger: 'clicks',
    audioUrl: '/audio/secret/home-alone.mp3',
    coverUrl: '/images/releases/secret-home.jpg',
    description: 'Hidden track unlocked by clicking!'
  },
  {
    id: 'secret-3',
    title: 'Regrets',
    artist: 'Alki',
    trigger: 'scroll',
    audioUrl: '/audio/secret/regrets.mp3',
    coverUrl: '/images/releases/secret-regrets.jpg',
    description: 'Hidden track unlocked by scrolling!'
  },
  {
    id: 'secret-4',
    title: 'Tear Me Apart',
    artist: 'Alki',
    trigger: 'time',
    audioUrl: '/audio/secret/tear-me-apart.mp3',
    coverUrl: '/images/releases/secret-tear.jpg',
    description: 'Hidden track unlocked at 11:11!'
  },
  {
    id: 'secret-5',
    title: "Writin' My Wrongs",
    artist: 'Alki',
    trigger: 'pattern',
    audioUrl: '/audio/secret/writin-my-wrongs.mp3',
    coverUrl: '/images/releases/secret-wrongs.jpg',
    description: 'Hidden track unlocked by drawing!'
  }
];

interface SecretMusicPlayerProps {
  track: typeof SECRET_TRACKS[0];
  onClose: () => void;
}

const SecretMusicPlayer: React.FC<SecretMusicPlayerProps> = ({ track, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => {
    if (typeof window !== 'undefined') {
      return new Audio(track.audioUrl);
    }
    return null;
  });

  useEffect(() => {
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, [audio]);

  const togglePlay = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 animate-slideUp">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              🎵 Secret Track Unlocked!
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {track.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="flex items-center gap-4 mb-4">
          {track.coverUrl && (
            <img
              src={track.coverUrl}
              alt={track.title}
              className="w-20 h-20 rounded-lg object-cover"
            />
          )}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white">{track.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{track.artist}</p>
          </div>
        </div>

        <button
          onClick={togglePlay}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
        >
          {isPlaying ? '⏸ Pause' : '▶ Play'}
        </button>
      </div>
    </div>
  );
};

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
    if (discoveredTracks.has(trackId)) return;

    const track = SECRET_TRACKS.find(t => t.id === trackId);
    if (!track) return;

    setDiscoveredTracks(prev => new Set([...Array.from(prev), trackId]));
    setActiveTrack(track);
    
    trackEvent('easter_egg_discovered', 'Easter Egg', track.title, undefined, {
      track_id: trackId,
      trigger: track.trigger
    });

    showNotification(`🎵 Secret track discovered: ${track.title}`);
  }, [discoveredTracks, showNotification]);

  // Check if we can trigger (cooldown system)
  const [canTrigger, setCanTrigger] = useState(true);

  const triggerCooldown = useCallback(() => {
    setCanTrigger(false);
    setTimeout(() => setCanTrigger(true), 5000); // 5 second cooldown
  }, []);

  // 1. KONAMI CODE: ↑↑↓↓←→←→BA
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!canTrigger) return;

      const key = e.key.toLowerCase();
      if (key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          discoverTrack('secret-1');
          triggerCooldown();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canTrigger, discoverTrack, triggerCooldown]);

  // 2. CLICK PATTERN: Click logo 7 times in 3 seconds
  useEffect(() => {
    let clicks = 0;
    let clickTimer: NodeJS.Timeout | null = null;

    const handleLogoClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-logo]') || !canTrigger) return;

      clicks++;
      
      if (clickTimer) clearTimeout(clickTimer);
      
      if (clicks >= 7) {
        discoverTrack('secret-2');
        triggerCooldown();
        clicks = 0;
      } else {
        clickTimer = setTimeout(() => {
          clicks = 0;
        }, 3000);
      }
    };

    document.addEventListener('click', handleLogoClick);
    return () => {
      document.removeEventListener('click', handleLogoClick);
      if (clickTimer) clearTimeout(clickTimer);
    };
  }, [canTrigger, discoverTrack, triggerCooldown]);

  // 3. SCROLL DEPTH: Scroll to exactly 77.7% of page
  useEffect(() => {
    const handleScroll = () => {
      if (!canTrigger) return;

      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 77.5 && scrollPercent <= 78.0) {
        discoverTrack('secret-3');
        triggerCooldown();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [canTrigger, discoverTrack, triggerCooldown]);

  // 4. TIME-BASED: Visit at 11:11 AM or PM
  useEffect(() => {
    const checkTime = () => {
      if (!canTrigger) return;

      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      if ((hours === 11 || hours === 23) && minutes === 11) {
        discoverTrack('secret-4');
        triggerCooldown();
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
          discoverTrack('secret-5');
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

  // 6. HIDDEN TEXT: Type "hlpfl" anywhere
  useEffect(() => {
    let typedText = '';
    const secretWord = 'hlpfl';

    const handleKeyPress = (e: KeyboardEvent) => {
      if (!canTrigger) return;

      typedText += e.key.toLowerCase();
      
      if (typedText.length > secretWord.length) {
        typedText = typedText.slice(-secretWord.length);
      }

      if (typedText === secretWord) {
        const randomTrack = SECRET_TRACKS[Math.floor(Math.random() * SECRET_TRACKS.length)];
        discoverTrack(randomTrack.id);
        triggerCooldown();
        typedText = '';
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [canTrigger, discoverTrack, triggerCooldown]);

  // 7. FOOTER EASTER EGG: Double-click footer
  useEffect(() => {
    const handleDoubleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('footer') || !canTrigger) return;

      const randomTrack = SECRET_TRACKS[Math.floor(Math.random() * SECRET_TRACKS.length)];
      discoverTrack(randomTrack.id);
      triggerCooldown();
    };

    document.addEventListener('dblclick', handleDoubleClick);
    return () => document.removeEventListener('dblclick', handleDoubleClick);
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