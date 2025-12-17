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
    title: 'New Single',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('November 28, 2025'),
    coverArt: 'public/images/team/IMG_2768.png',
    description: 'Latest Release from Alki',
    links: {
      spotify: 'https://open.spotify.com/album/468FaHLWX75g0RJdoEUABD?si=PwvPVHpiSIC9TJ5irgh3zg',
      apple: 'https://api.ffm.to/sl/e/c/221?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzYwNS4xLjE1IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8yNi4xIFNhZmFyaS82MDUuMS4xNSIsImJyb3dzZXIiOnsibmFtZSI6IlNhZmFyaSIsInZlcnNpb24iOiIyNi4xIiwibWFqb3IiOiIyNiJ9LCJjcHUiOnt9LCJkZXZpY2UiOnsibW9kZWwiOiJNYWNpbnRvc2giLCJ2ZW5kb3IiOiJBcHBsZSJ9LCJlbmdpbmUiOnsibmFtZSI6IldlYktpdCIsInZlcnNpb24iOiI2MDUuMS4xNSJ9LCJvcyI6eyJuYW1lIjoibWFjT1MiLCJ2ZXJzaW9uIjoiMTAuMTUuNyJ9fSwiY2xpZW50Ijp7InJpZCI6IjczZDZhOTc0LWUwYTctNGNhNy1hZmI4LWZiYWMxZTk1OGFhYiIsInNpZCI6IjY3ZDEwYThjLWE4ZDUtNDIwMS04NDI3LTBkMTk2ZjAxNTI0NSIsImlwIjoiMjE3LjIxNy4xMTMuMTYxIiwicmVmIjoiaHR0cHM6Ly9sLmluc3RhZ3JhbS5jb20vIiwiaG9zdCI6InRvby5mbSIsImxhbmciOiJlbi1VUyIsImlwQ291bnRyeSI6IlVTIn0sImlzV2VicFN1cHBvcnRlZCI6ZmFsc2UsImdkcHJFbmZvcmNlIjpmYWxzZSwiY291bnRyeUNvZGUiOiJVUyIsImlzQm90IjpmYWxzZSwidXNlQWZmIjoib3JpZ2luIiwidmlkIjoiZjJmNWZmZjItNGM3Zi00MDkwLTk3MGItNGNhZDE3M2ZlNmFjIiwiaWQiOiI2OTE1MDNlZjM4MDAwMDNlMDA0MGYyZmEiLCJwcnYiOmZhbHNlLCJpc1ByZVIiOmZhbHNlLCJ0em8iOm51bGwsImNoIjpudWxsLCJhbiI6bnVsbCwiZGVzdFVybCI6Imh0dHBzOi8vZ2VvLm11c2ljLmFwcGxlLmNvbS91cy9hbGJ1bS8yMjEtc2luZ2xlLzE4NTMzNjE3NzI_YXBwPW11c2ljJmxzPTEmY3Q9RkZNXzhiNjVhN2M1MjIwMjdhNjRhYTA3YzFiMTcxYTAzZjM0JmF0PTEwMTBsMzgyOCIsInNydmMiOiJhcHBsZSIsInByb2R1Y3QiOiJzbWFydGxpbmsiLCJzaG9ydElkIjoiMjIxIiwiaXNBdXRob3JpemF0aW9uUmVxdWlyZWQiOmZhbHNlLCJvd25lciI6IjVlZTZiY2ViMzIwMDAwNjQyMmRkM2E2OCIsImFyIjoiNjE4MTJkYWYyNTAwMDBlNjc3YWZlN2YyIiwiaXNTaG9ydExpbmsiOmZhbHNlLCJuYXRpdmUiOmZhbHNlfQ',
      youtube: 'https://api.ffm.to/sl/e/c/221?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzYwNS4xLjE1IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8yNi4xIFNhZmFyaS82MDUuMS4xNSIsImJyb3dzZXIiOnsibmFtZSI6IlNhZmFyaSIsInZlcnNpb24iOiIyNi4xIiwibWFqb3IiOiIyNiJ9LCJjcHUiOnt9LCJkZXZpY2UiOnsibW9kZWwiOiJNYWNpbnRvc2giLCJ2ZW5kb3IiOiJBcHBsZSJ9LCJlbmdpbmUiOnsibmFtZSI6IldlYktpdCIsInZlcnNpb24iOiI2MDUuMS4xNSJ9LCJvcyI6eyJuYW1lIjoibWFjT1MiLCJ2ZXJzaW9uIjoiMTAuMTUuNyJ9fSwiY2xpZW50Ijp7InJpZCI6IjczZDZhOTc0LWUwYTctNGNhNy1hZmI4LWZiYWMxZTk1OGFhYiIsInNpZCI6IjY3ZDEwYThjLWE4ZDUtNDIwMS04NDI3LTBkMTk2ZjAxNTI0NSIsImlwIjoiMjE3LjIxNy4xMTMuMTYxIiwicmVmIjoiaHR0cHM6Ly9sLmluc3RhZ3JhbS5jb20vIiwiaG9zdCI6InRvby5mbSIsImxhbmciOiJlbi1VUyIsImlwQ291bnRyeSI6IlVTIn0sImlzV2VicFN1cHBvcnRlZCI6ZmFsc2UsImdkcHJFbmZvcmNlIjpmYWxzZSwiY291bnRyeUNvZGUiOiJVUyIsImlzQm90IjpmYWxzZSwidXNlQWZmIjoib3JpZ2luIiwidmlkIjoiZjJmNWZmZjItNGM3Zi00MDkwLTk3MGItNGNhZDE3M2ZlNmFjIiwiaWQiOiI2OTE1MDNlZjM4MDAwMDNlMDA0MGYyZmEiLCJwcnYiOmZhbHNlLCJpc1ByZVIiOmZhbHNlLCJ0em8iOm51bGwsImNoIjpudWxsLCJhbiI6bnVsbCwiZGVzdFVybCI6Imh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BsYXlsaXN0P2xpc3Q9T0xBSzV1eV9sdGMtR3ZScXdrMnBOdmN0RVoySlQtVGRQTE5xYmFOajAmc3JjPUZGTSZsaWQ9MDAwMDAwMDAtNjkxNS0wM2VmLTM4MDAtMDAzZTAwNDBmMmZhJmNpZD1lZWYyNjdmNi0zZjUxLTVkNDYtYTcxNy03MTFhYzEyYmNmNzYiLCJzcnZjIjoieW91dHViZSIsInByb2R1Y3QiOiJzbWFydGxpbmsiLCJzaG9ydElkIjoiMjIxIiwiaXNBdXRob3JpemF0aW9uUmVxdWlyZWQiOmZhbHNlLCJvd25lciI6IjVlZTZiY2ViMzIwMDAwNjQyMmRkM2E2OCIsImFyIjoiNjE4MTJkYWYyNTAwMDBlNjc3YWZlN2YyIiwiaXNTaG9ydExpbmsiOmZhbHNlLCJuYXRpdmUiOmZhbHNlfQ',
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
