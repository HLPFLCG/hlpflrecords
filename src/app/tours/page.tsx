'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Music, Shield, TrendingUp, CheckCircle2, DollarSign, Ticket } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

export default function ToursPage() {
  const tourCities = [
    'Grand Rapids, MI',
    'Detroit, MI',
    'Chicago, IL',
    'Milwaukee, WI',
    'Minneapolis, MN',
    'Cincinnati, OH',
    '+ 5 Additional Midwest Cities'
  ]

  const revenueScenarios = [
    {
      name: 'Conservative',
      attendees: 50,
      grossRevenue: '$145,310',
      netProfit: '$34,639',
      perShare: '$17,320',
      roi: '69.3%',
      margin: '23.8%'
    },
    {
      name: 'Moderate',
      attendees: 75,
      grossRevenue: '$228,800',
      netProfit: '$108,328',
      perShare: '$54,164',
      roi: '216.7%',
      margin: '47.4%',
      featured: true
    },
    {
      name: 'Optimistic',
      attendees: 100,
      grossRevenue: '$312,400',
      netProfit: '$179,553',
      perShare: '$89,777',
      roi: '359.1%',
      margin: '57.5%'
    }
  ]

  const differentiators = [
    {
      icon: DollarSign,
      title: '50/50 Profit Sharing',
      description: 'Fair partnership with artists, not traditional venue splits'
    },
    {
      icon: Ticket,
      title: 'No Platform Fees',
      description: 'Direct ticketing saves 15-20% in fees'
    },
    {
      icon: MapPin,
      title: 'Private Venue Strategy',
      description: 'Eliminates traditional venue costs (40% savings)'
    },
    {
      icon: Music,
      title: 'NFC-Enabled Merch',
      description: 'Combines tickets, digital wallets, and content access'
    }
  ]

  const experienceFeatures = [
    'Meet & greet with PRIV',
    'Complimentary alcohol and cannabis (21+ only)',
    'Exclusive merchandise with NFC technology',
    'Professional concert-quality sound and lighting',
    'Limited capacity (50-100 guests per show)',
    'Post-event exclusive digital content access'
  ]

  const successMetrics = [
    { label: 'Target Shows', value: '11 Cities' },
    { label: 'Investment', value: '$50,000' },
    { label: 'Target Revenue', value: '$200K-270K' },
    { label: 'Profit Margin', value: '47-57%' },
    { label: 'Ticket Price', value: '$150-400' },
    { label: 'ROI Target', value: '200-360%' }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,121,65,0.15)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(200,121,65,0.05)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(200,121,65,0.05)_1px,_transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
              HLPFL <span className="text-[#c87941]">BACKYARD TOUR</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
              The Private Pardy Tour
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Featuring <span className="text-[#c87941] font-semibold">PRIV</span> as headliner
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5 text-[#c87941]" />
                <span>March 2025</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-[#c87941]" />
                <span>11 Midwest Cities</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-5 h-5 text-[#c87941]" />
                <span>50-100 Guests Per Show</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#c87941] to-[#a0613a] hover:from-[#d89558] hover:to-[#c87941] text-black font-bold px-8 py-3 text-lg">
                  Get Early Access
                </Button>
              </Link>
              <Link href="/artists">
                <Button variant="outline" className="border-[#c87941] text-[#c87941] hover:bg-[#c87941]/10 px-8 py-3 text-lg">
                  Meet the Artists
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tour Cities */}
      <section className="py-16 bg-gradient-to-b from-transparent to-[#0a0a0a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
              Tour <span className="text-[#c87941]">Cities</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tourCities.map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#c87941]/20 rounded-xl p-6 text-center hover:border-[#c87941]/50 transition-all"
                >
                  <MapPin className="w-6 h-6 text-[#c87941] mx-auto mb-3" />
                  <p className="text-white font-medium">{city}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
            Revolutionary <span className="text-[#c87941]">Business Model</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Redefining live music economics with artist-first innovation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-[#c87941]/20 hover:border-[#c87941]/50 transition-all h-full">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 text-[#c87941] mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Projections */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0a]/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
            Financial <span className="text-[#c87941]">Projections</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">11-Show Tour Performance Scenarios</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {revenueScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`${scenario.featured ? 'border-[#c87941] bg-gradient-to-br from-[#c87941]/10 to-[#1a1a1a]' : 'bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-[#c87941]/20'} hover:border-[#c87941]/50 transition-all h-full relative overflow-hidden`}>
                  {scenario.featured && (
                    <div className="absolute top-0 right-0 bg-[#c87941] text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                      MOST LIKELY
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{scenario.name}</h3>
                    <p className="text-gray-400 mb-6">{scenario.attendees} avg attendees/show</p>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Gross Revenue</p>
                        <p className="text-2xl font-bold text-[#c87941]">{scenario.grossRevenue}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Net Profit</p>
                        <p className="text-xl font-bold text-white">{scenario.netProfit}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                        <div>
                          <p className="text-xs text-gray-500">Per Partner</p>
                          <p className="text-lg font-bold text-[#c87941]">{scenario.perShare}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">ROI</p>
                          <p className="text-lg font-bold text-white">{scenario.roi}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Profit Margin</p>
                        <p className="text-sm font-medium text-gray-300">{scenario.margin}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
            Tour <span className="text-[#c87941]">Metrics</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#c87941]/20 rounded-xl p-6 text-center hover:border-[#c87941]/50 transition-all"
              >
                <p className="text-3xl font-black text-[#c87941] mb-2" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
                  {metric.value}
                </p>
                <p className="text-sm text-gray-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fan Experience */}
      <section className="py-16 bg-gradient-to-b from-transparent to-[#0a0a0a]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
                Intimate <span className="text-[#c87941]">Backyard Experience</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Experience music where it matters most - up close, personal, and unforgettable.
              </p>

              <div className="space-y-4">
                {experienceFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#c87941] flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#c87941]/10 to-[#1a1a1a] border border-[#c87941]/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Premium Pricing</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-400 mb-2">General Admission</p>
                  <p className="text-4xl font-black text-[#c87941]" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
                    $150-200
                  </p>
                  <p className="text-gray-400 text-sm mt-1">All-inclusive experience</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">VIP Experience</p>
                  <p className="text-4xl font-black text-[#c87941]" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
                    $300-400
                  </p>
                  <p className="text-gray-400 text-sm mt-1">Extended meet & greet + premium add-ons</p>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400">Compare to traditional venue:</p>
                  <p className="text-xl line-through text-gray-600">$40 ticket</p>
                  <p className="text-sm text-gray-400 mt-2">5x value for unmatched intimacy</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legal & Compliance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#c87941]/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-12 h-12 text-[#c87941] flex-shrink-0" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
                  Legal <span className="text-[#c87941]">Compliance</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Fully compliant private event structure with comprehensive protections
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Alcohol Distribution</h3>
                <p className="text-gray-400 mb-2">
                  "Complimentary Refreshments" Model
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Private, invitation-only gatherings</li>
                  <li>• Complimentary service included with ticket</li>
                  <li>• State-specific compliance frameworks</li>
                  <li>• Volunteer staff, no separate sales</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Cannabis Distribution</h3>
                <p className="text-gray-400 mb-2">
                  "Gift with Purchase" Model
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Merchandise-focused sales structure</li>
                  <li>• Legal states only (MI, IL, MN)</li>
                  <li>• 21+ strict verification</li>
                  <li>• Licensed dispensary sourcing</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#c87941]/10 border border-[#c87941]/30 rounded-xl">
              <h4 className="text-lg font-bold text-white mb-2">Comprehensive Protection</h4>
              <p className="text-gray-400 text-sm">
                $2M general liability per event • Host liability agreements • Digital waivers • Professional security • Full insurance coverage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling & Future */}
      <section className="py-16 bg-gradient-to-b from-[#0a0a0a]/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
            Scaling <span className="text-[#c87941]">Opportunities</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#c87941]/20 rounded-xl p-8 text-center"
            >
              <TrendingUp className="w-12 h-12 text-[#c87941] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Year 2 (2026)</h3>
              <p className="text-gray-400 mb-4">25 Events</p>
              <p className="text-3xl font-black text-[#c87941]" style={{ fontFamily: 'var(--font-bebas-neue)' }}>$250K</p>
              <p className="text-sm text-gray-500">Each partner profit</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#c87941]/20 rounded-xl p-8 text-center"
            >
              <TrendingUp className="w-12 h-12 text-[#c87941] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Year 3 (2027)</h3>
              <p className="text-gray-400 mb-4">50 Events</p>
              <p className="text-3xl font-black text-[#c87941]" style={{ fontFamily: 'var(--font-bebas-neue)' }}>$500K</p>
              <p className="text-sm text-gray-500">Each partner profit</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#c87941]/20 to-[#1a1a1a] border border-[#c87941]/50 rounded-xl p-8 text-center"
            >
              <Music className="w-12 h-12 text-[#c87941] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Additional Revenue</h3>
              <ul className="text-sm text-gray-400 text-left space-y-2 mt-4">
                <li>• Corporate events</li>
                <li>• Festival appearances</li>
                <li>• Merchandise lines</li>
                <li>• Content licensing</li>
                <li>• Subscription model</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#c87941]/20 to-[#1a1a1a] border border-[#c87941]/50 rounded-2xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
              The Future of Live Music is in Your Backyard
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Welcome to the Private Pardy Tour
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#c87941] to-[#a0613a] hover:from-[#d89558] hover:to-[#c87941] text-black font-bold px-8 py-4 text-lg">
                  Get on the List
                </Button>
              </Link>
              <Link href="/artists">
                <Button variant="outline" className="border-[#c87941] text-[#c87941] hover:bg-[#c87941]/10 px-8 py-4 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                Questions? <Link href="/contact" className="text-[#c87941] hover:text-[#d89558] transition-colors">Contact us</Link> to learn about investment opportunities or hosting a show
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
