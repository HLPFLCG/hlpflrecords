'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Shield, 
  FileText, 
  Download, 
  Search, 
  Filter, 
  AlertCircle,
  HelpCircle,
  BookOpen,
  UserPlus,
  Building2,
  Copyright,
  DollarSign,
  Users,
  FileCheck,
  Lock,
  ChevronRight,
  Briefcase
} from 'lucide-react'

const documents = [
  {
    id: 1,
    title: 'Contractor Confidentiality and Invention Assignment Agreement',
    description: 'Protects confidential information and assigns invention rights to HLPFL. Essential for contractors and independent contributors working with HLPFL.',
    category: 'legal',
    file: 'NEW_Contractor_Confidentiality_and_Invention_Assignment_Agreement.pdf',
    pages: 8,
    icon: Lock
  },
  {
    id: 2,
    title: 'Banking and Signatory Authority Resolution',
    description: 'Official resolution designating authorized signatories for HLPFL banking and financial operations. Defines signing requirements and financial authorities.',
    category: 'legal',
    file: 'NEW_Banking_and_Signatory_Authority_Resolution.pdf',
    pages: 6,
    icon: Building2
  },
  {
    id: 3,
    title: 'Indemnification Agreement',
    description: 'Provides indemnification protection for HLPFL members, managers, officers, and directors. Covers legal expenses and liability protection in good faith actions.',
    category: 'legal',
    file: 'NEW_Indemnification_Agreement.pdf',
    pages: 6,
    icon: Shield
  },
  {
    id: 4,
    title: 'Intellectual Property Assignment Agreement',
    description: 'Formal agreement for assigning intellectual property rights including sound recordings, compositions, copyrights, trademarks, and related economic rights to HLPFL.',
    category: 'legal',
    file: 'NEW_Intellectual_Property_Assignment_Agreement.pdf',
    pages: 5,
    icon: Copyright
  },
  {
    id: 5,
    title: 'Engagement Letter - Business Foundation Services',
    description: 'Comprehensive engagement letter outlining business foundation services for independent artists, including LLC formation, operating agreement drafting, and legal compliance support.',
    category: 'legal',
    file: 'REVISED_Engagement_Letter.pdf',
    pages: 9,
    icon: FileText
  },
  {
    id: 6,
    title: 'Artist Application Questionnaire',
    description: 'Comprehensive questionnaire for new artist applications. Tell us about your music, career goals, and how HLPFL can help you succeed.',
    category: 'forms',
    link: '/artist-questionnaire',
    icon: UserPlus,
    status: 'available'
  },
  {
    id: 7,
    title: 'Contractor Application Form',
    description: 'Application form for contractors and service providers interested in working with HLPFL. Please complete if you offer services to independent artists.',
    category: 'forms',
    icon: Users,
    status: 'coming-soon'
  },
  {
    id: 8,
    title: 'Partnership Inquiry Form',
    description: 'For businesses and organizations interested in partnering with HLPFL. Tell us about your proposal and how we can work together.',
    category: 'forms',
    icon: Briefcase,
    status: 'coming-soon'
  },
  {
    id: 9,
    title: 'Artist Onboarding Guide',
    description: 'Step-by-step guide for new HLPFL artists. Learn how to set up your profile, access tools, and make the most of our platform.',
    category: 'resources',
    icon: BookOpen,
    status: 'coming-soon'
  },
  {
    id: 10,
    title: 'Business Formation Guide',
    description: 'Comprehensive guide to forming your music business as an LLC. Understand the benefits, process, and requirements for independent artists.',
    category: 'resources',
    icon: FileCheck,
    status: 'coming-soon'
  },
  {
    id: 11,
    title: 'Copyright & IP Guide',
    description: 'Essential information about copyright registration, protecting your music, and understanding intellectual property rights in the music industry.',
    category: 'resources',
    icon: Copyright,
    status: 'coming-soon'
  },
  {
    id: 12,
    title: 'Music Distribution & Royalties Guide',
    description: 'Learn how music distribution works, how royalties are calculated and paid, and how to maximize your earnings from streaming and downloads.',
    category: 'resources',
    icon: DollarSign,
    status: 'coming-soon'
  }
]

const categories = [
  { id: 'all', label: 'All Documents', icon: FileText },
  { id: 'legal', label: 'Legal Documents', icon: Shield },
  { id: 'forms', label: 'Forms & Applications', icon: FileCheck },
  { id: 'resources', label: 'Resources & Guides', icon: BookOpen }
]

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-dark-secondary">
      {/* Header Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gold/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-gold to-gold-dark rounded-2xl shadow-2xl">
              <FileText className="text-dark w-8 h-8" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Documents & <span className="gradient-animate bg-clip-text text-transparent">Forms</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light max-w-4xl mx-auto"
          >
            Access all legal documents, agreements, and resources for HLPFL artists and contractors. Everything you need in one convenient location.
          </motion.p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-l-4 border-gold rounded-lg p-6"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="text-gold flex-shrink-0 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gold mb-2">Important Legal Notice</h3>
                <p className="text-gray-300 leading-relaxed">
                  These documents are for reference purposes only. Before signing any legal agreement, we strongly recommend consulting with independent legal counsel to ensure you fully understand your rights and obligations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-dark-secondary border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-gold to-gold-dark text-dark shadow-lg shadow-gold/20'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </button>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {filteredDocuments.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl"
            >
              <FileText className="text-gray-500 w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No documents found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc, index) => {
                const Icon = doc.icon
                return (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl">
                        <Icon className="text-gold w-6 h-6" />
                      </div>
                      {doc.status === 'coming-soon' && (
                        <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                      {doc.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {doc.description}
                    </p>

                    {doc.file && (
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-white/10">
                        <span className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          PDF
                        </span>
                        {doc.pages && (
                          <span className="flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            {doc.pages} pages
                          </span>
                        )}
                      </div>
                    )}

                    {doc.file ? (
                      <a
                        href={`/documents/${doc.file}`}
                        download
                        className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all group-hover:scale-105"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    ) : doc.link ? (
                      <Link
                        href={doc.link}
                        className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/20 transition-all group-hover:scale-105"
                      >
                        <ChevronRight className="w-4 h-4" />
                        Apply Now
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-white/5 text-gray-400 font-semibold rounded-xl cursor-not-allowed border border-white/10"
                      >
                        <HelpCircle className="w-4 h-4" />
                        Coming Soon
                      </button>
                    )}
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/30 rounded-2xl p-8 text-center"
          >
            <HelpCircle className="text-gold w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-3">Need Help with Documents?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team is here to assist you with any questions about our documents, forms, or legal agreements. Don't hesitate to reach out.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-dark font-bold rounded-xl hover:shadow-2xl hover:shadow-gold/20 transition-all transform hover:scale-105"
            >
              Contact Support
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}