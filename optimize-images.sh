#!/bin/bash

# Image Optimization Script for HLPFL Website
# Converts images to WebP and optimizes file sizes

echo "🎨 Starting image optimization..."

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "Installing webp tools..."
    apt-get update && apt-get install -y webp
fi

# Optimize team images
echo "📸 Optimizing team images..."
cd public/images/team/

for img in *.jpg *.jpeg *.png; do
    if [ -f "$img" ]; then
        filename="${img%.*}"
        echo "  Converting $img to WebP..."
        cwebp -q 85 "$img" -o "${filename}.webp"
    fi
done

# Optimize release images
echo "🎵 Optimizing release images..."
cd ../releases/

for img in *.jpg *.jpeg *.png; do
    if [ -f "$img" ]; then
        filename="${img%.*}"
        echo "  Converting $img to WebP..."
        cwebp -q 85 "$img" -o "${filename}.webp"
    fi
done

echo "✅ Image optimization complete!"
echo "📊 Checking file sizes..."

cd /workspace/hlpflrecords
du -sh public/images/team/
du -sh public/images/releases/

echo "🎉 Done! Images are now optimized for web delivery."