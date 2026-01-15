import { Artist, Release, NewsPost, TeamMember } from '@/types'

// ========================================
// ARTISTS DATA
// ========================================
export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'PRIV',
    slug: 'priv',
    bio: 'PRIV is an alternative music artist and producer from Grand Rapids, Michigan. With a sound that blends emotional depth, atmospheric textures, and raw self-expression, PRIV has been steadily building a dedicated fanbase since 2023. Their music explores themes of introspection, personal growth, and authentic emotion—prioritizing artistic vision over commercial trends.\n\nAs part of the HLPFL family, PRIV maintains complete creative control and ownership while accessing the tools and support needed to build a sustainable independent music career. With 10 singles released across Spotify, Apple Music, and SoundCloud, plus collaborations with artists like Jay Kim, Lavv, and Sawyer, PRIV represents the new wave of independent artists leveraging digital platforms for genuine artistic expression.\n\n"The best art comes from artists who aren\'t afraid to experiment, fail, and try again. No pressure to fit a mold—just pure creation." - PRIV',
    genre: ['Alternative', 'Indie', 'Experimental'],
    image: '/images/artists/priv.svg',
    socials: {
      spotify: 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
      apple: 'https://music.apple.com/ca/artist/priv/1617089388',
      soundcloud: 'https://soundcloud.com/whereispriv',
      instagram: 'https://instagram.com/whereispriv',
      twitter: 'https://twitter.com/whereispriv',
    },
  },
]


