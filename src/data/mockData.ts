import { Artist, Release, NewsPost, TeamMember } from '@/types'

// ========================================
// ARTISTS DATA
// ========================================
export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'PRIV',
    slug: 'priv',
    bio: 'PRIV is an emerging artist bringing a fresh perspective to the HLPFL roster. With a unique sound that blends innovation and authenticity, PRIV represents the next generation of independent music. As part of the HLPFL family, PRIV maintains complete creative control and ownership while accessing the tools and support needed to build a sustainable music career.\n\n"I\'ve been making music my whole life, but I\'ve never felt truly free until now. HLPFL gets it. They understand that the best art comes from artists who aren\'t afraid to experiment, fail, and try again. No pressure to fit a mold—just pure creation." - PRIV\n\nStay tuned for upcoming releases and performances from this exciting new talent.',
    genre: ['Alternative', 'Indie', 'Experimental'],
    image: '/images/artists/priv.svg',
    socials: {
      spotify: 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
      instagram: 'https://instagram.com/priv',
      twitter: 'https://twitter.com/priv',
    },
  },
]


// ========================================
// PRIV RELEASES
// ========================================
export const mockReleases: Release[] = [
  {
    id: 'priv-1',
    title: 'Emerging Sounds',
    artist: 'PRIV',
    artistId: '1',
    type: 'single' as const,
    releaseDate: new Date('2024-06-15'),
    coverArt: '/images/artists/priv.svg',
    description: 'An experimental indie track showcasing PRIV\'s unique sound and artistic vision. This debut single represents the beginning of an exciting journey in independent music.',
    links: {
      spotify: 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
    },
    tracks: [
      { id: '1', title: 'Emerging Sounds', duration: '3:24' },
    ],
  },
  {
    id: 'priv-2',
    title: 'Midnight Frequencies',
    artist: 'PRIV',
    artistId: '1',
    type: 'single' as const,
    releaseDate: new Date('2025-08-01'),
    coverArt: '/images/artists/priv.svg',
    description: 'A late-night atmospheric track blending ambient textures with indie sensibilities.',
    links: {
      spotify: 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
    },
    tracks: [
      { id: '1', title: 'Midnight Frequencies', duration: '4:12' },
    ],
  },
  {
    id: 'priv-3',
    title: 'New Horizons EP',
    artist: 'PRIV',
    artistId: '1',
    type: 'ep' as const,
    releaseDate: new Date('2025-11-15'),
    coverArt: '/images/artists/priv.svg',
    description: 'A 5-track EP exploring new sonic territories and pushing creative boundaries.',
    links: {
      spotify: 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
    },
    tracks: [
      { id: '1', title: 'Awakening', duration: '3:45' },
      { id: '2', title: 'Neon Dreams', duration: '4:02' },
      { id: '3', title: 'Static', duration: '3:18' },
      { id: '4', title: 'Echoes', duration: '3:56' },
      { id: '5', title: 'Resolution', duration: '4:30' },
    ],
  },
].sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime())

