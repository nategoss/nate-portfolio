#!/usr/bin/env node

/**
 * Test script to verify the build process works correctly
 * Run with: node scripts/test-build.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing Nate Portfolio Build Process...\n');

// Test 1: Check if we're in the right directory
console.log('1️⃣ Checking project structure...');
const requiredFiles = [
  'package.json',
  'vite.config.ts',
  'App.tsx',
  'index.html'
];

let missingFiles = [];
requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    missingFiles.push(file);
  }
});

if (missingFiles.length > 0) {
  console.error('❌ Missing required files:', missingFiles);
  process.exit(1);
}
console.log('✅ All required files present\n');

// Test 2: Check package.json scripts
console.log('2️⃣ Checking package.json scripts...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredScripts = ['dev', 'build', 'preview'];
let missingScripts = [];

requiredScripts.forEach(script => {
  if (!packageJson.scripts || !packageJson.scripts[script]) {
    missingScripts.push(script);
  }
});

if (missingScripts.length > 0) {
  console.error('❌ Missing required scripts:', missingScripts);
  process.exit(1);
}
console.log('✅ All required scripts present\n');

// Test 3: Install dependencies
console.log('3️⃣ Installing dependencies...');
try {
  execSync('npm ci', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully\n');
} catch (error) {
  console.error('❌ Failed to install dependencies');
  process.exit(1);
}

// Test 4: TypeScript check
console.log('4️⃣ Running TypeScript check...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ TypeScript check passed\n');
} catch (error) {
  console.error('❌ TypeScript check failed');
  process.exit(1);
}

// Test 5: Build the project
console.log('5️⃣ Building the project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully\n');
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}

// Test 6: Check build output
console.log('6️⃣ Checking build output...');
const distPath = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ Build output directory not found');
  process.exit(1);
}

const distFiles = fs.readdirSync(distPath);
const expectedFiles = ['index.html', 'assets'];
let missingBuildFiles = [];

expectedFiles.forEach(file => {
  if (!distFiles.includes(file)) {
    missingBuildFiles.push(file);
  }
});

if (missingBuildFiles.length > 0) {
  console.error('❌ Missing build files:', missingBuildFiles);
  process.exit(1);
}
console.log('✅ Build output looks good\n');

// Test 7: Check for GitHub Pages configuration
console.log('7️⃣ Checking GitHub Pages configuration...');
const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
if (!viteConfig.includes('/nate-portfolio/')) {
  console.warn('⚠️ Base path might not be configured for GitHub Pages');
} else {
  console.log('✅ GitHub Pages base path configured');
}

const hasWorkflow = fs.existsSync('.github/workflows/deploy.yml');
if (!hasWorkflow) {
  console.warn('⚠️ GitHub Actions workflow not found');
} else {
  console.log('✅ GitHub Actions workflow present');
}

const has404 = fs.existsSync('public/404.html');
if (!has404) {
  console.warn('⚠️ 404.html for SPA routing not found');
} else {
  console.log('✅ SPA routing 404.html present');
}

console.log('\n🎉 All tests passed! Your portfolio is ready for deployment.\n');

console.log('📋 Next steps:');
console.log('1. Push your code to GitHub');
console.log('2. Go to Settings > Pages > Source: GitHub Actions');
console.log('3. Wait for the deployment workflow to complete');
console.log('4. Visit: https://nategoss.github.io/nate-portfolio\n');

console.log('🔍 Useful commands:');
console.log('- npm run dev        (start development server)');
console.log('- npm run build      (build for production)');
console.log('- npm run preview    (preview production build)');
console.log('- node scripts/test-build.js (run this test again)');