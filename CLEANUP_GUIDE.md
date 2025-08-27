# 🧹 Project Cleanup Guide

## Files to DELETE (duplicates and unnecessary documentation)

### ❌ Delete these files from the root directory:
```
/App.tsx                           # (moved to /src/App.tsx)
/workflows/deploy.yml              # (moved to /.github/workflows/deploy.yml)
/package-cra.json                  # (duplicate - keep package.json)
/package-framer.json              # (duplicate - keep package.json)
/postcss_config.js                # (duplicate - keep postcss.config.js)
/tailwind_config.js               # (duplicate - keep tailwind.config.js)
/Attributions.md                  # (not needed)
/CONTENT_GUIDE.md                 # (not needed)
/CONTENT_MANAGEMENT.md            # (not needed)
/DELETE_WORKFLOWS_FOLDER.md       # (not needed)
/DEPLOYMENT.md                    # (not needed)
/DEPLOYMENT_CHECKLIST.md          # (not needed)
/DEPLOYMENT_DEBUG.md              # (not needed)
/ENVIRONMENT_TEST.md              # (not needed)
/GITHUB_PAGES_DEPLOYMENT.md       # (not needed)
/GITHUB_PAGES_SETUP.md            # (not needed)
/REPOSITORY_NAME_UPDATE.md        # (not needed)
```

### ❌ Delete this entire folder:
```
/workflows/                       # (incorrect location - should be /.github/workflows/)
```

## ✅ Correct Final Structure

After cleanup, your structure should look like this:

```
nate-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # ✅ GitHub Actions workflow
├── src/                          # ✅ Source code
│   ├── App.tsx                   # ✅ Main app component  
│   ├── main.tsx                  # ✅ Entry point
│   ├── utils/
│   │   └── env.ts
│   └── vite-env.d.ts
├── components/                   # ✅ React components
├── content/                      # ✅ Markdown content
├── data/                         # ✅ Project data
├── public/                       # ✅ Static assets
├── styles/                       # ✅ CSS files
├── utils/                        # ✅ Utility functions
├── index.html                    # ✅ HTML template
├── package.json                  # ✅ Dependencies
├── vite.config.ts               # ✅ Vite config
├── tsconfig.json                # ✅ TypeScript config
├── postcss.config.js            # ✅ PostCSS config
└── tailwind.config.js           # ✅ Tailwind config
```

## 🚀 Quick Cleanup Commands

If you're comfortable with command line, run these in your project root:

```bash
# Remove duplicate files
rm App.tsx
rm package-cra.json
rm package-framer.json
rm postcss_config.js
rm tailwind_config.js

# Remove documentation files
rm Attributions.md
rm CONTENT_GUIDE.md
rm CONTENT_MANAGEMENT.md
rm DELETE_WORKFLOWS_FOLDER.md
rm DEPLOYMENT.md
rm DEPLOYMENT_CHECKLIST.md
rm DEPLOYMENT_DEBUG.md
rm ENVIRONMENT_TEST.md
rm GITHUB_PAGES_DEPLOYMENT.md
rm GITHUB_PAGES_SETUP.md
rm REPOSITORY_NAME_UPDATE.md

# Remove incorrect workflows folder
rm -rf workflows/

# Create .github folder if it doesn't exist
mkdir -p .github/workflows
```

## 🔧 After Cleanup

1. **Verify the build works:**
   ```bash
   npm install
   npm run build
   ```

2. **Test locally:**
   ```bash
   npm run dev
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   git add .
   git commit -m "Clean up project structure"
   git push origin main
   ```

## 📂 Why This Structure?

- **`/src/`**: Contains all source code (React components, utilities)
- **`/components/`**: Reusable React components
- **`/public/`**: Static assets served directly
- **`/.github/workflows/`**: GitHub Actions workflows
- **Root level**: Only essential config files

This follows Vite and React best practices and will deploy cleanly to GitHub Pages.