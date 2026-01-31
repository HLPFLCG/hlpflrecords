/**
 * Structured Data (JSON-LD) for SEO
 * Helps search engines understand the content and context of the website
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "NonprofitOrganization", "Corporation"],
  "name": "HLPFL Inc",
  "alternateName": "HLPFL",
  "url": "https://hlpfl.org",
  "logo": "https://hlpfl.org/logo.svg",
  "description": "HLPFL Inc is a nonprofit empowering creatives and entrepreneurs with tools and resources to succeed on their own terms. We protect creators from exploitation with 100% ownership, no contracts, and professional-grade tools. Fair, transparent creator support and distribution services.",
  "slogan": "Tools, Not Contracts",
  "foundingDate": "2009",
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

export const creativeGroupSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HLPFL Creatives",
  "description": "Community of talented creatives and entrepreneurs supported by HLPFL",
  "knowsAbout": ["Music", "Visual Arts", "Design", "Writing", "Entrepreneurship"],
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
  "name": "HLPFL Inc",
  "url": "https://hlpfl.org",
  "description": "Official website of HLPFL Inc - A nonprofit empowering creatives and entrepreneurs with tools and resources to succeed on their own terms. 100% ownership, no contracts, professional-grade tools.",
  "publisher": {
    "@type": "Organization",
    "name": "HLPFL Inc"
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
  "serviceType": "Nonprofit Creative Support & Entrepreneur Resources Platform",
  "provider": {
    "@type": "Organization",
    "name": "HLPFL Inc"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Creator Protection & Support Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Independent Creator Support",
          "description": "Fair, transparent creator support with 100% ownership. No exploitative contracts, no gatekeepers."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Professional Creative Tools",
          "description": "Tools for promotion, social media management, analytics, and career building for independent creatives"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Distribution",
          "description": "Independent content distribution across all major platforms with creator-first approach"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Creator Protection & Rights",
          "description": "Educational resources and tools to protect creatives from exploitation and unfair contracts"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Management",
          "description": "Professional social media scheduling and management tools for creatives and entrepreneurs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Analytics & Insights",
          "description": "Comprehensive analytics for all major platforms and audience insights"
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
      "name": "How do I not get screwed over as a creative?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HLPFL Inc protects creatives by ensuring 100% ownership of your work, no exploitative contracts, transparent resources, comprehensive educational materials about creator rights, and professional tools to build your career independently. We provide tools and resources, not traps."
      }
    },
    {
      "@type": "Question",
      "name": "What makes HLPFL different from other platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HLPFL is a creator-first nonprofit. We offer tools, not contracts. Creators maintain 100% ownership of their work and rights. No exploitation, no hidden fees, complete transparency. We focus on creative empowerment and protection."
      }
    },
    {
      "@type": "Question",
      "name": "Who can use HLPFL's services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HLPFL serves all types of creatives and entrepreneurs - musicians, visual artists, designers, writers, content creators, filmmakers, and anyone building a creative career. Our tools are designed for independent creators who want to succeed on their own terms."
      }
    },
    {
      "@type": "Question",
      "name": "What tools does HLPFL provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HLPFL provides professional tools for social media management, content distribution, analytics, form building, link in bio pages, and career development. All tools are designed to empower independent creatives while maintaining 100% ownership of their work."
      }
    },
    {
      "@type": "Question",
      "name": "How can I submit my work to HLPFL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can submit your work through our contact form or creator portal. Include links to your portfolio and a brief bio. We review all submissions with respect for creator rights and respond within 1-2 weeks. We never require exploitative contracts."
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