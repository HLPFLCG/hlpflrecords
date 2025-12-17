import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'HLPFL Records - World-Class Record Label',
    template: '%s | HLPFL Records'
  },
  description: 'HLPFL Records is a premier record label dedicated to discovering, developing, and promoting exceptional musical talent. Artist development, music production, and global distribution.',
  keywords: ['record label', 'music production', 'artist development', 'music distribution', 'HLPFL Records'],
  authors: [{ name: 'HLPFL Records' }],
  creator: 'HLPFL Records',
  publisher: 'HLPFL Records',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hlpflrecords.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hlpflrecords.com',
    title: 'HLPFL Records - World-Class Record Label',
    description: 'Premier record label dedicated to discovering, developing, and promoting exceptional musical talent.',
    siteName: 'HLPFL Records',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HLPFL Records',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HLPFL Records - World-Class Record Label',
    description: 'Premier record label dedicated to discovering, developing, and promoting exceptional musical talent.',
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
