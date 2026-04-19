---
name: Service Layer & Query Key Rule
description: Mandatory rules for organizing the service layer, folder structure, DTOs, and React Query keys in the Kayya project.
---

# Service Layer & Query Key Rule

## 1. Purpose

Standardize how we:

- Organize service folders based on API version
- Separate admin and customer services
- Call APIs
- Manage React Query keys
- Organize DTOs
- Avoid duplicate cache keys in a multi-developer project
- Keep components clean (UI only)

This rule is **mandatory** for all developers.

---

# 2. Service Folder Structure (MANDATORY)

## 2.1 Root Structure

```

services/
├── admin/
├── customer/
└── common/

```

---

## 2.2 API Version Mapping Rule

Mapping is determined by API version:

| API Prefix | Service Folder    |
| ---------- | ----------------- |
| /api/v1    | services/admin    |
| /api/v2    | services/customer |

---

## 2.3 Domain Mapping Rule

The service folder is determined by:

- Segment 1 → `api`
- Segment 2 → `v1` or `v2`
- Segment 3 → defines the domain (admin or customer)
- Segment 4+ → defines the service module

Example:

```

/api/v1/application/...

```

Mapping:

```

services/admin/application

```

Explanation:

- `v1` → admin
- `application` → service domain name
- Everything after that belongs inside that service folder

---

# 3. Service Module Structure (MANDATORY)

Each service module must follow this structure:

```

services/admin/application/
├── index.ts
├── application-req.dto.ts
└── application-res.dto.ts

```

---

## 3.1 index.ts (Service Definition)

- Contains all API methods (get, post, put, delete)
- Contains query keys
- Must use Api wrapper
- Must not use fetch or axios directly
- Must not use any

---

## 3.2 request.dto.ts

Contains:

- Interfaces
- Types
- Request body definitions
- Query param types

Example:

```ts
export interface CreateApplicationRequest {
	name: string
	type: string
}
```

---

## 3.3 response.dto.ts

Contains:

- API response types
- Response models
- Strongly typed interfaces

Example:

```ts
export interface ApplicationItem {
	id: string
	name: string
}
```

---

# 4. Service Pattern (MANDATORY)

Every API must be defined using this structure:

```ts
{
  key: (params?) => QueryKey
  get?: async (params?) => Promise<Response>
  post?: async (body) => Promise<Response>
  put?: async (body) => Promise<Response>
  delete?: async (params?) => Promise<Response>
}
```

---

## ❌ Not Allowed

- Writing query keys directly inside components
- Calling APIs directly in the view layer
- Using fetch/axios directly outside Api wrapper
- Using any
- Mixing DTO types inside components

---

# 5. Query Key Convention

## Required Rules

- Query key must be a string array
- Must use snake_case
- Must be defined inside the service
- Must not be hardcoded inside components
- Must be deterministic
- **Hierarchical Matching**: Use spread operators to handle optional parameters. This allows invalidating a "parent" key to automatically refresh all "child" queries.
    - ✅ Correct: `['prefix', ...(id ? [id] : [])]` (becomes `['prefix', '123']` or `['prefix']`)
    - ❌ Incorrect: `['prefix', id]` (becomes `['prefix', undefined]`, which is a different key hierarchy)

---

## ✅ Correct

```ts
applicationService.getApplicationList.key()
```

---

## ❌ Incorrect

```ts
useQuery(['application_list'])
```

---

# 6. API Call Rule

All API calls must:

- Use `Api` from `@/app/actions/Api`
- Use typed DTOs
- Return strongly typed responses
- Not use any
- Not be written inside components

---

# 7. Example Implementation

```ts
export const applicationService = {
	getApplicationList: {
		key: (params?: GetApplicationListRequest) =>
			['get_admin_application_list', ...(params?.search ? [params.search] : [])] as const,
		get: async (params?: GetApplicationListRequest) => {
			return Api.get<IResponse<ApplicationItem[]>>('/api/v1/application/list', { params })
		},
	},

	createApplication: {
		key: () => ['post_admin_create_application'] as const,
		post: async (body: CreateApplicationRequest) => {
			return Api.post<IResponse<ApplicationItem>>('/api/v1/application', body)
		},
	},
}
```

---

# 8. Usage Example (React Query)

```ts
const query = useQuery({
	queryKey: applicationService.getApplicationList.key(),
	queryFn: applicationService.getApplicationList.get,
})
```

With params:

```ts
const id = '123'

const query = useQuery({
	queryKey: applicationService.getApplicationById.key({ id }),
	queryFn: () => applicationService.getApplicationById.get({ id }),
})
```

---

# 9. Strict Code Review Enforcement

The following cases will be rejected:

- Defining query keys directly inside components
- Calling APIs directly in the view layer
- Not using DTO files
- Not using Api wrapper
- Not following folder structure
- Not following snake_case query key rule
- Mixing admin and customer service domains
- Placing DTOs outside service module

---

# 10. Why We Apply This Rule

This pattern ensures:

- Centralized query key management
- No cache conflicts
- **Predictable Hierarchical Invalidation**: Refreshing a base key (e.g., `['list']`) will automatically invalidate all sub-queries (e.g., `['list', 'search_term']`).
- Clear admin/customer separation
- Strong typing across the project
- Easier endpoint refactoring
- Clean UI layer
- Scalable structure for large teams
