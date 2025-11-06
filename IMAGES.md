# Image Assets Guide

This document explains the image requirements for the training site and how to add them.

---

## Required Images

The site design calls for two hero images with specific visual characteristics:

### 1. Intro Abstract Clay Image
**Filename:** `intro-abstract-clay.png`
**Location:** `src/assets/intro-abstract-clay.png`
**Used on:** Home page (`index.md`)

**Visual Requirements:**
- Abstract clay or sculptural shapes
- Soft, minimal aesthetic
- Light neutral colors (whites, creams, soft grays)
- Soft lavender accent color (#A78BFA or similar)
- Soft lighting with subtle shadows
- No text or typography
- Clean, modern feel

**Recommended dimensions:** 1920×800px or similar wide aspect ratio

### 2. Overview Abstract Glass Image
**Filename:** `overview-abstract-glass.png`
**Location:** `src/assets/overview-abstract-glass.png`
**Used on:** Demos page (`demos.md`)

**Visual Requirements:**
- Abstract glass shapes or crystalline forms
- Cool color palette (blues and teals)
- Glass reflections and refractions
- Colors matching: #67E8F9 (cool teal) and blue tones
- Transparent/translucent effects
- No text or typography
- Clean, modern feel

**Recommended dimensions:** 1920×800px or similar wide aspect ratio

---

## Current Images

Your repository has 4 abstract images in the `images/` folder:
- `abstract1.png`
- `abstract2.png`
- `abstract3.png`
- `abstract4.png`

**Next steps:**

1. **Review the images** to see which best match the requirements above
2. **Copy the chosen images** to the `src/assets/` folder with the correct names:

```bash
# Example: if abstract1.png matches the clay requirement:
cp images/abstract1.png src/assets/intro-abstract-clay.png

# Example: if abstract3.png matches the glass requirement:
cp images/abstract3.png src/assets/overview-abstract-glass.png
```

3. **Verify the images** display correctly by running `npm run dev` and visiting:
   - Home page: http://localhost:8080/
   - Demos page: http://localhost:8080/demos/

---

## Creating New Images

If you need to create new images that better match the requirements:

### Option 1: AI Image Generation

Use an AI image generator like:
- **DALL-E** (via ChatGPT Plus)
- **Midjourney**
- **Adobe Firefly**
- **Stable Diffusion**

**Example prompts:**

For the clay image:
```
Abstract minimal clay sculpture shapes, soft neutral colors with subtle lavender accent,
soft studio lighting, clean white background, 3D render, modern minimalist aesthetic,
no text, high quality
```

For the glass image:
```
Abstract glass shapes with reflections, cool blue and teal colors, transparent crystalline forms,
modern minimal design, soft lighting, clean background, 3D render, no text, high quality
```

### Option 2: Stock Photography

Search sites like:
- **Unsplash** (free, high quality)
- **Pexels** (free)
- **Adobe Stock**

**Search terms:**
- "abstract clay shapes minimal"
- "abstract glass reflection blue"
- "minimal 3D shapes lavender"
- "abstract teal glass forms"

### Option 3: Create Your Own

Use 3D software or design tools:
- **Blender** (free, powerful 3D)
- **Cinema 4D**
- **Adobe Dimension**
- **Figma** (for 2D abstract shapes)

---

## Image Optimization

Before adding images to the site, optimize them:

### Recommended Tools

**ImageOptim (Mac):**
```bash
brew install imageoptim
```

**Sharp (Node.js):**
```bash
npm install -g sharp-cli
sharp -i input.png -o output.png -w 1920 -q 85
```

**Online Tools:**
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/

### Optimization Guidelines

- **Format:** PNG (for transparency) or JPEG (for photos)
- **Width:** 1920px max (responsive CSS handles smaller screens)
- **File size:** Aim for under 500KB per image
- **Quality:** 85% is usually sufficient
- **Compression:** Use lossless or high-quality lossy compression

---

## Adding Images to the Site

### Step 1: Place Image Files

Copy your images to `src/assets/`:

```bash
cp your-clay-image.png src/assets/intro-abstract-clay.png
cp your-glass-image.png src/assets/overview-abstract-glass.png
```

### Step 2: Verify Paths

The images are referenced in:
- `src/index.md`: Uses `intro-abstract-clay.png`
- `src/demos.md`: Uses `overview-abstract-glass.png`

Paths use `/ai-training/assets/` prefix (configured in `.eleventy.js`).

### Step 3: Test Locally

```bash
npm run dev
```

Visit http://localhost:8080/ and http://localhost:8080/demos/ to verify images display correctly.

### Step 4: Commit and Push

```bash
git add src/assets/*.png
git commit -m "Add hero images"
git push origin main
```

---

## Alt Text

The current alt text is:

**Home page:**
```markdown
![Abstract clay shapes with soft lavender accent](/ai-training/assets/intro-abstract-clay.png)
```

**Demos page:**
```markdown
![Abstract glass shapes with cool blue reflections](/ai-training/assets/overview-abstract-glass.png)
```

Update alt text if your images differ from this description. Good alt text:
- Describes the visual content
- Is concise (under 125 characters)
- Includes relevant details (colors, shapes, mood)
- Doesn't say "image of" or "picture of"

---

## Styling

Images use the `.hero` class defined in `src/assets/styles.css`:

```css
.hero {
  border-radius: var(--radius);  /* 18px rounded corners */
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);  /* Subtle shadow */
  margin: 16px 0 32px;
  max-width: 100%;
  height: auto;
}
```

The styling ensures:
- Rounded corners matching the design system
- Soft shadow for depth
- Responsive sizing
- Proper spacing

---

## License & Attribution

If using stock photos or AI-generated images:

1. **Check the license** - Ensure you have rights to use
2. **Provide attribution** if required
3. **Document the source** for future reference

Add attribution to the README or footer if needed:
```markdown
Images created with [TOOL] or licensed from [SOURCE].
```

---

## Troubleshooting

**Problem:** Image not displaying
- ✅ Check file exists in `src/assets/`
- ✅ Verify filename matches exactly (case-sensitive)
- ✅ Check path uses `/ai-training/` prefix
- ✅ Clear cache: `rm -rf _site && npm run build`

**Problem:** Image too large (slow loading)
- ✅ Optimize/compress the image
- ✅ Reduce dimensions if over 1920px wide
- ✅ Consider JPEG if transparency not needed

**Problem:** Image looks pixelated
- ✅ Use higher resolution source
- ✅ Ensure not upscaling small image
- ✅ Check image quality settings

**Problem:** Wrong colors on different screens
- ✅ Use sRGB color profile
- ✅ Test on multiple devices
- ✅ Avoid extreme saturation

---

## Quick Checklist

Before deploying:

- [ ] Both hero images added to `src/assets/`
- [ ] Images optimized (under 500KB each)
- [ ] Alt text accurately describes images
- [ ] Images display correctly locally
- [ ] Rounded corners and shadow visible
- [ ] Responsive on mobile (test with dev tools)
- [ ] License/attribution documented if needed
- [ ] Committed and pushed to repository

---

## Future Enhancements

Consider adding:
- Additional images for other pages
- Image lazy loading for performance
- Multiple sizes for responsive images
- WebP format for better compression
- Dark mode image variants

---

## Questions?

If you need help with images, refer to:
- README.md for general site documentation
- .eleventy.js for path configuration
- src/assets/styles.css for styling details
