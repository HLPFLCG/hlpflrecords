import { Artist, Release, NewsPost, TeamMember } from '@/types'

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Alki',
    slug: 'alki',
    bio: 'Boundary-pushing artist creating the future of alternative music. As HLPFL\'s first signed artist and co-founder, Alki embodies our revolutionary artist-first philosophy. With a unique blend of punk energy, pop sensibility, and rap lyricism, Alki is proving that independent artists can thrive with the right partnership. Known for explosive live performances and genre-defying sound. With nearly 48,000 monthly listeners and millions of streams, Alki is rapidly becoming a force in independent music.',
    genre: ['Punk', 'Pop', 'Rap'],
    image: '/images/team/james-rockel.jpg',
    socials: {
      spotify: 'https://open.spotify.com/artist/1Jof1vMpSF5pIWUvG9cizl',
      instagram: 'https://www.instagram.com/alkiotis',
      website: 'https://alki.info',
      twitter: 'https://twitter.com/alkiotis',
    },
  },
]

export const mockReleases: Release[] = [
  {
    id: '1',
    title: '221',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2025-01-17'),
    coverArt: '/images/team/IMG_2768.png',
    description: 'Angsty and punchy rap record that screams, "I hate you"',
    links: {
      spotify: 'https://open.spotify.com/album/468FaHLWX75g0RJdoEUABD',
      apple: 'https://music.apple.com/album/221-single/1853361772',
      youtube: 'https://www.youtube.com/watch?v=221',
    },
    tracks: [
      { id: '1', title: '221', duration: '1:49' },
    ],
  },
  {
    id: '2',
    title: 'Lackin',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2025-01-10'),
    coverArt: '/images/releases/lackin.jpg',
    description: 'Raw and unfiltered energy captured in under two minutes.',
    links: {
      spotify: 'https://open.spotify.com/album/5QHzjA4cUCRDOPwWpNosXt',
      apple: 'https://music.apple.com/album/lackin',
    },
    tracks: [
      { id: '1', title: 'Lackin', duration: '1:42' },
    ],
  },
  {
    id: '3',
    title: 'No Service',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-12-20'),
    coverArt: '/images/releases/no-service.jpg',
    description: 'A commentary on modern disconnection and digital isolation.',
    links: {
      spotify: 'https://open.spotify.com/album/5KZ4e4dQ5vt2sUo7XBmxyQ',
      apple: 'https://music.apple.com/album/no-service',
    },
    tracks: [
      { id: '1', title: 'No Service', duration: '1:59' },
    ],
  },
  {
    id: '4',
    title: 'Get Down',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-11-15'),
    coverArt: '/images/releases/get-down.jpg',
    description: 'High-energy track that demands movement.',
    links: {
      spotify: 'https://open.spotify.com/album/2AWKJ7CFAnTbxZUNjnuO3G',
      apple: 'https://music.apple.com/album/get-down',
    },
    tracks: [
      { id: '1', title: 'Get Down', duration: '1:37' },
    ],
  },
  {
    id: '5',
    title: 'Better Off',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-10-25'),
    coverArt: '/images/releases/better-off.jpg',
    description: 'Collaborative single featuring CRONIN, exploring themes of growth and moving forward.',
    links: {
      spotify: 'https://open.spotify.com/album/4kOzmQpzk7lDtIiH7n6sXZ',
      apple: 'https://music.apple.com/album/better-off',
    },
    tracks: [
      { id: '1', title: 'Better Off', duration: '2:14' },
    ],
  },
  {
    id: '6',
    title: 'Switched Up',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-09-20'),
    coverArt: '/images/releases/switched-up.jpg',
    description: 'Alki\'s breakout hit with nearly 3 million streams. A powerful anthem about change and transformation.',
    links: {
      spotify: 'https://open.spotify.com/album/4EF7LaxKklISvrfAqVyWkl',
      apple: 'https://music.apple.com/album/switched-up',
    },
    tracks: [
      { id: '1', title: 'Switched Up', duration: '2:45' },
    ],
  },
  {
    id: '7',
    title: 'Too Much',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-08-15'),
    coverArt: '/images/releases/too-much.jpg',
    description: 'Over 1 million streams and counting. A raw exploration of overwhelming emotions.',
    links: {
      spotify: 'https://open.spotify.com/album/2zZxWozolia2eFyaa6Vvf9',
      apple: 'https://music.apple.com/album/too-much',
    },
    tracks: [
      { id: '1', title: 'Too Much', duration: '2:31' },
    ],
  },
  {
    id: '8',
    title: 'Planes',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-07-10'),
    coverArt: '/images/releases/planes.jpg',
    description: 'Short but impactful, capturing the essence of escape and freedom.',
    links: {
      spotify: 'https://open.spotify.com/album/4S8NsL7dMsYqqshMVzbreE',
      apple: 'https://music.apple.com/album/planes',
    },
    tracks: [
      { id: '1', title: 'Planes', duration: '1:57' },
    ],
  },
  {
    id: '9',
    title: 'Deceiving',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-06-05'),
    coverArt: '/images/releases/deceiving.jpg',
    description: 'Nearly 800,000 streams. A deep dive into trust and betrayal.',
    links: {
      spotify: 'https://open.spotify.com/album/10eFlyNRLA19cGvfCedVIn',
      apple: 'https://music.apple.com/album/deceiving',
    },
    tracks: [
      { id: '1', title: 'Deceiving', duration: '3:02' },
    ],
  },
  {
    id: '10',
    title: 'Attached',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-05-01'),
    coverArt: '/images/releases/attached.jpg',
    description: 'An intimate look at emotional connection and dependency.',
    links: {
      spotify: 'https://open.spotify.com/album/attached',
      apple: 'https://music.apple.com/album/attached',
    },
    tracks: [
      { id: '1', title: 'Attached', duration: '2:18' },
    ],
  },
]

