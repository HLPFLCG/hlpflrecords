import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'music.song' | 'music.album';
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
  author = 'HLPFL',
}: SEOProps): Metadata => {
  const fullTitle = `${title} | HLPFL Records`;
  const fullUrl = url.startsWith('http') ? url : `https://hlpfl.org${url}`;
  const fullImage = image.startsWith('http') ? image : `https://hlpfl.org${image}`;

  // Comprehensive SEO keywords targeting key search terms
  const coreKeywords = [
    'HLPFL',
    'HLPFL Records',
    'record label',
    'independent record label',
    'artist-first record label',
    'no contract record label',
    'fair record label',
    'ethical record label',
    'artist management',
    'music management',
    'artist protection',
    'how to not get screwed over as an artist',
    'artist rights',
    'fair music industry',
    'independent artist',
    'independent music',
    'DIY artist',
    'DIY music career',
    'artist toolkit',
    'music resources',
    'artist tools',
    'music career tools',
    'artist platform',
    'music platform',
    'artist empowerment',
    'musician resources',
    'artist independence',
    'music business',
    'music industry',
    'artist support',
    'grouped.com alternative',
    'better than grouped',
    'artist-owned platform',
    'ai music tools',
    'ai for artists',
    'ai music promotion',
    'ai artist tools',
    'music distribution',
    'artist distribution',
    'music promotion',
    'artist marketing',
    'social media for artists',
    'artist analytics',
    'streaming analytics',
    'music analytics',
    'artist portal',
    'artist dashboard',
    '100% artist ownership',
    'artist keeps rights',
    'no exploitation',
    'fair music contracts',
    'music career building',
    'artist development',
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, ...coreKeywords],
    authors: [{ name: author }],
    creator: author,
    publisher: 'HLPFL Records',
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: 'HLPFL Records',
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

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: '@HLPFL',
      site: '@HLPFL',
    },

    // Additional meta tags
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

    // Verification
    verification: {
      google: 'your-google-verification-code',
    },
  };
};

// Schema.org structured data
export const generateMusicGroupSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'HLPFL Records',
    url: 'https://hlpfl.org',
    logo: 'https://hlpfl.org/images/logo.png',
    description: 'Comprehensive resource platform for creative artists providing tools and resources to build successful music careers',
    foundingDate: '2024',
    genre: ['Hip Hop', 'R&B', 'Pop'],
    sameAs: [
      'https://instagram.com/hlpfl',
      'https://twitter.com/hlpfl',
      'https://facebook.com/hlpfl',
    ],
  };
};

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HLPFL Records',
    url: 'https://hlpfl.org',
    logo: 'https://hlpfl.org/images/logo.png',
    description: 'Comprehensive resource platform for creative artists providing tools and resources to build successful music careers',
    email: 'contact@hlpfl.org',
    telephone: '+1-616-313-5215',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Grand Rapids',
      addressRegion: 'MI',
      addressCountry: 'US',
    },
    sameAs: [
      'https://instagram.com/hlpfl',
      'https://twitter.com/hlpfl',
      'https://facebook.com/hlpfl',
    ],
  };
};

export const generateMusicRecordingSchema = (track: {
  name: string;
  artist: string;
  duration?: string;
  url: string;
  image?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicRecording',
    name: track.name,
    byArtist: {
      '@type': 'MusicGroup',
      name: track.artist,
    },
    duration: track.duration,
    url: track.url,
    ...(track.image && { image: track.image }),
    recordLabel: {
      '@type': 'Organization',
      name: 'HLPFL Records',
    },
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