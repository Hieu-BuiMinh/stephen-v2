---
trigger: always_on
description: Folder structure, routing (Next.js App Router), component architecture (MUI + Tailwind), service layer (Api wrapper + DTO), and data fetching (React Query) standards for the project.
---

# Project Rules & Conventions

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3
- **UI Library:** MUI Components (Material UI)
- **Language:** TypeScript

---

## Architecture Overview

The project is clearly separated by concerns:

- **app/**: Defines routes (server routing) using Next.js App Router
- **views/**: UI page components (Client Components)
- **services/**: API layer + DTO definitions (data services)
- **lib/**: Library setups (e.g., auth0 client)

---

# Rules

---

## 1) Service Layer

### Location

- `services/admin` or `services/user`

### Naming Convention

- The folder structure must mirror the API path starting from the second `/`.
- Example: API `api/v1/accounts` → `services/admin/accounts`

### File Structure

- `index.ts`: defines and exports the service object with methods
- `*.dto.ts` (or `dto.ts`): defines TypeScript interfaces/types for request/response

### Implementation Rules

- Must use `Api` from `@/app/actions/Api`
- Export a service object containing methods
- For GET requests using React Query:
    - Must define `key()` returning a **string array** in **snake_case**
    - Must define `get()` for the async API call

### Example (`services/admin/account/index.ts`)

```ts
import Api from '@/app/actions/Api'
import { CustomerAccount } from './account.dto'
import { IResponse } from '@/types/api.dto'

const api = new Api()

export const customerAccountService = {
	getAccountList: {
		key: () => ['get_customer_account_list'],
		get: async () => {
			return await api.get<IResponse<CustomerAccount[]>>(`/api/v2/trading-accounts/list`)
		},
	},

	getAccountById: {
		key: ({ id }: { id: string }) => ['get_account_by_id', id],
		get: async ({ id }: { id: string }) => {
			return await api.get<IResponse<CustomerAccount>>(`/api/v2/accounts/${id}`)
		},
	},
}
```

---

## 2) Components

### Location

All shared components must be placed in:

```
src/base-component/components
```

---

## Styling Rules

- Use **Tailwind CSS** for layout and spacing:
    - flex, grid
    - gap
    - padding / margin
    - width / height
    - responsive (sm, md, lg...)

- Use **MUI components** for complex UI:
    - TextField, Select, Checkbox, Radio
    - Dialog, Drawer
    - Table, Pagination
    - DatePicker, Autocomplete

- When customizing MUI:
    - Prefer using `sx`
    - Or use the `styled` API
    - Do not override styles in scattered and uncontrolled ways

- Prefer using `className` with Tailwind for general styling.

- If Tailwind classes become too long or repetitive:
    - Extract into a CSS file
    - Use Tailwind `@apply` to group classes

Example:

```css
/* button.css */
.primary-button {
	@apply bg-primary hover:bg-primary-dark rounded-lg px-4 py-2 font-semibold text-white;
}
```

---

## Naming Convention

- Component file names must use **kebab-case**.
- Each file should contain only one main component.

Example:

```
ap-button.tsx
sfs-text-field.tsx
```

---

# Input Components Architecture

To ensure reusability and a clear separation between UI and form logic, input components are divided into two layers:

---

## 1️⃣ Base Input Components

### Location

```
components/refactored/input/sfs
```

### Rules

- Pure UI (presentational) or controlled component.
- Must not depend on React Hook Form.
- Accept props such as:
    - `value`
    - `onChange`
    - `error`
    - `helperText`

- Must not contain business logic.
- Can be used outside forms.

### Examples

```
SfsTextField.tsx
SfsSelect.tsx
SfsDatePicker.tsx
SfsPortalSearchField.tsx
```

---

## 2️⃣ RHF Input Components (React Hook Form)

### Location

```
components/refactored/form-input/sfs
```

### Rules

- Must wrap the corresponding Base Input.
- Must use `Controller` from `react-hook-form`.
- Must not duplicate UI logic.
- Only handle form binding (name, control, validation state).

### Naming Convention

```
rhf-sfs-{component-name}.tsx
```

### Examples

```
rhf-sfs-text-field.tsx
rhf-sfs-select.tsx
```

---

# Why This Architecture

Separating Base Input and RHF Input helps:

- Reuse UI components outside forms
- Separate form logic from UI
- Improve testability
- Improve maintainability in a multi-developer project
- Reduce coupling between components and the form library
- Make it easier to switch form libraries in the future

---

# Mandatory Rules

- Do not use MUI Input directly inside forms.
- Do not attach React Hook Form directly to Base Input.
- Do not write form logic inside UI components.
- **Never open localhost on the browser.**

---

## 3) Pages & Routing

### Folder Mapping Principle

The project follows a strict separation between **Routing (App)** and **UI Presentation (Views)**.

- **App Path**: `app/{portal}/{group}/{target}/page.tsx`
- **View Path**: `views/{entity}/portal/{target_group}/pages/{target}/{target}.page.tsx`

### Implementation Rules

- `app/{route}/page.tsx` should only **import and render** the view component (keep the page file thin).
- **App** is for server routing, nested layouts, and metadata.
- **Views** are for client-side UI logic and presentation.

### Mapping Example

| Route (URL)                      | App File Location                         | View File Location                                     |
| :------------------------------- | :---------------------------------------- | :----------------------------------------------------- |
| `/portal_sfs/my-dashboard`       | `(customers)/my-dashboard/page.tsx`       | `customer/pages/my-dashboard/my-dashboard.page.tsx`    |
| `/portal_sfs/setting/my-profile` | `(customers)/setting/my-profile/page.tsx` | `customer/pages/setting/profile-page/profile.page.tsx` |

### Layout Hierarchy

Layouts are used to inject shared UI elements (Sidebar, Navbar, Settings Menu).

- **Global Portal Layout**: `app/{portal}/layout.tsx` (Fonts, Global Styles, Base Providers).
- **Section Layout**: `app/{portal}/{group}/layout.tsx` (Main Sidebar & Navbar).
- **Feature Sub-Layout**: `app/{portal}/{group}/{feature}/layout.tsx` (Feature-specific menus/tabs).

### Code Example (`app/portal_sfs/(customers)/my-dashboard/page.tsx`)

```tsx
import MyDashboardPageView from '@/views/portal/customer/pages/my-dashboard/my-dashboard.page'

