import React from 'react'
import Link from 'next/link'
import { mockTeam } from '@/data/mockData'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Award, Users, Music, Globe, Target, Heart } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Artist-First',
      description: 'We prioritize our artists\' creative vision and career development above all else.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue the highest standards in music production, marketing, and artist support.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration between artists, producers, and our team.'
    },
    {
      icon: Music,
      title: 'Innovation',
      description: 'We embrace new technologies and creative approaches to push musical boundaries.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We connect local talent with global audiences through strategic partnerships.'
    },
    {
      icon: Target,
      title: 'Long-Term Success',
      description: 'We focus on building sustainable careers, not just short-term hits.'
    }
  ]

  const stats = [
    { number: '15+', label: 'Years in Business' },
    { number: '50+', label: 'Active Artists' },
    { number: '200+', label: 'Music Releases' },
    { number: '1B+', label: 'Global Streams' },
    { number: '30+', label: 'Industry Awards' },
    { number: '50+', label: 'Team Members' }
  ]

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-gold">HLPFL Records</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            HLPFL Records is a premier record label dedicated to discovering, developing, and promoting exceptional musical talent. 
            With over 15 years of experience in the music industry, we've built a reputation for nurturing artists and creating groundbreaking music that resonates globally.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-gold">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Founded in 2009, HLPFL Records began as a small independent label with a big vision: to create a home where artists could thrive creatively while building sustainable careers in the music industry.
                </p>
                <p className="leading-relaxed">
                  Over the years, we've grown from a humble startup to a respected name in the industry, working with talented artists across genres and helping them reach millions of listeners worldwide. Our success is built on a foundation of trust, collaboration, and an unwavering commitment to artistic excellence.
                </p>
                <p className="leading-relaxed">
                  Today, HLPFL Records continues to push boundaries, embracing new technologies and innovative approaches while staying true to our core mission of supporting exceptional talent and creating music that matters.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-gold/10 to-dark-tertiary rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-4xl font-bold">H</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Since 2009</h3>
                <p className="text-gray-400">Elevating Artists to Global Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-gold">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do, from artist development to music production.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={value.title} hover className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{value.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet Our <span className="text-gold">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate professionals behind HLPFL Records, dedicated to supporting our artists and advancing our mission.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockTeam.map((member) => (
              <Card key={member.id} hover className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-gold/20 to-dark-tertiary flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gold text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">Team Photo</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-gold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
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
            Join the <span className="text-gold">HLPFL Family</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're an artist looking for a label that values your creative vision or a music lover who wants to stay connected with our latest releases, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Get In Touch
              </Button>
            </Link>
            <Link href="/artists">
              <Button variant="outline" size="lg">
                Meet Our Artists
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
