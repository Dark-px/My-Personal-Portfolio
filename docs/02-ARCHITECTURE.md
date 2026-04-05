# Architecture and Folder Structure

Persian version: `docs/fa/02-ARCHITECTURE.md`

The project is intentionally simple: route-level pages orchestrate section components, while reusable logic lives in `lib` and `hooks`.

## High-Level Flow

1. `src/main.tsx`
   - Bootstraps React
   - Loads global styles
   - Mounts `App`

2. `src/App.tsx`
   - Registers global providers
   - Defines routes (`/`, `/blog`, fallback)
   - Handles smooth scrolling and section reveal behavior

3. `src/pages/Index.tsx`
   - Composes homepage sections (portfolio experience)

4. `src/pages/BlogPage.tsx`
   - Fetches and renders Medium-based blog/devlog content

## Folder Responsibilities

```text
src/
  components/
    portfolio/   # Homepage sections and section-specific interactions
    common/      # Shared UI states and boundaries
    ui/          # Reusable UI primitives (shadcn/radix style)
  hooks/         # Reusable hooks
  integrations/  # External service clients (Supabase)
  lib/           # Utility functions, data transforms, shared types
  pages/         # Route-level pages
  index.css      # Global styles + animation system
  App.tsx        # App shell
  main.tsx       # Entry point
```

## Separation of Concerns

- `components/portfolio`: visual sections + local interaction logic
- `pages`: route orchestration and page-level logic
- `lib`: non-UI business/helpers
- `components/ui`: primitive design system layer

## Key Customization Entry Points

- Personal branding/content: `Hero`, `About`, `Contact`, `Footer`
- Project cards: `Projects`
- Learning timeline: `LearningJourney`
- Blog integration: `src/lib/medium.ts`, `BlogPage`, `FeaturedBlogs`
- Motion/theming: `src/index.css`

## Important Project Conventions

1. Anchor-based navigation relies on stable section IDs
2. Medium content is fetched and transformed in `src/lib/medium.ts`
3. Animation behavior is split across CSS + `requestAnimationFrame`
4. Shared UI primitives are centralized in `src/components/ui`

## Suggested Pattern for New Features

- New homepage section:
  1. Add component under `src/components/portfolio`
  2. Mount it in `src/pages/Index.tsx`
  3. Add nav/footer links if needed

- New data-driven feature:
  - Put fetching/transformation in `lib` or `hooks`
  - Keep UI components as presentational as possible
