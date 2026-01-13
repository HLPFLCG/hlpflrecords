'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { mockArtists } from '@/data/mockData'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ExternalLink, Music2, Instagram } from 'lucide-react'

export function FeaturedArtistsSection() {
  return (
    <section className="py-20 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
            Featured <span className="text-gold">Artist</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Meet PRIV - an emerging artist building a successful career on their own terms using HLPFL's toolkit to create, distribute, and monetize their music.
          </p>
          <Link href="/artists">
            <Button variant="outline">
              View Artist Profile
            </Button>
          </Link>
        </div>

        {/* Artists Grid */}
        <div className="flex justify-center gap-8">
          {mockArtists.map((artist, _index) => (
            <Card key={artist.id} hover className="overflow-hidden group max-w-md w-full">
              <div className="relative aspect-square overflow-hidden">
                {artist.image && (
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                {!artist.image && (
                  <div className="w-full h-full bg-gradient-to-br from-gold/20 to-dark-tertiary flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-gold text-2xl font-bold">
                          {artist.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">Artist Image</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
                  {artist.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 font-medium">
                  {artist.genre.join(' • ')}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-3">
                  {artist.bio}
                </p>

                {/* Social Links */}
                {artist.socials && (
                  <div className="flex gap-2 mb-4">
                    {artist.socials.spotify && (
                      <a
                        href={artist.socials.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-gradient-to-br from-[#1DB954] to-[#1aa34a] hover:from-[#1aa34a] hover:to-[#1DB954] text-white rounded-lg transition-all flex items-center justify-center gap-2 text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105"
                        aria-label={`${artist.name} on Spotify`}
                      >
                        <Music2 className="w-4 h-4" />
                        Spotify
                      </a>
                    )}
                    {artist.socials.instagram && (
                      <a
                        href={artist.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-gradient-to-br from-[#E4405F] to-[#c13584] hover:from-[#c13584] hover:to-[#E4405F] text-white rounded-lg transition-all flex items-center justify-center gap-2 text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105"
                        aria-label={`${artist.name} on Instagram`}
                      >
                        <Instagram className="w-4 h-4" />
                        Instagram
                      </a>
                    )}
                  </div>
                )}

                <Link href={`/artists/${artist.slug}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group/btn"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA for New Artists */}
        <div className="mt-16 text-center">
          <div className="border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Build Your Own Success Story
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of independent artists who are taking control of their careers with HLPFL's toolkit. No applications, no approval needed—you're already approved.
            </p>
            <Link href="/artist-portal">
              <Button>
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
