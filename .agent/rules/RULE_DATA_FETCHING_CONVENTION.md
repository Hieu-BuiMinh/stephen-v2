---
trigger: always_on
description: Mandatory rules for managing the content layer (Velite), collections, and MDX in the stephen-v2 project.
---

# Content Layer & Velite Rule

## 1. Purpose

Standardize how we:

- Define content collections (articles, docs, projects, etc.)
- Use Zod schemas for validation
- Access generated content from the `@repo/stephen-v2-contents` workspace
- Manage MDX processing and rehype/remark plugins

This rule is **mandatory** for all developers working on content-driven features.

---

## 2. Collection Structure (MANDATORY)

### 2.1 Root Structure

All content definitions reside in the `packages/contents/` workspace.

```
packages/contents/
├── collections/          # Individual collection definitions
├── types/                # Shared content types
├── utils/                # Content processing helpers
└── velite.config.ts      # Main Velite configuration
```

### 2.2 Adding a New Collection

1. Create a new file in `packages/contents/collections/` (e.g., `doc.collections.ts`).
2. Define the collection using the `defineCollection` function from Velite.
3. Add the collection to the `collections` object in `velite.config.ts`.

---

## 3. Schema Definition (Zod)

Every collection must have a strictly defined schema using Zod to ensure data integrity.

✅ Example:

```ts
import { defineCollection, s } from 'velite'

export const docPost = defineCollection({
	name: 'DocPost',
	pattern: 'documents/**/*.mdx',
	schema: s
		.object({
			title: s.string(),
			slug: s.slug('documents'),
			description: s.string().optional(),
			content: s.markdown(),
			toc: s.toc(),
		})
		.transform((data) => ({
			...data,
			href: `/document/${data.slug}`,
		})),
})
```

---

## 4. Using Content in the App

### 4.1 Importing Generated Data

Access generated content using the workspace alias `@repo/stephen-v2-contents`.

✅ Example:

```tsx
import { docPosts } from '@repo/stephen-v2-contents'

export function MyView() {
	return (
		<ul>
			{docPosts.map((post) => (
				<li key={post.slug}>{post.title}</li>
			))}
		</ul>
	)
}
```

### 4.2 Handling MDX Content

Use the `MdxContent` component (usually found in `apps/me/components/mdx-content.tsx`) to render markdown content.

---

## 5. Naming Conventions

- **Filenames**: kebab-case (e.g., `dev.collections.ts`).
- **Collection Name**: PascalCase (e.g., `DevPost`).
- **Generated Variable**: camelCase (e.g., `devPosts`).

---

## 6. What is NOT Allowed

❌ Fetching static content via external APIs when it belongs in Velite.
❌ Hardcoding content structure without Zod validation.
❌ Using absolute paths for content files instead of the collection pattern.
❌ Mixing raw processing logic inside UI components.
