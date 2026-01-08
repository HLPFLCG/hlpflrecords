'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Music, Users, DollarSign, Shield, Heart, TrendingUp,
  Mic, Radio, Globe, Award, BookOpen, Headphones,
  Camera, Video, Sparkles, Target, BarChart, Phone
} from 'lucide-react'

interface Section {
  id: string
  title: string
  icon: React.ReactNode
  subsections: {
    id: string
    title: string
    content: {
      title: string
      description: string
      details?: string[]
    }[]
  }[]
}

export default function ServicesGuidePage() {
  const [activeSection, setActiveSection] = useState<string>('executive-summary')

  const sections: Section[] = [
    {
      id: 'creative-development',
      title: 'Creative Development',
      icon: <Music className="w-6 h-6" />,
      subsections: [
        {
          id: 'songwriting',
          title: 'Songwriting & Composition',
          content: [
            {
              title: 'Co-Writing Sessions',
              description: 'We facilitate collaborative songwriting sessions by matching artists with compatible co-writers based on genre, style, creative goals, and interpersonal chemistry.',
              details: [
                'Pre-session consultation to understand creative goals',
                'Writer matching based on extensive database',
                'Session coordination including scheduling and technical setup',
                'Post-session split sheet documentation and rights registration'
              ]
            },
            {
              title: 'Toplining and Melody Development',
              description: 'Professional toplining services for artists who create instrumental tracks but need vocal melodies and lyrics.',
              details: [
                'Artist submits instrumental with reference notes',
                'Matching with appropriate topliner',
                'First demo delivered within 5-7 business days',
                'Two rounds of revisions included'
              ]
            },
            {
              title: 'Lyric Editing and Refinement',
              description: 'Professional lyric editing to strengthen existing songs including structural analysis, line-by-line feedback, and thematic coherence review.',
              details: [
                'Detailed written feedback document',
                'Suggested alternative lines with explanations',
                'Reference examples from successful songs',
                'Standard 3-5 business days turnaround'
              ]
            },
            {
              title: 'Beat and Instrumental Creation',
              description: 'Custom instrumental production tailored to artist specifications across all genres.',
              details: [
                'Custom beats created from scratch',
                'Semi-custom modifications to existing catalog',
                'Exclusive purchases of pre-made instrumentals',
                'All instrumentals delivered with full stems and track-out files'
              ]
            },
            {
              title: 'Publishing Administration',
              description: 'Comprehensive management of composition copyrights and royalty collection at 15% commission (industry standard is 15-25%).',
              details: [
                'Copyright registration with U.S. Copyright Office',
                'PRO registration (ASCAP, BMI, SESAC, or GMR)',
                'Mechanical royalty registration (MLC, Harry Fox)',
                'International collection through sub-publishing network'
              ]
            }
          ]
        },
        {
          id: 'production',
          title: 'Production Services',
          content: [
            {
              title: 'Mobile Recording Studio',
              description: 'HLPFL operates a fully-equipped mobile recording studio capable of delivering professional-quality recordings in virtually any location.',
              details: [
                'Industry-standard microphones (Neumann, AKG, Shure, Sennheiser)',
                'Premium preamps and converters',
                '32-channel digital recording',
                'Based in Michigan with Midwest coverage'
              ]
            },
            {
              title: 'Producer Matching and A&R',
              description: 'Match artists with producers whose sonic sensibilities align with artist goals.',
              details: [
                'Database of 200+ vetted producers across all genres',
                'In-depth artist consultation',
                'Chemistry sessions before commitment',
                'Project oversight and quality control'
              ]
            },
            {
              title: 'Vocal Production and Coaching',
              description: 'Specialized production focused on optimizing vocal performances.',
              details: [
                'Pre-production: Key/tempo analysis, vocal range assessment',
                'Session production: Real-time feedback and direction',
                'Post-production: Comp editing, pitch correction, timing alignment'
              ]
            }
          ]
        },
        {
          id: 'post-production',
          title: 'Post-Production Services',
          content: [
            {
              title: 'Mixing Services',
              description: 'Professional mixing with credits across all major genres including stereo and immersive (Dolby Atmos) mixing.',
              details: [
                'Traditional stereo mixing for all platforms',
                'Dolby Atmos and Sony 360 Reality Audio',
                'Two rounds of revisions included',
                'Alternate mixes available (instrumental, TV mix, radio edit)'
              ]
            },
            {
              title: 'Mastering Services',
              description: 'Format-specific mastering ensuring music translates across all playback systems.',
              details: [
                'Streaming masters (optimized for loudness normalization)',
                'Vinyl masters (adjusted for physical medium)',
                'CD masters (full dynamic range)',
                'Broadcast masters (EBU R128 compliance)'
              ]
            },
            {
              title: 'Vinyl and Physical Format Mastering',
              description: 'Specialized mastering for vinyl, CD, and cassette with unique technical requirements.',
              details: [
                'Inner groove distortion compensation',
                'Bass management for groove depth',
                'Test pressing review',
                'Red Book specification compliance for CD'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'distribution',
      title: 'Distribution & Release',
      icon: <Globe className="w-6 h-6" />,
      subsections: [
        {
          id: 'digital-distribution',
          title: 'Digital Distribution',
          content: [
            {
              title: 'DSP Delivery',
              description: 'Music delivered to all major digital streaming platforms and download stores worldwide.',
              details: [
                'Spotify, Apple Music, Amazon Music, YouTube Music',
                '50+ additional platforms including Deezer, Tidal, Pandora',
                'Optimal file formats and metadata for each platform',
                'Standard delivery 2-3 weeks before release'
              ]
            },
            {
              title: 'Playlist Pitching',
              description: 'Strategic pitching to editorial and independent playlists.',
              details: [
                'Spotify for Artists submissions',
                'Apple Music Connect pitches',
                'Database of 5,000+ vetted playlist curators',
                'Genre-specific targeting and placement tracking'
              ]
            },
            {
              title: 'Algorithm Optimization',
              description: 'Leveraging streaming platform algorithms for maximum organic discovery.',
              details: [
                'Release timing optimization',
                'Save-to-stream ratio improvement',
                'Listener retention optimization',
                'Daily streaming data review during release windows'
              ]
            }
          ]
        },
        {
          id: 'physical-distribution',
          title: 'Physical Distribution',
          content: [
            {
              title: 'Vinyl Production',
              description: 'Full-service vinyl production from mastering through delivery.',
              details: [
                'Standard black vinyl (7", 10", 12")',
                'Colored vinyl (solid, splatter, marble)',
                'Short runs starting at 100 units',
                'Current lead times: 4-8 months'
              ]
            },
            {
              title: 'CD Manufacturing',
              description: 'Professional CD production with various packaging options.',
              details: [
                'Jewel case, digipak, cardboard sleeve',
                'Minimum runs as low as 100 units',
                'Typical 2-4 week turnaround',
                'Quality control included'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'revenue',
      title: 'Revenue & Royalties',
      icon: <DollarSign className="w-6 h-6" />,
      subsections: [
        {
          id: 'collection',
          title: 'Collection & Administration',
          content: [
            {
              title: 'Performance Royalty Registration',
              description: 'Ensure registration to collect every dollar from public performance of your music.',
              details: [
                'PRO registration (ASCAP, BMI, SESAC, or GMR)',
                'Catalog registration with chosen PRO',
                'International PRO coordination',
                'Setlist submission for live performances'
              ]
            },
            {
              title: 'Mechanical Royalty Collection',
              description: 'Collection of royalties owed when compositions are reproduced.',
              details: [
                'MLC registration for streaming mechanicals',
                'Harry Fox Agency for physical/download mechanicals',
                'International sub-publishing relationships',
                'Territory-specific requirements and registrations'
              ]
            },
            {
              title: 'Neighboring Rights Collection',
              description: 'Collect performance royalties from international markets (often significant uncollected income).',
              details: [
                'SoundExchange registration for US digital performance',
                'International neighboring rights societies',
                'Featured artist and session musician registration',
                'Significant revenue for artists with international reach'
              ]
            }
          ]
        },
        {
          id: 'diversification',
          title: 'Revenue Diversification',
          content: [
            {
              title: 'Sync Licensing',
              description: 'Placement in film, television, advertising, and video games for upfront income and exposure.',
              details: [
                'Active pitching to music supervisors',
                'Sync agent relationships',
                'Instrumental, clean versions, and stems ready',
                'Quick-turn clearance capability'
              ]
            },
            {
              title: 'Fan Subscription Models',
              description: 'Recurring revenue from dedicated fans through subscription platforms.',
              details: [
                'Patreon, Substack, Ko-fi, YouTube Memberships',
                'Benefit structure design',
                'Exclusive content planning',
                'Tier pricing optimization'
              ]
            },
            {
              title: 'NFT and Digital Collectible Strategy',
              description: 'Navigate digital collectibles responsibly with focus on genuine fan value.',
              details: [
                'Limited edition releases',
                'Exclusive content access',
                'Physical-digital bundles',
                'Environmental and legal compliance'
              ]
            }
          ]
        },
        {
          id: 'financial',
          title: 'Financial Services',
          content: [
            {
              title: 'Advances',
              description: 'Fair, transparent advances against future earnings for recording, touring, or career investments.',
              details: [
                'Competitive rates below traditional label advances',
                'Clear recoupment schedules',
                'No perpetual ownership provisions',
                'Early payoff options available'
              ]
            },
            {
              title: 'Financial Education',
              description: 'Build financial literacy for sustainable music careers.',
              details: [
                'Understanding royalty statements',
                'Tax fundamentals for musicians',
                'Business entity structures',
                'Investment and retirement basics'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing & Promotion',
      icon: <TrendingUp className="w-6 h-6" />,
      subsections: [
        {
          id: 'digital-marketing',
          title: 'Digital Marketing',
          content: [
            {
              title: 'Social Media Management',
              description: 'Comprehensive management across Instagram, TikTok, X, Facebook, YouTube, and emerging platforms.',
              details: [
                'Content strategy development',
                'Posting calendar management',
                'Community engagement and moderation',
                'Analytics and reporting'
              ]
            },
            {
              title: 'Paid Advertising',
              description: 'Campaigns across Meta, TikTok, YouTube, Google, and Spotify Ad Studio.',
              details: [
                'Release awareness campaigns',
                'Streaming conversion optimization',
                'Ticket and merchandise promotion',
                'ROI tracking and optimization'
              ]
            },
            {
              title: 'Email Marketing',
              description: 'Build and engage email lists effectively with the most valuable owned audience channel.',
              details: [
                'List building strategy',
                'Email template design',
                'Automation setup',
                'Analytics and optimization'
              ]
            }
          ]
        },
        {
          id: 'public-relations',
          title: 'Public Relations',
          content: [
            {
              title: 'Press Release Writing',
              description: 'Professional press releases for all newsworthy moments.',
              details: [
                'New releases, tour announcements, milestones',
                'Targeted distribution to media contacts',
                'Wire service distribution for major announcements',
                'Embargo management'
              ]
            },
            {
              title: 'Media Training',
              description: 'Preparation for interviews and media appearances.',
              details: [
                'Key message development',
                'Interview technique coaching',
                'Body language and presentation',
                'Social media live best practices'
              ]
            },
            {
              title: 'Crisis Communication',
              description: 'Rapid response when negative situations arise.',
              details: [
                'Crisis assessment and strategy',
                'Response drafting',
                'Media and social media monitoring',
                'Reputation recovery planning'
              ]
            }
          ]
        },
        {
          id: 'content-creation',
          title: 'Content Creation',
          content: [
            {
              title: 'Music Video Production',
              description: 'Full-service production from concept through delivery.',
              details: [
                'Micro-budget: $1,000-$5,000',
                'Mid-level: $5,000-$25,000',
                'Professional: $25,000-$100,000+',
                'Creative concept, director matching, post-production'
              ]
            },
            {
              title: 'Photography',
              description: 'Professional photography for all artist needs.',
              details: [
                'Press shots and album artwork',
                'Live performance and tour documentation',
                'Social media content',
                'High-resolution and web-optimized delivery'
              ]
            },
            {
              title: 'EPK Development',
              description: 'Professional Electronic Press Kit for booking, press, and industry.',
              details: [
                'Biography (multiple lengths)',
                'High-resolution photos',
                'Music and video embeds',
                'Digital EPK website and downloadable PDF'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'live-performance',
      title: 'Live Performance',
      icon: <Mic className="w-6 h-6" />,
      subsections: [
        {
          id: 'booking-touring',
          title: 'Booking & Touring',
          content: [
            {
              title: 'Backyard Tours',
              description: 'HLPFL\'s signature touring initiative launching March 2026 with Pardyalone and Alki.',
              details: [
                'Performances in backyards, rooftops, warehouses',
                'Limited-capacity exclusive experiences',
                'Premium pricing reflecting intimacy',
                'Higher per-ticket revenue than traditional venues'
              ]
            },
            {
              title: 'Club and Theater Booking',
              description: 'Traditional venue booking with direct relationships nationwide.',
              details: [
                'Independent venues and promoters',
                'Festival connections',
                'Various deal structures (door, guarantees, versus)',
                'Market-specific negotiation'
              ]
            },
            {
              title: 'International Touring',
              description: 'Coordination of touring outside the United States.',
              details: [
                'Work visa coordination',
                'Equipment and merchandise logistics',
                'Currency and payment management',
                'Initial focus: UK, Germany, Australia'
              ]
            }
          ]
        },
        {
          id: 'tour-management',
          title: 'Tour Management',
          content: [
            {
              title: 'Tour Routing',
              description: 'Strategic planning to maximize efficiency and minimize costs.',
              details: [
                'Geographic logic and day-of-week optimization',
                'Market spacing and venue availability',
                'Radio/press opportunity integration',
                'Streaming data analysis for routing'
              ]
            },
            {
              title: 'Budget Management',
              description: 'Financial planning and tracking for tour economics.',
              details: [
                'Pre-tour expense projection and revenue forecasting',
                'On-tour per diem and expense tracking',
                'Real-time budget monitoring',
                'Post-tour profit/loss analysis'
              ]
            }
          ]
        },
        {
          id: 'merchandise',
          title: 'Merchandise',
          content: [
            {
              title: 'NFC-Enabled Merchandise',
              description: 'HLPFL\'s innovative merchandise with embedded NFC technology.',
              details: [
                'Exclusive content access',
                'Authenticity verification',
                'Ownership tracking',
                'Digital collectible pairing'
              ]
            },
            {
              title: 'Tour Merchandise Production',
              description: 'Design and production of merchandise for tour sales.',
              details: [
                'T-shirts, hoodies, hats, posters, stickers',
                'Vendor relationships and quality control',
                'Inventory planning and reorder management',
                'On-site sales and settlement'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'artist-development',
      title: 'Artist Development',
      icon: <Award className="w-6 h-6" />,
      subsections: [
        {
          id: 'performance-development',
          title: 'Performance Development',
          content: [
            {
              title: 'Vocal Coaching',
              description: 'Ongoing vocal development and maintenance through expert coaching.',
              details: [
                'Technique development and range expansion',
                'Stamina building and style refinement',
                'Tour vocal health protocols',
                'Referrals to vetted coaches'
              ]
            },
            {
              title: 'Stage Presence',
              description: 'Development of commanding, authentic live performance presence.',
              details: [
                'Movement coaching',
                'Crowd interaction techniques',
                'Confidence building',
                'Energy management'
              ]
            }
          ]
        },
        {
          id: 'education',
          title: 'Education',
          content: [
            {
              title: 'Music Business Fundamentals',
              description: 'Comprehensive education on how the music industry works.',
              details: [
                'Industry structure and revenue streams',
                'Key players and relationships',
                'Deal types and career stages',
                'Common pitfalls to avoid'
              ]
            },
            {
              title: 'Contract Literacy',
              description: 'Ability to read and understand career-defining contracts.',
              details: [
                'Contract structure and key terms',
                'Common provisions and red flags',
                'Negotiation points',
                'Termination clauses and rights reversion'
              ]
            },
            {
              title: 'Mental Health Resources',
              description: 'Support for unique mental health challenges of music careers.',
              details: [
                'Therapist referrals with music industry specialization',
                'Peer support networks',
                'Industry organizations (MusiCares, etc.)',
                'No stigma - mental health is health'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'management',
      title: 'Management & Business',
      icon: <Users className="w-6 h-6" />,
      subsections: [
        {
          id: 'artist-management',
          title: 'Artist Management',
          content: [
            {
              title: 'Day-to-Day Management',
              description: 'Comprehensive career management at 11% commission (industry standard is 15-20%).',
              details: [
                'Strategic career planning',
                'Opportunity evaluation',
                'Team coordination',
                'Your career belongs to you - we execute your vision'
              ]
            },
            {
              title: 'Strategic Planning',
              description: 'Long-term career planning and goal setting.',
              details: [
                '90-day action plans',
                'Annual strategic plans',
                '3-5 year career arcs',
                'Progress tracking and adjustment'
              ]
            }
          ]
        },
        {
          id: 'business-formation',
          title: 'Business Formation',
          content: [
            {
              title: 'Entity Setup Guidance',
              description: 'Guidance on proper business structure for music careers.',
              details: [
                'LLC, S-Corp, loan-out company options',
                'Liability protection considerations',
                'Tax implications',
                'Referrals to qualified attorneys and accountants'
              ]
            },
            {
              title: 'Trademark Registration',
              description: 'Protect artist name and brand through trademark.',
              details: [
                'Artist name, logo, album titles',
                'Availability search',
                'Attorney referral',
                'Maintenance requirements'
              ]
            }
          ]
        },
        {
          id: 'legal',
          title: 'Legal Services',
          content: [
            {
              title: 'Contract Review',
              description: 'Review and negotiation of all career-affecting contracts.',
              details: [
                'Recording and publishing deals',
                'Management and booking agreements',
                'Sync licenses and endorsements',
                'Attorney engagement for complex deals'
              ]
            },
            {
              title: 'Rights Protection',
              description: 'Active protection of artist intellectual property.',
              details: [
                'Infringement monitoring',
                'Cease and desist coordination',
                'Dispute resolution',
                'Litigation coordination when necessary'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'fan-engagement',
      title: 'Fan Engagement',
      icon: <Heart className="w-6 h-6" />,
      subsections: [
        {
          id: 'direct-to-fan',
          title: 'Direct-to-Fan',
          content: [
            {
              title: 'Fan Club Development',
              description: 'Creation and management of official fan communities.',
              details: [
                'Membership tiers and exclusive benefits',
                'Communication systems',
                'Event access',
                'Merchandise exclusives'
              ]
            },
            {
              title: 'Meet and Greet',
              description: 'Professional management of fan meet-and-greet experiences.',
              details: [
                'Pre-show meet-and-greets',
                'Soundcheck parties',
                'VIP packages',
                'Professional logistics and artist well-being'
              ]
            }
          ]
        },
        {
          id: 'data-insights',
          title: 'Data & Insights',
          content: [
            {
              title: 'Fan Analytics',
              description: 'Comprehensive analysis of fan data to inform strategy.',
              details: [
                'Demographic profiles',
                'Geographic concentrations',
                'Engagement patterns',
                'Growth trends and comparative analysis'
              ]
            },
            {
              title: 'Streaming Analytics',
              description: 'Deep analysis of streaming platform data.',
              details: [
                'Monthly listeners and stream counts',
                'Save rates and playlist adds',
                'Skip rates and listener retention',
                'Release strategy optimization'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'health-wellness',
      title: 'Health & Wellness',
      icon: <Headphones className="w-6 h-6" />,
      subsections: [
        {
          id: 'physical-health',
          title: 'Physical Health',
          content: [
            {
              title: 'Hearing Protection',
              description: 'Education and resources for protecting your most important tool.',
              details: [
                'Custom earplug fitting referrals',
                'IEM best practices',
                'Safe monitoring levels',
                'Hearing test recommendations'
              ]
            },
            {
              title: 'Vocal Health',
              description: 'Support for maintaining vocal instrument health.',
              details: [
                'ENT and vocal coach referrals',
                'Tour vocal health protocols',
                'Hydration and rest guidance',
                'Warning sign awareness'
              ]
            }
          ]
        },
        {
          id: 'career-sustainability',
          title: 'Career Sustainability',
          content: [
            {
              title: 'Longevity Planning',
              description: 'Building careers that last decades, not months.',
              details: [
                'Diversification strategies',
                'Audience development',
                'Skill building',
                'Brand evolution and relevance maintenance'
              ]
            },
            {
              title: 'Legacy Planning',
              description: 'Long-term planning for career and catalog beyond active years.',
              details: [
                'Estate planning referrals',
                'Catalog documentation',
                'Rights succession planning',
                'Archival organization'
              ]
            }
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Complete Artist Services Guide
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Everything a Musician Needs Under One Roof
            </p>
          </motion.div>

          <motion.div
            className="mt-8 p-8 bg-gray-800/30 border border-purple-500/30 rounded-lg backdrop-blur-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">The Artist-First Music Company</h2>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <p className="text-4xl font-bold text-purple-400">50/50</p>
                <p className="text-gray-300">Revenue Split</p>
              </div>
              <div className="p-4 bg-pink-500/10 rounded-lg border border-pink-500/20">
                <p className="text-4xl font-bold text-pink-400">11%</p>
                <p className="text-gray-300">Management Fee</p>
              </div>
              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <p className="text-4xl font-bold text-blue-400">100%</p>
                <p className="text-gray-300">Artist-Owned Masters</p>
              </div>
            </div>
          </motion.div>

          {/* The HLPFL Difference */}
          <motion.div
            className="mt-12 grid md:grid-cols-2 gap-6 text-left"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="p-6 bg-gray-800/30 border border-gray-700 rounded-lg">
              <Shield className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Transparent Accounting</h3>
              <p className="text-gray-400">Real-time dashboards showing every stream, every sale, every dollar. No quarterly black boxes.</p>
            </div>
            <div className="p-6 bg-gray-800/30 border border-gray-700 rounded-lg">
              <Heart className="w-8 h-8 text-pink-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">No 360 Deals</h3>
              <p className="text-gray-400">We don't take a cut of your touring, merch, or publishing unless you want our help with those services.</p>
            </div>
            <div className="p-6 bg-gray-800/30 border border-gray-700 rounded-lg">
              <Award className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Exit-Friendly Contracts</h3>
              <p className="text-gray-400">No career-long handcuffs. Clear, reasonable terms that respect your autonomy.</p>
            </div>
            <div className="p-6 bg-gray-800/30 border border-gray-700 rounded-lg">
              <BookOpen className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Education First</h3>
              <p className="text-gray-400">An educated artist is an empowered artist. We want you to understand everything about your career.</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Navigation */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`p-4 rounded-lg border transition-all ${
                  activeSection === section.id
                    ? 'bg-purple-500/20 border-purple-500'
                    : 'bg-gray-800/30 border-gray-700 hover:border-purple-500/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-2 ${activeSection === section.id ? 'text-purple-400' : 'text-gray-400'}`}>
                    {section.icon}
                  </div>
                  <span className={`text-sm ${activeSection === section.id ? 'text-white' : 'text-gray-400'}`}>
                    {section.title}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeSection === section.id ? 1 : 0,
                y: activeSection === section.id ? 0 : 20,
                display: activeSection === section.id ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
                <span className="mr-4 text-purple-400">{section.icon}</span>
                {section.title}
              </h2>

              {section.subsections.map((subsection) => (
                <div key={subsection.id} className="mb-12">
                  <h3 className="text-2xl font-bold text-purple-400 mb-6">{subsection.title}</h3>

                  <div className="grid gap-6">
                    {subsection.content.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="p-6 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-purple-500/50 transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        {item.details && (
                          <ul className="space-y-2">
                            {item.details.map((detail, detailIdx) => (
                              <li key={detailIdx} className="flex items-start text-gray-400">
                                <span className="text-purple-400 mr-2">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Engagement Models</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Full Management</h3>
              <p className="text-3xl font-bold text-white mb-4">11% Commission</p>
              <p className="text-gray-300 mb-4">Industry standard is 15-20%</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Day-to-day management</li>
                <li>• Strategic planning</li>
                <li>• Team coordination</li>
                <li>• Many services included at no additional cost</li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Distribution Only</h3>
              <p className="text-3xl font-bold text-white mb-4">50/50 Split</p>
              <p className="text-gray-300 mb-4">You keep half of everything</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Digital distribution to all platforms</li>
                <li>• Basic playlist pitching</li>
                <li>• Royalty collection and reporting</li>
                <li>• All other services available à la carte</li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">À La Carte Services</h3>
              <p className="text-gray-300 mb-4">All services available individually</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Project-based or hourly pricing</li>
                <li>• No long-term commitment required</li>
                <li>• Flexible service selection</li>
                <li>• Pay only for what you need</li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Consultation</h3>
              <p className="text-gray-300 mb-4">Expert guidance when you need it</p>
              <ul className="space-y-2 text-gray-400">
                <li>• One-time consultations</li>
                <li>• Ongoing advisory relationships</li>
                <li>• Project-specific guidance</li>
                <li>• Initial consultations often complimentary</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The HLPFL Commitment */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">The HLPFL Commitment</h2>
            <p className="text-xl text-gray-300 mb-6">
              HLPFL exists because we believe the music industry can be better. Better for artists. Better for fans.
              Better for everyone who believes music matters.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
              <div className="p-6 bg-gray-800/30 border border-gray-700 rounded-lg">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Transparency</h3>
                <p className="text-gray-400">
                  No hidden fees, no mysterious deductions, no black boxes. You'll always know exactly where your money goes.
                </p>
              </div>
              <div className="p-6 bg-gray-800/30 border border-gray-700 rounded-lg">
                <h3 className="text-xl font-bold text-pink-400 mb-3">Fairness</h3>
                <p className="text-gray-400">
                  Our 50/50 split, 11% management commission, and artist-owned masters are the foundation of how we believe the industry should work.
                </p>
              </div>
              <div className="p-6 bg-gray-800/30 border border-gray-700 rounded-lg">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Advocacy</h3>
                <p className="text-gray-400">
                  We fight for artists. Not because it's our brand positioning, but because it's the right thing to do.
                </p>
              </div>
              <div className="p-6 bg-gray-800/30 border border-gray-700 rounded-lg">
                <h3 className="text-xl font-bold text-green-400 mb-3">Flexibility</h3>
                <p className="text-gray-400">
                  Not every artist needs every service. Take what you need, leave what you don't. No bundled deals to lock you in.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg">
              <p className="text-2xl font-bold text-white mb-4">
                Your music matters. Your career matters. You matter.
              </p>
              <p className="text-xl text-gray-300">
                Let's build something great together.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
