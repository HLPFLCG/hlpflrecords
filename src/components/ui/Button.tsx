'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  icon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, icon, children, disabled, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'gradient-gold text-white hover:shadow-gold-glow hover:scale-105 hover:-translate-y-1 active:scale-95 focus:ring-gold',
      secondary: 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-primary hover:scale-105 hover:-translate-y-1 active:scale-95 focus:ring-gold',
      accent: 'gradient-accent text-white hover:shadow-accent-glow hover:scale-105 hover:-translate-y-1 active:scale-95 focus:ring-accent',
      outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-primary focus:ring-gold',
      ghost: 'text-gold hover:bg-gold/10 focus:ring-gold'
    }

    const sizes = {
      sm: 'py-2 px-4 text-sm',
      md: 'py-3 px-6 text-base',
      lg: 'py-4 px-8 text-lg',
      xl: 'py-5 px-10 text-xl'
    }

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {icon && !loading && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button