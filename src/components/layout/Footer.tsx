'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Music,
  Users,
  Mic,
  ShoppingBag,
  FileText,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import { cn } from '@/lib/utils'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Services',
      links: [
        { href: '/services', label: 'Artist Development' },
        { href: '/services', label: 'Music Production' },
        { href: '/services', label: 'Distribution' },
        { href: '/services', label: 'A&R Services' }
      ]
    },
    {
      title: 'Music',
      links: [
        { href: '/artists', label: 'Our Artists' },
        { href: '/music', label: 'Releases' },
        { href: '/shop', label: 'Merchandise' },
        { href: '/demo-submission', label: 'Demo Submissions' }
      ]
    },
    {
      title: 'Company',
      links: [
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' }
      ]
    }
  ]

  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Youtube, label: 'YouTube' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' }
  ]

  const contactInfo = [
    { icon: Mail, text: 'info@hlpflrecords.com', href: 'mailto:info@hlpflrecords.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'Tampa, Florida', href: '#' }
  ]

  return (
    <footer className="section-bg border-t border-gold/20">
      <div className="container-premium section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl font-display">H</span>
                </div>
                <span className="text-white font-bold text-2xl font-display">
                  HLPFL Records
                </span>
              </div>
            </Link>

            <p className="text-text/80 leading-relaxed mb-6 max-w-md">
              Transforming musical talent into success stories. We help independent artists 
              launch successful music careers through comprehensive record label services 
              and artist development.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center',
                      'bg-gold/10 border border-gold/30 text-gold',
                      'hover:bg-gold hover:text-primary transition-all duration-300'
                    )}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-text/80 hover:text-gold transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <Icon className="w-4 h-4 text-gold" />
                    {contact.href ? (
                      <a href={contact.href} className="hover:text-gold">
                        {contact.text}
                      </a>
                    ) : (
                      <span>{contact.text}</span>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-6 font-display">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.href}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-text/80 hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gold/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-text/60 text-sm">
            © {currentYear} HLPFL Records. All rights reserved. Built with passion for music artists.
          </p>

          <div className="flex items-center space-x-6 text-text/60 text-sm">
            <Link href="/privacy" className="hover:text-gold transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer