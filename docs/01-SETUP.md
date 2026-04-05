# Setup Guide

Persian version: `docs/fa/01-SETUP.md`

This project is built with `Vite + React + TypeScript` and is optimized for fast iteration.

## Prerequisites

- Node.js 18+ (Node 20+ recommended)
- npm 9+

## Install and Run

```bash
npm install
npm run dev
```

Default dev URL:

- `http://localhost:8080`

## Available Scripts

```bash
npm run dev        # start development server
npm run typecheck  # run TypeScript checks
npm run lint       # run ESLint
npm run build      # production build
npm run preview    # preview production build
```

## Environment Variables

Template file:

- `.env.example`

Create local env file:

```bash
cp .env.example .env
```

### Core variables

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_API_URL`
- `VITE_PROJECT_ID`

### Medium variables

- `VITE_MEDIUM_USERNAME`
- `VITE_MEDIUM_FEATURED_POST_1`
- `VITE_MEDIUM_FEATURED_POST_2`
- `VITE_MEDIUM_FEATURED_POST_3`

If `VITE_MEDIUM_USERNAME` is missing, the blog-related components will show a descriptive error state.

## Deploy (Cloudflare Pages)

Recommended settings:

- Build command: `npm run build`
- Output directory: `dist`

Current production domain:

- `https://parsaghaei.dev`

## Quick Troubleshooting

### Blank page or missing content

1. Restart `npm run dev`
2. Hard refresh browser (`Ctrl + Shift + R`)
3. Check browser console
4. Restart dev server after env changes

### Medium feed errors

- Verify `VITE_MEDIUM_USERNAME` in `.env`
- Open `/blog` and read the inline error message

### Supabase warning in development

- This is expected if Supabase env variables are not configured yet
- The main portfolio pages can still render if Supabase-backed features are not used
