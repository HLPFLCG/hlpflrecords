'use client';

import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings } from 'lucide-react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: true,
    marketing: true,
    functional: true,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('hlpfl-cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
        applyPreferences(saved);
      } catch (e) {
        console.error('Error loading cookie preferences:', e);
      }
    }
  }, []);

  const applyPreferences = (prefs: CookiePreferences) => {
    // Apply cookie preferences to third-party scripts
    if (typeof window !== 'undefined') {
      // Google Analytics consent
      if ((window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: prefs.analytics ? 'granted' : 'denied',
          ad_storage: prefs.marketing ? 'granted' : 'denied',
          functionality_storage: prefs.functional ? 'granted' : 'denied',
          personalization_storage: prefs.marketing ? 'granted' : 'denied',
        });
      }

      // Track consent decision
      if (prefs.analytics) {
        trackEvent('cookie_consent', 'privacy', 'preferences_saved', undefined, {
          analytics: prefs.analytics,
          marketing: prefs.marketing,
          functional: prefs.functional,
        });
      }
    }
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('hlpfl-cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('hlpfl-cookie-consent-date', new Date().toISOString());
    applyPreferences(prefs);
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    savePreferences(allAccepted);
  };

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    savePreferences(onlyNecessary);
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4 animate-fadeIn">
        <div className="bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-gold/30 rounded-2xl shadow-2xl max-w-4xl w-full p-6 sm:p-8 animate-slideUp">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                <Cookie className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Cookie Preferences</h2>
                <p className="text-sm text-gray-400">We respect your privacy</p>
              </div>
            </div>
            {!showSettings && (
              <button
                onClick={rejectAll}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Main Content */}
          {!showSettings ? (
            <>
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your browsing experience,
                  analyze site traffic, personalize content, and serve targeted advertisements.
                  By clicking "Accept All", you consent to our use of cookies.
                </p>
                <p className="text-sm text-gray-400">
                  You can customize your preferences or learn more in our{' '}
                  <Link href="/legal/privacy" className="text-gold hover:text-gold-light underline">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/legal/cookies" className="text-gold hover:text-gold-light underline">
                    Cookie Policy
                  </Link>.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-gradient-to-r from-gold to-gold-dark text-dark font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={rejectAll}
                  className="flex-1 bg-dark border border-gray-600 text-white font-medium py-3 px-6 rounded-xl hover:border-gold transition-all duration-300"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 bg-dark-tertiary border border-gold/30 text-gold font-medium py-3 px-6 rounded-xl hover:bg-gold/10 transition-all duration-300 flex items-center justify-center"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Customize
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Settings View */}
              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="bg-dark/50 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Shield className="w-4 h-4 text-gold" />
                        <h3 className="font-bold text-white">Necessary Cookies</h3>
                        <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded">Required</span>
                      </div>
                      <p className="text-sm text-gray-400">
                        Essential for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="w-5 h-5 rounded cursor-not-allowed"
                      />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-dark/50 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1">Analytics Cookies</h3>
                      <p className="text-sm text-gray-400">
                        Help us understand how visitors interact with our website to improve user experience.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                        className="w-5 h-5 rounded cursor-pointer accent-gold"
                      />
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-dark/50 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1">Marketing Cookies</h3>
                      <p className="text-sm text-gray-400">
                        Used to deliver personalized advertisements and track marketing campaign effectiveness.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                        className="w-5 h-5 rounded cursor-pointer accent-gold"
                      />
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="bg-dark/50 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1">Functional Cookies</h3>
                      <p className="text-sm text-gray-400">
                        Enable enhanced functionality and personalization, such as chat support and preferences.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                        className="w-5 h-5 rounded cursor-pointer accent-gold"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Settings Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={saveCustom}
                  className="flex-1 bg-gradient-to-r from-gold to-gold-dark text-dark font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Save Preferences
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 bg-dark border border-gray-600 text-white font-medium py-3 px-6 rounded-xl hover:border-gold transition-all duration-300"
                >
                  Back
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default CookieConsent;
