import { Artist, Release, NewsPost, TeamMember } from '@/types'

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Artist Name',
    slug: 'artist-name',
    bio: 'Placeholder artist biography. This space will be filled with actual artist information when assets are provided.',
    genre: ['Pop', 'R&B'],
    image: '/images/artists/placeholder.jpg',
    socials: {
      spotify: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    id: '2',
    name: 'Featured Artist',
    slug: 'featured-artist',
    bio: 'Another talented artist from the HLPFL Records family. Biography placeholder for future content.',
    genre: ['Hip-Hop', 'Trap'],
    image: '/images/artists/placeholder.jpg',
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
    name: 'Team Member Name',
    role: 'Label Director',
    bio: 'Experienced music industry professional with a passion for discovering and developing talent.',
    image: '/images/team/placeholder.jpg',
    socials: {
      linkedin: '#',
      email: 'contact@hlpflrecords.com',
    },
  },
  {
    id: '2',
    name: 'Another Member',
    role: 'A&R Manager',
    bio: 'Dedicated to finding the next generation of groundbreaking artists.',
    image: '/images/team/placeholder.jpg',
  },
]