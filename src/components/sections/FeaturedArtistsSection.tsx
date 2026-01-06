'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { mockArtists } from '@/data/mockData'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function FeaturedArtistsSection() {
  return (
    <section className="py-20 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
            Artists Using <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">HLFPL Tools</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Independent artists building successful careers on their own terms. See how they're using HLFPL's toolkit to create, distribute, and monetize their music.
          </p>
          <Link href="/artists">
            <Button variant="outline" className="border-amber-500/50 hover:border-amber-400 text-amber-400 hover:text-amber-300">
              View All Artists
            </Button>
          </Link>
        </div>

        {/* Artists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockArtists.map((artist, index) => (
            <Card key={artist.id} hover className="overflow-hidden group">
              <div className="relative aspect-square overflow-hidden">
                {artist.image && (
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${artist.image})` }}
                  />
                )}
                {!artist.image && (
                  <div className="w-full h-full bg-gradient-to-br from-amber-500/20 via-orange-600/20 to-yellow-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-500/30 to-orange-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-amber-400 text-2xl font-bold">
                          {artist.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">Artist Image</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {artist.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {artist.genre.join(' • ')}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {artist.bio}
                </p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-amber-400 hover:text-amber-300"
                  onClick={() => alert(`Artist profile for ${artist.name} coming soon!`)}
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA for New Artists */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-amber-500/20">
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
              Build Your Own Success Story
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of independent artists who are taking control of their careers with HLFPL's toolkit. No applications, no approval needed—you're already approved.
            </p>
            <Link href="/artist-portal">
              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}