'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { mockTeam } from '@/data/mockData'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Award, Users, Music, Globe, Target, Heart } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Creator-First',
      description: 'Your vision. Your work. Your f*cking life. We\'re just here to help, not to own.'
    },
    {
      icon: Award,
      title: 'No Vested Interest',
      description: 'We don\'t take equity. We don\'t take cuts. We have nothing to gain except seeing you win.'
    },
    {
      icon: Users,
      title: 'Community Over Competition',
      description: 'Creatives supporting creatives. No gatekeeping. No hoarding resources.'
    },
    {
      icon: Music,
      title: 'Radical Transparency',
      description: 'No hidden agendas. No fine print. No bullshit. Ever.'
    },
    {
      icon: Globe,
      title: 'Accessible Resources',
      description: 'The tools that used to be locked behind exploitative contracts? Now they\'re free.'
    },
    {
      icon: Target,
      title: 'Protect The Dream',
      description: 'We exist because too many creatives lost the love of the game. Never again.'
    }
  ]

  const stats = [
    { number: '2', label: 'Artists' },
    { number: '0%', label: 'We Take' },
    { number: '100%', label: 'Yours' },
    { number: '0', label: 'Strings' }
  ]

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-gold">HLPFL Inc</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We're a nonprofit built by creatives who got burned—for creatives who won't.
            No VCs. No private equity. No vested interest. Just resources to help you bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                Why We <span className="text-gold">Exist</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <span className="text-white font-semibold">The creative industry is designed to f*ck you over.</span> VCs want your equity. Labels want your masters. Managers want their cut. Everyone wants a piece of what you built—until there's nothing left for you.
                </p>
                <p className="leading-relaxed">
                  We watched it happen to friends. To peers. To artists we believed in. Hell, <span className="text-gold font-semibold">it happened to us</span>. We lost the love of the game because someone saw dollar signs where we saw dreams.
                </p>
                <p className="leading-relaxed">
                  So we built HLPFL Inc—a nonprofit with one mission: <span className="text-gold font-semibold">give creatives the resources they need with no vested interest or private equity pressure</span>. We don't take a cut. We don't own your work. We don't want equity in your dream. We just help.
                </p>
                <p className="leading-relaxed text-white font-semibold">
                  F*ck the gatekeepers. This is for the creators.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-gold/10 to-dark-tertiary rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-4xl font-bold">H</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Nonprofit</h3>
                <p className="text-gray-400">No VCs. No Exploitation. No Bullshit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Portal Section */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Resources That Should Be <span className="text-gold">Free</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The tools that labels lock behind exploitative contracts? We're giving them away. No catches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Social Media Manager',
                description: 'Unified dashboard to schedule, track, and optimize all your social media. No subscription fees.',
              },
              {
                icon: Globe,
                title: 'Link in Bio Tool',
                description: 'Create a custom landing page showcasing your work, merch, and more. Yours to keep.',
              },
              {
                icon: Music,
                title: 'Distribution Access',
                description: 'Get your music on all major platforms. Keep 100% of your royalties. We take nothing.',
              },
              {
                icon: Target,
                title: 'Creative Support',
                description: 'Professional guidance without controlling contracts. Help when you need it, not when we profit.',
              },
              {
                icon: Award,
                title: 'Analytics & Insights',
                description: 'Track your growth, understand your audience. Data to help you—not to sell you.',
              },
            ].map((tool) => {
              const Icon = tool.icon
              return (
                <Card key={tool.title} hover className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{tool.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {tool.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/artist-portal">
              <Button size="lg">
                Get The Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
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
            {values.map((value, _index) => {
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
              The passionate professionals behind HLPFL, dedicated to supporting our artists and advancing our mission.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockTeam.map((member) => (
              <Card key={member.id} hover className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-gold/20 to-dark-tertiary relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
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
            Join The <span className="text-gold">Movement</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a creator looking for resources without the exploitation, or you just want to support a mission that matters—we're building something different here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Get In Touch
              </Button>
            </Link>
            <Link href="/artists">
              <Button variant="outline" size="lg">
                Meet Our Creators
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
