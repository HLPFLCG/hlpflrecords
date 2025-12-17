# HLPFL Records - Complete Website Management Manual

**Version**: 1.0  
**Last Updated**: December 17, 2025  
**Audience**: Beginners to Intermediate Users

---

## Table of Contents

1. [Introduction](#introduction)
2. [Basic Content Management](#basic-content-management)
3. [Repository Navigation](#repository-navigation)
4. [Technical Overview](#technical-overview)
5. [For Beginners](#for-beginners)
6. [Common Tasks](#common-tasks)
7. [Troubleshooting](#troubleshooting)
8. [Additional Resources](#additional-resources)

---

## 1. INTRODUCTION

### What is This Manual?

This manual is your complete guide to managing and updating the HLPFL Records website. Whether you're a complete beginner or have some technical experience, this guide will help you:

- Update text, images, and colors
- Understand how the website works
- Make changes safely and confidently
- Troubleshoot common issues

### Before You Start

**What You'll Need**:
- A text editor (VS Code recommended - it's free!)
- Basic computer skills (opening files, copying/pasting)
- Git installed on your computer (for version control)
- Node.js installed (for building the website)

**Don't Worry If**:
- You've never coded before
- Technical terms sound confusing
- You're afraid of breaking something

This guide explains everything step-by-step!

---

## 2. BASIC CONTENT MANAGEMENT

### A. How to Change Text Content

#### Understanding Where Text Lives

All text on your website is stored in files with these extensions:
- `.tsx` files (TypeScript + React components)
- `.ts` files (TypeScript files)
- `.md` files (Markdown documentation)

#### Step-by-Step: Changing Homepage Text

**Example: Changing the main headline**

1. **Open the file**:
   ```
   Navigate to: src/app/page.tsx
   ```

2. **Find the text**:
   Look for the HeroSection component. The actual text is in:
   ```
   src/components/sections/HeroSection.tsx
   ```

3. **Edit the text**:
   ```tsx
   // BEFORE
   <h1>
     <span>HLPFL</span>
     <span>Records</span>
   </h1>
   
   // AFTER (your changes)
   <h1>
     <span>Your New Text</span>
     <span>Here</span>
   </h1>
   ```

4. **Save the file**: Press `Ctrl+S` (Windows) or `Cmd+S` (Mac)

5. **See your changes**:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser

#### Common Text Locations

| What You Want to Change | File Location |
|------------------------|---------------|
| Homepage hero text | `src/components/sections/HeroSection.tsx` |
| About section | `src/components/sections/AboutSection.tsx` |
| Services section | `src/components/sections/ServicesSection.tsx` |
| Contact page | `src/app/contact/page.tsx` |
| Artists page | `src/app/artists/page.tsx` |
| Releases page | `src/app/releases/page.tsx` |
| Footer text | `src/components/layout/Footer.tsx` |
| Header/Navigation | `src/components/layout/Header.tsx` |

---

### B. How to Change Fonts

#### Current Font Setup

Your website uses the **Inter** font family. Here's how to change it:

#### Method 1: Change to a Different Google Font

1. **Choose a font** from [Google Fonts](https://fonts.google.com/)
   - Recommended for HLPFL Records:
     - **Montserrat** (modern, clean)
     - **Poppins** (friendly, rounded)
     - **Raleway** (elegant, sophisticated)
     - **Roboto** (professional, readable)

2. **Update the import** in `src/app/globals.css`:
   ```css
   /* BEFORE */
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
   
   /* AFTER (example with Montserrat) */
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
   ```

3. **Update the font family** in `tailwind.config.js`:
   ```javascript
   // BEFORE
   fontFamily: {
     sans: ['Inter', 'system-ui', 'sans-serif'],
     display: ['Inter', 'system-ui', 'sans-serif'],
   },
   
   // AFTER (example with Montserrat)
   fontFamily: {
     sans: ['Montserrat', 'system-ui', 'sans-serif'],
     display: ['Montserrat', 'system-ui', 'sans-serif'],
   },
   ```

4. **Update the body font** in `src/app/globals.css`:
   ```css
   /* BEFORE */
   body {
     font-family: 'Inter', system-ui, sans-serif;
   }
   
   /* AFTER */
   body {
     font-family: 'Montserrat', system-ui, sans-serif;
   }
   ```

#### Method 2: Use a Custom Font

1. **Add your font files** to `public/fonts/`:
   ```
   public/
     fonts/
       YourFont-Regular.woff2
       YourFont-Bold.woff2
   ```

2. **Define the font** in `src/app/globals.css`:
   ```css
   @font-face {
     font-family: 'YourFont';
     src: url('/fonts/YourFont-Regular.woff2') format('woff2');
     font-weight: 400;
     font-style: normal;
   }
   
   @font-face {
     font-family: 'YourFont';
     src: url('/fonts/YourFont-Bold.woff2') format('woff2');
     font-weight: 700;
     font-style: normal;
   }
   ```

3. **Use the font** in `tailwind.config.js`:
   ```javascript
   fontFamily: {
     sans: ['YourFont', 'system-ui', 'sans-serif'],
   },
   ```

#### Font Size Adjustments

To change font sizes throughout the site, edit `tailwind.config.js`:

```javascript
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],     // Extra small
  'sm': ['0.875rem', { lineHeight: '1.25rem' }], // Small
  'base': ['1rem', { lineHeight: '1.5rem' }],    // Normal
  'lg': ['1.125rem', { lineHeight: '1.75rem' }], // Large
  // ... and so on
},
```

---

### C. How to Add and Manage Images

#### Image Storage Location

All images go in the `public/images/` folder:

```
public/
  images/
    team/           ← Team member photos
    favicon/        ← Site icons
    footer/         ← Footer logos
    releases/       ← Album artwork (you'll create this)
    artists/        ← Artist photos (you'll create this)
```

#### Step-by-Step: Adding an Image

**Example: Adding an artist photo**

1. **Prepare your image**:
   - Recommended size: 800x800 pixels (square)
   - Format: JPG or PNG (WebP is best for web)
   - File name: Use lowercase, no spaces (e.g., `artist-name.jpg`)

2. **Add the image file**:
   ```
   Save to: public/images/artists/artist-name.jpg
   ```

3. **Use the image in code**:
   ```tsx
   // In your component file
   <img 
     src="/images/artists/artist-name.jpg" 
     alt="Artist Name"
     className="w-full h-full object-cover"
   />
   ```

#### Image Optimization Tips

**Before uploading images**:

1. **Resize images** to appropriate dimensions:
   - Artist photos: 800x800px
   - Album covers: 1000x1000px
   - Hero images: 1920x1080px
   - Thumbnails: 400x400px

2. **Compress images**:
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Aim for under 200KB per image

3. **Convert to WebP** (best format for web):
   - Use [Squoosh](https://squoosh.app/) to convert
   - WebP images are 25-35% smaller than JPG

#### Changing Existing Images

**Example: Changing the logo**

1. **Find the current logo**:
   ```
   Location: public/logo.svg
   ```

2. **Replace with your new logo**:
   - Keep the same filename: `logo.svg`
   - Or update references in code if you change the name

3. **Update references** (if you changed the filename):
   ```tsx
   // Find in: src/components/Logo.jsx
   <img src="/logo.svg" alt="HLPFL Records" />
   
   // Change to:
   <img src="/your-new-logo.svg" alt="HLPFL Records" />
   ```

---

### D. How to Adjust Colors Throughout the Site

#### Understanding the Color System

Your website uses a color palette defined in `tailwind.config.js`:

**Primary Colors**:
- **Gold**: `#c87941` (your brand color)
- **Dark**: `#0a0a0a` (background)
- **White**: `#ffffff` (text)

#### Method 1: Change the Gold Color

**To change the main brand color**:

1. **Open** `tailwind.config.js`

2. **Find the gold color definition**:
   ```javascript
   colors: {
     gold: {
       DEFAULT: '#c87941',  ← Main gold color
       light: '#d4945c',    ← Lighter shade
       dark: '#a86535',     ← Darker shade
     },
   }
   ```

3. **Change the color values**:
   ```javascript
   colors: {
     gold: {
       DEFAULT: '#your-color-here',  // Example: '#ff6b35'
       light: '#lighter-shade',       // Example: '#ff8c5a'
       dark: '#darker-shade',         // Example: '#cc5529'
     },
   }
   ```

4. **Also update** in `src/app/globals.css`:
   ```css
   :root {
     --gold-primary: #your-color-here;
     --gold-light: #lighter-shade;
     --gold-dark: #darker-shade;
   }
   ```

#### Method 2: Change Background Colors

**To change the dark background**:

1. **Open** `tailwind.config.js`

2. **Find the dark color definition**:
   ```javascript
   dark: {
     DEFAULT: '#0a0a0a',      ← Main background
     secondary: '#1a1a1a',    ← Secondary background
     tertiary: '#2a2a2a',     ← Tertiary background
   },
   ```

3. **Change to your preferred colors**:
   ```javascript
   dark: {
     DEFAULT: '#your-bg-color',
     secondary: '#slightly-lighter',
     tertiary: '#even-lighter',
   },
   ```

#### Color Usage in Components

Colors are applied using Tailwind classes:

```tsx
// Text colors
<p className="text-gold">Gold text</p>
<p className="text-white">White text</p>
<p className="text-gray-300">Gray text</p>

// Background colors
<div className="bg-dark">Dark background</div>
<div className="bg-gold">Gold background</div>

// Hover effects
<button className="hover:text-gold">Hover me</button>
<button className="hover:bg-gold">Hover me</button>
```

#### Finding Where Colors Are Used

**To find all uses of a specific color**:

```bash
# Search for "text-gold" in all files
grep -r "text-gold" src/

# Search for "bg-gold" in all files
grep -r "bg-gold" src/
```

---

### E. How to Remove Elements/Items

#### Understanding Component Structure

Your website is built with components (reusable pieces). To remove something, you need to find and delete the component or its usage.

#### Example 1: Removing a Section from Homepage

**To remove the "Services" section**:

1. **Open** `src/app/page.tsx`

2. **Find the section**:
   ```tsx
   export default function Home() {
     return (
       <>
         <HeroSection />
         <FeaturedArtistsSection />
         <ServicesSection />      ← Remove this line
         <AboutSection />
       </>
     )
   }
   ```

3. **Delete or comment out**:
   ```tsx
   export default function Home() {
     return (
       <>
         <HeroSection />
         <FeaturedArtistsSection />
         {/* <ServicesSection /> */}  ← Commented out
         <AboutSection />
       </>
     )
   }
   ```

#### Example 2: Removing a Navigation Link

**To remove a link from the header**:

1. **Open** `src/components/layout/Header.tsx`

2. **Find the navigation links**:
   ```tsx
   const navItems = [
     { name: 'Home', href: '/' },
     { name: 'Artists', href: '/artists' },
     { name: 'Releases', href: '/releases' },
     { name: 'News', href: '/news' },      ← Remove this
     { name: 'About', href: '/about' },
     { name: 'Contact', href: '/contact' },
   ]
   ```

3. **Delete the item**:
   ```tsx
   const navItems = [
     { name: 'Home', href: '/' },
     { name: 'Artists', href: '/artists' },
     { name: 'Releases', href: '/releases' },
     // { name: 'News', href: '/news' },   ← Commented out
     { name: 'About', href: '/about' },
     { name: 'Contact', href: '/contact' },
   ]
   ```

#### Example 3: Removing an Artist from the List

**To remove an artist**:

1. **Open** `src/data/mockData.ts`

2. **Find the artist in the array**:
   ```typescript
   export const mockArtists = [
     {
       id: '1',
       name: 'Artist Name',
       // ... other properties
     },
     // Delete this entire object to remove the artist
   ]
   ```

#### Safe Removal Tips

**Before removing anything**:

1. **Make a backup**:
   ```bash
   git add .
   git commit -m "Backup before removing [item name]"
   ```

2. **Comment out first** (don't delete immediately):
   ```tsx
   {/* <ComponentToRemove /> */}
   ```

3. **Test the site**:
   ```bash
   npm run dev
   ```

4. **If everything works**, then permanently delete

---

## 3. REPOSITORY NAVIGATION

### A. Directory Structure Explained

```
hlpflrecords/
├── public/                    ← Static files (images, fonts, etc.)
│   ├── images/               ← All images
│   │   ├── team/            ← Team photos
│   │   ├── favicon/         ← Site icons
│   │   └── footer/          ← Footer images
│   ├── manifest.json        ← PWA configuration
│   ├── robots.txt           ← Search engine instructions
│   └── sitemap.xml          ← Site map for SEO
│
├── src/                      ← Source code (main folder)
│   ├── app/                 ← Pages and routes
│   │   ├── page.tsx         ← Homepage
│   │   ├── layout.tsx       ← Main layout wrapper
│   │   ├── globals.css      ← Global styles
│   │   ├── about/           ← About page
│   │   ├── artists/         ← Artists page
│   │   ├── contact/         ← Contact page
│   │   ├── releases/        ← Releases page
│   │   ├── news/            ← News page
│   │   └── api/             ← API routes
│   │       ├── contact/     ← Contact form API
│   │       └── chatbot-analytics/ ← Chatbot API
│   │
│   ├── components/          ← Reusable components
│   │   ├── layout/          ← Layout components
│   │   │   ├── Header.tsx   ← Site header
│   │   │   └── Footer.tsx   ← Site footer
│   │   ├── sections/        ← Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   └── FeaturedArtistsSection.tsx
│   │   ├── ui/              ← UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Chatbot.tsx
│   │   ├── Logo.jsx         ← Logo component
│   │   └── LoadingScreen.jsx ← Loading screen
│   │
│   ├── data/                ← Data files
│   │   └── mockData.ts      ← Mock data (artists, releases)
│   │
│   ├── lib/                 ← Utility functions
│   │   ├── utils.ts         ← Helper functions
│   │   ├── logger.ts        ← Logging utility
│   │   ├── structuredData.ts ← SEO data
│   │   └── chatbotAnalytics.ts ← Analytics
│   │
│   ├── styles/              ← Style files
│   │   ├── Loading.module.css ← Loading screen styles
│   │   └── animations.css   ← Animation styles
│   │
│   └── types/               ← TypeScript types
│       └── index.ts         ← Type definitions
│
├── node_modules/            ← Dependencies (don't edit)
├── .next/                   ← Build output (don't edit)
├── out/                     ← Production build (don't edit)
│
├── package.json             ← Project configuration
├── next.config.js           ← Next.js configuration
├── tailwind.config.js       ← Tailwind CSS configuration
├── tsconfig.json            ← TypeScript configuration
├── .gitignore               ← Git ignore rules
└── README.md                ← Project documentation
```

### B. Where to Find Each Type of File

#### HTML Files
**Location**: Generated automatically from `.tsx` files  
**Don't edit**: The `.html` files in the `out/` folder  
**Do edit**: The `.tsx` files in `src/app/` and `src/components/`

#### CSS Files
**Global styles**: `src/app/globals.css`  
**Component styles**: `src/styles/*.module.css`  
**Tailwind config**: `tailwind.config.js`

#### JavaScript/TypeScript Files
**Pages**: `src/app/*/page.tsx`  
**Components**: `src/components/**/*.tsx`  
**Utilities**: `src/lib/*.ts`  
**Data**: `src/data/*.ts`

#### Images
**All images**: `public/images/`  
**Team photos**: `public/images/team/`  
**Icons**: `public/images/favicon/`

#### Configuration Files
**Next.js**: `next.config.js`  
**Tailwind**: `tailwind.config.js`  
**TypeScript**: `tsconfig.json`  
**Package**: `package.json`

### C. Best Practices for Organizing Files

#### File Naming Conventions

**Components** (PascalCase):
```
HeroSection.tsx
AboutSection.tsx
Button.tsx
Card.tsx
```

**Utilities** (camelCase):
```
utils.ts
logger.ts
chatbotAnalytics.ts
```

**Styles** (kebab-case):
```
Loading.module.css
animations.css
```

**Images** (lowercase, hyphens):
```
artist-name.jpg
album-cover.png
team-photo.jpg
```

#### Folder Organization Tips

1. **Keep related files together**:
   ```
   components/
     sections/
       HeroSection.tsx
       HeroSection.module.css  ← If it had specific styles
   ```

2. **Use descriptive names**:
   ```
   ✅ Good: FeaturedArtistsSection.tsx
   ❌ Bad: Section1.tsx
   ```

3. **Group by feature**:
   ```
   app/
     artists/
       page.tsx
       [id]/
         page.tsx  ← Individual artist page
   ```

---

## 4. TECHNICAL OVERVIEW

### A. What Programming Languages/Technologies Are Used

#### 1. **TypeScript** (.ts, .tsx files)

**What it is**: A programming language that adds types to JavaScript  
**Why we use it**: Catches errors before they happen  
**File extensions**: `.ts` (TypeScript) and `.tsx` (TypeScript + React)

**Example**:
```typescript
// TypeScript helps catch errors
interface Artist {
  name: string;      // Must be text
  age: number;       // Must be a number
  active: boolean;   // Must be true/false
}

// This would cause an error:
const artist: Artist = {
  name: "John",
  age: "25",  // ❌ Error: should be number, not string
  active: true
}
```

#### 2. **React** (Component-based UI)

**What it is**: A library for building user interfaces  
**Why we use it**: Makes it easy to create reusable components  
**How it works**: Components are like LEGO blocks you can reuse

**Example**:
```tsx
// A simple React component
function Button({ text }) {
  return (
    <button className="bg-gold text-white px-4 py-2">
      {text}
    </button>
  )
}

// Use it multiple times:
<Button text="Click Me" />
<Button text="Submit" />
<Button text="Learn More" />
```

#### 3. **Next.js** (React Framework)

**What it is**: A framework built on top of React  
**Why we use it**: Handles routing, optimization, and building  
**Key features**:
- File-based routing (folders = pages)
- Automatic code splitting
- Image optimization
- SEO optimization

#### 4. **Tailwind CSS** (Styling)

**What it is**: A utility-first CSS framework  
**Why we use it**: Fast styling with pre-made classes  
**How it works**: Add classes directly to HTML elements

**Example**:
```tsx
// Instead of writing CSS:
<div style={{ backgroundColor: 'gold', padding: '16px' }}>

// Use Tailwind classes:
<div className="bg-gold p-4">
```

#### 5. **CSS** (Styling)

**What it is**: The language for styling web pages  
**Where we use it**: 
- `globals.css` for site-wide styles
- `.module.css` files for component-specific styles

**Example**:
```css
/* CSS controls how things look */
.button {
  background-color: #c87941;  /* Gold color */
  padding: 16px;              /* Space inside */
  border-radius: 8px;         /* Rounded corners */
}
```

### B. How Each Language Functions in the Project

#### The Flow of Your Website

```
1. User visits website
   ↓
2. Next.js loads the page (TypeScript/React)
   ↓
3. React components render (TSX files)
   ↓
4. Tailwind CSS styles the components
   ↓
5. Custom CSS adds special styles
   ↓
6. JavaScript adds interactivity
   ↓
7. User sees the final page
```

#### How Files Work Together

**Example: Displaying an artist**

1. **Data** (`src/data/mockData.ts`):
   ```typescript
   export const mockArtists = [
     {
       id: '1',
       name: 'Artist Name',
       bio: 'Artist bio...'
     }
   ]
   ```

2. **Component** (`src/app/artists/page.tsx`):
   ```tsx
   import { mockArtists } from '@/data/mockData'
   
   export default function ArtistsPage() {
     return (
       <div>
         {mockArtists.map(artist => (
           <div key={artist.id}>
             <h2>{artist.name}</h2>
             <p>{artist.bio}</p>
           </div>
         ))}
       </div>
     )
   }
   ```

3. **Styles** (Tailwind classes):
   ```tsx
   <div className="bg-dark p-6 rounded-lg">
     <h2 className="text-2xl font-bold text-gold">
       {artist.name}
     </h2>
   </div>
   ```

### C. Key Differences Between File Types

#### HTML vs TSX

**HTML** (`.html`):
```html
<!-- Static HTML -->
<div class="container">
  <h1>Hello World</h1>
  <p>This is static text</p>
</div>
```

**TSX** (`.tsx`):
```tsx
// Dynamic TSX (can use variables, logic)
function Greeting({ name }) {
  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <p>This text can change!</p>
    </div>
  )
}
```

**Key Differences**:
- HTML is static (doesn't change)
- TSX is dynamic (can use variables and logic)
- TSX uses `className` instead of `class`
- TSX can embed JavaScript with `{}`

#### CSS vs Tailwind

**Regular CSS** (`.css`):
```css
.button {
  background-color: #c87941;
  padding: 16px;
  border-radius: 8px;
  color: white;
}
```

**Tailwind CSS** (in TSX):
```tsx
<button className="bg-gold p-4 rounded-lg text-white">
  Click Me
</button>
```

**Key Differences**:
- CSS: Write styles in separate file
- Tailwind: Apply styles directly with classes
- CSS: More control, more code
- Tailwind: Faster, more consistent

#### TypeScript vs JavaScript

**JavaScript** (`.js`):
```javascript
// No type checking
function addNumbers(a, b) {
  return a + b
}

addNumbers(5, "10")  // Returns "510" (string concatenation)
```

**TypeScript** (`.ts`):
```typescript
// With type checking
function addNumbers(a: number, b: number): number {
  return a + b
}

addNumbers(5, "10")  // ❌ Error: "10" is not a number
```

**Key Differences**:
- JavaScript: No type checking
- TypeScript: Catches type errors
- TypeScript: Better IDE support
- TypeScript: Compiles to JavaScript

### D. How These Files Interact

#### The Component Hierarchy

```
App (layout.tsx)
├── Header (Header.tsx)
├── Page Content
│   ├── HeroSection (HeroSection.tsx)
│   ├── FeaturedArtists (FeaturedArtistsSection.tsx)
│   ├── Services (ServicesSection.tsx)
│   └── About (AboutSection.tsx)
├── Footer (Footer.tsx)
└── Chatbot (Chatbot.tsx)
```

#### Data Flow

```
mockData.ts (data)
    ↓
page.tsx (imports data)
    ↓
Component (receives data as props)
    ↓
UI (displays data)
```

**Example**:
```typescript
// 1. Data source
// mockData.ts
export const artists = [...]

// 2. Page imports data
// page.tsx
import { artists } from '@/data/mockData'

// 3. Pass to component
<ArtistCard artist={artists[0]} />

// 4. Component displays
function ArtistCard({ artist }) {
  return <div>{artist.name}</div>
}
```

---

## 5. FOR BEGINNERS

### A. Simplified Explanations

#### What is a Component?

Think of components like LEGO blocks:
- Each block (component) is reusable
- You can combine blocks to build something bigger
- Change one block, and it updates everywhere it's used

**Example**:
```tsx
// Button component (the LEGO block)
function Button({ text }) {
  return <button>{text}</button>
}

// Use it multiple times
<Button text="Save" />
<Button text="Cancel" />
<Button text="Submit" />
```

#### What is Props?

Props are like function arguments - they pass information to components:

```tsx
// Component that receives props
function Greeting({ name, age }) {
  return <p>Hello {name}, you are {age} years old</p>
}

// Using the component with different props
<Greeting name="John" age={25} />
<Greeting name="Jane" age={30} />
```

#### What is State?

State is like a component's memory - it remembers things:

```tsx
function Counter() {
  const [count, setCount] = useState(0)  // State: remembers count
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
```

#### What is JSX/TSX?

JSX/TSX is HTML-like syntax in JavaScript/TypeScript:

```tsx
// Looks like HTML
<div className="container">
  <h1>Hello World</h1>
</div>

// But can use JavaScript
<div className="container">
  <h1>Hello {userName}</h1>
  {isLoggedIn && <p>Welcome back!</p>}
</div>
```

### B. Common Pitfalls and How to Avoid Them

#### Pitfall 1: Forgetting to Save Files

**Problem**: You make changes but don't see them  
**Solution**: Always save with `Ctrl+S` (Windows) or `Cmd+S` (Mac)

#### Pitfall 2: Editing the Wrong File

**Problem**: You edit `out/index.html` instead of `src/app/page.tsx`  
**Solution**: 
- ✅ Edit files in `src/` folder
- ❌ Don't edit files in `out/` or `.next/` folders

#### Pitfall 3: Breaking the Syntax

**Problem**: Missing a closing tag or bracket  
**Solution**: Use VS Code - it highlights errors

```tsx
// ❌ Wrong (missing closing tag)
<div>
  <p>Hello

// ✅ Correct
<div>
  <p>Hello</p>
</div>
```

#### Pitfall 4: Case Sensitivity

**Problem**: `className` vs `classname`  
**Solution**: Always use exact case

```tsx
// ❌ Wrong
<div classname="container">

// ✅ Correct
<div className="container">
```

#### Pitfall 5: Forgetting to Import

**Problem**: Using a component without importing it  
**Solution**: Always import at the top

```tsx
// ❌ Wrong
function Page() {
  return <Button />  // Error: Button is not defined
}

// ✅ Correct
import { Button } from '@/components/ui/Button'

function Page() {
  return <Button />
}
```

### C. Step-by-Step Workflows for Common Tasks

#### Workflow 1: Adding a New Page

**Goal**: Create a new "Services" page

1. **Create the folder and file**:
   ```
   src/app/services/page.tsx
   ```

2. **Add basic content**:
   ```tsx
   export default function ServicesPage() {
     return (
       <div className="min-h-screen bg-dark p-8">
         <h1 className="text-4xl font-bold text-white">
           Our Services
         </h1>
         <p className="text-gray-300 mt-4">
           Content goes here...
         </p>
       </div>
     )
   }
   ```

3. **Add to navigation** in `src/components/layout/Header.tsx`:
   ```tsx
   const navItems = [
     // ... existing items
     { name: 'Services', href: '/services' },
   ]
   ```

4. **Test it**:
   ```bash
   npm run dev
   ```
   Visit: http://localhost:3000/services

#### Workflow 2: Updating Artist Information

**Goal**: Change an artist's bio

1. **Open the data file**:
   ```
   src/data/mockData.ts
   ```

2. **Find the artist**:
   ```typescript
   export const mockArtists = [
     {
       id: '1',
       name: 'Artist Name',
       bio: 'Old bio text...',  ← Change this
     }
   ]
   ```

3. **Update the bio**:
   ```typescript
   bio: 'New bio text here...',
   ```

4. **Save and check**:
   ```bash
   npm run dev
   ```
   Visit: http://localhost:3000/artists

#### Workflow 3: Changing a Color Site-Wide

**Goal**: Change gold to blue

1. **Open Tailwind config**:
   ```
   tailwind.config.js
   ```

2. **Find the color**:
   ```javascript
   colors: {
     gold: {
       DEFAULT: '#c87941',  ← Change this
     }
   }
   ```

3. **Change to blue**:
   ```javascript
   colors: {
     gold: {  // Keep the name "gold" for now
       DEFAULT: '#3b82f6',  // Blue color
     }
   }
   ```

4. **Update CSS variables** in `src/app/globals.css`:
   ```css
   :root {
     --gold-primary: #3b82f6;
   }
   ```

5. **Restart dev server**:
   ```bash
   # Stop with Ctrl+C
   npm run dev
   ```

#### Workflow 4: Adding a New Release

**Goal**: Add a new album to the releases page

1. **Open the data file**:
   ```
   src/data/mockData.ts
   ```

2. **Find the releases array**:
   ```typescript
   export const mockReleases = [
     // Existing releases...
   ]
   ```

3. **Add your new release**:
   ```typescript
   export const mockReleases = [
     {
       id: 'new-id',
       title: 'Album Title',
       artist: 'Artist Name',
       artistId: '1',
       type: 'album',
       releaseDate: '2025-01-01',
       description: 'Album description...',
       tracks: [
         {
           id: '1',
           title: 'Track 1',
           duration: '3:45'
         },
         // Add more tracks...
       ],
       links: {
         spotify: 'https://spotify.com/...',
         apple: 'https://music.apple.com/...',
       }
     },
     // ... existing releases
   ]
   ```

4. **Save and check**:
   ```bash
   npm run dev
   ```
   Visit: http://localhost:3000/releases

---

## 6. COMMON TASKS

### Quick Reference Guide

#### Task: Change Homepage Headline

**File**: `src/components/sections/HeroSection.tsx`  
**Line**: Look for `<h1>` tag  
**Change**: Update text between tags

#### Task: Update Contact Email

**File**: `src/app/contact/page.tsx`  
**Line**: Look for `contact@hlpflrecords.com`  
**Change**: Replace with your email

#### Task: Add Social Media Link

**File**: `src/components/layout/Footer.tsx`  
**Line**: Look for social media section  
**Add**: New link in the array

#### Task: Change Loading Screen Color

**File**: `src/styles/Loading.module.css`  
**Line**: `.loading-screen` background  
**Change**: Update gradient colors

#### Task: Update Copyright Year

**File**: `src/components/layout/Footer.tsx`  
**Line**: Look for copyright text  
**Change**: Update year

---

## 7. TROUBLESHOOTING

### Common Errors and Solutions

#### Error: "Module not found"

**Problem**: Import path is wrong  
**Solution**: Check the file path

```tsx
// ❌ Wrong
import { Button } from './Button'

// ✅ Correct (using alias)
import { Button } from '@/components/ui/Button'
```

#### Error: "Unexpected token"

**Problem**: Syntax error (missing bracket, tag, etc.)  
**Solution**: Check for:
- Missing closing tags: `</div>`
- Missing brackets: `}`
- Missing semicolons: `;`

#### Error: "Cannot find module"

**Problem**: Package not installed  
**Solution**: Install dependencies

```bash
npm install
```

#### Error: "Port 3000 is already in use"

**Problem**: Dev server already running  
**Solution**: 
1. Stop the running server (Ctrl+C)
2. Or use a different port:
   ```bash
   npm run dev -- -p 3001
   ```

#### Error: Build fails

**Problem**: TypeScript or syntax errors  
**Solution**:
1. Check the error message
2. Fix the file mentioned
3. Run type check:
   ```bash
   npm run type-check
   ```

### Getting Help

#### Where to Look

1. **Error message**: Read it carefully - it usually tells you what's wrong
2. **File and line number**: Error shows where the problem is
3. **VS Code**: Hover over red squiggly lines for hints

#### How to Ask for Help

When asking for help, provide:
1. **What you were trying to do**
2. **What you changed**
3. **The error message** (full text)
4. **The file name and line number**
5. **Screenshots** (if helpful)

---

## 8. ADDITIONAL RESOURCES

### Essential Tools

#### 1. VS Code (Text Editor)
- **Download**: https://code.visualstudio.com/
- **Extensions to install**:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - Auto Rename Tag

#### 2. Git (Version Control)
- **Download**: https://git-scm.com/
- **Learn**: https://try.github.io/

#### 3. Node.js (JavaScript Runtime)
- **Download**: https://nodejs.org/
- **Version**: Use LTS (Long Term Support)

### Learning Resources

#### For Beginners

1. **HTML & CSS**:
   - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn)
   - [W3Schools](https://www.w3schools.com/)

2. **JavaScript**:
   - [JavaScript.info](https://javascript.info/)
   - [freeCodeCamp](https://www.freecodecamp.org/)

3. **React**:
   - [React Official Tutorial](https://react.dev/learn)
   - [React for Beginners](https://reactforbeginners.com/)

4. **Next.js**:
   - [Next.js Tutorial](https://nextjs.org/learn)
   - [Next.js Documentation](https://nextjs.org/docs)

5. **Tailwind CSS**:
   - [Tailwind Documentation](https://tailwindcss.com/docs)
   - [Tailwind UI](https://tailwindui.com/)

#### Video Tutorials

1. **YouTube Channels**:
   - Traversy Media
   - Web Dev Simplified
   - Fireship
   - The Net Ninja

2. **Courses**:
   - [Udemy](https://www.udemy.com/)
   - [Coursera](https://www.coursera.org/)
   - [Frontend Masters](https://frontendmasters.com/)

### Useful Commands

#### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for TypeScript errors
npm run type-check

# Format code
npm run format
```

#### Git Commands

```bash
# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push

# Pull latest changes
git pull

# Create new branch
git checkout -b branch-name
```

### Quick Reference Cheat Sheet

#### File Extensions

| Extension | What It Is | Can I Edit? |
|-----------|-----------|-------------|
| `.tsx` | TypeScript + React | ✅ Yes |
| `.ts` | TypeScript | ✅ Yes |
| `.css` | Styles | ✅ Yes |
| `.json` | Configuration | ✅ Yes (carefully) |
| `.md` | Documentation | ✅ Yes |
| `.html` | Generated HTML | ❌ No (auto-generated) |
| `.js` | JavaScript | ✅ Yes |

#### Tailwind Classes Quick Reference

```tsx
// Colors
className="text-gold"        // Gold text
className="bg-dark"          // Dark background
className="text-white"       // White text

// Spacing
className="p-4"              // Padding all sides
className="px-4"             // Padding left/right
className="py-4"             // Padding top/bottom
className="m-4"              // Margin all sides

// Layout
className="flex"             // Flexbox
className="grid"             // Grid
className="hidden"           // Hide element
className="block"            // Show as block

// Text
className="text-xl"          // Extra large text
className="font-bold"        // Bold text
className="text-center"      // Center text

// Responsive
className="md:text-xl"       // Large text on medium+ screens
className="lg:flex"          // Flex on large+ screens
```

---

## APPENDIX

### A. Glossary of Terms

**Component**: A reusable piece of UI (like a button or card)  
**Props**: Data passed to a component  
**State**: Data that can change within a component  
**Hook**: Special function that adds features to components (useState, useEffect)  
**JSX/TSX**: HTML-like syntax in JavaScript/TypeScript  
**Import**: Bringing code from another file  
**Export**: Making code available to other files  
**API**: Application Programming Interface (how programs talk to each other)  
**Route**: A URL path (like `/about` or `/contact`)  
**Build**: Converting source code to production-ready files  
**Deploy**: Publishing your website to the internet  

### B. File Type Reference

**Source Files** (Edit these):
- `.tsx` - TypeScript + React components
- `.ts` - TypeScript files
- `.css` - Style files
- `.json` - Configuration files

**Generated Files** (Don't edit):
- `.html` - Generated HTML
- `.js` in `out/` - Compiled JavaScript
- Files in `.next/` - Build cache

**Configuration Files**:
- `package.json` - Project dependencies
- `next.config.js` - Next.js settings
- `tailwind.config.js` - Tailwind settings
- `tsconfig.json` - TypeScript settings

### C. Color Palette Reference

**Current Colors**:
```
Gold:
- Primary: #c87941
- Light: #d4945c
- Dark: #a86535

Dark:
- Primary: #0a0a0a
- Secondary: #1a1a1a
- Tertiary: #2a2a2a

Grays:
- 300: #d1d5db
- 400: #9ca3af
- 500: #6b7280
```

### D. Recommended Font Combinations

**Option 1: Modern & Clean**
- Headings: Montserrat Bold
- Body: Inter Regular

**Option 2: Elegant & Sophisticated**
- Headings: Playfair Display
- Body: Source Sans Pro

**Option 3: Bold & Impactful**
- Headings: Bebas Neue
- Body: Roboto

**Option 4: Friendly & Approachable**
- Headings: Poppins Bold
- Body: Open Sans

---

## CONCLUSION

This manual is your complete guide to managing the HLPFL Records website. Remember:

1. **Always make backups** before major changes
2. **Test locally** before deploying
3. **Start small** - make one change at a time
4. **Don't be afraid** to experiment (you can always undo)
5. **Ask for help** when you need it

### Next Steps

1. **Familiarize yourself** with the file structure
2. **Make a small change** (like updating text)
3. **Test it** in development mode
4. **Build confidence** with more changes
5. **Refer back** to this manual as needed

### Support

For additional help:
- Review the documentation in `/docs`
- Check the TESTING_GUIDE.md
- Refer to DEPLOYMENT_GUIDE_COMPLETE.md
- Search online for specific questions

---

**Document Version**: 1.0  
**Last Updated**: December 17, 2025  
**Maintained By**: HLPFL Records Team

**Questions or Suggestions?**  
Please update this document as you learn new things!