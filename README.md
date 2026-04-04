# Parsa Ghaei Portfolio

A modern personal portfolio focused on game development, design, and learning progress.
Built with React, TypeScript, Vite, and Tailwind CSS with smooth interactions and a custom UI style.

---

## Highlights

- Bold single-page portfolio layout (Hero, Projects, Learning Path, About, Blog, Contact)
- Smooth scrolling with `lenis`
- Custom cursor + hover preview interactions
- Scroll progress indicator
- Responsive design for desktop and mobile
- Clean component-based architecture for easy edits

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Radix UI + shadcn-style components
- Supabase SDK (optional integration points)

## Quick Start

```bash
git clone <your-repo-url>
cd my-portfolio
npm install
npm run dev
```

App runs on `http://localhost:8080` by default.

## Available Scripts

- `npm run dev` - start local dev server
- `npm run typecheck` - run TypeScript checks
- `npm run lint` - run ESLint
- `npm run build` - typecheck + production build
- `npm run preview` - preview production build locally

## Environment Variables

Create `.env` from `.env.example` and fill your own values:

```bash
cp .env.example .env
```

Main keys used:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_API_URL`
- `VITE_PROJECT_ID`

## Project Structure

```text
src/
  components/
    portfolio/      # Main portfolio sections and UI behavior
    ui/             # Shared UI primitives
  lib/              # Utilities (scroll helpers, etc.)
  pages/            # Route pages (home, blog, not-found)
  hooks/            # Reusable hooks
  data/             # Static content/data sources
docs/               # Documentation
public/             # Static assets
```

## Customization Guide

- Personal info and section content:
  - `src/components/portfolio/Hero.tsx`
  - `src/components/portfolio/About.tsx`
  - `src/components/portfolio/Contact.tsx`
- Projects list:
  - `src/components/portfolio/Projects.tsx`
- Learning roadmap:
  - `src/components/portfolio/LearningJourney.tsx`
- Theme, animations, utilities:
  - `src/index.css`

## Deployment

You can deploy this project on platforms like:

- Vercel
- Netlify
- Cloudflare Pages

Standard flow:

1. Set environment variables in your hosting provider
2. Build command: `npm run build`
3. Output directory: `dist`

## Contact

- GitHub: `https://github.com/<your-username>`
- Email: `your-email@example.com`

---

If you like this project, feel free to fork it and build your own version.
