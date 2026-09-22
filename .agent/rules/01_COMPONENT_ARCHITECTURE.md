---
trigger: always_on
description: Detailed component architecture and naming rules (kebab-case file naming) for the Project frontend.
---

# Component Architecture & Rules

This document defines mandatory rules for organizing and implementing components in the Project frontend.

Primary goals:

- Separation of concerns
- Scalable folder structure
- Consistent naming
- Clean UI components (no business/data logic)
- Easy reuse across features

---

# 1) Component Placement Rules

## 1.1 Shared / Reusable Components (GLOBAL)

Use `base-component/components/` for components that are:

- Reused across multiple features (onboarding + portal)
- Generic UI building blocks
- Inputs, buttons, dialogs, table wrappers, layout primitives

**Location**

```

src/base-component/components/

```

✅ Examples:

- `src/base-component/components/nav-bar.tsx`
- `src/base-component/components/side-bar.tsx`

---

## 1.2 Feature Components (LOCAL to a Feature)

Use `views/{feature}/components/` for components that are:

- Used only inside a single feature (onboarding OR portal)
- Tightly coupled to a feature layout/workflow/content
- Not intended to be reused globally

**Location**

```

views/

```

✅ Example (your case):

```

views/onboarding/components/hero-carousel/

```

You can put multiple files inside a feature component folder if it’s a complex component.

---

# 2) File Naming Convention (MANDATORY)

## 2.1 File names must be kebab-case

✅ Correct:

```

hero-carousel.tsx
hero-carousel-item.tsx
app-button.tsx
sfs-text-field.tsx
rhf-sfs-text-field.tsx

```

❌ Incorrect:

```

HeroCarousel.tsx
heroCarousel.tsx
hero_carousel.tsx

```

Rules:

- lowercase only
- words separated by `-`
- no underscores
- no PascalCase

---

## 2.2 Component name inside file must be PascalCase

Even if the file is kebab-case, component name remains PascalCase:

```tsx
export default function HeroCarousel() {
	return <div />
}
```

File:

```
hero-carousel.tsx
```

---

# 3) Folder Naming Convention

All folders must be kebab-case.

✅ Correct:

```
hero-carousel/
account-summary-card/
```

❌ Incorrect:

```
HeroCarousel/
accountSummaryCard/
```

---

# 4) Structure for Feature Component Folders

If a feature component is simple, you may keep a single file:

```
views/onboarding/components/hero-carousel.tsx
```

If it is complex, use a folder:

```
views/onboarding/components/hero-carousel/
  ├── hero-carousel.tsx
  ├── hero-carousel-item.tsx
  ├── hero-carousel.types.ts
  └── index.ts
```

### Rules inside feature folders

- `hero-carousel.tsx` is the main component
- subcomponents must also be kebab-case
- `index.ts` is optional; use only if it improves imports

---

# 5) One Main Component per File

Each `.tsx` file should export **one main component**.

Allowed:

- Small internal helper components (not exported) if they are truly private.

Not allowed:

- Multiple exported components from the same file unless they are tightly coupled and exported intentionally via `index.ts`.

---

# 6) Component Layering

## 6.1 Base UI Components (Shared)

Location:

```
components/refactored/input/sfs/
components/refactored/common/
```

Rules:

- UI-only
- controlled props (value/onChange)
- no React Hook Form
- no React Query
- no API calls
- no business logic

---

## 6.2 RHF Wrappers (Shared)

Location:

```
components/refactored/form-input/sfs/
```

Rules:

- must wrap Base UI component
- must use `Controller`
- no UI duplication
- handle only RHF binding + error mapping

Naming:

```
rhf-sfs-*.tsx
```

---

## 6.3 Feature UI Components (Local)

Location:

```
views/onboarding/components/
views/portal/components/
```

Rules:

- can contain feature-specific layout/content
- may call feature-specific hooks
- must NOT call API directly (API belongs to services + React Query hooks)
- should remain mostly presentational

---

# 7) What is NOT Allowed

