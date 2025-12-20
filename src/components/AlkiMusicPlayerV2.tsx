'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { X, Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

// Unreleased Alki tracks - Easter egg exclusives
const ALKI_TRACKS = [
  { id: '1', title: 'IPTWHA', trigger: 'iptwha', file: '/audio/alki/iptwha.mp3', color: '#c87941' },
  { id: '2', title: 'Like That', trigger: 'likethat', file: '/audio/alki/like-that.mp3', color: '#d4945c' },
  { id: '3', title: '5D', trigger: '5d', file: '/audio/alki/5d.mp3', color: '#a86535' },
  { id: '4', title: 'Home', trigger: 'home', file: '/audio/alki/home.mp3', color: '#c87941' },
  { id: '5', title: 'Regrets', trigger: 'regrets', file: '/audio/alki/regrets.mp3', color: '#d4945c' },
  { id: '6', title: 'Stay', trigger: 'stay', file: '/audio/alki/stay.mp3', color: '#a86535' },
  { id: '7', title: 'Okay', trigger: 'okay', file: '/audio/alki/okay.mp3', color: '#c87941' },
  { id: '8', title: 'Luv 4', trigger: 'luv4', file: '/audio/alki/luv4.mp3', color: '#d4945c' },
  { id: '9', title: 'Take It All Away', trigger: 'takeaway', file: '/audio/alki/take-it-all-away.mp3', color: '#a86535' },
  { id: '10', title: 'Tear Me Apart', trigger: 'tearme', file: '/audio/alki/tear-me-apart.mp3', color: '#c87941' },
];

const AlkiMusicPlayerV2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [showVisualizer, setShowVisualizer] = useState(false);
  const [typedSequence, setTypedSequence] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const touchStartRef = useRef<{ x: number; time: number } | null>(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track analytics
  const trackEvent = useCallback((action: string, trackTitle?: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'music_player', {
        event_category: 'music_engagement',
        event_label: action,
        track_title: trackTitle || ALKI_TRACKS[currentTrack].title,
      });
    }
  }, [currentTrack]);

  // Show notification
  const showNotification = useCallback((message: string) => {
    const notification = document.createElement('div');
    notification.textContent = `🎵 ${message}`;
    notification.className = 'fixed top-4 right-4 bg-gradient-to-r from-[#c87941] to-[#d4945c] text-white px-6 py-3 rounded-lg font-semibold shadow-lg z-[10000] animate-slide-in-right';
    notification.style.fontFamily = "'Space Grotesk', system-ui, sans-serif";
    
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.style.animation = 'slide-out-right 0.5s ease-out forwards';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 500);
    }, 3000);
  }, []);

  // Initialize audio context
  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current && audioRef.current && !sourceRef.current) {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioContext();
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = isMobile ? 128 : 256;
        
        sourceRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
        sourceRef.current.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
      } catch (error) {
        console.error('Audio context error:', error);
      }
    }
  }, [isMobile]);

  // Draw visualizer
  const drawVisualizer = useCallback(() => {
    if (!canvasRef.current || !analyserRef.current || !showVisualizer) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserRef.current.getByteFrequencyData(dataArray);

    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 2.5;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * canvas.height * 0.8;

      const gradient = ctx.createLinearGradient(0, canvas.height - barHeight, 0, canvas.height);
      gradient.addColorStop(0, '#d4945c');
      gradient.addColorStop(0.5, '#c87941');
      gradient.addColorStop(1, '#a86535');

      ctx.fillStyle = gradient;
      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

      ctx.shadowBlur = 10;
      ctx.shadowColor = '#c87941';

      x += barWidth + 1;
    }

    ctx.shadowBlur = 0;
    animationFrameRef.current = requestAnimationFrame(drawVisualizer);
  }, [showVisualizer]);

  // Play/pause
  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      trackEvent('pause');
    } else {
      initAudioContext();
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
      trackEvent('play');
    }
  }, [isPlaying, initAudioContext, trackEvent]);

  // Play specific track
  const playTrack = useCallback((index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
    trackEvent('track_change', ALKI_TRACKS[index].title);
    
    if (audioRef.current) {
      initAudioContext();
      audioRef.current.src = ALKI_TRACKS[index].file;
      audioRef.current.play().catch(console.error);
    }
  }, [initAudioContext, trackEvent]);

  // Previous track
  const previousTrack = useCallback(() => {
    const newIndex = currentTrack > 0 ? currentTrack - 1 : ALKI_TRACKS.length - 1;
    playTrack(newIndex);
  }, [currentTrack, playTrack]);

  // Next track
  const nextTrack = useCallback(() => {
    const newIndex = currentTrack < ALKI_TRACKS.length - 1 ? currentTrack + 1 : 0;
    playTrack(newIndex);
  }, [currentTrack, playTrack]);

  // Toggle mute
  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  }, [isMuted, volume]);

  // Change volume
  const changeVolume = useCallback((newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = newVolume;
    }
  }, [isMuted]);

  // Toggle visualizer
  const toggleVisualizer = useCallback(() => {
    setShowVisualizer(prev => !prev);
    trackEvent(showVisualizer ? 'visualizer_hide' : 'visualizer_show');
  }, [showVisualizer, trackEvent]);

  // Keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case ' ':
          e.preventDefault();
          togglePlay();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          previousTrack();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextTrack();
          break;
      }

      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'v') {
        e.preventDefault();
        toggleVisualizer();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, togglePlay, previousTrack, nextTrack, toggleVisualizer]);

  // Type triggers
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
        return;
      }

      const newTyped = (typedSequence + e.key.toLowerCase()).slice(-15);
      setTypedSequence(newTyped);

      // Check for "alki" trigger
      if (newTyped.includes('alki')) {
        setIsOpen(true);
        setTypedSequence('');
        showNotification('Alki Music Player Activated!');
        trackEvent('player_open_typed');
        if (!isPlaying) {
          setTimeout(() => playTrack(0), 100);
        }
        return;
      }

      // Check for track triggers
      ALKI_TRACKS.forEach((track, index) => {
        if (newTyped.includes(track.trigger)) {
          setIsOpen(true);
          setTypedSequence('');
          showNotification(`Now playing: ${track.title}`);
          playTrack(index);
        }
      });
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [typedSequence, isPlaying, playTrack, showNotification, trackEvent]);

  // Mobile swipe gestures
  useEffect(() => {
    if (!isMobile || !isOpen) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        time: Date.now(),
      };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) return;

      const touchEnd = e.changedTouches[0].clientX;
      const diff = touchStartRef.current.x - touchEnd;
      const timeDiff = Date.now() - touchStartRef.current.time;

      if (Math.abs(diff) > 50 && timeDiff < 300) {
        if (diff > 0) {
          nextTrack();
        } else {
          previousTrack();
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
  }, [isMobile, isOpen, nextTrack, previousTrack]);

  // Shake to shuffle (mobile)
  useEffect(() => {
    if (!isMobile || !isOpen) return;

    let lastShake = 0;
    const handleMotion = (e: DeviceMotionEvent) => {
      const acc = e.accelerationIncludingGravity;
      if (!acc) return;

      const magnitude = Math.sqrt(
        (acc.x || 0) ** 2 + (acc.y || 0) ** 2 + (acc.z || 0) ** 2
      );

      if (magnitude > 25 && Date.now() - lastShake > 1000) {
        lastShake = Date.now();
        const randomIndex = Math.floor(Math.random() * ALKI_TRACKS.length);
        playTrack(randomIndex);
        showNotification('Shuffled!');
        trackEvent('shake_shuffle');
      }
    };

    window.addEventListener('devicemotion', handleMotion);
    return () => window.removeEventListener('devicemotion', handleMotion);
  }, [isMobile, isOpen, playTrack, showNotification, trackEvent]);

  // Visualizer animation
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
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 max-w-[calc(100vw-2rem)] bg-gradient-to-br from-gray-900 to-black border border-[#c87941] rounded-xl shadow-2xl z-[9999] overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#c87941] to-[#d4945c] p-4 flex items-center justify-between">
        <div>
          <h3 className="text-white font-bold text-lg">Alki Music Player</h3>
          <p className="text-white/80 text-sm">{ALKI_TRACKS[currentTrack].title}</p>
        </div>
        <button
          onClick={() => {
            setIsOpen(false);
            if (audioRef.current) audioRef.current.pause();
            setIsPlaying(false);
            trackEvent('player_close');
          }}
          className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Visualizer */}
      {showVisualizer && (
        <canvas
          ref={canvasRef}
          width={384}
          height={100}
          className="w-full bg-black"
        />
      )}

      {/* Controls */}
      <div className="p-4 space-y-4">
        {/* Play controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={previousTrack}
            className="text-white hover:text-[#c87941] transition-colors"
          >
            <SkipBack size={24} />
          </button>
          
          <button
            onClick={togglePlay}
            className="bg-gradient-to-r from-[#c87941] to-[#d4945c] text-white p-4 rounded-full hover:scale-110 transition-transform"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          
          <button
            onClick={nextTrack}
            className="text-white hover:text-[#c87941] transition-colors"
          >
            <SkipForward size={24} />
          </button>
        </div>

        {/* Volume control */}
        <div className="flex items-center gap-3">
          <button onClick={toggleMute} className="text-white hover:text-[#c87941] transition-colors">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={(e) => changeVolume(parseFloat(e.target.value))}
            className="flex-1 accent-[#c87941]"
          />
        </div>

        {/* Visualizer toggle */}
        <button
          onClick={toggleVisualizer}
          className="w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg transition-colors text-sm"
        >
          {showVisualizer ? 'Hide' : 'Show'} Visualizer
        </button>

        {/* Track list */}
        <div className="max-h-48 overflow-y-auto space-y-1">
          {ALKI_TRACKS.map((track, index) => (
            <button
              key={track.id}
              onClick={() => playTrack(index)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                currentTrack === index
                  ? 'bg-gradient-to-r from-[#c87941] to-[#d4945c] text-white'
                  : 'text-white/70 hover:bg-white/10'
              }`}
            >
              <span className="text-sm font-medium">{track.title}</span>
            </button>
          ))}
        </div>

        {/* Tips */}
        <div className="text-white/50 text-xs space-y-1">
          <p>💡 Keyboard: Space (play/pause), ← → (tracks)</p>
          {isMobile && <p>💡 Mobile: Swipe left/right, shake to shuffle</p>}
        </div>
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={ALKI_TRACKS[currentTrack].file}
        onEnded={nextTrack}
        onError={() => console.error('Audio error')}
      />
    </div>
  );
};

export default AlkiMusicPlayerV2;