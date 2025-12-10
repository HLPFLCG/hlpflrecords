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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-gold">HLPFL Records</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 mb-8">
              <p className="leading-relaxed">
                HLPFL Records is a premier record label dedicated to discovering, developing, and promoting exceptional musical talent. 
                With decades of combined experience in the music industry, our team provides comprehensive support for artists at every stage of their career.
              </p>
              
              <p className="leading-relaxed">
                We believe in creating partnerships that go beyond traditional label relationships. Our artist-first approach ensures that 
                every artist we work with receives the personalized attention, resources, and strategic guidance needed to achieve their unique vision.
              </p>
              
              <p className="leading-relaxed">
                From chart-topping hits to groundbreaking experimental projects, HLPFL Records has become synonymous with quality, innovation, 
                and success in the modern music landscape.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">50+</div>
                <div className="text-sm text-gray-400">Artists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">200+</div>
                <div className="text-sm text-gray-400">Releases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">1B+</div>
                <div className="text-sm text-gray-400">Streams</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">15+</div>
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
                <h3 className="text-2xl font-bold text-white mb-2">HLPFL Records</h3>
                <p className="text-gray-400 mb-4">Elevating artists to global recognition</p>
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