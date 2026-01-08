import { Artist, Release, NewsPost, TeamMember } from '@/types'

// ========================================
// ARTISTS DATA
// ========================================
export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Alki',
    slug: 'alki',
    bio: 'Alkiviadis Halkiotis, known professionally as Alki, blends punk energy, pop hooks, and raw rap delivery into a sound that defies easy categorization. With nearly 46,000 monthly listeners on Spotify and millions of streams across platforms, Alki has built a devoted following through relentlessly honest storytelling and genre-bending production.\n\nAs Co-Founder of HLPFL, Alki represents everything the label stands for: artist ownership, creative freedom, and authentic connection with fans. His catalog includes 37+ released recordings with over 300 unreleased tracks ready to drop.\n\nTop tracks like "Switched Up" (3M+ streams), "Too Much" (1.1M+ streams), and "Deceiving" (810K+ streams) showcase his ability to merge vulnerability with undeniable hooks.',
    genre: ['Punk', 'Pop', 'Rap', 'Alternative'],
    image: '/images/team/alki.webp',
    socials: {
      spotify: 'https://open.spotify.com/artist/1Jof1vMpSF5pIWUvG9cizl',
      instagram: 'https://www.instagram.com/alkiotis',
      twitter: 'https://twitter.com/alkiotis',
      website: 'https://app.grouped.com/everythingalki',
    },
  },
  {
    id: '2',
    name: 'Pardyalone',
    slug: 'pardyalone',
    bio: 'Kalvin Tyler Beal, known as Pardyalone, emerged from Eden Prairie, Minnesota to become one of the most compelling voices in alternative hip-hop. With 436,000+ monthly listeners and over 60 million total streams on Spotify, he\'s proven that authentic emotion resonates louder than industry polish.\n\nHis debut album "I Left You In Minnesota" (2023) featuring Travis Barker drew on tales of pain, heartbreak, and mental health battles, citing Bon Iver, Lauryn Hill, and A Boogie Wit Da Hoodie as influences. The breakout hit "Not a Home" has amassed 26M+ streams alone.\n\n"To heal, help and inspire. That\'s why I\'m here." - Pardyalone\n\nSigned to HLPFL under the revolutionary 50/50 partnership model, Pardyalone represents the new wave of independent artists taking control of their careers while maintaining the support system needed to reach global audiences.',
    genre: ['Alternative Hip-Hop', 'Emo Rap', 'Indie', 'Pop'],
    image: '/images/artists/IMG_0146.png',
    socials: {
      spotify: 'https://open.spotify.com/artist/6M4q5QWjmpjuPAi7LVFEFG',
      instagram: 'https://www.instagram.com/pardyalone',
      twitter: 'https://twitter.com/pardyalone',
      facebook: 'https://facebook.com/pardyalone/',
      website: 'https://pardyalone.com',
    },
  },
  {
    id: '3',
    name: 'Priv',
    slug: 'priv',
    bio: 'Priv is an emerging artist bringing a fresh perspective to the HLPFL roster. With a unique sound that blends innovation and authenticity, Priv represents the next generation of independent music. As part of the HLPFL family, Priv maintains complete creative control and ownership while accessing the tools and support needed to build a sustainable music career.\n\nStay tuned for upcoming releases and performances from this exciting new talent.',
    genre: ['Alternative', 'Indie', 'Experimental'],
    image: '',
    socials: {
      spotify: '', // TODO: Add Priv's Spotify artist link
      instagram: '',
      twitter: '',
    },
  },
]

