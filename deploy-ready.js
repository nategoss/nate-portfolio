#!/usr/bin/env node

/**
 * Quick deployment readiness check
 * Run with: node deploy-ready.js
 */

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔍 Checking Deployment Readiness...\n');

let checks = 0;
let passed = 0;

function check(description, condition) {
  checks++;
  if (condition) {
    console.log(`✅ ${description}`);
    passed++;
  } else {
    console.log(`❌ ${description}`);
  }
}

// Critical file structure checks
check('src/App.tsx exists', fs.existsSync('src/App.tsx'));
check('src/main.tsx exists', fs.existsSync('src/main.tsx'));
check('Root App.tsx removed', !fs.existsSync('App.tsx'));
check('package.json exists', fs.existsSync('package.json'));
check('vite.config.ts exists', fs.existsSync('vite.config.ts'));
check('GitHub workflow exists', fs.existsSync('.github/workflows/deploy.yml'));

// Check package.json homepage
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  check('Homepage field configured', pkg.homepage && pkg.homepage.includes('nate-portfolio'));
} catch {
  check('Package.json readable', false);
}

// Check for duplicate files that should be gone
check('No duplicate package files', !fs.existsSync('package-cra.json') && !fs.existsSync('package-framer.json'));
check('No duplicate config files', !fs.existsSync('postcss_config.js') && !fs.existsSync('tailwind_config.js'));
check('No workflows folder', !fs.existsSync('workflows'));

console.log(`\n📊 Results: ${passed}/${checks} checks passed\n`);

if (passed === checks) {
  console.log('🎉 All checks passed! Testing build...\n');
  
  try {
    console.log('🔨 Running build test...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('\n✅ Build successful! Ready to deploy.\n');
    
    console.log('🚀 Deploy with:');
    console.log('git add .');
    console.log('git commit -m "Fix build and deploy"');
    console.log('git push origin main');
    
    console.log('\n🌐 Will be live at:');
    console.log('https://nategoss.github.io/nate-portfolio/');
    
  } catch (error) {
    console.log('\n❌ Build failed. Check for remaining issues.');
    console.log('Run: npm install && npm run build');
  }
} else {
  console.log('❌ Some checks failed. Run the cleanup script first:');
  console.log('node fix-build.js');
}