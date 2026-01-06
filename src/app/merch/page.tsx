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
        image: '/images/merg/tshirt.jpg',
        rating: 4.8
      },
      {
        name: 'HLPFL Hoodie',
        price: '$55',
        sold: 67,
        stock: 23,
        category: 'Apparel',
        image: '/images/merg/hoodie.jpg',
        rating: 4.9
      },
      {
        name: 'Album Art Poster',
        price: '$20',
        sold: 45,
        stock: 155,
        category: 'Art',
        image: '/images/merg/poster.jpg',
        rating: 4.7
      },
      {
        name: 'Vinyl Record',
        price: '$40',
        sold: 33,
        stock: 17,
        category: 'Music',
        image: '/images/merg/vinyl.jpg',
        rating: 5.0
      }
    ],
    recentOrders: [
      { id: '#1234', customer: 'John D.', items: 2, total: '$70.00', status: 'Shipped' },
      { id: '#1233', customer: 'Sarah M.', items: 1, total: '$35.00', status: 'Processing' },
      { id: '#1232', customer: 'Mike R.', items: 3, total: '$95.00', status: 'Delivered' }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Merch Store
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Create and sell merchandise to your fans
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Sales', value: mockData.totalSales, icon: ShoppingCart, color: 'from-blue-500 to-blue-600' },
            { label: 'Revenue', value: mockData.revenue, icon: DollarSign, color: 'from-green-500 to-green-600' },
            { label: 'Avg. Order', value: mockData.avgOrderValue, icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
            { label: 'Products', value: mockData.products.length.toString(), icon: Package, color: 'from-pink-500 to-pink-600' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {['products', 'orders', 'inventory', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'products' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Products</h2>
                  <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Upload className="w-4 h-4" />
                    Add Product
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {mockData.products.map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                        <Package className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{product.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">{product.rating}</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{product.category}</p>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-lg font-bold text-gray-900 dark:text-white">{product.price}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{product.sold} sold</span>
                        </div>
                        <div className="text-xs">
                          <span className={`font-medium ${product.stock < 30 ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'}`}>
                            {product.stock} in stock
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Recent Orders</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Order ID</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Customer</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Items</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Total</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockData.recentOrders.map((order, index) => (
                        <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                          <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">{order.id}</td>
                          <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{order.customer}</td>
                          <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{order.items}</td>
                          <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">{order.total}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                                : order.status === 'Shipped'
                                ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                                : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'inventory' && (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Inventory Management</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Track and manage your merchandise inventory
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Manage Inventory
                </button>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Store Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Detailed analytics and performance metrics
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  View Analytics
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}