'use client';

import { useEffect, useCallback, useRef, useState } from 'react';

// Alki's track information
const ALKI_TRACKS = [
  {
    id: 'iptwha',
    title: 'IPTWHA',
    file: '/audio/alki/iptwha.wav',
    trigger: 'iptwha',
    color: '#FF6B6B',
    description: 'The anthem that started it all'
  },
  {
    id: 'like-that',
    title: 'Like That',
    file: '/audio/alki/like-that.mp3',
    trigger: 'likethat',
    color: '#4ECDC4',
    description: 'Smooth vibes, pure energy'
  },
  {
    id: 'writin-my-wrongs',
    title: "Writin' My Wrongs",
    file: '/audio/alki/writin-my-wrongs.mp3',
    trigger: 'wrongs',
    color: '#95E1D3',
    description: 'Deep thoughts, real talk'
  },
  {
    id: 'regrets',
    title: 'Regrets',
    file: '/audio/alki/regrets.mp3',
    trigger: 'regrets',
    color: '#F38181',
    description: 'No regrets, just lessons'
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
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTriggerRef = useRef<number>(0);

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
        non_interaction: true
      });
    }
  }, []);

  // Initialize audio context for visualizer
  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current && audioRef.current && !sourceNodeRef.current) {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioContext();
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 256;
        
        sourceNodeRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
        sourceNodeRef.current.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
      } catch (error) {
        console.error('Audio context initialization failed:', error);
      }
    }
  }, []);

  // Visualizer animation
  const drawVisualizer = useCallback(() => {
    if (!canvasRef.current || !analyserRef.current || !showVisualizer) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserRef.current.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      barHeight = (dataArray[i] / 255) * canvas.height * 0.8;

      const gradient = ctx.createLinearGradient(0, canvas.height - barHeight, 0, canvas.height);
      const track = currentTrack !== null ? ALKI_TRACKS[currentTrack] : ALKI_TRACKS[0];
      gradient.addColorStop(0, track.color);
      gradient.addColorStop(1, track.color + '40');

      ctx.fillStyle = gradient;
      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

      x += barWidth + 1;
    }

    animationFrameRef.current = requestAnimationFrame(drawVisualizer);
  }, [showVisualizer, currentTrack]);

  // Play track
  const playTrack = useCallback((trackIndex: number) => {
    if (!canTrigger()) return;

    const track = ALKI_TRACKS[trackIndex];
    
    if (audioRef.current) {
      // Stop current playback
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      
      // Set new source
      audioRef.current.src = track.file;
      audioRef.current.volume = volume;
      audioRef.current.load(); // Force reload
      
      // Play with user interaction handling
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
            setAudioError(`Failed to play ${track.title}. Click the player to try again.`);
            setIsPlaying(false);
          });
      }
    }
  }, [volume, canTrigger, initAudioContext, trackEvent]);

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
      font-size: ${Math.random() * 30 + 40}px;
      color: ${color};
      pointer-events: none;
      z-index: 10000;
      animation: floatUp 3s ease-out forwards;
      text-shadow: 0 0 10px ${color}80;
    `;
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 3000);
  }, []);

  // Keyboard event handler
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore if typing in input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = e.key.toLowerCase();

      // Update alki code sequence
      setAlkiCode(prev => {
        const newCode = [...prev, key].slice(-10);
        const codeString = newCode.join('');

        // Check for "alki" trigger
        if (codeString.includes('alki')) {
          if (canTrigger()) {
            setShowPlayer(true);
            playTrack(0);
            trackEvent('alki_code_activated');
            showMusicNote('🎵', '#FF6B6B');
            return [];
          }
        }

        // Check for individual track triggers
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

      // Ctrl+Alt+M: Toggle music player
      if (e.ctrlKey && e.altKey && key === 'm') {
        e.preventDefault();
        if (canTrigger()) {
          setShowPlayer(prev => !prev);
          trackEvent('music_player_toggled');
        }
      }

      // Ctrl+Alt+V: Toggle visualizer
      if (e.ctrlKey && e.altKey && key === 'v') {
        e.preventDefault();
        if (canTrigger()) {
          setShowVisualizer(prev => !prev);
          trackEvent('visualizer_toggled');
        }
      }

      // Space: Play/Pause (when player is visible)
      if (showPlayer && key === ' ' && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        togglePlayPause();
      }

      // Arrow keys for track navigation (when player is visible)
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
  }, [showPlayer, canTrigger, playTrack, togglePlayPause, nextTrack, prevTrack, trackEvent, showMusicNote]);

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
      {/* Hidden audio element */}
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

      {/* Music Player UI */}
      {showPlayer && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '320px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            zIndex: 9999,
            color: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            animation: 'slideInUp 0.3s ease-out',
          }}
        >
          {/* Close button */}
          <button
            onClick={() => {
              setShowPlayer(false);
              stopTrack();
            }}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              color: 'white',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ×
          </button>

          {/* Header */}
          <div style={{ marginBottom: '15px' }}>
            <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '5px' }}>
              NOW PLAYING
            </div>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {currentTrack !== null ? ALKI_TRACKS[currentTrack].title : 'Select a track'}
            </div>
            <div style={{ fontSize: '14px', opacity: 0.9, marginTop: '5px' }}>
              by Alki
            </div>
          </div>

          {/* Error message */}
          {audioError && (
            <div style={{
              background: 'rgba(255,0,0,0.2)',
              padding: '10px',
              borderRadius: '8px',
              fontSize: '12px',
              marginBottom: '15px',
              border: '1px solid rgba(255,0,0,0.3)'
            }}>
              {audioError}
            </div>
          )}

          {/* Track list */}
          <div style={{ marginBottom: '15px', maxHeight: '150px', overflowY: 'auto' }}>
            {ALKI_TRACKS.map((track, index) => (
              <div
                key={track.id}
                onClick={() => playTrack(index)}
                style={{
                  padding: '10px',
                  marginBottom: '5px',
                  background: currentTrack === index ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  borderLeft: `4px solid ${track.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = currentTrack === index ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: '500' }}>{track.title}</div>
                <div style={{ fontSize: '11px', opacity: 0.7, marginTop: '2px' }}>
                  {track.description}
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '15px' }}>
            <button
              onClick={prevTrack}
              disabled={currentTrack === null}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: currentTrack === null ? 'not-allowed' : 'pointer',
                color: 'white',
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
                background: 'rgba(255,255,255,0.3)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                cursor: currentTrack === null ? 'not-allowed' : 'pointer',
                color: 'white',
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
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: currentTrack === null ? 'not-allowed' : 'pointer',
                color: 'white',
                fontSize: '18px',
                opacity: currentTrack === null ? 0.5 : 1,
              }}
            >
              ⏭
            </button>
          </div>

          {/* Volume control */}
          <div style={{ marginBottom: '10px' }}>
            <div style={{ fontSize: '12px', marginBottom: '5px', opacity: 0.8 }}>
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
              }}
            />
          </div>

          {/* Visualizer toggle */}
          <button
            onClick={() => setShowVisualizer(prev => !prev)}
            style={{
              width: '100%',
              padding: '10px',
              background: showVisualizer ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            {showVisualizer ? '🎨 Hide Visualizer' : '🎨 Show Visualizer'}
          </button>

          {/* Keyboard shortcuts hint */}
          <div style={{ marginTop: '15px', fontSize: '11px', opacity: 0.6, textAlign: 'center' }}>
            Space: Play/Pause • ← →: Navigate • Ctrl+Alt+V: Visualizer
          </div>
        </div>
      )}

      {/* Visualizer Canvas */}
      {showVisualizer && (
        <canvas
          ref={canvasRef}
          width={800}
          height={200}
          style={{
            position: 'fixed',
            bottom: showPlayer ? '420px' : '20px',
            right: '20px',
            width: '320px',
            height: '100px',
            background: 'rgba(0,0,0,0.8)',
            borderRadius: '12px',
            zIndex: 9998,
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          }}
        />
      )}

      {/* Animations */}
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
      `}</style>
    </>
  );
};

export default AlkiMusicEasterEggs;