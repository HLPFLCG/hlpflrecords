# How to Edit HLPFL Records Website

## Quick Reference

This guide shows you how to edit common parts of the website without needing deep technical knowledge.

---

## Table of Contents
1. [Adding/Editing Blog Posts & News](#news-posts)
2. [Adding/Editing Music Releases](#releases)
3. [Updating Artist Information](#artists)
4. [Changing Site Content](#content)
5. [Updating Styles & Colors](#styling)
6. [Adding External Project Links](#external-projects)
7. [Deploying Changes](#deployment)

---

## <a name="news-posts"></a>1. Adding/Editing Blog Posts & News

**File**: `src/data/mockData.ts`

### Add a New Blog Post:
```typescript
export const mockNews = [
  {
    id: '3',  // Increment this number
    slug: 'your-post-slug',  // URL-friendly name
    title: 'Your Post Title',
    excerpt: 'A brief summary of your post...',
    content: 'Full content of your blog post goes here...',
    author: 'Your Name',
    publishedAt: '2026-01-06',  // Today's date
    category: 'news',  // or 'announcement', 'release', etc.
    image: '/images/your-image.jpg',  // Optional
    tags: ['tag1', 'tag2']
  },
  // ... existing posts
]
```

### Edit an Existing Post:
1. Open `src/data/mockData.ts`
2. Find the post by its `slug` or `title`
3. Change the fields you want to update
4. Save the file

---

## <a name="releases"></a>2. Adding/Editing Music Releases

**File**: `src/data/mockData.ts`

### Add a New Release:
```typescript
export const mockReleases = [
  {
    id: 'new-release-id',
    title: 'Song Title',
    artist: 'Artist Name',
    coverArt: '/images/releases/cover-art.jpg',
    releaseDate: '2026-01-06',
    genre: 'Hip Hop',  // or R&B, Pop, etc.
    streamingLinks: {
      spotify: 'https://open.spotify.com/...',
      appleMusic: 'https://music.apple.com/...',
      youtube: 'https://youtube.com/...',
      soundcloud: 'https://soundcloud.com/...',
      tidal: 'https://tidal.com/...'
    }
  },
  // ... existing releases
]
```

### Important for Images:
1. Add cover art to `/public/images/releases/`
2. Name it something descriptive: `song-name.jpg`
3. Reference it as `/images/releases/song-name.jpg`

---

## <a name="artists"></a>3. Updating Artist Information

**File**: `src/data/mockData.ts`

### Add a New Artist:
```typescript
export const mockArtists = [
  {
    id: 'artist-slug',
    name: 'Artist Name',
    bio: 'Artist biography and description...',
    image: '/images/team/artist-photo.webp',
    role: 'Artist',
    socialLinks: {
      instagram: 'https://instagram.com/artist',
      twitter: 'https://twitter.com/artist',
      spotify: 'https://open.spotify.com/artist/...'
    },
    genres: ['Hip Hop', 'R&B'],
    monthlyListeners: 120000,
    totalStreams: 5000000
  },
  // ... existing artists
]
```

---

## <a name="content"></a>4. Changing Site Content

### Homepage Hero Section
**File**: `src/components/sections/HeroSection.tsx`

Change the main headline:
```tsx
<h1 className="...">
  Your New Headline Here
</h1>
```

### About Page
**File**: `src/app/about/page.tsx`

Edit the about text directly in the JSX:
```tsx
<p className="...">
  Your new about text here...
</p>
```

### Contact Information
**File**: `src/app/contact/page.tsx`

Update email, phone, address:
```tsx
const contactInfo = {
  email: 'your@email.com',
  phone: '+1-XXX-XXX-XXXX',
  address: 'Your Address'
}
```

---

## <a name="styling"></a>5. Updating Styles & Colors

### Brand Colors
**File**: `tailwind.config.js`

Change the bronze/gold color:
```javascript
colors: {
  gold: '#c87941',  // Change this hex code
  'gold-dark': '#a0613a',  // Darker shade
  // ...
}
```

### Global Styles
**File**: `src/app/globals.css`

Change fonts, spacing, or global styles:
```css
/* Change the default font */
body {
  font-family: 'Your Font', sans-serif;
}

/* Change link colors */
a {
  color: #your-color;
}
```

---

## <a name="external-projects"></a>6. Adding External Project Links

### Dashboard Integration
**File**: `src/app/dashboard/page.tsx`

Add a new external tool:
```tsx
const tools = [
  {
    title: 'Your Tool Name',
    description: 'Description of what it does',
    icon: YourIcon,  // Import from lucide-react
    href: 'https://your-tool-url.com',
    color: 'from-blue-500 to-blue-600',
    stats: 'Some stat or metric'
  },
  // ... existing tools
]
```

### Navigation Links
**File**: `src/components/layout/Header.tsx`

Add a new nav item:
```tsx
const navItems = [
  { name: 'Your Page', href: '/your-page' },
  // ... existing items
]
```

---

## <a name="deployment"></a>7. Deploying Changes

### Step 1: Test Locally
```bash
npm run build
npm run start
```
Visit `http://localhost:3000` to preview

### Step 2: Commit Changes
```bash
git add -A
git commit -m "Describe what you changed"
```

### Step 3: Push to Deploy
```bash
git push origin claude/ai-music-poetry-prompt-Swg7S
```

Cloudflare will automatically deploy your changes in 2-3 minutes.

---

## Common Tasks Quick Reference

### Add a Blog Post
1. Open `src/data/mockData.ts`
2. Add to `mockNews` array
3. Save, commit, push

### Add a Release
1. Add cover art to `/public/images/releases/`
2. Open `src/data/mockData.ts`
3. Add to `mockReleases` array
4. Save, commit, push

### Change Homepage Text
1. Open `src/components/sections/HeroSection.tsx`
2. Edit the text in `<h1>` or `<p>` tags
3. Save, commit, push

### Update Colors
1. Open `tailwind.config.js`
2. Change color hex codes
3. Save, commit, push

---

## File Structure Quick Reference

```
hlpflrecords/
├── src/
│   ├── app/                    # Page routes
│   │   ├── page.tsx           # Homepage
│   │   ├── about/page.tsx     # About page
│   │   ├── artist-portal/     # Login page
│   │   ├── dashboard/         # Artist dashboard
│   │   └── ...
│   ├── components/            # Reusable components
│   │   ├── sections/          # Page sections
│   │   ├── layout/            # Header, Footer
│   │   └── ui/                # Buttons, Cards, etc.
│   ├── data/
│   │   └── mockData.ts        # 📝 EDIT THIS for content
│   └── styles/
│       └── globals.css        # Global styles
├── public/
│   ├── images/                # 🖼️ ADD IMAGES HERE
│   │   ├── releases/          # Album covers
│   │   └── team/              # Artist photos
│   └── audio/                 # Audio files
└── tailwind.config.js         # 🎨 COLORS HERE
```

---

## Getting Help

### Build Errors?
```bash
# Clear cache and rebuild
rm -rf .next out
npm run build
```

### Need to Revert Changes?
```bash
# See recent commits
git log --oneline -5

# Revert to a previous commit
git revert HEAD
```

### Still Stuck?
- Check the build logs in Cloudflare dashboard
- Review error messages in terminal
- Make sure all files are saved

---

## Pro Tips

1. **Always test locally first** with `npm run build`
2. **Use descriptive commit messages** - "Add new release" not "update"
3. **One change at a time** - easier to debug if something breaks
4. **Keep backups** of images before replacing them
5. **Use the same image sizes** as existing images for consistency

---

## Need More Help?

This guide covers 90% of common edits. For advanced changes:
- Consult Next.js documentation
- Check Tailwind CSS docs for styling
- Review the codebase comments for hints
