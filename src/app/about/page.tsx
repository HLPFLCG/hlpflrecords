'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { mockTeam } from '@/data/mockData'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Award, Users, Eye, Globe, Target, Heart, Lightbulb, Palette, Music, Pencil, Wrench } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Aligned Incentives',
      description: 'We only earn when you earn. Our commission-only model means we succeed together or not at all.'
    },
    {
      icon: Award,
      title: 'Creator Protection',
      description: 'We advocate for fair treatment, equitable compensation, and protection of your rights.'
    },
    {
      icon: Users,
      title: 'No Exploitation',
      description: 'Zero upfront costs. No predatory contracts. No hidden fees. Ever.'
    },
    {
      icon: Eye,
      title: 'Radical Transparency',
      description: 'Clear commission rates. No hidden agendas. No fine print. Complete honesty.'
    },
    {
      icon: Globe,
      title: 'Accessible Support',
      description: 'Professional business development services available to creators who can\'t afford traditional agencies.'
    },
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'As a 501(c)(3) nonprofit, we exist to serve creators—not to maximize profit.'
    }
  ]

  const whoWeServe = [
    { icon: Lightbulb, title: 'Inventors', description: 'Patent holders & product developers' },
    { icon: Palette, title: 'Visual Artists', description: 'Painters, illustrators & photographers' },
    { icon: Music, title: 'Musicians', description: 'Artists, producers & bands' },
    { icon: Wrench, title: 'Designers', description: 'Industrial, fashion & UX/UI' },
    { icon: Pencil, title: 'Writers', description: 'Authors, screenwriters & content creators' },
  ]

  const stats = [
    { number: '$0', label: 'Upfront Costs' },
    { number: '100%', label: 'Your Ownership' },
    { number: '5', label: 'Disciplines' },
    { number: '501(c)3', label: 'Nonprofit Status' }
  ]

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Wyoming 501(c)(3) Nonprofit Organization
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-gold">HLPFL Inc</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We&apos;re a nonprofit providing commission-only business development services for creative entrepreneurs.
            Zero upfront costs. We earn when you earn.
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

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-gold">Mission</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <span className="text-white font-semibold">To advocate for fair treatment, equitable compensation, and protection of rights for creative entrepreneurs</span>—including inventors, artists, musicians, designers, and writers.
                </p>
                <p className="leading-relaxed">
                  We provide <span className="text-gold font-semibold">free and subsidized business development services</span> on a commission-only basis with no upfront costs. Traditional services charge thousands upfront with no guaranteed results.
                </p>
                <p className="leading-relaxed">
                  We do the opposite: we invest our time and resources in you first. We handle sales representation, marketing strategy, brand development, and business operations. <span className="text-gold font-semibold">We only earn when we help you make money</span>.
                </p>
                <p className="leading-relaxed text-white font-semibold">
                  Our incentives are aligned with yours. That&apos;s how it should be.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-gold/10 to-dark-tertiary rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-4xl font-bold">H</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Commission-Only</h3>
                <p className="text-gray-400">We Earn When You Earn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Who We <span className="text-gold">Serve</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with creative entrepreneurs across all disciplines who have viable products or services but need business support.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {whoWeServe.map((type) => {
              const Icon = type.icon
              return (
                <div key={type.title} className="text-center p-6 rounded-xl bg-dark-tertiary border border-gold/10 hover:border-gold/30 transition-all">
                  <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{type.title}</h3>
                  <p className="text-gray-400 text-sm">{type.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How Our <span className="text-gold">Model Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A commission-only approach that aligns our success with yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover className="h-full">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Zero Upfront</h3>
                <p className="text-gray-300">
                  No fees, no deposits, no subscriptions. We invest our time and resources in you first.
                </p>
              </CardContent>
            </Card>

            <Card hover className="h-full">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">We Work For You</h3>
                <p className="text-gray-300">
                  We handle sales, marketing, business development—so you can focus on creating.
                </p>
              </CardContent>
            </Card>

            <Card hover className="h-full">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Commission on Success</h3>
                <p className="text-gray-300">
                  We only earn when we facilitate a sale for you. Typically 15-30% depending on services.
                </p>
              </CardContent>
            </Card>
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
              The principles from our bylaws that guide everything we do.
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
              Meet The <span className="text-gold">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The people behind HLPFL, dedicated to empowering creative entrepreneurs.
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
            Ready to <span className="text-gold">Partner</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have a viable product or creative work and need business support, let&apos;s talk.
            Zero upfront costs. We earn when you earn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Apply to Partner
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
