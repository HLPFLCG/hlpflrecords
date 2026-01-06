import React from 'react'
import { Share2, Link as LinkIcon, FileText, Headphones, Users, Database } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Link from 'next/link'

export function ServicesSection() {
  const tools = [
    {
      icon: Share2,
      title: 'Social Media Manager',
      description: 'Stop wasting hours managing posts across platforms. Our unified dashboard lets you schedule, track, and optimize all your social media from one place.',
      features: ['Unified Dashboard', 'Content Calendar', 'Analytics & Insights', 'Automated Posting']
    },
    {
      icon: LinkIcon,
      title: 'Link in Bio Tool',
      description: 'One link to rule them all. Create a custom landing page that showcases your music, merchandise, tour dates, and everything else you\'re working on.',
      features: ['Custom Landing Page', 'Instant Updates', 'Click Tracking', 'Mobile Optimized']
    },
    {
      icon: FileText,
      title: 'Form Builder',
      description: 'Collect information, build your fanbase, and manage your business with professional forms. No coding required—just powerful forms that work.',
      features: ['Fan Email Capture', 'Contact Forms', 'Booking Requests', 'Survey Feedback']
    },
    {
      icon: Headphones,
      title: 'Music Distribution',
      description: 'Get your music on Spotify, Apple Music, TikTok, and every major streaming platform. Keep 100% of your royalties. Fast uploads, professional delivery.',
      features: ['All Major Platforms', '100% Royalties', 'Detailed Analytics', 'Fast Delivery']
    },
    {
      icon: Users,
      title: 'Artist Management Services',
      description: 'When you need professional support without the controlling contracts. Book what you need, when you need it. Strategic guidance on your terms.',
      features: ['On-Demand Support', 'Industry Connections', 'Strategic Guidance', 'Transparent Pricing']
    },
    {
      icon: Database,
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
            Your Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">Artist Toolkit</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every tool, resource, and advantage you need to build your music career—<span className="text-white font-semibold">no strings attached</span>.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <Card key={tool.title} hover className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{tool.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {tool.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {tool.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full" />
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
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-amber-500/20">
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
              Ready to Take Control?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Stop waiting for a label to "discover" you. Start building the career you want right now with tools that work <span className="text-amber-400 font-semibold">for you, not against you</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/artist-portal">
                <button className="btn-premium px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Free
                </button>
              </Link>
              <Link href="/about">
                <button className="btn-premium px-8 py-4 bg-transparent border-2 border-amber-500/50 hover:border-amber-400 text-amber-400 hover:text-amber-300 font-semibold rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Anti-label messaging */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="inline-block">
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">
              Tools, Not Contracts. Independence, Not Ownership.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}