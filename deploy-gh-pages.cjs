// Deploy script for GitHub Pages (CommonJS)
const { execSync } = require('child_process');
const fs = require('fs');

if (!fs.existsSync('node_modules/.bin/gh-pages')) {
  console.log('Installing gh-pages...');
  execSync('npm install --save-dev gh-pages', { stdio: 'inherit' });
}

console.log('Publishing to GitHub Pages...');
execSync('npx gh-pages -d dist', { stdio: 'inherit' });
