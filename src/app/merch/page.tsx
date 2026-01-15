'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Package, ShoppingCart, Check, X, Loader2, CreditCard } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
  sizes?: string[]
  colors?: string[]
  inStock: boolean
}

const products: Product[] = [
  {
    id: 'priv-tshirt-1',
    name: 'PRIV Logo T-Shirt',
    price: 29.99,
    description: 'Premium cotton t-shirt featuring the PRIV logo. Comfortable fit for everyday wear.',
    image: '/images/artists/priv.svg',
    category: 'Apparel',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Black', 'White'],
    inStock: true
  },
  {
    id: 'priv-hoodie-1',
    name: 'Emerging Sounds Hoodie',
    price: 54.99,
    description: 'Cozy pullover hoodie inspired by the Emerging Sounds single. Heavy cotton blend.',
    image: '/images/artists/priv.svg',
    category: 'Apparel',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    inStock: true
  },
  {
    id: 'priv-vinyl-1',
    name: 'New Horizons EP Vinyl',
    price: 34.99,
    description: 'Limited edition vinyl pressing of the New Horizons EP. 180g audiophile quality.',
    image: '/images/artists/priv.svg',
    category: 'Music',
    inStock: true
  },
  {
    id: 'priv-poster-1',
    name: 'PRIV Tour Poster',
    price: 19.99,
    description: 'High-quality art print poster. 18x24 inches on premium matte paper.',
    image: '/images/artists/priv.svg',
    category: 'Collectibles',
    inStock: true
  },
  {
    id: 'priv-cap-1',
    name: 'Limited Edition Cap',
    price: 24.99,
    description: 'Embroidered cap with PRIV logo. Adjustable snapback closure.',
    image: '/images/artists/priv.svg',
    category: 'Accessories',
    colors: ['Black', 'Gold'],
    inStock: true
  },
  {
    id: 'priv-bundle-1',
    name: 'Fan Bundle',
    price: 89.99,
    description: 'Get the complete package: T-Shirt, Poster, and Sticker Pack at a special price.',
    image: '/images/artists/priv.svg',
    category: 'Bundles',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  }
]

