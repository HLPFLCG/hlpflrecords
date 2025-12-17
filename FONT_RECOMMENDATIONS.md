# Font Recommendations for HLPFL Records

**Current Font**: Inter  
**Date**: December 17, 2025

---

## Recommended Font Combinations

### Option 1: Modern & Professional (Recommended)
**Best for**: Clean, contemporary music label aesthetic

**Fonts**:
- **Headings**: Montserrat (Bold, ExtraBold)
- **Body**: Inter (Regular, Medium)

**Why This Works**:
- Montserrat has strong, geometric letterforms perfect for headlines
- Inter is highly readable for body text
- Both fonts are modern and professional
- Excellent web performance

**Implementation**:
```css
/* In src/app/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@300;400;500;600&display=swap');

body {
  font-family: 'Inter', system-ui, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', system-ui, sans-serif;
}
```

---

### Option 2: Bold & Impactful
**Best for**: Strong brand presence, urban/hip-hop aesthetic

**Fonts**:
- **Headings**: Bebas Neue (Regular, Bold)
- **Body**: Roboto (Regular, Medium)

**Why This Works**:
- Bebas Neue is bold and attention-grabbing
- Perfect for music industry branding
- Roboto provides excellent readability
- Great contrast between headings and body

**Implementation**:
```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;500;700&display=swap');

body {
  font-family: 'Roboto', system-ui, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Bebas Neue', system-ui, sans-serif;
  letter-spacing: 0.05em; /* Bebas Neue benefits from letter spacing */
}
```

---

### Option 3: Elegant & Sophisticated
**Best for**: Premium, high-end label aesthetic

**Fonts**:
- **Headings**: Playfair Display (Bold, Black)
- **Body**: Source Sans Pro (Regular, SemiBold)

**Why This Works**:
- Playfair Display adds elegance and class
- Source Sans Pro is clean and modern
- Perfect for a premium brand image
- Great for classical, jazz, or sophisticated genres

**Implementation**:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Sans+Pro:wght@300;400;600&display=swap');

body {
  font-family: 'Source Sans Pro', system-ui, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}
```

---

### Option 4: Friendly & Approachable
**Best for**: Indie, pop, or youth-oriented label

**Fonts**:
- **Headings**: Poppins (Bold, ExtraBold)
- **Body**: Open Sans (Regular, SemiBold)

**Why This Works**:
- Poppins has rounded, friendly letterforms
- Open Sans is highly readable and neutral
- Approachable and modern
- Great for diverse music genres

**Implementation**:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Open+Sans:wght@300;400;600&display=swap');

body {
  font-family: 'Open Sans', system-ui, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', system-ui, sans-serif;
}
```

---

### Option 5: Edgy & Contemporary
**Best for**: Electronic, experimental, or alternative music

**Fonts**:
- **Headings**: Space Grotesk (Bold)
- **Body**: DM Sans (Regular, Medium)

**Why This Works**:
- Space Grotesk has a unique, modern character
- DM Sans is clean and geometric
- Perfect for forward-thinking labels
- Great for electronic/experimental genres

**Implementation**:
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=DM+Sans:wght@400;500;700&display=swap');

body {
  font-family: 'DM Sans', system-ui, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Space Grotesk', system-ui, sans-serif;
}
```

---

## Complete Implementation Guide

### Step 1: Choose Your Font Combination

Pick one of the options above based on your brand aesthetic.

### Step 2: Update globals.css

**File**: `src/app/globals.css`

1. **Remove the old import**:
```css
/* REMOVE THIS */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
```

2. **Add your new import** (example with Montserrat + Inter):
```css
/* ADD THIS */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@300;400;500;600&display=swap');
```

3. **Update the body font**:
```css
body {
  font-family: 'Inter', system-ui, sans-serif; /* or your chosen body font */
}
```

4. **Add heading styles** (if not already present):
```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', system-ui, sans-serif; /* or your chosen heading font */
  font-weight: 700;
}
```

### Step 3: Update tailwind.config.js

**File**: `tailwind.config.js`

Update the fontFamily section:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],        // Body font
  display: ['Montserrat', 'system-ui', 'sans-serif'], // Heading font
  mono: ['JetBrains Mono', 'monospace'],              // Code font (keep as is)
},
```

### Step 4: Apply Fonts in Components

Use Tailwind classes to apply fonts:

```tsx
// For body text (uses default sans)
<p className="font-sans">Body text</p>

// For headings (uses display font)
<h1 className="font-display">Heading</h1>

// You can also use font-sans or font-display explicitly
<div className="font-display text-4xl font-bold">
  HLPFL Records
</div>
```

### Step 5: Test and Adjust

1. **Start dev server**:
```bash
npm run dev
```

2. **Check all pages**:
- Homepage
- Artists page
- Releases page
- Contact page
- About page

3. **Adjust font weights if needed** in `tailwind.config.js`:
```javascript
fontWeight: {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
}
```

---

## Font Weight Guide

