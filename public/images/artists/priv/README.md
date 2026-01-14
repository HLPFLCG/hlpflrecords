# PRIV Artist Photos

Add PRIV's photos to this directory with the following naming convention:

- `priv-1.jpg` - Main profile photo (person in black hoodie by water)
- `priv-2.jpg` - Pine tree portrait
- `priv-3.jpg` - Motion blur in snowy woods
- `priv-4.jpg` - Motion blur shot 2
- `priv-5.jpg` - Close-up with motion blur

## Recommended Usage

After adding photos, update the following files to reference them:

1. `/src/data/mockData.ts` - Update `image` field in `mockArtists`
2. `/src/app/artists/[slug]/page.tsx` - Artist detail page
3. `/src/app/merch/page.tsx` - Product images

## Image Specifications

- Format: JPG or WebP preferred
- Minimum resolution: 800x800px for profile, 1920x1080 for backgrounds
- File size: Keep under 500KB for web performance
