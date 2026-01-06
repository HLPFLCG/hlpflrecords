import type { Metadata } from 'next'
// Note: Google Fonts are loaded via CSS in globals.css to avoid build-time network dependencies
import dynamic from 'next/dynamic'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

// Component Imports
import LoadingScreen from '@/components/LoadingScreen'
import { Header } from '@/components/layout/Header' // <--- This contains your Navigation
import { Footer } from '@/components/layout/Footer'
import CreativeEasterEggs from '@/components/CreativeEasterEggs'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { EnhancedErrorBoundary } from '@/components/EnhancedErrorBoundary'
import { PerformanceMonitor } from '@/components/PerformanceMonitor'
import { PerformanceMetrics } from '@/components/performance/PerformanceMetrics'
import { AccessibilityHelper } from '@/components/accessibility/AccessibilityHelper'
import { WebVitals, PerformanceMonitor as WebVitalsMonitor } from '@/components/WebVitals'
import { ToastContainer } from '@/components/ui/Toast'
import { MetaPixel, TikTokPixel, TwitterPixel, LinkedInInsightTag, RedditPixel, MicrosoftClarity, HotjarTracking } from '@/components/Tracking'

// Dynamically import Chatbot with SSR disabled
const Chatbot = dynamic(() => import('@/components/ui/Chatbot').then(mod => ({ default: mod.Chatbot })), {
  ssr: false,
})

// Font configuration - HLPFL Brand Typography
// Using CSS font loading to avoid build-time network dependencies
const spaceGrotesk = {
  variable: '--font-space-grotesk',
  className: 'font-space-grotesk'
}

