import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HLPFL Inc - Empowering Creative Entrepreneurs',
    short_name: 'HLPFL',
    description: 'Wyoming 501(c)(3) nonprofit providing commission-only business development services for creative entrepreneurs. Zero upfront costs. We earn when you earn.',
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
    categories: ['nonprofit', 'business', 'education'],
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-US',
  }
}
