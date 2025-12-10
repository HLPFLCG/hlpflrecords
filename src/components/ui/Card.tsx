'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'premium' | 'service' | 'glass'
  hover?: boolean
  delay?: number
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, delay = 0, children, ...props }, ref) => {
    const baseClasses = 'rounded-xl transition-all duration-300'
    
    const variants = {
      default: 'bg-secondary border border-gold/10',
      premium: 'glass-dark rounded-2xl p-8 border border-gold/20 hover:shadow-premium',
      service: 'bg-secondary/50 backdrop-blur-md p-6 border border-gold/10 hover:border-gold/30',
      glass: 'glass border border-white/10'
    }

    const hoverClasses = hover ? 'hover:scale-105 hover:-translate-y-2 hover:shadow-lg' : ''

    return (
      <motion.div
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          hoverClasses,
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        whileHover={hover ? { y: -8, scale: 1.02 } : {}}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export default Card