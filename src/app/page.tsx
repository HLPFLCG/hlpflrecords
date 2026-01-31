import React from 'react'
import Script from 'next/script'
import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedArtistsSection } from '@/components/sections/FeaturedArtistsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { organizationSchema, websiteSchema, serviceSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'HLPFL Inc - Nonprofit for Creatives & Entrepreneurs | Tools, Not Contracts',
  description: 'HLPFL Inc is a nonprofit empowering creatives and entrepreneurs with the tools and resources they need to succeed on their own terms. 100% ownership of your work, no contracts, no strings attached. Resources for artists, designers, writers, filmmakers, and all creative professionals.',
  keywords: [
    'creative tools',
    'entrepreneur resources',
    'creator platform',
    'creative professionals',
    'HLPFL',
    'HLPFL Inc',
    'nonprofit for creatives',
    'tools for entrepreneurs',
    'creator ownership',
    'no contract platform',
    'creative-first platform',
    '100% ownership',
    'content distribution',
    'creative resources',
    'tools for creators',
  ],
  openGraph: {
    title: 'HLPFL Inc - Nonprofit for Creatives & Entrepreneurs',
    description: 'HLPFL Inc empowers creatives and entrepreneurs with tools and resources to succeed on their own terms. 100% ownership, no contracts, no strings.',
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
