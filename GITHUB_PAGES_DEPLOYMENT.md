# 🚀 Complete GitHub Pages Deployment Guide

## Overview
This guide will walk you through deploying your Nate Goss portfolio to GitHub Pages with proper routing, configuration, and troubleshooting steps.

## Prerequisites
- GitHub repository: `nategoss/nate-portfolio`
- GitHub Pages URL: `https://nategoss.github.io/nate-portfolio`

## Step 1: Repository Setup

### 1.1 Ensure Repository Name
Make sure your repository is named exactly: `nate-portfolio`

### 1.2 Check Branch Structure
- Main branch should be: `main` or `master`
- All your code should be in the root directory

## Step 2: GitHub Pages Configuration

### 2.1 Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select: **"GitHub Actions"**
   - This allows custom workflows (not the legacy Deploy from branch)

### 2.2 Verify Workflow File
Make sure you have the deployment workflow at: `/.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Setup Pages
      uses: actions/configure-pages@v4
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: './dist'
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4

# Grant GITHUB_TOKEN the permissions required to make a Pages deployment
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
concurrency:
  group: "pages"
  cancel-in-progress: false
```

## Step 3: Configuration Files Check

### 3.1 Vite Configuration (`/vite.config.ts`)
✅ Your configuration is already correct:
```typescript
const base = mode === 'production' ? '/nate-portfolio/' : '/'
```

### 3.2 Package.json Scripts
Ensure you have these scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

### 3.3 Index.html (`/index.html`)
✅ Your SPA routing script is already configured correctly

### 3.4 404.html (`/public/404.html`)
✅ Your 404 redirect script is already configured correctly

## Step 4: Deployment Process

### 4.1 Trigger Deployment
1. Make any commit to your main branch
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

### 4.2 Monitor Deployment
1. Go to your repository on GitHub
2. Click **Actions** tab
3. Watch the "Deploy to GitHub Pages" workflow run
4. Check for any errors in the logs

### 4.3 Check Pages Deployment
1. Go to **Settings > Pages**
2. You should see: "Your site is published at https://nategoss.github.io/nate-portfolio"

## Step 5: Verification & Testing

### 5.1 Test Routes
Once deployed, test these URLs:
- ✅ `https://nategoss.github.io/nate-portfolio/` (Homepage)
- ✅ `https://nategoss.github.io/nate-portfolio/projects` (Projects page)
- ✅ `https://nategoss.github.io/nate-portfolio/case-study/saas-dashboard` (Case study)

### 5.2 Test Navigation
- ✅ Internal links should work without page refresh
- ✅ Direct URL access should work (thanks to SPA routing)
- ✅ Browser back/forward buttons should work

## Step 6: Troubleshooting

### 6.1 Common Issues & Solutions

#### Issue: 404 on Refresh
**Symptom**: Direct URLs work initially but 404 on refresh
**Solution**: ✅ Already handled with your 404.html SPA routing

#### Issue: CSS/JS Not Loading
**Symptom**: White page or unstyled content
**Solution**: Check that base path in vite.config.ts matches repository name

#### Issue: Workflow Fails
**Symptom**: GitHub Actions shows red X
**Solutions**:
1. Check Node.js version compatibility
2. Ensure all dependencies install correctly
3. Verify build command works locally

#### Issue: Permissions Error
**Symptom**: "Permission denied" in Actions
**Solution**: Go to **Settings > Actions > General** and ensure:
- ✅ "Allow GitHub Actions to create and approve pull requests"
- ✅ Workflow permissions: "Read and write permissions"

### 6.2 Debug Commands
Run locally to test:
```bash
# Test development
npm run dev

# Test production build
npm run build
npm run preview

# Check for TypeScript errors
npx tsc --noEmit
```

## Step 7: Domain Configuration (Optional)

### 7.1 Custom Domain
If you want to use a custom domain:
1. Add `CNAME` file to `/public/` with your domain
2. Configure DNS records with your domain provider
3. Update GitHub Pages settings

### 7.2 HTTPS
GitHub Pages automatically provides HTTPS for `.github.io` domains

## Step 8: Performance Optimization

### 8.1 Already Implemented ✅
- Bundle splitting (vendor, router, motion)
- Asset optimization
- Proper caching headers

### 8.2 Additional Optimizations
- Enable Gzip compression (handled by GitHub Pages)
- Optimize images (consider WebP format)
- Implement service worker for offline support

## Step 9: Monitoring & Analytics

### 9.1 Add Analytics (Optional)
Add Google Analytics or similar to track usage:
```typescript
// Add to App.tsx or index.html
```

### 9.2 Monitor Performance
Use Lighthouse or PageSpeed Insights to monitor:
- Performance scores
- Accessibility compliance
- SEO optimization

## Expected Timeline
- **Deployment**: 2-5 minutes after push
- **DNS Propagation**: Immediate for .github.io domains
- **First Load**: May take 1-2 minutes for initial cache

## Final Verification Checklist
- [ ] Repository name: `nate-portfolio`
- [ ] GitHub Actions enabled
- [ ] Workflow file present
- [ ] Pages source set to "GitHub Actions"
- [ ] Base path configured correctly
- [ ] SPA routing configured
- [ ] All routes accessible
- [ ] Theme switching works
- [ ] Mobile responsive
- [ ] Accessibility features functional

## Support
If you encounter issues:
1. Check GitHub Actions logs for specific error messages
2. Verify all configuration files match this guide
3. Test the build process locally first
4. Check GitHub Pages status page for service issues

Your portfolio is already well-configured for deployment! The main step is ensuring GitHub Pages is set to use GitHub Actions as the source.