---
trigger: always_on
description: Required skills to work effectively in the stephen-v2 project (Next.js 15, Tailwind 4, Shadcn, Velite).
---

# Developer Skills (stephen-v2)

This document describes the **required skills** to work effectively in the `stephen-v2` codebase.

---

## 1) Core Framework Skills

### Next.js 15 (App Router)

- Understand **Server Components** vs **Client Components** (`"use client"`).
- Master routing inside `app/`: route groups `(...)`, layouts, and pages.
- Master the **"Thin Page"** pattern: `app/` defines the route, `view/` implements the UI.
- Handle data fetching via the Content Layer (Velite).

### TypeScript & Zod

- Proficient in **Zod schemas** for content validation and form handling.
- Use strong typing for all props and data structures; avoid `any`.
- Understand workspace link aliases (`@repo/stephen-v2-contents`, etc.).

---

## 2) UI & Styling Skills

### Tailwind CSS 4

- Proficient in Tailwind 4's layout, spacing, and responsive utilities.
- Master the `cn` utility for clean class concatenation.
- Familiarity with CSS variables and modern CSS features used in Tailwind 4.

### Shadcn UI (Radix UI)

- Master using and customizing Shadcn components from `packages/ui`.
- Understand how to compose complex UI using Radix primitives.
- Proficiency in **Framer Motion** for animations and transitions.

---

## 3) Content Layer (Velite)

- Understand how to define collections in `packages/contents/collections/`.
- Knowledge of MDX structure and processing.
- Familiarity with Rehype/Remark plugins for content transformation (slugs, shiki, etc.).

---

## 4) Project Specific Organization

### Folder Structure

- `apps/me/app/`: Routing and layouts.
- `apps/me/view/`: Feature-specific page views.
- `apps/me/components/`: Shared app components.
- `packages/ui/`: Shared design system.
- `packages/contents/`: Static content management.

### Coding Standards

- Master **kebab-case** for file/folder naming.
- Master **PascalCase** for component names.
- Always use **import aliases (`@/`)** instead of relative paths.

---

## 5) Quality & Verification

- Verify UI responsiveness across different screen sizes.
- Ensure hydration errors are avoided by correctly separating client and server components.
- Perform accessibility checks on interactive elements.

---

## Quick Checklist (Before Starting a Task)

- [ ] Route is defined in `apps/me/app/`
- [ ] UI implementation is in `apps/me/view/` with `.page.tsx` suffix
- [ ] Shared components are in `apps/me/components/`
- [ ] Data is sourced from Velite (`@repo/stephen-v2-contents`)
- [ ] Import aliases are used throughout
- [ ] Styling uses Tailwind 4 and the `cn` utility
