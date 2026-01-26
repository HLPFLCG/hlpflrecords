'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ShoppingBag, Bell, ArrowLeft, Music, Shirt, Package } from 'lucide-react'

export default function StorePage() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,121,65,0.08)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(200,121,65,0.03)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(200,121,65,0.03)_1px,_transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-gold/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="hidden md:block absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-gold/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl border border-gold/30">
            <ShoppingBag className="w-12 h-12 text-gold" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gold/10 border border-gold/30 rounded-full">
            <Bell className="w-4 h-4 text-gold mr-2" />
            <span className="text-gold text-sm font-medium">Coming Soon</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
            HLPFL <span className="text-gold">Store</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            We're building something special. Official HLPFL merchandise, artist collaborations,
            and exclusive drops—all without the industry markup. Every purchase supports independent artists.
          </p>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="p-6 bg-dark-secondary/50 rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shirt className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-white font-semibold mb-2">Artist Merch</h3>
              <p className="text-gray-400 text-sm">Exclusive gear from HLPFL artists. 100% of profits go to the creators.</p>
            </div>
            <div className="p-6 bg-dark-secondary/50 rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Music className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-white font-semibold mb-2">Limited Drops</h3>
              <p className="text-gray-400 text-sm">Exclusive releases and collaborations you won't find anywhere else.</p>
            </div>
            <div className="p-6 bg-dark-secondary/50 rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-white font-semibold mb-2">No Markup</h3>
              <p className="text-gray-400 text-sm">Fair prices. No corporate greed. Just great products supporting artists.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="btn-premium group">
                <Bell className="mr-2 h-5 w-5" />
                Get Notified
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Countdown hint */}
          <p className="mt-12 text-gray-500 text-sm">
            Follow us on social media for launch updates and exclusive previews.
          </p>
        </div>
      </section>
    </div>
  )
}