// ========================================
// ALKI RELEASES
// ========================================
const alkiReleases: Release[] = [
  // === 2025 RELEASES ===
  {
    id: 'alki-1',
    title: '221',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2025-01-17'),
    coverArt: '/images/releases/221.png',
    description: 'The latest single from Alki, showcasing his evolution as an artist with fresh production and raw lyricism. Angsty and punchy rap record that screams, "I hate you".',
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
    id: 'alki-2',
    title: 'Lackin',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2025-01-10'),
    coverArt: '/images/releases/lackin.jpg',
    description: 'A high-energy track about staying focused and not falling behind.',
    links: {
      spotify: 'https://open.spotify.com/album/5QHzjA4cUCRDOPwWpNosXt',
      apple: 'https://music.apple.com/album/lackin',
    },
    tracks: [
      { id: '1', title: 'Lackin', duration: '1:42' },
    ],
  },
  {
    id: 'alki-3',
    title: 'No Service',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-12-20'),
    coverArt: '/images/releases/no-service.jpg',
    description: 'Disconnection and isolation themes explored through punchy production.',
    links: {
      spotify: 'https://open.spotify.com/album/5KZ4e4dQ5vt2sUo7XBmxyQ',
      apple: 'https://music.apple.com/album/no-service',
    },
    tracks: [
      { id: '1', title: 'No Service', duration: '1:59' },
    ],
  },

  // === 2024 RELEASES ===
  {
    id: 'alki-4',
    title: 'Get Down',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-11-15'),
    coverArt: '/images/releases/get-down.jpg',
    description: 'An infectious dance-ready track with Alki\'s signature style.',
    links: {
      spotify: 'https://open.spotify.com/album/2AWKJ7CFAnTbxZUNjnuO3G',
      apple: 'https://music.apple.com/album/get-down',
    },
    tracks: [
      { id: '1', title: 'Get Down', duration: '1:37' },
    ],
  },
  {
    id: 'alki-5',
    title: 'Better Off',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-10-25'),
    coverArt: '/images/releases/better-off.jpg',
    description: 'A reflective track about growth and moving forward.',
    links: {
      spotify: 'https://open.spotify.com/album/4kOzmQpzk7lDtIiH7n6sXZ',
      apple: 'https://music.apple.com/album/better-off',
    },
    tracks: [
      { id: '1', title: 'Better Off', duration: '2:14' },
    ],
  },
  {
    id: 'alki-6',
    title: 'Boujee Bish',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-09-20'),
    coverArt: '/images/releases/boujeebish.jpg',
    description: 'A playful, confident anthem.',
    links: {
      spotify: 'https://open.spotify.com/album/2PLFmLSQNH6Fk7DUcxWlyy',
      apple: 'https://music.apple.com/album/boujeebish',
    },
    tracks: [
      { id: '1', title: 'Boujee Bish', duration: '2:29' },
    ],
  },
  {
    id: 'alki-7',
    title: 'My Life',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-08-15'),
    coverArt: '/images/releases/mylife.jpg',
    description: 'Personal storytelling at its finest.',
    links: {
      spotify: 'https://open.spotify.com/album/0ihB19wepnsHaX31huVCnu',
      apple: 'https://music.apple.com/album/mylife',
    },
    tracks: [
      { id: '1', title: 'My Life', duration: '2:43' },
    ],
  },
  {
    id: 'alki-8',
    title: 'Love Me More',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2024-07-10'),
    coverArt: '/images/releases/lovememore.jpg',
    description: 'An emotional exploration of love and longing.',
    links: {
      spotify: 'https://open.spotify.com/album/4IYoGtWUnfzzbxe4OXzNAR',
      apple: 'https://music.apple.com/album/lovememore',
    },
    tracks: [
      { id: '1', title: 'Love Me More', duration: '2:51' },
    ],
  },

  // === 2022 RELEASES ===
  {
    id: 'alki-9',
    title: 'Attached',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2022-05-01'),
    coverArt: '/images/releases/attached.jpg',
    description: 'A vulnerable exploration of emotional attachment with 249K+ streams.',
    links: {
      spotify: 'https://open.spotify.com/album/4BZ9ZzcTJqXw8b7cqYkCB5',
      apple: 'https://music.apple.com/album/attached',
    },
    tracks: [
      { id: '1', title: 'Attached', duration: '2:18' },
    ],
  },

  // === 2021 RELEASES ===
  {
    id: 'alki-10',
    title: 'Switched Up',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2021-09-20'),
    coverArt: '/images/releases/switched-up.jpg',
    description: 'Alki\'s breakthrough release with over 3 million streams. A defining moment in his catalog that showcases his unique blend of punk attitude and melodic sensibility.',
    links: {
      spotify: 'https://open.spotify.com/album/4EF7LaxKklISvrfAqVyWkl',
      apple: 'https://music.apple.com/album/switched-up',
    },
    tracks: [
      { id: '1', title: 'Switched Up', duration: '2:45' },
    ],
  },
  {
    id: 'alki-11',
    title: 'Too Much',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2021-08-15'),
    coverArt: '/images/releases/too-much.jpg',
    description: 'Another massive hit with 1.1M+ streams. Raw emotion meets polished production.',
    links: {
      spotify: 'https://open.spotify.com/album/2zZxWozolia2eFyaa6Vvf9',
      apple: 'https://music.apple.com/album/too-much',
    },
    tracks: [
      { id: '1', title: 'Too Much', duration: '2:31' },
    ],
  },
  {
    id: 'alki-12',
    title: 'Planes',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2021-07-10'),
    coverArt: '/images/releases/planes.jpg',
    description: 'A fan favorite with nearly 400K streams. Wanderlust meets introspection.',
    links: {
      spotify: 'https://open.spotify.com/album/4S8NsL7dMsYqqshMVzbreE',
      apple: 'https://music.apple.com/album/planes',
    },
    tracks: [
      { id: '1', title: 'Planes', duration: '1:57' },
    ],
  },

  // === 2020 RELEASES ===
  {
    id: 'alki-13',
    title: 'Deceiving',
    artist: 'Alki',
    artistId: '1',
    type: 'single',
    releaseDate: new Date('2020-06-05'),
    coverArt: '/images/releases/deceiving.jpg',
    description: 'One of Alki\'s most emotionally raw tracks with 810K+ streams. Heartbreak distilled into art.',
    links: {
      spotify: 'https://open.spotify.com/album/10eFlyNRLA19cGvfCedVIn',
      apple: 'https://music.apple.com/album/deceiving',
    },
    tracks: [
      { id: '1', title: 'Deceiving', duration: '3:02' },
    ],
  },
]

