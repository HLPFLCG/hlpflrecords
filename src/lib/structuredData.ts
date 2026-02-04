/**
 * Structured Data (JSON-LD) for SEO
 * Helps search engines understand the content and context of the website
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "NonprofitOrganization"],
  "name": "HLPFL Inc",
  "alternateName": "HLPFL",
  "url": "https://hlpfl.org",
  "logo": "https://hlpfl.org/logo.svg",
  "description": "HLPFL Inc is a Wyoming 501(c)(3) nonprofit organization that advocates for fair treatment, equitable compensation, and protection of rights for creative entrepreneurs—including inventors, artists, musicians, designers, and writers. We provide commission-only business development services with zero upfront costs.",
  "slogan": "Empowering Creative Entrepreneurs",
  "foundingDate": "2009",
  "founders": [
    {
      "@type": "Person",
      "name": "James Rockel III",
      "jobTitle": "Founder & CEO"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Grand Rapids",
    "addressRegion": "MI",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "General Inquiries",
    "email": "contact@hlpfl.org",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://twitter.com/hlpfl_",
    "https://instagram.com/hlpfl_",
    "https://linkedin.com/company/hlpfl"
  ],
  "nonprofitStatus": "Nonprofit501c3",
  "knowsAbout": [
    "Creative Entrepreneurship",
    "Business Development",
    "Inventor Support",
    "Artist Management",
    "Brand Development",
    "Sales Representation",
    "Contract Negotiation"
  ]
}

export const creativeGroupSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HLPFL Creative Entrepreneurs",
  "description": "Community of inventors, artists, musicians, designers, and writers supported by HLPFL Inc through commission-only business development services",
  "knowsAbout": ["Invention", "Music", "Visual Arts", "Design", "Writing", "Product Development", "Entrepreneurship"],
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
  "description": "Official website of HLPFL Inc - A Wyoming 501(c)(3) nonprofit providing commission-only business development services for creative entrepreneurs. Zero upfront costs. We earn when you earn.",
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
  "serviceType": "Nonprofit Business Development Services for Creative Entrepreneurs",
  "provider": {
    "@type": "Organization",
    "name": "HLPFL Inc"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Commission-Only Business Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Development & Identity",
          "description": "Build a compelling brand that resonates with your audience. Includes brand strategy, visual identity, messaging guidelines, and market differentiation."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Entity Formation",
          "description": "Get your business properly structured with LLC/Corporation setup guidance, business registration support, EIN assistance, and compliance guidance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sales Representation",
          "description": "Commission-only sales support including direct outreach, client relationship management, deal negotiation, and revenue optimization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Marketing Strategy & Execution",
          "description": "Strategic marketing including go-to-market strategy, content marketing, social media management, email campaigns, and PR outreach."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Creation & Social Media",
          "description": "Professional content services including social media strategy, content calendar planning, visual content creation, and community management."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Contract Negotiation Support",
          "description": "Protect yourself with contract review guidance, rights protection education, negotiation strategy, and fair terms advocacy."
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
      "name": "What is HLPFL Inc?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HLPFL Inc is a Wyoming 501(c)(3) nonprofit organization that provides commission-only business development services to creative entrepreneurs—including inventors, artists, musicians, designers, and writers. We advocate for fair treatment, equitable compensation, and protection of rights for creators."
      }
    },
    {
      "@type": "Question",
      "name": "How does HLPFL's commission-only model work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We charge zero upfront costs. We invest our time and resources in you first, providing business development services like sales representation, marketing, and brand development. We only earn when we facilitate a sale for you—typically 15-30% commission depending on services provided. Our incentives are aligned with yours."
      }
    },
    {
      "@type": "Question",
      "name": "Who can use HLPFL's services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HLPFL serves creative entrepreneurs across all disciplines who have viable products or services but need business support. This includes inventors with patents, musicians, visual artists, industrial/fashion/UX designers, writers and authors, and other creative professionals."
      }
    },
    {
      "@type": "Question",
      "name": "What services does HLPFL provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HLPFL provides comprehensive business development services including: brand development and identity, business entity formation, sales representation, marketing strategy and execution, content creation and social media management, and contract negotiation support. All services are provided on a commission-only basis with no upfront costs."
      }
    },
    {
      "@type": "Question",
      "name": "How do I partner with HLPFL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can apply to partner with HLPFL through our contact form. Include information about your product, service, or creative work, along with your goals. We review all applications and look for creative entrepreneurs with viable offerings who would benefit from our business development support."
      }
    },
    {
      "@type": "Question",
      "name": "Why is HLPFL a nonprofit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HLPFL is structured as a 501(c)(3) nonprofit because our mission is advocacy and protection for creative entrepreneurs, not profit extraction. The nonprofit structure ensures our focus remains on helping creators succeed rather than maximizing returns for shareholders. It also enables us to receive grants and donations to expand our capacity to serve more creators."
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
