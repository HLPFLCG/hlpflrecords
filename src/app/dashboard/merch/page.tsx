'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Package,
  Plus,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Eye,
  Edit,
  Trash2,
  Image as ImageIcon,
  Upload,
  Palette,
  Truck,
  CheckCircle,
  Clock,
  X,
  Search,
  Filter,
  Download,
  ExternalLink,
  Sparkles
} from 'lucide-react'
import { api } from '@/lib/api-client'

interface Product {
  id: string
  name: string
  category: 'tshirt' | 'hoodie' | 'vinyl' | 'poster' | 'accessory'
  price: number
  images: string[]
  sales: number
  revenue: number
  status: 'active' | 'draft' | 'sold_out'
  variants?: {
    size?: string[]
    color?: string[]
  }
  stock?: number
}

export default function MerchPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showNewProductModal, setShowNewProductModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [productsData, setProductsData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const artistId = 'artist-priv-001'

  useEffect(() => {
    async function loadProducts() {
      setLoading(true)
      const response = await api.products.getAll(artistId)
      if (response.success && response.data) {
        setProductsData(response.data)
      }
      setLoading(false)
    }
    loadProducts()
  }, [artistId])

  const products: Product[] = (productsData || []).map((p: any) => ({
    id: p.id,
    name: p.name,
    category: p.category || 'accessory',
    price: p.price || 0,
    images: p.image_urls ? JSON.parse(p.image_urls) : ['/api/placeholder/400/400'],
    sales: p.total_sales || 0,
    revenue: p.revenue || 0,
    status: p.status || 'active',
    variants: p.variants ? JSON.parse(p.variants) : undefined,
    stock: p.stock_quantity || 0
  }))

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading products...</p>
        </div>
      </div>
    )
  }

  const orders = [
    {
      id: 'ORD-2401',
      customer: 'John Doe',
      items: 3,
      total: 134.97,
      status: 'shipped',
      date: new Date(2026, 0, 6)
    },
    {
      id: 'ORD-2402',
      customer: 'Jane Smith',
      items: 1,
      total: 54.99,
      status: 'processing',
      date: new Date(2026, 0, 7)
    },
    {
      id: 'ORD-2403',
      customer: 'Mike Johnson',
      items: 2,
      total: 84.98,
      status: 'pending',
      date: new Date(2026, 0, 8)
    }
  ]

  const stats = {
    totalProducts: products.length,
    activeProducts: products.filter(p => p.status === 'active').length,
    totalSales: products.reduce((sum, p) => sum + p.sales, 0),
    totalRevenue: products.reduce((sum, p) => sum + p.revenue, 0)
  }

  const filteredProducts = filterStatus === 'all'
    ? products
    : products.filter(p => p.status === filterStatus)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'tshirt':
        return '👕'
      case 'hoodie':
        return '🧥'
      case 'vinyl':
        return '💿'
      case 'poster':
        return '🖼️'
      case 'accessory':
        return '🧢'
      default:
        return '📦'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Merch Store</h1>
          <p className="text-gray-400">Manage your merchandise and orders</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.open('https://limitlessmanufacturinggroup.com', '_blank')}
            className="flex items-center gap-2 px-4 py-2 bg-dark-tertiary border border-gray-700 text-white rounded-lg hover:border-gold transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Partner: Limitless MFG
          </button>
          <button
            onClick={() => setShowNewProductModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            <Plus className="w-5 h-5" />
            New Product
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <Package className="w-10 h-10 text-gold mb-4" />
          <h3 className="text-3xl font-bold text-white mb-2">{stats.totalProducts}</h3>
          <p className="text-gray-400">Total Products</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <CheckCircle className="w-10 h-10 text-green-400 mb-4" />
          <h3 className="text-3xl font-bold text-white mb-2">{stats.activeProducts}</h3>
          <p className="text-gray-400">Active Products</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
        >
          <ShoppingCart className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-3xl font-bold text-white mb-2">{stats.totalSales}</h3>
          <p className="text-gray-400">Items Sold</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-gold/20 to-gold-dark/10 border border-gold/30 rounded-2xl p-6"
        >
          <DollarSign className="w-10 h-10 text-gold mb-4" />
          <h3 className="text-3xl font-bold text-white mb-2">${stats.totalRevenue.toLocaleString()}</h3>
          <p className="text-gray-400">Total Revenue</p>
        </motion.div>
      </div>

      {/* Partner Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Powered by Limitless Manufacturing Group</h3>
              <p className="text-gray-400 mb-4 max-w-2xl">
                All merchandise is produced on-demand with premium quality printing and materials.
                No upfront costs, no inventory management - we handle everything from production to shipping.
              </p>
              <button
                onClick={() => window.open('https://limitlessmanufacturinggroup.com', '_blank')}
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn More <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filterStatus === 'all'
                ? 'bg-gold text-dark font-semibold'
                : 'bg-dark-tertiary text-gray-400 hover:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterStatus('active')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filterStatus === 'active'
                ? 'bg-gold text-dark font-semibold'
                : 'bg-dark-tertiary text-gray-400 hover:text-white'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilterStatus('draft')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filterStatus === 'draft'
                ? 'bg-gold text-dark font-semibold'
                : 'bg-dark-tertiary text-gray-400 hover:text-white'
            }`}
          >
            Drafts
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-dark-tertiary border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-secondary border border-gray-800 rounded-2xl overflow-hidden hover:border-gold transition-all group"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="absolute top-4 right-4 z-20">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  product.status === 'active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  product.status === 'draft' ? 'bg-gray-500/20 text-gray-400 border border-gray-500/30' :
                  'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {product.status === 'active' ? 'Live' : product.status === 'draft' ? 'Draft' : 'Sold Out'}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <div className="text-4xl mb-2">{getCategoryIcon(product.category)}</div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gold transition-colors">
                {product.name}
              </h3>

              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-gold">${product.price}</span>
                {product.stock !== undefined && (
                  <span className="text-gray-400 text-sm">{product.stock} in stock</span>
                )}
              </div>

              {product.status === 'active' && (
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Sales</p>
                    <p className="text-white font-semibold">{product.sales}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Revenue</p>
                    <p className="text-white font-semibold">${product.revenue.toLocaleString()}</p>
                  </div>
                </div>
              )}

              {product.variants && (
                <div className="mb-4 text-xs text-gray-400">
                  {product.variants.size && (
                    <p>Sizes: {product.variants.size.join(', ')}</p>
                  )}
                  {product.variants.color && (
                    <p>Colors: {product.variants.color.join(', ')}</p>
                  )}
                </div>
              )}

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-dark-tertiary rounded-lg hover:bg-gold hover:text-dark transition-all"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button className="p-2 bg-dark-tertiary rounded-lg hover:bg-gold hover:text-dark transition-all">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 bg-dark-tertiary rounded-lg hover:bg-red-500 hover:text-white transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Orders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-secondary border border-gray-800 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Recent Orders</h2>
          <button className="text-gold text-sm hover:text-gold-dark transition-colors">View All</button>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 bg-dark-tertiary rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-white font-semibold">{order.id}</p>
                  <p className="text-gray-400 text-sm">{order.customer} • {order.items} items</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-white font-bold">${order.total}</p>
                  <p className="text-gray-500 text-xs">{order.date.toLocaleDateString()}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  order.status === 'shipped' ? 'bg-green-500/20 text-green-400' :
                  order.status === 'processing' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* New Product Modal */}
      <AnimatePresence>
        {showNewProductModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowNewProductModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark-secondary border border-gray-800 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Create New Product</h2>
                <button
                  onClick={() => setShowNewProductModal(false)}
                  className="p-2 hover:bg-dark-tertiary rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Product Images */}
                <div>
                  <label className="block text-white font-semibold mb-2">Product Images</label>
                  <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-gold transition-colors cursor-pointer">
                    <ImageIcon className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                    <p className="text-gray-400 mb-1">Click to upload product images</p>
                    <p className="text-gray-600 text-sm">2000x2000px minimum, JPG or PNG</p>
                  </div>
                </div>

                {/* Basic Info */}
                <div>
                  <label className="block text-white font-semibold mb-2">Product Name</label>
                  <input
                    type="text"
                    placeholder="Enter product name"
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Category</label>
                    <select className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent">
                      <option value="tshirt">T-Shirt</option>
                      <option value="hoodie">Hoodie</option>
                      <option value="vinyl">Vinyl Record</option>
                      <option value="poster">Poster</option>
                      <option value="accessory">Accessory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Price</label>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Description</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your product..."
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                  />
                </div>

                {/* Variants */}
                <div>
                  <label className="block text-white font-semibold mb-3">Sizes (if applicable)</label>
                  <div className="flex flex-wrap gap-2">
                    {['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
                      <label key={size} className="flex items-center gap-2 px-4 py-2 bg-dark-tertiary border border-gray-700 rounded-lg cursor-pointer hover:border-gold transition-colors">
                        <input type="checkbox" className="w-4 h-4 text-gold" />
                        <span className="text-gray-300">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Colors</label>
                  <div className="flex flex-wrap gap-2">
                    {['Black', 'White', 'Gray', 'Navy', 'Gold', 'Red'].map((color) => (
                      <label key={color} className="flex items-center gap-2 px-4 py-2 bg-dark-tertiary border border-gray-700 rounded-lg cursor-pointer hover:border-gold transition-colors">
                        <input type="checkbox" className="w-4 h-4 text-gold" />
                        <span className="text-gray-300">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4">
                  <button className="flex-1 px-6 py-3 bg-dark-tertiary border border-gray-700 text-white rounded-lg hover:border-gold transition-all">
                    Save as Draft
                  </button>
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all">
                    Publish Product
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
