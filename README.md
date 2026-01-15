# 🎵 HLPFL Records

> The Artist-First Music Company

**50/50 Revenue Split** • **11% Management Fee** • **Artist-Owned Masters**

![Version](https://img.shields.io/badge/version-2.1.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![License](https://img.shields.io/badge/license-Proprietary-red)

## 🌟 Overview

HLPFL Records is a modern, artist-first record label platform built with Next.js 14. We provide comprehensive services for musicians while maintaining transparency and fair compensation.

### Key Statistics
- **Featured Artist**: PRIV (Grand Rapids, Michigan)
- **12 Releases**: Including "victim", "Numb", "Bones", "Growing Up (feat. Jay Kim)", and more
- **100+ Services**: Documented in comprehensive guide
- **New Features**: OAuth login, Stripe merch store, questionnaire with email

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/HLPFLCG/hlpflrecords.git

# Navigate to project directory
cd hlpflrecords

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
hlpflrecords/
├── src/
│   ├── app/                # Next.js 14 App Router pages
│   ├── components/         # Reusable React components
│   ├── contexts/           # React contexts
│   ├── data/               # Mock data and content
│   ├── lib/                # Utility functions
│   └── styles/             # Global styles
├── public/
│   ├── images/             # Static images
│   ├── manifest.webmanifest # PWA manifest
│   └── sw.js               # Service worker
├── docs/                   # Complete documentation
└── package.json            # Dependencies and scripts
```

## 📚 Documentation

All comprehensive documentation is located in the `/docs` folder:

### Core Documentation
- **[Project Overview](./docs/PROJECT_OVERVIEW.md)** - Complete technical and business documentation
- **[Session Summary](./docs/SESSION_SUMMARY.md)** - Latest development session details
- **[Apple App Conversion](./docs/APPLE_APP_CONVERSION.md)** - iOS app development roadmap

### Feature Guides
- **[Complete Site Guide](./docs/COMPLETE_SITE_GUIDE.md)** - Comprehensive site overview
- **[Editing Guide](./docs/EDITING_GUIDE.md)** - Content management instructions
- **[Developer Guide](./docs/DEVELOPER_GUIDE.md)** - Development best practices
- **[Deployment Guide](./docs/DEPLOYMENT_GUIDE.md)** - Deployment procedures

### New Features (January 2026)
- **[New Features Guide](./docs/NEW_FEATURES_GUIDE.md)** - OAuth login, merch store, questionnaire
- **[API Setup Guide](./docs/API_SETUP_GUIDE.md)** - Connect Resend, Stripe, and OAuth providers

### Reference Documentation
- **[API Reference](./docs/API_REFERENCE.md)** - API endpoints and usage
- **[Analytics Guide](./docs/ANALYTICS_GUIDE.md)** - Analytics implementation
- **[Troubleshooting Guide](./docs/TROUBLESHOOTING_GUIDE.md)** - Common issues and solutions
- **[Environment Variables](./docs/ENVIRONMENT_VARIABLES_GUIDE.md)** - Configuration guide

## 🛠️ Technology Stack

### Frontend
- **Next.js 14.2.35** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Lucide React** - Icon library

### Build & Development
- **Turbopack** - Fast bundler for development
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing

### Progressive Web App
- **next-pwa** - Service worker and offline support
- **Workbox** - Advanced caching strategies

## ✨ Key Features

### Artist Services
- Complete artist services guide (11 categories, 100+ services)
- Transparent 50/50 revenue split
- 11% management fee (vs 15-20% industry standard)
- Artist-owned masters policy

### Website Features
- Artist profiles and discographies
- Release catalog with streaming links
- News and content management
- Artist portal with tools
- Services guide
- Tour information
- PWA with offline support
- Mobile-responsive design

### New Features (January 2026)
- **OAuth Login** - Sign in with Google, Facebook, Apple, or Spotify
- **Merch Store** - Shopping cart with Stripe checkout integration
- **Artist Questionnaire** - 8-step onboarding form with email notifications
- **Email Integration** - Automated notifications via Resend

## 🎨 Artists

### PRIV
- **Location**: Grand Rapids, Michigan
- **Genre**: Alternative, Indie, Experimental
- **Spotify**: [open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt](https://open.spotify.com/artist/0jIqPF7laDAaZmSeoSzLlt)
- **Apple Music**: [music.apple.com/artist/priv/1617089388](https://music.apple.com/ca/artist/priv/1617089388)
- **SoundCloud**: [soundcloud.com/whereispriv](https://soundcloud.com/whereispriv)
- **Instagram/Twitter**: @whereispriv
- **Releases** (2023-2025): Growing Up (feat. Jay Kim), Libra, Numb, Bones, solace, Jaundice, Throw Away, victim, reverence, living a lie
- **Features**: Bloom (feat. Priv) by Lavv, SHITFACEDED (feat. PRIV) by Sawyer

## 📦 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Create production build
npm start            # Start production server
npm run lint         # Run ESLint
```

## 🌐 Deployment

The site is configured for Cloudflare Pages deployment:

- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 18+

See [Deployment Guide](./docs/DEPLOYMENT_GUIDE.md) for detailed instructions.

## 📱 Mobile App

Planning for iOS app development is documented in [Apple App Conversion Guide](./docs/APPLE_APP_CONVERSION.md).

### Recommended Approach
1. **Phase 1**: Capacitor conversion (4-8 weeks, $15K-$40K)
2. **Phase 2**: React Native rebuild (3-6 months, $50K-$150K)

## 🤝 Contributing

This is a proprietary project for HLPFL Records. For internal development:

1. Create feature branch from `main`
2. Make your changes
3. Build and test locally
4. Submit pull request for review
5. Merge after approval

## 📄 License

Proprietary - HLPFL Records © 2026

## 📧 Contact

- **Website**: [hlpfl.org](https://hlpfl.org)
- **Email**: contact@hlpfl.org
- **GitHub**: [HLPFLCG/hlpflrecords](https://github.com/HLPFLCG/hlpflrecords)

## 🎯 Core Values

### Transparency
No hidden fees, no mysterious deductions. Real-time dashboards showing every stream, every sale, every dollar.

### Fairness
50/50 revenue split and 11% management fee aren't gimmicks—they're how we believe the industry should work.

### Advocacy
We fight for artists because it's the right thing to do.

### Education
An educated artist is an empowered artist. We want you to understand everything about your career.

### Flexibility
Take what you need, leave what you don't. No bundled deals designed to lock you in.

---

**Built with ❤️ for artists, by HLPFL Records**
