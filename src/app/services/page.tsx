'use client'

import { motion } from 'framer-motion'
import { 
  Mic, 
  Headphones, 
  Globe, 
  Users, 
  Zap, 
  Star,
  Music,
  TrendingUp,
  Award,
  CheckCircle
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const ServicesPage = () => {
  const services = [
    {
      icon: <Mic className="w-12 h-12" />,
      title: 'Artist Development',
      category: 'Development',
      description: 'Comprehensive artist development programs designed to transform raw talent into professional performers.',
      features: [
        'Vocal coaching and training',
        'Songwriting workshops',
        'Performance training',
        'Stage presence development',
        'Career guidance',
        'Personal branding'
      ],
      price: 'Custom',
      duration: '6-24 months'
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: 'Music Production',
      category: 'Production',
      description: 'Professional music production services from concept to final master, ensuring your music sounds industry-ready.',
      features: [
        'Professional recording',
        'Mixing and mastering',
        'Beat production',
        'Session musicians',
        'Vocal production',
        'Sound design'
      ],
      price: 'Project-based',
      duration: '2-8 weeks'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Distribution & Marketing',
      category: 'Marketing',
      description: 'Strategic distribution to all major platforms and comprehensive marketing campaigns to reach your audience.',
      features: [
        'Digital distribution',
        'Social media marketing',
        'Influencer campaigns',
        'PR and press coverage',
        'Playlist pitching',
        'Brand partnerships'
      ],
      price: 'Revenue share',
      duration: 'Ongoing'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'A&R Services',
      category: 'A&R',
      description: 'Expert A&R services including talent scouting, repertoire development, and strategic career planning.',
      features: [
        'Talent scouting',
        'Repertoire development',
        'Artist pairing',
        'Market analysis',
        'Strategic planning',
        'Industry connections'
      ],
      price: 'Commission',
      duration: 'Ongoing'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Tour & Live Events',
      category: 'Live',
      description: 'Complete tour and live event management from booking to execution, bringing your music to fans worldwide.',
      features: [
        'Tour booking',
        'Event management',
        'Live performance support',
        'Tour logistics',
        'Merchandise integration',
        'Fan engagement'
      ],
      price: 'Revenue share',
      duration: 'Tour-based'
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: 'Artist Branding',
      category: 'Branding',
      description: 'Complete brand development including visual identity, content creation, and strategic positioning.',
      features: [
        'Visual identity design',
        'Music video production',
        'Photography',
        'Merchandise design',
        'Content strategy',
        'Social media branding'
      ],
      price: 'Project-based',
      duration: '4-12 weeks'
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '50/50 Partnership',
      description: 'Fair revenue sharing that ensures we succeed when our artists succeed.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Industry Expertise',
      description: 'Decades of combined experience from across the music industry.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Worldwide distribution and marketing capabilities.'
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Artist-First Approach',
      description: 'Every decision is made with the artist\'s best interests in mind.'
    }
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
                <Star className="w-4 h-4 mr-2" />
                Our Services
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-none">
                Complete Record Label
                <span className="text-gradient-gold"> Services</span>
              </h1>

              <p className="text-xl md:text-2xl text-text/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Everything you need to transform your musical talent into a successful music career, 
                all under one roof with transparent partnerships and expert guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  href="https://calendly.com/founder-hlpfl/30min"
                  target="_blank"
                  size="lg"
                >
                  Get Started
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="#services"
                >
                  View Services
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding section-bg">
          <div className="container-premium">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="badge-gold inline-flex items-center mb-6">
                <Award className="w-4 h-4 mr-2" />
                Why Choose HLPFL
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                The <span className="text-gradient-accent">HLPFL</span> Advantage
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  variant="service"
                  hover
                  delay={index * 0.1}
                  className="text-center"
                >
                  <div className="text-gold mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-text/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
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
                <Star className="w-4 h-4 mr-2" />
                All Services
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Comprehensive <span className="text-gradient-gold">Solutions</span>
              </h2>
              <p className="text-xl text-text/80 max-w-3xl mx-auto">
                From development to distribution, we provide end-to-end services for every stage of your music career.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  variant="premium"
                  hover
                  delay={index * 0.1}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-gold">
                      {service.icon}
                    </div>
                    <div className="flex gap-3">
                      <span className="badge-gold text-xs">
                        {service.category}
                      </span>
                      <span className="badge-accent text-xs">
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 font-display">
                    {service.title}
                  </h3>

                  <p className="text-text/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-text/80">
                        <CheckCircle className="w-4 h-4 text-gold mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gold/20">
                    <div>
                      <div className="text-gold font-semibold">
                        {service.price}
                      </div>
                      <div className="text-text/60 text-sm">
                        {service.duration}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding section-bg">
          <div className="container-premium">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="badge-gold inline-flex items-center mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Our Process
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                How We <span className="text-gradient-accent">Work</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'We identify and evaluate talent through our comprehensive A&R process.'
                },
                {
                  step: '02',
                  title: 'Development',
                  description: 'Custom development programs tailored to each artist\'s unique needs.'
                },
                {
                  step: '03',
                  title: 'Production',
                  description: 'Professional production services to bring your vision to life.'
                },
                {
                  step: '04',
                  title: 'Launch',
                  description: 'Strategic release and marketing to maximize your reach and impact.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-display font-bold text-gold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text/80 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-premium">
            <motion.div
              className="card-premium text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="badge-gold inline-flex items-center mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Ready to Start
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Transform Your
                <span className="text-gradient-gold"> Music Career</span>
              </h2>
              <p className="text-xl text-text/80 mb-12 max-w-2xl mx-auto">
                Take the first step towards a successful music career with our comprehensive 
                artist development and support services.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  href="https://calendly.com/founder-hlpfl/30min"
                  target="_blank"
                  size="lg"
                >
                  Book Consultation
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/contact"
                >
                  Contact Us
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

export default ServicesPage