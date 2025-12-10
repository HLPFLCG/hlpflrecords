'use client'

import { motion } from 'framer-motion'
import { Award, Users, TrendingUp, Music, Target, Zap } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const AboutPage = () => {
  const storyTimeline = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Founded with a vision to revolutionize the music industry through artist-first partnerships and transparent business models.'
    },
    {
      year: '2021',
      title: 'First Success',
      description: 'Launched our first artist to mainstream success with over 10M streams and secured major festival placements.'
    },
    {
      year: '2023',
      title: 'Expansion',
      description: 'Expanded our services to include full-scale production, marketing, and international distribution networks.'
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Recognized as one of the most innovative independent labels with a roster of 50+ successful artists.'
    }
  ]

  const teamMembers = [
    {
      name: 'Jim Rockel',
      role: 'CEO & Founder',
      bio: 'Strategic vision and investor relations with 15+ years in music industry leadership.',
      image: '/team/jim-rockel.jpg'
    },
    {
      name: 'Jahis Pierre',
      role: 'President of A&R',
      bio: 'Artist development and creative direction with a track record of discovering breakthrough talent.',
      image: '/team/jahis-pierre.jpg'
    },
    {
      name: 'Chris Pico',
      role: 'CMO',
      bio: 'Marketing strategy and brand development expert with extensive digital media experience.',
      image: '/team/chris-pico.jpg'
    },
    {
      name: 'Matt Keep',
      role: 'COO',
      bio: 'Operations and logistics management ensuring seamless artist support and service delivery.',
      image: '/team/matt-keep.jpg'
    }
  ]

  const stats = [
    { number: '50M+', label: 'Total Streams', icon: <Music className="w-6 h-6" /> },
    { number: '200+', label: 'Artists Developed', icon: <Users className="w-6 h-6" /> },
    { number: '15', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
    { number: '50/50', label: 'Artist Split', icon: <TrendingUp className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-primary">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
          <div className="container-premium">
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
                <Award className="w-4 h-4 mr-2" />
                Our Story
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-none">
                <span className="text-gradient-gold">Revolutionizing</span> the Music Industry
              </h1>

              <p className="text-xl md:text-2xl text-text/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                We're not just another record label. We're a movement that puts artists first, 
                combining traditional music industry expertise with cutting-edge technology and 
                transparent partnerships.
              </p>
            </motion.div>
          </div>
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
                  <div className="text-gold mb-3 flex justify-center">
                    {stat.icon}
                  </div>
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

        {/* Story Timeline */}
        <section className="section-padding">
          <div className="container-premium">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="badge-accent inline-flex items-center mb-6">
                <Target className="w-4 h-4 mr-2" />
                Our Journey
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                The <span className="text-gradient-accent">Evolution</span> of Excellence
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {storyTimeline.map((item, index) => (
                <Card
                  key={index}
                  variant="premium"
                  hover
                  delay={index * 0.1}
                >
                  <div className="text-3xl font-display font-bold text-gold mb-3">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-text/80 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding section-bg">
          <div className="container-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="badge-gold inline-flex items-center mb-6">
                  <Zap className="w-4 h-4 mr-2" />
                  Our Mission
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Empowering Artists, 
                  <span className="text-gradient-gold"> Transforming</span> Careers
                </h2>
                <p className="text-text/80 leading-relaxed mb-6">
                  We exist to democratize the music industry by providing independent artists 
                  with the resources, expertise, and support they need to compete at the highest level. 
                  Our 50/50 partnership model ensures that when our artists succeed, we succeed together.
                </p>
                <p className="text-text/80 leading-relaxed">
                  Through cutting-edge technology, data-driven insights, and a deep understanding of 
                  both art and commerce, we're building a new paradigm for artist development and success.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" className="p-8">
                  <div className="badge-accent inline-flex items-center mb-6">
                    <Target className="w-4 h-4 mr-2" />
                    Our Vision
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    The Future of Music
                  </h3>
                  <p className="text-text/80 leading-relaxed">
                    To create a music industry where artistic integrity and commercial success 
                    go hand in hand, where artists have full control over their careers, and where 
                    innovation drives every decision.
                  </p>
                  <div className="mt-6 space-y-3">
                    {[
                      'Transparent partnerships',
                      'Data-driven decisions', 
                      'Artist empowerment',
                      'Industry innovation'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-text/80">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                        {item}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding">
          <div className="container-premium">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="badge-gold inline-flex items-center mb-6">
                <Users className="w-4 h-4 mr-2" />
                Leadership Team
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Meet the <span className="text-gradient-accent">Visionaries</span>
              </h2>
              <p className="text-xl text-text/80 max-w-3xl mx-auto">
                Our leadership team brings together decades of experience from across the music industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  variant="premium"
                  hover
                  delay={index * 0.1}
                  className="text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-6 gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-display font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="text-gold font-semibold mb-3">
                    {member.role}
                  </div>
                  <p className="text-text/80 text-sm leading-relaxed">
                    {member.bio}
                  </p>
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
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to Join the
                <span className="text-gradient-gold"> Revolution?</span>
              </h2>
              <p className="text-xl text-text/80 mb-12 max-w-2xl mx-auto">
                Discover how HLPFL Records can transform your musical journey into a success story.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  href="https://calendly.com/founder-hlpfl/30min"
                  target="_blank"
                  size="lg"
                >
                  Book a Consultation
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/contact"
                >
                  Learn More
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

export default AboutPage