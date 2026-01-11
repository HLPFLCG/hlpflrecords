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
    bio: 'Priv is an emerging artist bringing a fresh perspective to the HLPFL roster. With a unique sound that blends innovation and authenticity, Priv represents the next generation of independent music. As part of the HLPFL family, Priv maintains complete creative control and ownership while accessing the tools and support needed to build a sustainable music career.\n\n"I\'ve been making music my whole life, but I\'ve never felt truly free until now. HLPFL gets it. They understand that the best art comes from artists who aren\'t afraid to experiment, fail, and try again. No pressure to fit a mold—just pure creation." - Priv\n\nStay tuned for upcoming releases and performances from this exciting new talent.',
    genre: ['Alternative', 'Indie', 'Experimental'],
    image: '',
    socials: {
      spotify: '',
      instagram: '',
      twitter: '',
    },
  },
  {
    id: '4',
    name: 'Writ3rs Block',
    slug: 'writ3rs-block',
    bio: 'Writ3rs Block is a music collective pushing the boundaries of alternative and experimental sounds. Their 2023 release "Too Much To Dream (The Chocolate Shop Demos)" showcases their unique blend of psychedelic influences, indie sensibilities, and innovative production.\n\nThe group\'s collaborative approach brings together diverse talents including songwriters Blane Conant, Olivia Zoe Johnson, and Brandon Skeen. With tracks like "Love (That\'s What They Call It)," "Garden," and "Lonesome Dove," Writ3rs Block creates atmospheric soundscapes that transport listeners to new sonic territories.\n\nSigned to HLPFL under the revolutionary 50/50 partnership model, Writ3rs Block maintains complete creative control while accessing professional support for distribution and promotion.',
    genre: ['Alternative', 'Experimental', 'Indie Rock', 'Psychedelic'],
    image: '',
    socials: {
      spotify: 'https://open.spotify.com/artist/4NU33b6SZRD7mGTUKFIicG',
      instagram: 'https://www.instagram.com/writ3rsblockmusic',
    },
  },
  {
    id: '5',
    name: 'Adam Rodway',
    slug: 'adam-rodway',
    bio: 'Adam Rodway is a rising Pop/Rock artist from Toronto, known for his introspective yet catchy sound that resonates with anyone who\'s faced the trials of a breakup. Recently, Adam collaborated with producer Matt Snell (Dua Lipa, The Glorious Sons, Dermot Kennedy) and Danny Lopez (Harm & Ease), adding a polished intensity to his raw style.\n\nFeatured on Hockey Night In Canada with his single "Too Long To Type," Adam has quickly become an iHeartRadio Future Star. His catalog includes popular tracks like "Tarantino," "Too Late," "The Garden Song," and "Hold Just Anyone."\n\nWith a sound that blends pop sensibility with rock edge, Adam Rodway brings emotional honesty and infectious melodies to the HLPFL roster.',
    genre: ['Pop', 'Rock', 'Indie Pop'],
    image: '',
    socials: {
      spotify: 'https://open.spotify.com/artist/0a8lHob1Gah0QmmzrWZoH5',
      instagram: 'https://www.instagram.com/adam.rodway',
      apple: 'https://music.apple.com/ca/artist/adam-rodway/1651612685',
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
    title: 'Alki Drops New Single "221" - A Raw Expression of Punk Rage',
    slug: 'alki-221-release',
    excerpt: 'Alki returns with his most aggressive track yet, "221" - an angsty rap record that pulls no punches. The 1:49 explosive track showcases the artist\'s signature blend of punk energy and raw emotion.',
    content: `
# Alki Drops New Single "221" - A Raw Expression of Punk Rage

**January 17, 2025** - Independent artist Alki has released his latest single "221," a blistering 1:49 track that exemplifies his unique fusion of punk rock energy and modern rap delivery.

## The Track

"221" is a raw, unfiltered expression of frustration and anger. The track's aggressive production and Alki's fierce vocal delivery create an intense listening experience that's both cathartic and confrontational. At just under two minutes, the song packs a powerful punch without overstaying its welcome.

"This track is pure emotion," Alki explains. "Sometimes you just need to scream into the void, and '221' is that scream. It's for everyone who's felt misunderstood, betrayed, or just fed up with the BS."

## Building Momentum

With nearly 46,000 monthly listeners on Spotify and a catalog that includes hits like "Switched Up" (3M+ streams), "Too Much" (1.1M+ streams), and "Deceiving" (810K+ streams), Alki continues to build a devoted following through his relentlessly honest approach to music.

As Co-Founder of HLPFL Records, Alki represents the label's core philosophy: artist ownership, creative freedom, and authentic connection with fans. The independent release of "221" demonstrates how artists can maintain complete control while still reaching massive audiences.

## What's Next

"221" is available now on all streaming platforms. With over 300 unreleased tracks in the vault, fans can expect much more from Alki throughout 2025.

**Stream "221":**
- [Spotify](https://open.spotify.com/album/468FaHLWX75g0RJdoEUABD)
- [Apple Music](https://music.apple.com/album/221-single/1853361772)

**Follow Alki:**
- Instagram: [@alkiotis](https://www.instagram.com/alkiotis)
- Spotify: [Alki](https://open.spotify.com/artist/1Jof1vMpSF5pIWUvG9cizl)
- Website: [alki.info](https://alki.info)
    `,
    publishedAt: new Date('2025-01-17'),
    author: 'HLPFL Press Team',
    category: 'Releases',
    image: '/images/releases/221.png',
  },
  {
    id: '2',
    title: 'Pardyalone Releases "It Was Always Me" - A Journey of Self-Discovery and Accountability',
    slug: 'pardyalone-it-was-always-me',
    excerpt: 'With 434K+ monthly listeners and 60M+ total streams, Pardyalone continues his evolution as one of alternative hip-hop\'s most authentic voices with this deeply personal new album about taking responsibility and finding yourself.',
    content: `
# Pardyalone Releases "It Was Always Me" - A Journey of Self-Discovery and Accountability

**January 15, 2025** - Alternative hip-hop artist Pardyalone has released his latest album "It Was Always Me," a deeply introspective project that showcases his continued evolution as one of the genre's most compelling and authentic voices.

## The Album

"It Was Always Me" marks a significant moment in Pardyalone's artistic journey. Following the massive success of "I Left You In Minnesota" (featuring the 26M+ stream hit "Not a Home") and recent projects like "ANOTHER DRUG" and "Alone In A Dive Bar," this new album finds the Minnesota-born, California-based artist taking a hard look inward.

The project is about accountability, self-discovery, and recognizing patterns in your own behavior. It's a mature, honest exploration of personal growth that only someone who's done the work can deliver.

"This album is about owning my shit," Pardyalone explains. "For so long, I pointed fingers outward. But growth means realizing the common denominator in all your problems is you. It was always me. That realization is painful, but it's also liberating."

## The Evolution

Since breaking through with "Not a Home" (26M+ streams) and "Sincerely, Fuck You" (14M+ streams), Pardyalone has built a devoted following of 434,000+ monthly listeners across platforms. His music has resonated because of its unflinching honesty about pain, heartbreak, and mental health.

"It Was Always Me" continues that tradition while showing artistic maturity. The production is nuanced, the lyrics more reflective, and the overall mood contemplative without losing the emotional intensity fans expect.

## The HLPFL Partnership

Signed to HLPFL Records under the revolutionary 50/50 partnership model, Pardyalone maintains 100% ownership of his masters while accessing comprehensive support for distribution, marketing, and career development.

"Pardyalone represents everything we believe in at HLPFL," says James Rockel, Founder & CEO. "Complete creative freedom, honest storytelling, and direct connection with fans. He's built a sustainable career on his own terms, and 'It Was Always Me' shows his artistic growth."

## The Numbers

**Pardyalone's Career Stats:**
- **434,500+ monthly Spotify listeners**
- **60,000,000+ total streams** across platforms
- **194,000+ Instagram followers**
- **Breakthrough hits:** "Not a Home" (26M+), "Sincerely, Fuck You" (14M+), "ANOTHER DRUG" (9.2M+)

## What Critics Are Saying

"Pardyalone continues to prove that vulnerability is strength, and authenticity resonates louder than polish."

"In an era of manufactured personas, Pardyalone's genuine approach to mental health and heartbreak stands out."

## The Mission

Music became salvation for Pardyalone after his parents' divorce and personal heartbreak. His mission has always been clear:

"To heal, help and inspire. That's why I'm here." - Pardyalone

With "It Was Always Me," that mission continues with added self-awareness and artistic maturity.

## Stream Now

"It Was Always Me" is available on all streaming platforms:
- [Spotify](https://open.spotify.com/album/27RfE5tG1ZgjGzsx5SF7vV)
- [Apple Music](https://music.apple.com/album/it-was-always-me)

**Follow Pardyalone:**
- Instagram: [@pardyalone](https://www.instagram.com/pardyalone)
- Website: [pardyalone.com](https://pardyalone.com)
- Spotify: [Pardyalone Artist Page](https://open.spotify.com/artist/6M4q5QWjmpjuPAi7LVFEFG)

---

*About HLPFL Records: An independent record label and artist management platform that protects artists from exploitation. Founded on the principle of "Tools, Not Contracts," HLPFL provides comprehensive support while ensuring artists maintain 100% ownership of their work.*
    `,
    publishedAt: new Date('2025-01-15'),
    author: 'HLPFL Press Team',
    category: 'Releases',
    image: '/images/releases/pardy-it-was-always-me.jpg',
  },
  {
    id: '3',
    title: 'Alki Surpasses 3 Million Streams on "Switched Up" - An Independent Success Story',
    slug: 'switched-up-milestone',
    excerpt: 'Celebrating a major milestone as Alki\'s breakout hit continues to resonate with fans worldwide, proving independent artists can compete in the streaming era.',
    content: `
# Alki Surpasses 3 Million Streams on "Switched Up" - An Independent Success Story

**December 15, 2024** - Independent artist Alki has officially crossed 3 million streams on his breakout single "Switched Up," a significant milestone that demonstrates the power of authentic artistry in the modern music landscape.

## The Breakthrough

Released in September 2021, "Switched Up" became Alki's defining track, resonating with listeners through its raw honesty and infectious melody. The song's success came organically, without traditional label push or radio play—a testament to the changing dynamics of music discovery in the streaming age.

"When I wrote 'Switched Up,' I was going through a rough time dealing with people who turned their backs on me," Alki reflects. "I never expected it to connect with so many people, but I think everyone's experienced that feeling of betrayal. The song just hit different."

## The Numbers Tell a Story

- **3,000,000+ streams** on Spotify alone
- **45,900+ monthly listeners** across platforms
- **Zero major label support** - completely independent
- **100% artist ownership** - Alki owns his masters

## The HLPFL Model

As Co-Founder of HLPFL Records alongside James Rockel, Alki represents a new paradigm in the music industry. The label's revolutionary 50/50 partnership model ensures artists maintain ownership while receiving comprehensive support.

"Too many artists get screwed over by traditional deals," says James Rockel, HLPFL Founder & CEO. "Alki's success with 'Switched Up' proves you don't need to sell your soul to make it in this industry. You need great music and smart partnerships."

## What This Means for Independent Artists

Alki's milestone is more than just a personal achievement—it's a blueprint for independent artists everywhere:

1. **Ownership Matters**: Alki earns from every stream because he owns his masters
2. **Authenticity Wins**: No focus groups or A&R committees—just honest music
3. **Direct Connection**: Building relationships with fans through social media and platforms
4. **Long-Term Thinking**: Success doesn't happen overnight, but it's sustainable

## The Catalog Continues to Grow

While "Switched Up" remains Alki's most-streamed track, his catalog continues to expand:
- "Too Much" - 1.1M+ streams
- "Deceiving" - 810K+ streams
- "Planes" - 400K+ streams
- "Attached" - 249K+ streams

With 37+ released tracks and over 300 unreleased songs ready to drop, Alki's journey is just beginning.

## Streaming Now

Experience the track that started it all:
- [Stream "Switched Up" on Spotify](https://open.spotify.com/album/4EF7LaxKklISvrfAqVyWkl)
- [Apple Music](https://music.apple.com/album/switched-up)

**Follow Alki:**
- Instagram: [@alkiotis](https://www.instagram.com/alkiotis)
- Twitter: [@alkiotis](https://twitter.com/alkiotis)
- Spotify: [Alki Artist Page](https://open.spotify.com/artist/1Jof1vMpSF5pIWUvG9cizl)

---

*About HLPFL Records: An independent record label and artist management platform that protects artists from exploitation. Founded on the principle of "Tools, Not Contracts," HLPFL provides comprehensive support while ensuring artists maintain 100% ownership of their work.*
    `,
    publishedAt: new Date('2024-12-15'),
    author: 'HLPFL Press Team',
    category: 'News',
    image: '/images/releases/switched-up.jpg',
  },
  {
    id: '4',
    title: 'HLPFL Records Welcomes Priv to the Roster - The Future of Alternative Music',
    slug: 'priv-joins-hlpfl',
    excerpt: 'Independent label HLPFL Records announces the addition of innovative artist Priv, bringing a fresh experimental sound to the artist-first platform.',
    content: `
# HLPFL Records Welcomes Priv to the Roster - The Future of Alternative Music

**January 8, 2026** - HLPFL Records is thrilled to announce the newest addition to our artist-first roster: **Priv**, an emerging talent pushing the boundaries of alternative and experimental music.

## A New Voice in Independent Music

Priv represents the next generation of artists who refuse to be confined by genre labels or industry conventions. With a sound that seamlessly blends alternative, indie, and experimental elements, Priv is carving out a unique space in the modern music landscape.

"Priv embodies everything HLPFL stands for," says James Rockel, Founder & CEO of HLPFL Records. "Complete creative freedom, no compromises, and a commitment to authenticity. We're not here to mold artists into what we think will sell—we're here to amplify their true vision."

## The HLPFL Difference

Unlike traditional record deals that strip artists of ownership and creative control, Priv joins HLPFL under the label's revolutionary partnership model:

- **100% Artist Ownership** - Priv maintains complete ownership of all masters and rights
- **Full Creative Control** - No A&R interference or forced collaboration
- **Comprehensive Support** - Access to distribution, marketing, analytics, and career development tools
- **Fair Revenue Split** - Transparent 50/50 partnership on label services
- **No Traps, Just Tools** - Everything an independent artist needs to succeed

## What to Expect

While details about upcoming releases are being kept under wraps, Priv has been working intensively in the studio, developing a sound that's both deeply personal and universally resonant.

"I've been making music my whole life, but I've never felt truly free until now," Priv shares. "HLPFL gets it. They understand that the best art comes from artists who aren't afraid to experiment, fail, and try again. No pressure to fit a mold—just pure creation."

## The Growing HLPFL Family

Priv joins an impressive roster that includes:

- **Alki** (Co-Founder) - 46K+ monthly listeners, 3M+ streams on "Switched Up"
- **Pardyalone** - 436K+ monthly listeners, 60M+ total streams, breakthrough hit "Not a Home" (26M+ streams)

Together, these artists represent HLPFL's commitment to supporting diverse voices who prioritize artistic integrity over commercial compromise.

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

"The music industry has exploited artists for too long," Rockel continues. "We're building a different model—one where artists actually thrive, maintain control, and build sustainable careers. Priv is the perfect example of what's possible when you put artists first."

## Stay Tuned

Follow Priv's journey as they prepare to release new music and connect with fans worldwide.

**Follow HLPFL Records:**
- Website: [hlpfl.org](https://hlpfl.org)
- Instagram: [@hlpfl](https://instagram.com/hlpfl)
- Twitter: [@hlpfl](https://twitter.com/hlpfl)

**Join the Movement:**
- [Artist Portal](https://hlpfl.org/artist-portal)
- [Submit Your Music](https://hlpfl.org/submit-music)
- [Learn More](https://hlpfl.org/about)

---

*About HLPFL Records: An independent record label and artist management platform founded by James Rockel at age 18. HLPFL's mission is to protect artists from industry exploitation through transparent partnerships, comprehensive tools, and unwavering commitment to artist ownership. "Tools, Not Contracts."*
    `,
    publishedAt: new Date('2026-01-08'),
    author: 'HLPFL Press Team',
    category: 'News',
    image: '/images/team/alki.webp',
  },
  {
    id: '5',
    title: 'From Bedroom Producer to 46K Monthly Listeners: Inside Alki\'s Independent Rise',
    slug: 'alki-independent-success-story',
    excerpt: 'How Alki built a thriving music career without a traditional record deal, proving that artists don\'t need to sacrifice ownership for success.',
    content: `
# From Bedroom Producer to 46K Monthly Listeners: Inside Alki's Independent Rise

**January 5, 2026** - In an industry dominated by major labels and massive marketing budgets, Alkiviadis Halkiotis—known professionally as Alki—has carved his own path to success, building a devoted following of nearly 46,000 monthly Spotify listeners while maintaining 100% ownership of his music.

## The Journey

Born Alkiviadis Halkiotis, Alki didn't follow the traditional music industry playbook. No reality TV appearances. No major label showcases. No compromises.

"I started making music in my bedroom because I had things I needed to say," Alki recalls. "I never set out to 'make it' in the traditional sense. I just wanted to create honest music and connect with people who felt the same things I did."

That authenticity has resonated powerfully. With millions of streams across platforms and a catalog of 37+ released tracks (plus 300+ unreleased), Alki has proven that independent artists can compete—and thrive—in the streaming era.

## The Sound

Alki's music defies easy categorization. Blending punk energy, pop hooks, and raw rap delivery, he's created a sound that's uniquely his own.

**Top Tracks:**
- "Switched Up" - 3,000,000+ streams
- "Too Much" - 1,100,000+ streams
- "Deceiving" - 810,000+ streams
- "Planes" - 400,000+ streams

"I grew up listening to everything," Alki explains. "Why limit yourself to one genre? The best music comes from experimentation and honesty, not staying in your lane."

## The Business Model

Perhaps Alki's most significant achievement isn't musical—it's entrepreneurial. As Co-Founder of HLPFL Records alongside James Rockel, Alki has helped create a new model for artist partnerships.

**The HLPFL Philosophy:**
1. **Artists Keep Their Masters** - 100% ownership, always
2. **Transparent Revenue Sharing** - Fair 50/50 split on label services
3. **Comprehensive Tools** - Everything needed to build a career
4. **No Hidden Fees** - Complete transparency
5. **Artist-First Decision Making** - Artists drive the strategy

"James and I started HLPFL because we were tired of seeing talented artists get screwed over," Alki states. "Traditional record deals are designed to benefit the label, not the artist. We flipped that model completely."

## The Numbers Don't Lie

**Alki's Independent Success:**
- 45,900+ monthly Spotify listeners
- 37+ released tracks
- 300+ unreleased tracks ready to drop
- Millions of streams across platforms
- Zero label debt
- 100% master ownership
- Direct fan relationships
- Sustainable career trajectory

## The Strategy

How did Alki achieve this level of success independently? The strategy is surprisingly straightforward:

### 1. Consistent Output
"I don't wait for inspiration. I create constantly. Some tracks hit, some don't, but you have to keep releasing to find what resonates."

### 2. Authentic Connection
"Social media is powerful when you're real with people. I don't post curated BS. I share my actual life—the good, the bad, the messy."

### 3. Smart Partnerships
"HLPFL gives me access to distribution, marketing tools, and infrastructure without taking my ownership. That's the key."

### 4. Long-Term Thinking
"Success isn't viral moments. It's building a catalog that continues to earn and connect with people over years, not weeks."

## The Impact

Alki's success has implications beyond his own career. As independent artists increasingly question the value of traditional record deals, Alki serves as a case study in what's possible.

"You don't need a major label," he emphasizes. "You need great music, smart tools, and the willingness to work. Everything else is noise."

## What's Next

With over 300 unreleased tracks and a growing platform through HLPFL, Alki's trajectory is only pointing upward.

"I'm just getting started," he says. "The music industry tried to tell artists they needed labels to succeed. We're proving that's bullshit. Artists just need ownership, tools, and honesty."

## Listen Now

Experience Alki's music:
- [Spotify Artist Page](https://open.spotify.com/artist/1Jof1vMpSF5pIWUvG9cizl)
- [Latest Release "221"](https://open.spotify.com/album/468FaHLWX75g0RJdoEUABD)
- [Grouped Profile](https://app.grouped.com/everythingalki)

**Follow Alki:**
- Instagram: [@alkiotis](https://www.instagram.com/alkiotis)
- Twitter: [@alkiotis](https://twitter.com/alkiotis)
- Website: [alki.info](https://alki.info)

---

*This article is part of HLPFL Records' ongoing series highlighting independent artists who are redefining success in the modern music industry.*
    `,
    publishedAt: new Date('2026-01-05'),
    author: 'HLPFL Editorial Team',
    category: 'Features',
    image: '/images/team/alki.webp',
  },
  {
    id: '6',
    title: 'Pardyalone\'s "I Left You In Minnesota" Surpasses 26M Streams - A Debut Album That Defined a Generation',
    slug: 'pardyalone-i-left-you-in-minnesota',
    excerpt: 'Pardyalone\'s debut album "I Left You In Minnesota" has become a cultural phenomenon, with lead single "Not a Home" crossing 26 million streams and the album establishing Pardyalone as a voice for the heartbroken and misunderstood.',
    content: `
# Pardyalone's "I Left You In Minnesota" Surpasses 26M Streams - A Debut Album That Defined a Generation

**February 20, 2024** - Pardyalone's debut album "I Left You In Minnesota" has officially become a streaming phenomenon, with the lead single "Not a Home" surpassing 26 million streams on Spotify and the album resonating deeply with hundreds of thousands of listeners worldwide.

## The Breakthrough

Released as Pardyalone's first full-length project, "I Left You In Minnesota" arrived like a punch to the gut—raw, honest, and unapologetically emotional. The album chronicles heartbreak, betrayal, mental health struggles, and the painful process of moving on.

"Minnesota represents a state of mind, not just a place," Pardyalone explains. "It's that person, that relationship, that version of yourself you had to leave behind to survive. Everyone has their Minnesota."

That universal resonance has translated into extraordinary numbers:

**Album Stats:**
- **"Not a Home"** - 26,000,000+ streams (lead single)
- **"Sincerely, Fuck You"** - 14,000,000+ streams
- **Total Album Streams** - 40,000,000+ across all platforms
- **Monthly Listeners** - 434,500+ on Spotify
- **Fan Base** - 194,000+ Instagram followers

## The Sound

"I Left You In Minnesota" blends alternative hip-hop with emo and punk influences, creating a sound that's become Pardyalone's signature. Vulnerable lyrics delivered over melancholic melodies and hard-hitting beats create an emotional intensity that's rare in modern music.

The production is intentionally raw—no over-polished vocals, no mainstream radio compromises. Just honesty.

"I wasn't trying to make hits," Pardyalone reflects. "I was trying to survive. The fact that so many people connected with that pain? It saved me as much as it helped them."

## Not a Home: The Anthem

"Not a Home" has become more than a song—it's an anthem for anyone who's felt out of place, heartbroken, or lost. The track's viral success came organically through TikTok, YouTube, and word-of-mouth, with no traditional radio push.

**Why It Resonates:**
- Universal theme of feeling displaced and searching for belonging
- Raw vulnerability about mental health and heartbreak
- Honest portrayal of toxic relationships
- No pretense or manufactured emotion

## The HLPFL Difference

Signed to HLPFL Records under the revolutionary 50/50 partnership model, Pardyalone maintains 100% ownership of his masters—meaning every stream, every sale, every play directly benefits him.

"Traditional labels would've stripped Pardyalone of ownership and tried to sand down his edges," says James Rockel, HLPFL Founder & CEO. "We did the opposite. We amplified his authenticity and protected his rights. The results speak for themselves."

## The Impact

"I Left You In Minnesota" has become a case study in independent music success:

1. **No Major Label** - Completely independent distribution
2. **No Radio Play** - Organic growth through streaming and social media
3. **Full Ownership** - Pardyalone owns all masters and rights
4. **Direct Fan Connection** - Built through honesty, not marketing gimmicks
5. **Sustainable Career** - Long-term streaming revenue, not one-hit-wonder spikes

## What Fans Are Saying

The comments on "Not a Home" tell the real story:

*"This song saved my life when I had no one."*

*"I've never felt more understood by a song."*

*"Pardyalone puts into words what I can't say."*

*"This is the soundtrack to my heartbreak."*

## The Legacy

"I Left You In Minnesota" established Pardyalone as a generational voice for those struggling with mental health, heartbreak, and finding their place in the world. The album's success has paved the way for subsequent projects like "ANOTHER DRUG" and "It Was Always Me."

But more importantly, it proved that authenticity wins.

"Artists don't need to compromise to succeed," Pardyalone states. "You need to be honest, work hard, and find partners who believe in you. That's the formula."

## The Mission Continues

Music became salvation for Pardyalone after his parents' divorce and personal heartbreak. His mission remains clear:

**"To heal, help and inspire. That's why I'm here."** - Pardyalone

With over 60 million total streams across all platforms and a growing catalog of emotionally resonant music, Pardyalone continues to prove that independent artists can build massive, sustainable careers on their own terms.

## Stream Now

Experience the album that started it all:
- [Stream "I Left You In Minnesota" on Spotify](https://open.spotify.com/album/i-left-you-in-minnesota)
- [Apple Music](https://music.apple.com/album/i-left-you-in-minnesota)
- [Listen to "Not a Home"](https://open.spotify.com/track/not-a-home)

**Follow Pardyalone:**
- Instagram: [@pardyalone](https://www.instagram.com/pardyalone)
- Website: [pardyalone.com](https://pardyalone.com)
- Spotify: [Pardyalone Artist Page](https://open.spotify.com/artist/6M4q5QWjmpjuPAi7LVFEFG)

---

*About HLPFL Records: An independent record label and artist management platform that protects artists from exploitation. Founded on the principle of "Tools, Not Contracts," HLPFL provides comprehensive support while ensuring artists maintain 100% ownership of their work.*
    `,
    publishedAt: new Date('2024-02-20'),
    author: 'HLPFL Press Team',
    category: 'Releases',
    image: '/images/releases/pardy-i-left-you-in-minnesota.jpg',
  },
  {
    id: '7',
    title: 'Pardyalone Confronts Addiction on "ANOTHER DRUG" - 9.2M Streams and Counting',
    slug: 'pardyalone-another-drug',
    excerpt: 'Pardyalone\'s raw exploration of addiction, codependency, and toxic love resonates with millions as the title track from "ANOTHER DRUG" crosses 9.2 million streams.',
    content: `
# Pardyalone Confronts Addiction on "ANOTHER DRUG" - 9.2M Streams and Counting

**September 10, 2024** - Pardyalone has released "ANOTHER DRUG," a brutally honest exploration of addiction—not to substances, but to toxic relationships, codependency, and self-destructive patterns.

## The Concept

While many artists glamorize heartbreak, Pardyalone takes a different approach with "ANOTHER DRUG." This project examines how people can become addictions themselves—how we return to toxic situations, unhealthy relationships, and destructive patterns despite knowing better.

"Addiction isn't just about drugs or alcohol," Pardyalone explains. "It's about anything you can't quit even when it's destroying you. For me, that was toxic relationships. Going back to the same person, the same patterns, the same pain—like an addict chasing a high that's killing them."

That unflinching honesty has resonated powerfully, with the title track "ANOTHER DRUG" accumulating over 9.2 million streams and growing daily.

## The Sound

"ANOTHER DRUG" showcases Pardyalone's evolution as an artist. While maintaining the raw emotional intensity of "I Left You In Minnesota," the production is more refined, the songwriting more mature, and the themes more complex.

**Standout Tracks:**
- **"ANOTHER DRUG"** - 9,200,000+ streams (title track examining toxic love as addiction)
- Multiple deep cuts exploring codependency, withdrawal, and recovery
- Features darker production and more experimental sounds
- Brutally honest lyricism about mental health struggles

## The Deeper Message

Beyond the personal catharsis, "ANOTHER DRUG" carries an important message about recognizing unhealthy patterns:

"I wrote this album because I was tired of romanticizing toxic shit," Pardyalone states. "Social media makes dysfunction look aesthetic. I wanted to show the reality—how that 'love' you can't quit is actually destroying you."

The album explores:
- **Codependency** - Needing someone else to feel complete
- **Emotional Addiction** - Returning to what hurts you
- **Trauma Bonding** - Confusing intensity for connection
- **Self-Sabotage** - Why we destroy good things
- **Recovery** - Learning to break cycles

## The Numbers

Pardyalone's growth continues to be extraordinary:

**Career Stats (2024):**
- 434,500+ monthly Spotify listeners
- 60,000,000+ total streams across platforms
- 194,000+ Instagram followers
- Zero major label support
- 100% artist ownership

"ANOTHER DRUG" has contributed significantly to these numbers, proving that honest, vulnerable music about difficult subjects resonates with massive audiences.

## Critical Reception

While mainstream critics often overlook independent artists, fans and music journalists have taken notice:

*"Pardyalone doesn't just write about pain—he dissects it, understands it, and helps listeners do the same."*

*"In an era of manufactured vulnerability, Pardyalone's authenticity is radical."*

*"This isn't music to vibe to—it's music to heal to."*

## The HLPFL Partnership

Released through HLPFL Records' artist-first partnership model, "ANOTHER DRUG" represents everything the label stands for:

- **Full Creative Control** - No label interference on content or sound
- **100% Ownership** - Pardyalone owns all masters
- **Fair Revenue** - 50/50 split on label services, 100% on direct sales
- **Mental Health Support** - Resources for artists dealing with the subjects they write about
- **No Exploitation** - Transparent deals, no hidden clauses

"Artists shouldn't have to sacrifice ownership to share their truth," says James Rockel, HLPFL Founder & CEO. "Pardyalone's success proves that treating artists fairly isn't just ethical—it's good business."

## The Impact

"ANOTHER DRUG" is sparking conversations about topics many artists avoid:

- Mental health in the music industry
- Codependency and toxic relationships
- Addiction beyond substances
- The pressure to romanticize dysfunction for streams

Pardyalone's willingness to be vulnerable about these struggles has created a community of listeners who feel seen, understood, and less alone.

## Fan Response

The comments section tells the story:

*"This album is my therapy."*

*"Finally someone who gets it."*

*"Pardyalone writes what I'm too scared to say out loud."*

*"This isn't just music—it's survival."*

## The Mission

Music became salvation for Pardyalone after his parents' divorce and personal heartbreak. His mission has always been clear:

**"To heal, help and inspire. That's why I'm here."** - Pardyalone

"ANOTHER DRUG" takes that mission deeper, offering not just catharsis but understanding. It's music for people doing the hard work of breaking cycles, recognizing patterns, and choosing healing over familiar pain.

## What's Next

With "ANOTHER DRUG" continuing to gain streams and "It Was Always Me" on the horizon, Pardyalone shows no signs of slowing down.

"I have so much more to say," he reflects. "As long as people need honest music about real shit, I'll keep making it."

## Stream Now

Experience "ANOTHER DRUG":
- [Stream on Spotify](https://open.spotify.com/album/another-drug)
- [Apple Music](https://music.apple.com/album/another-drug)
- [Title Track "ANOTHER DRUG"](https://open.spotify.com/track/another-drug)

**Follow Pardyalone:**
- Instagram: [@pardyalone](https://www.instagram.com/pardyalone)
- Website: [pardyalone.com](https://pardyalone.com)
- Spotify: [Pardyalone Artist Page](https://open.spotify.com/artist/6M4q5QWjmpjuPAi7LVFEFG)

---

*About HLPFL Records: An independent record label and artist management platform founded by James Rockel at age 18. HLPFL's mission is to protect artists from industry exploitation through transparent partnerships, comprehensive tools, and unwavering commitment to artist ownership. "Tools, Not Contracts."*
    `,
    publishedAt: new Date('2024-09-10'),
    author: 'HLPFL Press Team',
    category: 'Releases',
    image: '/images/releases/pardy-another-drug.jpg',
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
