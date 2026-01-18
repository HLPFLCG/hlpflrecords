import type { Metadata } from 'next'
// Note: Google Fonts are loaded via CSS in globals.css to avoid build-time network dependencies
import './globals.css'

// Component Imports
import LoadingScreen from '@/components/LoadingScreen'
import { Header } from '@/components/layout/Header' // <--- This contains your Navigation
import { Footer } from '@/components/layout/Footer'
import CreativeEasterEggs from '@/components/CreativeEasterEggs'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { EnhancedErrorBoundary } from '@/components/EnhancedErrorBoundary'
import { AccessibilityHelper } from '@/components/accessibility/AccessibilityHelper'
import { ToastContainer } from '@/components/ui/Toast'
import { ChatbotWrapper } from '@/components/ui/ChatbotWrapper'

// Font configuration - HLPFL Brand Typography
// Using CSS font loading to avoid build-time network dependencies
const spaceGrotesk = {
  variable: '--font-space-grotesk',
  className: 'font-space-grotesk'
}

export const metadata: Metadata = {
  title: {
    default: 'HLPFL Inc - Nonprofit Taking Creative Ideas to Reality | Innovation & Support',
    template: '%s | HLPFL Inc'
  },
  description: 'HLPFL Inc is a nonprofit organization dedicated to taking creative ideas to reality. We provide tools, resources, and support for creators, innovators, and dreamers to bring their visions to life. Zero tracking, zero data collection - just tools that work.',
  keywords: [
    'HLPFL',
    'HLPFL Inc',
    'nonprofit',
    'creative nonprofit',
    'innovation nonprofit',
    'creative ideas',
    'ideas to reality',
    'bring ideas to life',
    'creative support',
    'innovation support',
    'creator tools',
    'creative tools',
    'innovation platform',
    'creative platform',
    'support for creators',
    'help for innovators',
    'creative resources',
    'innovation resources',
    'dream to reality',
    'make ideas happen',
    'creative empowerment',
    'innovation empowerment',
    'creator support',
    'creative community',
    'innovation community',
    'creative assistance',
    'project support',
    'creative projects',
    'innovation projects',
    'startup support',
    'creative startup',
    'idea development',
    'concept to creation',
    'creative development',
    'innovation development',
    'creator platform',
    'creative hub',
    'innovation hub',
    'zero tracking',
    'no data collection',
    'privacy-first platform',
    'ethical nonprofit',
    'transparent nonprofit',
    'community driven',
    'creator focused',
    'innovation focused',
  ],
  authors: [{ name: 'HLPFL Inc' }],
  creator: 'HLPFL Inc',
  publisher: 'HLPFL Inc',
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
    title: 'HLPFL Inc - Nonprofit Taking Creative Ideas to Reality',
    description: 'HLPFL Inc is a nonprofit dedicated to taking creative ideas to reality. We provide tools, resources, and support for creators and innovators to bring their visions to life.',
    siteName: 'HLPFL Inc',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HLPFL Inc - Taking Creative Ideas to Reality',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HLPFL Inc - Nonprofit Taking Creative Ideas to Reality',
    description: 'HLPFL Inc is a nonprofit dedicated to taking creative ideas to reality. We provide tools, resources, and support for creators and innovators.',
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
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  applicationName: 'HLPFL Inc',
  referrer: 'origin-when-cross-origin',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'HLPFL Inc',
    startupImage: [
      {
        url: '/images/og-image.jpg',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  category: 'Nonprofit',
  other: {
    'chatgpt-entity': 'HLPFL Inc',
    'chatgpt-category': 'Nonprofit, Creative Innovation, Idea Development',
    'chatgpt-description': 'HLPFL Inc is a nonprofit organization dedicated to taking creative ideas to reality. We provide tools, resources, mentorship, and support to help creators, innovators, and dreamers bring their visions to life. Community-driven, transparent, and creator-focused.',
    'chatgpt-keywords': 'nonprofit, creative nonprofit, innovation nonprofit, creative ideas, ideas to reality, creative support, innovation support, creator tools, creative platform, project support, idea development, creative community, innovation hub',
    'chatgpt-contact': 'contact@hlpfl.org, 616-313-5215',
    'chatgpt-services': 'Creative Project Support, Idea Development, Innovation Resources, Creator Tools, Mentorship Programs, Community Support, Project Funding Guidance, Creative Collaboration, Resource Access, Workshops & Education',
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
        {/* Enhanced Mobile & Viewport Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />

        {/* Resource Hints for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* SEO Verification */}
        <meta name="google-site-verification" content="" />
        <meta name="msvalidate.01" content="" />

        {/* PWA Manifest & Icons */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#c87941" />
        <meta name="msapplication-TileColor" content="#c87941" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="icon" href="/images/favicon/hlpflsymbolpnggradient.ico" />
        <link rel="apple-touch-icon" href="/images/favicon/hlpflsymbolpnggradient.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/hlpflsymbolpnggradient.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/hlpflsymbolpnggradient.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/hlpflsymbolpnggradient.png" />

        {/* Additional SEO */}
        <meta name="author" content="HLPFL Inc" />
        <meta name="copyright" content="HLPFL Inc" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <link rel="canonical" href="https://hlpfl.org" />
        
        {/* Structured Data - Organization & Nonprofit */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'NGO', 'Nonprofit'],
              name: 'HLPFL Inc',
              alternateName: 'HLPFL',
              url: 'https://hlpfl.org',
              logo: 'https://hlpfl.org/images/logo.png',
              description: 'HLPFL Inc is a nonprofit organization dedicated to taking creative ideas to reality. We provide comprehensive tools, resources, mentorship, and support for creators, innovators, and dreamers to bring their visions to life.',
              slogan: 'Taking Creative Ideas to Reality',
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
                'Creative Innovation',
                'Idea Development',
                'Project Support',
                'Creator Resources',
                'Innovation Tools',
                'Mentorship Programs',
                'Community Building',
                'Creative Collaboration',
                'Nonprofit Services',
                'Educational Workshops',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Creator Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Creative Project Support',
                      description: 'Comprehensive support to help bring creative ideas to life',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Innovation Resources',
                      description: 'Tools and resources for innovators and creators',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Mentorship Programs',
                      description: 'Guidance and mentorship for creative development',
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

        {/* Structured Data - FAQPage for Creative Support */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is HLPFL Inc?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'HLPFL Inc is a nonprofit organization dedicated to taking creative ideas to reality. We provide tools, resources, mentorship, and support to help creators, innovators, and dreamers bring their visions to life.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How does HLPFL Inc help creators?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'HLPFL Inc supports creators through comprehensive resources, mentorship programs, community collaboration, and tools designed to help turn creative ideas into reality. We focus on empowerment and practical support.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is HLPFL Inc free to use?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'As a nonprofit, HLPFL Inc is committed to making creative support accessible. We offer various free resources and programs to help creators at all stages of their journey.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>
        {/* Zero tracking - HLPFL Inc respects your privacy */}
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
              <ChatbotWrapper />
              <CreativeEasterEggs />
            </div>
          </ErrorBoundary>
        </EnhancedErrorBoundary>
      </body>
    </html>
  )
}