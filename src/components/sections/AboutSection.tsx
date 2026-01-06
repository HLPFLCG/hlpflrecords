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
              The <span className="text-gold">Anti-Label</span> Solution
            </h2>
            
            <div className="space-y-4 text-gray-300 mb-8">
              <p className="leading-relaxed">
                <span className="text-white font-semibold">The music industry was designed to exploit artists.</span> Labels take your masters, control your career, and keep you broke while they get rich. We watched this happen to our friends, to our peers, and to artists we believed in. So we built something different.
              </p>
              
              <p className="leading-relaxed">
                HLPFL isn't a record label. We're not here to own your work or tell you what to create. We're here to give you the same power, resources, and advantages that labels have—<span className="text-gold font-semibold">without having to sell your soul to get them</span>.
              </p>
              
              <p className="leading-relaxed">
                We believe artists shouldn't have to choose between independence and having the resources to compete. With HLPFL, you get both: <span className="text-gold font-semibold">complete creative freedom</span> and <span className="text-gold font-semibold">professional-grade tools</span> to build a sustainable career on your own terms.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">6+</div>
                <div className="text-sm text-gray-400">Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">0%</div>
                <div className="text-sm text-gray-400">Contracts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">100%</div>
                <div className="text-sm text-gray-400">Your Control</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">∞</div>
                <div className="text-sm text-gray-400">Potential</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/artist-portal">
                <Button>
                  Get The Tools
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline">
                  Learn More
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
                <p className="text-gray-400 mb-4" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>Tools, Not Contracts.</p>
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
