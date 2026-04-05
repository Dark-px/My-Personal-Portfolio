# Portfolio Components Documentation

Persian version: `docs/fa/components/PORTFOLIO_COMPONENTS.md`

This file documents all section-level components used to build the homepage experience.

## Homepage Render Order (`src/pages/Index.tsx`)

1. `CustomCursor`
2. `ScrollProgress`
3. `Navigation`
4. `Hero`
5. `Projects`
6. `LearningJourney`
7. `About`
8. `FeaturedBlogs`
9. `Contact`
10. `Footer`

---

## `Navigation.tsx`

**Purpose**: Top navigation (desktop + mobile menu)

**Used in**: Homepage

**Customize**:
- `navItems` list
- Blog button label and destination
- Scrolled-state styling (`isScrolled`)

**Note**: Anchor targets depend on section IDs.

---

## `Hero.tsx`

**Purpose**: Primary intro, headline, CTA controls

**Used in**: Homepage top section

**Customize**:
- Typing name (`fullName`)
- Intro copy
- CTA labels and target sections
- GitHub profile URL

**Note**: Typing animation pauses when tab is inactive.

---

## `Projects.tsx`

**Purpose**: Project cards grid

**Used in**: `projects` section

**Customize**:
- `projects` array (title, subtitle, description, tech, image, links)
- Number of cards
- Bottom CTA text

**Note**: Images should exist in `public/`.

---

## `LearningJourney.tsx`

**Purpose**: Skill phases and long-term vision

**Used in**: `journey` section

**Customize**:
- `stages` array
- Future vision content blocks
- Section labels/titles

---

## `About.tsx`

**Purpose**: Personal story and profile summary

**Used in**: `about` section

**Customize**:
- Main paragraphs
- `QUICK_FACTS`
- `TECH_STACK`

---

## `FeaturedBlogs.tsx`

**Purpose**: Featured Medium posts preview on homepage

**Used in**: `featured_blogs` section

**Customize**:
- Header text
- Featured post selection behavior
- Card style/text excerpts

**Depends on**: `src/lib/medium.ts`

---

## `Contact.tsx`

**Purpose**: Contact methods + primary email CTA

**Used in**: `contact` section

**Customize**:
- `contacts` array (links and labels)
- Email address (`mailto:`)
- CTA headline and supporting text

---

## `Footer.tsx`

**Purpose**: Quick links, social links, copyright

**Used in**: Homepage + Blog page

**Customize**:
- `socialLinks`
- Branding copy
- Quick links list

**Note**: Footer handles homepage/blog route differences for anchor links.

---

## `CustomCursor.tsx`

**Purpose**: Custom cursor with contextual preview tooltip

**Used in**: Homepage

**Customize**:
- Cursor size and style
- Preview styling
- Interactive element detection

**Note**: Enabled only for fine pointers (desktop-like devices).

---

## `ScrollProgress.tsx`

**Purpose**: Top progress indicator for page scroll

**Used in**: Homepage and Blog page

**Customize**:
- Height, color, transition speed
- Progress update threshold

---

## `Devlog.tsx`

**Purpose**: Combined Devlog/Blog section component

**Current status**: Not mounted in main homepage flow (dedicated `/blog` page is used).

**Use case**: Re-enable when embedding blog content directly into homepage.
