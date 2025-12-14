/**
 * Generate CSS variables from design-tokens.ts
 * This script parses design-tokens.ts and generates CSS custom properties
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const globalsCssPath = join(__dirname, '../app/globals.css');
const tokensPath = join(__dirname, '../design-tokens.ts');

/**
 * Parse design-tokens.ts and extract values
 */
function parseDesignTokens() {
  const content = fs.readFileSync(tokensPath, 'utf-8');
  
  const tokens = {
    colors: {},
    typography: {}
  };
  
  // Extract teal colors - find the teal block
  const tealMatch = content.match(/teal:\s*\{([^}]+)\}/);
  if (tealMatch) {
    const tealBlock = tealMatch[1];
    const primary = tealBlock.match(/primary:\s*['"]([^'"]+)['"]/);
    const dark = tealBlock.match(/dark:\s*['"]([^'"]+)['"]/);
    const light = tealBlock.match(/light:\s*['"]([^'"]+)['"]/);
    if (primary) tokens.colors.tealPrimary = primary[1];
    if (dark) tokens.colors.tealDark = dark[1];
    if (light) tokens.colors.tealLight = light[1];
  }
  
  // Extract gold colors
  const goldMatch = content.match(/gold:\s*\{([^}]+)\}/);
  if (goldMatch) {
    const goldBlock = goldMatch[1];
    const primary = goldBlock.match(/primary:\s*['"]([^'"]+)['"]/);
    const dark = goldBlock.match(/dark:\s*['"]([^'"]+)['"]/);
    const light = goldBlock.match(/light:\s*['"]([^'"]+)['"]/);
    if (primary) tokens.colors.goldPrimary = primary[1];
    if (dark) tokens.colors.goldDark = dark[1];
    if (light) tokens.colors.goldLight = light[1];
  }
  
  // Extract typography - find fontFamily block
  // The values are like: heading: "'Playfair Display', serif"
  // Match the full value including nested quotes
  const headingMatch = content.match(/heading:\s*"([^"]+)"/);
  const bodyMatch = content.match(/body:\s*"([^"]+)"/);
  if (headingMatch) {
    // Extract font name from "'Playfair Display', serif" -> "Playfair Display"
    const fullValue = headingMatch[1]; // This gives us: 'Playfair Display', serif
    // Remove the outer single quotes and get just the font name
    const fontName = fullValue.replace(/^'/g, '').split("'")[0].trim();
    tokens.typography.heading = fontName;
  }
  if (bodyMatch) {
    const fullValue = bodyMatch[1];
    const fontName = fullValue.replace(/^'/g, '').split("'")[0].trim();
    tokens.typography.body = fontName;
  }
  
  return tokens;
}

/**
 * Generate CSS variables string
 */
function generateCssVariables() {
  const tokens = parseDesignTokens();
  
  const lines = [
    '  /* Generated from design-tokens.ts - DO NOT EDIT MANUALLY */',
    '',
  ];
  
  // Generate typography variables first
  if (tokens.typography.heading) {
    lines.push(`  --font-heading: '${tokens.typography.heading}', serif;`);
  }
  if (tokens.typography.body) {
    lines.push(`  --font-body: '${tokens.typography.body}', sans-serif;`);
  }
  if (tokens.typography.heading || tokens.typography.body) {
    lines.push('  --font-size: 16px;');
    lines.push('');
    lines.push('  /* Brand Colors */');
  }
  
  // Generate color variables
  if (tokens.colors.tealPrimary) {
    lines.push(`  --color-teal-primary: ${tokens.colors.tealPrimary};`);
  }
  if (tokens.colors.tealDark) {
    lines.push(`  --color-teal-dark: ${tokens.colors.tealDark};`);
  }
  if (tokens.colors.tealLight) {
    lines.push(`  --color-teal-light: ${tokens.colors.tealLight};`);
  }
  if (tokens.colors.goldPrimary) {
    lines.push(`  --color-gold-primary: ${tokens.colors.goldPrimary};`);
  }
  if (tokens.colors.goldDark) {
    lines.push(`  --color-gold-dark: ${tokens.colors.goldDark};`);
  }
  if (tokens.colors.goldLight) {
    lines.push(`  --color-gold-light: ${tokens.colors.goldLight};`);
  }
  
  return lines.join('\n');
}

/**
 * Update globals.css with generated CSS variables
 */
function updateGlobalsCss() {
  let globalsContent = fs.readFileSync(globalsCssPath, 'utf-8');
  const generatedVars = generateCssVariables();
  
  // Replace the section from :root { to just before --background
  // This regex finds :root {, then captures everything up to (but not including) --background
  const pattern = /(:root\s*\{)([\s\S]*?)(?=\s*--background)/;
  
  if (!pattern.test(globalsContent)) {
    throw new Error('Could not find :root block with --background in globals.css');
  }
  
  // Remove old generated variables and font/color variables
  const updatedContent = globalsContent.replace(pattern, (match, rootHeader, rootContent) => {
    // Remove all the variables we're replacing
    let cleaned = rootContent
      .replace(/\s*\/\* Generated from design-tokens\.ts[\s\S]*?\*\/\s*/g, '')
      .replace(/^\s*--font-heading:[^;]+;[\r\n]*/gm, '')
      .replace(/^\s*--font-body:[^;]+;[\r\n]*/gm, '')
      .replace(/^\s*--font-size:[^;]+;[\r\n]*/gm, '')
      .replace(/^\s*\/\*\s*Brand Colors\s*\*\/[\r\n]*/gm, '')
      .replace(/^\s*--color-teal-primary:[^;]+;[\r\n]*/gm, '')
      .replace(/^\s*--color-teal-dark:[^;]+;[\r\n]*/gm, '')
      .replace(/^\s*--color-teal-light:[^;]+;[\r\n]*/gm, '')
      .replace(/^\s*--color-gold-primary:[^;]+;[\r\n]*/gm, '')
      .replace(/^\s*--color-gold-dark:[^;]+;[\r\n]*/gm, '')
      .replace(/^\s*--color-gold-light:[^;]+;[\r\n]*/gm, '')
      .replace(/\n\n\n+/g, '\n\n')
      .trim();
    
    return rootHeader + generatedVars + '\n' + cleaned;
  });
  
  fs.writeFileSync(globalsCssPath, updatedContent, 'utf-8');
  console.log('✓ Generated CSS variables from design-tokens.ts');
}

// Run the generator
try {
  updateGlobalsCss();
} catch (error) {
  console.error('Error generating CSS variables:', error.message);
  console.error(error.stack);
  process.exit(1);
}