❌ Calling API directly inside components
❌ Hardcoding React Query keys in components
❌ Using `fetch/axios` directly in UI
❌ Using `any`
❌ Binding React Hook Form inside Base Inputs
❌ Putting shared components inside `views/`
❌ Putting feature-only components inside `components/refactored/`
❌ Using relative imports when `@/` alias is available

---

# 8) Example Project Structure

```
components/
└── refactored/
    ├── common/
    │   ├── app-button.tsx
    │   └── page-header.tsx
    ├── input/
    │   └── sfs/
    │       ├── sfs-text-field.tsx
    │       ├── sfs-select.tsx
    │       └── portal/
    │           ├── sfs-portal-textfield.tsx
    │           ├── sfs-portal-debounce-textfield.tsx
    │           └── sfs-portal-search-field.tsx
    └── form-input/
        └── sfs/
            ├── rhf-sfs-text-field.tsx
            └── rhf-sfs-select.tsx

views/
└── sfs/
    ├── onboarding/
    │   ├── pages/
    │   └── components/
    │       └── hero-carousel/
    │           ├── hero-carousel.tsx
    │           └── hero-carousel-item.tsx
    └── portal/
        ├── pages/
        └── components/
            └── account-summary-card/
                └── account-summary-card.tsx
```

---

# 9) Rule of Thumb

- If it will be reused across multiple features → `components/refactored/`
- If it is only for onboarding or only for portal → `views/{feature}/components/`

---

# 10) Review Enforcement

PR will be rejected if:

- file/folder naming is not kebab-case
- shared components are placed in `views/`
- feature-only components are placed in `components/refactored/`
- UI components call API directly or hardcode query keys

---

# 11) Component Placement Decision Checklist

Before creating a new component, answer the following questions:

---

## Step 1 — Will this component be reused across multiple features?

- Used in both onboarding and portal?
- Used in more than one page?
- Generic UI pattern (button, card, modal, input, layout block)?

If YES → place in:

```

components/refactored/

```

If NO → continue to Step 2.

---

## Step 2 — Is this component tightly coupled to a specific feature?

- Contains feature-specific layout?
- Contains feature-specific copy/content?
- Only used inside onboarding OR portal?
- Not meaningful outside this feature?

If YES → place in:

```

views/{feature}/components/

```

Example:

```

views/onboarding/components/hero-carousel/

```

If NO → continue to Step 3.

---

## Step 3 — Is it a form input abstraction?

If:

- It is a reusable UI input → `components/refactored/input/`
- It binds React Hook Form → `components/refactored/form-input/`

Never place reusable form inputs inside `views/`.

---

## Step 4 — Does this component call API directly?

If YES → ❌ STOP.

Components must not call API directly.

- API logic belongs in `services/`
- Data fetching belongs in React Query hook usage
- UI components receive data via props

---

# Quick Decision Table

| Question                | Location                            |
| ----------------------- | ----------------------------------- |
| Reusable across system? | `components/refactored/`            |
| Only for onboarding?    | `views/onboarding/components/`      |
| Only for portal?        | `views/portal/components/`          |
| Reusable form input UI? | `components/refactored/input/`      |
| RHF binding wrapper?    | `components/refactored/form-input/` |

---

# Golden Rule

If you are unsure:

Default to feature folder first.

Only move to `components/refactored/` when:

- It is reused at least twice
- It is truly generic
- It has no feature-specific logic

Premature generalization creates messy shared folders.

---

# 12) Tailwind CSS Class Concatenation

To ensure consistent and clean class name management, always use the `cn` utility from `@/utils/cn` when concatenating Tailwind CSS classes or applying conditional styles.

✅ Correct:

```tsx
import { cn } from '@/utils/cn'

export default function MyComponent({ className }: { className?: string }) {
	return <div className={cn('flex items-center gap-2 p-4', className)}>...</div>
}
```

❌ Incorrect:

```tsx
export default function MyComponent({ className }: { className?: string }) {
	return <div className={cn(`flex items-center gap-2 p-4 ${className}`)}>...</div>
}
```

Or even worse:

```tsx
<div className={`flex items-center gap-2 p-4 ${className}`}>
```

