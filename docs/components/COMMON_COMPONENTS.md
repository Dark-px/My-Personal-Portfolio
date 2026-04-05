# Common Components Documentation

Persian version: `docs/fa/components/COMMON_COMPONENTS.md`

These components are not tied to a single section and are intended for reuse across pages/features.

## `src/components/common/EmptyState.tsx`

**Purpose**: Displays an empty-state block when no content/data exists.

**Customizable**:
- Icon
- Title and description
- Optional action button

---

## `src/components/common/ErrorBoundary.tsx`

**Purpose**: Prevents full UI crashes by catching runtime errors in a component subtree.

**Customizable**:
- Fallback UI
- Retry UX
- Error copy

**Note**: In development mode, it can show `error.message` for faster debugging.

---

## `src/components/common/Loading.tsx`

Contains lightweight loading helpers:

1. `Spinner`
2. `LoadingSkeleton`
3. `FullPageLoading`

**Purpose**: Standardized loading states for component-level and page-level usage.

---

## `src/components/common/ScrollIndicator.tsx`

**Purpose**: Fixed visual scroll indicator near the bottom center.

**Current status**: Present and reusable, not actively mounted in the main page flow.

---

## `src/components/common/index.ts`

Barrel exports for the `common` group.
