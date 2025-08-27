#!/usr/bin/env node

/**
 * Fix build issues and clean project structure
 * Run with: node fix-build.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing build issues and cleaning project structure...\n');

// Files to delete from root (duplicates and conflicts)
const filesToDelete = [
  'App.tsx',                        // CRITICAL: Duplicate causing TypeScript conflict
  'vite.config.d.ts',              // CRITICAL: Generated file causing TS error
  'package-cra.json',              // Duplicate package.json
  'package-framer.json',           // Duplicate package.json  
  'postcss_config.js',             // Duplicate postcss config
  'tailwind_config.js',            // Duplicate tailwind config
  'Attributions.md',               // Documentation cleanup
  'CLEANUP_GUIDE.md',              // Documentation cleanup
  'CONTENT_GUIDE.md',              // Documentation cleanup
  'CONTENT_MANAGEMENT.md',         // Documentation cleanup
  'DELETE_WORKFLOWS_FOLDER.md',    // Documentation cleanup
  'DEPLOYMENT.md',                 // Documentation cleanup
  'DEPLOYMENT_CHECKLIST.md',       // Documentation cleanup
  'DEPLOYMENT_DEBUG.md',           // Documentation cleanup
  'ENVIRONMENT_TEST.md',           // Documentation cleanup
  'GITHUB_PAGES_DEPLOYMENT.md',    // Documentation cleanup
  'GITHUB_PAGES_SETUP.md',         // Documentation cleanup
  'REPOSITORY_NAME_UPDATE.md',     // Documentation cleanup
  'cleanup.js',                    // Old cleanup script
  'cleanup-final.js'               // Old cleanup script
];

// Folders to delete completely
const foldersToDelete = [
  'workflows',  // Wrong location - should be .github/workflows
  'guidelines'  // Move Guidelines.md to root if needed, delete folder
];

let deletedFiles = 0;
let deletedFolders = 0;
let errors = [];

console.log('🗑️  Removing problematic files...\n');

// Delete files
filesToDelete.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`✅ Deleted: ${file}`);
      deletedFiles++;
    } else {
      console.log(`⏭️  Skip: ${file} (not found)`);
    }
  } catch (error) {
    console.error(`❌ Error deleting ${file}:`, error.message);
    errors.push(`${file}: ${error.message}`);
  }
});

// Move Guidelines.md to root before deleting guidelines folder
try {
  const guidelinesPath = 'guidelines/Guidelines.md';
  if (fs.existsSync(guidelinesPath)) {
    const content = fs.readFileSync(guidelinesPath, 'utf8');
    fs.writeFileSync('Guidelines.md', content);
    console.log('✅ Moved: guidelines/Guidelines.md → Guidelines.md');
  }
} catch (error) {
  console.error('❌ Error moving Guidelines.md:', error.message);
}

// Delete folders
foldersToDelete.forEach(folder => {
  try {
    if (fs.existsSync(folder)) {
      fs.rmSync(folder, { recursive: true, force: true });
      console.log(`✅ Deleted folder: ${folder}/`);
      deletedFolders++;
    } else {
      console.log(`⏭️  Skip: ${folder}/ (not found)`);
    }
  } catch (error) {
    console.error(`❌ Error deleting ${folder}:`, error.message);
    errors.push(`${folder}: ${error.message}`);
  }
});

console.log('\n🔧 Fixing TypeScript configuration...\n');

// Update tsconfig.json to exclude root files and be more specific
try {
  const tsconfigPath = 'tsconfig.json';
  const tsconfig = {
    compilerOptions: {
      target: "ES2020",
      useDefineForClassFields: true,
      lib: ["ES2020", "DOM", "DOM.Iterable"],
      module: "ESNext",
      skipLibCheck: true,
      moduleResolution: "bundler",
      allowImportingTsExtensions: true,
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: "react-jsx",
      strict: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      noFallthroughCasesInSwitch: true,
      baseUrl: ".",
      paths: {
        "@/*": ["./src/*"],
        "@/components": ["./components/*"],
        "@/styles": ["./styles/*"]
      },
      types: ["vite/client"]
    },
    include: [
      "src/**/*",
      "components/**/*", 
      "styles/**/*",
      "utils/**/*",
      "data/**/*",
      "vite.config.ts"
    ],
    exclude: [
      "node_modules",
      "dist",
      "*.d.ts",
      "App.tsx"  // Explicitly exclude root App.tsx
    ],
    references: [{ path: "./tsconfig.node.json" }]
  };
  
  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
  console.log('✅ Updated tsconfig.json to fix include patterns');
} catch (error) {
  console.error('❌ Error updating tsconfig.json:', error.message);
  errors.push(`tsconfig.json: ${error.message}`);
}

