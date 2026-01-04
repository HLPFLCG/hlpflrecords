'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
              About <span className="text-gold">HLPFL</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 mb-8">
              <p className="leading-relaxed">
                HLPFL Records acts as the filter of excellence in a saturated music market; bridging the gap between raw talent and global legacy through professional development, high-end production, and strategic distribution.
              </p>
              
              <p className="leading-relaxed">
                We don't follow trends; we set the standard. We build careers, not just viral moments. We think in 5-year plans, not 15-second clips.
              </p>
              
              <p className="leading-relaxed">
                We are proudly Grand Rapids-based, exporting the "Midwest Sound" to the world. In an industry of bright, noisy pop marketing, we represent the cool confidence of the studio at 2 AM.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">1</div>
                <div className="text-sm text-gray-400">Artists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">37+</div>
                <div className="text-sm text-gray-400">Releases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">5m+</div>
                <div className="text-sm text-gray-400">Streams</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">6</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button>
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/team">
                <Button variant="outline">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gold/10 to-dark-tertiary rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-4xl font-bold">H</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">HLPFL</h3>
                <p className="text-gray-400 mb-4" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>Discover. Develop. Distribute.</p>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold rounded-lg animate-float" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gold/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
