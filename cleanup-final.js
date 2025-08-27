#!/usr/bin/env node

/**
 * Final cleanup script for Nate Portfolio
 * Removes all duplicate and unnecessary files for clean GitHub Pages deployment
 * Run with: node cleanup-final.js
 */

const fs = require('fs');
const path = require('path');

console.log('🧹 Final Cleanup for GitHub Pages Deployment...\n');

// Files to delete from root
const filesToDelete = [
  'App.tsx',                        // Duplicate - keep only /src/App.tsx
  'package-cra.json',              // Duplicate package.json
  'package-framer.json',           // Duplicate package.json  
  'postcss_config.js',             // Duplicate - keep postcss.config.js
  'tailwind_config.js',            // Duplicate - keep tailwind.config.js
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
  'cleanup.js'                     // Old cleanup script
];

// Folders to delete
const foldersToDelete = [
  'workflows',  // Incorrect location - should be .github/workflows
  'guidelines'  // Move Guidelines.md to root if needed, delete folder
];

let deletedFiles = 0;
let deletedFolders = 0;
let errors = [];

console.log('🗑️  Removing unnecessary files...\n');

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

console.log('\n📁 Verifying correct structure...\n');

// Ensure .github/workflows exists with correct file
try {
  const githubDir = '.github';
  const workflowsDir = path.join(githubDir, 'workflows');
  const deployFile = path.join(workflowsDir, 'deploy.yml');
  
  if (!fs.existsSync(githubDir)) {
    fs.mkdirSync(githubDir);
    console.log('✅ Created: .github/');
  }
  
  if (!fs.existsSync(workflowsDir)) {
    fs.mkdirSync(workflowsDir);
    console.log('✅ Created: .github/workflows/');
  }
  
  if (fs.existsSync(deployFile)) {
    console.log('✅ GitHub Actions workflow exists');
  } else {
    console.log('⚠️  GitHub Actions workflow missing - should be created');
  }
} catch (error) {
  console.error('❌ Error verifying .github structure:', error.message);
  errors.push(`.github/workflows: ${error.message}`);
}

// Verify src/App.tsx exists
if (fs.existsSync('src/App.tsx')) {
  console.log('✅ Main App.tsx is in correct location (/src/)');
} else {
  console.log('⚠️  src/App.tsx not found - this is required!');
}

// Verify package.json has homepage field
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  if (packageJson.homepage) {
    console.log('✅ Homepage field configured in package.json');
  } else {
    console.log('⚠️  Homepage field missing in package.json - should be added');
  }
} catch (error) {
  console.log('❌ Error reading package.json');
}

// Summary
console.log('\n📊 Cleanup Summary:');
console.log(`✅ Deleted ${deletedFiles} files`);
console.log(`✅ Deleted ${deletedFolders} folders`);

if (errors.length > 0) {
  console.log(`❌ ${errors.length} errors occurred:`);
  errors.forEach(error => console.log(`   ${error}`));
}

console.log('\n🎯 Final Project Structure:');
console.log(`
nate-portfolio/
├── .github/workflows/deploy.yml    ✅ GitHub Actions
├── src/App.tsx                     ✅ Main application
├── components/                     ✅ React components  
├── data/                          ✅ Project data
├── public/                        ✅ Static assets
├── styles/                        ✅ CSS files
├── package.json                   ✅ With homepage field
├── vite.config.ts                ✅ Vite configuration
└── index.html                     ✅ Entry HTML
`);

console.log('\n🚀 Ready for Deployment:');
console.log('1. Run: npm install');
console.log('2. Test: npm run build');
console.log('3. Commit: git add . && git commit -m "Clean structure for deployment"');
console.log('4. Deploy: git push origin main');
console.log('5. Enable GitHub Pages: Settings > Pages > Source: GitHub Actions');

console.log('\n🌟 Your portfolio will be live at:');
console.log('https://nategoss.github.io/nate-portfolio/');