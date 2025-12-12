'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Mail, Phone, MapPin, Clock, Send, Music, Users, Briefcase } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form or show success message
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@hlpflrecords.com',
      href: 'mailto:contact@hlpflrecords.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Music Row, Nashville, TN 37203',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Office Hours',
      value: 'Mon-Fri: 9AM-6PM EST',
      href: '#'
    }
  ]

  const inquiryTypes = [
    {
      icon: Music,
      title: 'Artist Submissions',
      description: 'Submit your music for consideration. Please include links to your work and a brief bio.',
      type: 'artist-submission'
    },
    {
      icon: Users,
      title: 'General Inquiries',
      description: 'Questions about our artists, releases, or services? We\'re here to help.',
      type: 'general'
    },
    {
      icon: Briefcase,
      title: 'Business Partnerships',
      description: 'Interested in collaboration, licensing, or other business opportunities.',
      type: 'business'
    }
  ]

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Founded by James Rockel at 18 and powered by co-founder Alki's boundary-pushing artistry, 
            we're redefining music industry partnerships. Whether you're interested in our revolutionary 50/50 model, 
            want to join the movement, or have questions about artist success, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card key={index} hover className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{info.label}</h3>
                    {info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? (
                      <a 
                        href={info.href}
                        className="text-gray-300 hover:text-gold transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Send us a <span className="text-gold">Message</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-secondary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-secondary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-white font-medium mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-secondary border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="artist-submission">Artist Submission</option>
                    <option value="business">Business Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-secondary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-secondary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Inquiry Types */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                How can we <span className="text-gold">help you</span>?
              </h2>
              
              <div className="space-y-6">
                {inquiryTypes.map((type) => {
                  const Icon = type.icon
                  return (
                    <Card key={type.type} hover className="cursor-pointer" onClick={() => setFormData({ ...formData, type: type.type })}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-gold" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{type.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-dark-secondary rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Response Times</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span>General inquiries: 24-48 hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span>Artist submissions: 1-2 weeks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span>Business inquiries: 48-72 hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