export const mockNews: NewsPost[] = [
  {
    id: '3',
    title: 'PRIV Announces "New Horizons EP" - A Bold Step Forward in 2026',
    slug: 'priv-new-horizons-ep-announcement',
    excerpt: 'Following the success of singles "Emerging Sounds" and "Midnight Frequencies," HLPFL Records artist PRIV announces their debut EP, set to drop in early 2026.',
    content: `
# PRIV Announces "New Horizons EP" - A Bold Step Forward in 2026

**January 10, 2026** - HLPFL Records is excited to announce that PRIV will release their highly anticipated debut EP, "New Horizons," on February 15, 2026. The 5-track project represents a significant evolution in PRIV's artistic journey.

## The EP

"New Horizons" features five tracks that showcase PRIV's growth as an artist:

1. **Awakening** - An atmospheric opener that sets the tone
2. **Neon Dreams** - A synth-driven exploration of urban isolation
3. **Static** - Raw and experimental, pushing sonic boundaries
4. **Echoes** - An introspective piece about memory and connection
5. **Resolution** - A triumphant closer that brings the journey full circle

"This EP represents everything I've been working toward," PRIV shares. "Each track tells part of a larger story about finding yourself in a world that's constantly changing. The HLPFL team gave me complete freedom to make exactly what I envisioned."

## Building Momentum

Since joining HLPFL Records, PRIV has been steadily building a dedicated fanbase:

- **Emerging Sounds** introduced listeners to PRIV's unique sound
- **Midnight Frequencies** expanded their sonic palette
- The upcoming EP promises to be their most ambitious work yet

"PRIV has shown incredible artistic growth," says James Rockel, HLPFL Founder & CEO. "This EP is a testament to what's possible when artists have true creative freedom."

## Pre-Save & Merch

"New Horizons EP" will be available on all streaming platforms. Exclusive vinyl pressings and limited edition merchandise are now available at hlpflrecords.com/merch.

Stream PRIV on [Spotify](https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt)

---

*About HLPFL Records: An independent record label committed to artist ownership and creative freedom. Founded on "Tools, Not Contracts."*
    `,
    publishedAt: new Date('2026-01-10'),
    author: 'HLPFL Press Team',
    category: 'Releases',
    image: '/images/artists/priv.svg',
  },
  {
    id: '1',
    title: 'PRIV Releases Debut Single "Emerging Sounds" - A New Voice in Independent Music',
    slug: 'priv-emerging-sounds',
    excerpt: 'HLPFL Records artist PRIV makes their debut with "Emerging Sounds", an experimental indie track that showcases their unique artistic vision and marks the beginning of an exciting journey.',
    content: `
# PRIV Releases Debut Single "Emerging Sounds" - A New Voice in Independent Music

**June 15, 2024** - HLPFL Records is proud to announce the release of "Emerging Sounds," the debut single from PRIV, one of the most exciting new voices in independent music.

## The Single

"Emerging Sounds" represents everything PRIV stands for: authenticity, experimentation, and creative freedom. The track blends alternative, indie, and experimental elements into a cohesive sonic experience that defies easy categorization.

"This song is about finding your voice," PRIV explains. "It's about those moments when you're on the verge of something new, something undefined. The sound is emerging—like me."

## The HLPFL Partnership

PRIV joins HLPFL Records under the label's revolutionary partnership model:

- **100% Artist Ownership** - PRIV maintains complete ownership of all masters and rights
- **Full Creative Control** - No A&R interference or forced collaboration
- **Comprehensive Support** - Access to distribution, marketing, analytics, and career development tools
- **Fair Revenue Split** - Transparent 50/50 partnership on label services

"PRIV embodies everything we believe in at HLPFL," says James Rockel, Founder & CEO. "Complete creative freedom, no compromises, and a commitment to authenticity."

## What's Next

With "Emerging Sounds" marking the beginning of their journey, PRIV is already working on new material in the studio.

"I've been making music my whole life, but I've never felt truly free until now," PRIV shares. "HLPFL gets it. They understand that the best art comes from artists who aren't afraid to experiment, fail, and try again."

## Stream Now

"Emerging Sounds" is available on all streaming platforms.

---

*About HLPFL Records: An independent record label and artist management platform that protects artists from exploitation. Founded on the principle of "Tools, Not Contracts," HLPFL provides comprehensive support while ensuring artists maintain 100% ownership of their work.*
    `,
    publishedAt: new Date('2024-06-15'),
    author: 'HLPFL Press Team',
    category: 'Releases',
    image: '/images/artists/priv.svg',
  },
  {
    id: '2',
    title: 'HLPFL Records Welcomes PRIV to the Roster - The Future of Alternative Music',
    slug: 'priv-joins-hlpfl',
    excerpt: 'Independent label HLPFL Records announces the addition of innovative artist PRIV, bringing a fresh experimental sound to the artist-first platform.',
    content: `
# HLPFL Records Welcomes PRIV to the Roster - The Future of Alternative Music

**January 8, 2024** - HLPFL Records is thrilled to announce the newest addition to our artist-first roster: **PRIV**, an emerging talent pushing the boundaries of alternative and experimental music.

## A New Voice in Independent Music

PRIV represents the next generation of artists who refuse to be confined by genre labels or industry conventions. With a sound that seamlessly blends alternative, indie, and experimental elements, PRIV is carving out a unique space in the modern music landscape.

"PRIV embodies everything HLPFL stands for," says James Rockel, Founder & CEO of HLPFL Records. "Complete creative freedom, no compromises, and a commitment to authenticity. We're not here to mold artists into what we think will sell—we're here to amplify their true vision."

## The HLPFL Difference

Unlike traditional record deals that strip artists of ownership and creative control, PRIV joins HLPFL under the label's revolutionary partnership model:

- **100% Artist Ownership** - PRIV maintains complete ownership of all masters and rights
- **Full Creative Control** - No A&R interference or forced collaboration
- **Comprehensive Support** - Access to distribution, marketing, analytics, and career development tools
- **Fair Revenue Split** - Transparent 50/50 partnership on label services
- **No Traps, Just Tools** - Everything an independent artist needs to succeed

## A Platform Built for Artists

Beyond traditional label services, HLPFL provides artists with cutting-edge tools:

- **Artist Portal** - Comprehensive dashboard for managing releases, analytics, and fan engagement
- **Social Media Automation** - AI-powered tools for content creation and scheduling
- **Email Marketing Suite** - Direct connection with fans without platform dependence
- **Collaboration Hub** - Connect with other artists, producers, and creatives
- **B-Roll & Content Library** - Professional visual assets for promotion
- **Crowdfunding Support** - Tools to fund projects directly from fans

## The Mission Continues

HLPFL was founded on a simple premise: **teach artists how to not get screwed over.** Every feature, every partnership, every decision is made with the artist's long-term success and independence in mind.

"The music industry has exploited artists for too long," Rockel continues. "We're building a different model—one where artists actually thrive, maintain control, and build sustainable careers. PRIV is the perfect example of what's possible when you put artists first."

## Stay Tuned

Follow PRIV's journey as they prepare to release new music and connect with fans worldwide.

**Follow HLPFL Records:**
- Website: [hlpfl.org](https://hlpfl.org)
- Instagram: [@hlpfl](https://instagram.com/hlpfl)
- Twitter: [@hlpfl](https://twitter.com/hlpfl)

---

*About HLPFL Records: An independent record label and artist management platform founded by James Rockel at age 18. HLPFL's mission is to protect artists from industry exploitation through transparent partnerships, comprehensive tools, and unwavering commitment to artist ownership. "Tools, Not Contracts."*
    `,
    publishedAt: new Date('2024-01-08'),
    author: 'HLPFL Press Team',
    category: 'News',
    image: '/images/artists/priv.svg',
  },
]

