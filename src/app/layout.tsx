import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Chatbot } from '@/components/ui/Chatbot'

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
      <body className={inter.className}>
        <div className="min-h-screen bg-dark text-white">
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
