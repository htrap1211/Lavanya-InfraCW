# Assets Directory

This directory contains all static assets for the Lavanya Infrastructure website.

## Directory Structure

```
public/assets/
├── images/
│   ├── backgrounds/    # Background images for hero sections, etc.
│   ├── logos/          # Company logos and favicons
│   ├── projects/       # Project showcase images
│   └── team/           # Team member photos
└── icons/              # SVG icons and other icon assets
```

## Usage

### Adding Images
1. Place your images in the appropriate subdirectory based on their purpose.
2. Reference them in your components using the `/assets/` path. For example:
   ```vue
   <img src="/assets/images/backgrounds/hero-bg.jpg" alt="Hero Background">
   ```

### Best Practices
- Use descriptive filenames (e.g., `hero-background.jpg` instead of `img123.jpg`)
- Optimize images for web before uploading
- For logos, prefer SVG format when possible for better quality and smaller file size
- Keep the directory structure organized by file type and purpose

### Image Optimization
Before adding images to the project, please optimize them using tools like:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- [ImageOptim](https://imageoptim.com/mac)

### Naming Conventions
- Use kebab-case for all filenames (e.g., `company-logo.svg`)
- Prefix related images (e.g., `hero-bg-desktop.jpg`, `hero-bg-mobile.jpg`)
- Add size/version numbers if needed (e.g., `logo@2x.png` for retina displays)

## License
All assets in this directory are the property of Lavanya Infrastructure Corporation unless otherwise noted.
