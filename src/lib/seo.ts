import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export const generateSEO = ({
  title,
  description,
  keywords = [],
  image = '/images/og-image.jpg',
  url = 'https://hlpfl.org',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'HLPFL Inc',
}: SEOProps): Metadata => {
  const fullTitle = `${title} | HLPFL Inc`;
  const fullUrl = url.startsWith('http') ? url : `https://hlpfl.org${url}`;
  const fullImage = image.startsWith('http') ? image : `https://hlpfl.org${image}`;

  const coreKeywords = [
    'HLPFL',
    'HLPFL Inc',
    'nonprofit',
    '501c3 nonprofit',
    'creative entrepreneurs',
    'business development',
    'commission only',
    'zero upfront costs',
    'inventor support',
    'artist support',
    'musician support',
    'designer support',
    'writer support',
    'brand development',
    'sales representation',
    'marketing strategy',
    'entity formation',
    'contract negotiation',
    'creative business',
    'entrepreneur resources',
    'Wyoming nonprofit',
    'fair treatment creators',
    'creator protection',
    'creative advocacy',
    'aligned incentives',
    'we earn when you earn',
    'nonprofit for creatives',
    'business support for artists',
    'no exploitation',
    'creator rights',
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, ...coreKeywords],
    authors: [{ name: author }],
    creator: author,
    publisher: 'HLPFL Inc',

    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: 'HLPFL Inc',
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },

    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: '@hlpfl_',
      site: '@hlpfl_',
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    verification: {
      google: '',
    },
  };
};

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'NGO', 'NonprofitOrganization'],
    name: 'HLPFL Inc',
    url: 'https://hlpfl.org',
    logo: 'https://hlpfl.org/logo.svg',
    description: 'HLPFL Inc is a Wyoming 501(c)(3) nonprofit providing commission-only business development services for creative entrepreneurs—inventors, artists, musicians, designers, and writers. Zero upfront costs. We earn when you earn.',
    email: 'contact@hlpfl.org',
    telephone: '+1-616-313-5215',
    foundingDate: '2009',
    nonprofitStatus: '501(c)(3)',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Grand Rapids',
      addressRegion: 'MI',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.instagram.com/hlpfl_/',
      'https://x.com/hlpfl_',
      'https://linkedin.com/company/hlpfl',
    ],
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://hlpfl.org${item.url}`,
    })),
  };
};
