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
    default: 'HLPFL Inc - Empowering Creative Entrepreneurs | Zero Upfront Costs',
    template: '%s | HLPFL Inc'
  },
  description: 'HLPFL Inc is a Wyoming 501(c)(3) nonprofit providing commission-only business development services for creative entrepreneurs—inventors, artists, musicians, designers, and writers. Zero upfront costs. We earn when you earn.',
  keywords: [
    'HLPFL',
    'HLPFL Inc',
    'nonprofit',
    'creative entrepreneurs',
    'business development',
    'commission only',
    'zero upfront costs',
    'inventor support',
    'artist support',
    'musician support',
    'designer support',
    'writer support',
    'brand development',
    'sales representation',
    'marketing strategy',
    'entity formation',
    'contract negotiation',
    'creative business',
    'entrepreneur resources',
    '501c3 nonprofit',
    'Wyoming nonprofit',
    'fair treatment creators',
    'creator protection',
    'creative advocacy',
    'no exploitation',
    'aligned incentives',
    'we earn when you earn',
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
    title: 'HLPFL Inc - Empowering Creative Entrepreneurs',
    description: 'Wyoming 501(c)(3) nonprofit providing commission-only business development for creative entrepreneurs. Zero upfront costs. We earn when you earn.',
    images: ['/images/og-image.jpg'],
    creator: '@hlpfl_',
    site: '@hlpfl_',
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
    'chatgpt-category': 'Nonprofit, Business Development, Creative Entrepreneurs',
    'chatgpt-description': 'HLPFL Inc is a Wyoming 501(c)(3) nonprofit providing commission-only business development services for creative entrepreneurs—inventors, artists, musicians, designers, and writers. Zero upfront costs. We advocate for fair treatment, equitable compensation, and protection of rights for creators.',
    'chatgpt-keywords': 'nonprofit, 501c3, creative entrepreneurs, business development, commission only, zero upfront costs, inventor support, artist support, brand development, sales representation, marketing, contract negotiation',
    'chatgpt-contact': 'contact@hlpfl.org',
    'chatgpt-services': 'Brand Development, Business Entity Formation, Sales Representation, Marketing Strategy, Content Creation, Social Media Management, Contract Negotiation Support',
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
              '@type': ['Organization', 'NGO', 'NonprofitOrganization'],
              name: 'HLPFL Inc',
              alternateName: 'HLPFL',
              legalName: 'HLPFL Inc',
              url: 'https://hlpfl.org',
              logo: 'https://hlpfl.org/logo.svg',
              image: 'https://hlpfl.org/images/og-image.jpg',
              description: 'HLPFL Inc is a Wyoming 501(c)(3) nonprofit providing commission-only business development services for creative entrepreneurs—inventors, artists, musicians, designers, and writers. Zero upfront costs. We earn when you earn.',
              slogan: 'Empowering Creative Entrepreneurs',
              foundingDate: '2009',
              email: 'contact@hlpfl.org',
              telephone: '+1-616-313-5215',
              nonprofitStatus: '501(c)(3)',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Grand Rapids',
                addressRegion: 'MI',
                addressCountry: 'US',
              },
              areaServed: {
                '@type': 'Country',
                name: 'United States',
              },
              founder: {
                '@type': 'Person',
                name: 'James Rockel III',
                jobTitle: 'Founder & CEO',
              },
              knowsAbout: [
                'Business Development',
                'Brand Development',
                'Sales Representation',
                'Marketing Strategy',
                'Contract Negotiation',
                'Creative Entrepreneurs',
                'Inventors',
                'Artists',
                'Musicians',
                'Designers',
                'Writers',
                'Nonprofit Services',
                'Commission-Only Model',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Business Development Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Brand Development & Identity',
                      description: 'Strategy, visual identity, market positioning, and messaging guidelines for creative entrepreneurs',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Business Entity Formation',
                      description: 'LLC setup, registration support, EIN assistance, and compliance guidance',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Sales Representation',
                      description: 'Direct outreach, deal negotiation, client management, and revenue optimization',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Marketing Strategy & Execution',
                      description: 'Go-to-market strategy, content marketing, PR, and campaign execution',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Contract Negotiation Support',
                      description: 'Contract review, rights education, negotiation support, and red flag identification',
                    },
                  },
                ],
              },
              sameAs: [
                'https://www.instagram.com/hlpfl_/',
                'https://x.com/hlpfl_',
                'https://linkedin.com/company/hlpfl',
              ],
            }),
          }}
        />

        {/* Structured Data - FAQPage for Nonprofit Services */}
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
                    text: 'HLPFL Inc is a Wyoming 501(c)(3) nonprofit organization providing commission-only business development services for creative entrepreneurs—inventors, artists, musicians, designers, and writers. We advocate for fair treatment, equitable compensation, and protection of rights for creators.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How does the commission-only model work?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'HLPFL provides business development services with zero upfront costs. We invest our time and resources in you first—handling sales, marketing, and business operations. We only earn a commission (typically 15-30%) when we help you make money. Our incentives are completely aligned with yours.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Who does HLPFL serve?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'HLPFL serves creative entrepreneurs across five disciplines: inventors (patent holders, product developers), visual artists (painters, illustrators, photographers), musicians (artists, producers, bands), designers (industrial, fashion, UX/UI), and writers (authors, screenwriters, content creators).',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What services does HLPFL provide?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'HLPFL provides brand development and identity, business entity formation, sales representation, marketing strategy and execution, content creation and social media management, and contract negotiation support—all with zero upfront costs.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is there any cost to apply?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No. There are zero upfront costs to partner with HLPFL. We do not charge fees, deposits, or subscriptions. We only earn when we help you make money. This is our commission-only model that ensures our success depends on your success.',
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