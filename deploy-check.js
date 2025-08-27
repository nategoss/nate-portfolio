#!/usr/bin/env node

/**
 * Pre-deployment verification script
 * Checks if everything is configured correctly for GitHub Pages
 * Run with: node deploy-check.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 GitHub Pages Deployment Check\n');

let passed = 0;
let failed = 0;
let warnings = 0;

function checkPassed(message) {
  console.log(`✅ ${message}`);
  passed++;
}

function checkFailed(message) {
  console.log(`❌ ${message}`);
  failed++;
}

function checkWarning(message) {
  console.log(`⚠️  ${message}`);
  warnings++;
}

// Test 1: Check critical files exist
console.log('📁 File Structure Checks:\n');

const requiredFiles = [
  { path: 'package.json', description: 'Package configuration' },
  { path: 'vite.config.ts', description: 'Vite configuration' },
  { path: 'src/App.tsx', description: 'Main application component' },
  { path: 'src/main.tsx', description: 'Application entry point' },
  { path: 'index.html', description: 'HTML template' },
  { path: '.github/workflows/deploy.yml', description: 'GitHub Actions workflow' }
];

requiredFiles.forEach(({ path: filePath, description }) => {
  if (fs.existsSync(filePath)) {
    checkPassed(`${description} exists (${filePath})`);
  } else {
    checkFailed(`${description} missing (${filePath})`);
  }
});

// Test 2: Check package.json configuration
console.log('\n⚙️  Package.json Configuration:\n');

try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  if (packageJson.name === 'nate-portfolio') {
    checkPassed('Package name is correct');
  } else {
    checkWarning(`Package name is "${packageJson.name}", should be "nate-portfolio"`);
  }
  
  if (packageJson.homepage) {
    if (packageJson.homepage.includes('nate-portfolio')) {
      checkPassed(`Homepage field configured: ${packageJson.homepage}`);
    } else {
      checkWarning(`Homepage field may be incorrect: ${packageJson.homepage}`);
    }
  } else {
    checkFailed('Homepage field missing - required for GitHub Pages');
  }
  
  const requiredScripts = ['dev', 'build', 'preview'];
  requiredScripts.forEach(script => {
    if (packageJson.scripts && packageJson.scripts[script]) {
      checkPassed(`Build script "${script}" exists`);
    } else {
      checkFailed(`Build script "${script}" missing`);
    }
  });
  
} catch (error) {
  checkFailed(`Cannot read package.json: ${error.message}`);
}

// Test 3: Check Vite configuration
console.log('\n🔧 Vite Configuration:\n');

try {
  const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
  
  if (viteConfig.includes('/nate-portfolio/')) {
    checkPassed('Base path configured for GitHub Pages');
  } else {
    checkWarning('Base path may not be configured correctly');
  }
  
  if (viteConfig.includes('mode === \'production\'')) {
    checkPassed('Production mode configuration found');
  } else {
    checkWarning('Production mode configuration not found');
  }
  
} catch (error) {
  checkFailed(`Cannot read vite.config.ts: ${error.message}`);
}

// Test 4: Check GitHub Actions workflow
console.log('\n🚀 GitHub Actions Configuration:\n');

try {
  const workflow = fs.readFileSync('.github/workflows/deploy.yml', 'utf8');
  
  if (workflow.includes('actions/checkout@v4')) {
    checkPassed('Uses latest checkout action');
  } else {
    checkWarning('May not be using latest checkout action');
  }
  
  if (workflow.includes('actions/setup-node@v4')) {
    checkPassed('Uses latest Node.js setup action');
  } else {
    checkWarning('May not be using latest Node.js setup action');
  }
  
  if (workflow.includes('npm run build')) {
    checkPassed('Build command configured');
  } else {
    checkFailed('Build command not found in workflow');
  }
  
  if (workflow.includes('upload-pages-artifact')) {
    checkPassed('Pages artifact upload configured');
  } else {
    checkFailed('Pages artifact upload not configured');
  }
  
} catch (error) {
  checkFailed(`Cannot read GitHub Actions workflow: ${error.message}`);
}

// Test 5: Check for SPA routing
console.log('\n🔗 SPA Routing Configuration:\n');

try {
  const indexHtml = fs.readFileSync('index.html', 'utf8');
  if (indexHtml.includes('sessionStorage') || indexHtml.includes('location.pathname')) {
    checkPassed('SPA routing script found in index.html');
  } else {
    checkWarning('SPA routing script may be missing from index.html');
  }
} catch (error) {
  checkWarning(`Cannot read index.html: ${error.message}`);
}

if (fs.existsSync('public/404.html')) {
  checkPassed('404.html exists for client-side routing');
} else {
  checkWarning('404.html missing - may cause issues with direct URL access');
}

// Test 6: Check for duplicate files that should be removed
console.log('\n🧹 Cleanup Verification:\n');

const shouldNotExist = [
  'App.tsx',
  'workflows/',
  'package-cra.json',
  'package-framer.json',
  'postcss_config.js',
  'tailwind_config.js'
];

shouldNotExist.forEach(file => {
  if (!fs.existsSync(file)) {
    checkPassed(`Duplicate file removed: ${file}`);
  } else {
    checkWarning(`Duplicate file still exists: ${file}`);
  }
});

// Summary
console.log('\n📊 Deployment Readiness Summary:');
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`⚠️  Warnings: ${warnings}`);

if (failed === 0) {
  console.log('\n🎉 Your project is ready for GitHub Pages deployment!');
  console.log('\n🚀 Next Steps:');
  console.log('1. git add .');
  console.log('2. git commit -m "Ready for GitHub Pages deployment"');
  console.log('3. git push origin main');
  console.log('4. Go to GitHub Settings > Pages > Source: "GitHub Actions"');
  console.log('\n🌐 Your site will be live at:');
  console.log('https://nategoss.github.io/nate-portfolio/');
} else {
  console.log('\n❌ Please fix the failed checks before deploying.');
  console.log('Run this script again after making corrections.');
}

if (warnings > 0) {
  console.log('\n⚠️  Warnings should be addressed but won\'t prevent deployment.');
}