export const mockNews: NewsPost[] = [
  {
    id: '1',
    title: 'Alki Drops New Single "221"',
    slug: 'alki-221-release',
    excerpt: 'Alki returns with his most aggressive track yet, "221" - an angsty rap record that pulls no punches.',
    content: 'Full article content placeholder...',
    publishedAt: new Date('2025-01-17'),
    author: 'HLPFL Team',
    category: 'Releases',
    image: '/images/news/221-release.jpg',
  },
  {
    id: '2',
    title: 'Alki Surpasses 3 Million Streams on "Switched Up"',
    slug: 'switched-up-milestone',
    excerpt: 'Celebrating a major milestone as Alki\'s breakout hit continues to resonate with fans worldwide.',
    content: 'Full article content placeholder...',
    publishedAt: new Date('2024-12-15'),
    author: 'HLPFL Team',
    category: 'News',
  },
]

export const mockTeam: TeamMember[] = [
  {
    id: '1',
    name: 'James Rockel',
    role: 'Founder & CEO',
    bio: 'Founded HLPFL at 18 years old with a revolutionary vision for artist partnerships. James has transformed how independent musicians build sustainable careers through the groundbreaking 50/50 model. When not changing the music industry, he\'s discovering emerging talent at local shows.',
    image: '/images/team/james-rockel.jpg',
    socials: {
      linkedin: '#',
      email: 'contact@hlpfl.org',
    },
  },
  {
    id: '2',
    name: 'Alki',
    role: 'Co-Founder & Signed Artist',
    bio: 'Boundary-pushing artist creating the future of alternative music. As HLPFL\'s first signed artist and co-founder, Alki embodies our revolutionary artist-first philosophy. With a unique blend of punk, pop, and rap, Alki is proving that independent artists can thrive with the right partnership. Nearly 48,000 monthly listeners and millions of streams.',
    image: '/images/team/alki.jpg',
    socials: {
      instagram: 'https://instagram.com/alkiotis',
      spotify: 'https://open.spotify.com/artist/1Jof1vMpSF5pIWUvG9cizl',
      website: 'https://alki.info',
    },
  },
  {
    id: '3',
    name: 'Noah Rank',
    role: 'Director of Sales',
    bio: 'Leading HLPFL\'s sales strategy and business development initiatives. Noah brings expertise in music industry partnerships and revenue growth, helping artists maximize their commercial potential while maintaining creative integrity.',
    image: '/images/team/noah-rank.jpg',
    socials: {
      linkedin: '#',
      email: 'noah@hlpfl.org',
    },
  },
]