import React from 'react'
import Link from 'next/link'
import { PenTool, Briefcase, TrendingUp, FileText, Users, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'

export function ServicesSection() {
  const services = [
    {
      icon: PenTool,
      title: 'Brand Development',
      description: 'Build a compelling brand that resonates with your audience. We handle strategy, visual identity, and market positioning.',
      features: ['Brand Strategy', 'Visual Identity', 'Market Positioning', 'Messaging Guidelines']
    },
    {
      icon: Briefcase,
      title: 'Business Formation',
      description: 'Get your business properly structured. LLC setup, registration, EIN assistance, and compliance guidance.',
      features: ['Entity Setup', 'Registration Support', 'EIN Assistance', 'Compliance Guidance']
    },
    {
      icon: TrendingUp,
      title: 'Sales Representation',
      description: 'Let us handle the sales so you can focus on creating. Direct outreach, deal negotiation, and pipeline management.',
      features: ['Direct Outreach', 'Deal Negotiation', 'Client Management', 'Revenue Optimization']
    },
    {
      icon: FileText,
      title: 'Marketing Strategy',
      description: 'Strategic marketing that gets your work in front of the right people. Go-to-market, content, PR, and social media.',
      features: ['Go-To-Market', 'Content Marketing', 'PR & Media', 'Campaign Execution']
    },
    {
      icon: Users,
      title: 'Content & Social',
      description: 'Professional content that tells your story and builds your audience. Strategy, creation, and community management.',
      features: ['Social Strategy', 'Content Creation', 'Community Building', 'Platform Growth']
    },
    {
      icon: Shield,
      title: 'Contract Support',
      description: 'Protect yourself with guidance on contracts, rights, and fair terms. We help you understand and negotiate better deals.',
      features: ['Contract Review', 'Rights Education', 'Negotiation Support', 'Red Flag Identification']
    }
  ]

  return (
    <section className="py-20 px-4 bg-dark-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Commission-Only Model
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
            Business Development <span className="text-gold">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to build your creative business—<span className="text-white font-semibold">zero upfront costs</span>. We only earn when we help you make money.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, _index) => {
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
              Who We Work With
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We serve creative entrepreneurs across all disciplines: <span className="text-gold font-semibold">inventors, artists, musicians, designers, and writers</span>. If you have a viable product or creative work and need business support, let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <button className="bg-gold text-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors hover-lift">
                  View All Services
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-dark transition-colors">
                  Apply to Partner
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
