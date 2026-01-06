import React from 'react'
import { Music, Users, Globe, Headphones, TrendingUp, Award } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'

export function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: 'Social Media Manager',
      description: 'Stop wasting hours managing posts across platforms. Our unified dashboard lets you schedule, track, and optimize all your social media from one place.',
      features: ['Unified Dashboard', 'Content Calendar', 'Analytics & Insights', 'Automated Posting']
    },
    {
      icon: Globe,
      title: 'Link in Bio Tool',
      description: 'One link to rule them all. Create a custom landing page that showcases your music, merchandise, tour dates, and everything else you\'re working on.',
      features: ['Custom Landing Page', 'Instant Updates', 'Click Tracking', 'Mobile Optimized']
    },
    {
      icon: Music,
      title: 'Music Distribution',
      description: 'Get your music on Spotify, Apple Music, TikTok, and every major streaming platform. Keep 100% of your royalties. Fast uploads, professional delivery.',
      features: ['All Major Platforms', '100% Royalties', 'Detailed Analytics', 'Fast Delivery']
    },
    {
      icon: Headphones,
      title: 'Artist Management Services',
      description: 'When you need professional support without the controlling contracts. Book what you need, when you need it. Strategic guidance on your terms.',
      features: ['On-Demand Support', 'Industry Connections', 'Strategic Guidance', 'Transparent Pricing']
    },
    {
      icon: TrendingUp,
      title: 'Form Builder',
      description: 'Collect information, build your fanbase, and manage your business with professional forms. No coding required—just powerful forms that work.',
      features: ['Fan Email Capture', 'Contact Forms', 'Booking Requests', 'Survey Feedback']
    },
    {
      icon: Award,
      title: 'Alki Music Vault',
      description: 'Exclusive access to 300+ unreleased songs from Alki\'s catalog. Remix, collaborate, or find inspiration from this massive creative resource.',
      features: ['300+ Unreleased Tracks', 'Remix Rights', 'Collaboration Tools', 'Creative Inspiration']
    }
  ]

  return (
    <section className="py-20 px-4 bg-dark-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
            Your Complete <span className="text-gold">Artist Toolkit</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every tool, resource, and advantage you need to build your music career—<span className="text-white font-semibold">no strings attached</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={service.title} hover className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
              Ready to Take Control?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Stop waiting for a label to "discover" you. Start building the career you want right now with tools that work <span className="text-gold font-semibold">for you, not against you</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold text-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors hover-lift">
                Get Started Free
              </button>
              <button className="border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-dark transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
