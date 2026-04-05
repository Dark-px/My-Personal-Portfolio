# Core App and Infrastructure Documentation

Persian version: `docs/fa/components/CORE_APP_AND_INFRA.md`

This file covers non-section foundations: app shell, pages, hooks, libs, and integrations.

## App Shell

### `src/main.tsx`

- React entry point
- Imports global styles (`index.css`, `lenis.css`)
- Mounts `App`

### `src/App.tsx`

- Registers global providers:
  - `QueryClientProvider`
  - `TooltipProvider`
  - `Toaster`
  - `Sonner`
- Defines routes:
  - `/` -> `Index`
  - `/blog` -> `BlogPage`
  - `*` -> `NotFound`
- Handles smooth scrolling with Lenis
- Handles anchor navigation
- Sets reveal behavior for `.section-enter` and `.section-enter-soft`

## Route Pages

### `src/pages/Index.tsx`

- Homepage composition/orchestration

### `src/pages/BlogPage.tsx`

- Blog/Devlog route
- SEO metadata and structured data management

### `src/pages/NotFound.tsx`

- 404 page

## Hooks

### `src/hooks/use-mobile.tsx`

- Returns mobile state based on breakpoint logic

### `src/hooks/use-toast.ts`

- Global toast state and actions (add/update/dismiss)

## Libraries

### `src/lib/scroll.ts`

- Scrolls to section IDs with navbar offset
- Uses Lenis when available

### `src/lib/medium.ts`

- Medium feed fetch + transform + classification logic

### `src/lib/utils.ts`

- `cn()` class merge helper
- `toEnDigits()` Persian/Arabic digit normalization helper

### `src/lib/types.ts`

- Shared app/domain type definitions

## Integrations

### `src/integrations/supabase/client.ts`

- Creates Supabase client
- Emits dev warning if env configuration is missing

### `src/integrations/supabase/types.ts`

- Generated/maintained DB type contracts

## Styling Layers

- `src/index.css` -> global styles, animation utilities, visual system
- `src/App.css` -> lightweight app-level styles
