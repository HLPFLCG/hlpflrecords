'use client'

import React from 'react'
import Link from 'next/link'
import { Shield, Zap, Heart, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">Anti-Label</span> Solution
            </h2>
            
            <div className="space-y-4 text-gray-300 mb-8">
              <p className="leading-relaxed">
                <span className="text-white font-semibold">The music industry was designed to exploit artists.</span> Labels take your masters, control your career, and keep you broke while they get rich. We watched this happen to our friends, to our peers, and to artists we believed in. So we built something different.
              </p>
              
              <p className="leading-relaxed">
                HLFPL isn't a record label. We're not here to own your work or tell you what to create. We're here to give you the same power, resources, and advantages that labels have—<span className="text-amber-400 font-semibold">without having to sell your soul to get them</span>.
              </p>

              <p className="leading-relaxed">
                We believe artists shouldn't have to choose between independence and having the resources to compete. With HLFPL, you get both: <span className="text-orange-400 font-semibold">complete creative freedom</span> and <span className="text-yellow-400 font-semibold">professional-grade tools</span> to build a sustainable career on your own terms.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-amber-400" />
                </div>
                <div className="text-3xl font-bold text-amber-400 mb-1">6+</div>
                <div className="text-sm text-gray-400">Powerful Tools</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-8 w-8 text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-orange-400 mb-1">0%</div>
                <div className="text-sm text-gray-400">Contracts</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-1">100%</div>
                <div className="text-sm text-gray-400">Your Control</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-amber-400" />
                </div>
                <div className="text-3xl font-bold text-amber-400 mb-1">∞</div>
                <div className="text-sm text-gray-400">Potential</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/artist-portal">
                <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0">
                  Get The Tools
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-amber-500/50 hover:border-amber-400 text-amber-400 hover:text-amber-300">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-500/10 via-orange-600/10 to-yellow-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-bebas-neue)' }}>HLFPL</h3>
                <p className="text-amber-400 mb-4 text-xl font-semibold" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.05em' }}>
                  Tools, Not Contracts
                </p>
                <div className="flex justify-center space-x-2 mb-6">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  Your career, your control, your success. We provide the resources—you make the music.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg animate-float shadow-lg" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full animate-float shadow-lg" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full animate-float shadow-lg" style={{ animationDelay: '4s' }} />
          </div>
        </div>

        {/* Origin Story */}
        <div className="mt-16">
          <div className="glass rounded-2xl p-8 border border-amber-500/20">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-bebas-neue)' }}>Why We Built This</h3>
                <p className="text-gray-300 leading-relaxed">
                  Founded by artists who got tired of watching talented creatives get chewed up and spit out by an industry designed to exploit them. We've been in the rooms, seen the contracts, and experienced firsthand how the system is rigged against independent artists. So we built HLFPL as the toolkit we wished existed when we were starting out. Every resource, every tool, every partnership exists to level the playing field and give you the actual resources you need to build a sustainable career without surrendering control.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12 text-center">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <span className="text-white font-semibold">Our mission is simple:</span> Protect creatives from exploitation by providing the essential tools and resources they need to succeed on their own terms.
          </p>
        </div>
      </div>
    </section>
  )
}