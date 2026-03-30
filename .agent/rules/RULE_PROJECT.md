---
trigger: always_on
description: Project structure, routing (Next.js 15 App Router), component architecture (Shadcn UI + Tailwind 4), and content layer (Velite) standards for the stephen-v2 project.
---

# Project Rules & Conventions

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **UI Library:** Shadcn UI (Radix UI)
- **Content:** Velite (Content Layer)
- **Language:** TypeScript

---

## Architecture Overview

The project is a monorepo structured by concerns:

- **apps/me**: The main application.
    - **app/**: Thin route definitions (Server Components).
    - **view/**: UI page components (Client Components) with `.page.tsx` suffix.
    - **components/**: App-specific UI components.
    - **hooks/**: App-specific React hooks.
    - **utils/**: App-specific utility functions.
- **packages/ui**: Shared UI components (Shadcn UI).
- **packages/contents**: Content layer, collections, and Velite configuration.
- **packages/utils**: Shared utility functions.

---

# Rules

---

## 1) Routing & Views

### Routing (app/)

- Routes must be defined inside `apps/me/app/`.
- Page files (`page.tsx`) should be **thin**. Their primary responsibility is to import and render a "View" component.

### Views (view/)

- The actual UI implementation of a page belongs in `apps/me/view/`.
- Page views should use the `.page.tsx` suffix (e.g., `document.page.tsx`).
- Views are typically Client Components (`"use client"`).

### Example (`apps/me/app/document/page.tsx`)

```tsx
import DocumentPageView from '@/view/document/pages/document.page'

export default async function DocumentPage() {
	return <DocumentPageView />
}
```

---

## 2) Component Architecture

### Location

- **Global App Components**: `apps/me/components/`.
- **Local Feature Components**: `apps/me/view/{feature}/components/`.
- **Shared UI Primitives**: `packages/ui/src/shadcn/`.

### Naming Convention

- File and folder names must use **kebab-case**.
- Component names must use **PascalCase**.
- Use `.tsx` for components and `.ts` for logic-only files.

---

## 3) Styling Rules

- **Tailwind CSS 4**:
    - Use Tailwind for layout, spacing, and responsive design.
    - Always use the `cn` utility from `@repo/stephen-v2-utils/cn` (or local equivalent) for class concatenation.
- **Shadcn UI**:
    - Use Shadcn components for standard UI elements (Button, Input, Dialog, etc.).
    - Customize using Tailwind classes or Radix primitives.

---

## 4) Content Layer (Velite)

- All static content (articles, documents, projects) is managed via **Velite**.
- Content collections are defined in `packages/contents/collections/`.
- Generated data is accessed via `@repo/stephen-v2-contents`.

---

## 5) General Coding Rules

### Import Aliases

- **Always use import aliases (`@/`)** for internal app files.
- Use workspace aliases (`@repo/...`) for shared packages.
- Avoid deep relative paths (e.g., `../../../`).

### Type Safety

- Every standard API or content type must be fully defined using TypeScript interfaces or Zod schemas (in Velite).
- Avoid using `any`.
