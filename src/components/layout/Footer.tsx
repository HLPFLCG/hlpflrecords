import React from 'react'
import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react'
import Logo from '../Logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/hlpfl_/' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/hlpfl_' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/hlpfl' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@hlpfl.org' },
  ]

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'News', href: '/news' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Brand Development', href: '/services' },
      { name: 'Sales Representation', href: '/services' },
      { name: 'Marketing Strategy', href: '/services' },
      { name: 'Contract Support', href: '/services' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Cookie Policy', href: '/legal/cookies' },
    ],
  }

  return (
    <footer className="bg-[#0a0a0a] border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Logo width={40} height={40} />
              <span className="text-white font-bold text-xl">HLPFL Inc</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              HLPFL Inc is a Wyoming 501(c)(3) nonprofit providing commission-only business development services for creative entrepreneurs—inventors, artists, musicians, designers, and writers.
            </p>
            <p className="text-gold font-semibold mb-6">
              Zero upfront costs. We earn when you earn.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-300"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} HLPFL Inc. A Wyoming 501(c)(3) nonprofit organization.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Empowering Creative Entrepreneurs
          </p>
        </div>
      </div>
    </footer>
  )
}
