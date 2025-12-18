'use client';

import { useEffect, useCallback, useRef, useState } from 'react';

// Secret clickable areas and hidden links for Alki's music
const AlkiSecretLinks = () => {
  const [discoveredSecrets, setDiscoveredSecrets] = useState<Set<string>>(new Set());
  const [showSecretMenu, setShowSecretMenu] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastClickRef = useRef<number>(0);

  // Track analytics
  const trackEvent = useCallback((eventName: string, secretId?: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'alki_secret_discovered', {
        event_category: 'secret_engagement',
        event_label: eventName,
        secret_id: secretId || 'unknown',
        non_interaction: true
      });
    }
  }, []);

  // Play secret audio
  const playSecretAudio = useCallback((trackUrl: string, secretId: string) => {
    const now = Date.now();
    if (now - lastClickRef.current < 500) return;
    lastClickRef.current = now;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = trackUrl;
      audioRef.current.volume = 0.6;
      audioRef.current.load();
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Secret audio playing:', secretId);
            setDiscoveredSecrets(prev => {
              const newSet = new Set(prev);
              newSet.add(secretId);
              return newSet;
            });
            trackEvent('secret_audio_played', secretId);
            showDiscoveryNotification(secretId);
          })
          .catch(err => {
            console.error('Secret audio playback failed:', err);
          });
      }
    }
  }, [trackEvent]);

  // Show discovery notification
  const showDiscoveryNotification = useCallback((secretId: string) => {
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 24px;">🎵</span>
        <div>
          <div style="font-weight: bold;">Secret Discovered!</div>
          <div style="font-size: 12px; opacity: 0.8;">You found an Alki track!</div>
        </div>
      </div>
    `;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 15px 20px;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      z-index: 10000;
      animation: slideInRight 0.3s ease-out, fadeOut 0.3s ease-out 2.7s forwards;
      font-family: system-ui, -apple-system, sans-serif;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  }, []);

  // Create invisible clickable zones
  useEffect(() => {
    // Secret zone 1: Top-left corner (triple click)
    let cornerClicks = 0;
    let cornerTimeout: NodeJS.Timeout;

    const handleCornerClick = (e: MouseEvent) => {
      if (e.clientX < 50 && e.clientY < 50) {
        cornerClicks++;
        clearTimeout(cornerTimeout);
        
        if (cornerClicks === 3) {
          playSecretAudio('/audio/alki/iptwha.wav', 'corner_secret');
          cornerClicks = 0;
        } else {
          cornerTimeout = setTimeout(() => {
            cornerClicks = 0;
          }, 1000);
        }
      }
    };

    // Secret zone 2: Bottom-right corner (double click)
    let bottomClicks = 0;
    let bottomTimeout: NodeJS.Timeout;

    const handleBottomClick = (e: MouseEvent) => {
      const isBottomRight = e.clientX > window.innerWidth - 50 && e.clientY > window.innerHeight - 50;
      
      if (isBottomRight) {
        bottomClicks++;
        clearTimeout(bottomTimeout);
        
        if (bottomClicks === 2) {
          playSecretAudio('/audio/alki/like-that.mp3', 'bottom_secret');
          bottomClicks = 0;
        } else {
          bottomTimeout = setTimeout(() => {
            bottomClicks = 0;
          }, 1000);
        }
      }
    };

    // Secret: Hold Shift and click anywhere 5 times
    let shiftClicks = 0;
    let shiftTimeout: NodeJS.Timeout;

    const handleShiftClick = (e: MouseEvent) => {
      if (e.shiftKey) {
        shiftClicks++;
        clearTimeout(shiftTimeout);
        
        if (shiftClicks === 5) {
          playSecretAudio('/audio/alki/writin-my-wrongs.mp3', 'shift_secret');
          shiftClicks = 0;
        } else {
          shiftTimeout = setTimeout(() => {
            shiftClicks = 0;
          }, 2000);
        }
      }
    };

    // Secret: Ctrl+Shift+A
    const handleKeyCombo = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        playSecretAudio('/audio/alki/regrets.mp3', 'keyboard_secret');
      }

      // Secret: Type "alkimusic" anywhere
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'm') {
        e.preventDefault();
        setShowSecretMenu(prev => !prev);
        trackEvent('secret_menu_toggled');
      }
    };

    // Secret: Scroll to exact middle of page and wait 3 seconds
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 49 && scrollPercent <= 51) {
        scrollTimeout = setTimeout(() => {
          if (!discoveredSecrets.has('scroll_middle_secret')) {
            playSecretAudio('/audio/alki/iptwha.wav', 'scroll_middle_secret');
          }
        }, 3000);
      }
    };

    document.addEventListener('click', handleCornerClick);
    document.addEventListener('click', handleBottomClick);
    document.addEventListener('click', handleShiftClick);
    document.addEventListener('keydown', handleKeyCombo);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleCornerClick);
      document.removeEventListener('click', handleBottomClick);
      document.removeEventListener('click', handleShiftClick);
      document.removeEventListener('keydown', handleKeyCombo);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(cornerTimeout);
      clearTimeout(bottomTimeout);
      clearTimeout(shiftTimeout);
      clearTimeout(scrollTimeout);
    };
  }, [playSecretAudio, discoveredSecrets, trackEvent]);

  // Create hidden text links in the page
  useEffect(() => {
    // Find all text nodes and add secret triggers
    const addSecretTriggers = () => {
      // Secret: Click on any "music" word
      const musicElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
      
      musicElements.forEach(element => {
        if (element.textContent?.toLowerCase().includes('music')) {
          const handler = () => {
            playSecretAudio('/audio/alki/like-that.mp3', 'music_word_secret');
          };
          element.addEventListener('dblclick', handler);
        }

        // Secret: Click on any "artist" word
        if (element.textContent?.toLowerCase().includes('artist')) {
          const handler = () => {
            playSecretAudio('/audio/alki/writin-my-wrongs.mp3', 'artist_word_secret');
          };
          element.addEventListener('dblclick', handler);
        }

        // Secret: Click on any "record" word
        if (element.textContent?.toLowerCase().includes('record')) {
          const handler = () => {
            playSecretAudio('/audio/alki/regrets.mp3', 'record_word_secret');
          };
          element.addEventListener('dblclick', handler);
        }
      });
    };

    // Run after a short delay to ensure DOM is ready
    const timeout = setTimeout(addSecretTriggers, 1000);
    return () => clearTimeout(timeout);
  }, [playSecretAudio]);

  return (
    <>
      {/* Hidden audio element */}
      <audio 
        ref={audioRef}
        preload="none"
        onError={(e) => {
          console.error('Secret audio error:', e);
        }}
      />

      {/* Secret Menu */}
      {showSecretMenu && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            border: '2px solid #667eea',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            zIndex: 10001,
            color: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            maxWidth: '500px',
            animation: 'scaleIn 0.3s ease-out',
          }}
        >
          <button
            onClick={() => setShowSecretMenu(false)}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '35px',
              height: '35px',
              cursor: 'pointer',
              color: 'white',
              fontSize: '20px',
            }}
          >
            ×
          </button>

          <h2 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>
            🎵 Alki's Secret Vault 🎵
          </h2>

          <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px', textAlign: 'center' }}>
            You've discovered the hidden music collection!
          </p>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Discovered Secrets:</h3>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>
              {discoveredSecrets.size === 0 ? (
                <p style={{ opacity: 0.6 }}>No secrets discovered yet...</p>
              ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {(() => {
                    const secretsArray: string[] = [];
                    discoveredSecrets.forEach(secret => secretsArray.push(secret));
                    return secretsArray.map(secret => (
                      <li key={secret} style={{ padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        ✓ {secret.replace(/_/g, ' ').toUpperCase()}
                      </li>
                    ));
                  })()}
                </ul>
              )}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '10px' }}>
            <h3 style={{ fontSize: '14px', marginBottom: '10px', opacity: 0.8 }}>Secret Locations:</h3>
            <ul style={{ fontSize: '12px', opacity: 0.7, lineHeight: '1.8', paddingLeft: '20px' }}>
              <li>Triple-click top-left corner</li>
              <li>Double-click bottom-right corner</li>
              <li>Hold Shift + click 5 times</li>
              <li>Press Ctrl+Shift+A</li>
              <li>Scroll to middle and wait 3 seconds</li>
              <li>Double-click words: "music", "artist", "record"</li>
              <li>Type "alki" anywhere on the page</li>
              <li>Press Ctrl+Alt+M for music player</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '12px', opacity: 0.6 }}>
            Progress: {discoveredSecrets.size} / 8 secrets found
          </div>
        </div>
      )}

      {/* Corner indicators (subtle hints) */}
      <div
        style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          width: '30px',
          height: '30px',
          opacity: discoveredSecrets.has('corner_secret') ? 0.5 : 0.1,
          background: 'radial-gradient(circle, #667eea 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9997,
          transition: 'opacity 0.3s',
        }}
      />

      <div
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          width: '30px',
          height: '30px',
          opacity: discoveredSecrets.has('bottom_secret') ? 0.5 : 0.1,
          background: 'radial-gradient(circle, #764ba2 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9997,
          transition: 'opacity 0.3s',
        }}
      />

      {/* Animations */}
      <style jsx>{`
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

        @keyframes fadeOut {
          to {
            opacity: 0;
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
};

export default AlkiSecretLinks;