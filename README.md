# Vitality Concierge Medicine

A Next.js website for Vitality Concierge Medicine - Healthcare Without The Insurance Hassle.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js app router pages and layout
- `/components` - React components
  - `/sections` - Page sections (Hero, Benefits, CTA, etc.)
  - `/ui` - Reusable UI components (Button, Section, etc.)
- `/lib` - Utility functions
- `/design-tokens.ts` - Centralized design system values

## Development Rules

See `rules.md` for development guidelines including:
- Always use and update `design-tokens.ts`
- Create reusable components for repeated patterns
- Follow the "change once, see everywhere" principle

## Build

```bash
npm run build
```

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React (icons)

