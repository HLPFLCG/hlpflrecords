# HLPFL Records Repository Navigation Guide

## 📁 Repository Structure Overview

```
hlpflrecords/
├── 📂 src/                          # Main source code
│   ├── 📂 app/                      # Next.js App Router pages
│   ├── 📂 components/               # React components
│   ├── 📂 data/                     # Mock data and content
│   ├── 📂 lib/                      # Utilities and configs
│   ├── 📂 styles/                   # CSS and styling files
│   ├── 📂 types/                    # TypeScript definitions
│   └── 📄 layout.tsx, globals.css   # Global layout and styles
├── 📂 public/                       # Static assets
├── 📄 tailwind.config.js           # Tailwind CSS config
├── 📄 next.config.js               # Next.js config
└── 📄 package.json                 # Dependencies and scripts
```

---

## 🎯 Quick Navigation Map

### 📄 Pages (src/app/)
```
📂 app/
├── 🏠 page.tsx                    # Homepage
├── 👥 about/page.tsx              # About page
├── 🎨 artists/page.tsx            # Artists page
├── 💿 releases/page.tsx           # Releases page
├── 📧 contact/page.tsx            # Contact page
├── 📰 news/page.tsx               # News page
├── 🎵 submit-music/page.tsx       # Music submission
├── 🎭 artist-portal/page.tsx      # Artist dashboard
├── 💰 licensing/page.tsx          # Licensing page
├── 🤝 partners/page.tsx           # Partners page
├── 📂 legal/                      # Legal pages
│   ├── terms/page.tsx             # Terms of Service
│   ├── privacy/page.tsx           # Privacy Policy
│   ├── copyright/page.tsx         # Copyright Policy
│   └── cookies/page.tsx           # Cookie Policy
├── 🎨 minimal/page.tsx            # Minimal page
└── 🎯 layout.tsx                  # Global layout
```

### 🧩 Components (src/components/)
```
📂 components/
├── 📂 layout/                     # Layout components
│   ├── Header.tsx                 # Navigation header
│   └── Footer.tsx                 # Page footer
├── 📂 ui/                         # UI components
│   ├── Button.tsx                 # Button component
│   ├── Card.tsx                   # Card component
│   ├── Chatbot.tsx                # AI chatbot
│   ├── LoadingScreen.tsx          # Loading animation
│   ├── Logo.tsx                   # Company logo
│   ├── PremiumCard.tsx            # Styled card
│   └── StarfieldBackground.tsx    # Star animation
├── 📂 sections/                   # Page sections
│   ├── AboutSection.tsx           # About content
│   ├── ArtistsSection.tsx         # Artists grid
│   ├── ContactSection.tsx         # Contact form
│   ├── HeroSection.tsx            # Hero banner
│   ├── NewsSection.tsx            # News articles
│   ├── PartnersSection.tsx        # Partners display
│   ├── ReleasesSection.tsx        # Music releases
│   └── ServicesSection.tsx        # Services list
└── LoadingScreen.tsx              # Loading animation
```

---

## 🔍 File Purpose Guide

### 📝 Content Files
| File | Purpose | What You Edit |
|------|---------|---------------|
| `src/data/mockData.ts` | All website content | Artists, team, releases, services |
| `src/app/layout.tsx` | Global layout & SEO | Meta tags, contact info, fonts |
| `src/lib/structuredData.ts` | SEO structured data | Company info, contact details |
| Individual `page.tsx` files | Page content | Page-specific text and images |

### 🎨 Styling Files
| File | Purpose | What You Edit |
|------|---------|---------------|
| `tailwind.config.js` | Design system | Colors, fonts, spacing |
| `src/app/globals.css` | Global styles | Animations, custom CSS |
| `src/styles/Loading.module.css` | Loading screen | Loading animation styles |
| `src/styles/Starfield.module.css` | Star background | Star animation styles |

### 🖼️ Asset Files
| Folder | Purpose | What You Add |
|--------|---------|-------------|
| `public/images/` | All images | Artist photos, logos, assets |
| `public/favicon/` | Site icons | Favicon, app icons |
| `public/manifest.json` | PWA config | App metadata |

---

## 🚀 Common Editing Tasks

### 1️⃣ Update Website Content
```
🎯 Goal: Change artist information
📂 Navigate: src/data/mockData.ts
🔧 Edit: Artist objects in mockArtists array
📝 Example: Update artist bio, genre, social links
```

### 2️⃣ Change Contact Information
```
🎯 Goal: Update email/phone/address
📂 Navigate: 
  ├── src/app/layout.tsx (metadata)
  ├── src/lib/structuredData.ts (SEO data)
  └── src/app/legal/*/page.tsx (legal pages)
🔧 Edit: Email addresses and phone numbers
📝 Example: Replace "contact@hlpfl.org" with new email
```

