'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '../ui/Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/artists', label: 'Artists' },
    { href: '/services', label: 'Services' },
    { href: '/music', label: 'Music' },
    { href: '/investors', label: 'Investors' },
    { href: '/contact', label: 'Contact' }
  ]

  const dropdownItems = [
    { href: '/artists', label: 'Our Artists' },
    { href: '/music', label: 'Releases' },
    { href: '/shop', label: 'Merchandise' },
    { href: '/demo-submission', label: 'Demo Submission' }
  ]

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl shadow-lg border-b border-gold/20' 
          : 'bg-black/60 backdrop-blur-lg'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl font-display">H</span>
              </div>
              <span className="text-white font-bold text-2xl font-display hidden sm:block">
                HLPFL Records
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'nav-link relative py-2',
                  pathname === item.href && 'nav-link-active'
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    layoutId="activeNav"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}

            {/* Music Dropdown */}
            <div className="relative group">
              <button className="nav-link flex items-center space-x-1 py-2">
                <span>Music</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <motion.div
                className="absolute top-full left-0 mt-2 w-48 glass-dark rounded-lg border border-gold/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                initial={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                {dropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-text/80 hover:text-white hover:bg-gold/10 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            </div>

            <Button 
              href="https://calendly.com/founder-hlpfl/30min"
              target="_blank"
              size="sm"
            >
              Book A&R Call
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <X key="close" className="w-6 h-6" />
              ) : (
                <Menu key="menu" className="w-6 h-6" />
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-20 bg-black/98 backdrop-blur-xl z-40"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'block py-3 text-lg font-medium',
                      pathname === item.href ? 'text-gold' : 'text-text/80 hover:text-white'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4 border-t border-gold/20">
                {dropdownItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navItems.length + index) * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 text-text/80 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="pt-6 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + dropdownItems.length) * 0.1 }}
              >
                <Button 
                  href="https://calendly.com/founder-hlpfl/30min"
                  target="_blank"
                  className="w-full"
                >
                  Book A&R Call
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header