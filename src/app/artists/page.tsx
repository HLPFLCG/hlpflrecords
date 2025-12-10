import React from 'react'
import Link from 'next/link'
import { mockArtists } from '@/data/mockData'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Music, Filter } from 'lucide-react'

export default function ArtistsPage() {
  const genres = ['All', 'Pop', 'R&B', 'Hip-Hop', 'Rock', 'Electronic', 'Jazz', 'Classical']
  
  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gold">Artists</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Meet the incredible talent that makes up the HLPFL Records family. 
            Each artist brings their unique voice and vision to our collective mission of creating exceptional music.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gold" />
              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <button
                    key={genre}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      genre === 'All' 
                        ? 'bg-gold text-dark' 
                        : 'bg-dark-secondary text-gray-300 hover:text-gold hover:bg-dark-tertiary'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="text-gray-400">
              <span className="text-gold font-semibold">{mockArtists.length}</span> Artists
            </div>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockArtists.map((artist) => (
              <Card key={artist.id} hover className="overflow-hidden group">
                <div className="relative aspect-square overflow-hidden">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Link href={`/artists/${artist.slug}`}>
                        <Button className="w-full">
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {artist.genre.join(' • ')}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {artist.bio}
                  </p>
                  
                  {/* Social Links */}
                  {artist.socials && (
                    <div className="flex space-x-3">
                      {artist.socials.spotify && (
                        <a href={artist.socials.spotify} className="text-gray-400 hover:text-gold transition-colors">
                          <Music className="h-4 w-4" />
                        </a>
                      )}
                      {artist.socials.instagram && (
                        <a href={artist.socials.instagram} className="text-gray-400 hover:text-gold transition-colors">
                          <span className="text-sm">IG</span>
                        </a>
                      )}
                      {artist.socials.twitter && (
                        <a href={artist.socials.twitter} className="text-gray-400 hover:text-gold transition-colors">
                          <span className="text-sm">TW</span>
                        </a>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Want to Join Our <span className="text-gold">Roster</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent to join the HLPFL Records family. 
            If you're passionate about music and ready to take your career to the next level, we want to hear from you.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Submit Your Music
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}