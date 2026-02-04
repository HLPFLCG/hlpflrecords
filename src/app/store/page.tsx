'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import {
  ShoppingBag,
  Heart,
  Shirt,
  Coffee,
  Gift,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Check,
  Star
} from 'lucide-react'

// Product categories
const categories = [
  { id: 'all', name: 'All', icon: Sparkles },
  { id: 'apparel', name: 'Apparel', icon: Shirt },
  { id: 'donations', name: 'Support Us', icon: Heart },
  { id: 'merch', name: 'Accessories', icon: Gift },
]

// Products - Replace with your actual Stripe payment links
const products = [
  {
    id: 1,
    name: 'HLPFL Classic Tee',
    description: 'Premium cotton tee with embroidered HLPFL logo. 100% of profits support creative entrepreneurs.',
    price: 35,
    category: 'apparel',
    image: '/images/store/tee-black.webp',
    stripeLink: 'https://buy.stripe.com/YOUR_LINK_HERE',
    badge: 'Best Seller',
    colors: ['Black', 'White', 'Gold'],
  },
  {
    id: 2,
    name: 'Creator Hoodie',
    description: 'Cozy premium hoodie for the creative entrepreneur. "We Earn When You Earn" on the back.',
    price: 65,
    category: 'apparel',
    image: '/images/store/hoodie-black.webp',
    stripeLink: 'https://buy.stripe.com/YOUR_LINK_HERE',
    colors: ['Black', 'Charcoal'],
  },
  {
    id: 3,
    name: 'Support a Creator - $25',
    description: 'Your donation directly funds business development services for a creative entrepreneur who cannot afford traditional agencies.',
    price: 25,
    category: 'donations',
    image: '/images/store/donation-25.webp',
    stripeLink: 'https://buy.stripe.com/YOUR_LINK_HERE',
    badge: 'Tax Deductible',
    isDigital: true,
  },
  {
    id: 4,
    name: 'Support a Creator - $50',
    description: 'Fund brand development services for an emerging creator. Receive a personalized thank you from the creator you supported.',
    price: 50,
    category: 'donations',
    image: '/images/store/donation-50.webp',
    stripeLink: 'https://buy.stripe.com/YOUR_LINK_HERE',
    badge: 'Most Popular',
    isDigital: true,
  },
  {
    id: 5,
    name: 'Support a Creator - $100',
    description: 'Sponsor full marketing campaign development for a creative entrepreneur. Receive quarterly impact reports.',
    price: 100,
    category: 'donations',
    image: '/images/store/donation-100.webp',
    stripeLink: 'https://buy.stripe.com/YOUR_LINK_HERE',
    badge: 'High Impact',
    isDigital: true,
  },
  {
    id: 6,
    name: 'HLPFL Cap',
    description: 'Structured cap with embroidered logo. Adjustable strap for perfect fit.',
    price: 28,
    category: 'merch',
    image: '/images/store/cap-black.webp',
    stripeLink: 'https://buy.stripe.com/YOUR_LINK_HERE',
    colors: ['Black', 'Gold'],
  },
  {
    id: 7,
    name: 'Creator Mug',
    description: '"Zero Upfront Costs" ceramic mug. Perfect for those early morning creative sessions.',
    price: 18,
    category: 'merch',
    image: '/images/store/mug.webp',
    stripeLink: 'https://buy.stripe.com/YOUR_LINK_HERE',
  },
  {
    id: 8,
    name: 'Sticker Pack',
    description: 'Set of 5 premium vinyl stickers featuring HLPFL branding and creator-first slogans.',
    price: 12,
    category: 'merch',
    image: '/images/store/stickers.webp',
    stripeLink: 'https://buy.stripe.com/YOUR_LINK_HERE',
    badge: 'New',
  },
]

