# Logo Files

## Required Logo Files

You need **two** logo files:

### 1. Full Logo (for top of page when not scrolled)
- **File name**: `logo.svg`
- **Location**: `/public/logo.svg`
- **Display size**: 
  - Mobile/Tablet: 48-56px height
  - Desktop: 64px height (when at top of page)

### 2. Logo Mark (for navbar when scrolled)
- **File name**: `logo_mark.svg`
- **Location**: `/public/logo_mark.svg`
- **Display size**: 
  - Mobile: 40px height
  - Desktop: 48px height
- **Description**: This is typically just the icon/symbol part of your logo (without text)

## Recommended Format

**SVG is strongly recommended** because:
- Vector-based, scales perfectly at any size
- Small file size
- Always crisp at any resolution
- Works great with Next.js Image component

## Alternative: PNG/WebP Format

If you don't have SVG logos, you can use PNG or WebP:
- `/public/logo.png` - Full logo (at least 200px wide recommended)
- `/public/logo_mark.png` - Logo mark (at least 64px square recommended)

## Current Setup

The Header component automatically switches between:
- **At top of page (not scrolled)**: Shows full `logo.svg` with larger vertical padding on desktop (`lg:py-8`)
- **When scrolled**: Shows `logo_mark.svg` with reduced padding (`py-3`)

Both logos will scale responsively and maintain their aspect ratios with smooth transitions.

## Logo Dimensions Summary

**Full Logo (`logo.svg`)**:
- When not scrolled: 48-64px height (responsive)
- Desktop padding: `lg:py-8` (64px vertical padding)
- Aspect ratio: Maintain your logo's natural proportions

**Logo Mark (`logo_mark.svg`)**:
- When scrolled: 40-48px height (responsive)
- Should be square or close to square for best results
- Mobile: `h-10` (40px)
- Desktop: `sm:h-12` (48px)

