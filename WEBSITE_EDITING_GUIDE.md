# HLPFL Records Website Editing Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Contact Information](#contact-information)
3. [Company Information](#company-information)
4. [Artist Management](#artist-management)
5. [Content Pages](#content-pages)
6. [Navigation & Links](#navigation--links)
7. [Images & Media](#images--media)
8. [Legal Pages](#legal-pages)

---

## 🚀 Quick Start

### Where to Find Everything
```
hlpflrecords/
├── src/
│   ├── app/                 # Page content
│   ├── components/          # Reusable components
│   ├── data/               # Mock data and content
│   ├── lib/                # Utilities and configurations
│   └── types/              # TypeScript definitions
├── public/                 # Static assets (images, icons)
└── tailwind.config.js     # Color and styling configurations
```

### Most Common Files to Edit
- `src/data/mockData.ts` - Artists, team members, releases
- `src/app/layout.tsx` - SEO, contact info, global settings
- `src/lib/structuredData.ts` - SEO structured data
- Individual page files in `src/app/[page-name]/page.tsx`

---

## 📧 Contact Information

### Primary Contact Settings
**File**: `src/app/layout.tsx`
```typescript
// Update metadata section
metadataBase: new URL('https://hlpfl.org'), // Your website URL
```

**File**: `src/lib/structuredData.ts`
```typescript
// Update organization contact info
"email": "contact@hlpfl.org",
"telephone": "+1-616-313-5215",
"addressLocality": "Grand Rapids",
"addressRegion": "MI",
```

### Legal Page Emails
**Files to update**:
- `src/app/legal/privacy/page.tsx`
- `src/app/legal/terms/page.tsx`
- `src/app/legal/copyright/page.tsx`
- `src/app/legal/cookies/page.tsx`
- `src/components/ui/Chatbot.tsx`

**Search and replace**:
```bash
# Find all email addresses
grep -r "@hlpfl.org" src/

# Replace with your preferred email
# contact@hlpfl.org (current)
```

---

## 🏢 Company Information

### Basic Company Info
**File**: `src/lib/structuredData.ts`
```typescript
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HLPFL Records",
  "url": "https://hlpfl.org",
  "logo": "https://hlpfl.org/images/logo.svg",
  "description": "Your description here",
  "foundingDate": "2020",
  "numberOfEmployees": "10-50"
}
```

### Social Media Links
**File**: `src/components/layout/Footer.tsx`
```typescript
const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/hlpflrecords', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com/hlpflrecords', icon: Instagram },
  { name: 'Spotify', href: 'https://spotify.com/hlpflrecords', icon: Music },
  // Add your social links here
]
```

---

## 🎵 Artist Management

### Add New Artist
**File**: `src/data/mockData.ts`
```typescript
export const mockArtists: Artist[] = [
  // Existing artists...
  {
    id: 'artist-3',
    name: 'New Artist Name',
    slug: 'new-artist', // URL-friendly name
    genre: ['Pop', 'R&B'],
    bio: 'Artist biography goes here...',
    image: '/images/artists/new-artist.jpg',
    socials: {
      spotify: 'https://open.spotify.com/artist/...',
      instagram: 'https://instagram.com/newartist',
      twitter: 'https://twitter.com/newartist',
      website: 'https://newartist.com'
    },
    featured: true
  }
]
```

### Update Existing Artist
1. Find the artist in `src/data/mockData.ts`
2. Update any field:
   - `name`: Display name
   - `bio`: Biography
   - `genre`: Array of genres
   - `socials`: Social media links
   - `featured`: Boolean for homepage display

### Remove Artist
```typescript
// Simply delete the artist object from the array
// or set featured: false to remove from homepage
```

---

## 📄 Content Pages

### Homepage Content
**File**: `src/app/page.tsx`
```typescript
// Update hero section
<h1>World-Class <span className="text-gold">Record Label</span></h1>
<p>Your custom description here...</p>

// Update statistics
const stats = [
  { label: 'Artists', value: '25+' },
  { label: 'Releases', value: '100+' },
  { label: 'Countries', value: '50+' }
]
```

### About Page
**File**: `src/app/about/page.tsx`
```typescript
// Update company description
const description = "Your company story..."

// Update team members
export const teamMembers = [
  {
    id: '1',
    name: 'Team Member Name',
    role: 'CEO',
    bio: 'Member biography...',
    image: '/images/team/member.jpg',
    socials: {
      linkedin: 'https://linkedin.com/in/...',
      twitter: 'https://twitter.com/...'
    }
  }
]
```

### Contact Page
**File**: `src/app/contact/page.tsx`
```typescript
// Update contact information
const contactInfo = {
  email: 'contact@hlpfl.org',
  phone: '+1-616-313-5215',
  address: 'Grand Rapids, MI',
  hours: 'Mon-Fri: 9AM-6PM EST'
}
```

---

## 🧭 Navigation & Links

### Main Navigation
**File**: `src/components/layout/Header.tsx`
```typescript
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Artists', href: '/artists' },
  { name: 'Releases', href: '/releases' },
  { name: 'Contact', href: '/contact' },
  // Add or remove navigation items here
]
```

### Footer Links
**File**: `src/components/layout/Footer.tsx`
```typescript
const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Artists', href: '/artists' },
    { name: 'Releases', href: '/releases' }
  ],
  legal: [
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Privacy Policy', href: '/legal/privacy' }
  ]
}
```

---

## 🖼️ Images & Media

### Add Images
1. Place images in `public/images/` folder
2. Organize by category:
   ```
   public/images/
   ├── artists/
   ├── team/
   ├── releases/
   ├── logo/
   └── favicon/
   ```

### Update Image References
```typescript
// In components or pages
<Image
  src="/images/artists/artist-name.jpg"
  alt="Artist Name"
  width={400}
  height={400}
/>

// In data files
image: '/images/artists/artist-name.jpg'
```

### Optimize Images
- Use WebP format for better performance
- Size images appropriately (don't use huge images for thumbnails)
- Add alt text for accessibility

---

## ⚖️ Legal Pages

### Terms of Service
**File**: `src/app/legal/terms/page.tsx`
- Update company name and contact info
- Modify service terms as needed
- Consult with legal counsel for important changes

### Privacy Policy
**File**: `src/app/legal/privacy/page.tsx`
- Update data handling practices
- Modify cookie preferences
- Update contact information

### Copyright Policy
**File**: `src/app/legal/copyright/page.tsx`
- Update DMCA contact information
- Modify copyright notice procedures

---

## 🛠️ Advanced Editing

### Custom Colors
**File**: `tailwind.config.js`
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c87941',
          light: '#d4945c',
          dark: '#a86535',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          secondary: '#1a1a1a',
          tertiary: '#2a2a2a',
        }
      }
    }
  }
}
```

### Custom Fonts
**File**: `src/app/layout.tsx`
```typescript
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})
```

---

## 💡 Tips & Best Practices

### Content Updates
1. **Always test changes locally** before deploying
2. **Keep backups** of original files
3. **Use semantic HTML** for better SEO
4. **Maintain consistent branding** across all pages

### Performance
1. **Optimize images** before uploading
2. **Use lazy loading** for large image galleries
3. **Minimize custom fonts** to improve loading speed
4. **Test on mobile devices** regularly

### SEO Best Practices
1. **Update meta descriptions** for each page
2. **Use descriptive alt text** for images
3. **Create keyword-rich content**
4. **Update sitemap** when adding new pages

---

## 🚀 Deploying Changes

### After Making Changes
1. **Test locally**: `npm run dev`
2. **Build project**: `npm run build`
3. **Commit changes**: `git add . && git commit -m "Your changes"`
4. **Push to GitHub**: `git push origin main`

### Automatic Deployment
- Cloudflare Pages will automatically deploy changes from GitHub
- Allow 2-5 minutes for changes to appear live

---

## 📞 Need Help?

### Common Issues
- **Build errors**: Check for syntax errors in edited files
- **Missing images**: Verify image paths in `public/` folder
- **Broken links**: Test all links after changes

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

### Support
For technical support, contact: contact@hlpfl.org