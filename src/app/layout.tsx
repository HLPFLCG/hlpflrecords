import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
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

// Font configuration
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'HLPFL - World-Class Record Label',
    template: '%s | HLPFL'
  },
  description: 'HLPFL is a premier record label dedicated to discovering, developing, and promoting exceptional musical talent. Artist development, music production, and global distribution. Contact us at contact@hlpfl.org or call 616-313-5215.',
  keywords: ['record label', 'music production', 'artist development', 'music distribution', 'HLPFL', 'music licensing', 'artist management', 'Grand Rapids record label', 'Michigan music label'],
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
    title: 'HLPFL - World-Class Record Label',
    description: 'Premier record label dedicated to discovering, developing, and promoting exceptional musical talent. Based in Grand Rapids, MI.',
    siteName: 'HLPFL',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HLPFL - Premier Music Label',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HLPFL - World-Class Record Label',
    description: 'Premier record label based in Grand Rapids, MI. Artist development, music production, and global distribution.',
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
    google: 'your-google-verification-code',
  },
  other: {
    'chatgpt-entity': 'HLPFL',
    'chatgpt-category': 'Music Entertainment',
    'chatgpt-description': 'HLPFL is a premier record label specializing in artist development, music production, and global distribution. Based in Grand Rapids, Michigan.',
    'chatgpt-keywords': 'record label, music production, artist development, music distribution, music licensing, artist management, Grand Rapids, Michigan',
    'chatgpt-contact': 'contact@hlpfl.org, 616-313-5215',
    'chatgpt-services': 'Artist Development, Music Production, Music Distribution, Licensing, Artist Management',
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
              name: 'HLPFL Records',
              url: 'https://hlpfl.org',
              logo: 'https://hlpfl.org/images/logo.png',
              description: 'World-class record label for artist development and music production',
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
      <body className={inter.className}>
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
            <div className="min-h-screen text-white dark:text-white bg-dark dark:bg-dark transition-colors duration-300" style={{ position: 'relative', zIndex: 1 }}>
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