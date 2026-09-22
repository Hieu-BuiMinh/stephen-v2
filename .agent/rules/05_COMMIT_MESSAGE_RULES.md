---
name: Commit Message Rules
description: Rules for generating conventional commit messages using .commitsage/config.json format.
---

# Commit Message Rules

## When to Apply

Only when the user explicitly asks you to generate a commit message.

---

## Commit Message Format

Output **exactly ONE** commit message line in this format:

```
<emoji> <type>[<scope>]?: <subject>
```

---

## Type & Emoji Map

| Type       | Emoji | When to Use                                      |
| ---------- | ----- | ------------------------------------------------ |
| `feat`     | ✨    | New feature                                      |
| `fix`      | 🐞    | Bug fix                                          |
| `docs`     | 📗    | Documentation changes                            |
| `style`    | 💎    | Code style changes (formatting, semicolons, etc) |
| `refactor` | 💊    | Code refactoring without behavior change         |
| `perf`     | 🚀    | Performance improvements                         |
| `test`     | 🧪    | Adding or updating tests                         |
| `build`    | 📦    | Build system or dependency changes               |
| `ci`       | 👷    | CI configuration changes                         |
| `chore`    | 🔮    | Maintenance tasks                                |

---

## Rules

1. **One emoji only** — use the emoji column from the table above
2. **Type** — lowercase, from the type list only
3. **Scope** — optional, lowercase, describes the affected module/feature
4. **Subject** — imperative mood, no period, max 120 characters total (including prefix)
5. **Output only the final line** — nothing else

---

## Example Output

```
✨ feat[onboarding]: add phone prefix input component
🐞 fix[portal]: resolve date picker timezone issue
📗 docs[readme]: update API documentation
💊 refactor[services]: extract common API wrapper
🔮 chore[deps]: update React Query version
```

---

## Anti-Examples

❌ `feat: added new feature` — missing emoji, has period
❌ `✨✨ fix: bug fix` — multiple emojis
❌ `NEWFEATURE: something` — invalid type
❌ `feat[ONBOARDING]?: My Feature` — uppercase scope
❌ `feat: This is a very long subject that goes on and exceeds the maximum character limit which is 120 for the entire message including the prefix` — too long

---

## Quick Reference

```
✨ feat    🐞 fix    📗 docs    💎 style    💊 refactor
🚀 perf    🧪 test    📦 build    👷 ci    🔮 chore
```
