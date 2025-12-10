import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'HLPFL Records | Revolutionizing the Music Industry',
    template: '%s | HLPFL Records'
  },
  description: 'HLPFL Records is transforming the music industry with artist-first partnerships, cutting-edge technology, and comprehensive development resources. Join the future of music entertainment.',
  keywords: ['record label', 'music industry', 'artist development', 'A&R', 'music production', 'distribution', 'music marketing'],
  authors: [{ name: 'HLPFL Records' }],
  creator: 'HLPFL Records',
  publisher: 'HLPFL Records',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hlpflrecords.com',
    siteName: 'HLPFL Records',
    title: 'HLPFL Records | Revolutionizing the Music Industry',
    description: 'Transforming musical talent into success stories with 50/50 artist partnerships and comprehensive development programs.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HLPFL Records - Revolutionizing the Music Industry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HLPFL Records | Revolutionizing the Music Industry',
    description: 'Transforming musical talent into success stories with 50/50 artist partnerships and comprehensive development programs.',
    images: ['/og-image.jpg'],
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
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, 'min-h-screen bg-primary text-text')}>
        {children}
      </body>
    </html>
  )
}