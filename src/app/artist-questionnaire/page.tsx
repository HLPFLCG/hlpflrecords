'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ClipboardList,
  Building2,
  Scale,
  Users,
  Music,
  DollarSign,
  FileText,
  Globe,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Send,
  AlertCircle,
  Briefcase,
  Award,
  Target,
  Shield
} from 'lucide-react'

interface FormData {
  // Basic Info
  artistName: string
  legalName: string
  email: string
  phone: string
  location: string

  // Business Entity
  hasLLC: string
  llcName: string
  llcState: string
  llcFormationDate: string
  hasMultipleEntities: string
  additionalEntities: string
  einNumber: string

  // Legal
  hasLawyer: string
  lawyerName: string
  lawyerContact: string
  hasPreviousContracts: string
  contractDetails: string
  hasTrademarks: string
  trademarkDetails: string

  // Current Operations
  yearsActive: string
  monthlyRevenue: string
  revenueStreams: string[]
  hasTeam: string
  teamDetails: string
  hasManager: string
  managerDetails: string

  // Existing Deals
  hasDistributionDeal: string
  distributorName: string
  distributionTerms: string
  hasPublishingDeal: string
  publisherName: string
  publishingTerms: string
  hasSyncDeals: string
  syncDetails: string
  hasLabelDeal: string
  labelDetails: string

  // Music Catalog
  totalTracks: string
  releasedTracks: string
  unreleasedTracks: string
  ownsAllMasters: string
  masterOwnershipDetails: string
  ownsAllPublishing: string
  publishingOwnershipDetails: string

  // Goals
  primaryGoals: string[]
  shortTermGoals: string
  longTermGoals: string
  expectedSupport: string[]

  // Additional
  howDidYouHear: string
  additionalNotes: string
}

const initialFormData: FormData = {
  artistName: '',
  legalName: '',
  email: '',
  phone: '',
  location: '',
  hasLLC: '',
  llcName: '',
  llcState: '',
  llcFormationDate: '',
  hasMultipleEntities: '',
  additionalEntities: '',
  einNumber: '',
  hasLawyer: '',
  lawyerName: '',
  lawyerContact: '',
  hasPreviousContracts: '',
  contractDetails: '',
  hasTrademarks: '',
  trademarkDetails: '',
  yearsActive: '',
  monthlyRevenue: '',
  revenueStreams: [],
  hasTeam: '',
  teamDetails: '',
  hasManager: '',
  managerDetails: '',
  hasDistributionDeal: '',
  distributorName: '',
  distributionTerms: '',
  hasPublishingDeal: '',
  publisherName: '',
  publishingTerms: '',
  hasSyncDeals: '',
  syncDetails: '',
  hasLabelDeal: '',
  labelDetails: '',
  totalTracks: '',
  releasedTracks: '',
  unreleasedTracks: '',
  ownsAllMasters: '',
  masterOwnershipDetails: '',
  ownsAllPublishing: '',
  publishingOwnershipDetails: '',
  primaryGoals: [],
  shortTermGoals: '',
  longTermGoals: '',
  expectedSupport: [],
  howDidYouHear: '',
  additionalNotes: ''
}

const steps = [
  { id: 1, title: 'Basic Info', icon: Users, description: 'Your contact information' },
  { id: 2, title: 'Business Entity', icon: Building2, description: 'LLC and company structure' },
  { id: 3, title: 'Legal', icon: Scale, description: 'Legal representation and contracts' },
  { id: 4, title: 'Operations', icon: Briefcase, description: 'Current business operations' },
  { id: 5, title: 'Existing Deals', icon: FileText, description: 'Distribution, publishing, and more' },
  { id: 6, title: 'Music Catalog', icon: Music, description: 'Your catalog and ownership' },
  { id: 7, title: 'Goals', icon: Target, description: 'What you want to achieve' },
  { id: 8, title: 'Review', icon: CheckCircle, description: 'Review and submit' }
]

