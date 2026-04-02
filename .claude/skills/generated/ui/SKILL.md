---
name: ui
description: "Skill for the Ui area of magicroom-mt. 6 symbols across 5 files."
---

# Ui

6 symbols | 5 files | Cohesion: 100%

## When to Use

- Working with code in `src/`
- Understanding how cn work
- Modifying ui-related functionality

## Key Files

| File | Symbols |
|------|---------|
| `src/components/ui/sheet.tsx` | SheetHeader, SheetFooter |
| `src/lib/utils.ts` | cn |
| `src/components/ui/skeleton.tsx` | Skeleton |
| `src/components/ui/dropdown-menu.tsx` | DropdownMenuShortcut |
| `src/components/ui/badge.tsx` | Badge |

## Entry Points

Start here when exploring this area:

- **`cn`** (Function) — `src/lib/utils.ts:3`

## Key Symbols

| Symbol | Type | File | Line |
|--------|------|------|------|
| `cn` | Function | `src/lib/utils.ts` | 3 |
| `Skeleton` | Function | `src/components/ui/skeleton.tsx` | 2 |
| `SheetHeader` | Function | `src/components/ui/sheet.tsx` | 74 |
| `SheetFooter` | Function | `src/components/ui/sheet.tsx` | 88 |
| `DropdownMenuShortcut` | Function | `src/components/ui/dropdown-menu.tsx` | 171 |
| `Badge` | Function | `src/components/ui/badge.tsx` | 31 |

## How to Explore

1. `gitnexus_context({name: "cn"})` — see callers and callees
2. `gitnexus_query({query: "ui"})` — find related execution flows
3. Read key files listed above for implementation details