export default function MerchStorePage() {
  const searchParams = useSearchParams()
  const [cart, setCart] = useState<{ product: Product; quantity: number; size?: string; color?: string }[]>([])
  const [showCart, setShowCart] = useState(false)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [checkoutMessage, setCheckoutMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: { size?: string; color?: string } }>({})

  // Check for checkout status from URL
  useEffect(() => {
    const checkout = searchParams.get('checkout')
    if (checkout === 'success') {
      setCheckoutMessage({ type: 'success', text: 'Thank you for your purchase! You will receive a confirmation email shortly.' })
      setCart([])
    } else if (checkout === 'cancelled') {
      setCheckoutMessage({ type: 'error', text: 'Checkout was cancelled. Your cart items are still saved.' })
    }
  }, [searchParams])

  const addToCart = (product: Product) => {
    const options = selectedOptions[product.id] || {}
    const existingItem = cart.find(
      item => item.product.id === product.id &&
      item.size === options.size &&
      item.color === options.color
    )

    if (existingItem) {
      setCart(cart.map(item =>
        item === existingItem
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { product, quantity: 1, size: options.size, color: options.color }])
    }
    setShowCart(true)
  }

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(index)
      return
    }
    setCart(cart.map((item, i) => i === index ? { ...item, quantity } : item))
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const handleCheckout = async () => {
    if (cart.length === 0) return

    setIsCheckingOut(true)
    setCheckoutMessage(null)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart.map(item => ({
            name: `${item.product.name}${item.size ? ` (${item.size})` : ''}${item.color ? ` - ${item.color}` : ''}`,
            price: item.product.price,
            quantity: item.quantity,
            description: item.product.description
          }))
        })
      })

      const data = await response.json()

      if (data.url) {
        // Redirect to Stripe checkout
        window.location.href = data.url
      } else if (data.mock) {
        // Mock checkout for development
        setCheckoutMessage({ type: 'success', text: 'Demo checkout complete! In production, you would be redirected to Stripe.' })
        setCart([])
        setShowCart(false)
      } else {
        throw new Error(data.error || 'Failed to create checkout')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setCheckoutMessage({ type: 'error', text: 'Failed to start checkout. Please try again.' })
    } finally {
      setIsCheckingOut(false)
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-2xl mb-6"
          >
            <Package className="w-10 h-10 text-dark" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            PRIV Merch Store
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Official merchandise from PRIV. Support the music, wear the brand.
          </p>
        </div>

        {/* Checkout Message */}
        {checkoutMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-8 p-4 rounded-xl border ${
              checkoutMessage.type === 'success'
                ? 'bg-green-500/10 border-green-500/50 text-green-400'
                : 'bg-red-500/10 border-red-500/50 text-red-400'
            }`}
          >
            <div className="flex items-center gap-3">
              {checkoutMessage.type === 'success' ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
              <p>{checkoutMessage.text}</p>
              <button onClick={() => setCheckoutMessage(null)} className="ml-auto">
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Cart Button */}
        <div className="fixed top-24 right-4 z-40">
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative bg-gold text-dark p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Cart Sidebar */}
        {showCart && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/60" onClick={() => setShowCart(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute right-0 top-0 h-full w-full max-w-md bg-dark-secondary border-l border-gray-800 p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Your Cart</h2>
                <button onClick={() => setShowCart(false)} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-400 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-dark-tertiary rounded-xl">
                        <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                          <Package className="w-8 h-8 text-gold" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold">{item.product.name}</h3>
                          {(item.size || item.color) && (
                            <p className="text-gray-400 text-sm">
                              {item.size && `Size: ${item.size}`}
                              {item.size && item.color && ' | '}
                              {item.color && `Color: ${item.color}`}
                            </p>
                          )}
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(index, item.quantity - 1)}
                                className="w-6 h-6 bg-gray-700 rounded text-white text-sm hover:bg-gray-600"
                              >
                                -
                              </button>
                              <span className="text-white">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(index, item.quantity + 1)}
                                className="w-6 h-6 bg-gray-700 rounded text-white text-sm hover:bg-gray-600"
                              >
                                +
                              </button>
                            </div>
                            <span className="text-gold font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-gray-400 hover:text-red-400"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-400">Subtotal</span>
                      <span className="text-2xl font-bold text-gold">${cartTotal.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">Shipping calculated at checkout</p>
                    <button
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                      className="w-full bg-gradient-to-r from-gold to-gold-dark text-dark font-bold py-4 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isCheckingOut ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5" />
                          Checkout with Stripe
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-secondary border border-gray-800 rounded-2xl overflow-hidden group hover:border-gold/50 transition-all"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <Package className="w-24 h-24 text-gold/30 group-hover:scale-110 transition-transform" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gold/20 text-gold text-sm font-semibold rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>

                {/* Options */}
                <div className="space-y-3 mb-4">
                  {product.sizes && (
                    <div>
                      <label className="text-gray-400 text-sm block mb-2">Size</label>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map(size => (
                          <button
                            key={size}
                            onClick={() => setSelectedOptions(prev => ({
                              ...prev,
                              [product.id]: { ...prev[product.id], size }
                            }))}
                            className={`px-3 py-1 rounded border text-sm transition-all ${
                              selectedOptions[product.id]?.size === size
                                ? 'border-gold bg-gold/20 text-gold'
                                : 'border-gray-700 text-gray-400 hover:border-gray-600'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.colors && (
                    <div>
                      <label className="text-gray-400 text-sm block mb-2">Color</label>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.map(color => (
                          <button
                            key={color}
                            onClick={() => setSelectedOptions(prev => ({
                              ...prev,
                              [product.id]: { ...prev[product.id], color }
                            }))}
                            className={`px-3 py-1 rounded border text-sm transition-all ${
                              selectedOptions[product.id]?.color === color
                                ? 'border-gold bg-gold/20 text-gold'
                                : 'border-gray-700 text-gray-400 hover:border-gray-600'
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gold">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className="px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fulfillment Partner Notice */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Merchandise fulfilled by Limitless Manufacturing Group
          </p>
        </div>
      </div>
    </div>
  )
}