### When to Use Each Weight

**Light (300)**:
- Large body text
- Captions
- Secondary information

**Regular (400)**:
- Body text
- Paragraphs
- Standard content

**Medium (500)**:
- Emphasized text
- Subheadings
- Important information

**SemiBold (600)**:
- Small headings
- Button text
- Navigation items

**Bold (700)**:
- Headings (h2, h3, h4)
- Important CTAs
- Section titles

**ExtraBold (800)**:
- Main headings (h1)
- Hero text
- Brand name

**Black (900)**:
- Extra emphasis
- Display text
- Special headings

---

## Font Size Recommendations

### Current Sizes (Good as is)

```javascript
fontSize: {
  'xs': '0.75rem',    // 12px - Small labels
  'sm': '0.875rem',   // 14px - Secondary text
  'base': '1rem',     // 16px - Body text
  'lg': '1.125rem',   // 18px - Large body
  'xl': '1.25rem',    // 20px - Small headings
  '2xl': '1.5rem',    // 24px - Subheadings
  '3xl': '1.875rem',  // 30px - Section headings
  '4xl': '2.25rem',   // 36px - Page headings
  '5xl': '3rem',      // 48px - Hero text
  '6xl': '3.75rem',   // 60px - Large hero
  '7xl': '4.5rem',    // 72px - Extra large
  '8xl': '6rem',      // 96px - Massive
  '9xl': '8rem',      // 128px - Display
}
```

### Recommended Usage

```tsx
// Hero section
<h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-extrabold">
  HLPFL Records
</h1>

// Page headings
<h1 className="text-4xl md:text-5xl font-display font-bold">
  Our Artists
</h1>

// Section headings
<h2 className="text-3xl md:text-4xl font-display font-bold">
  Featured Releases
</h2>

// Subheadings
<h3 className="text-2xl font-display font-semibold">
  Latest News
</h3>

// Body text
<p className="text-base md:text-lg font-sans">
  Your content here...
</p>
```

---

## Performance Optimization

### Load Only What You Need

Instead of loading all font weights:
```css
/* ❌ BAD - Loads all weights */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* ✅ GOOD - Loads only needed weights */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
```

### Use font-display: swap

This is already included in the Google Fonts URL with `&display=swap`

### Preload Critical Fonts (Optional)

Add to `src/app/layout.tsx`:
```tsx
<head>
  <link
    rel="preload"
    href="/fonts/your-font.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
</head>
```

---

## Custom Font Installation (Advanced)

If you want to use a custom font (not from Google Fonts):

### Step 1: Add Font Files

Place font files in `public/fonts/`:
```
public/
  fonts/
    YourFont-Regular.woff2
    YourFont-Bold.woff2
    YourFont-ExtraBold.woff2
```

### Step 2: Define Font Face

In `src/app/globals.css`:
```css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/YourFont-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'YourFont';
  src: url('/fonts/YourFont-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'YourFont';
  src: url('/fonts/YourFont-ExtraBold.woff2') format('woff2');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}
```

### Step 3: Use in Tailwind Config

```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

---

## Testing Checklist

After changing fonts:

- [ ] Check homepage hero text
- [ ] Check all headings (h1-h6)
- [ ] Check body text readability
- [ ] Check button text
- [ ] Check navigation menu
- [ ] Check footer text
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check loading performance
- [ ] Verify font weights display correctly

---

## Troubleshooting

### Font Not Loading

**Problem**: Font doesn't appear  
**Solutions**:
1. Check the import URL is correct
2. Clear browser cache (Ctrl+Shift+R)
3. Restart dev server
4. Check browser console for errors

### Font Looks Different

**Problem**: Font appears different than expected  
**Solutions**:
1. Verify font weight is correct
2. Check if font-smoothing is applied
3. Test on different browsers
4. Adjust letter-spacing if needed

### Performance Issues

**Problem**: Page loads slowly  
**Solutions**:
1. Load fewer font weights
2. Use font-display: swap
3. Preload critical fonts
4. Consider system fonts as fallback

---

## Recommended Choice for HLPFL Records

Based on the current design and brand aesthetic, I recommend:

### **Option 1: Montserrat + Inter**

**Reasons**:
1. **Professional**: Perfect for a record label
2. **Modern**: Contemporary and clean
3. **Readable**: Excellent for all content types
4. **Versatile**: Works for all music genres
5. **Performance**: Both fonts are well-optimized
6. **Minimal Change**: Inter is already used, just add Montserrat for headings

**Quick Implementation**:

1. Update `src/app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@300;400;500;600&display=swap');

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', system-ui, sans-serif;
}
```

2. Update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Montserrat', 'system-ui', 'sans-serif'],
}
```

3. Use in components:
```tsx
<h1 className="font-display font-extrabold">HLPFL Records</h1>
<p className="font-sans">Body text here...</p>
```

---

**Status**: Ready to implement  
**Estimated Time**: 15 minutes  
**Impact**: Visual improvement, better brand identity