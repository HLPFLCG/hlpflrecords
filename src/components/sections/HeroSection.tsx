import React from 'react'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-white">HLPFL</span>
            <br />
            <span className="gradient-animate bg-clip-text text-transparent">Records</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            World-Class Record Label & Artist Development
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Discovering, developing, and promoting exceptional musical talent with cutting-edge production, 
            strategic guidance, and global distribution networks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link href="/artists">
              <Button size="lg" className="group">
                Our Artists
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Submit Your Music
              </Button>
            </Link>
            
            <Button variant="ghost" size="lg" className="text-gold">
              <Play className="mr-2 h-5 w-5" />
              Watch Showreel
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}