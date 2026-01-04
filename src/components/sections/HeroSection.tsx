'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Music, Globe, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Logo from '@/components/Logo'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,121,65,0.1)_0%,_transparent_50%)]" />
      </div>
      
      {/* Premium animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-3xl parallax-slow" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-gold/15 to-transparent rounded-full blur-3xl parallax-medium" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-gold/10 to-transparent rounded-full blur-2xl parallax-fast" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-gold/8 to-transparent rounded-full blur-xl animate-float" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(200,121,65,0.03)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(200,121,65,0.03)_1px,_transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* Premium logo/brand area */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-br from-gold to-gold-dark rounded-2xl shadow-2xl p-2" style={{ animation: 'pulse-gold 3s ease-in-out infinite' }}>
              <Logo width={80} height={80} className="w-full h-full" />
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-fade-in">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-2 text-white leading-[0.9]">
              HLPFL
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-fade-in text-fade-in-delay-1 text-2xl sm:text-3xl md:text-4xl text-gold font-light max-w-4xl mx-auto leading-relaxed tracking-wide" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
            World-Class Record Label
          </p>
          
          {/* Mantra */}
          <p className="text-fade-in text-fade-in-delay-2 text-xl sm:text-2xl md:text-3xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
            Discover. Develop. Distribute.
          </p>
          
          {/* Description */}
          <p className="text-fade-in text-fade-in-delay-3 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Acting as the filter of excellence in a saturated music market; bridging the gap between raw talent 
            and global legacy through professional development, high-end production, and strategic distribution.
          </p>
          
          {/* CTA Buttons */}
          <div className="text-fade-in text-fade-in-delay-4 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/artists">
              <Button size="lg" className="btn-premium group">
                <Users className="mr-3 h-5 w-5" />
                Our Artists
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="outline" size="lg" className="btn-premium group">
                <Music className="mr-3 h-5 w-5" />
                Submit Your Music
              </Button>
            </Link>
          </div>

          {/* Stats/Metrics */}
          <div className="text-fade-in text-fade-in-delay-5 grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2 tracking-wider" style={{ fontFamily: 'var(--font-bebas-neue)' }}>5+</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Artists</div>
            </div>
            <div className="text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2 tracking-wider" style={{ fontFamily: 'var(--font-bebas-neue)' }}>50+</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Releases</div>
            </div>
            <div className="text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2 tracking-wider" style={{ fontFamily: 'var(--font-bebas-neue)' }}>5M+</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Streams</div>
            </div>
            <div className="text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2 tracking-wider" style={{ fontFamily: 'var(--font-bebas-neue)' }}>7+</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Years</div>
            </div>
          </div>
        </div>

        </div>

      {/* Floating elements for depth */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-gold/30 rounded-full animate-float" />
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-gold/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-32 w-2 h-2 bg-gold/25 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  )
}
