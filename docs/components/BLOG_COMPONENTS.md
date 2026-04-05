# Blog and Devlog Documentation

Persian version: `docs/fa/components/BLOG_COMPONENTS.md`

The content system has two layers:

1. **Homepage preview** via `FeaturedBlogs`
2. **Full page** via `/blog` (`BlogPage.tsx`)

## Files Involved

### `src/pages/BlogPage.tsx`

**Responsibilities**:
- Fetches Medium posts with React Query
- Splits data into Blog vs Devlog buckets
- Renders post cards and loading states
- Updates SEO meta tags and canonical link
- Injects structured data (`application/ld+json`)

**Customization points**:
- Card layout and labels
- Error messaging and skeleton behavior
- Section titles and category labels

---

### `src/components/portfolio/FeaturedBlogs.tsx`

**Responsibilities**:
- Renders a curated 3-post preview block on homepage
- Uses shared Medium data helpers

**Customization points**:
- Header copy
- Featured selection behavior
- Card sizing/excerpts

---

### `src/lib/medium.ts`

**Responsibilities**:
- Defines `MediumPost` type
- Fetches Medium RSS feed (via rss2json)
- Normalizes and sorts posts
- Detects devlog posts
- Selects featured posts

**Customization points**:
- `MEDIUM_CONFIG.devlogTags`
- `MEDIUM_CONFIG.featuredCount`
- `MEDIUM_CONFIG.featuredPostLinks`

**Environment integration**:
- `VITE_MEDIUM_USERNAME`
- `VITE_MEDIUM_FEATURED_POST_1`
- `VITE_MEDIUM_FEATURED_POST_2`
- `VITE_MEDIUM_FEATURED_POST_3`

## Blog vs Devlog Classification Rules

A post is considered a **Devlog** if:

- The title includes `devlog`, or
- It has at least one category/tag listed in `devlogTags`

Otherwise, it falls under **Blog**.

## Common Failure Checklist

1. Check `.env` contains a valid `VITE_MEDIUM_USERNAME`
2. Use username without `@`
3. Open `/blog` and inspect inline error output
4. Review `docs/SEO_MEDIUM_FAQ.md` for SEO/feed constraints

## Future Hardening Suggestions

- Add edge/server caching for Medium feed response
- Add fallback backend endpoint if rss2json has rate/availability issues
