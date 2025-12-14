# Development Rules

## Design Tokens

1. **Always use and update `design-tokens.ts`**
   - All colors, typography, spacing, borders, shadows, and transitions must be defined in `design-tokens.ts`
   - Never hardcode design values (colors, spacing, etc.) directly in components
   - When adding new design values, first add them to `design-tokens.ts`, then use them in components
   - Update the tokens file when design system changes are needed

## Component Reusability

2. **Create reusable components for repeated patterns**
   - If a component or element (buttons, sections, content blocks) will be reused across the site, create a reusable component that accepts props
   - Follow the principle: "Change once, see everywhere"
   - The site should be as modular as possible
   - Examples of what should be reusable:
     - Buttons (primary, secondary, variants)
     - Sections (with consistent spacing and layout)
     - Cards/Content blocks
     - Form elements
     - Headings and text styles

## Component Guidelines

3. **Component Structure**
   - Use TypeScript for all components
   - Use design tokens via CSS variables or direct imports
   - Keep components focused and single-purpose
   - Accept props for customization rather than hardcoding variations
   - Document component props with TypeScript interfaces/types

## Code Quality

4. **Code Efficiency**
   - Write the most efficient code possible
   - Avoid verbose code
   - Maintain existing functionality when making changes
   - Only make necessary changes to avoid breaking existing features

