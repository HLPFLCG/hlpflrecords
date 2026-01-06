'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, Package, TrendingUp, DollarSign, ShoppingCart, Star, Eye, Heart } from 'lucide-react'

export default function MerchPage() {
  const [activeTab, setActiveTab] = useState('products')

  const mockData = {
    totalSales: '234',
    revenue: '$8,940',
    avgOrderValue: '$38.20',
    products: [
      {
        name: 'Limited Edition T-Shirt',
        price: '$35',
        sold: 89,
        stock: 41,
        category: 'Apparel',
        image: '👕',
        status: 'active',
        views: 1245
      },
      {
        name: 'Vinyl Record - Latest Album',
        price: '$45',
        sold: 67,
        stock: 23,
        category: 'Music',
        image: '💿',
        status: 'active',
        views: 892
      },
      {
        name: 'Signed Poster Bundle',
        price: '$25',
        sold: 45,
        stock: 0,
        category: 'Collectibles',
        image: '🖼️',
        status: 'sold out',
        views: 678
      },
      {
        name: 'Beanie - Winter Collection',
        price: '$20',
        sold: 33,
        stock: 67,
        category: 'Apparel',
        image: '🧢',
        status: 'active',
        views: 534
      },
    ],
    recentOrders: [
      { customer: 'Emily S.', items: 'T-Shirt (M), Poster', total: '$60', status: 'Shipped', time: '2h ago' },
      { customer: 'Marcus R.', items: 'Vinyl Record', total: '$45', status: 'Processing', time: '5h ago' },
      { customer: 'Sophia L.', items: 'Beanie, T-Shirt (L)', total: '$55', status: 'Shipped', time: '1d ago' },
      { customer: 'James K.', items: 'Poster Bundle', total: '$25', status: 'Delivered', time: '2d ago' },
    ],
    categories: [
      { name: 'Apparel', items: 6, revenue: '$4,230' },
      { name: 'Music', items: 3, revenue: '$3,015' },
      { name: 'Collectibles', items: 4, revenue: '$1,125' },
      { name: 'Accessories', items: 2, revenue: '$570' },
    ]
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl mb-6"
          >
            <Package className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Merch Store
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Create and sell merchandise to your fans
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <ShoppingCart className="w-12 h-12 text-indigo-500" />
              <span className="text-green-400 font-semibold">+15%</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.totalSales}</h3>
            <p className="text-gray-400">Items Sold</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-12 h-12 text-gold" />
              <span className="text-green-400 font-semibold">+23%</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.revenue}</h3>
            <p className="text-gray-400">Total Revenue</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{mockData.avgOrderValue}</h3>
            <p className="text-gray-400">Avg Order Value</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <Package className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">15</h3>
            <p className="text-gray-400">Active Products</p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'products'
                ? 'bg-gold text-dark'
                : 'bg-glass-card text-gray-400 hover:text-white'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'orders'
                ? 'bg-gold text-dark'
                : 'bg-glass-card text-gray-400 hover:text-white'
            }`}
          >
            Recent Orders
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'categories'
                ? 'bg-gold text-dark'
                : 'bg-glass-card text-gray-400 hover:text-white'
            }`}
          >
            Categories
          </button>
        </div>

        {/* Content */}
        {activeTab === 'products' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Your Products</h2>
              <button className="px-6 py-3 bg-gold text-dark font-semibold rounded-lg hover:shadow-gold-hover transition-all flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Add Product
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockData.products.map((product, index) => (
                <div key={index} className="bg-glass-card p-8 rounded-2xl">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-6xl">{product.image}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                          <p className="text-gray-400 text-sm">{product.category}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          product.status === 'active'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {product.status}
                        </span>
                      </div>
                      <p className="text-3xl font-bold text-gold mb-4">{product.price}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-700">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Sold</p>
                      <p className="text-white font-bold text-lg">{product.sold}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Stock</p>
                      <p className={`font-bold text-lg ${product.stock === 0 ? 'text-red-400' : 'text-white'}`}>
                        {product.stock}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1 flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        Views
                      </p>
                      <p className="text-white font-bold text-lg">{product.views}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-gold/20 text-gold font-semibold rounded-lg hover:bg-gold/30 transition-all">
                      Edit
                    </button>
                    <button className="flex-1 px-4 py-2 bg-glass-card text-white font-semibold rounded-lg hover:bg-gray-700 transition-all">
                      View Stats
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'orders' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Recent Orders</h2>
            <div className="space-y-4">
              {mockData.recentOrders.map((order, index) => (
                <div key={index} className="p-6 bg-gray-800/50 rounded-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{order.customer}</h3>
                      <p className="text-gray-400 text-sm">{order.items}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gold mb-1">{order.total}</p>
                      <p className="text-gray-400 text-sm">{order.time}</p>
                    </div>
                  </div>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                    order.status === 'Delivered'
                      ? 'bg-green-500/20 text-green-400'
                      : order.status === 'Shipped'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'categories' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {mockData.categories.map((category, index) => (
              <div key={index} className="bg-glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">{category.name}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400">Total Items</p>
                    <p className="text-2xl font-bold text-white">{category.items}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400">Revenue</p>
                    <p className="text-3xl font-bold text-gold">{category.revenue}</p>
                  </div>
                </div>
                <button className="w-full mt-6 px-4 py-3 bg-gold/20 text-gold font-semibold rounded-lg hover:bg-gold/30 transition-all">
                  View Products
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