export default function ArtistQuestionnairePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleArrayField = (field: keyof FormData, value: string) => {
    const currentArray = formData[field] as string[]
    if (currentArray.includes(value)) {
      updateFormData(field, currentArray.filter(item => item !== value))
    } else {
      updateFormData(field, [...currentArray, value])
    }
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/questionnaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
      } else {
        setSubmitError(result.error || 'Failed to submit. Please try again.')
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen py-20 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Your questionnaire has been submitted successfully. Our team will review your information and get back to you within 2-3 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-6 py-3 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-dark transition-colors">
              Return Home
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-dark-tertiary border border-gray-700 text-white rounded-lg hover:border-gold transition-colors">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-2xl mb-6">
            <ClipboardList className="w-10 h-10 text-dark" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Artist Onboarding Questionnaire
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Help us understand where you are in your music career so we can best support you.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    currentStep >= step.id
                      ? 'bg-gold text-dark'
                      : 'bg-dark-tertiary text-gray-500'
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step.id
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded transition-all ${
                      currentStep > step.id ? 'bg-gold' : 'bg-dark-tertiary'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">{steps[currentStep - 1].title}</h2>
            <p className="text-gray-400 text-sm">{steps[currentStep - 1].description}</p>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-dark-secondary border border-gray-800 rounded-2xl p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Artist/Stage Name *</label>
                    <input
                      type="text"
                      value={formData.artistName}
                      onChange={(e) => updateFormData('artistName', e.target.value)}
                      placeholder="Your artist name"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Legal Name *</label>
                    <input
                      type="text"
                      value={formData.legalName}
                      onChange={(e) => updateFormData('legalName', e.target.value)}
                      placeholder="Your full legal name"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateFormData('location', e.target.value)}
                    placeholder="City, State/Country"
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Business Entity */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-white font-semibold mb-3">Do you have an LLC or other business entity? *</label>
                  <div className="flex gap-4">
                    {['Yes', 'No', 'In Progress'].map((option) => (
                      <button
                        key={option}
                        onClick={() => updateFormData('hasLLC', option)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.hasLLC === option
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.hasLLC === 'Yes' && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2">LLC/Entity Name</label>
                        <input
                          type="text"
                          value={formData.llcName}
                          onChange={(e) => updateFormData('llcName', e.target.value)}
                          placeholder="Your Company LLC"
                          className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-semibold mb-2">State of Formation</label>
                        <input
                          type="text"
                          value={formData.llcState}
                          onChange={(e) => updateFormData('llcState', e.target.value)}
                          placeholder="e.g., Delaware, California"
                          className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2">Formation Date</label>
                        <input
                          type="date"
                          value={formData.llcFormationDate}
                          onChange={(e) => updateFormData('llcFormationDate', e.target.value)}
                          className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-semibold mb-2">EIN (if applicable)</label>
                        <input
                          type="text"
                          value={formData.einNumber}
                          onChange={(e) => updateFormData('einNumber', e.target.value)}
                          placeholder="XX-XXXXXXX"
                          className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-white font-semibold mb-3">Do you operate multiple companies/entities?</label>
                  <div className="flex gap-4">
                    {['Yes', 'No'].map((option) => (
                      <button
                        key={option}
                        onClick={() => updateFormData('hasMultipleEntities', option)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.hasMultipleEntities === option
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.hasMultipleEntities === 'Yes' && (
                  <div>
                    <label className="block text-white font-semibold mb-2">Please list your additional entities</label>
                    <textarea
                      value={formData.additionalEntities}
                      onChange={(e) => updateFormData('additionalEntities', e.target.value)}
                      placeholder="List each entity name, type, and its purpose..."
                      rows={4}
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    />
                  </div>
                )}

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Why We Ask About Business Entities</h4>
                      <p className="text-gray-400 text-sm">
                        Understanding your business structure helps us ensure proper contract execution,
                        tax reporting, and liability protection. If you don&apos;t have an LLC yet, we can
                        help guide you through the process.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Legal */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-white font-semibold mb-3">Do you have an entertainment lawyer? *</label>
                  <div className="flex gap-4">
                    {['Yes', 'No', 'Looking for one'].map((option) => (
                      <button
                        key={option}
                        onClick={() => updateFormData('hasLawyer', option)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.hasLawyer === option
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.hasLawyer === 'Yes' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Lawyer/Firm Name</label>
                      <input
                        type="text"
                        value={formData.lawyerName}
                        onChange={(e) => updateFormData('lawyerName', e.target.value)}
                        placeholder="Attorney or firm name"
                        className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Contact Info</label>
                      <input
                        type="text"
                        value={formData.lawyerContact}
                        onChange={(e) => updateFormData('lawyerContact', e.target.value)}
                        placeholder="Email or phone"
                        className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-white font-semibold mb-3">Have you signed any music-related contracts in the past?</label>
                  <div className="flex gap-4">
                    {['Yes', 'No'].map((option) => (
                      <button
                        key={option}
                        onClick={() => updateFormData('hasPreviousContracts', option)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.hasPreviousContracts === option
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.hasPreviousContracts === 'Yes' && (
                  <div>
                    <label className="block text-white font-semibold mb-2">Please describe these contracts</label>
                    <textarea
                      value={formData.contractDetails}
                      onChange={(e) => updateFormData('contractDetails', e.target.value)}
                      placeholder="Type of contracts, with whom, current status (active/expired), any obligations remaining..."
                      rows={4}
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-white font-semibold mb-3">Do you have any registered trademarks?</label>
                  <div className="flex gap-4">
                    {['Yes', 'No', 'In Progress'].map((option) => (
                      <button
                        key={option}
                        onClick={() => updateFormData('hasTrademarks', option)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.hasTrademarks === option
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {(formData.hasTrademarks === 'Yes' || formData.hasTrademarks === 'In Progress') && (
                  <div>
                    <label className="block text-white font-semibold mb-2">Trademark Details</label>
                    <textarea
                      value={formData.trademarkDetails}
                      onChange={(e) => updateFormData('trademarkDetails', e.target.value)}
                      placeholder="Artist name, logo, any other trademarks..."
                      rows={3}
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    />
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 4: Operations */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">How long have you been making music professionally?</label>
                    <select
                      value={formData.yearsActive}
                      onChange={(e) => updateFormData('yearsActive', e.target.value)}
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="less-than-1">Less than 1 year</option>
                      <option value="1-2">1-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Approximate monthly music revenue</label>
                    <select
                      value={formData.monthlyRevenue}
                      onChange={(e) => updateFormData('monthlyRevenue', e.target.value)}
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="0-100">$0 - $100</option>
                      <option value="100-500">$100 - $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-5000">$1,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Current revenue streams (select all that apply)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Streaming', 'Live Shows', 'Merchandise', 'Sync Licensing', 'Teaching/Lessons', 'Production for Others', 'Session Work', 'YouTube/Content', 'Patreon/Subscriptions', 'Other'].map((stream) => (
                      <button
                        key={stream}
                        onClick={() => toggleArrayField('revenueStreams', stream)}
                        className={`px-4 py-2 rounded-lg border-2 text-sm transition-all ${
                          formData.revenueStreams.includes(stream)
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {stream}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Do you have a team?</label>
                  <div className="flex gap-4">
                    {['Yes', 'No', 'Building one'].map((option) => (
                      <button
                        key={option}
                        onClick={() => updateFormData('hasTeam', option)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.hasTeam === option
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.hasTeam === 'Yes' && (
                  <div>
                    <label className="block text-white font-semibold mb-2">Who is on your team?</label>
                    <textarea
                      value={formData.teamDetails}
                      onChange={(e) => updateFormData('teamDetails', e.target.value)}
                      placeholder="List team members and their roles (e.g., producer, social media manager, booking agent)..."
                      rows={3}
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-white font-semibold mb-3">Do you currently have a manager?</label>
                  <div className="flex gap-4">
                    {['Yes', 'No', 'Looking for one'].map((option) => (
                      <button
                        key={option}
                        onClick={() => updateFormData('hasManager', option)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.hasManager === option
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.hasManager === 'Yes' && (
                  <div>
                    <label className="block text-white font-semibold mb-2">Manager Details</label>
                    <textarea
                      value={formData.managerDetails}
                      onChange={(e) => updateFormData('managerDetails', e.target.value)}
                      placeholder="Manager name, company, commission rate, contract duration..."
                      rows={3}
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    />
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 5: Existing Deals */}
            {currentStep === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Important: Existing Commitments</h4>
                      <p className="text-gray-400 text-sm">
                        Please be thorough here. Knowing your existing deals helps us understand what we can offer
                        and ensures we don&apos;t conflict with any current obligations.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Do you have a distribution deal?</label>
                  <div className="flex gap-4">
                    {['Yes', 'No'].map((option) => (
                      <button
                        key={option}
                        onClick={() => updateFormData('hasDistributionDeal', option)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.hasDistributionDeal === option
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.hasDistributionDeal === 'Yes' && (
                  <div className="space-y-4 pl-4 border-l-2 border-gold/30">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-semibold mb-2">Distributor Name</label>
                        <input
                          type="text"
                          value={formData.distributorName}
                          onChange={(e) => updateFormData('distributorName', e.target.value)}
                          placeholder="e.g., DistroKid, TuneCore, CD Baby"
                          className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Distribution Terms</label>
                      <textarea
                        value={formData.distributionTerms}
                        onChange={(e) => updateFormData('distributionTerms', e.target.value)}
                        placeholder="Revenue split, contract length, exclusivity, territory..."
                        rows={2}
                        className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-white font-semibold mb-3">Do you have a publishing deal?</label>
                  <div className="flex gap-4">
                    {['Yes', 'No'].map((option) => (
                      <button
                        key={option}
                        onClick={() => updateFormData('hasPublishingDeal', option)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.hasPublishingDeal === option
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.hasPublishingDeal === 'Yes' && (
                  <div className="space-y-4 pl-4 border-l-2 border-gold/30">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-semibold mb-2">Publisher Name</label>
                        <input
                          type="text"
                          value={formData.publisherName}
                          onChange={(e) => updateFormData('publisherName', e.target.value)}
                          placeholder="Publishing company name"
                          className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Publishing Terms</label>
                      <textarea
                        value={formData.publishingTerms}
                        onChange={(e) => updateFormData('publishingTerms', e.target.value)}
                        placeholder="Split, term length, advance, catalog included..."
                        rows={2}
                        className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-white font-semibold mb-3">Do you have any sync licensing deals?</label>
                  <div className="flex gap-4">
                    {['Yes', 'No'].map((option) => (
                      <button
                        key={option}
                        onClick={() => updateFormData('hasSyncDeals', option)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.hasSyncDeals === option
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.hasSyncDeals === 'Yes' && (
                  <div className="pl-4 border-l-2 border-gold/30">
                    <label className="block text-white font-semibold mb-2">Sync Deal Details</label>
                    <textarea
                      value={formData.syncDetails}
                      onChange={(e) => updateFormData('syncDetails', e.target.value)}
                      placeholder="Sync agency, exclusivity, tracks included, placements received..."
                      rows={2}
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-white font-semibold mb-3">Are you currently signed to a record label?</label>
                  <div className="flex gap-4">
                    {['Yes', 'No', 'Previously'].map((option) => (
                      <button
                        key={option}
                        onClick={() => updateFormData('hasLabelDeal', option)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.hasLabelDeal === option
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {(formData.hasLabelDeal === 'Yes' || formData.hasLabelDeal === 'Previously') && (
                  <div className="pl-4 border-l-2 border-gold/30">
                    <label className="block text-white font-semibold mb-2">Label Deal Details</label>
                    <textarea
                      value={formData.labelDetails}
                      onChange={(e) => updateFormData('labelDetails', e.target.value)}
                      placeholder="Label name, deal type, term, status, any ongoing obligations..."
                      rows={3}
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    />
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 6: Music Catalog */}
            {currentStep === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Total Tracks Recorded</label>
                    <input
                      type="number"
                      value={formData.totalTracks}
                      onChange={(e) => updateFormData('totalTracks', e.target.value)}
                      placeholder="0"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Released Tracks</label>
                    <input
                      type="number"
                      value={formData.releasedTracks}
                      onChange={(e) => updateFormData('releasedTracks', e.target.value)}
                      placeholder="0"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Unreleased Tracks</label>
                    <input
                      type="number"
                      value={formData.unreleasedTracks}
                      onChange={(e) => updateFormData('unreleasedTracks', e.target.value)}
                      placeholder="0"
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Do you own 100% of your masters?</label>
                  <div className="flex gap-4">
                    {['Yes', 'No', 'Partially'].map((option) => (
                      <button
                        key={option}
                        onClick={() => updateFormData('ownsAllMasters', option)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.ownsAllMasters === option
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {(formData.ownsAllMasters === 'No' || formData.ownsAllMasters === 'Partially') && (
                  <div>
                    <label className="block text-white font-semibold mb-2">Master Ownership Details</label>
                    <textarea
                      value={formData.masterOwnershipDetails}
                      onChange={(e) => updateFormData('masterOwnershipDetails', e.target.value)}
                      placeholder="Which tracks are not fully owned? Who owns them? What percentage?"
                      rows={3}
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-white font-semibold mb-3">Do you own 100% of your publishing?</label>
                  <div className="flex gap-4">
                    {['Yes', 'No', 'Partially', 'Not Sure'].map((option) => (
                      <button
                        key={option}
                        onClick={() => updateFormData('ownsAllPublishing', option)}
                        className={`px-6 py-3 rounded-lg border-2 transition-all ${
                          formData.ownsAllPublishing === option
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {(formData.ownsAllPublishing === 'No' || formData.ownsAllPublishing === 'Partially') && (
                  <div>
                    <label className="block text-white font-semibold mb-2">Publishing Ownership Details</label>
                    <textarea
                      value={formData.publishingOwnershipDetails}
                      onChange={(e) => updateFormData('publishingOwnershipDetails', e.target.value)}
                      placeholder="Co-writers, splits, any assignments made..."
                      rows={3}
                      className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    />
                  </div>
                )}

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Masters vs Publishing</h4>
                      <p className="text-gray-400 text-sm">
                        <strong>Masters</strong> = the actual sound recording. <strong>Publishing</strong> = the underlying
                        composition (lyrics and melody). You can own one without the other. If you&apos;re not sure,
                        we can help you figure it out.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 7: Goals */}
            {currentStep === 7 && (
              <motion.div
                key="step7"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-white font-semibold mb-3">What are your primary goals? (select all that apply)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      'Increase Streams',
                      'Grow Fanbase',
                      'Book More Shows',
                      'Get Sync Placements',
                      'Release an Album',
                      'Build a Team',
                      'Generate More Revenue',
                      'Go Full-Time',
                      'Get Press Coverage',
                      'Playlist Placement',
                      'Build Brand',
                      'Learn the Business'
                    ].map((goal) => (
                      <button
                        key={goal}
                        onClick={() => toggleArrayField('primaryGoals', goal)}
                        className={`px-4 py-3 rounded-lg border-2 text-sm transition-all ${
                          formData.primaryGoals.includes(goal)
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {goal}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Short-term goals (next 6-12 months)</label>
                  <textarea
                    value={formData.shortTermGoals}
                    onChange={(e) => updateFormData('shortTermGoals', e.target.value)}
                    placeholder="What do you want to accomplish in the next year?"
                    rows={3}
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Long-term goals (3-5 years)</label>
                  <textarea
                    value={formData.longTermGoals}
                    onChange={(e) => updateFormData('longTermGoals', e.target.value)}
                    placeholder="Where do you see yourself in 3-5 years?"
                    rows={3}
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">What support do you need most? (select all that apply)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      'Distribution',
                      'Marketing',
                      'Social Media',
                      'Playlist Pitching',
                      'PR/Press',
                      'Legal Guidance',
                      'Business Setup',
                      'Sync Licensing',
                      'Tour Booking',
                      'Merchandise',
                      'Video Production',
                      'Financial Planning'
                    ].map((support) => (
                      <button
                        key={support}
                        onClick={() => toggleArrayField('expectedSupport', support)}
                        className={`px-4 py-3 rounded-lg border-2 text-sm transition-all ${
                          formData.expectedSupport.includes(support)
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-gray-700 bg-dark-tertiary text-gray-300 hover:border-gold/50'
                        }`}
                      >
                        {support}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">How did you hear about HLPFL?</label>
                  <select
                    value={formData.howDidYouHear}
                    onChange={(e) => updateFormData('howDidYouHear', e.target.value)}
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Friend/Artist Referral</option>
                    <option value="google">Google Search</option>
                    <option value="event">Event/Conference</option>
                    <option value="podcast">Podcast</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Anything else you&apos;d like us to know?</label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                    placeholder="Additional information, questions, or concerns..."
                    rows={4}
                    className="w-full bg-dark-tertiary border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 8: Review */}
            {currentStep === 8 && (
              <motion.div
                key="step8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 text-center">
                  <Award className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to Submit!</h3>
                  <p className="text-gray-300">
                    Please review your information below before submitting. You can go back to any section to make changes.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Summary sections */}
                  <div className="bg-dark-tertiary rounded-xl p-4">
                    <h4 className="text-gold font-semibold mb-2">Basic Info</h4>
                    <p className="text-white">{formData.artistName || 'Not provided'} ({formData.legalName || 'Not provided'})</p>
                    <p className="text-gray-400 text-sm">{formData.email} | {formData.phone || 'No phone'}</p>
                  </div>

                  <div className="bg-dark-tertiary rounded-xl p-4">
                    <h4 className="text-gold font-semibold mb-2">Business Entity</h4>
                    <p className="text-white">LLC: {formData.hasLLC || 'Not specified'}</p>
                    {formData.llcName && <p className="text-gray-400 text-sm">{formData.llcName} ({formData.llcState})</p>}
                  </div>

                  <div className="bg-dark-tertiary rounded-xl p-4">
                    <h4 className="text-gold font-semibold mb-2">Existing Deals</h4>
                    <div className="text-gray-300 text-sm space-y-1">
                      <p>Distribution: {formData.hasDistributionDeal || 'Not specified'}</p>
                      <p>Publishing: {formData.hasPublishingDeal || 'Not specified'}</p>
                      <p>Label: {formData.hasLabelDeal || 'Not specified'}</p>
                    </div>
                  </div>

                  <div className="bg-dark-tertiary rounded-xl p-4">
                    <h4 className="text-gold font-semibold mb-2">Goals</h4>
                    <div className="flex flex-wrap gap-2">
                      {formData.primaryGoals.map((goal) => (
                        <span key={goal} className="px-2 py-1 bg-gold/20 text-gold text-sm rounded">
                          {goal}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">What Happens Next?</h4>
                      <p className="text-gray-400 text-sm">
                        After submitting, our team will review your questionnaire within 2-3 business days.
                        We&apos;ll reach out to schedule a call to discuss your goals and how HLPFL can help you achieve them.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error Message */}
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 bg-red-500/10 border border-red-500/50 rounded-xl p-4"
            >
              <p className="text-red-400 text-center">{submitError}</p>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-700">
            <button
              onClick={prevStep}
              disabled={currentStep === 1 || isSubmitting}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                currentStep === 1 || isSubmitting
                  ? 'bg-dark-tertiary text-gray-600 cursor-not-allowed'
                  : 'bg-dark-tertiary border border-gray-700 text-white hover:border-gold'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>

            {currentStep < steps.length ? (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Questionnaire
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
