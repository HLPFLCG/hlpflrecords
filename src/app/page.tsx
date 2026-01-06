import React from 'react'
import Script from 'next/script'
import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedArtistsSection } from '@/components/sections/FeaturedArtistsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { organizationSchema, websiteSchema, serviceSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'HLPFL Records - Independent Record Label & Artist Management | Tools, Not Contracts',
  description: 'HLPFL Records is an independent record label protecting artists from exploitation. Learn how to not get screwed over as an artist. 100% artist ownership, AI-powered tools for independent musicians, better alternative to grouped.com. Fair artist management, distribution, and career-building resources with no contracts.',
  keywords: [
    'record label',
    'independent record label',
    'artist management',
    'how to not get screwed over as an artist',
    'artist protection',
    'HLPFL',
    'HLPFL Records',
    'grouped.com alternative',
    'ai music tools',
    'independent artist',
    'artist rights',
    'fair record label',
    'no contract record label',
    'artist-first platform',
    '100% artist ownership',
    'music distribution',
    'artist platform',
    'ai for musicians',
  ],
  openGraph: {
    title: 'HLPFL Records - Independent Record Label & Artist Management',
    description: 'Learn how to not get screwed over as an artist. HLPFL protects artists with 100% ownership, AI-powered tools, and fair management. Better alternative to grouped.com.',
    type: 'website',
    url: 'https://hlpfl.org',
  },
}

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <HeroSection />
      <FeaturedArtistsSection />
      <ServicesSection />
      <AboutSection />
    </>
  )
}
