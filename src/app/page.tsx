'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Music, Users, Headphones, Star, ArrowRight, Mic, Zap, Globe } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: 'Artist Development',
      description: 'Vocal coaching, songwriting workshops, performance training, and career guidance to shape you into a professional artist.',
      features: ['Vocal Training', 'Songwriting', 'Performance', 'Career Guidance']
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Music Production',
      description: 'Professional recording, mixing, mastering, and beat production services to make your music sound industry-ready.',
      features: ['Recording', 'Mixing', 'Mastering', 'Beat Production']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Distribution & Marketing',
      description: 'Digital distribution to all major platforms, social media marketing, and promotional campaigns to reach your audience.',
      features: ['Digital Distribution', 'Social Media', 'Promotion', 'Brand Strategy']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'A&R Services',
      description: 'Talent scouting, repertoire development, and strategic artist pairing to find and develop the next big stars.',
      features: ['Talent Scouting', 'Artist Development', 'Strategic Planning', 'Industry Connections']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Tour & Live Events',
      description: 'Concert booking, event management, and live performance support to bring your music to fans worldwide.',
      features: ['Tour Booking', 'Event Management', 'Live Support', 'Fan Engagement']
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Artist Branding',
      description: 'Visual identity creation, music video production, and merchandise development to build your unique artist brand.',
      features: ['Visual Identity', 'Music Videos', 'Merchandise', 'Brand Strategy']
    }
  ]

  const stats = [
    { number: '50M+', label: 'Streams Generated' },
    { number: '200+', label: 'Artists Developed' },
    { number: '15', label: 'Years Experience' },
    { number: '50/50', label: 'Artist Partnership' }
  ]

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-8 gradient-gold rounded-full flex items-center justify-center"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Music className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1
            className="text-gradient-gold text-3xl font-display font-bold mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            HLPFL Records
          </motion.h1>
          <motion.p
            className="text-text/80"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            Music Loading...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="container-premium relative z-10">
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
                <Zap className="w-4 h-4 mr-2" />
                Revolutionizing the Music Industry
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-6 leading-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="text-gradient-gold">Sound</span> → Success
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-text/80 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                We help independent artists launch successful music careers through comprehensive 
                record label services. From artist development to distribution, marketing to A&R - 
                we've got your music journey covered.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Button
                  href="https://calendly.com/founder-hlpfl/30min"
                  target="_blank"
                  size="lg"
                  icon={<Mic className="w-5 h-5" />}
                >
                  Submit Your Demo
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<Users className="w-5 h-5" />}
                  href="#services"
                >
                  Explore Artists
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gold rounded-full mt-2" />
            </div>
          </motion.div>
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
              {stats.map((stat, index) => (
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

        {/* Services Section */}
        <section id="services" className="section-padding">
          <div className="container-premium">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="badge-accent inline-flex items-center mb-6">
                <Music className="w-4 h-4 mr-2" />
                What We Do
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Complete Record Label
                <span className="text-gradient-accent"> Services</span>
              </h2>
              <p className="text-xl text-text/80 max-w-3xl mx-auto">
                Everything you need to transform your musical talent into a successful music career.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  variant="service"
                  hover
                  delay={index * 0.1}
                >
                  <div className="text-gold mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">
                    {service.title}
                  </h3>
                  <p className="text-text/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-text/70 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
                Get Started
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to Launch Your
                <span className="text-gradient-gold"> Music Career?</span>
              </h2>
              <p className="text-xl text-text/80 mb-12 max-w-2xl mx-auto">
                Let's turn your musical talent into a successful career. Book a free A&R consultation 
                and let's discuss how we can help you become our next signed artist.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  href="https://calendly.com/founder-hlpfl/30min"
                  target="_blank"
                  size="lg"
                  icon={<Mic className="w-5 h-5" />}
                >
                  Submit Your Demo
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/contact"
                >
                  Contact A&R
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

export default HomePage