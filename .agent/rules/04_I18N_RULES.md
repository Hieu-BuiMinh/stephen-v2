---
trigger: always_on
description: Enforce strict rules for creating, updating, and maintaining next-intl translation JSON files with stable structure, correct key scope, camelCase naming, and backward compatibility.
---

# I18N Translation Rules for Agent

# Project library: next-intl ^3.23.2

## Purpose

This document defines the mandatory rules for creating, updating, reviewing, and refactoring multilingual JSON message files in this project.

These translation files are critical shared assets that affect the entire application.  
The agent must follow these rules strictly and avoid any unsafe structural changes.

---

## 1. General Principles

1. Translation files are global shared resources.
2. Every change must be conservative, predictable, and backward-safe.
3. Do not rename, move, or delete existing keys unless explicitly requested.
4. Do not duplicate messages if an existing shared key already fits.
5. Always place a key in the narrowest correct scope:
    - globally reusable -> `common`
    - reusable component-level -> `components`
    - admin-only page/feature -> `admin`
    - customer-only page/feature -> `customer`
6. Prefer the smallest safe change over large structural refactors.
7. Message structure must remain stable and easy to understand for future contributors.
8. **Page-level isolation**: Each page should use its own translation namespace. Do not reuse keys from other pages. Only reuse keys from `common` or `components` when appropriate.

---

## 2. Root-Level Structure

All translation files must follow this root structure:

```json
{
	"common": {},
	"components": {},
	"admin": {},
	"customer": {}
}
```

### Root key meanings

- `common`: globally reusable messages that are not tied to a specific page or component
- `components`: messages for reusable UI components
- `admin`: messages for admin pages and admin-only features
- `customer`: messages for customer pages and customer-only features

### Rules

- Do not create new root sections unless explicitly requested.
- Do not replace `customer` with `customers` for new structure.
- Do not mix root domain naming styles.

---

## 3. Naming Convention

### Required convention

Use **snake_case** for all newly created keys.

### Good examples

- `button_text`
- `go_to_dashboard`
- `customers_list`
- `admin_nav_bar`
- `empty_state`
- `invalid_email`

### Forbidden styles for new keys

- `camelCase`
- `kebab-case`
- `PascalCase`
- visual or positional names like `left_box`, `row_1`, `blue_title`

### Naming rules

- Keys must be semantic and stable.
- Use business meaning, not UI appearance.
- Use singular/plural consistently based on meaning.
- Use descriptive names that match the purpose of the text.

---

## 4. Scope Rules

## 4.1 `common`

Use `common` for messages reused across multiple pages, domains, or the whole application.

Typical examples:

- button labels
- generic alerts
- generic validation messages
- common status labels
- generic empty states
- common confirmation dialogs

Example:

```json
{
	"common": {
		"buttonText": {
			"submit": "Submit",
			"cancel": "Cancel",
			"save": "Save",
			"delete": "Delete",
			"back": "Back",
			"continue": "Continue"
		},
		"alert": {
			"success": "Success",
			"error": "Error",
			"warning": "Warning",
			"info": "Info"
		}
	}
}
```

---

## 4.2 `components`

Use `components` for reusable UI blocks that are not generic enough for `common`.

Typical examples:

- navigation
- sidebar
- navbar
- pagination
- table wrapper
- modal shell
- filter bar
- upload component
- JSON viewer
- shared search section

Example:

```json
{
	"components": {
		"navigation": {
			"adminNavBar": {},
			"customerNavBar": {},
			"adminSideBar": {},
			"customerSideBar": {}
		}
	}
}
```

---

## 4.3 `admin`

Use `admin` for messages that belong only to admin pages or admin-only features.

Typical examples:

- `admin.dashboard`
- `admin.applications`
- `admin.customersList`
- `admin.payments`
- `admin.transactions`
- `admin.rates`
- `admin.settings.authority`

---

## 4.4 `customer`

Use `customer` for messages that belong only to customer pages or customer-only features.

Typical examples:

- `customer.dashboard`
- `customer.profile`
- `customer.applications`
- `customer.paymentHistory`

---

## 5. Decision Order Before Adding a New Key

Before creating a new translation key, the agent must check in this order:

1. Does the key already exist?
2. Is the message generic enough for `common`?
3. Does it belong to a reusable component in `components`?
4. Is it specific to an admin page/feature?
5. Is it specific to a customer page/feature?

### Examples