// ========================================
// PARDYALONE RELEASES
// ========================================
const pardyaloneReleases: Release[] = [
  // === 2025 RELEASES ===
  {
    id: 'pardy-1',
    title: 'It Was Always Me',
    artist: 'Pardyalone',
    artistId: '2',
    type: 'album',
    releaseDate: new Date('2025-01-15'),
    coverArt: '/images/releases/pardy-it-was-always-me.jpg',
    description: 'Pardyalone\'s latest project - a deeply personal exploration of self-discovery and accountability.',
    links: {
      spotify: 'https://open.spotify.com/album/27RfE5tG1ZgjGzsx5SF7vV',
      apple: 'https://music.apple.com/album/it-was-always-me',
    },
    tracks: [
      { id: '1', title: 'It Was Always Me', duration: '3:15' },
    ],
  },
  {
    id: 'pardy-2',
    title: 'Pray For The Rain',
    artist: 'Pardyalone',
    artistId: '2',
    type: 'single',
    releaseDate: new Date('2025-01-10'),
    coverArt: '/images/releases/pardy-pray-for-the-rain.jpg',
    description: 'An atmospheric track about hope and renewal with 942K+ streams.',
    links: {
      spotify: 'https://open.spotify.com/album/6NribWUAe9ZhHogY2EQGl3',
    },
    tracks: [
      { id: '1', title: 'Pray For The Rain', duration: '3:08' },
    ],
  },
  {
    id: 'pardy-3',
    title: 'same nights',
    artist: 'Pardyalone',
    artistId: '2',
    type: 'single',
    releaseDate: new Date('2025-01-05'),
    coverArt: '/images/releases/pardy-same-nights.jpg',
    description: 'Late night reflections on repetition and longing.',
    links: {
      spotify: 'https://open.spotify.com/album/6j7niy39E4BLziHZ9alXFb',
    },
    tracks: [
      { id: '1', title: 'same nights', duration: '2:52' },
    ],
  },
  {
    id: 'pardy-4',
    title: 'Just A Little',
    artist: 'Pardyalone',
    artistId: '2',
    type: 'single',
    releaseDate: new Date('2025-01-01'),
    coverArt: '/images/releases/pardy-just-a-little.jpg',
    description: 'A gentle plea wrapped in melodic production.',
    links: {
      spotify: 'https://open.spotify.com/album/4S6DdB9m8itCOTRxic65ZS',
    },
    tracks: [
      { id: '1', title: 'Just A Little', duration: '2:45' },
    ],
  },
  {
    id: 'pardy-5',
    title: 'Katie\'s Confession',
    artist: 'Pardyalone',
    artistId: '2',
    type: 'single',
    releaseDate: new Date('2024-12-28'),
    coverArt: '/images/releases/pardy-katies-confession.jpg',
    description: 'Storytelling at its finest - a narrative-driven track.',
    links: {
      spotify: 'https://open.spotify.com/album/45ZYkEqNoiRBYN2B3XcP9d',
    },
    tracks: [
      { id: '1', title: 'Katie\'s Confession', duration: '3:22' },
    ],
  },
  {
    id: 'pardy-6',
    title: 'NO BETTER TIME THAN THIS',
    artist: 'Pardyalone',
    artistId: '2',
    type: 'single',
    releaseDate: new Date('2024-12-20'),
    coverArt: '/images/releases/pardy-no-better-time.jpg',
    description: 'A motivational anthem about seizing the moment.',
    links: {
      spotify: 'https://open.spotify.com/album/75Jav2Mjr6U8k6uQAt1X1d',
    },
    tracks: [
      { id: '1', title: 'NO BETTER TIME THAN THIS', duration: '2:58' },
    ],
  },
  {
    id: 'pardy-7',
    title: 'FUHLK MUSIC VOL. 2',
    artist: 'Pardyalone',
    artistId: '2',
    type: 'ep',
    releaseDate: new Date('2024-12-15'),
    coverArt: '/images/releases/pardy-fuhlk-vol2.jpg',
    description: 'The second installment of the FUHLK series - Fucked Up Heartbroke Lost Kids.',
    links: {
      spotify: 'https://open.spotify.com/album/0ezGg5LT2JtnH7QLGD0iAq',
    },
    tracks: [
      { id: '1', title: 'FUHLK MUSIC VOL. 2', duration: '3:05' },
    ],
  },
  {
    id: 'pardy-8',
    title: 'Last Time',
    artist: 'Pardyalone',
    artistId: '2',
    type: 'single',
    releaseDate: new Date('2024-12-10'),
    coverArt: '/images/releases/pardy-last-time.jpg',
    description: 'A bittersweet farewell track.',
    links: {
      spotify: 'https://open.spotify.com/album/62Lbmb161HsrNYHyxF0dIp',
    },
    tracks: [
      { id: '1', title: 'Last Time', duration: '3:12' },
    ],
  },

  // === 2024 RELEASES ===
  {
    id: 'pardy-9',
    title: 'ANOTHER DRUG',
    artist: 'Pardyalone',
    artistId: '2',
    type: 'album',
    releaseDate: new Date('2024-10-01'),
    coverArt: '/images/releases/pardy-another-drug.jpg',
    description: 'A powerful album exploring addiction, love, and escape. Features the hit title track with 9.2M+ streams.',
    links: {
      spotify: 'https://open.spotify.com/album/2oLiVzLw1EgMGH0htt9nTB',
      apple: 'https://music.apple.com/album/another-drug',
    },
    tracks: [
      { id: '1', title: 'ANOTHER DRUG', duration: '3:18' },
    ],
  },
  {
    id: 'pardy-10',
    title: 'Alone In A Dive Bar',
    artist: 'Pardyalone',
    artistId: '2',
    type: 'album',
    releaseDate: new Date('2024-08-01'),
    coverArt: '/images/releases/pardy-dive-bar.jpg',
    description: 'An all-acoustic project that strips everything back to raw emotion and storytelling. A departure that showcases Pardyalone\'s versatility and songwriting depth.',
    links: {
      spotify: 'https://open.spotify.com/album/0cqXBqBKxsVCdtUfS1Sn4h',
      apple: 'https://music.apple.com/album/alone-in-a-dive-bar',
    },
    tracks: [
      { id: '1', title: 'Alone In A Dive Bar', duration: '35:00' },
    ],
  },
  {
    id: 'pardy-11',
    title: 'NOT AGAIN',
    artist: 'Pardyalone',
    artistId: '2',
    type: 'album',
    releaseDate: new Date('2024-06-01'),
    coverArt: '/images/releases/pardy-not-again.jpg',
    description: 'A project about breaking cycles and patterns.',
    links: {
      spotify: 'https://open.spotify.com/album/3T5gWUkNXCrhPtx1qpdgBJ',
    },
    tracks: [
      { id: '1', title: 'NOT AGAIN', duration: '2:55' },
    ],
  },

  // === 2023 RELEASES ===
  {
    id: 'pardy-12',
    title: 'I Left You In Minnesota (Deluxe)',
    artist: 'Pardyalone',
    artistId: '2',
    type: 'album',
    releaseDate: new Date('2023-07-26'),
    coverArt: '/images/releases/pardy-minnesota.jpg',
    description: 'Pardyalone\'s debut album - a deeply personal journey exploring pain, heartbreak, and mental health. Features the smash hit "Not a Home" (26M+ streams) and collaborations with Travis Barker and MOD SUN. Recorded under BMG Rights Management.\n\n"I Left You In Minnesota was inspired by the feelings, emotions, people, and the environment I left once I moved from Minnesota to California. This was and has been the biggest change in my life." - Pardyalone',
    links: {
      spotify: 'https://open.spotify.com/album/3R8vIdSPRYSXjWiLV516V1',
      apple: 'https://music.apple.com/us/album/i-left-you-in-minnesota/1696921118',
    },
    tracks: [
      { id: '1', title: 'To My Father', duration: '2:45' },
      { id: '2', title: 'Not a Home', duration: '2:49' },
      { id: '3', title: 'My Bad (Sucks 2 Be You)', duration: '2:38' },
      { id: '4', title: 'She Likes My Tattoos', duration: '2:44' },
      { id: '5', title: 'I\'m The Dumb One', duration: '2:52' },
      { id: '6', title: 'Alone (feat. Travis Barker)', duration: '3:05' },
      { id: '7', title: 'Why9X', duration: '2:35' },
      { id: '8', title: 'Can\'t Stop The Rain', duration: '2:48' },
      { id: '9', title: 'A Place For Us', duration: '3:02' },
      { id: '10', title: 'Read Your Mind', duration: '2:55' },
      { id: '11', title: 'These Days', duration: '2:42' },
      { id: '12', title: 'Still The Dumb One (feat. MOD SUN)', duration: '3:15' },
      { id: '13', title: 'You\'re Always Coming Back', duration: '3:20' },
    ],
  },

  // === 2021 RELEASES ===
  {
    id: 'pardy-13',
    title: 'Sincerely, Fuck You',
    artist: 'Pardyalone',
    artistId: '2',
    type: 'album',
    releaseDate: new Date('2021-05-01'),
    coverArt: '/images/releases/pardy-sincerely.jpg',
    description: 'A raw, unapologetic release that put Pardyalone on the map. The title track has amassed over 14 million streams, establishing his signature blend of vulnerability and defiance.',
    links: {
      spotify: 'https://open.spotify.com/album/4HTK3MYYSK6BTwkCfKMKa7',
    },
    tracks: [
      { id: '1', title: 'Sincerely, Fuck You', duration: '2:58' },
    ],
  },

  // === 2020 RELEASES ===
  {
    id: 'pardy-14',
    title: 'Partyalone',
    artist: 'Pardyalone',
    artistId: '2',
    type: 'album',
    releaseDate: new Date('2020-02-27'),
    coverArt: '/images/releases/pardy-partyalone.jpg',
    description: 'The album that started it all. 10 tracks of raw emotion recorded in the early days, laying the foundation for everything to come.',
    links: {
      spotify: 'https://open.spotify.com/album/07LyhUtwaGNquOGT7rzptA',
    },
    tracks: [
      { id: '1', title: 'Partyalone', duration: '30:00' },
    ],
  },
]

