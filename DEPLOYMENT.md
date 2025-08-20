# Nate Goss Portfolio - Deployment Guide

This portfolio is configured for deployment to **https://nategoss.github.io/nate-portfolio**

## 🎯 GitHub Pages Configuration (Primary)

### Repository Details
- **GitHub Username:** `nategoss`
- **Repository Name:** `nate-portfolio`
- **Live URL:** `https://nategoss.github.io/nate-portfolio`

### Setup Steps

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Set Source to **"GitHub Actions"**
   - The site will auto-deploy on every push to main

3. **Verify Deployment:**
   - Check the Actions tab for build status
   - Visit https://nategoss.github.io/nate-portfolio

### Manual Deployment
```bash
npm install
npm run deploy
```

## 📁 Configuration Files

### Vite Configuration (`vite.config.ts`)
```typescript
const base = mode === 'production' ? '/nate-portfolio/' : '/'
```

### Package Configuration (`package.json`)
```json
{
  "homepage": "https://nategoss.github.io/nate-portfolio"
}
```

### GitHub Actions (`.github/workflows/deploy.yml`)
- Automatically builds and deploys on push to main
- Uses Node.js 18 with npm caching
- Deploys to GitHub Pages environment

## 🔄 Client-Side Routing

The portfolio includes full React Router support on GitHub Pages:

- **404.html:** Redirects all routes to index.html
- **index.html:** Contains SPA routing script
- **Router.tsx:** Handles all application routes

**Supported Routes:**
- `/` - Home page with all sections
- `/case-study/[slug]` - Individual project case studies
- `/#work` - Direct link to work section
- `/#about` - Direct link to about section
- `/#contact` - Direct link to contact section

## 🎨 Atomic Age Design System

The portfolio features a complete 1950s atomic age design system:

### Typography
- **Headers:** Orbitron font family
- **Body:** Space Grotesk font family
- **WCAG AA/AAA compliant** in both light and dark modes

### Color Palette
- **Primary:** Atomic Orange (#FF6B35)
- **Secondary:** Electric Cyan (#00BCD4)
- **Accent:** Mint Green (#4ECDC4)
- **Electric:** Electric Blue (#2196F3)

### Components
- Atomic shadows and gradients
- Starburst and boomerang shapes
- Orbital animations
- Theme toggle with persistence

## 🔧 Development

### Local Development
```bash
npm install
npm run dev
```

### Build & Preview
```bash
npm run build
npm run preview
```

### Linting
```bash
npm run lint
```

## 🐛 Troubleshooting

### Common Issues

**Blank Page:**
- Verify base path in vite.config.ts matches repository name
- Check console for 404 errors
- Ensure GitHub Pages source is set to "GitHub Actions"

**Routing Issues:**
- Confirm 404.html exists in public folder
- Check that index.html contains SPA routing script
- Verify React Router configuration

**Build Failures:**
- Run `npm install` to update dependencies
- Check Node.js version (requires 18+)
- Review Actions tab for detailed error logs

### Performance

The build is optimized with:
- Code splitting for vendor libraries
- Separate chunks for React Router and Framer Motion
- Optimized asset bundling
- Source maps disabled for production

## 🚀 Live Portfolio

Visit the live portfolio at: **https://nategoss.github.io/nate-portfolio**

The portfolio showcases:
- UX Design projects and case studies
- Interactive atomic age animations
- Responsive design with dark/light mode
- Professional contact information
- WCAG compliant accessibility