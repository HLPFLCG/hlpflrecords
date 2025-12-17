import { Artist, Release, NewsPost, TeamMember } from '@/types'

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Alki',
    slug: 'alki',
    bio: 'Boundary-pushing artist creating the future of alternative music. As HLPFL\'s first signed artist, Alki embodies our revolutionary artist-first philosophy. With a unique blend of punk energy, pop sensibility, and rap lyricism, Alki is proving that independent artists can thrive with the right partnership. Known for explosive live performances and genre-defying sound.',
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
    releaseDate: new Date('November 28, 2025'),
    coverArt: '/images/team/IMG_2768.png',
    description: 'Angsty and punchy rap record that screams, "I hate you"',
    links: {
      spotify: 'https://open.spotify.com/album/468FaHLWX75g0RJdoEUABD',
      apple: 'https://api.ffm.to/sl/e/c/221?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzYwNS4xLjE1IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8yNi4xIFNhZmFyaS82MDUuMS4xNSIsImJyb3dzZXIiOnsibmFtZSI6IlNhZmFyaSIsInZlcnNpb24iOiIyNi4xIiwibWFqb3IiOiIyNiJ9LCJjcHUiOnt9LCJkZXZpY2UiOnsibW9kZWwiOiJNYWNpbnRvc2giLCJ2ZW5kb3IiOiJBcHBsZSJ9LCJlbmdpbmUiOnsibmFtZSI6IldlYktpdCIsInZlcnNpb24iOiI2MDUuMS4xNSJ9LCJvcyI6eyJuYW1lIjoibWFjT1MiLCJ2ZXJzaW9uIjoiMTAuMTUuNyJ9fSwiY2xpZW50Ijp7InJpZCI6IjBhMGQ4ODM0LWFmODEtNDE1My04MzIyLWQzMDdlODNiMjBiZSIsInNpZCI6IjY3ZDEwYThjLWE4ZDUtNDIwMS04NDI3LTBkMTk2ZjAxNTI0NSIsImlwIjoiMjE3LjIxNy4xMTIuODUiLCJyZWYiOiJodHRwczovL2wuaW5zdGFncmFtLmNvbS8iLCJob3N0IjoidG9vLmZtIiwibGFuZyI6ImVuLVVTIiwiaXBDb3VudHJ5IjoiVVMifSwiaXNXZWJwU3VwcG9ydGVkIjpmYWxzZSwiZ2RwckVuZm9yY2UiOmZhbHNlLCJjb3VudHJ5Q29kZSI6IlVTIiwiaXNCb3QiOmZhbHNlLCJ1c2VBZmYiOiJvcmlnaW4iLCJ2aWQiOiI5ZmI0M2I3MS1lNzdkLTQ5MmItODVlZC0wNGU0ZjUyMDhiOWYiLCJpZCI6IjY5MTUwM2VmMzgwMDAwM2UwMDQwZjJmYSIsInBydiI6ZmFsc2UsImlzUHJlUiI6ZmFsc2UsInR6byI6bnVsbCwiY2giOm51bGwsImFuIjpudWxsLCJkZXN0VXJsIjoiaHR0cHM6Ly9nZW8ubXVzaWMuYXBwbGUuY29tL3VzL2FsYnVtLzIyMS1zaW5nbGUvMTg1MzM2MTc3Mj9hcHA9bXVzaWMmbHM9MSZjdD1GRk1fNzYyZDljNDBkNzQzNzkxNDc3MjE5NTE1Y2E1NGM0M2EmYXQ9MTAxMGwzODI4Iiwic3J2YyI6ImFwcGxlIiwicHJvZHVjdCI6InNtYXJ0bGluayIsInNob3J0SWQiOiIyMjEiLCJpc0F1dGhvcml6YXRpb25SZXF1aXJlZCI6ZmFsc2UsIm93bmVyIjoiNWVlNmJjZWIzMjAwMDA2NDIyZGQzYTY4IiwiYXIiOiI2MTgxMmRhZjI1MDAwMGU2NzdhZmU3ZjIiLCJpc1Nob3J0TGluayI6ZmFsc2UsIm5hdGl2ZSI6ZmFsc2V9',
      youtube: 'https://api.ffm.to/sl/e/c/221?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzYwNS4xLjE1IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8yNi4xIFNhZmFyaS82MDUuMS4xNSIsImJyb3dzZXIiOnsibmFtZSI6IlNhZmFyaSIsInZlcnNpb24iOiIyNi4xIiwibWFqb3IiOiIyNiJ9LCJjcHUiOnt9LCJkZXZpY2UiOnsibW9kZWwiOiJNYWNpbnRvc2giLCJ2ZW5kb3IiOiJBcHBsZSJ9LCJlbmdpbmUiOnsibmFtZSI6IldlYktpdCIsInZlcnNpb24iOiI2MDUuMS4xNSJ9LCJvcyI6eyJuYW1lIjoibWFjT1MiLCJ2ZXJzaW9uIjoiMTAuMTUuNyJ9fSwiY2xpZW50Ijp7InJpZCI6IjBhMGQ4ODM0LWFmODEtNDE1My04MzIyLWQzMDdlODNiMjBiZSIsInNpZCI6IjY3ZDEwYThjLWE4ZDUtNDIwMS04NDI3LTBkMTk2ZjAxNTI0NSIsImlwIjoiMjE3LjIxNy4xMTIuODUiLCJyZWYiOiJodHRwczovL2wuaW5zdGFncmFtLmNvbS8iLCJob3N0IjoidG9vLmZtIiwibGFuZyI6ImVuLVVTIiwiaXBDb3VudHJ5IjoiVVMifSwiaXNXZWJwU3VwcG9ydGVkIjpmYWxzZSwiZ2RwckVuZm9yY2UiOmZhbHNlLCJjb3VudHJ5Q29kZSI6IlVTIiwiaXNCb3QiOmZhbHNlLCJ1c2VBZmYiOiJvcmlnaW4iLCJ2aWQiOiI5ZmI0M2I3MS1lNzdkLTQ5MmItODVlZC0wNGU0ZjUyMDhiOWYiLCJpZCI6IjY5MTUwM2VmMzgwMDAwM2UwMDQwZjJmYSIsInBydiI6ZmFsc2UsImlzUHJlUiI6ZmFsc2UsInR6byI6bnVsbCwiY2giOm51bGwsImFuIjpudWxsLCJkZXN0VXJsIjoiaHR0cHM6Ly93d3cueW91dHViZS5jb20vcGxheWxpc3Q_bGlzdD1PTEFLNXV5X2x0Yy1HdlJxd2sycE52Y3RFWjJKVC1UZFBMTnFiYU5qMCZzcmM9RkZNJmxpZD0wMDAwMDAwMC02OTE1LTAzZWYtMzgwMC0wMDNlMDA0MGYyZmEmY2lkPWVlZjI2N2Y2LTNmNTEtNWQ0Ni1hNzE3LTcxMWFjMTJiY2Y3NiIsInNydmMiOiJ5b3V0dWJlIiwicHJvZHVjdCI6InNtYXJ0bGluayIsInNob3J0SWQiOiIyMjEiLCJpc0F1dGhvcml6YXRpb25SZXF1aXJlZCI6ZmFsc2UsIm93bmVyIjoiNWVlNmJjZWIzMjAwMDA2NDIyZGQzYTY4IiwiYXIiOiI2MTgxMmRhZjI1MDAwMGU2NzdhZmU3ZjIiLCJpc1Nob3J0TGluayI6ZmFsc2UsIm5hdGl2ZSI6ZmFsc2V9',
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
    releaseDate: new Date('October 17, 2025'),
    coverArt: '/images/releases/midnight-conversations.jpg',
    description: 'Intimate debut album that explores the quiet moments and whispered secrets of everyday life. A journey through love, loss, and self-discovery.',
    tracks: [
      { id: '1', title: 'Streetlight Serenade', duration: '3:45' },
      { id: '2', title: 'Coffee Shop Dreams', duration: '4:12' },
      { id: '3', title: 'Midnight Conversations', duration: '3:28' },
      { id: '4', title: 'City Rain', duration: '3:56' },
      { id: '5', title: 'Morning Light', duration: '4:33' },
    ],
    links: {
      spotify: 'https://open.spotify.com/album/example',
      apple: 'https://music.apple.com/album/midnight-conversations',
    },
  },
  {
    id: '3',
    title: 'Digital Horizons',
    artist: 'The Midnight Collective',
    artistId: '3',
    type: 'album',
    releaseDate: new Date('September 22, 2024'),
    coverArt: '/images/releases/digital-horizons.jpg',
    description: 'Groundbreaking electronic album that blurs the line between organic and synthetic sounds. A sonic journey through digital landscapes and human emotions.',
    tracks: [
      { id: '1', title: 'Glitch in the System', duration: '5:12' },
      { id: '2', title: 'Digital Horizons', duration: '6:45' },
      { id: '3', title: 'Binary Dreams', duration: '4:33' },
      { id: '4', title: 'Neon Nights', duration: '5:28' },
    ],
    links: {
      spotify: 'https://open.spotify.com/album/example',
      apple: 'https://music.apple.com/album/digital-horizons',
    },
  },
  {
    id: '4',
    title: 'Rhythm Changes',
    artist: 'Marcus Chen',
    artistId: '4',
    type: 'album',
    releaseDate: new Date('August 10, 2024'),
    coverArt: '/images/releases/rhythm-changes.jpg',
    description: 'Revolutionary jazz fusion album that reimagines classic jazz standards through a contemporary lens. Masterful improvisation meets innovative production.',
    tracks: [
      { id: '1', title: 'Blue Note Revival', duration: '7:23' },
      { id: '2', title: 'Rhythm Changes', duration: '6:45' },
      { id: '3', title: 'Urban Landscape', duration: '5:18' },
      { id: '4', title: 'Modal Freedom', duration: '8:12' },
      { id: '5', title: 'Fusion Dreams', duration: '6:33' },
    ],
    links: {
      spotify: 'https://open.spotify.com/album/example',
      apple: 'https://music.apple.com/album/rhythm-changes',
    },
  },
  {
    id: '5',
    title: 'Garage Anthems',
    artist: 'Echo Park',
    artistId: '5',
    type: 'album',
    releaseDate: new Date('July 5, 2024'),
    coverArt: '/images/releases/garage-anthems.jpg',
    description: 'High-octane rock album that captures the raw energy of garage rock revival. Gritty guitars, pounding drums, and anthemic choruses that demand to be played loud.',
    tracks: [
      { id: '1', title: 'Breakout', duration: '3:12' },
      { id: '2', title: 'Concrete Jungle', duration: '4:23' },
      { id: '3', title: 'Saturday Night', duration: '3:45' },
      { id: '4', title: 'Garage Anthems', duration: '4:56' },
    ],
    links: {
      spotify: 'https://open.spotify.com/album/example',
      apple: 'https://music.apple.com/album/garage-anthems',
    },
  },
]

export const mockNews: NewsPost[] = [
  {
    id: '1',
    title: 'HLPFL Announces New Artist Signing',
    slug: 'new-artist-signing',
    excerpt: 'We are thrilled to welcome our newest artist to the HLPFL family.',
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
