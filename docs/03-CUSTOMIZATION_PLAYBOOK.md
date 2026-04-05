# Customization Playbook

Persian version: `docs/fa/03-CUSTOMIZATION_PLAYBOOK.md`

Use this sequence to personalize the project with minimal risk.

## Step 1: Brand Identity

Main files:

- `src/components/portfolio/Hero.tsx`
- `src/components/portfolio/About.tsx`
- `src/components/portfolio/Footer.tsx`
- `src/components/portfolio/Contact.tsx`
- `index.html` (title, description, OG tags)

Update:
- Name and bio
- Social links
- Contact email
- Intro copy and role labels

## Step 2: Project Content

Main file:

- `src/components/portfolio/Projects.tsx`

Update:
- Project names
- Descriptions
- Tech stack labels
- GitHub/Itch links
- Images in `public/`

## Step 3: Learning Narrative

Main file:

- `src/components/portfolio/LearningJourney.tsx`

Update:
- `WHAT I KNOW`
- `CURRENTLY LEARNING`
- `NEXT GOALS`
- Future Vision paragraphs

## Step 4: Blog Integration

Files:

- `.env`
- `src/lib/medium.ts`
- `src/pages/BlogPage.tsx`

Update:
- `VITE_MEDIUM_USERNAME`
- Optional featured post links
- Verify `/blog` behavior

## Step 5: Visual System and Motion

Main file:

- `src/index.css`

Update:
- Color tuning
- Motion intensity
- Hover states
- Section spacing

## Step 6: Pre-Deploy Validation

```bash
npm run typecheck
npm run lint
npm run build
```

Then verify manually:
- Desktop + mobile
- Anchor navigation
- Blog/Devlog page
- External links

## Common Mistakes to Avoid

1. Changing section IDs without updating nav/footer anchors
2. Shipping placeholder social links
3. Forgetting Medium env configuration
4. Editing global CSS without mobile regression check

## Suggested Maintenance Rhythm

- Monthly: refresh About/Projects/Journey content
- Monthly: audit social/external links
- After major edits: run full build before deploy
