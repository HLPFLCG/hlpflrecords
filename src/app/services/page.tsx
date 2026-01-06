'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Check, Calendar, Users, TrendingUp, Shield, Zap, Globe, Music, BarChart3, Radio, Smartphone, Menu, X } from 'lucide-react';

export default function ServicesPage() {
  const [activeScenario, setActiveScenario] = useState('release');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'HLPFL Services - Your Complete Music Career Ecosystem';
  }, []);

  const services = [
    {
      icon: Smartphone,
      title: 'Social Media Manager',
      description: 'Automate your social presence across all platforms with intelligent scheduling and analytics.',
      features: [
        'Multi-platform posting',
        'Content calendar & scheduling',
        'Performance analytics',
        'Hashtag optimization',
        'Engagement tracking'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Link-in-Bio (BioBetter)',
      description: 'One powerful link that connects fans to everything you do - music, merch, events, and more.',
      features: [
        'Custom branded landing page',
        'Unlimited link management',
        'Music platform integration',
        'Merch store connection',
        'Real-time analytics'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Artist Portal',
      description: 'Your complete music business command center with analytics, collaboration tools, and career insights.',
      features: [
        'Revenue & royalty tracking',
        'Cross-platform analytics',
        'AI-powered insights',
        'Team collaboration tools',
        'Performance milestones'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Radio,
      title: 'Live Experience Tech',
      description: 'Transform every show into an unforgettable experience with backyard shows and NFC chip technology.',
      features: [
        'Backyard show management',
        'NFC chip integration',
        'Smart merchandise',
        'Fan engagement tools',
        'Post-show analytics'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const packages = [
    {
      name: 'Artist Starter',
      price: '$19.99',
      period: '/month',
      revenueShare: 'or 18% revenue share',
      description: 'Perfect for emerging artists building their foundation',
      features: [
        'BioBetter Link-in-Bio (Pro)',
        'Social Media Manager (3 platforms)',
        'Artist Portal (Core features)',
        'Standard analytics dashboard',
        'Community access & support',
        'Monthly performance report',
        false,
        false,
        false
      ],
      featured: false
    },
    {
      name: 'Growth Accelerator',
      price: '$49.99',
      period: '/month',
      revenueShare: 'or 22% revenue share',
      description: 'For artists ready to scale their career',
      features: [
        'Everything in Starter, plus',
        'Advanced Social Media (all platforms)',
        'Artist Portal (Full access + AI)',
        'Premium analytics & forecasting',
        'NFC chip technology integration',
        'Backyard show management system',
        'Priority support (24-hour response)',
        'Monthly strategy consultation',
        true
      ],
      featured: true
    },
    {
      name: 'Elite Partnership',
      price: '50%',
      period: ' Revenue Share',
      revenueShare: 'No upfront cost',
      description: 'Comprehensive support for established artists',
      features: [
        'Everything in Growth Accelerator',
        'Full label services & management',
        'Complete BioBetter enterprise suite',
        'Unlimited social media management',
        'Royalty advances (up to $10,000)',
        'Legal & business affairs support',
        'Marketing & PR campaigns',
        'Live performance booking support',
        true
      ],
      featured: false
    }
  ];

  const scenarios = {
    release: {
      title: 'Complete Music Release Workflow',
      timeline: [
        {
          date: '📅 4 Weeks Before Release',
          title: 'Build Anticipation',
          items: [
            'Social Media Manager: Schedule teaser posts across platforms',
            'Link-in-Bio: Add pre-save link to your profile',
            'Artist Portal: Track pre-save campaign performance'
          ]
        },
        {
          date: '📅 2 Weeks Before Release',
          title: 'Ramp Up Engagement',
          items: [
            'Social Media Manager: Share behind-the-scenes content',
            'NFC Chips: Prepare exclusive unlock content for early supporters',
            'Link-in-Bio: Update with release countdown timer'
          ]
        },
        {
          date: '🎉 Release Day',
          title: 'Launch & Celebrate',
          items: [
            'Social Media Manager: Coordinated launch posts across all platforms',
            'Link-in-Bio: Prominent streaming links and call-to-action',
            'Artist Portal: Monitor real-time performance and engagement',
            'NFC Chips: Fans tap to unlock exclusive bonus content'
          ]
        },
        {
          date: '📊 Post-Release Analysis',
          title: 'Learn & Optimize',
          items: [
            'Analytics: Review performance across all platforms',
            'AI Insights: Get recommendations for next steps',
            'Strategy: Plan follow-up content and engagement'
          ]
        }
      ]
    },
    show: {
      title: 'Complete Live Experience Workflow',
      timeline: [
        {
          date: '🎫 Pre-Show Planning',
          title: 'Setup & Promotion',
          items: [
            'Social Media Manager: Announce show details and build hype',
            'Link-in-Bio: Ticket sales, event info, and countdown',
            'Artist Portal: Manage attendee list and communications',
            'NFC Chips: Prepare smart merch and exclusive content'
          ]
        },
        {
          date: '🎤 Show Time',
          title: 'Live Experience',
          items: [
            'Backyard Show System: Check-in attendees and manage flow',
            'NFC Chips: Fans tap merch for exclusive experiences and content',
            'Social Media Manager: Live posting and real-time engagement'
          ]
        },
        {
          date: '📊 Post-Show',
          title: 'Capture & Connect',
          items: [
            'Analytics: Capture fan data and measure engagement',
            'NFC Chips: Deliver post-show exclusive content automatically',
            'Social Media Manager: Share highlights and thank fans',
            'Artist Portal: Update fan profiles and plan follow-up engagement'
          ]
        }
      ]
    },
    growth: {
      title: 'Audience Growth & Engagement Workflow',
      timeline: [
        {
          date: '🎯 Set Growth Goals',
          title: 'Define Your Strategy',
          items: [
            'Artist Portal: Set audience growth and engagement targets',
            'AI Analytics: Identify your best-performing content and platforms',
            'Strategy: Create content calendar aligned with growth goals'
          ]
        },
        {
          date: '📱 Execute & Engage',
          title: 'Consistent Presence',
          items: [
            'Social Media Manager: Automated posting with optimal timing',
            'Link-in-Bio: Convert social traffic to email list and streams',
            'Engagement: Respond to comments and build community'
          ]
        },
        {
          date: '🎟️ Deepen Connections',
          title: 'Live Experiences',
          items: [
            'Backyard Shows: Intimate performances for dedicated fans',
            'NFC Chips: Create exclusive experiences for superfans',
            'Merch Integration: Turn physical products into digital experiences'
          ]
        },
        {
          date: '📈 Analyze & Optimize',
          title: 'Continuous Improvement',
          items: [
            'Analytics: Track growth across all channels',
            'AI Insights: Get recommendations for content and engagement',
            'Optimization: Refine strategy based on data'
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent animate-pulse" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
            Your Complete Music Career Ecosystem
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From social media to live shows, HLPFL provides everything you need to build, grow, and monetize your music career
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
            >
              Explore Packages
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-indigo-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-500/10 transition-all duration-300"
            >
              See How It Works
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Service Ecosystem Section */}
      <section className="py-20 px-4 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent"
          >
            The Complete Ecosystem
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
            Every service you need, seamlessly connected. No more juggling multiple platforms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-b from-[#1a1a2e] to-[#1a1a2e]/80 rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <Check className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Diagram */}
      <section className="py-20 px-4 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-b from-[#1a1a2e]/60 to-[#1a1a2e]/40 rounded-3xl p-8 md:p-12 border border-indigo-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              How Everything Works Together
            </h2>

            <div className="space-y-8">
              {/* First Row: Create to Grow */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center items-center gap-4"
              >
                {[
                  { icon: Music, label: 'Create', desc: 'Produce & release music' },
                  { icon: Smartphone, label: 'Connect', desc: 'Social media & bio link' },
                  { icon: Radio, label: 'Engage', desc: 'Live shows & experiences' },
                  { icon: TrendingUp, label: 'Grow', desc: 'Analytics & insights' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="bg-indigo-500/10 border-2 border-indigo-500/30 rounded-xl p-4 text-center min-w-[150px]">
                      <item.icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                      <h4 className="text-indigo-400 font-semibold text-sm">{item.label}</h4>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                    {i < 3 && <ArrowRight className="w-6 h-6 text-indigo-400" />}
                  </div>
                ))}
              </motion.div>

              {/* Second Row: Central Hub */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center items-center gap-4"
              >
                {[
                  { icon: Smartphone, label: 'Social Media', desc: 'Engagement Data' },
                  { icon: Globe, label: 'Link-in-Bio', desc: 'Conversion Data' },
                  { icon: BarChart3, label: 'ARTIST PORTAL', desc: 'The Heart of Your Career', featured: true },
                  { icon: Radio, label: 'Live Events', desc: 'Fan Interaction' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`bg-indigo-500/10 border-2 rounded-xl p-4 text-center min-w-[150px] ${item.featured ? 'border-indigo-500 bg-gradient-to-br from-indigo-500 to-purple-600' : 'border-indigo-500/30'}`}>
                      <item.icon className={`w-6 h-6 mx-auto mb-2 ${item.featured ? 'text-white' : 'text-indigo-400'}`} />
                      <h4 className={`font-semibold text-sm ${item.featured ? 'text-white text-base' : 'text-indigo-400'}`}>{item.label}</h4>
                      <p className={`text-xs ${item.featured ? 'text-white/90' : 'text-gray-400'}`}>{item.desc}</p>
                    </div>
                    {i < 3 && <ArrowRight className="w-6 h-6 text-indigo-400 rotate-90 md:rotate-0" />}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent"
          >
            Choose Your Path
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
            Three tiers designed to match where you are in your music career
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={pkg.featured ? { scale: 1.05 } : { y: -10 }}
                className={`relative bg-gradient-to-b from-[#1a1a2e] to-[#1a1a2e]/80 rounded-2xl p-8 border ${pkg.featured ? 'border-2 border-indigo-500 scale-105' : 'border-indigo-500/20'} hover:border-indigo-500/50 transition-all duration-300`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className={`text-4xl font-extrabold ${pkg.featured ? 'bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent' : 'text-white'}`}>
                    {pkg.price}
                  </span>
                  <span className="text-gray-400">{pkg.period}</span>
                </div>
                <p className="text-indigo-400 mb-4">{pkg.revenueShare}</p>
                <p className="text-gray-300 mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className={`flex items-start ${feature === false ? 'opacity-40' : ''}`}>
                      {feature !== false ? (
                        <Check className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-gray-300 text-sm">{typeof feature === 'string' ? feature : 'Advanced AI insights'}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${pkg.featured ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/30' : 'bg-transparent border-2 border-indigo-500 text-white hover:bg-indigo-500/10'}`}
                >
                  {pkg.featured ? 'Get Started' : 'Learn More'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-20 px-4 bg-[#0a0a0f]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent"
          >
            See It In Action
          </motion.h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
            Real-world scenarios showing how the ecosystem powers your career
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'release', label: '🎵 Release Your Music' },
              { id: 'show', label: '🎟️ Host a Show' },
              { id: 'growth', label: '📈 Grow Your Audience' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveScenario(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeScenario === tab.id 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' 
                    : 'bg-[#1a1a2e] border-2 border-indigo-500/30 text-white hover:border-indigo-500/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div 
            key={activeScenario}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-b from-[#1a1a2e]/60 to-[#1a1a2e]/40 rounded-2xl p-8 border border-indigo-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {scenarios[activeScenario as keyof typeof scenarios].title}
            </h3>

            <div className="space-y-8">
              {scenarios[activeScenario as keyof typeof scenarios].timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-gradient-to-b from-indigo-500 to-purple-600"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 bg-indigo-500 rounded-full border-4 border-[#0a0a0f]" />
                  <div className="text-indigo-400 font-semibold mb-2">{item.date}</div>
                  <div className="bg-indigo-500/10 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3">{item.title}</h4>
                    <ul className="space-y-2">
                      {item.items.map((subItem, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <ArrowRight className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f] text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent"
          >
            Ready to Transform Your Music Career?
          </motion.h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the HLPFL ecosystem and start building your complete music career today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
            >
              Start Your Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-indigo-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-500/10 transition-all duration-300"
            >
              Schedule a Demo
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050508] py-12 px-4 border-t border-indigo-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">
            © 2024 HLPFL. All rights reserved. | Your Complete Music Career Ecosystem
          </p>
        </div>
      </footer>
    </div>
  );
}