export const mockTeam: TeamMember[] = [
  {
    id: '1',
    name: 'James Rockel',
    role: 'Founder & CEO',
    bio: 'Founded HLPFL at 18 years old with a revolutionary vision for artist partnerships. James has transformed how independent musicians build sustainable careers through the groundbreaking 50/50 model. When not changing the music industry, he\'s discovering emerging talent at local shows.',
    image: '/images/team/james-rockel.webp',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jamesrockel',
      email: 'founder@hlpfl.org',
    },
  },
]

// ========================================
// PARTNERS DATA
// ========================================
export interface Partner {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo?: string;
  website?: string;
  category: 'technology' | 'manufacturing' | 'distribution' | 'services';
  featured: boolean;
}

export const mockPartners: Partner[] = [
  {
    id: '1',
    name: 'Limitless Manufacturing Group',
    slug: 'limitless-manufacturing-group',
    description: 'Limitless Manufacturing Group is our premier partner for merchandise manufacturing and fulfillment. They provide artists with high-quality, sustainable merchandise production including apparel, accessories, and custom products. Their on-demand manufacturing model eliminates inventory risk, allowing artists to offer professional merch without upfront costs.',
    website: 'https://limitlessmanufacturinggroup.com',
    category: 'manufacturing',
    featured: true,
  },
  {
    id: '2',
    name: 'Grouped, Inc',
    slug: 'grouped-inc',
    description: 'Grouped is the ultimate artist platform for independent musicians. As our strategic technology partner, Grouped provides artists with comprehensive tools for fan engagement, content distribution, and revenue generation. Their platform empowers artists to build direct relationships with fans while maintaining complete ownership and control.',
    website: 'https://grouped.com',
    category: 'technology',
    featured: true,
  },
]