### 3️⃣ Modify Page Text
```
🎯 Goal: Change homepage text
📂 Navigate: src/app/page.tsx
🔧 Edit: Text content in JSX elements
📝 Example: Update hero section description
```

### 4️⃣ Add New Artist
```
🎯 Goal: Add artist to website
📂 Navigate: src/data/mockData.ts
🔧 Edit: Add new object to mockArtists array
📝 Example: Copy existing artist and modify details
```

### 5️⃣ Update Colors/Design
```
🎯 Goal: Change website colors
📂 Navigate: tailwind.config.js
🔧 Edit: Color values in extend.colors
📝 Example: Change gold color hex codes
```

---

## 🗂️ Visual File Organization

### 📊 Data Flow
```
📄 mockData.ts 
    ↓ (provides data to)
🧩 Components (Card.tsx, ArtistsSection.tsx, etc.)
    ↓ (uses data in)
📄 Pages (artists/page.tsx, releases/page.tsx)
    ↓ (displays in)
🌐 Website
```

### 🎨 Styling Hierarchy
```
📄 tailwind.config.js 
    ↓ (defines)
🎨 CSS Classes (bg-gold, text-white, etc.)
    ↓ (used in)
🧩 Components & Pages
    ↓ (styled as)
🌐 Website
```

### 🏗️ Component Structure
```
📄 layout.tsx (Global wrapper)
    ↓ (includes)
🧩 Header.tsx, Footer.tsx
    ↓ (contains)
🧩 Navigation, Logo, Social links
    ↓ (wraps)
📄 Individual pages
    ↓ (use)
🧩 UI components (Button, Card, etc.)
```

---

## 🔧 Development Workflow

### 1. Make Changes
```bash
# Navigate to project
cd hlpflrecords

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### 2. File Editing Process
```
📂 Find file in repository structure
    ↓
📝 Make changes in code editor
    ↓
💾 Save file
    ↓
🔄 Check browser for changes (auto-reloads)
```

### 3. Test and Deploy
```bash
# Test build (checks for errors)
npm run build

# If successful, commit changes
git add .
git commit -m "Descriptive change message"
git push origin main
```

---

## 📱 Folder Deep Dive

### 📂 src/app/ - The Heart of Your Website
Each folder here represents a URL route:
- `src/app/about/` → `https://hlpfl.org/about`
- `src/app/artists/` → `https://hlpfl.org/artists`
- `src/app/legal/terms/` → `https://hlpfl.org/legal/terms`

### 📂 src/components/ - Building Blocks
Reusable UI elements:
- **Layout Components**: Header, Footer (used on every page)
- **UI Components**: Button, Card (reusable across pages)
- **Section Components**: HeroSection, AboutSection (page sections)

### 📂 src/data/ - Your Content Hub
All website content lives here:
- `mockArtists`: Artist information
- `mockReleases`: Music releases
- `mockTeam`: Team member information
- `mockServices`: Company services

### 📂 public/ - Static Assets
Files served directly to users:
- Images, fonts, icons
- No processing, just hosting
- Accessed via `/` in URLs

---

## 🎯 Quick Reference Cheat Sheet

### 🔄 Most Common Files
| Task | File | Location |
|------|------|----------|
| Update artist info | `mockData.ts` | `src/data/` |
| Change page text | `page.tsx` | `src/app/[page]/` |
| Update contact info | `layout.tsx` | `src/app/` |
| Change colors | `tailwind.config.js` | Root |
| Add images | Upload to | `public/images/` |
| SEO metadata | `layout.tsx` | `src/app/` |
| Footer links | `Footer.tsx` | `src/components/layout/` |

### 🚨 Important Notes
- **Never edit** files in `node_modules/` folder
- **Always test** changes before deploying
- **Back up** files before major changes
- **Use semantic** file naming (kebab-case for folders, PascalCase for components)

### 💡 Pro Tips
- Use **VS Code** with extensions for better navigation
- **Search** files with `Ctrl+Shift+F` (Windows) or `Cmd+Shift+F` (Mac)
- **Comment** your changes for future reference
- **Keep** image sizes optimized for web

---

## 🆘 Troubleshooting

### Build Errors?
1. Check `npm run build` output for specific file
2. Look for syntax errors in edited files
3. Verify imports and exports

### Changes Not Visible?
1. Restart development server (`npm run dev`)
2. Clear browser cache
3. Check file was saved

### Broken Images?
1. Verify image exists in `public/images/`
2. Check file path in code matches actual location
3. Ensure correct file extension

---

## 📞 Support

For technical assistance with repository navigation:
- 📧 Email: contact@hlpfl.org
- 📱 Phone: 616-313-5215
- 📍 Location: Grand Rapids, MI

Happy editing! 🎉