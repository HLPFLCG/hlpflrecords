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
    default: 'HLFPL - Tools, Not Contracts',
    template: '%s | HLFPL'
  },
  description: 'HLFPL is the comprehensive resource platform for creative artists. We provide the tools, resources, and support you need to build a successful music career on your own terms. No contracts. No exploitation. No bullshit.',
  keywords: ['artist toolkit', 'music resources', 'independent artist', 'music distribution', 'HLFPL', 'artist platform', 'career tools', 'music business', 'artist independence', 'DIY music'],
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
    title: 'HLFPL - Tools, Not Contracts',
    description: 'HLFPL is the comprehensive resource platform for creative artists. We provide the tools, resources, and support you need to build a successful music career on your own terms.',
    siteName: 'HLFPL',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HLFPL - Tools, Not Contracts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HLFPL - Tools, Not Contracts',
    description: 'HLFPL is the comprehensive resource platform for creative artists. We provide the tools, resources, and support you need to build a successful music career on your own terms.',
    images: ['/images/og-image.jpg'],
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
    'chatgpt-entity': 'HLFPL',
    'chatgpt-category': 'Music Entertainment',
    'chatgpt-description': 'HLFPL is the comprehensive resource platform for creative artists. We provide tools, resources, and support for independent musicians to build successful careers on their own terms.',
    'chatgpt-keywords': 'artist toolkit, music resources, independent artist, music distribution, HLFPL, artist platform, career tools, artist independence',
    'chatgpt-contact': 'contact@hlpfl.org, 616-313-5215',
    'chatgpt-services': 'Artist Tools, Music Distribution, Social Media Management, Form Builder, Link in Bio',
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
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'HLFPL',
              url: 'https://hlpfl.org',
              logo: 'https://hlpfl.org/images/logo.png',
              description: 'Comprehensive resource platform for creative artists providing tools and resources to build successful music careers',
              email: 'contact@hlpfl.org',
              telephone: '+1-616-313-5215',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Grand Rapids',
                addressRegion: 'MI',
                addressCountry: 'US',
              },
              sameAs: [
                'https://instagram.com/hlpfl',
                'https://twitter.com/hlpfl',
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