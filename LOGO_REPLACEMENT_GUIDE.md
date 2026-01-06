# Logo Replacement Guide

## Current Status

The site is ready for logo replacement with your bronze/brown HLPFL design. Here's where the logo is used and how to replace it:

## Logo Files Needed

Based on your screenshots, we need the following file formats:

1. **Main Logo** (SVG preferred):
   - `/public/logo.svg` - Main logo file (currently 152KB - should be optimized)
   - Should be your bronze/brown HLPFL design without background

2. **Favicon Files**:
   - `/public/images/favicon/hlpflsymbolpnggradient.ico` - Browser icon
   - `/public/images/favicon/hlpflsymbolpnggradient.png` - Mobile icon
   - Apple touch icon

## Where the Logo Appears

### 1. Loading Screen
**File**: `src/components/LoadingScreen.jsx`
- Uses `<Logo>` component
- Displayed at 80x80px
- Shows during page load

### 2. Header/Navigation
**File**: `src/components/layout/Header.tsx`
- Desktop navigation: 48x48px
- Mobile navigation: 40x40px
- Top-left of every page

### 3. Footer
**File**: `src/components/layout/Footer.tsx`
- Footer branding: 40x40px

### 4. Artist Portal Login
**File**: `src/app/artist-portal/page.tsx`
- Login page header: 80x80px

### 5. Favicons
**File**: `src/app/layout.tsx`
- Browser tab icon
- Mobile home screen icon

## How to Replace the Logo

### Option 1: Replace Existing Files (Recommended)
Simply replace these files with your bronze/brown logo:

```bash
# Replace the main logo
cp your-logo.svg public/logo.svg

# Replace favicon files
cp your-logo.ico public/images/favicon/hlpflsymbolpnggradient.ico
cp your-logo.png public/images/favicon/hlpflsymbolpnggradient.png
```

### Option 2: Add New Logo Files
If you want to use different filenames:

1. Add your logo files to `/public/images/`
2. Update `src/components/Logo.jsx`:
   ```jsx
   <Image
     src="/images/your-new-logo.svg"  // Update this path
     alt="HLPFL Logo"
     width={width}
     height={height}
     className={className}
     priority
   />
   ```

## Optimize Your Logo

The current logo.svg is 152KB which is quite large. Here's how to optimize it:

### Using SVGO (Recommended)
```bash
npm install -g svgo
svgo your-logo.svg -o public/logo.svg
```

### Remove Background
If your logo has a background:
1. Use a tool like remove.bg or Photoshop
2. Export as PNG with transparency
3. Or use SVG without background fill

## Logo Requirements

- **Format**: SVG preferred (scalable, small file size)
- **Color**: Bronze/Brown gradient (#c87941 to #a0613a)
- **Background**: Transparent
- **Size**: Under 50KB recommended
- **Viewbox**: Square aspect ratio (1:1) works best

## Testing

After replacing the logo:

1. **Test Loading Screen**:
   - Visit https://hlpfl.org
   - Check logo appears during loading

2. **Test Navigation**:
   - Scroll through pages
   - Check logo in header/footer

3. **Test Mobile**:
   - View on mobile device
   - Add to home screen to test favicon

4. **Test Browser Icon**:
   - Check browser tab shows correct favicon

## Need Help?

If you need assistance:
1. Share your logo file (SVG, PNG, or AI format)
2. I can help optimize and integrate it
3. We can test across all pages

## Deployment

After replacing the logo:
```bash
npm run build  # Test locally first
git add public/logo.svg public/images/favicon/*
git commit -m "Replace logo with bronze/brown HLPFL design"
git push
```

Cloudflare will automatically deploy the changes.
