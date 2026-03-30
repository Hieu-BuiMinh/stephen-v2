---
trigger: always_on
description: Detailed component architecture and naming rules (kebab-case file naming) for the stephen-v2 project.
---

# Component Architecture & Rules

This document defines mandatory rules for organizing and implementing components in the `stephen-v2` project.

Primary goals:

- Separation of concerns
- Scalable folder structure
- Consistent naming
- Clean UI components
- Easy reuse across features

---

# 1) Component Placement Rules

## 1.1 Shared / Reusable Components (GLOBAL)

Use `apps/me/components/` for components that are:

- Reused across multiple features (e.g., layouts, buttons, cards).
- Generic UI building blocks.

✅ Examples:

- `apps/me/components/layouts/main-layout.tsx`
- `apps/me/components/buttons/primary-button.tsx`
- `apps/me/components/post/post-page-title.tsx`

---

## 1.2 Feature Components (LOCAL to a Feature)

Use `apps/me/view/{feature}/components/` for components that are:

- Used only inside a single feature.
- Tightly coupled to a specific page or workflow.
- Not intended to be reused globally.

✅ Example:

- `apps/me/view/document/components/document-card.tsx`

---

## 1.3 Shared UI Primitives (WORKSPACE)

For extremely generic UI primitives (e.g., Shadcn buttons, dialogs), use the workspace library:

```
packages/ui/src/shadcn/
```

---

# 2) File Naming Convention (MANDATORY)

## 2.1 File names must be kebab-case

✅ Correct:

```
main-layout.tsx
post-page-title.tsx
document-card.tsx
```

❌ Incorrect:

```
MainLayout.tsx
mainLayout.tsx
main_layout.tsx
```

---

## 2.2 Component name inside file must be PascalCase

Even if the file is kebab-case, the component name remains PascalCase:

```tsx
export default function PostPageTitle({ title }: { title: string }) {
	return <h1>{title}</h1>
}
```

File: `post-page-title.tsx`

---

## 2.3 Page Views suffix

All main view components inside `apps/me/view/*/pages/` must use the `.page.tsx` suffix.

✅ Correct: `document.page.tsx`
❌ Incorrect: `document.tsx`

---

# 3) Folder Naming Convention

All folders must be **kebab-case**.

---

# 4) Barrel Exports (index.ts)

To improve import clarity, components **should use a barrel file (`index.ts`)** for folders containing multiple related files.

```
hero-carousel/
  ├── hero-carousel.tsx
  ├── hero-carousel-item.tsx
  └── index.ts
```

---

# 5) Styling with Tailwind & cn

Always use the `cn` utility for class name management.

✅ Correct:

```tsx
import { cn } from '@repo/stephen-v2-utils/cn'

export default function MyComponent({ className }: { className?: string }) {
	return <div className={cn('flex items-center gap-2', className)}>...</div>
}
```

---

# 6) What is NOT Allowed

❌ Hardcoding complex logic inside UI components.
❌ Using absolute paths instead of `@/` or `@repo/...` aliases.
❌ Putting feature-only components inside `apps/me/components/`.
❌ Using relative imports (`../../../`) when aliases are available.
❌ Putting API fetching logic inside components (use Velite or dedicated handlers).
