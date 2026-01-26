'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import Logo from '@/components/Logo'

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
              F*ck The <span className="text-gold">Gatekeepers</span>
            </h2>

            <div className="space-y-4 text-gray-300 mb-8">
              <p className="leading-relaxed">
                <span className="text-white font-semibold">The creative industry is designed to f*ck you over.</span> VCs want your equity. Labels want your masters. Managers want their cut. Everyone wants a piece of what you built—until there's nothing left for you.
              </p>

              <p className="leading-relaxed">
                We watched it happen. Hell, <span className="text-gold font-semibold">it happened to us</span>. We lost the love of the game because someone saw dollar signs where we saw dreams.
              </p>

              <p className="leading-relaxed">
                So we built HLPFL. Not to get rich. Not to "invest" in you. Just to give you the resources you need—<span className="text-gold font-semibold">with no strings, no cuts, no bullshit</span>. This is for the creators.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">2</div>
                <div className="text-sm text-gray-400">Artists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">0%</div>
                <div className="text-sm text-gray-400">We Take</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">100%</div>
                <div className="text-sm text-gray-400">Yours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">0</div>
                <div className="text-sm text-gray-400">Strings</div>
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
            <div className="aspect-square bg-gradient-to-br from-gold/10 to-dark-tertiary rounded-2xl flex items-center justify-center border border-gold/20">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gold/30">
                  <Logo width={90} height={90} />
                </div>
                <h3 className="text-3xl font-black text-white mb-2 tracking-tight" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>HLPFL Inc</h3>
                <p className="text-gold mb-4 text-lg" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>No Strings. No Bullshit.</p>
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
