import { Artist, Release, NewsPost, TeamMember } from '@/types'

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Alki',
    slug: 'alki',
    bio: 'Placeholder artist biography. This space will be filled with actual artist information when assets are provided.',
    genre: ['Punk', 'Pop', 'Rap'],
    image: 'public/images/team/3836042966790980117.jpeg',
    socials: {
      spotify: 'https://open.spotify.com/artist/1Jof1vMpSF5pIWUvG9cizl',
      instagram: 'https://www.instagram.com/alkiotis',
    },
  },
]

export const mockReleases: Release[] = [
  {
    id: '1',
    title: 'Debut Single',
    artist: 'Artist Name',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-01-15'),
    coverArt: '/images/releases/placeholder.jpg',
    description: 'Amazing debut single from our newest artist.',
    links: {
      spotify: '#',
      apple: '#',
      youtube: '#',
    },
  },
  {
    id: '2',
    title: 'Studio Album',
    artist: 'Featured Artist',
    artistId: '2',
    type: 'album',
    releaseDate: new Date('2024-03-20'),
    coverArt: '/images/releases/placeholder.jpg',
    description: 'Full-length album showcasing incredible talent.',
    tracks: [
      { id: '1', title: 'Track 1', duration: '3:45' },
      { id: '2', title: 'Track 2', duration: '4:12' },
      { id: '3', title: 'Track 3', duration: '3:28' },
    ],
  },
]

export const mockNews: NewsPost[] = [
  {
    id: '1',
    title: 'HLPFL Records Announces New Artist Signing',
    slug: 'new-artist-signing',
    excerpt: 'We are thrilled to welcome our newest artist to the HLPFL Records family.',
    content: 'Full article content placeholder...',
    publishedAt: new Date('2024-01-10'),
    author: 'HLPFL Team',
    category: 'News',
    image: '/images/news/placeholder.jpg',
  },
  {
    id: '2',
    title: 'Upcoming Release Schedule',
    slug: 'upcoming-releases',
    excerpt: 'Check out our exciting lineup of new music coming this quarter.',
    content: 'Full article content placeholder...',
    publishedAt: new Date('2024-01-05'),
    author: 'HLPFL Team',
    category: 'Releases',
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
    bio: 'Boundary-pushing artist creating the future of rock music. As HLPFL\'s first signed artist and co-founder, Alki embodies our revolutionary artist-first philosophy. With a unique blend of rock, weed, and tofu culture, Alki is proving that independent artists can thrive with the right partnership.',
    image: '/images/team/alki.jpg',
    socials: {
      instagram: 'https://instagram.com/alkiotis',
      spotify: 'https://open.spotify.com/artist/1Jof1vMpSF5pIWUvG9cizl',
      website: 'https://alki.info',
    },
  },
]