// ========================================
// PRIV RELEASES (Actual Discography)
// ========================================
export const mockReleases: Release[] = [
  // 2025 Releases
  {
    id: 'priv-living-a-lie',
    title: 'living a lie',
    artist: 'PRIV',
    artistId: '1',
    type: 'single' as const,
    releaseDate: new Date('2025-07-10'),
    coverArt: '/images/artists/priv.svg',
    description: 'An introspective track exploring themes of self-deception and authenticity, showcasing PRIV\'s continued artistic evolution.',
    links: {
      soundcloud: 'https://soundcloud.com/whereispriv',
    },
    tracks: [
      { id: '1', title: 'living a lie', duration: '3:28' },
    ],
  },
  // 2024 Releases
  {
    id: 'priv-reverence',
    title: 'reverence',
    artist: 'PRIV',
    artistId: '1',
    type: 'single' as const,
    releaseDate: new Date('2024-10-01'),
    coverArt: '/images/artists/priv.svg',
    description: 'An atmospheric piece suggesting ambient and spiritual qualities, exploring themes of respect and devotion.',
    links: {
      soundcloud: 'https://soundcloud.com/whereispriv',
    },
    tracks: [
      { id: '1', title: 'reverence', duration: '3:45' },
    ],
  },
  {
    id: 'priv-victim',
    title: 'victim',
    artist: 'PRIV',
    artistId: '1',
    type: 'single' as const,
    releaseDate: new Date('2024-08-15'),
    coverArt: '/images/artists/priv.svg',
    description: 'A raw and emotionally charged single dealing with themes of vulnerability and personal struggle.',
    links: {
      spotify: 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
      apple: 'https://music.apple.com/ca/artist/priv/1617089388',
    },
    tracks: [
      { id: '1', title: 'victim', duration: '3:32' },
    ],
  },
  {
    id: 'priv-throw-away',
    title: 'Throw Away',
    artist: 'PRIV',
    artistId: '1',
    type: 'single' as const,
    releaseDate: new Date('2024-06-20'),
    coverArt: '/images/artists/priv.svg',
    description: 'A candid exploration of letting go and moving forward, blending alternative production with honest lyricism.',
    links: {
      spotify: 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
      apple: 'https://music.apple.com/ca/artist/priv/1617089388',
    },
    tracks: [
      { id: '1', title: 'Throw Away', duration: '3:18' },
    ],
  },
  {
    id: 'priv-jaundice',
    title: 'Jaundice',
    artist: 'PRIV',
    artistId: '1',
    type: 'single' as const,
    releaseDate: new Date('2024-05-10'),
    coverArt: '/images/artists/priv.svg',
    description: 'An experimental track that further developed PRIV\'s sonic palette with unique textures and emotional depth.',
    links: {
      spotify: 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
      apple: 'https://music.apple.com/ca/artist/priv/1617089388',
    },
    tracks: [
      { id: '1', title: 'Jaundice', duration: '3:54' },
    ],
  },
  {
    id: 'priv-shitfaceded-feature',
    title: 'SHITFACEDED (feat. PRIV)',
    artist: 'Sawyer',
    artistId: '1',
    type: 'single' as const,
    releaseDate: new Date('2024-04-15'),
    coverArt: '/images/artists/priv.svg',
    description: 'A collaborative track with Sawyer, showcasing PRIV\'s versatility as a featured artist.',
    links: {
      spotify: 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
    },
    tracks: [
      { id: '1', title: 'SHITFACEDED (feat. PRIV)', duration: '3:12' },
    ],
  },
  {
    id: 'priv-solace',
    title: 'solace',
    artist: 'PRIV',
    artistId: '1',
    type: 'single' as const,
    releaseDate: new Date('2024-03-01'),
    coverArt: '/images/artists/priv.svg',
    description: 'An introspective piece exploring themes of comfort and peace, featuring ambient and atmospheric qualities.',
    links: {
      soundcloud: 'https://soundcloud.com/whereispriv',
    },
    tracks: [
      { id: '1', title: 'solace', duration: '4:02' },
    ],
  },
  {
    id: 'priv-bones',
    title: 'Bones',
    artist: 'PRIV',
    artistId: '1',
    type: 'single' as const,
    releaseDate: new Date('2024-01-15'),
    coverArt: '/images/artists/priv.svg',
    description: 'A powerful start to 2024, demonstrating continued creative output with raw emotional expression.',
    links: {
      spotify: 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
      apple: 'https://music.apple.com/ca/artist/priv/1617089388',
    },
    tracks: [
      { id: '1', title: 'Bones', duration: '3:40' },
    ],
  },
  // 2023 Releases
  {
    id: 'priv-numb',
    title: 'Numb',
    artist: 'PRIV',
    artistId: '1',
    type: 'single' as const,
    releaseDate: new Date('2023-09-10'),
    coverArt: '/images/artists/priv.svg',
    description: 'An emotionally charged single exploring themes of detachment and emotional numbness.',
    links: {
      spotify: 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
      apple: 'https://music.apple.com/ca/artist/priv/1617089388',
    },
    tracks: [
      { id: '1', title: 'Numb', duration: '3:22' },
    ],
  },
  {
    id: 'priv-libra',
    title: 'Libra',
    artist: 'PRIV',
    artistId: '1',
    type: 'single' as const,
    releaseDate: new Date('2023-06-20'),
    coverArt: '/images/artists/priv.svg',
    description: 'A showcase of PRIV\'s individual artistic vision, blending alternative elements with introspective themes.',
    links: {
      spotify: 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
      apple: 'https://music.apple.com/ca/artist/priv/1617089388',
    },
    tracks: [
      { id: '1', title: 'Libra', duration: '3:36' },
    ],
  },
  {
    id: 'priv-bloom-feature',
    title: 'Bloom (feat. Priv)',
    artist: 'Lavv',
    artistId: '1',
    type: 'single' as const,
    releaseDate: new Date('2023-05-01'),
    coverArt: '/images/artists/priv.svg',
    description: 'A collaboration with Lavv that showcased PRIV\'s versatility and networking within the alternative music community.',
    links: {
      spotify: 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
    },
    tracks: [
      { id: '1', title: 'Bloom (feat. Priv)', duration: '3:48' },
    ],
  },
  {
    id: 'priv-growing-up',
    title: 'Growing Up (feat. Jay Kim)',
    artist: 'PRIV',
    artistId: '1',
    type: 'single' as const,
    releaseDate: new Date('2023-03-15'),
    coverArt: '/images/artists/priv.svg',
    description: 'PRIV\'s debut collaboration with Jay Kim, introducing their unique sound to audiences and establishing early networking within the alternative music community.',
    links: {
      spotify: 'https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt',
      apple: 'https://music.apple.com/ca/artist/priv/1617089388',
    },
    tracks: [
      { id: '1', title: 'Growing Up (feat. Jay Kim)', duration: '3:56' },
    ],
  },
].sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime())

