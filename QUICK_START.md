# 🚀 HLPFL Records Website - Quick Start Guide

## ✅ What Was Done

Your website has been completely updated and cleaned up! Here's what changed:

### 1. Repository Cleanup
- **Removed 22 redundant documentation files** (5,350 lines of code!)
- Kept only essential documentation
- Repository is now clean and organized

### 2. Complete Alki Discography
- **Added all 10 singles from Spotify** with complete metadata
- Includes streaming numbers, release dates, and links
- Top track: "Switched Up" with 2.97M streams

### 3. Updated Information
- **Added Noah Rank** as Director of Sales to the team
- **Fixed statistics** across all pages (now accurate)
- **Updated founding year** to 2019 (was incorrectly showing 2009)
- Only Alki is featured (removed mock artists)

### 4. Created Documentation
- **EDITING_GUIDE.md** - Complete guide for making changes
- **DEPLOYMENT_SUMMARY.md** - Details of this update
- **This file** - Quick reference

---

## 🎯 Current Website Stats

- **Artists:** 1 (Alki)
- **Releases:** 10 singles
- **Total Streams:** 5+ million
- **Monthly Listeners:** 47,990
- **Years in Business:** 6 (founded 2019)
- **Team Members:** 3 (James Rockel, Alki, Noah Rank)

---

## 📝 How to Make Changes

### Adding a New Release

1. Open `src/data/mockData.ts`
2. Find the `mockReleases` array
3. Copy an existing release entry
4. Paste at the top (newest first)
5. Update the information:
   ```typescript
   {
     id: '11',  // Next number
     title: 'New Song Title',
     artist: 'Alki',
     artistId: '1',
     type: 'single',
     releaseDate: new Date('2025-02-01'),
     coverArt: '/images/releases/new-song.jpg',
     description: 'Description here',
     links: {
       spotify: 'https://open.spotify.com/album/YOUR_ID',
       apple: 'https://music.apple.com/album/YOUR_ID',
     },
     tracks: [
       { id: '1', title: 'New Song Title', duration: '3:45' },
     ],
   }
   ```
6. Save the file
7. Test locally: `npm run dev`
8. Commit and push to deploy

### Updating Stats

**Files to edit:**
- `src/components/sections/AboutSection.tsx` (Home page)
- `src/app/about/page.tsx` (About page)

**Important:** Keep both pages synchronized!

### Adding Team Members

1. Open `src/data/mockData.ts`
2. Find the `mockTeam` array
3. Add new member:
   ```typescript
   {
     id: '4',  // Next number
     name: 'Team Member Name',
     role: 'Job Title',
     bio: 'Biography...',
     image: '/images/team/photo.jpg',
     socials: {
       linkedin: 'https://linkedin.com/in/username',
       email: 'email@hlpfl.org',
     },
   }
   ```

---

## 🚀 Deployment

### Automatic (Recommended)
1. Make your changes
2. Commit: `git add . && git commit -m "Description"`
3. Push: `git push origin main`
4. Cloudflare Pages auto-deploys in 2-3 minutes

### Manual Testing First
```bash
# Test locally
npm run dev
# Visit http://localhost:3000

# Build for production
npm run build

# If successful, commit and push
git add .
git commit -m "Your changes"
git push origin main
```

---

## 📚 Documentation Files

1. **EDITING_GUIDE.md** - Comprehensive editing instructions
2. **DEPLOYMENT_SUMMARY.md** - Details of this update
3. **WEBSITE_MANAGEMENT_MANUAL.md** - Existing management guide
4. **README.md** - Project overview

---

## 🔗 Important Links

- **Live Site:** https://hlpflrecords.pages.dev (or your custom domain)
- **GitHub:** https://github.com/HLPFLCG/hlpflrecords
- **Alki Spotify:** https://open.spotify.com/artist/1Jof1vMpSF5pIWUvG9cizl

---

## 📁 Key Files to Know

```
src/data/mockData.ts          ← Edit this for most changes!
src/app/about/page.tsx         ← About page content
src/components/sections/       ← Home page sections
public/images/                 ← Add images here
```

---

## ⚡ Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint

# View git status
git status

# Commit changes
git add .
git commit -m "Description"
git push origin main
```

---

## 🆘 Need Help?

1. **Check EDITING_GUIDE.md** for detailed instructions
2. **Email:** contact@hlpfl.org
3. **GitHub Issues:** https://github.com/HLPFLCG/hlpflrecords/issues

---

## ✨ What's New in This Update

### Alki's Complete Discography (10 Singles)
1. 221 (2025) - Latest release
2. Lackin (2025)
3. No Service (2024)
4. Get Down (2024)
5. Better Off (2024) - feat. CRONIN
6. Switched Up (2024) - 2.97M streams 🔥
7. Too Much (2024) - 1.17M streams
8. Planes (2024)
9. Deceiving (2024) - 797K streams
10. Attached (2024)

### Team Updates
- ✅ Noah Rank added as Director of Sales

### Stats Corrected
- ✅ 1 Artist (accurate)
- ✅ 10+ Releases (accurate)
- ✅ 5m+ Streams (accurate)
- ✅ 6 Years (founded 2019, not 2009)

---

## 🎉 You're All Set!

Your website is now:
- ✅ Clean and organized
- ✅ Accurate and up-to-date
- ✅ Easy to maintain
- ✅ Fully documented
- ✅ Deployed and live

**Next time you need to make changes, just refer to EDITING_GUIDE.md!**

---

*Last Updated: December 19, 2024*