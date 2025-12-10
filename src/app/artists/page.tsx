'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Heart, Users, Music, Star } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const ArtistsPage = () => {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null)
  const [likedArtists, setLikedArtists] = useState<string[]>([])

  const artists = [
    {
      id: '1',
      name: 'Luna Echo',
      genre: 'Pop/R&B',
      image: '/artists/luna-echo.jpg',
      bio: 'Emerging pop sensation with soulful vocals and chart-topping hits.',
      monthlyListeners: '2.5M',
      tracks: ['Midnight Dreams', 'Golden Hour', 'Electric Love'],
      social: {
        instagram: '#',
        spotify: '#',
        youtube: '#'
      }
    },
    {
      id: '2',
      name: 'The Midnight Revival',
      genre: 'Alternative Rock',
      image: '/artists/midnight-revival.jpg',
      bio: 'High-energy rock band bringing back the spirit of classic rock with a modern twist.',
      monthlyListeners: '1.8M',
      tracks: ['Breaking Chains', 'Neon Nights', 'Revolution'],
      social: {
        instagram: '#',
        spotify: '#',
        youtube: '#'
      }
    },
    {
      id: '3',
      name: 'Aurora Banks',
      genre: 'Electronic',
      image: '/artists/aurora-banks.jpg',
      bio: 'Electronic music producer creating immersive soundscapes and dance floor anthems.',
      monthlyListeners: '3.2M',
      tracks: ['Digital Dreams', 'Synthwave Sunset', 'Neon Paradise'],
      social: {
        instagram: '#',
        spotify: '#',
        youtube: '#'
      }
    },
    {
      id: '4',
      name: 'Marcus Stone',
      genre: 'Hip-Hop',
      image: '/artists/marcus-stone.jpg',
      bio: 'Lyrical storyteller blending conscious hip-hop with mainstream appeal.',
      monthlyListeners: '1.5M',
      tracks: ['City Lights', 'Rise Up', 'Reflections'],
      social: {
        instagram: '#',
        spotify: '#',
        youtube: '#'
      }
    },
    {
      id: '5',
      name: 'The Velvet Underground',
      genre: 'Indie Rock',
      image: '/artists/velvet-underground.jpg',
      bio: 'Indie rock collective pushing boundaries with experimental sounds and poetic lyrics.',
      monthlyListeners: '900K',
      tracks: ['Shadows Fall', 'Crystal Clear', 'Electric Dreams'],
      social: {
        instagram: '#',
        spotify: '#',
        youtube: '#'
      }
    },
    {
      id: '6',
      name: 'Sofia Chen',
      genre: 'Classical Crossover',
      image: '/artists/sofia-chen.jpg',
      bio: 'Classically trained violinist bridging the gap between classical and contemporary music.',
      monthlyListeners: '1.2M',
      tracks: ['Ethereal', 'Fusion', 'Evolution'],
      social: {
        instagram: '#',
        spotify: '#',
        youtube: '#'
      }
    }
  ]

  const toggleLike = (artistId: string) => {
    setLikedArtists(prev => 
      prev.includes(artistId) 
        ? prev.filter(id => id !== artistId)
        : [...prev, artistId]
    )
  }

  const togglePlay = (trackId: string) => {
    setPlayingTrack(prev => prev === trackId ? null : trackId)
  }

  return (
    <div className="min-h-screen bg-primary">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
          <div className="container-premium">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-semibold mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Users className="w-4 h-4 mr-2" />
                Our Artists
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-none">
                Meet Our
                <span className="text-gradient-gold"> Roster</span>
              </h1>

              <p className="text-xl md:text-2xl text-text/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Discover the talented artists who call HLPFL Records home. 
                From emerging voices to established stars, each artist brings their unique 
                vision to our diverse musical family.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  href="https://calendly.com/founder-hlpfl/30min"
                  target="_blank"
                  size="lg"
                >
                  Submit Your Demo
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="#artists"
                >
                  Browse Artists
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding section-bg">
          <div className="container-premium">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { number: '50M+', label: 'Total Streams' },
                { number: '200+', label: 'Artists' },
                { number: '15', label: 'Genres' },
                { number: '30', label: 'Countries' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl lg:text-5xl font-display font-bold text-gradient-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-text/80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Artists Grid */}
        <section id="artists" className="section-padding">
          <div className="container-premium">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="badge-accent inline-flex items-center mb-6">
                <Star className="w-4 h-4 mr-2" />
                Featured Artists
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Our <span className="text-gradient-gold">Musical</span> Family
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artists.map((artist, index) => (
                <Card
                  key={artist.id}
                  variant="premium"
                  hover
                  delay={index * 0.1}
                >
                  {/* Artist Image */}
                  <div className="relative mb-6 group">
                    <div className="aspect-square gradient-gold rounded-xl flex items-center justify-center">
                      <span className="text-white text-4xl font-display font-bold">
                        {artist.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    {/* Play/Like Buttons */}
                    <div className="absolute inset-0 bg-black/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => toggleLike(artist.id)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Heart 
                          className={`w-5 h-5 ${likedArtists.includes(artist.id) ? 'fill-red-500 text-red-500' : ''}`} 
                        />
                      </button>
                    </div>
                  </div>

                  {/* Artist Info */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">
                      {artist.name}
                    </h3>
                    <p className="text-gold font-semibold mb-2">
                      {artist.genre}
                    </p>
                    <p className="text-text/80 text-sm leading-relaxed mb-4">
                      {artist.bio}
                    </p>
                    <div className="text-text/60 text-sm mb-4">
                      {artist.monthlyListeners} monthly listeners
                    </div>
                  </div>

                  {/* Top Tracks */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm">
                      Top Tracks
                    </h4>
                    <div className="space-y-2">
                      {artist.tracks.slice(0, 3).map((track, trackIndex) => (
                        <div
                          key={trackIndex}
                          className="flex items-center justify-between p-2 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer group"
                          onClick={() => togglePlay(`${artist.id}-${trackIndex}`)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                              {playingTrack === `${artist.id}-${trackIndex}` ? (
                                <Pause className="w-4 h-4 text-gold" />
                              ) : (
                                <Play className="w-4 h-4 text-gold ml-0.5" />
                              )}
                            </div>
                            <span className="text-text/80 text-sm group-hover:text-white transition-colors">
                              {track}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    {Object.entries(artist.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300"
                        aria-label={platform}
                      >
                        <Music className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding section-bg">
          <div className="container-premium">
            <motion.div
              className="card-premium text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="badge-gold inline-flex items-center mb-6">
                <Star className="w-4 h-4 mr-2" />
                Join Our Roster
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to Be Our Next
                <span className="text-gradient-gold"> Success Story?</span>
              </h2>
              <p className="text-xl text-text/80 mb-12 max-w-2xl mx-auto">
                We're always looking for talented artists to join our family. 
                If you have the passion and the talent, we want to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  href="https://calendly.com/founder-hlpfl/30min"
                  target="_blank"
                  size="lg"
                >
                  Submit Your Demo
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/contact"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ArtistsPage