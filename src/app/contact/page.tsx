'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Music,
  Mic
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { cn } from '@/lib/utils'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artistName: '',
    genre: '',
    message: '',
    submissionType: 'demo'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'info@hlpflrecords.com',
      href: 'mailto:info@hlpflrecords.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Tampa, Florida',
      href: '#'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM EST',
      href: '#'
    }
  ]

  const submissionTypes = [
    { value: 'demo', label: 'Demo Submission' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'investment', label: 'Investment' }
  ]

  const genres = [
    'Pop', 'Rock', 'Hip-Hop', 'R&B', 'Electronic', 
    'Country', 'Jazz', 'Classical', 'Alternative', 'Indie'
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-primary">
        <Header />
        <main className="min-h-screen flex items-center justify-center section-padding">
          <div className="container-premium">
            <motion.div
              className="card-premium text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 gradient-gold rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Thank You!
              </h2>
              <p className="text-xl text-text/80 mb-8">
                Your message has been received successfully. Our team will get back to you within 24-48 hours.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    artistName: '',
                    genre: '',
                    message: '',
                    submissionType: 'demo'
                  })
                }}
              >
                Send Another Message
              </Button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

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
                <Mic className="w-4 h-4 mr-2" />
                Get In Touch
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-none">
                Let's Make
                <span className="text-gradient-gold"> Music Together</span>
              </h1>

              <p className="text-xl md:text-2xl text-text/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Ready to take your music career to the next level? Submit your demo, 
                ask questions, or explore partnership opportunities with our team.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  href="https://calendly.com/founder-hlpfl/30min"
                  target="_blank"
                  size="lg"
                  icon={<Mic className="w-5 h-5" />}
                >
                  Book A&R Call
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="#contact-form"
                >
                  Send Message
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding section-bg">
          <div className="container-premium">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="card-service text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-gold mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.label}
                  </h3>
                  <p className="text-text/80 group-hover:text-gold transition-colors">
                    {info.value}
                  </p>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="section-padding">
          <div className="container-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Form Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="badge-gold inline-flex items-center mb-6">
                  <Send className="w-4 h-4 mr-2" />
                  Contact Form
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Send Us Your
                  <span className="text-gradient-accent"> Music</span>
                </h2>
                <p className="text-text/80 leading-relaxed mb-8">
                  Whether you're an artist looking to submit your demo, a brand seeking 
                  partnerships, or an investor interested in our vision, we'd love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Demo Submissions
                      </h3>
                      <p className="text-text/80">
                        Submit your music for A&R consideration. We review every submission personally 
                        and provide feedback within 2 weeks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Mic className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Artist Development
                      </h3>
                      <p className="text-text/80">
                        Learn about our comprehensive artist development programs and how we can 
                        help shape your music career.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card variant="premium">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Submission Type */}
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Submission Type
                      </label>
                      <select
                        name="submissionType"
                        value={formData.submissionType}
                        onChange={handleInputChange}
                        className="w-full input-premium"
                        required
                      >
                        {submissionTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full input-premium"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full input-premium"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone and Artist Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full input-premium"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-semibold mb-2">
                          Artist/Band Name
                        </label>
                        <input
                          type="text"
                          name="artistName"
                          value={formData.artistName}
                          onChange={handleInputChange}
                          className="w-full input-premium"
                          placeholder="Your Artist Name"
                        />
                      </div>
                    </div>

                    {/* Genre */}
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Music Genre
                      </label>
                      <select
                        name="genre"
                        value={formData.genre}
                        onChange={handleInputChange}
                        className="w-full input-premium"
                      >
                        <option value="">Select a genre</option>
                        {genres.map(genre => (
                          <option key={genre} value={genre}>
                            {genre}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full input-premium resize-none"
                        placeholder="Tell us about yourself and your music..."
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding section-bg">
          <div className="container-premium">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="badge-accent inline-flex items-center mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Got <span className="text-gradient-gold">Questions?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: 'How long does it take to hear back about demo submissions?',
                  answer: 'We personally review every submission and aim to respond within 2 weeks. If your submission is selected for further consideration, we\'ll reach out to schedule a meeting.'
                },
                {
                  question: 'What genres of music are you looking for?',
                  answer: 'We\'re open to all genres of music. What matters most is quality, originality, and commercial potential. We believe great music transcends genre boundaries.'
                },
                {
                  question: 'Do I need to have music already produced?',
                  answer: 'Not necessarily. We work with artists at all stages of development. Whether you have finished tracks or just ideas and demos, we\'d like to hear from you.'
                },
                {
                  question: 'What makes HLPFL Records different from other labels?',
                  answer: 'Our 50/50 partnership model, comprehensive artist development programs, and focus on artist empowerment set us apart. We believe in building long-term careers, not just hit singles.'
                }
              ].map((faq, index) => (
                <Card
                  key={index}
                  variant="service"
                  hover
                  delay={index * 0.1}
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-text/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage