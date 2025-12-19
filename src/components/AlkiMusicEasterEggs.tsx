'use client';

import { useEffect, useCallback, useRef, useState } from 'react';

// Alki's track information - 10 unique tracks
const ALKI_TRACKS = [
  {
    id: 'iptwha',
    title: 'IPTWHA',
    file: '/audio/alki/iptwha.mp3',
    trigger: 'iptwha',
    color: '#c87941',
    description: 'The anthem that started it all'
  },
  {
    id: 'like-that',
    title: 'Like That',
    file: '/audio/alki/like-that.mp3',
    trigger: 'likethat',
    color: '#d4945c',
    description: 'Smooth vibes, pure energy'
  },
  {
    id: 'writin-my-wrongs',
    title: "Writin' My Wrongs",
    file: '/audio/alki/writin-my-wrongs.mp3',
    trigger: 'wrongs',
    color: '#a86535',
    description: 'Deep thoughts, real talk'
  },
  {
    id: 'regrets',
    title: 'Regrets',
    file: '/audio/alki/regrets.mp3',
    trigger: 'regrets',
    color: '#c87941',
    description: 'No regrets, just lessons'
  },
  {
    id: 'home',
    title: 'Home',
    file: '/audio/alki/home.mp3',
    trigger: 'home',
    color: '#d4945c',
    description: 'Finding your way back'
  },
  {
    id: 'okay',
    title: 'Okay',
    file: '/audio/alki/okay.mp3',
    trigger: 'okay',
    color: '#a86535',
    description: 'Everything will be okay'
  },
  {
    id: 'luv4',
    title: 'Luv 4',
    file: '/audio/alki/luv4.mp3',
    trigger: 'luv4',
    color: '#c87941',
    description: 'Love in its purest form'
  },
  {
    id: 'stay',
    title: 'Stay',
    file: '/audio/alki/stay.mp3',
    trigger: 'stay',
    color: '#d4945c',
    description: 'Stay with me (ft. Arya)'
  },
  {
    id: 'take-it-all-away',
    title: 'Take It All Away',
    file: '/audio/alki/take-it-all-away.mp3',
    trigger: 'takeaway',
    color: '#a86535',
    description: 'Let it all go'
  },
  {
    id: 'tear-me-apart',
    title: 'Tear Me Apart',
    file: '/audio/alki/tear-me-apart.mp3',
    trigger: 'tearme',
    color: '#c87941',
    description: 'Raw emotions unleashed'
  }
];