- `"Submit"` -> `common.buttonText.submit`
- `"Dashboard"` in admin sidebar -> `components.navigation.adminSideBar.dashboard`
- `"Applications"` page title -> `admin.applications.title`
- `"Welcome back, {name}"` on customer dashboard -> `customer.dashboard.welcome`

---

## 6. Page Structure Rules

Page namespaces should follow a predictable internal structure.
Only include sections that are actually needed.

Recommended page structure:

```json
{
	"title": "",
	"description": "",
	"summary": {},
	"stats": {},
	"filter": {},
	"table": {},
	"form": {},
	"detail": {},
	"actions": {},
	"dialog": {},
	"messages": {},
	"empty": {}
}
```

### Meaning of page sections

- `title`: main page title
- `description`: subtitle or helper intro text
- `summary`: summary blocks/cards
- `stats`: dashboard/statistics labels
- `filter`: filter labels, placeholders, reset/apply actions
- `table`: table columns, actions, empty text
- `form`: form labels, placeholders, helper text, validation text
- `detail`: read-only detail labels
- `actions`: page-specific actions
- `dialog`: modal and confirmation dialog content
- `messages`: page-specific success/error/info messages
- `empty`: page-specific empty state text

### Rule

Do not invent arbitrary nested structures if one of the standard sections already fits.

---

## 7. Standard Sub-Structures

## 7.1 Buttons

Global button labels must go under:

```json
common.buttonText
```

Example:

```json
"buttonText": {
  "submit": "Submit",
  "cancel": "Cancel",
  "save": "Save",
  "edit": "Edit",
  "delete": "Delete",
  "back": "Back"
}
```

---

## 7.2 Alerts

Generic alert labels must go under:

```json
common.alert
```

---

## 7.3 Validation

Generic validation messages must go under:

```json
common.validation
```

Example:

```json
"validation": {
  "required": "This field is required",
  "invalidEmail": "Invalid email address",
  "minLength": "Must be at least {min} characters",
  "maxLength": "Must be at most {max} characters"
}
```

Use page-level validation only when the text is truly contextual:

- `admin.somePage.form.validation`
- `customer.somePage.form.validation`

---

## 7.4 Tables

For tables, prefer this structure:

```json
"table": {
  "columns": {
    "name": "Name",
    "email": "Email",
    "status": "Status"
  },
  "actions": {
    "view": "View",
    "edit": "Edit",
    "delete": "Delete"
  },
  "empty": "No data available"
}
```

### Rules

- Column labels go under `table.columns`
- Row actions go under `table.actions`
- No-data text goes under `table.empty`

---

## 7.5 Forms

For forms, prefer this structure:

```json
"form": {
  "title": "",
  "fields": {
    "firstName": {
      "label": "First name",
      "placeholder": "Enter first name",
      "helperText": ""
    }
  },
  "validation": {
    "required": "This field is required"
  }
}
```

### Rules

- Labels go under `form.fields.{fieldName}.label`
- Placeholders go under `form.fields.{fieldName}.placeholder`
- Helper text goes under `form.fields.{fieldName}.helperText`
- Form-specific validation goes under `form.validation`

---

## 7.6 Dialogs

Use this structure for confirmation and modal content:

```json
"dialog": {
  "deleteConfirm": {
    "title": "Delete item",
    "description": "Are you sure you want to delete this item?",
    "confirmText": "Delete",
    "cancelText": "Cancel"
  }
}
```

---

## 7.7 Messages

Use this structure for page-level system messages:

```json
"messages": {
  "fetchSuccess": "Data loaded successfully",
  "createSuccess": "Created successfully",
  "updateSuccess": "Updated successfully",
  "deleteSuccess": "Deleted successfully",
  "fetchError": "Failed to load data"
}
```

---

## 8. Duplication Rules

The agent must avoid duplicate meanings across the translation file.

### Allowed

Reuse a shared key when the same meaning is intended.

### Not allowed

Creating page-local copies of generic messages that already belong in shared scope.

Bad example:

```json
{
	"common": {
		"buttonText": {
			"submit": "Submit"
		}
	},
	"admin": {
		"applications": {
			"form": {
				"submit": "Submit"
			}
		}
	}
}
```

### Correct approach

Use the shared key:

- `common.buttonText.submit`

### Exception

Duplicate text is acceptable only if:

1. the context is intentionally different, or
2. the wording may reasonably diverge later

---

## 9. Backward Compatibility Rules

This translation file affects the whole project.

The agent must never:

- rename existing keys without explicit instruction
- move existing keys to a different namespace without explicit instruction
- delete existing keys because they appear unused
- flatten or deeply restructure existing namespaces without explicit approval

### Safe migration approach

If a better structure is needed:

1. preserve existing keys
2. add new keys carefully
3. propose cleanup separately
4. do not mix migration with unrelated changes

---

## 10. Legacy Key Rules

If legacy keys already exist in older styles such as `snake_case`:

- do not silently rename them
- do not auto-migrate them
- do not partially rename related keys unless explicitly requested

### Rule for new additions near legacy structure

- preserve existing legacy keys for backward compatibility
- use the approved naming convention only when explicitly creating new structured areas
- keep migrations isolated and deliberate

---

## 11. Empty Object Rules

Empty objects are allowed only when they represent valid planned namespaces.

Example:

```json
"admin": {
  "dashboard": {},
  "applications": {}
}
```

### Rules

- Do not create excessive placeholder objects without a clear reason.
- Only add empty namespaces when:
    - the page/feature already exists, or
    - the user explicitly requests reserving the structure

---

## 12. Dynamic Values and Interpolation

For dynamic messages, use `next-intl` placeholders.

Example:

```json
{
	"customer": {
		"dashboard": {
			"welcome": "Welcome back, {name}"
		}
	}
}
```

Usage:

```ts
t('welcome', { name: user.name })
```

### Rules

- Use meaningful placeholder names
- Prefer full translated sentences over fragmented concatenation
- Do not hardcode translatable dynamic text in code when it belongs in the JSON file

### Good

```ts
t('itemCount', { count })
```

### Avoid when possible

```ts
;`${t('item')} ${count}`
```

because grammar may break in other locales.

---

## 13. next-intl Namespace Rules

The namespace used in `getTranslations()` or `useTranslations()` must map directly to the JSON path.

### Server usage

```ts
import { getTranslations } from 'next-intl/server'

const t = await getTranslations('admin.dashboard')
t('title')
```

### Client usage

```ts
import { useTranslations } from 'next-intl'

const t = useTranslations('admin.dashboard')
t('title')
```

### Valid examples

- `useTranslations('common.buttonText')`
- `useTranslations('components.navigation.adminSideBar')`
- `useTranslations('admin.applications')`
- `useTranslations('admin.settings.authority')`
- `useTranslations('customer.dashboard')`

### Rules

- Namespace strings must match the JSON object path exactly.
- Do not invent namespace names that do not exist in the file.
- Keep namespace design stable and predictable.

---

## 14. Recommended Base Structure

Recommended baseline shape:

```json
{
	"common": {
		"buttonText": {},
		"alert": {},
		"validation": {},
		"status": {},
		"empty": {},
		"dialog": {}
	},
	"components": {
		"navigation": {},
		"table": {},
		"pagination": {},
		"modal": {},
		"jsonViewer": {},
		"filterBar": {}
	},
	"admin": {
		"dashboard": {},
		"applications": {},
		"customersList": {},
		"payments": {},
		"transactions": {},
		"rates": {},
		"settings": {
			"authority": {}
		}
	},
	"customer": {
		"dashboard": {}
	}
}
```

This is the preferred structure for future expansion.

---

## 15. Review Checklist for Agent

Before finalizing any i18n change, verify all of the following:

1. Is the key in the correct root scope?
2. Is the naming in camelCase for new keys?
3. Does the message already exist elsewhere?
4. Can this reuse an existing `common` key?
5. Does it belong in `components` instead of a page namespace?
6. Does the namespace match actual `next-intl` usage?
7. Will this change preserve backward compatibility?
8. Is the structure predictable for future contributors?
9. Is the JSON valid?
10. Is this the smallest safe change?

If any answer is uncertain, preserve the current structure and make the smallest safe addition only.

---

## 16. Strict Forbidden Actions

The agent must not:

- rename existing keys without explicit instruction
- move existing keys across namespaces without explicit instruction
- delete keys because they seem unused
- create duplicated generic messages inside page scopes
- mix naming conventions randomly
- introduce visual/positional key names
- create unstable or unclear nesting
- perform large translation-file refactors as part of unrelated work

---

## 17. Final Operating Rule

This translation file is a critical project-wide contract.

When editing it, the agent must prioritize:

1. correctness
2. consistency
3. backward compatibility
4. minimal safe change
5. long-term maintainability

If a structural improvement is desirable but risky, the agent should preserve the current contract and propose the improvement separately.

```

```