export const mockNews: NewsPost[] = [
  {
    id: '3',
    title: 'PRIV Releases "living a lie" - A Raw Exploration of Authenticity',
    slug: 'priv-living-a-lie-release',
    excerpt: 'Grand Rapids alternative artist PRIV returns with "living a lie," an introspective new single exploring themes of self-deception and personal truth.',
    content: `
# PRIV Releases "living a lie" - A Raw Exploration of Authenticity

**July 10, 2025** - HLPFL Records artist PRIV continues their artistic evolution with the release of "living a lie," an introspective single that delves deep into themes of self-deception and the search for authenticity.

## The Single

"living a lie" represents PRIV's most emotionally vulnerable work to date. The track combines atmospheric production with candid lyricism, creating a sonic experience that resonates with anyone who has struggled with being true to themselves.

"This song came from a place of real self-reflection," PRIV shares. "It's about those moments when you realize the stories you've been telling yourself aren't serving you anymore."

## Continued Growth

Since emerging in 2023 with "Growing Up (feat. Jay Kim)," PRIV has released 10 singles, each one pushing their artistic boundaries further:

- **2023**: Growing Up, Libra, Numb
- **2024**: Bones, solace, Jaundice, Throw Away, victim, reverence
- **2025**: living a lie

"PRIV's growth has been incredible to witness," says James Rockel, HLPFL Founder & CEO. "Each release shows new depth and artistic maturity while staying true to their authentic voice."

## Stream Now

"living a lie" is available on [SoundCloud](https://soundcloud.com/whereispriv) and all major streaming platforms.

Follow PRIV: [@whereispriv](https://instagram.com/whereispriv)

---

*About HLPFL Records: An independent record label committed to artist ownership and creative freedom. Founded on "Tools, Not Contracts."*
    `,
    publishedAt: new Date('2025-07-10'),
    author: 'HLPFL Press Team',
    category: 'Releases',
    image: '/images/artists/priv.svg',
  },
  {
    id: '1',
    title: 'PRIV Releases "victim" - A Powerful Statement on Vulnerability',
    slug: 'priv-victim-release',
    excerpt: 'Alternative artist PRIV drops "victim," a raw and emotionally charged single dealing with themes of vulnerability and personal struggle.',
    content: `
# PRIV Releases "victim" - A Powerful Statement on Vulnerability

**August 15, 2024** - HLPFL Records is proud to announce the release of "victim," the latest single from Grand Rapids alternative artist PRIV.

## The Single

"victim" is a raw, emotionally charged track that explores themes of vulnerability and personal struggle. With its honest approach to difficult emotions, the single showcases PRIV's commitment to authentic self-expression.

"This song is about owning your experiences," PRIV explains. "It's not about playing the victim—it's about acknowledging what you've been through and finding strength in that honesty."

## A Prolific Year

"victim" marks PRIV's sixth release of 2024, following:

- **Bones** (January) - A powerful start to the year
- **solace** (March) - An introspective SoundCloud release
- **Jaundice** (May) - Expanding sonic boundaries
- **Throw Away** (June) - Candid exploration of letting go
- **SHITFACEDED** (April) - Collaboration with Sawyer

## The HLPFL Partnership

Under HLPFL Records' revolutionary partnership model, PRIV maintains complete ownership of all masters and creative control over their artistic direction.

## Stream Now

"victim" is available on [Spotify](https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt), [Apple Music](https://music.apple.com/ca/artist/priv/1617089388), and all streaming platforms.

---

*About HLPFL Records: An independent record label and artist management platform that protects artists from exploitation. Founded on the principle of "Tools, Not Contracts."*
    `,
    publishedAt: new Date('2024-08-15'),
    author: 'HLPFL Press Team',
    category: 'Releases',
    image: '/images/artists/priv.svg',
  },
  {
    id: '2',
    title: 'HLPFL Records Welcomes PRIV - Alternative Artist from Grand Rapids',
    slug: 'priv-joins-hlpfl',
    excerpt: 'Independent label HLPFL Records announces partnership with Grand Rapids alternative artist PRIV, known for emotionally authentic music.',
    content: `
# HLPFL Records Welcomes PRIV - Alternative Artist from Grand Rapids

**January 2023** - HLPFL Records is thrilled to announce our partnership with **PRIV**, an alternative music artist and producer from Grand Rapids, Michigan.

## About PRIV

PRIV emerged onto the alternative music scene with a sound that blends emotional depth, atmospheric textures, and raw self-expression. Hailing from Grand Rapids' vibrant local music scene, PRIV represents the new wave of independent artists who leverage digital platforms while maintaining artistic authenticity.

"PRIV embodies everything HLPFL stands for," says James Rockel, Founder & CEO of HLPFL Records. "Complete creative freedom, no compromises, and a commitment to authenticity. We're not here to mold artists into what we think will sell—we're here to amplify their true vision."

## The HLPFL Partnership

Under HLPFL's revolutionary partnership model, PRIV enjoys:

- **100% Artist Ownership** - Complete ownership of all masters and rights
- **Full Creative Control** - No A&R interference or forced collaboration
- **Comprehensive Support** - Distribution, marketing, analytics, and career development tools
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
    publishedAt: new Date('2023-01-15'),
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