const AlkiMusicEasterEggs = () => {
  const [alkiCode, setAlkiCode] = useState<string[]>([]);
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [showVisualizer, setShowVisualizer] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTriggerRef = useRef<number>(0);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Security: Rate limiting
  const canTrigger = useCallback(() => {
    const now = Date.now();
    if (now - lastTriggerRef.current < 500) return false;
    lastTriggerRef.current = now;
    return true;
  }, []);

  // Track analytics
  const trackEvent = useCallback((eventName: string, trackTitle?: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'alki_music_easter_egg', {
        event_category: 'music_engagement',
        event_label: eventName,
        track_title: trackTitle || 'unknown',
        device_type: isMobile ? 'mobile' : 'desktop',
        non_interaction: true
      });
    }
  }, [isMobile]);

  // Initialize audio context for visualizer
  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current && audioRef.current && !sourceNodeRef.current) {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioContext();
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = isMobile ? 128 : 256; // Smaller FFT for mobile
        
        sourceNodeRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
        sourceNodeRef.current.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
      } catch (error) {
        console.error('Audio context initialization failed:', error);
      }
    }
  }, [isMobile]);

  // HLPFL-themed visualizer with gold/copper colors
  const drawVisualizer = useCallback(() => {
    if (!canvasRef.current || !analyserRef.current || !showVisualizer) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserRef.current.getByteFrequencyData(dataArray);

    // Dark background matching HLPFL theme
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      barHeight = (dataArray[i] / 255) * canvas.height * 0.8;

      // HLPFL gold gradient
      const gradient = ctx.createLinearGradient(0, canvas.height - barHeight, 0, canvas.height);
      gradient.addColorStop(0, '#d4945c'); // gold-light
      gradient.addColorStop(0.5, '#c87941'); // gold-primary
      gradient.addColorStop(1, '#a86535'); // gold-dark

      ctx.fillStyle = gradient;
      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

      // Add glow effect
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#c87941';

      x += barWidth + 1;
    }

    ctx.shadowBlur = 0;
    animationFrameRef.current = requestAnimationFrame(drawVisualizer);
  }, [showVisualizer]);

  // Play track
  const playTrack = useCallback((trackIndex: number) => {
    if (!canTrigger()) return;

    const track = ALKI_TRACKS[trackIndex];
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = track.file;
      audioRef.current.volume = volume;
      audioRef.current.load();
      
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Playing:', track.title);
            setCurrentTrack(trackIndex);
            setIsPlaying(true);
            setShowPlayer(true);
            setAudioError(null);
            
            initAudioContext();
            trackEvent('track_played', track.title);
          })
          .catch(err => {
            console.error('Playback failed:', err);
            setAudioError(`Failed to play ${track.title}. ${isMobile ? 'Tap' : 'Click'} the player to try again.`);
            setIsPlaying(false);
          });
      }
    }
  }, [volume, canTrigger, initAudioContext, trackEvent, isMobile]);

  // Stop track
  const stopTrack = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  }, []);

  // Toggle play/pause
  const togglePlayPause = useCallback(() => {
    if (!audioRef.current || currentTrack === null) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setAudioError(null);
          })
          .catch(err => {
            console.error('Playback failed:', err);
            setAudioError('Playback failed. Try clicking play again.');
          });
      }
    }
  }, [isPlaying, currentTrack]);

  // Next track
  const nextTrack = useCallback(() => {
    if (currentTrack === null) return;
    const nextIndex = (currentTrack + 1) % ALKI_TRACKS.length;
    playTrack(nextIndex);
  }, [currentTrack, playTrack]);

  // Previous track
  const prevTrack = useCallback(() => {
    if (currentTrack === null) return;
    const prevIndex = currentTrack === 0 ? ALKI_TRACKS.length - 1 : currentTrack - 1;
    playTrack(prevIndex);
  }, [currentTrack, playTrack]);

  // Show floating music note
  const showMusicNote = useCallback((emoji: string, color: string) => {
    const note = document.createElement('div');
    note.textContent = emoji;
    note.style.cssText = `
      position: fixed;
      left: ${Math.random() * 80 + 10}%;
      top: 100%;
      font-size: ${isMobile ? Math.random() * 20 + 30 : Math.random() * 30 + 40}px;
      color: ${color};
      pointer-events: none;
      z-index: 10000;
      animation: floatUp 3s ease-out forwards;
      text-shadow: 0 0 10px ${color}80;
    `;
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 3000);
  }, [isMobile]);

  // Show URL popup
  const showURLPopup = useCallback((url: string, title: string) => {
    const popup = document.createElement('div');
    popup.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 15px; align-items: center;">
        <div style="font-size: ${isMobile ? '28px' : '32px'};">🔗</div>
        <div style="font-weight: bold; font-size: ${isMobile ? '16px' : '18px'};">${title}</div>
        <a href="${url}" target="_blank" rel="noopener noreferrer" 
           style="color: white; text-decoration: none; background: rgba(200, 121, 65, 0.3); 
                  padding: ${isMobile ? '8px 16px' : '10px 20px'}; border-radius: 8px; transition: all 0.2s;
                  border: 1px solid #c87941;"
           onmouseover="this.style.background='rgba(200, 121, 65, 0.5)'"
           onmouseout="this.style.background='rgba(200, 121, 65, 0.3)'">
          Visit Now →
        </a>
      </div>
    `;
    popup.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
      border: 2px solid #c87941;
      color: white;
      padding: ${isMobile ? '20px 30px' : '30px 40px'};
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(200, 121, 65, 0.3);
      z-index: 10002;
      animation: scaleIn 0.3s ease-out, fadeOut 0.3s ease-out 4.7s forwards;
      font-family: system-ui, -apple-system, sans-serif;
      text-align: center;
      max-width: ${isMobile ? '90%' : 'auto'};
    `;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 5000);
  }, [isMobile]);

  // Mobile-specific: Swipe gestures
  useEffect(() => {
    if (!isMobile || !showPlayer) return;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          time: Date.now()
        };
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current || !e.changedTouches.length) return;

      const touchEnd = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
        time: Date.now()
      };

      const deltaX = touchEnd.x - touchStartRef.current.x;
      const deltaY = touchEnd.y - touchStartRef.current.y;
      const deltaTime = touchEnd.time - touchStartRef.current.time;

      // Swipe detection (must be fast and horizontal)
      if (deltaTime < 300 && Math.abs(deltaX) > 50 && Math.abs(deltaY) < 50) {
        if (deltaX > 0) {
          // Swipe right - previous track
          prevTrack();
          trackEvent('swipe_previous');
        } else {
          // Swipe left - next track
          nextTrack();
          trackEvent('swipe_next');
        }
      }

      touchStartRef.current = null;
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, showPlayer, nextTrack, prevTrack, trackEvent]);

  // Mobile-specific: Shake to shuffle
  useEffect(() => {
    if (!isMobile) return;

    let lastX = 0, lastY = 0, lastZ = 0;
    let shakeCount = 0;
    let shakeTimeout: NodeJS.Timeout;

    const handleMotion = (e: DeviceMotionEvent) => {
      const acc = e.accelerationIncludingGravity;
      if (!acc || !acc.x || !acc.y || !acc.z) return;

      const deltaX = Math.abs(acc.x - lastX);
      const deltaY = Math.abs(acc.y - lastY);
      const deltaZ = Math.abs(acc.z - lastZ);

      if (deltaX + deltaY + deltaZ > 30) {
        shakeCount++;
        clearTimeout(shakeTimeout);

        if (shakeCount >= 3) {
          // Shake detected - play random track
          const randomIndex = Math.floor(Math.random() * ALKI_TRACKS.length);
          playTrack(randomIndex);
          trackEvent('shake_to_shuffle');
          shakeCount = 0;
        } else {
          shakeTimeout = setTimeout(() => {
            shakeCount = 0;
          }, 1000);
        }
      }

      lastX = acc.x;
      lastY = acc.y;
      lastZ = acc.z;
    };

    window.addEventListener('devicemotion', handleMotion);
    return () => {
      window.removeEventListener('devicemotion', handleMotion);
      clearTimeout(shakeTimeout);
    };
  }, [isMobile, playTrack, trackEvent]);

  // Keyboard event handler (desktop only)
  useEffect(() => {
    if (isMobile) return; // Skip keyboard events on mobile

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = e.key.toLowerCase();

      setAlkiCode(prev => {
        const newCode = [...prev, key].slice(-20);
        const codeString = newCode.join('');

        if (codeString.includes('alki')) {
          if (canTrigger()) {
            setShowPlayer(true);
            playTrack(0);
            trackEvent('alki_code_activated');
            showMusicNote('🎵', '#c87941');
            return [];
          }
        }

        if (codeString.includes('grouped')) {
          if (canTrigger()) {
            showURLPopup('https://app.grouped.com/everythingalki', 'Everything Alki on Grouped');
            trackEvent('grouped_url_discovered');
            return [];
          }
        }

        if (codeString.includes('instagram') || codeString.includes('insta')) {
          if (canTrigger()) {
            showURLPopup('https://instagram.com/alkiotis', 'Follow Alki on Instagram');
            trackEvent('instagram_url_discovered');
            return [];
          }
        }

        ALKI_TRACKS.forEach((track, index) => {
          if (codeString.includes(track.trigger)) {
            if (canTrigger()) {
              playTrack(index);
              showMusicNote('🎶', track.color);
              return [];
            }
          }
        });

        return newCode;
      });

      if (e.ctrlKey && e.altKey && key === 'm') {
        e.preventDefault();
        if (canTrigger()) {
          setShowPlayer(prev => !prev);
          trackEvent('music_player_toggled');
        }
      }

      if (e.ctrlKey && e.altKey && key === 'v') {
        e.preventDefault();
        if (canTrigger()) {
          setShowVisualizer(prev => !prev);
          trackEvent('visualizer_toggled');
        }
      }

      if (e.ctrlKey && e.altKey && key === 'g') {
        e.preventDefault();
        if (canTrigger()) {
          showURLPopup('https://app.grouped.com/everythingalki', 'Everything Alki on Grouped');
          trackEvent('grouped_shortcut');
        }
      }

      if (e.ctrlKey && e.altKey && key === 'i') {
        e.preventDefault();
        if (canTrigger()) {
          showURLPopup('https://instagram.com/alkiotis', 'Follow Alki on Instagram');
          trackEvent('instagram_shortcut');
        }
      }

      if (showPlayer && key === ' ' && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        togglePlayPause();
      }

      if (showPlayer) {
        if (key === 'arrowright') {
          e.preventDefault();
          nextTrack();
        } else if (key === 'arrowleft') {
          e.preventDefault();
          prevTrack();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isMobile, showPlayer, canTrigger, playTrack, togglePlayPause, nextTrack, prevTrack, trackEvent, showMusicNote, showURLPopup]);

  // Visualizer animation loop
  useEffect(() => {
    if (showVisualizer && isPlaying) {
      drawVisualizer();
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [showVisualizer, isPlaying, drawVisualizer]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        preload="none"
        onEnded={() => {
          setIsPlaying(false);
          nextTrack();
        }}
        onError={(e) => {
          console.error('Audio error:', e);
          setAudioError('Failed to load audio. Please try again.');
          setIsPlaying(false);
        }}
      />

      {/* Music Player UI - HLPFL themed */}
      {showPlayer && (
        <div
          style={{
            position: 'fixed',
            bottom: isMobile ? '10px' : '20px',
            right: isMobile ? '10px' : '20px',
            width: isMobile ? 'calc(100% - 20px)' : '360px',
            maxWidth: isMobile ? '400px' : '360px',
            maxHeight: '85vh',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
            border: '2px solid #c87941',
            borderRadius: '16px',
            padding: isMobile ? '15px' : '20px',
            boxShadow: '0 10px 40px rgba(200, 121, 65, 0.3)',
            zIndex: 9999,
            color: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            animation: 'slideInUp 0.3s ease-out',
            overflowY: 'auto',
          }}
        >
          <button
            onClick={() => {
              setShowPlayer(false);
              stopTrack();
            }}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'rgba(200, 121, 65, 0.2)',
              border: '1px solid #c87941',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              color: '#c87941',
              fontSize: '18px',
            }}
          >
            ×
          </button>

          <div style={{ marginBottom: '15px' }}>
            <div style={{ fontSize: '12px', color: '#d4945c', marginBottom: '5px' }}>
              NOW PLAYING
            </div>
            <div style={{ fontSize: isMobile ? '18px' : '20px', fontWeight: 'bold', color: '#c87941' }}>
              {currentTrack !== null ? ALKI_TRACKS[currentTrack].title : 'Select a track'}
            </div>
            <div style={{ fontSize: '14px', color: '#d4945c', marginTop: '5px' }}>
              by Alki
            </div>
            <div style={{ fontSize: '11px', color: '#a86535', marginTop: '5px' }}>
              {ALKI_TRACKS.length} tracks • {isMobile ? 'Swipe to navigate' : 'Type triggers available'}
            </div>
          </div>

          {audioError && (
            <div style={{
              background: 'rgba(255,0,0,0.1)',
              padding: '10px',
              borderRadius: '8px',
              fontSize: '12px',
              marginBottom: '15px',
              border: '1px solid rgba(255,0,0,0.3)',
              color: '#ff6b6b'
            }}>
              {audioError}
            </div>
          )}

          <div style={{ marginBottom: '15px', maxHeight: isMobile ? '200px' : '300px', overflowY: 'auto' }}>
            {ALKI_TRACKS.map((track, index) => (
              <div
                key={track.id}
                onClick={() => playTrack(index)}
                style={{
                  padding: isMobile ? '8px' : '10px',
                  marginBottom: '5px',
                  background: currentTrack === index ? 'rgba(200, 121, 65, 0.2)' : 'rgba(200, 121, 65, 0.1)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  borderLeft: `4px solid ${track.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(200, 121, 65, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = currentTrack === index ? 'rgba(200, 121, 65, 0.2)' : 'rgba(200, 121, 65, 0.1)';
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#c87941' }}>
                  {currentTrack === index && isPlaying ? '▶ ' : ''}{track.title}
                </div>
                <div style={{ fontSize: '11px', color: '#a86535', marginTop: '2px' }}>
                  {track.description}
                </div>
                {!isMobile && (
                  <div style={{ fontSize: '10px', color: '#6b4a2e', marginTop: '2px' }}>
                    Type: {track.trigger}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '15px' }}>
            <button
              onClick={prevTrack}
              disabled={currentTrack === null}
              style={{
                background: 'rgba(200, 121, 65, 0.2)',
                border: '1px solid #c87941',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: currentTrack === null ? 'not-allowed' : 'pointer',
                color: '#c87941',
                fontSize: '18px',
                opacity: currentTrack === null ? 0.5 : 1,
              }}
            >
              ⏮
            </button>
            <button
              onClick={togglePlayPause}
              disabled={currentTrack === null}
              style={{
                background: 'rgba(200, 121, 65, 0.3)',
                border: '2px solid #c87941',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                cursor: currentTrack === null ? 'not-allowed' : 'pointer',
                color: '#c87941',
                fontSize: '24px',
                opacity: currentTrack === null ? 0.5 : 1,
              }}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button
              onClick={nextTrack}
              disabled={currentTrack === null}
              style={{
                background: 'rgba(200, 121, 65, 0.2)',
                border: '1px solid #c87941',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: currentTrack === null ? 'not-allowed' : 'pointer',
                color: '#c87941',
                fontSize: '18px',
                opacity: currentTrack === null ? 0.5 : 1,
              }}
            >
              ⏭
            </button>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <div style={{ fontSize: '12px', marginBottom: '5px', color: '#d4945c' }}>
              Volume: {Math.round(volume * 100)}%
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={volume * 100}
              onChange={(e) => {
                const newVolume = parseInt(e.target.value) / 100;
                setVolume(newVolume);
                if (audioRef.current) {
                  audioRef.current.volume = newVolume;
                }
              }}
              style={{
                width: '100%',
                cursor: 'pointer',
                accentColor: '#c87941',
              }}
            />
          </div>

          <button
            onClick={() => setShowVisualizer(prev => !prev)}
            style={{
              width: '100%',
              padding: '10px',
              background: showVisualizer ? 'rgba(200, 121, 65, 0.3)' : 'rgba(200, 121, 65, 0.1)',
              border: '1px solid #c87941',
              borderRadius: '8px',
              color: '#c87941',
              cursor: 'pointer',
              fontSize: '14px',
              marginBottom: '10px',
            }}
          >
            {showVisualizer ? '🎨 Hide Visualizer' : '🎨 Show Visualizer'}
          </button>

          <div style={{ 
            display: 'flex', 
            gap: '5px',
            marginBottom: '10px',
          }}>
            <button
              onClick={() => showURLPopup('https://app.grouped.com/everythingalki', 'Everything Alki')}
              style={{
                flex: 1,
                padding: '8px',
                background: 'rgba(200, 121, 65, 0.1)',
                border: '1px solid #c87941',
                borderRadius: '8px',
                color: '#c87941',
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >
              🔗 Grouped
            </button>
            <button
              onClick={() => showURLPopup('https://instagram.com/alkiotis', 'Follow on IG')}
              style={{
                flex: 1,
                padding: '8px',
                background: 'rgba(200, 121, 65, 0.1)',
                border: '1px solid #c87941',
                borderRadius: '8px',
                color: '#c87941',
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >
              📸 Instagram
            </button>
          </div>

          <div style={{ fontSize: '10px', color: '#a86535', textAlign: 'center', lineHeight: '1.4' }}>
            {isMobile ? (
              <>
                <div>Swipe left/right to navigate tracks</div>
                <div>Shake device to shuffle</div>
              </>
            ) : (
              <>
                <div>Space: Play/Pause • ← →: Navigate</div>
                <div>Ctrl+Alt+V: Visualizer • Ctrl+Alt+G: Grouped • Ctrl+Alt+I: Instagram</div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Visualizer Canvas - HLPFL themed */}
      {showVisualizer && (
        <canvas
          ref={canvasRef}
          width={800}
          height={200}
          style={{
            position: 'fixed',
            bottom: showPlayer ? (isMobile ? '320px' : '500px') : '20px',
            right: isMobile ? '10px' : '20px',
            width: isMobile ? 'calc(100% - 20px)' : '360px',
            maxWidth: isMobile ? '400px' : '360px',
            height: isMobile ? '80px' : '100px',
            background: '#0a0a0a',
            border: '2px solid #c87941',
            borderRadius: '12px',
            zIndex: 9998,
            boxShadow: '0 10px 40px rgba(200, 121, 65, 0.3)',
          }}
        />
      )}

      <style jsx>{`
        @keyframes slideInUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes floatUp {
          from {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes scaleIn {
          from {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
        }
      `}</style>
    </>
  );
};

export default AlkiMusicEasterEggs;