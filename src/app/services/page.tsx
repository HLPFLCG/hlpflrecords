'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check, Briefcase, PenTool, TrendingUp, FileText, Users, Shield, Lightbulb, Palette, Music, Pencil, Wrench } from 'lucide-react';

export default function ServicesPage() {
  const [activeCreative, setActiveCreative] = useState('inventor');

  useEffect(() => {
    document.title = 'HLPFL Services - Business Development for Creative Entrepreneurs';
  }, []);

  const services = [
    {
      icon: PenTool,
      title: 'Brand Development & Identity',
      description: 'Build a compelling brand that resonates with your audience and stands out in the market.',
      features: [
        'Brand strategy & positioning',
        'Visual identity development',
        'Messaging & voice guidelines',
        'Brand asset creation',
        'Market differentiation'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Briefcase,
      title: 'Business Entity Formation',
      description: 'Get your business properly structured with the right legal foundation for success.',
      features: [
        'LLC/Corporation setup guidance',
        'Business registration support',
        'EIN application assistance',
        'Operating agreements',
        'Compliance guidance'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Sales Representation',
      description: 'Let us handle the sales so you can focus on creating. We earn when you earn.',
      features: [
        'Direct sales outreach',
        'Client relationship management',
        'Deal negotiation support',
        'Pipeline management',
        'Revenue optimization'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FileText,
      title: 'Marketing Strategy & Execution',
      description: 'Strategic marketing that gets your work in front of the right people.',
      features: [
        'Go-to-market strategy',
        'Content marketing',
        'Social media management',
        'Email campaigns',
        'PR & media outreach'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Content Creation & Social Media',
      description: 'Professional content that tells your story and builds your audience.',
      features: [
        'Social media strategy',
        'Content calendar planning',
        'Visual content creation',
        'Video production support',
        'Community management'
      ],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Contract Negotiation Support',
      description: 'Protect yourself with guidance on contracts, rights, and fair terms.',
      features: [
        'Contract review guidance',
        'Rights protection education',
        'Negotiation strategy',
        'Red flag identification',
        'Fair terms advocacy'
      ],
      color: 'from-red-500 to-red-600'
    }
  ];

  const creativeTypes = [
    {
      id: 'inventor',
      icon: Lightbulb,
      title: 'Inventors',
      subtitle: 'Patent holders & product developers',
      description: 'You have a patent or product but need help getting it to market. We handle the business side so you can focus on innovation.',
      benefits: [
        'Sales representation to retailers and distributors',
        'Marketing materials and product positioning',
        'Business entity setup and licensing guidance',
        'Contract review for manufacturing and distribution deals'
      ]
    },
    {
      id: 'musician',
      icon: Music,
      title: 'Musicians',
      subtitle: 'Artists, producers & bands',
      description: 'Build a sustainable music career without signing away your rights. Keep 100% ownership while getting professional support.',
      benefits: [
        'Distribution and release strategy',
        'Brand development and visual identity',
        'Marketing and social media management',
        'Business setup and revenue optimization'
      ]
    },
    {
      id: 'artist',
      icon: Palette,
      title: 'Visual Artists',
      subtitle: 'Painters, illustrators & photographers',
      description: 'Get your art in front of collectors and clients without gallery gatekeepers taking massive cuts.',
      benefits: [
        'Portfolio development and presentation',
        'Collector outreach and sales representation',
        'Licensing and rights management guidance',
        'Exhibition and showcase opportunities'
      ]
    },
    {
      id: 'designer',
      icon: Wrench,
      title: 'Designers',
      subtitle: 'Industrial, fashion & UX/UI',
      description: 'Turn your designs into products and services that generate real revenue.',
      benefits: [
        'Product development support',
        'Client acquisition and sales',
        'Brand positioning and marketing',
        'Business operations setup'
      ]
    },
    {
      id: 'writer',
      icon: Pencil,
      title: 'Writers',
      subtitle: 'Authors, screenwriters & content creators',
      description: 'Build an audience and monetize your writing without exploitative publishing deals.',
      benefits: [
        'Platform building and audience development',
        'Publishing strategy and distribution',
        'Rights protection and contract guidance',
        'Marketing and promotional support'
      ]
    }
  ];

  const activeType = creativeTypes.find(t => t.id === activeCreative) || creativeTypes[0];
  const ActiveIcon = activeType.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-purple-500/10 to-transparent animate-pulse" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <div className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            501(c)(3) Nonprofit Organization
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent">
            Business Development for Creative Entrepreneurs
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Professional business support with <span className="text-gold font-bold">zero upfront costs</span>.
            We provide the tools and expertise you need to succeed.
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Commission-only model: <span className="text-white font-semibold">We earn when you earn.</span> No fees until you make money.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gold to-yellow-500 text-dark px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
              >
                Apply to Partner
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-gold/10 transition-all duration-300"
              >
                Learn About Our Mission
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Our Model Section */}
      <section className="py-20 px-4 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#1a1a2e]/60 to-[#1a1a2e]/40 rounded-3xl p-8 md:p-12 border border-gold/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              How Our <span className="text-gold">Commission-Only</span> Model Works
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
              Traditional services charge thousands upfront with no guaranteed results. We do the opposite.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold text-2xl font-bold">$0</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Zero Upfront</h3>
                <p className="text-gray-400">No fees, no subscriptions, no deposits. We invest our time and resources in you first.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">We Work For You</h3>
                <p className="text-gray-400">Sales, marketing, business development—we handle it so you can focus on creating.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Commission on Success</h3>
                <p className="text-gray-400">We only earn when we facilitate a sale for you. Typically 15-30% depending on services provided.</p>
              </motion.div>
            </div>

            <div className="mt-12 p-6 bg-gold/5 rounded-xl border border-gold/20">
              <p className="text-center text-gray-300">
                <span className="text-gold font-semibold">Why commission-only?</span> Because our incentives should be aligned with yours.
                If we don&apos;t help you make money, we don&apos;t make money. That&apos;s how it should be.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent"
          >
            What We Provide
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
            Comprehensive business development services—no upfront costs, commission only.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="bg-gradient-to-b from-[#1a1a2e] to-[#1a1a2e]/80 rounded-2xl p-6 border border-gold/20 hover:border-gold/50 transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <Check className="w-4 h-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
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

      {/* Who We Serve Section */}
      <section className="py-20 px-4 bg-[#0f0f1a]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent"
          >
            Who We Serve
          </motion.h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
            We work with creative entrepreneurs across all disciplines who have viable products or services but need business support.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {creativeTypes.map((type) => {
              const TypeIcon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveCreative(type.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeCreative === type.id
                      ? 'bg-gradient-to-r from-gold to-yellow-500 text-dark'
                      : 'bg-[#1a1a2e] border-2 border-gold/30 text-white hover:border-gold/50'
                  }`}
                >
                  <TypeIcon className="w-5 h-5" />
                  {type.title}
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeCreative}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-b from-[#1a1a2e]/60 to-[#1a1a2e]/40 rounded-2xl p-8 border border-gold/20"
          >
            <div className="flex items-start gap-6 flex-col md:flex-row">
              <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <ActiveIcon className="w-10 h-10 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{activeType.title}</h3>
                <p className="text-gold mb-4">{activeType.subtitle}</p>
                <p className="text-gray-300 mb-6">{activeType.description}</p>
                <h4 className="text-white font-semibold mb-3">How we help:</h4>
                <ul className="space-y-2">
                  {activeType.benefits.map((benefit, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <ArrowRight className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-[#0a0a0f]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
          >
            Traditional Services vs. <span className="text-gold">HLPFL</span>
          </motion.h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
            See why our model works better for creative entrepreneurs.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-red-500/10 to-red-500/5 rounded-2xl p-8 border border-red-500/20"
            >
              <h3 className="text-xl font-bold text-red-400 mb-6">Traditional Services</h3>
              <ul className="space-y-4">
                {[
                  'Thousands in upfront fees',
                  'No guarantee of results',
                  'They profit whether you succeed or not',
                  'Exploitative contract terms',
                  'Hidden fees and upsells',
                  'You bear all the risk'
                ].map((item, i) => (
                  <li key={i} className="text-gray-400 flex items-start">
                    <span className="text-red-400 mr-3">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-gold/10 to-gold/5 rounded-2xl p-8 border border-gold/20"
            >
              <h3 className="text-xl font-bold text-gold mb-6">HLPFL Model</h3>
              <ul className="space-y-4">
                {[
                  'Zero upfront costs',
                  'We invest our time first',
                  'We only earn when you earn',
                  'Transparent, fair commission',
                  'No hidden fees ever',
                  'We share the risk with you'
                ].map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nonprofit Mission Section */}
      <section className="py-20 px-4 bg-[#0f0f1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#1a1a2e]/60 to-[#1a1a2e]/40 rounded-3xl p-8 md:p-12 border border-gold/20"
          >
            <div className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Wyoming 501(c)(3) Nonprofit
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              To advocate for fair treatment, equitable compensation, and protection of rights for creative entrepreneurs—including <span className="text-gold">inventors, artists, musicians, designers, and writers</span>—by providing free and subsidized business development services with no upfront costs.
            </p>
            <p className="text-gray-400">
              We&apos;re not here to take from creators. We&apos;re here to help them succeed on their own terms.
            </p>
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent"
          >
            Ready to Partner With Us?
          </motion.h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have a viable product or creative work and need business support, let&apos;s talk.
            Zero upfront costs. We earn when you earn.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gold to-yellow-500 text-dark px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
              >
                Apply to Partner
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-gold/10 transition-all duration-300"
              >
                Learn More About Us
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