// Impact stats
const impactStats = [
  { value: '$0', label: 'Upfront to Creators' },
  { value: '100%', label: 'Store Profits to Mission' },
  { value: '501(c)3', label: 'Tax Deductible' },
]

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  // Floating particles effect
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, duration: number}>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-dark overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,121,65,0.15)_0%,_transparent_50%)]"
          style={{ y: backgroundY }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(200,121,65,0.02)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(200,121,65,0.02)_1px,_transparent_1px)] bg-[size:60px_60px]" />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gold/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Animated Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.5 }}
            className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl border border-gold/30 relative"
          >
            <ShoppingBag className="w-12 h-12 text-gold" />
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-gold/30"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 mb-6 bg-gold/10 border border-gold/30 rounded-full"
          >
            <Heart className="w-4 h-4 text-gold mr-2 animate-pulse" />
            <span className="text-gold text-sm font-medium">100% Supports Our Mission</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}
          >
            HLPFL <span className="text-gold">Store</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Every purchase directly supports creative entrepreneurs.
            Shop merch, donate, or sponsor a creator&apos;s journey.
          </motion.p>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gold mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-30 py-4 px-4 bg-dark/80 backdrop-blur-xl border-y border-gold/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeCategory === category.id
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gold text-dark shadow-lg shadow-gold/25'
                      : 'bg-dark-secondary text-gray-300 hover:text-gold border border-gold/20 hover:border-gold/40'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  className="group relative bg-dark-secondary rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-500"
                >
                  {/* Product Image */}
                  <div className="aspect-square bg-gradient-to-br from-gold/5 to-dark-tertiary relative overflow-hidden">
                    {/* Placeholder - Replace with actual product images */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: hoveredProduct === product.id ? 1.1 : 1,
                          rotateY: hoveredProduct === product.id ? 10 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className="w-32 h-32 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/20"
                      >
                        {product.category === 'donations' ? (
                          <Heart className="w-16 h-16 text-gold" />
                        ) : product.category === 'apparel' ? (
                          <Shirt className="w-16 h-16 text-gold" />
                        ) : (
                          <Gift className="w-16 h-16 text-gold" />
                        )}
                      </motion.div>
                    </div>

                    {/* Badge */}
                    {product.badge && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute top-4 left-4 px-3 py-1 bg-gold text-dark text-xs font-bold rounded-full flex items-center gap-1"
                      >
                        <Star className="w-3 h-3" />
                        {product.badge}
                      </motion.div>
                    )}

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent flex items-end justify-center pb-6"
                    >
                      <a
                        href={product.stripeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gold text-dark font-semibold rounded-full hover:bg-gold-light transition-colors"
                      >
                        {product.category === 'donations' ? 'Donate Now' : 'Buy Now'}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Colors */}
                    {product.colors && (
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs text-gray-500">Colors:</span>
                        <div className="flex gap-1">
                          {product.colors.map((color) => (
                            <div
                              key={color}
                              className="w-4 h-4 rounded-full border border-gold/30"
                              style={{
                                backgroundColor: color.toLowerCase() === 'gold' ? '#c87941' :
                                  color.toLowerCase() === 'white' ? '#ffffff' :
                                  color.toLowerCase() === 'charcoal' ? '#333333' : '#000000'
                              }}
                              title={color}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-gold">
                        ${product.price}
                      </div>
                      <a
                        href={product.stripeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-400 hover:text-gold transition-colors"
                      >
                        {product.category === 'donations' ? 'Donate' : 'Purchase'}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Shopify Integration Section */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
              Full Catalog on <span className="text-gold">Shopify</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Browse our complete collection including limited editions, creator collaborations,
              and exclusive drops on our Shopify store.
            </p>
            <a
              href="https://your-shopify-store.myshopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-light transition-all hover:scale-105 transform"
            >
              Visit Full Store
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-bebas-neue)', letterSpacing: '0.02em' }}>
              Your Purchase <span className="text-gold">Makes a Difference</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              As a 501(c)(3) nonprofit, every dollar from our store goes directly toward
              providing commission-only business development services to creative entrepreneurs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: 'Fund Creator Services',
                description: 'Store profits fund free business development for creators who can\'t afford traditional agencies.'
              },
              {
                icon: Heart,
                title: 'Tax Deductible',
                description: 'Donations are fully tax deductible. You\'ll receive a receipt for your records.'
              },
              {
                icon: Sparkles,
                title: 'Direct Impact',
                description: 'Track the creators you\'ve helped through our quarterly impact reports.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-dark-secondary border border-gold/10 hover:border-gold/30 transition-all"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark-secondary to-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About Your Order?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Contact us at <span className="text-gold">contact@hlpfl.org</span> for any questions
              about orders, shipping, or donations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn About Our Mission
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
