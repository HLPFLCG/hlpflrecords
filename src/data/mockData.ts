import { Artist, Release, NewsPost, TeamMember } from '@/types'

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Alki',
    slug: 'alki',
    bio: 'Boundary-pushing artist creating the future of alternative music. As HLPFL\'s first signed artist, Alki embodies our revolutionary artist-first philosophy. With a unique blend of punk energy, pop sensibility, and rap lyricism, Alki is proving that independent artists can thrive with the right partnership. Known for explosive live performances and genre-defying sound.',
    genre: ['Punk', 'Pop', 'Rap'],
    image: '/images/team/alki.jpg',
    socials: {
      spotify: 'https://open.spotify.com/artist/1Jof1vMpSF5pIWUvG9cizl',
      instagram: 'https://www.instagram.com/alkiotis',
      website: 'https://alki.info',
      twitter: 'https://twitter.com/alkiotis',
    },
  },
  {
    id: '2',
    name: 'Luna Rose',
    slug: 'luna-rose',
    bio: 'Indie folk sensation with a voice that captures the raw emotion of life\'s everyday moments. Luna Rose brings authentic storytelling and haunting melodies that resonate with listeners on a deep, personal level. Her debut album has been praised for its intimate lyrics and innovative production.',
    genre: ['Indie Folk', 'Alternative', 'Singer-Songwriter'],
    image: '/images/team/234923287579528209.jpeg',
    socials: {
      spotify: 'https://open.spotify.com/artist/example',
      instagram: 'https://www.instagram.com/lunarose',
      website: 'https://lunarose.music',
    },
  },
  {
    id: '3',
    name: 'The Midnight Collective',
    slug: 'the-midnight-collective',
    bio: 'Electronic music pioneers blending ambient soundscapes with driving beats. The Midnight Collective creates immersive audio experiences that transport listeners to other worlds. Their live shows are legendary, combining stunning visuals with cutting-edge sound design.',
    genre: ['Electronic', 'Ambient', 'Techno'],
    image: '/images/team/2964009635738408332.jpeg',
    socials: {
      spotify: 'https://open.spotify.com/artist/example',
      instagram: 'https://www.instagram.com/midnightcollective',
      website: 'https://midnightcollective.net',
    },
  },
  {
    id: '4',
    name: 'Marcus Chen',
    slug: 'marcus-chen',
    bio: 'Jazz virtuoso pushing the boundaries of contemporary jazz. Marcus Chen brings together traditional jazz sensibilities with modern electronic elements, creating a sound that\'s both familiar and revolutionary. His compositions have been featured in films and commercials worldwide.',
    genre: ['Jazz', 'Fusion', 'Contemporary'],
    image: '/images/team/6806525425881522383.jpeg',
    socials: {
      spotify: 'https://open.spotify.com/artist/example',
      instagram: 'https://www.instagram.com/marcuschen',
      website: 'https://marcuschen.com',
    },
  },
  {
    id: '5',
    name: 'Echo Park',
    slug: 'echo-park',
    bio: 'Rock and roll revivalists bringing raw energy back to the music scene. Echo Park combines the timeless appeal of classic rock with modern production techniques, creating anthems that feel both nostalgic and fresh. Their high-energy performances have earned them a dedicated following.',
    genre: ['Rock', 'Alternative', 'Garage Rock'],
    image: '/images/team/7116508092182289035.jpeg',
    socials: {
      spotify: 'https://open.spotify.com/artist/example',
      instagram: 'https://www.instagram.com/echopark',
      website: 'https://echoparkband.com',
    },
  },
]

export const mockReleases: Release[] = [
  {
    id: '1',
    title: 'Chaos Theory',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('November 28, 2025'),
    coverArt: '/images/releases/chaos-theory.jpg',
    description: 'Genre-defying single that pushes the boundaries of punk, pop, and rap. Chaos Theory represents the evolution of modern music, blending raw energy with infectious melodies.',
    links: {
      spotify: 'https://open.spotify.com/album/468FaHLWX75g0RJdoEUABD?si=PwvPVHpiSIC9TJ5irgh3zg',
      apple: 'https://music.apple.com/album/chaos-theory',
      youtube: 'https://youtube.com/watch?v=example',
    },
    tracks: [
      { id: '1', title: 'Chaos Theory', duration: '3:24' },
    ],
  },
  {
    id: '2',
    title: 'Midnight Conversations',
    artist: 'Luna Rose',
    artistId: '2',
    type: 'album',
    releaseDate: new Date('October 15, 2024'),
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
