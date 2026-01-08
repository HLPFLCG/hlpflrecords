'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Mail,
  Lock,
  Bell,
  Palette,
  Globe,
  CreditCard,
  Shield,
  Database,
  Link as LinkIcon,
  Smartphone,
  Download,
  Trash2,
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff,
  Instagram,
  Twitter,
  Music,
  Youtube,
  Save,
  X
} from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [showPassword, setShowPassword] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'account', name: 'Account', icon: Mail },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'connected', name: 'Connected Accounts', icon: LinkIcon },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'preferences', name: 'Preferences', icon: Palette },
    { id: 'privacy', name: 'Privacy & Data', icon: Database }
  ]

  const connectedAccounts = [
    { id: 'spotify', name: 'Spotify', icon: Music, connected: true, color: 'from-green-500 to-emerald-600' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, connected: true, color: 'from-pink-500 to-purple-600' },
    { id: 'twitter', name: 'Twitter', icon: Twitter, connected: true, color: 'from-blue-400 to-blue-600' },
    { id: 'youtube', name: 'YouTube', icon: Youtube, connected: false, color: 'from-red-500 to-red-600' },
    { id: 'tiktok', name: 'TikTok', icon: Music, connected: false, color: 'from-black to-gray-800' }
  ]

  const handleSave = () => {
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account settings and preferences</p>
      </div>

      {/* Save Success Banner */}
      {saveSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-400" />
          <p className="text-green-400 font-semibold">Settings saved successfully!</p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-dark-secondary border border-gray-800 rounded-2xl p-4 sticky top-6">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-gold text-dark font-semibold'
                      : 'text-gray-400 hover:text-white hover:bg-dark-tertiary'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="text-sm">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-dark-secondary border border-gray-800 rounded-2xl p-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Profile Information</h2>
                  <p className="text-gray-400 mb-6">Update your profile details and public information</p>
                </div>

                {/* Avatar */}
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-3xl font-bold text-dark">
                    A
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-dark-tertiary border border-gray-700 text-white rounded-lg hover:border-gold transition-all mb-2">
                      Change Avatar
                    </button>
                    <p className="text-gray-500 text-sm">JPG, PNG or GIF. Max size 2MB.</p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Artist Name</label>
                    <input
                      type="text"
                      defaultValue="Alki"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Legal Name</label>
                    <input
                      type="text"
                      defaultValue="Alex Anderson"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Bio</label>
                  <textarea
                    rows={4}
                    defaultValue="Independent artist from Seattle. Creating music that speaks to the soul."
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Location</label>
                    <input
                      type="text"
                      defaultValue="Seattle, WA"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Website</label>
                    <input
                      type="url"
                      defaultValue="https://alki.music"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  <Save className="w-5 h-5" />
                  Save Changes
                </button>
              </div>
            )}

            {/* Account Tab */}
            {activeTab === 'account' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Account Settings</h2>
                  <p className="text-gray-400 mb-6">Manage your email and account preferences</p>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="alki@hlpflrecords.com"
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                  <p className="text-gray-500 text-sm mt-2">
                    <CheckCircle className="w-4 h-4 inline text-green-400 mr-1" />
                    Email verified
                  </p>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Username</label>
                  <input
                    type="text"
                    defaultValue="alki"
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                  <p className="text-gray-500 text-sm mt-2">Your unique username for the platform</p>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <h3 className="text-white font-bold mb-4">Danger Zone</h3>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-white font-semibold mb-1">Delete Account</h4>
                        <p className="text-gray-400 text-sm">
                          Permanently delete your account and all data. This action cannot be undone.
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all flex-shrink-0 ml-4">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  <Save className="w-5 h-5" />
                  Save Changes
                </button>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Security Settings</h2>
                  <p className="text-gray-400 mb-6">Manage your password and security preferences</p>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Current Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 pr-12 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <h3 className="text-white font-bold mb-4">Two-Factor Authentication</h3>
                  <div className="bg-dark-tertiary rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold mb-1">Authenticator App</h4>
                      <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                    </div>
                    <button className="px-4 py-2 bg-gold text-dark font-semibold rounded-lg hover:shadow-lg transition-all">
                      Enable 2FA
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <h3 className="text-white font-bold mb-4">Active Sessions</h3>
                  <div className="space-y-3">
                    <div className="bg-dark-tertiary rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Smartphone className="w-10 h-10 text-gold" />
                        <div>
                          <h4 className="text-white font-semibold">MacBook Pro - Seattle, WA</h4>
                          <p className="text-gray-400 text-sm">Current session • Chrome • Active now</p>
                        </div>
                      </div>
                      <span className="text-green-400 text-sm font-semibold">Active</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  <Save className="w-5 h-5" />
                  Update Password
                </button>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Notification Preferences</h2>
                  <p className="text-gray-400 mb-6">Choose what notifications you want to receive</p>
                </div>

                {/* Email Notifications */}
                <div>
                  <h3 className="text-white font-bold mb-4">Email Notifications</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'New releases from artists you follow', defaultChecked: true },
                      { label: 'Weekly analytics summary', defaultChecked: true },
                      { label: 'Revenue and payout updates', defaultChecked: true },
                      { label: 'Community posts and mentions', defaultChecked: false },
                      { label: 'Marketing tips and best practices', defaultChecked: true }
                    ].map((item, index) => (
                      <label key={index} className="flex items-center justify-between p-4 bg-dark-tertiary rounded-xl cursor-pointer hover:bg-opacity-80 transition-all">
                        <span className="text-gray-300">{item.label}</span>
                        <input
                          type="checkbox"
                          defaultChecked={item.defaultChecked}
                          className="w-5 h-5 text-gold rounded focus:ring-2 focus:ring-gold"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Push Notifications */}
                <div className="pt-6 border-t border-gray-700">
                  <h3 className="text-white font-bold mb-4">Push Notifications</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Viral boost campaigns going live', defaultChecked: true },
                      { label: 'Someone comments on your post', defaultChecked: true },
                      { label: 'New collaboration requests', defaultChecked: true },
                      { label: 'Sales and revenue milestones', defaultChecked: true }
                    ].map((item, index) => (
                      <label key={index} className="flex items-center justify-between p-4 bg-dark-tertiary rounded-xl cursor-pointer hover:bg-opacity-80 transition-all">
                        <span className="text-gray-300">{item.label}</span>
                        <input
                          type="checkbox"
                          defaultChecked={item.defaultChecked}
                          className="w-5 h-5 text-gold rounded focus:ring-2 focus:ring-gold"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  <Save className="w-5 h-5" />
                  Save Preferences
                </button>
              </div>
            )}

            {/* Connected Accounts Tab */}
            {activeTab === 'connected' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Connected Accounts</h2>
                  <p className="text-gray-400 mb-6">Manage your connected social media and streaming accounts</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {connectedAccounts.map((account) => (
                    <div
                      key={account.id}
                      className="bg-dark-tertiary border border-gray-700 rounded-xl p-6 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${account.color} rounded-xl flex items-center justify-center`}>
                          <account.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg">{account.name}</h3>
                          <p className="text-gray-400 text-sm">
                            {account.connected ? 'Connected and syncing' : 'Not connected'}
                          </p>
                        </div>
                      </div>

                      {account.connected ? (
                        <button className="px-4 py-2 bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/30 transition-all">
                          Disconnect
                        </button>
                      ) : (
                        <button className="px-4 py-2 bg-gold text-dark font-semibold rounded-lg hover:shadow-lg transition-all">
                          Connect
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Permissions & Privacy</h4>
                      <p className="text-gray-400 text-sm">
                        We only request the minimum permissions needed to post content and fetch analytics.
                        Your data is encrypted and never shared with third parties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Billing & Subscription</h2>
                  <p className="text-gray-400 mb-6">Manage your subscription and payment methods</p>
                </div>

                {/* Current Plan */}
                <div className="bg-gradient-to-br from-gold/20 to-gold-dark/10 border border-gold/30 rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Pro Plan</h3>
                      <p className="text-gray-400 mb-4">Full access to all portal features</p>
                    </div>
                    <span className="px-4 py-2 bg-gold/20 border border-gold/30 text-gold font-bold rounded-lg">
                      $29/month
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-dark-tertiary border border-gray-700 text-white rounded-lg hover:border-gold transition-all">
                    Change Plan
                  </button>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 className="text-white font-bold mb-4">Payment Method</h3>
                  <div className="bg-dark-tertiary rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CreditCard className="w-10 h-10 text-gold" />
                      <div>
                        <h4 className="text-white font-semibold">Visa ending in 4242</h4>
                        <p className="text-gray-400 text-sm">Expires 12/2027</p>
                      </div>
                    </div>
                    <button className="text-gold hover:text-gold-dark transition-colors">
                      Update
                    </button>
                  </div>
                </div>

                {/* Billing History */}
                <div>
                  <h3 className="text-white font-bold mb-4">Billing History</h3>
                  <div className="space-y-3">
                    {[
                      { date: 'Jan 1, 2026', amount: '$29.00', status: 'Paid' },
                      { date: 'Dec 1, 2025', amount: '$29.00', status: 'Paid' },
                      { date: 'Nov 1, 2025', amount: '$29.00', status: 'Paid' }
                    ].map((invoice, index) => (
                      <div key={index} className="bg-dark-tertiary rounded-xl p-4 flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold">{invoice.date}</h4>
                          <p className="text-gray-400 text-sm">Pro Plan</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-white font-bold">{invoice.amount}</span>
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                            {invoice.status}
                          </span>
                          <button className="text-gold hover:text-gold-dark transition-colors">
                            <Download className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Preferences</h2>
                  <p className="text-gray-400 mb-6">Customize your portal experience</p>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-4">Appearance</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: 'dark', label: 'Dark', active: true },
                      { id: 'light', label: 'Light', active: false },
                      { id: 'auto', label: 'Auto', active: false }
                    ].map((theme) => (
                      <button
                        key={theme.id}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          theme.active
                            ? 'border-gold bg-gold/10'
                            : 'border-gray-700 bg-dark-tertiary hover:border-gray-600'
                        }`}
                      >
                        <div className="text-center">
                          <div className={`w-12 h-12 mx-auto mb-3 rounded-lg ${
                            theme.id === 'dark' ? 'bg-gray-900' :
                            theme.id === 'light' ? 'bg-white' :
                            'bg-gradient-to-br from-gray-900 to-white'
                          }`} />
                          <p className="text-white font-semibold">{theme.label}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <h3 className="text-white font-bold mb-4">Language & Region</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Language</label>
                      <select className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent">
                        <option>English (US)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Timezone</label>
                      <select className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent">
                        <option>Pacific Time (PT)</option>
                        <option>Eastern Time (ET)</option>
                        <option>Central Time (CT)</option>
                        <option>Mountain Time (MT)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  <Save className="w-5 h-5" />
                  Save Preferences
                </button>
              </div>
            )}

            {/* Privacy & Data Tab */}
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Privacy & Data</h2>
                  <p className="text-gray-400 mb-6">Manage your data and privacy settings</p>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-4">Data Privacy</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Make my profile visible to other artists', defaultChecked: true },
                      { label: 'Show my streaming stats publicly', defaultChecked: false },
                      { label: 'Allow HLPFL to use my data for platform improvements', defaultChecked: true },
                      { label: 'Receive personalized recommendations', defaultChecked: true }
                    ].map((item, index) => (
                      <label key={index} className="flex items-center justify-between p-4 bg-dark-tertiary rounded-xl cursor-pointer hover:bg-opacity-80 transition-all">
                        <span className="text-gray-300">{item.label}</span>
                        <input
                          type="checkbox"
                          defaultChecked={item.defaultChecked}
                          className="w-5 h-5 text-gold rounded focus:ring-2 focus:ring-gold"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <h3 className="text-white font-bold mb-4">Data Export & Deletion</h3>
                  <div className="space-y-4">
                    <div className="bg-dark-tertiary rounded-xl p-4 flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold mb-1">Download Your Data</h4>
                        <p className="text-gray-400 text-sm">Get a copy of all your data in JSON format</p>
                      </div>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gold text-dark font-semibold rounded-lg hover:shadow-lg transition-all">
                        <Download className="w-5 h-5" />
                        Export
                      </button>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold mb-1">Delete All Data</h4>
                          <p className="text-gray-400 text-sm">Permanently delete all your data from our servers</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all">
                          <Trash2 className="w-5 h-5" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  <Save className="w-5 h-5" />
                  Save Privacy Settings
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
