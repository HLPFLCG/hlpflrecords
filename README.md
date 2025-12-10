# HLPFL Records - World-Class Record Label Website

A modern, responsive record label website built with cutting-edge technology to showcase exceptional musical talent and provide an immersive experience for artists, fans, and industry professionals.

## 🚀 Features

### **Technical Excellence**
- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and developer experience
- **Tailwind CSS** with custom design system for stunning visuals
- **Static Site Generation (SSG)** for lightning-fast loading
- **Component-based architecture** for maintainability

### **Design & User Experience**
- **Dark theme** with gold accents matching HLPFL brand
- **Fully responsive** design for all devices
- **Smooth animations** and micro-interactions
- **Glassmorphism effects** and modern UI patterns
- **Optimized for 90+ Lighthouse scores**

### **Complete Record Label Features**
- **Homepage** with immersive hero section and services showcase
- **Artists page** with profile cards and filtering system
- **Releases page** with discography and streaming links
- **About page** with team information and company story
- **Contact page** with functional forms and inquiry types
- **News section** with articles and newsletter signup

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Icons**: Lucide React
- **Deployment**: Optimized for Cloudflare Pages
- **Build**: Static Site Generation (SSG)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/HLPFLCG/hlpflrecords.git
cd hlpflrecords

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Development

```bash
# Development server
npm run dev

# Type checking
npm run lint

# Production build
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Cloudflare Pages

This project is optimized for Cloudflare Pages deployment:

1. **Build Command**: `npm run build:cloudflare`
2. **Build Output Directory**: `out`
3. **Node.js Version**: 18 or higher

### Environment Variables

Set the following environment variables for production:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🎨 Customization

### Brand Colors

The design system uses these primary colors (customizable in `tailwind.config.js`):

- **Gold**: `#c87941` (Primary brand color)
- **Dark**: `#0a0a0a` (Background)
- **Dark Secondary**: `#1a1a1a` (Cards, sections)
- **Gold Light**: `#d4945c` (Hover states)
- **Gold Dark**: `#a86535` (Accent)

### Asset Placeholders

The site includes placeholder areas for:
- Artist images (`/images/artists/`)
- Release artwork (`/images/releases/`)
- Team photos (`/images/team/`)
- News images (`/images/news/`)

Replace these with your actual assets to complete the visual experience.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── artists/           # Artists roster
│   ├── contact/           # Contact forms
│   ├── news/              # News & updates
│   ├── releases/          # Music releases
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── data/
│   └── mockData.ts        # Placeholder content
├── lib/
│   └── utils.ts           # Utility functions
└── types/
    └── index.ts           # TypeScript types
```

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration with static export
- `tailwind.config.js` - Tailwind CSS with custom theme
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Performance Features

- **Code splitting** and lazy loading
- **Image optimization** (ready for Next.js Image component)
- **Static generation** for instant loading
- **Minimal JavaScript** with optimal bundles
- **SEO optimized** with meta tags and structured data

## 🔍 SEO & Marketing

- **Meta tags** optimized for all pages
- **Open Graph** tags for social sharing
- **Twitter Cards** for social media
- **Structured data** for search engines
- **XML sitemap** generation
- **Robots.txt** configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to HLPFL Records. All rights reserved.

## 🎵 About HLPFL Records

HLPFL Records is a premier record label dedicated to discovering, developing, and promoting exceptional musical talent. With over 15 years of experience, we've built a reputation for nurturing artists and creating groundbreaking music that resonates globally.

### Our Services

- **Artist Development** - Comprehensive career development programs
- **Music Production** - State-of-the-art recording and production
- **Global Distribution** - Worldwide music distribution networks
- **Marketing & Promotion** - Strategic marketing campaigns
- **Publishing & Rights** - Complete music publishing services

---

**Built with ❤️ for HLPFL Records**

*Elevating artists to global recognition*