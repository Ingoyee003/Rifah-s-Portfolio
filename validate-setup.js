#!/usr/bin/env node

/**
 * Portfolio Project Validation Script
 * Run this to check if your project is properly configured
 * 
 * Usage: node validate-setup.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Validating Portfolio Project Setup...\n');

let errors = 0;
let warnings = 0;

// Check required files
const requiredFiles = [
  'index.html',
  'package.json',
  'vite.config.ts',
  'tsconfig.json',
  'src/main.tsx',
  'src/app/App.tsx',
  'src/app/routes.tsx',
  'src/styles/index.css',
  '.gitignore',
];

console.log('📁 Checking Required Files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  if (exists) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - MISSING!`);
    errors++;
  }
});

// Check package.json scripts
console.log('\n📜 Checking package.json Scripts:');
try {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8')
  );
  
  const requiredScripts = ['dev', 'build', 'preview'];
  requiredScripts.forEach(script => {
    if (packageJson.scripts && packageJson.scripts[script]) {
      console.log(`  ✅ ${script}: ${packageJson.scripts[script]}`);
    } else {
      console.log(`  ❌ ${script} script - MISSING!`);
      errors++;
    }
  });

  // Check dependencies
  console.log('\n📦 Checking Key Dependencies:');
  const keyDeps = ['react', 'react-router', 'gsap', 'three', 'motion'];
  keyDeps.forEach(dep => {
    const hasDep = packageJson.dependencies?.[dep] || packageJson.peerDependencies?.[dep];
    if (hasDep) {
      console.log(`  ✅ ${dep}`);
    } else {
      console.log(`  ⚠️  ${dep} - Not found`);
      warnings++;
    }
  });
} catch (error) {
  console.log(`  ❌ Error reading package.json: ${error.message}`);
  errors++;
}

// Check node_modules
console.log('\n📚 Checking Installation:');
if (fs.existsSync(path.join(__dirname, 'node_modules'))) {
  console.log('  ✅ node_modules exists');
  console.log('  💡 Dependencies are installed');
} else {
  console.log('  ❌ node_modules not found');
  console.log('  💡 Run: npm install');
  errors++;
}

// Check page components
console.log('\n📄 Checking Page Components:');
const pages = ['Home', 'Resume', 'Skills', 'Projects', 'Experience', 'Certifications', 'Interests', 'Passions', 'Contact'];
pages.forEach(page => {
  const exists = fs.existsSync(path.join(__dirname, `src/app/pages/${page}.tsx`));
  if (exists) {
    console.log(`  ✅ ${page}.tsx`);
  } else {
    console.log(`  ❌ ${page}.tsx - MISSING!`);
    errors++;
  }
});

// Check GitHub Actions
console.log('\n🚀 Checking Deployment Configuration:');
if (fs.existsSync(path.join(__dirname, '.github/workflows/deploy.yml'))) {
  console.log('  ✅ GitHub Actions workflow configured');
} else {
  console.log('  ⚠️  No GitHub Actions workflow found');
  console.log('  💡 Deployment to GitHub Pages may not work automatically');
  warnings++;
}

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 Validation Summary:');
console.log('='.repeat(50));

if (errors === 0 && warnings === 0) {
  console.log('✅ All checks passed! Your project is ready to go! 🎉');
  console.log('\n🚀 Next steps:');
  console.log('   1. Run: npm run dev');
  console.log('   2. Open: http://localhost:5173/');
  console.log('   3. Start coding!');
} else {
  console.log(`❌ Errors: ${errors}`);
  console.log(`⚠️  Warnings: ${warnings}`);
  console.log('\n🔧 Fix the errors above and run this script again.');
  
  if (errors > 0) {
    console.log('\n💡 Most common fixes:');
    console.log('   - Run: npm install');
    console.log('   - Check that all files were extracted properly');
    console.log('   - See SETUP.md for detailed instructions');
  }
}

console.log('\n📚 Documentation:');
console.log('   - Quick Start: See QUICKSTART.md');
console.log('   - Full Guide: See SETUP.md');
console.log('   - What was Fixed: See FIXES-APPLIED.md');
console.log('');

process.exit(errors > 0 ? 1 : 0);
