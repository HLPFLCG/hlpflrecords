import React from 'react'
import Script from 'next/script'
import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedArtistsSection } from '@/components/sections/FeaturedArtistsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { organizationSchema, websiteSchema, serviceSchema } from '@/lib/structuredData'

export const metadata: Metadata = {
  title: 'HLPFL Inc - Empowering Creative Entrepreneurs | Zero Upfront Costs',
  description: 'HLPFL Inc is a Wyoming 501(c)(3) nonprofit providing commission-only business development services for creative entrepreneurs—inventors, artists, musicians, designers, and writers. Zero upfront costs. We earn when you earn.',
  keywords: [
    'creative entrepreneurs',
    'business development',
    'nonprofit for creatives',
    'HLPFL',
    'HLPFL Inc',
    'commission only',
    'zero upfront costs',
    'creator support',
    'brand development',
    'sales representation',
    '501c3 nonprofit',
    'inventor support',
    'artist support',
    'designer support',
  ],
  openGraph: {
    title: 'HLPFL Inc - Empowering Creative Entrepreneurs',
    description: 'Wyoming 501(c)(3) nonprofit providing commission-only business development services. Zero upfront costs. We earn when you earn.',
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