// Ensure .github/workflows structure exists
console.log('\n📁 Verifying .github structure...\n');

try {
  const githubDir = '.github';
  const workflowsDir = path.join(githubDir, 'workflows');
  
  if (!fs.existsSync(githubDir)) {
    fs.mkdirSync(githubDir);
    console.log('✅ Created: .github/');
  }
  
  if (!fs.existsSync(workflowsDir)) {
    fs.mkdirSync(workflowsDir);
    console.log('✅ Created: .github/workflows/');
  }
  
  // Check if deploy.yml exists
  const deployFile = path.join(workflowsDir, 'deploy.yml');
  if (fs.existsSync(deployFile)) {
    console.log('✅ GitHub Actions workflow exists');
  } else {
    console.log('⚠️  GitHub Actions workflow missing - creating now...');
    
    const workflowContent = `name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Install dependencies
        run: npm ci
        
      - name: Build with Vite
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`;
    
    fs.writeFileSync(deployFile, workflowContent);
    console.log('✅ Created GitHub Actions workflow');
  }
} catch (error) {
  console.error('❌ Error setting up .github structure:', error.message);
  errors.push(`.github setup: ${error.message}`);
}

// Clean up any stray .d.ts files that might be causing conflicts
console.log('\n🧹 Cleaning up TypeScript declaration files...\n');

try {
  const files = fs.readdirSync('.');
  files.forEach(file => {
    if (file.endsWith('.d.ts') && file !== 'vite-env.d.ts') {
      try {
        fs.unlinkSync(file);
        console.log(`✅ Cleaned up: ${file}`);
      } catch (err) {
        console.log(`⚠️  Could not delete: ${file}`);
      }
    }
  });
} catch (error) {
  console.log('⚠️  Could not scan for .d.ts files');
}

// Summary
console.log('\n📊 Cleanup Summary:');
console.log(`✅ Deleted ${deletedFiles} files`);
console.log(`✅ Deleted ${deletedFolders} folders`);
console.log('✅ Fixed TypeScript configuration');
console.log('✅ Ensured proper project structure');

if (errors.length > 0) {
  console.log(`\n❌ ${errors.length} errors occurred:`);
  errors.forEach(error => console.log(`   ${error}`));
}

console.log('\n🎯 Corrected Project Structure:');
console.log(`
nate-portfolio/
├── .github/workflows/deploy.yml    ✅ GitHub Actions
├── src/                           ✅ Source code (ONLY location for App.tsx)
│   ├── App.tsx                    ✅ Main application
│   └── main.tsx                   ✅ Entry point
├── components/                    ✅ React components  
├── data/                         ✅ Project data
├── public/                       ✅ Static assets
├── styles/                       ✅ CSS files
├── package.json                  ✅ Dependencies
├── vite.config.ts               ✅ Vite configuration
├── tsconfig.json                ✅ Fixed TypeScript config
└── index.html                   ✅ Entry HTML
`);

console.log('\n🚀 Next Steps:');
console.log('1. Run: npm install');
console.log('2. Test: npm run build');
console.log('3. If build works: npm run dev');
console.log('4. Commit: git add . && git commit -m "Fix build issues and clean structure"');
console.log('5. Deploy: git push origin main');

console.log('\n💡 The TypeScript error should now be resolved!');
console.log('The conflict was caused by having App.tsx in both root and /src/ directories.');