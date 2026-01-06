/**
 * Structured Data (JSON-LD) for SEO
 * Helps search engines understand the content and context of the website
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MusicGroup", "Corporation"],
  "name": "HLPFL Records",
  "alternateName": "HLPFL",
  "url": "https://hlpfl.org",
  "logo": "https://hlpfl.org/logo.svg",
  "description": "HLPFL Records is an independent record label and artist management platform that protects artists from exploitation. We teach artists how to not get screwed over in the music industry. 100% artist ownership, no contracts, AI-powered tools for independent musicians. Better alternative to grouped.com. Fair, transparent artist management and distribution services.",
  "slogan": "Tools, Not Contracts",
  "foundingDate": "2024",
  "founders": [
    {
      "@type": "Person",
      "name": "James Rockel",
      "jobTitle": "Founder & CEO"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Music Row",
    "addressLocality": "Grand Rapids",
    "addressRegion": "MI",
    "postalCode": "37203",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-616-313-5215",
    "contactType": "Customer Service",
    "email": "contact@hlpfl.org",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://twitter.com/hlpflrecords",
    "https://instagram.com/hlpflrecords",
    "https://facebook.com/hlpflrecords",
    "https://youtube.com/hlpflrecords"
  ]
}

export const musicGroupSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "HLPFL Artists",
  "description": "Collective of talented artists signed to HLPFL",
  "genre": ["Hip Hop", "R&B", "Pop", "Electronic"],
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Grand Rapids",
      "addressRegion": "MI",
      "addressCountry": "US"
    }
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "HLPFL Records",
  "url": "https://hlpfl.org",
  "description": "Official website of HLPFL Records - Independent record label and artist management platform that protects artists. Learn how to not get screwed over as an artist. AI-powered tools, 100% artist ownership, better alternative to grouped.com.",
  "publisher": {
    "@type": "Organization",
    "name": "HLPFL"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://hlpfl.org/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Record Label, Artist Management & Independent Music Platform",
  "provider": {
    "@type": "Organization",
    "name": "HLPFL Records"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Artist Protection & Management Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Independent Artist Management",
          "description": "Fair, transparent artist management with 100% artist ownership. Learn how to not get screwed over as an artist. No exploitative contracts."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI-Powered Music Tools",
          "description": "AI tools for music promotion, social media management, analytics, and career building for independent artists"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Music Distribution",
          "description": "Independent music distribution across all major platforms with artist-first revenue sharing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Artist Protection & Rights",
          "description": "Educational resources and tools to protect artists from music industry exploitation and unfair contracts"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Management",
          "description": "AI-powered social media scheduling and management tools for musicians"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Streaming Analytics",
          "description": "Comprehensive analytics for Spotify, Apple Music, and other streaming platforms"
        }
      }
    ]
  }
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I not get screwed over as an artist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HLPFL Records protects artists by ensuring 100% ownership of your work, no exploitative contracts, transparent fair-share revenue, comprehensive educational resources about artist rights, and AI-powered tools to build your career independently. We provide tools and resources, not traps."
      }
    },
    {
      "@type": "Question",
      "name": "What makes HLPFL different from other record labels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HLPFL is an artist-first independent record label. We offer tools, not contracts. Artists maintain 100% ownership of their work, rights, and masters. No exploitation, no hidden fees, complete transparency. We focus on artist empowerment and protection."
      }
    },
    {
      "@type": "Question",
      "name": "Is HLPFL better than grouped.com?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HLPFL offers comprehensive artist management, AI-powered tools, analytics, distribution, and protection services specifically designed for independent artists. We focus on artist empowerment, 100% ownership, and teaching artists how to avoid exploitation in the music industry."
      }
    },
    {
      "@type": "Question",
      "name": "What AI music tools does HLPFL provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HLPFL provides AI-powered tools for social media management, music promotion, streaming analytics, email marketing, content scheduling, and career building. All tools are designed to empower independent artists while maintaining 100% ownership of their work."
      }
    },
    {
      "@type": "Question",
      "name": "How can I submit my music to HLPFL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can submit your music through our contact form or artist portal. Include links to your work and a brief bio. We review all submissions with respect for artist rights and respond within 1-2 weeks. We never require exploitative contracts."
      }
    }
  ]
}

/**
 * Helper function to generate JSON-LD script tag
 */
export function generateStructuredData(schema: object): string {
  return JSON.stringify(schema)
}