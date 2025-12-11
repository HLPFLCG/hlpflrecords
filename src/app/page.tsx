import React from 'react'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedArtistsSection } from '@/components/sections/FeaturedArtistsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AboutSection } from '@/components/sections/AboutSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedArtistsSection />
      <ServicesSection />
      <AboutSection />
    </>
  )
}
