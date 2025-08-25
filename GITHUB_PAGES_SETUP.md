# Nate Goss Portfolio - GitHub Pages Setup

## ✅ Configuration Complete

Your portfolio is configured for deployment to:
**https://nategoss.github.io/nate-portfolio**

## 📋 Setup Steps

### 1. Push Your Code to GitHub
```bash
git add .
git commit -m "Deploy Nate Goss Portfolio to GitHub Pages"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to https://github.com/nategoss/nate-portfolio
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 3. Automatic Deployment
- The site will automatically build and deploy when you push to the `main` branch
- Check the **Actions** tab to see the deployment progress
- Your site will be available at: **https://nategoss.github.io/nate-portfolio**

## 🔧 Manual Deployment (Alternative)
```bash
npm install
npm run deploy
```

## 🎯 Repository Configuration

**Repository Details:**
- GitHub Username: `nategoss`
- Repository Name: `nate-portfolio`
- Base Path: `/nate-portfolio/`
- Live URL: `https://nategoss.github.io/nate-portfolio`

**Files Configured:**
- ✅ `vite.config.ts` - Base path set to `/nate-portfolio/`
- ✅ `package.json` - Homepage set to your GitHub Pages URL
- ✅ `.github/workflows/deploy.yml` - GitHub Actions deployment
- ✅ `public/404.html` - SPA routing for GitHub Pages
- ✅ `index.html` - Client-side routing script

## 🐛 Troubleshooting

### Blank Page After Deployment
- ✅ Base path is correctly set to `/nate-portfolio/`
- ✅ Homepage URL is correctly configured
- ✅ Check the Actions tab for any build errors

### 404 Errors on Routes
- ✅ The `404.html` file handles SPA routing automatically
- ✅ React Router is configured to work with GitHub Pages

### Build Fails
- ✅ Run `npm install` to ensure all dependencies are installed
- ✅ Run `npm run build` locally to test the build
- ✅ Check the Actions tab for detailed error messages

## 📁 Key Files for GitHub Pages
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/404.html` - Handles SPA routing
- `vite.config.ts` - Build configuration with `/nate-portfolio/` base path
- `index.html` - SPA routing script
- `package.json` - Homepage URL configuration

Your portfolio will be live at: **https://nategoss.github.io/nate-portfolio**

## 🚀 Next Steps
1. Push your code to the `main` branch
2. Enable GitHub Pages in repository settings (Source: GitHub Actions)
3. Wait 2-3 minutes for the build and deployment to complete
4. Visit your live portfolio at the URL above!