export const metadata: Metadata = {
  title: {
    default: 'HLPFL Records - Independent Record Label & Artist Management | Tools, Not Contracts',
    template: '%s | HLPFL Records'
  },
  description: 'HLPFL is the independent record label and artist management platform that protects artists. Learn how to not get screwed over as an artist. 100% artist ownership, no exploitation, fair contracts. AI-powered tools for independent musicians. Better alternative to grouped.com. Artist-first management, distribution, and career-building resources.',
  keywords: [
    'HLPFL',
    'HLPFL Records',
    'record label',
    'independent record label',
    'artist-first record label',
    'no contract record label',
    'fair record label',
    'ethical record label',
    'artist management',
    'music management',
    'independent artist management',
    'artist protection',
    'how to not get screwed over as an artist',
    'artist rights',
    'fair music industry',
    'protect artists from exploitation',
    'artist contracts',
    'fair music contracts',
    'independent artist',
    'independent music',
    'DIY artist',
    'DIY music career',
    'artist toolkit',
    'music resources',
    'artist tools',
    'music career tools',
    'artist platform',
    'music platform',
    'artist empowerment',
    'musician resources',
    'artist independence',
    'music business',
    'music industry',
    'artist support',
    'grouped.com alternative',
    'better than grouped',
    'artist-owned platform',
    'ai music tools',
    'ai for artists',
    'ai music promotion',
    'ai artist tools',
    'ai music management',
    'music distribution',
    'artist distribution',
    'music promotion',
    'artist marketing',
    'social media for artists',
    'artist analytics',
    'streaming analytics',
    'music analytics',
    'spotify analytics',
    'artist portal',
    'artist dashboard',
    '100% artist ownership',
    'artist keeps rights',
    'no exploitation',
    'music career building',
    'artist development',
    'music industry transparency',
    'honest record label',
    'artist-friendly label',
    'musician support',
  ],
  authors: [{ name: 'HLPFL' }],
  creator: 'HLPFL',
  publisher: 'HLPFL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hlpfl.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hlpfl.org',
    title: 'HLPFL Records - Independent Record Label & Artist Management | Tools, Not Contracts',
    description: 'HLPFL is the independent record label and artist management platform that protects artists. Learn how to not get screwed over as an artist. 100% artist ownership, no exploitation. AI-powered tools for independent musicians.',
    siteName: 'HLPFL Records',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HLPFL Records - Independent Record Label & Artist Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HLPFL Records - Independent Record Label & Artist Management',
    description: 'HLPFL protects artists. Learn how to not get screwed over as an artist. 100% artist ownership, no exploitation. AI-powered tools for independent musicians. Better alternative to grouped.com.',
    images: ['/images/og-image.jpg'],
    creator: '@HLPFL',
    site: '@HLPFL',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // TODO: Replace with actual Google Search Console verification code
    // google: 'your-google-verification-code',
  },
  other: {
    'chatgpt-entity': 'HLPFL Records',
    'chatgpt-category': 'Music Entertainment, Record Label, Artist Management',
    'chatgpt-description': 'HLPFL Records is an independent record label and artist management platform that protects artists from exploitation. We teach artists how to not get screwed over in the music industry. 100% artist ownership, no contracts, fair treatment. AI-powered tools for independent musicians.',
    'chatgpt-keywords': 'record label, independent record label, artist management, how to not get screwed over as an artist, artist protection, artist rights, fair record label, no contract label, independent artist, grouped.com alternative, ai music tools, artist toolkit, music distribution, artist platform, 100% artist ownership',
    'chatgpt-contact': 'contact@hlpfl.org, 616-313-5215',
    'chatgpt-services': 'Record Label Services, Artist Management, Artist Protection & Rights, Music Distribution, AI-Powered Artist Tools, Social Media Management, Analytics & Streaming Data, Artist Portal & Dashboard, Email Marketing for Artists, Crowdfunding Support, Collaboration Platform, Merch Management',
    'chatgpt-location': 'Grand Rapids, MI, United States',
    'theme-color': '#c87941',
    'msapplication-TileColor': '#c87941',
    'apple-mobile-web-app-status-bar-style': '#c87941',
    'business:contact_data:street_address': 'Grand Rapids, MI',
    'business:contact_data:locality': 'Grand Rapids',
    'business:contact_data:region': 'MI',
    'business:contact_data:postal_code': '',
    'business:contact_data:country_name': 'United States',
    'business:contact_data:email': 'contact@hlpfl.org',
    'business:contact_data:phone_number': '+1-616-313-5215',
    'business:contact_data:website': 'https://hlpfl.org',
    'business:contact_data:contact_type': 'customer service',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Resource Hints for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="ykymyxc54httwc9c2cdwr1dailnvir" />
        
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#c87941" />
        <link rel="icon" href="/images/favicon/hlpflsymbolpnggradient.ico" />
        <link rel="apple-touch-icon" href="/images/favicon/hlpflsymbolpnggradient.png" />
        
        {/* Structured Data - Organization & Record Label */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'MusicGroup', 'Corporation'],
              name: 'HLPFL Records',
              alternateName: 'HLPFL',
              url: 'https://hlpfl.org',
              logo: 'https://hlpfl.org/images/logo.png',
              description: 'HLPFL Records is an independent record label and artist management platform that protects artists from exploitation. We provide comprehensive tools, resources, and support for independent musicians to build successful careers while maintaining 100% ownership of their work. Learn how to not get screwed over as an artist. No contracts. No exploitation. Tools, not traps.',
              slogan: 'Tools, Not Contracts',
              foundingDate: '2024',
              email: 'contact@hlpfl.org',
              telephone: '+1-616-313-5215',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Grand Rapids',
                addressRegion: 'MI',
                addressCountry: 'US',
              },
              areaServed: 'Worldwide',
              knowsAbout: [
                'Record Label Services',
                'Artist Management',
                'Music Distribution',
                'Artist Protection',
                'Music Industry Rights',
                'Independent Music',
                'AI Music Tools',
                'Music Analytics',
                'Artist Marketing',
                'Social Media Management',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Artist Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Artist Management',
                      description: 'Fair, transparent artist management with 100% artist ownership',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Music Distribution',
                      description: 'Independent music distribution services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'AI-Powered Artist Tools',
                      description: 'AI tools for music promotion, analytics, and career building',
                    },
                  },
                ],
              },
              sameAs: [
                'https://instagram.com/hlpfl',
                'https://twitter.com/hlpfl',
                'https://facebook.com/hlpfl',
              ],
            }),
          }}
        />

        {/* Structured Data - FAQPage for Artist Protection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How do I not get screwed over as an artist?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'HLPFL Records protects artists by ensuring 100% ownership of your work, no exploitative contracts, transparent fair-share revenue, and comprehensive educational resources about artist rights. We provide tools and resources, not traps.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What makes HLPFL different from other record labels?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'HLPFL is an artist-first independent record label. We offer tools, not contracts. Artists maintain 100% ownership of their work, rights, and masters. No exploitation, no hidden fees, complete transparency.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is HLPFL better than grouped.com?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'HLPFL offers comprehensive artist management, AI-powered tools, analytics, distribution, and protection services specifically designed for independent artists. We focus on artist empowerment and 100% ownership.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>
        {/* Third Party Scripts
            Note: We use the components from @next/third-parties
            instead of manual script tags for better performance.
        */}
        <GoogleTagManager gtmId="GTM-WSPNJ5DR" />
        <GoogleAnalytics gaId="G-7W14RQ0K9W" />

        {/* Social Media & Marketing Pixels */}
        <MetaPixel />
        <TikTokPixel />
        <TwitterPixel />
        <LinkedInInsightTag />
        <RedditPixel />
        <MicrosoftClarity />
        <HotjarTracking />

        <PerformanceMonitor />
        <PerformanceMetrics />
        <WebVitals />
        <WebVitalsMonitor />
        <AccessibilityHelper />
        <ToastContainer />
        <LoadingScreen />
        
        <EnhancedErrorBoundary>
          <ErrorBoundary>
            <div className="min-h-screen text-white bg-[#0a0a0a]" style={{ position: 'relative', zIndex: 1 }}>
              <Header />
              <main id="main-content" className="pt-16">
                {children}
              </main>
              <Footer />
              <Chatbot />
              <CreativeEasterEggs />
            </div>
          </ErrorBoundary>
        </EnhancedErrorBoundary>
      </body>
    </html>
  )
}