# GitHub Pages Deployment Debug Guide

## 🚨 Current Issue: main.tsx 404 Error

### Problem Identified
The main.tsx file was returning a 404 error due to path resolution issues between local development and GitHub Pages deployment.

### ✅ Fixes Applied

**1. Updated BrowserRouter with basename**
```tsx
// App.tsx now includes proper basename for GitHub Pages
const basename = import.meta.env.PROD ? '/nate-portfolio' : ''
<BrowserRouter basename={basename}>
```

**2. Fixed main.tsx import paths**
```tsx
// Correct import from /src/main.tsx to /App.tsx
import App from '../App'
import '../styles/globals.css'
```

**3. Enhanced Vite configuration**
- Added proper publicDir handling
- Enhanced asset resolution
- Fixed TypeScript path mapping

**4. Created favicon.svg**
- Added atomic-age themed favicon referenced in index.html

**5. Updated index.html meta tags**
- Added Open Graph and Twitter meta tags
- Enhanced social media sharing

## 🔍 Debugging Steps

### Test Local Build
```bash
# Test the production build locally
npm run build
npm run preview
```

### Check Build Output
```bash
# Verify the dist folder contains:
ls dist/
# Should show: index.html, assets/, favicon.svg
```

### Test GitHub Pages URL
After deployment, test these URLs:
- https://nategoss.github.io/nate-portfolio
- https://nategoss.github.io/nate-portfolio/case-study/fintech-dashboard
- https://nategoss.github.io/nate-portfolio/#work

## 🛠️ If Issues Persist

### 1. Clear GitHub Actions Cache
- Go to Actions tab in GitHub
- Clear cache and re-run workflow

### 2. Check Browser Developer Tools
- Open Network tab
- Look for 404 errors
- Check if assets are loading from correct paths

### 3. Verify GitHub Pages Settings
- Repository Settings → Pages
- Source: GitHub Actions
- Check deployment URL matches expected

### 4. Test Base Path
If still having issues, you can test with an absolute base path:
```typescript
// In vite.config.ts, temporarily try:
const base = 'https://nategoss.github.io/nate-portfolio/'
```

## 📱 Expected Behavior

✅ **Local Development** (npm run dev)
- Runs on http://localhost:3000
- All routes work correctly
- Hot reload functions

✅ **Production Build** (npm run build)
- Creates dist/ folder
- All assets bundled correctly
- Routes configured for GitHub Pages

✅ **GitHub Pages** (after deployment)
- Loads at https://nategoss.github.io/nate-portfolio
- All routes work with proper basename
- SPA routing handles 404s correctly

Your portfolio should now deploy successfully! 🚀