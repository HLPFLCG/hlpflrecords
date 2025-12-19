# HLPFL Records Website Editing Guide

## Table of Contents
1. [Quick Start](#quick-start)
2. [File Structure](#file-structure)
3. [Common Editing Tasks](#common-editing-tasks)
4. [Deployment](#deployment)
5. [Troubleshooting](#troubleshooting)

---

## Quick Start

### Prerequisites
- Node.js 20.x or higher installed
- Git installed
- Text editor (VS Code recommended)

### Getting Started
```bash
# Clone the repository
git clone https://github.com/HLPFLCG/hlpflrecords.git
cd hlpflrecords

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

---

## File Structure

```
hlpflrecords/
├── src/
│   ├── app/                    # Pages
│   │   ├── page.tsx           # Home page
│   │   ├── about/page.tsx     # About page
│   │   ├── artists/page.tsx   # Artists page
│   │   ├── releases/page.tsx  # Releases page
│   │   └── contact/page.tsx   # Contact page
│   ├── components/            # Reusable components
│   │   ├── sections/          # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── FeaturedArtistsSection.tsx
│   │   └── ui/                # UI components
│   ├── data/
│   │   └── mockData.ts        # ⭐ MAIN DATA FILE - Edit this!
│   └── types/
│       └── index.ts           # TypeScript types
├── public/
│   └── images/                # Image files
│       ├── team/              # Team photos
│       └── releases/          # Album artwork
└── package.json               # Dependencies
```

---

## Common Editing Tasks

### 1. Adding a New Release

**File to edit:** `src/data/mockData.ts`

**Location:** Find the `mockReleases` array

**Example:**
```typescript
{
  id: '11',  // Increment the ID
  title: 'New Song Title',
  artist: 'Alki',
  artistId: '1',
  type: 'single',  // or 'album' or 'ep'
  releaseDate: new Date('2025-02-01'),  // Release date
  coverArt: '/images/releases/new-song.jpg',  // Add image to public/images/releases/
  description: 'Description of the new release',
  links: {
    spotify: 'https://open.spotify.com/album/YOUR_ALBUM_ID',
    apple: 'https://music.apple.com/album/YOUR_ALBUM_ID',
    youtube: 'https://youtube.com/watch?v=YOUR_VIDEO_ID',
  },
  tracks: [
    { id: '1', title: 'New Song Title', duration: '3:45' },
  ],
}
```

**Steps:**
1. Open `src/data/mockData.ts`
2. Find the `mockReleases` array
3. Copy an existing release entry
4. Paste it at the top of the array (for newest releases first)
5. Update all fields with new information
6. Save the file
7. Refresh your browser to see changes

---

### 2. Updating Artist Information

**File to edit:** `src/data/mockData.ts`

**Location:** Find the `mockArtists` array

**What you can change:**
- `name`: Artist name
- `bio`: Artist biography
- `genre`: Array of genres (e.g., `['Punk', 'Pop', 'Rap']`)
- `image`: Path to artist photo
- `socials`: Social media links

**Example:**
```typescript
{
  id: '1',
  name: 'Alki',
  slug: 'alki',
  bio: 'Updated biography text here...',
  genre: ['Punk', 'Pop', 'Rap'],
  image: '/images/team/alki.jpg',
  socials: {
    spotify: 'https://open.spotify.com/artist/1Jof1vMpSF5pIWUvG9cizl',
    instagram: 'https://www.instagram.com/alkiotis',
    website: 'https://alki.info',
    twitter: 'https://twitter.com/alkiotis',
  },
}
```

---

### 3. Adding a Team Member

**File to edit:** `src/data/mockData.ts`

**Location:** Find the `mockTeam` array

**Example:**
```typescript
{
  id: '4',  // Increment the ID
  name: 'New Team Member',
  role: 'Job Title',
  bio: 'Brief biography of the team member...',
  image: '/images/team/new-member.jpg',  // Add photo to public/images/team/
  socials: {
    linkedin: 'https://linkedin.com/in/username',
    email: 'email@hlpfl.org',
  },
}
```

---

### 4. Updating Statistics

**Files to edit:**
- `src/components/sections/AboutSection.tsx` (Home page stats)
- `src/app/about/page.tsx` (About page stats)

**Home Page Stats Location:**
Look for this section in `AboutSection.tsx`:
```typescript
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
  <div className="text-center">
    <div className="text-3xl font-bold text-gold mb-1">1</div>
    <div className="text-sm text-gray-400">Artists</div>
  </div>
  // ... more stats
</div>
```

**About Page Stats Location:**
Look for this section in `about/page.tsx`:
```typescript
const stats = [
  { number: '1', label: 'Artists' },
  { number: '10+', label: 'Releases' },
  { number: '5m+', label: 'Streams' },
  { number: '6', label: 'Years' }
]
```

**Important:** Keep both pages in sync!

---

### 5. Adding Images

**Steps:**
1. Prepare your image (recommended: JPG or PNG, optimized for web)
2. Place image in appropriate folder:
   - Team photos: `public/images/team/`
   - Album artwork: `public/images/releases/`
   - News images: `public/images/news/`
3. Reference in code using path: `/images/folder/filename.jpg`

**Image Guidelines:**
- Team photos: 800x800px, square format
- Album artwork: 1000x1000px, square format
- Optimize images before uploading (use tools like TinyPNG)
- Use descriptive filenames (e.g., `alki-switched-up.jpg`)

---

### 6. Updating Text Content

**Home Page:**
- File: `src/app/page.tsx`
- Components: `HeroSection.tsx`, `AboutSection.tsx`, `FeaturedArtistsSection.tsx`

**About Page:**
- File: `src/app/about/page.tsx`
- Look for text within JSX (between `<p>` tags or as strings)

**Example:**
```typescript
<p className="text-xl text-gray-300">
  Your new text content here...
</p>
```

---

## Deployment

### Option 1: Cloudflare Pages (Current Setup)

**Automatic Deployment:**
1. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
2. Cloudflare Pages automatically deploys from the `main` branch
3. Wait 2-3 minutes for deployment to complete
4. Visit your site to see changes

**Manual Deployment:**
1. Build the site:
   ```bash
   npm run build
   ```
2. Deploy the `out` folder to Cloudflare Pages

### Option 2: Vercel

1. Connect your GitHub repository to Vercel
2. Vercel automatically deploys on every push to `main`
3. Get instant preview URLs for pull requests

### Option 3: Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
3. Automatic deployments on push

---

## Troubleshooting

### Common Issues

**1. "Module not found" error**
- Solution: Run `npm install` to install dependencies

**2. Changes not showing up**
- Solution: Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Or clear browser cache

**3. Build fails**
- Check for syntax errors in your code
- Ensure all imports are correct
- Run `npm run build` locally to see detailed errors

**4. Images not loading**
- Verify image path is correct (starts with `/images/`)
- Check that image file exists in `public/images/`
- Ensure filename matches exactly (case-sensitive)

**5. TypeScript errors**
- Make sure all required fields are filled in
- Check that data types match (strings, numbers, dates)
- Refer to `src/types/index.ts` for type definitions

---

## Best Practices

### 1. Always Test Locally First
```bash
npm run dev
# Test your changes at http://localhost:3000
```

### 2. Use Descriptive Commit Messages
```bash
git commit -m "Add new single 'Song Title' to releases"
git commit -m "Update Alki bio with latest achievements"
git commit -m "Fix broken Spotify link on releases page"
```

### 3. Keep Backups
- Before major changes, create a new branch:
  ```bash
  git checkout -b feature/my-changes
  ```
- Test thoroughly before merging to `main`

### 4. Maintain Consistency
- Keep stats synchronized across all pages
- Use consistent formatting for dates
- Follow existing naming conventions for files

### 5. Optimize Performance
- Compress images before uploading
- Remove unused code and files
- Test site speed regularly

---

## Quick Reference

### File Locations Cheat Sheet

| What to Edit | File Location |
|--------------|---------------|
| Releases | `src/data/mockData.ts` → `mockReleases` |
| Artists | `src/data/mockData.ts` → `mockArtists` |
| Team Members | `src/data/mockData.ts` → `mockTeam` |
| Home Page Stats | `src/components/sections/AboutSection.tsx` |
| About Page Stats | `src/app/about/page.tsx` → `stats` array |
| Home Page Content | `src/app/page.tsx` |
| About Page Content | `src/app/about/page.tsx` |
| Contact Info | `src/app/contact/page.tsx` |

### Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint

# Install dependencies
npm install

# Update dependencies
npm update

# Commit changes
git add .
git commit -m "Your message"
git push origin main
```

---

## Getting Help

### Resources
- **Next.js Documentation:** https://nextjs.org/docs
- **React Documentation:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs

### Support
- **Email:** contact@hlpfl.org
- **GitHub Issues:** https://github.com/HLPFLCG/hlpflrecords/issues

---

## Version History

- **v2.0** (December 2024) - Complete redesign with Alki's full discography
- **v1.0** (2019) - Initial launch

---

*Last Updated: December 19, 2024*