#!/usr/bin/env node

/**
 * Automated cleanup script for Nate Portfolio
 * Removes duplicate and unnecessary files
 * Run with: node cleanup.js
 */

const fs = require('fs');
const path = require('path');

console.log('🧹 Starting Nate Portfolio Cleanup...\n');

// Files to delete
const filesToDelete = [
  'App.tsx',                        // Moved to /src/App.tsx
  'package-cra.json',              // Duplicate
  'package-framer.json',           // Duplicate  
  'postcss_config.js',             // Duplicate
  'tailwind_config.js',            // Duplicate
  'Attributions.md',               // Documentation cleanup
  'CONTENT_GUIDE.md',              // Documentation cleanup
  'CONTENT_MANAGEMENT.md',         // Documentation cleanup
  'DELETE_WORKFLOWS_FOLDER.md',    // Documentation cleanup
  'DEPLOYMENT.md',                 // Documentation cleanup
  'DEPLOYMENT_CHECKLIST.md',       // Documentation cleanup
  'DEPLOYMENT_DEBUG.md',           // Documentation cleanup
  'ENVIRONMENT_TEST.md',           // Documentation cleanup
  'GITHUB_PAGES_DEPLOYMENT.md',    // Documentation cleanup
  'GITHUB_PAGES_SETUP.md',         // Documentation cleanup
  'REPOSITORY_NAME_UPDATE.md'      // Documentation cleanup
];

// Folders to delete
const foldersToDelete = [
  'workflows'  // Incorrect location - should be .github/workflows
];

let deletedFiles = 0;
let deletedFolders = 0;
let errors = [];

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

// Delete folders
foldersToDelete.forEach(folder => {
  try {
    if (fs.existsSync(folder)) {
      fs.rmSync(folder, { recursive: true, force: true });
      console.log(`✅ Deleted folder: ${folder}`);
      deletedFolders++;
    } else {
      console.log(`⏭️  Skip: ${folder}/ (not found)`);
    }
  } catch (error) {
    console.error(`❌ Error deleting ${folder}:`, error.message);
    errors.push(`${folder}: ${error.message}`);
  }
});

// Ensure .github/workflows exists
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
} catch (error) {
  console.error('❌ Error creating .github/workflows:', error.message);
  errors.push(`.github/workflows: ${error.message}`);
}

// Summary
console.log('\n📊 Cleanup Summary:');
console.log(`✅ Deleted ${deletedFiles} files`);
console.log(`✅ Deleted ${deletedFolders} folders`);

if (errors.length > 0) {
  console.log(`❌ ${errors.length} errors occurred:`);
  errors.forEach(error => console.log(`   ${error}`));
}

console.log('\n🎯 Next Steps:');
console.log('1. Verify the build works: npm run build');
console.log('2. Test locally: npm run dev');
console.log('3. Commit changes: git add . && git commit -m "Clean up project structure"');
console.log('4. Deploy: git push origin main');

console.log('\n✨ Your project structure is now clean and ready for deployment!');