import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { mockArtists, mockReleases } from '@/data/mockData'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import {
  Music,
  ArrowLeft,
  Calendar,
  Play,
  ExternalLink,
  Disc3
} from 'lucide-react'

// Generate static params for all artists
export async function generateStaticParams() {
  return mockArtists.map((artist) => ({
    slug: artist.slug,
  }))
}

async function getArtist(slug: string) {
  const { mockArtists } = await import('@/data/mockData')
  return mockArtists.find(artist => artist.slug === slug)
}

async function getArtistReleases(artistId: string, artistName: string) {
  const { mockReleases } = await import('@/data/mockData')
  return mockReleases.filter(r => r.artistId === artistId || r.artist === artistName)
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const artist = await getArtist(params.slug)

  if (!artist) {
    return {
      title: 'Artist Not Found | HLPFL',
    }
  }

  return {
    title: `${artist.name} | HLPFL Artists`,
    description: artist.bio.substring(0, 160),
    openGraph: {
      title: artist.name,
      description: artist.bio.substring(0, 160),
      images: artist.image ? [artist.image] : [],
      type: 'profile',
    },
  }
}

export default async function ArtistProfilePage({ params }: { params: { slug: string } }) {
  const artist = await getArtist(params.slug)

  if (!artist) {
    notFound()
  }

  const artistReleases = await getArtistReleases(artist.id, artist.name)

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-dark-secondary">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Link href="/artists" className="inline-flex items-center text-gold hover:text-gold-light transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Artists
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Artist Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gold/20 to-dark-tertiary">
                {artist.image && !artist.image.includes('.svg') ? (
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-gold/30 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-gold text-6xl font-black">
                          {artist.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm">Artist Photo Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Artist Info */}
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                {artist.name}
              </h1>

              <div className="flex flex-wrap gap-2 mb-6">
                {artist.genre.map((g) => (
                  <span key={g} className="px-4 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium">
                    {g}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 whitespace-pre-line">
                {artist.bio}
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {artist.socials?.spotify && (
                  <a
                    href={artist.socials.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#1DB954] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Music className="h-4 w-4" />
                    Spotify
                  </a>
                )}
                {artist.socials?.apple && (
                  <a
                    href={artist.socials.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#FA243C] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Music className="h-4 w-4" />
                    Apple Music
                  </a>
                )}
                {artist.socials?.soundcloud && (
                  <a
                    href={artist.socials.soundcloud}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#FF5500] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Music className="h-4 w-4" />
                    SoundCloud
                  </a>
                )}
                {artist.socials?.instagram && (
                  <a
                    href={artist.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                )}
                {artist.socials?.twitter && (
                  <a
                    href={artist.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:opacity-90 transition-opacity border border-gray-700"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    X / Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discography Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Disc3 className="h-8 w-8 text-gold" />
            Discography
          </h2>

          {artistReleases.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artistReleases.map((release) => (
                <Card key={release.id} hover className="h-full">
                  <div className="aspect-square bg-gradient-to-br from-gold/20 to-dark-tertiary rounded-t-lg flex items-center justify-center">
                    <div className="text-center p-4">
                      <Disc3 className="h-16 w-16 text-gold mx-auto mb-2 opacity-50" />
                      <p className="text-gray-500 text-sm">Cover Art</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-white mb-1">{release.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{release.artist}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="h-3 w-3" />
                        {release.releaseDate.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short'
                        })}
                      </div>
                      <span className="px-2 py-1 bg-gold/10 text-gold text-xs rounded capitalize">
                        {release.type}
                      </span>
                    </div>

                    {/* Stream Links */}
                    {release.links && (
                      <div className="flex gap-2 mt-4 pt-4 border-t border-gray-700">
                        {release.links.spotify && (
                          <a
                            href={release.links.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-[#1DB954]/20 text-[#1DB954] rounded text-xs hover:bg-[#1DB954]/30 transition-colors"
                          >
                            <Play className="h-3 w-3" />
                            Spotify
                          </a>
                        )}
                        {release.links.apple && (
                          <a
                            href={release.links.apple}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-[#FA243C]/20 text-[#FA243C] rounded text-xs hover:bg-[#FA243C]/30 transition-colors"
                          >
                            <Play className="h-3 w-3" />
                            Apple
                          </a>
                        )}
                        {release.links.soundcloud && (
                          <a
                            href={release.links.soundcloud}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-[#FF5500]/20 text-[#FF5500] rounded text-xs hover:bg-[#FF5500]/30 transition-colors"
                          >
                            <Play className="h-3 w-3" />
                            SC
                          </a>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center">
              <Music className="h-12 w-12 text-gold mx-auto mb-4 opacity-50" />
              <p className="text-gray-400">No releases yet. Stay tuned!</p>
            </Card>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-gold/10 to-transparent border-gold/20">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Want to Work with {artist.name}?
              </h2>
              <p className="text-gray-300 mb-6">
                For booking inquiries, collaborations, or other opportunities, get in touch with our team.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