export default async function Page() {
	return <MyDashboardPageView />
}
```

---

## 4) API & Data Fetching

- Must use `Api` wrapper: `@/app/actions/Api`
- DTO must be fully defined for every API response inside the service folder
- React Query `useQuery` must use the **key** defined in the service

---

## 5) General Coding Rules

### Import Aliases

- **Always prioritize using import aliases (`@/`)** for all internal project files.
- Avoid using relative paths (e.g., `../../components/...`) when an alias is available.
- Default alias: `@/` refers to the root directory (often `src/` or the project root).

---

## 6) Table Params Isolation Rule

Due to increasing divergence in Backend API parameters across different entities, we enforce **strict isolation of table query parameters**:

- **No Shared Global Query Hooks:** Never use a single shared table parameters hook (like a generic `useTableParams`) for different business entities.
- **Entity-Specific Hooks:** Every entity table must implement and consume its own custom parameters hook (e.g., `useSfsTableParams` or `useSfsApplicationTableParams`) containing only the specific query states, parsers, and defaults matching that entity's backend API request DTO.

---

## 7) Route Configuration Update Rule

When adding or modifying a route in the application (under `app/` folder):

- **Update Variable Configurations:** You MUST immediately add the new route pattern to the appropriate URL array (`customerUrls` for customer-facing routes, or `adminUrls` for staff/admin-facing routes) in:
    1. `config/variables/localhost.ts`
    2. The specific project config files in `config/variables/{entity}/` (e.g., `onboardingSFS.ts`, `onboardingUatSFS.ts`, etc.)
- **Prevent Redirect Loop:** Failure to add routes to these configuration arrays will trigger redirect loops via `ProtectedRoutes` middleware because it will evaluate the new route as unauthorized.

---

## 8) User Authorization & Role Checking Rule

For any frontend/client-side user authorization checks, role verification, or permission-based element rendering:

- **Mandatory Hook Usage:** You MUST use the `useRole` hook from `@/hooks/useRole` to check user roles in React components.
- **Direct Role Object Access Forbidden:** Do not manually check user roles by accessing `user.roles` directly from `useProfile` or other profile states.
- **Integrating with String Enums:** Always combine `useRole` or the utility with the descriptive string enum `RoleProcessStepper` from `@/dto/enums/sfs/role-process-stepper` for type-safety and to avoid hardcoded role strings in components.
- **Utility usage for non-React/list contexts:** For checking roles outside React components, inside loops, or map functions, use the `checkUserRole` utility from `@/utils/checkRole`. Do NOT use hooks in these contexts.

#### Example checkUserRole Utility Usage:

```ts
import { checkUserRole } from '@/utils/checkRole'
import { RoleProcessStepper } from '@/dto/enums/sfs/role-process-stepper'

// Checking single user object
const isManager = checkUserRole.hasRole(user, RoleProcessStepper.ManagerSales)

// Checking in array lists
const filteredUsers = users.filter((u) =>
	checkUserRole.hasAnyRole(u, [RoleProcessStepper.Admin, RoleProcessStepper.SuperAdmin])
)
```

---

## 9) React Utility Hooks Rule (`usehooks` by `@uidotdev/usehooks`)

To keep client components and custom hooks clean, maintainable, and free of manual boilerplate (such as manual `setInterval` timers, DOM event listeners, debouncing logic, etc.):

- **Standard Library:** Always prefer using utility hooks from `@uidotdev/usehooks` rather than writing custom `useEffect` timers or manual DOM listeners from scratch.
- **Common Usage Examples:**
    - **Countdown / Cooldown Timers:** Use `useCounter` / timer loops or utility hooks from `@uidotdev/usehooks` for cooldowns, OTP resend limits, or verification timers.
    - **Debounce Logic:** Use `useDebounce` from `@uidotdev/usehooks` for search inputs and API query throttling.
    - **DOM & Browser Utilities:** Use `useCopyToClipboard`, `useClickAway`, `useLocalStorage`, `useMediaQuery`, or `useDocumentTitle` for handling browser APIs cleanly.

#### Example Usage of `@uidotdev/usehooks`:

```ts
import { useDebounce, useCounter, useCopyToClipboard } from '@uidotdev/usehooks'

// 1. Debounce Search Input
const debouncedSearchTerm = useDebounce(searchTerm, 300)

// 2. Cooldown Timer for OTP / Resend Email
const [cooldown, { set: setCooldown, decrement }] = useCounter(0, { min: 0, max: 60 })

// 3. Copy to Clipboard
const [copiedText, copyToClipboard] = useCopyToClipboard()
```
