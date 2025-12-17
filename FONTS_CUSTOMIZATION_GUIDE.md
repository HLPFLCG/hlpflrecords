# HLPFL Records Fonts & Customization Guide

## 📋 Table of Contents
1. [Font System Overview](#font-system-overview)
2. [Changing Fonts](#changing-fonts)
3. [Color Customization](#color-customization)
4. [Loading Screen Customization](#loading-screen-customization)
5. [Advanced Styling](#advanced-styling)
6. [Brand Consistency](#brand-consistency)

---

## 🎨 Font System Overview

### Current Font Stack
- **Headings**: Montserrat (bold, modern)
- **Body Text**: Inter (clean, readable)
- **Monospace**: JetBrains Mono (for code)

### Font Loading Strategy
```typescript
// src/app/layout.tsx
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Improves loading performance
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})
```

### CSS Variables
```css
/* src/app/globals.css */
:root {
  --font-body: var(--font-inter);
  --font-heading: var(--font-montserrat);
}
```

---

## 🔤 Changing Fonts

### 1. Choose New Fonts
**Popular Alternatives**:
- **Playfair Display** + **Source Sans Pro** (Elegant)
- **Bebas Neue** + **Roboto** (Bold)
- **Poppins** + **Open Sans** (Friendly)
- **Space Grotesk** + **DM Sans** (Modern)

### 2. Import New Fonts
**File**: `src/app/layout.tsx`
```typescript
// Example: Change to Playfair Display + Source Sans Pro
import { Source_Sans_Pro } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'

const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  variable: '--font-source-sans-pro',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
  weight: ['400', '700', '900'],
})
```

### 3. Update Font Variables
**File**: `src/app/layout.tsx`
```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={sourceSansPro.className}>
        {/* Content */}
      </body>
    </html>
  )
}
```

### 4. Update CSS Classes
**File**: `src/app/globals.css`
```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-playfair-display), system-ui, sans-serif;
  font-weight: 700;
}

body {
  font-family: var(--font-source-sans-pro), system-ui, sans-serif;
}
```

### 5. Update Tailwind Config
**File**: `tailwind.config.js`
```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}
```

---

## 🎨 Color Customization

### Current Color Palette
```javascript
// tailwind.config.js
colors: {
  gold: {
    DEFAULT: '#c87941',    // Primary gold
    light: '#d4945c',       // Light gold
    dark: '#a86535',        // Dark gold
    50: '#fef7f0',          // Very light gold
    500: '#c87941',         // Standard gold
    900: '#55351d',         // Very dark gold
  },
  dark: {
    DEFAULT: '#0a0a0a',     // Primary dark
    secondary: '#1a1a1a',   // Secondary dark
    tertiary: '#2a2a2a',    // Tertiary dark
  }
}
```

### Changing Colors

#### 1. Primary Brand Color
**File**: `tailwind.config.js`
```javascript
colors: {
  // Example: Change to blue theme
  primary: {
    DEFAULT: '#2563eb',      // Primary blue
    light: '#3b82f6',        // Light blue
    dark: '#1d4ed8',         // Dark blue
  }
}
```

#### 2. Update CSS Variables
**File**: `src/app/globals.css`
```css
:root {
  --gold-primary: #2563eb;     /* New primary color */
  --gold-light: #3b82f6;       /* Light variant */
  --gold-dark: #1d4ed8;        /* Dark variant */
}
```

#### 3. Update Component References
**Search and replace**:
```bash
# Find all gold color references
grep -r "text-gold\|bg-gold\|border-gold" src/

# Replace with new color (e.g., primary)
# text-gold → text-primary
# bg-gold → bg-primary
```

### Color Usage Guide
| Element | Current Class | New Class (if changing) |
|---------|---------------|-------------------------|
| Headings | `text-gold` | `text-primary` |
| Buttons | `bg-gold` | `bg-primary` |
| Borders | `border-gold` | `border-primary` |
| Icons | `text-gold` | `text-primary` |

---

## ⏳ Loading Screen Customization

### Current Loading Screen
**File**: `src/components/LoadingScreen.tsx`
```typescript
export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <Logo className="loading-logo" />
        <div className="loading-spinner" />
      </div>
    </div>
  )
}
```

### Customization Options

#### 1. Change Colors
**File**: `src/styles/Loading.module.css`
```css
.loading-screen {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
}

.loading-spinner {
  border-top-color: #c87941; /* Gold spinner */
}

.loading-logo {
  filter: brightness(0) invert(1); /* White logo */
}
```

#### 2. Change Animation
**Option A**: Custom Spinner
```css
.custom-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(200, 121, 65, 0.2);
  border-top: 3px solid #c87941;
  border-radius: 50%;
  animation: custom-spin 1s linear infinite;
}

@keyframes custom-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

**Option B**: Pulse Animation
```css
.pulse-loader {
  width: 60px;
  height: 60px;
  background: #c87941;
  border-radius: 50%;
  animation: custom-pulse 1.5s ease-in-out infinite;
}

@keyframes custom-pulse {
  0%, 100% { transform: scale(0.9); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 1; }
}
```

**Option C**: Text Animation
```css
.loading-text {
  font-family: var(--font-montserrat);
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, #c87941, #d4945c, #c87941);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

#### 3. Update Loading Component
**File**: `src/components/LoadingScreen.tsx`
```typescript
// Example: Custom pulse loading
export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <Logo className="loading-logo" />
        <div className="pulse-loader" />
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  )
}
```

---

## 🎯 Advanced Styling

### 1. Custom Components
**Create new styled component**:
```typescript
// src/components/ui/PremiumHeading.tsx
import React from 'react'
import styles from '../styles/PremiumHeading.module.css'

interface PremiumHeadingProps {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export default function PremiumHeading({ 
  children, 
  size = 'medium', 
  className = '' 
}: PremiumHeadingProps) {
  return (
    <h1 className={`${styles.heading} ${styles[size]} ${className}`}>
      {children}
    </h1>
  )
}
```

**Custom CSS**:
```css
/* src/styles/PremiumHeading.module.css */
.heading {
  font-family: var(--font-montserrat);
  font-weight: 700;
  background: linear-gradient(-45deg, #c87941, #d4945c, #a86535);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 3s ease infinite;
}

.small { font-size: 1.5rem; }
.medium { font-size: 2rem; }
.large { font-size: 3rem; }
```

### 2. Responsive Typography
**File**: `tailwind.config.js`
```javascript
module.exports = {
  theme: {
    extend: {
      fontSize: {
        'hero': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1' }],
        'section': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
      },
    },
  },
}
```

### 3. Animation Customization
**Add new animations**:
```css
/* src/app/globals.css */
@keyframes slide-in-blurred {
  0% {
    transform: translateX(-100px);
    opacity: 0;
    filter: blur(10px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
    filter: blur(0);
  }
}

.animate-slide-in-blurred {
  animation: slide-in-blurred 0.6s ease-out;
}
```

---

## 🎭 Brand Consistency

### Typography Scale
```css
/* Consistent sizing system */
.text-xs { font-size: 0.75rem; }    /* 12px */
.text-sm { font-size: 0.875rem; }   /* 14px */
.text-base { font-size: 1rem; }     /* 16px */
.text-lg { font-size: 1.125rem; }   /* 18px */
.text-xl { font-size: 1.25rem; }    /* 20px */
.text-2xl { font-size: 1.5rem; }    /* 24px */
.text-3xl { font-size: 1.875rem; }  /* 30px */
.text-4xl { font-size: 2.25rem; }   /* 36px */
.text-5xl { font-size: 3rem; }      /* 48px */
```

### Spacing System
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',    /* 72px */
        '88': '22rem',     /* 352px */
        '128': '32rem',    /* 512px */
        '144': '36rem',    /* 576px */
      }
    }
  }
}
```

### Component Library Standards
```typescript
// Standard button variants
const buttonVariants = {
  primary: 'bg-gold text-dark hover:bg-gold-light',
  secondary: 'bg-dark-secondary text-white hover:bg-dark-tertiary',
  outline: 'border-gold text-gold hover:bg-gold hover:text-dark',
  ghost: 'text-gold hover:bg-gold/10',
}

// Standard card styles
const cardVariants = {
  default: 'bg-dark-secondary border border-gray-700',
  glass: 'bg-white/10 backdrop-blur-lg border border-white/20',
  premium: 'bg-gradient-to-br from-gold/10 to-transparent border border-gold/20',
}
```

---

## 🚀 Implementation Checklist

### Font Changes
- [ ] Choose new fonts from Google Fonts
- [ ] Update imports in `layout.tsx`
- [ ] Update CSS font variables
- [ ] Update Tailwind config
- [ ] Test all heading levels
- [ ] Verify mobile responsiveness

### Color Changes
- [ ] Define new color palette
- [ ] Update Tailwind config
- [ ] Update CSS variables
- [ ] Replace color classes in components
- [ ] Test contrast ratios
- [ ] Verify accessibility

### Loading Screen Changes
- [ ] Choose animation style
- [ ] Update CSS animations
- [ ] Modify component if needed
- [ ] Test loading performance
- [ ] Verify mobile display

### Testing
- [ ] Check all pages for consistent styling
- [ ] Test on mobile devices
- [ ] Verify accessibility (WCAG)
- [ ] Check loading performance
- [ ] Test browser compatibility

---

## 💡 Pro Tips

### Performance
1. **Limit font weights** to reduce file size
2. **Use `display: swap`** for better loading
3. **Optimize font subsets** for your language
4. **Preload critical fonts** if needed

### Accessibility
1. **Maintain contrast ratios** (4.5:1 minimum)
2. **Use relative units** for scalability
3. **Test with screen readers**
4. **Ensure keyboard navigation**

### Brand Guidelines
1. **Document color codes** and usage
2. **Create component examples** for team
3. **Maintain consistent spacing** throughout
4. **Test across different devices**

---

## 📞 Support

For customization assistance:
- 📧 Email: contact@hlpfl.org
- 📱 Phone: 616-313-5215
- 📍 Location: Grand Rapids, MI

Happy customizing! 🎨