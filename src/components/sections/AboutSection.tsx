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
            <span className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
              501(c)(3) Nonprofit
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
              Why <span className="text-gold">Commission-Only?</span>
            </h2>

            <div className="space-y-4 text-gray-300 mb-8">
              <p className="leading-relaxed">
                <span className="text-white font-semibold">Traditional services charge thousands upfront with no guaranteed results.</span> They profit whether you succeed or not. Their incentives aren&apos;t aligned with yours.
              </p>

              <p className="leading-relaxed">
                We do the opposite. <span className="text-gold font-semibold">We invest our time and resources in you first</span>. We handle your sales, marketing, and business operations. We only earn when we help you make money.
              </p>

              <p className="leading-relaxed">
                That&apos;s real alignment. If we don&apos;t help you succeed, we don&apos;t get paid. <span className="text-gold font-semibold">We earn when you earn</span>—that&apos;s how it should work.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">$0</div>
                <div className="text-sm text-gray-400">Upfront</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">100%</div>
                <div className="text-sm text-gray-400">Your Work</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">5</div>
                <div className="text-sm text-gray-400">Disciplines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">Aligned</div>
                <div className="text-sm text-gray-400">Incentives</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button>
                  See Our Services
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
                <p className="text-gold mb-4 text-lg" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>We Earn When You Earn</p>
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