// ========================================
// COMBINED RELEASES (sorted by release date, newest first)
// ========================================
export const mockReleases: Release[] = [
  ...alkiReleases,
  ...pardyaloneReleases,
].sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime())

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
    image: '/images/team/IMG_2768.png',
  },
  {
    id: '2',
    title: 'Pardyalone Releases "It Was Always Me"',
    slug: 'pardyalone-it-was-always-me',
    excerpt: 'Pardyalone\'s latest album showcases his evolution as an artist with deeply personal tracks about self-discovery.',
    content: 'Full article content placeholder...',
    publishedAt: new Date('2025-01-15'),
    author: 'HLPFL Team',
    category: 'Releases',
    image: '/images/releases/pardy-it-was-always-me.jpg',
  },
  {
    id: '3',
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
    image: '/images/team/james-rockel.webp',
    socials: {
      linkedin: '#',
      email: 'founder@hlpfl.org',
    },
  },
  {
    id: '2',
    name: 'Alki',
    role: 'Co-Founder & Signed Artist',
    bio: 'Boundary-pushing artist creating the future of alternative music. As HLPFL\'s first signed artist and co-founder, Alki embodies our revolutionary artist-first philosophy. With a unique blend of punk, pop, and rap, Alki is proving that independent artists can thrive with the right partnership. Nearly 46,000 monthly listeners and millions of streams.',
    image: '/images/team/alki.webp',
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
    image: '/images/team/noah-rank.webp',
    socials: {
      linkedin: '#',
      email: 'noah@hlpfl.org',
    },
  },
]
