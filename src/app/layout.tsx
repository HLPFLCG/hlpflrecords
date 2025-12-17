import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

// Dynamically import Chatbot with SSR disabled to avoid localStorage issues during build
const Chatbot = dynamic(() => import('@/components/ui/Chatbot').then(mod => ({ default: mod.Chatbot })), {
  ssr: false,
})

// Dynamically import StarfieldBackground with SSR disabled for Canvas API
const StarfieldBackground = dynamic(() => import('@/components/StarfieldBackground'), {
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
    default: 'HLPFL Records - World-Class Record Label',
    template: '%s | HLPFL Records'
  },
  description: 'HLPFL Records is a premier record label dedicated to discovering, developing, and promoting exceptional musical talent. Artist development, music production, and global distribution. Contact us at contact@hlpfl.org or call 616-313-5215.',
  keywords: ['record label', 'music production', 'artist development', 'music distribution', 'HLPFL Records', 'music licensing', 'artist management', 'Grand Rapids record label', 'Michigan music label'],
  authors: [{ name: 'HLPFL Records' }],
  creator: 'HLPFL Records',
  publisher: 'HLPFL Records',
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
    title: 'HLPFL Records - World-Class Record Label',
    description: 'Premier record label dedicated to discovering, developing, and promoting exceptional musical talent. Based in Grand Rapids, MI.',
    siteName: 'HLPFL Records',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HLPFL Records - Premier Music Label',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HLPFL Records - World-Class Record Label',
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
    // ChatGPT and AI-specific metadata
    'chatgpt-entity': 'HLPFL Records',
    'chatgpt-category': 'Music Entertainment',
    'chatgpt-description': 'HLPFL Records is a premier record label specializing in artist development, music production, and global distribution. Based in Grand Rapids, Michigan.',
    'chatgpt-keywords': 'record label, music production, artist development, music distribution, music licensing, artist management, Grand Rapids, Michigan',
    'chatgpt-contact': 'contact@hlpfl.org, 616-313-5215',
    'chatgpt-services': 'Artist Development, Music Production, Music Distribution, Licensing, Artist Management',
    'chatgpt-location': 'Grand Rapids, MI, United States',
    // Additional SEO tags
    'theme-color': '#c87941',
    'msapplication-TileColor': '#c87941',
    'apple-mobile-web-app-status-bar-style': '#c87941',
    // Business information
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#c87941" />
        <link rel="icon" href="/images/favicon/hlpflsymbolpnggradient.ico" />
        <link rel="apple-touch-icon" href="/images/favicon/hlpflsymbolpnggradient.png" />
      </head>
      <body className={inter.className}>
        <LoadingScreen />
        <StarfieldBackground />
        <div className="min-h-screen text-white" style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
          <Chatbot />
        </div>
      </body>
    </html>
  )
}
