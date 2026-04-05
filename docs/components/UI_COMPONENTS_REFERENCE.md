# UI Components Reference

Persian version: `docs/fa/components/UI_COMPONENTS_REFERENCE.md`

This project keeps a full UI primitive layer in `src/components/ui`.

Goals:
- Faster feature development
- Consistent interaction patterns
- Fewer one-off component implementations

## Components used directly in current pages

- `button.tsx`
- `tooltip.tsx`
- `toaster.tsx`
- `sonner.tsx`
- `card.tsx`
- `skeleton.tsx`
- `toast.tsx` (via `hooks/use-toast.ts`)

The rest are ready for future features.

---

## 1) Actions and Inputs

- `button.tsx`
- `input.tsx`
- `textarea.tsx`
- `label.tsx`
- `checkbox.tsx`
- `radio-group.tsx`
- `select.tsx`
- `switch.tsx`
- `slider.tsx`
- `input-otp.tsx`
- `toggle.tsx`
- `toggle-group.tsx`

## 2) Overlays and Menus

- `dialog.tsx`
- `alert-dialog.tsx`
- `sheet.tsx`
- `drawer.tsx`
- `popover.tsx`
- `hover-card.tsx`
- `tooltip.tsx`
- `dropdown-menu.tsx`
- `context-menu.tsx`
- `menubar.tsx`
- `navigation-menu.tsx`
- `command.tsx`

## 3) Layout and Structure

- `accordion.tsx`
- `collapsible.tsx`
- `separator.tsx`
- `resizable.tsx`
- `scroll-area.tsx`
- `aspect-ratio.tsx`
- `sidebar.tsx`

## 4) Data Display

- `card.tsx`
- `badge.tsx`
- `avatar.tsx`
- `table.tsx`
- `chart.tsx`
- `carousel.tsx`
- `calendar.tsx`
- `pagination.tsx`
- `breadcrumb.tsx`
- `progress.tsx`
- `tabs.tsx`

## 5) Feedback and Notifications

- `alert.tsx`
- `toast.tsx`
- `toaster.tsx`
- `sonner.tsx`
- `skeleton.tsx`

## 6) Form Abstractions

- `form.tsx`

## 7) UI Hook

- `use-toast.ts`

---

## Practical Customization Advice

1. For consistent visual polish, start with primitives like `button`, `card`, and `badge`
2. Prefer existing primitives before introducing new custom base components
3. Keep global behavior (motion/theme) in `src/index.css`
