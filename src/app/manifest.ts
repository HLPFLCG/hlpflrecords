import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HLFPL - Tools, Not Contracts',
    short_name: 'HLPFL',
    description: 'Comprehensive resource platform for creative artists providing tools and resources to build successful music careers on your own terms.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#c87941',
    icons: [
      {
        src: '/images/favicon/hlpflsymbolpnggradient.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/favicon/hlpflsymbolpnggradient.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['music', 'entertainment', 'business'],
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-US',
  }
}
