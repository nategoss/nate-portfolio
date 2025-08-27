# 🚀 GitHub Pages Deployment Checklist

## Pre-Deployment Checklist

### Local Testing
- [ ] `npm run dev` works without errors
- [ ] `npm run build` completes successfully
- [ ] `npm run preview` shows the site correctly
- [ ] All routes work in preview mode
- [ ] Theme switching functions properly
- [ ] Mobile responsiveness confirmed
- [ ] Run: `node scripts/test-build.js` (if available)

### Repository Setup
- [ ] Repository name is exactly: `nate-portfolio`
- [ ] Code is on `main` branch
- [ ] All files committed and pushed

### Configuration Files
- [ ] `vite.config.ts` has correct base path: `/nate-portfolio/`
- [ ] `index.html` has SPA routing script
- [ ] `public/404.html` exists with correct routing
- [ ] `.github/workflows/deploy.yml` exists

## GitHub Pages Setup

### Repository Settings
1. [ ] Go to repository **Settings**
2. [ ] Navigate to **Pages** (left sidebar)
3. [ ] Set Source to: **"GitHub Actions"**
4. [ ] **NOT** "Deploy from a branch"

### Permissions
1. [ ] Go to **Settings > Actions > General**
2. [ ] Workflow permissions: **"Read and write permissions"**
3. [ ] [ ] "Allow GitHub Actions to create and approve pull requests"

## Deployment Process

### Trigger Deployment
- [ ] Make a commit (can be minor)
- [ ] Push to main branch: `git push origin main`

### Monitor Deployment
1. [ ] Go to **Actions** tab
2. [ ] Watch "Deploy to GitHub Pages" workflow
3. [ ] Ensure it completes successfully (green checkmark)
4. [ ] Check deployment time (usually 2-5 minutes)

## Post-Deployment Verification

### URLs to Test
- [ ] Homepage: `https://nategoss.github.io/nate-portfolio/`
- [ ] Projects: `https://nategoss.github.io/nate-portfolio/projects`
- [ ] Case Study: `https://nategoss.github.io/nate-portfolio/case-study/saas-dashboard`
- [ ] Hash Navigation: `https://nategoss.github.io/nate-portfolio/#work`

### Functionality Tests
- [ ] Page loads without errors
- [ ] Navigation between sections works
- [ ] Theme toggle works
- [ ] Direct URL access works (no 404 on refresh)
- [ ] Browser back/forward buttons work
- [ ] Mobile view displays correctly
- [ ] All images load properly

### Performance Check
- [ ] Page loads quickly (< 3 seconds)
- [ ] No console errors in browser
- [ ] Smooth animations and transitions

## Troubleshooting

### If Deployment Fails
1. [ ] Check GitHub Actions logs for errors
2. [ ] Verify build works locally: `npm run build`
3. [ ] Check permissions in repository settings
4. [ ] Ensure workflow file is correct

### If Site Shows 404
1. [ ] Verify GitHub Pages source is "GitHub Actions"
2. [ ] Check if deployment workflow completed
3. [ ] Wait 5-10 minutes for DNS propagation
4. [ ] Check repository name is exactly `nate-portfolio`

### If Routes Don't Work
1. [ ] Verify SPA routing scripts in index.html and 404.html
2. [ ] Check that base path in vite.config.ts is correct
3. [ ] Test direct URL access after waiting a few minutes

### If Styles Are Missing
1. [ ] Check browser console for 404 errors on CSS/JS files
2. [ ] Verify base path configuration
3. [ ] Clear browser cache and try again

## Quick Commands Reference

```bash
# Test locally
npm run dev

# Build and test production
npm run build
npm run preview

# Deploy
git add .
git commit -m "Deploy update"
git push origin main

# Test build process
node scripts/test-build.js
```

## Success Indicators
- [ ] Green checkmark in GitHub Actions
- [ ] Site loads at correct URL
- [ ] All functionality works as expected
- [ ] No console errors
- [ ] Mobile and desktop views work

## Expected Timeline
- **Code Push**: Immediate
- **Workflow Start**: 10-30 seconds
- **Build Complete**: 2-3 minutes
- **Site Live**: 3-5 minutes total
- **DNS Propagation**: Usually immediate for github.io

## Support Resources
- GitHub Pages Documentation
- GitHub Actions logs (for specific errors)
- Vite deployment guide
- Browser developer tools for debugging

---

**Final Note**: Once deployed successfully, future updates only require pushing to the main branch. The deployment process will automatically rebuild and redeploy your site.