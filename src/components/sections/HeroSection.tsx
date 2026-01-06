'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Logo from '@/components/Logo'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background gradient with warm tones matching new logo */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,183,77,0.15)_0%,_rgba(121,85,72,0.1)_50%,_transparent_70%)]" />
      </div>
      
      {/* Premium animated background elements with warm gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-600/20 to-transparent rounded-full blur-3xl parallax-slow" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-orange-500/15 to-transparent rounded-full blur-3xl parallax-medium" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-full blur-2xl parallax-fast" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-400/12 to-transparent rounded-full blur-xl animate-float" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,183,77,0.05)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,183,77,0.05)_1px,_transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* Premium logo/brand area */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-2xl p-2" style={{ animation: 'pulse-gold 3s ease-in-out infinite' }}>
              <Logo width={80} height={80} className="w-full h-full" />
            </div>
          </div>

          {/* Main headline - Anti-label messaging */}
          <h1 className="text-fade-in">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 text-white leading-[0.9]">
              We're Not Here to<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">
                Sign You.
              </span>
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9]">
              We're Here to<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
                Set You Free.
              </span>
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-fade-in text-fade-in-delay-1 text-2xl sm:text-3xl md:text-4xl text-amber-400 font-bold max-w-4xl mx-auto leading-relaxed tracking-wide">
            Fuck big music. We built the toolkit to unfuck artists.
          </p>
          
          {/* Subheadline */}
          <p className="text-fade-in text-fade-in-delay-2 text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Everything you need to build your music career on your own terms—<span className="text-white font-semibold">no contracts</span>, <span className="text-white font-semibold">no exploitation</span>, <span className="text-white font-semibold">no bullshit</span>. Just powerful tools, real resources, and the support to actually make it happen.
          </p>
          
          {/* CTA Buttons */}
          <div className="text-fade-in text-fade-in-delay-3 flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <Link href="/artist-portal">
              <Button size="lg" className="btn-premium group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0">
                <Shield className="mr-3 h-5 w-5" />
                Get The Tools
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
            
            <Link href="/about">
              <Button variant="outline" size="lg" className="btn-premium group border-amber-500/50 hover:border-amber-400 text-amber-400 hover:text-amber-300">
                <Zap className="mr-3 h-5 w-5" />
                See What's Inside
              </Button>
            </Link>
          </div>

          {/* Value Proposition Stats */}
          <div className="text-fade-in text-fade-in-delay-4 grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 tracking-wider">6+</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Powerful Tools</div>
            </div>
            <div className="text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2 tracking-wider">0%</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Contracts</div>
            </div>
            <div className="text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2 tracking-wider">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Your Control</div>
            </div>
            <div className="text-center hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 tracking-wider">∞</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Potential</div>
            </div>
          </div>

          {/* Anti-label manifesto */}
          <div className="text-fade-in text-fade-in-delay-5 mt-16 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 border border-amber-500/20">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">The HLFPL Difference</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                <span className="text-amber-400 font-semibold">Labels want to own you.</span> We want to empower you. <span className="text-orange-400 font-semibold">Traditional music industry</span> thrives on exploitation. We thrive on <span className="text-yellow-400 font-semibold">artist independence</span>. Every tool, every resource, every partnership exists to level the playing field and give you the actual resources you need to build a sustainable career <span className="text-white font-bold">without surrendering control</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}