---

# 14) Common Search Pattern

For table searching or any debounced search input, always use `SfsPortalSearchField`. It pre-configures a search icon and debounce logic.

✅ Correct:

```tsx
import SfsPortalSearchField from '@/components/refactored/input/sfs/portal/sfs-portal-search-field'

export default function MyPage() {
	const handleSearch = (value: string) => {
		// ...
	}

	return <SfsPortalSearchField onDebounce={handleSearch} />
}
```

❌ Incorrect:

Manually adding `SearchRoundedIcon` and `InputAdornment` to a `SfsPortalDebounceTextField` in the page/view layer.

---

# 15) Table Query Parameters Isolation

Every API-backed DataGrid must use an API-specific query-params hook. A generic shared hook such as `useTableParams` is forbidden.

Mandatory rules:

- Name the hook after the API resource or grid, for example `useAdminApplicationsTableParams`.
- Store the hook in the owning page's `hooks/` directory, alongside that page's `components/` directory. Do not collect feature table hooks in a global directory such as `hooks/table/`.
- Example: a grid owned by `views/portal_sfi/admin/pages/applications.page/components/` must keep its params hook at `views/portal_sfi/admin/pages/applications.page/hooks/use-admin-applications-table-params.ts`.
- Declare only the query states that the API request DTO and that grid actually use.
- Keep parsers, defaults, reset behavior, and URL key mapping inside the API-specific hook.
- Use unique `urlKeys` when multiple grids can exist on the same route. Prefix every key with the grid/resource name so pagination and filters cannot overwrite another grid's state.
- Type filter/table component props from the dedicated hook with `ReturnType<typeof useXxxTableParams>`; do not introduce a shared business params type.
- The shared `SfiTable` component may know only generic DataGrid controls such as `page` and `per_page`. It must not import a feature/API params hook or own business filters.
- When an endpoint has no search, filter, date range, or server-sort request field, do not add that state defensively.
- A reset helper must belong to the same hook file and reset only that hook's states.

Example:

```ts
const parsers = {
	page: parseAsInteger.withDefault(1),
	per_page: parseAsInteger.withDefault(10),
	status: parseAsString,
}

export function useAdminApplicationsTableParams() {
	return useQueryStates(parsers, {
		history: 'replace',
		shallow: true,
		scroll: false,
		urlKeys: {
			page: 'applications_page',
			per_page: 'applications_per_page',
			status: 'applications_status',
		},
	})
}
```

---

# 16) Phone Number Validation Rule for Prefix Inputs

When validating phone numbers that use country prefix inputs (such as `RhfSfsPhonePrefixInput` or similar prefix inputs that pre-populate values like `+84` or `+65` by default), a simple `.min(1)` check is **NOT** sufficient. The default country code prefix value will pass the check even if the user hasn't typed their actual phone number.

Always implement custom validation to clean spaces and check for a valid E.164 digit count (between 7 and 15 digits total including the calling code) using Zod `refine`:

```typescript
phone_number: z.string()
	.min(1, 'Phone number is required')
	.refine(
		(val) => {
			const cleaned = val.replace(/\s+/g, '')
			// E.164 format: must start with '+' and have between 7 and 15 digits total
			return /^\+\d{7,15}$/.test(cleaned)
		},
		{ message: 'Invalid phone number format' }
	)
```

---

# 17) Rules Verified from the Current Repository

The current repository is a pnpm monorepo. There is no root-level `src/` directory.
Apply the component rules below to the actual source roots:

- `apps/me/` — application-specific pages, layouts, providers, and components
- `packages/ui/src/` — reusable UI components shared through `@repo/stephen-v2-ui`

## 17.1 Application Component Placement

- Put application-wide components in `apps/me/components/`.
- Put feature-specific components in `apps/me/view/{feature}/components/`.
- Keep route entrypoints in `apps/me/app/`; route files should compose page/view components instead of becoming the home for reusable UI.
- Keep page-level views in `apps/me/view/{feature}/pages/`.
- Keep feature constants, data, and utilities in their corresponding feature folders rather than embedding large static collections in UI components.
- Use nested folders when a component owns related subcomponents, styles, or data. Existing patterns include `components/cards/{component-name}/` and `view/{feature}/components/{component-name}/`.

## 17.2 Shared UI Package Placement

- Put generic primitives and reusable UI in `packages/ui/src/shadcn/`.
- Put reusable domain/visual components in an appropriate package namespace such as `packages/ui/src/motion/`, `packages/ui/src/i-ching/`, or `packages/ui/src/shadcn/common/`.
- Keep application-specific components out of `packages/ui/src/`.
- Expose package components through the package export surface (`@repo/stephen-v2-ui/shadcn`, `@repo/stephen-v2-ui/motion`, `@repo/stephen-v2-ui/i-ching`, or `@repo/stephen-v2-ui/hooks`) when they are intended for cross-package use.

## 17.3 Naming and Entry File Conventions

- Component files use lowercase kebab-case when they have a descriptive filename, for example `daily-quote-button.tsx`, `topic-book.page.tsx`, and `text-gradient.tsx`.
- Component folders use lowercase kebab-case, for example `daily-quote-card/`, `new-hero-04/`, and `form-input/`.
- A component folder may use `index.tsx` as its public entrypoint. Use `index.ts` for a barrel that re-exports sibling components or non-JSX modules.
- Component identifiers remain PascalCase even when the file or folder is kebab-case.
- Page view filenames use the `{feature}.page.tsx` convention when the file represents a feature page view.
- Preserve established domain names and package-generated names where they already exist; do not rename files only to make an isolated convention more uniform.

## 17.4 Component API Rules

- Type props explicitly. Reuse native element props with `React.ComponentProps<'element'>` or the corresponding `React.*HTMLAttributes` type when the component wraps a native element.
- For variants, use `class-variance-authority` and export the variant function when consumers need to compose the same styles (the `Button`/`buttonVariants` pattern).
- Accept `className` on reusable visual components when callers need layout or style composition, and merge it with the component defaults using `cn`.
- Prefer controlled props and callbacks for reusable UI. Keep feature state and data fetching in the owning app/view layer unless the component is explicitly a stateful reusable primitive.
- Small private subcomponents may stay in the same file when they are tightly coupled to the parent. Export multiple related primitives from one file only when they form a deliberate compound component API, as in the shadcn components.

## 17.5 Client Boundary and Data Rules

- Add `'use client'` only to components that use client-only hooks, browser APIs, event handlers, or client libraries such as Motion and React Hook Form.
- Keep server-compatible components free of unnecessary client state and effects.
- Components must not call API endpoints directly. Keep API access in `apps/me/services/`, query hooks in `apps/me/queries/` or feature hooks, and pass the resulting data into UI components.
- Do not put static content/data modules inside a component file when the data is reused or substantial; use the feature's `data/`, `constants/`, or `types/` directory.
- Do not add `useEffect`, memoization, or defensive fallback state unless the component's actual behavior requires it.

## 17.6 Imports and Styling

- In `apps/me`, use the configured `@/` alias for imports within the app. Use package aliases such as `@repo/stephen-v2-ui` and `@repo/stephen-v2-utils` for workspace packages.
- In `packages/ui`, use the package aliases already configured by that package, including `@ui/shadcn` and `@repo/stephen-v2-utils`.
- Do not assume the old `@/utils/cn` path: the current repository imports `cn` from `@repo/stephen-v2-utils`.
- Use `cn` for conditional or composable Tailwind classes; do not build class strings by manual template interpolation.
- Keep component-specific CSS beside the component when required. Existing examples use `style.css` next to the component folder or page.
- Prefer `next/image` for images in `apps/me` and provide meaningful `alt` text. Use explicit dimensions or a deliberate fill layout.

## 17.7 Form Components

- Keep base form controls in the shared UI layer presentational and based on native/Radix props.
- Keep React Hook Form binding in a separate wrapper under the shared form-input area, using `FormField`/`Controller` and mapping field/error state to the base control.
- Do not make a base input depend on a feature form, API, or query state.
