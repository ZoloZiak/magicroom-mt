# MagicRoom — Documentation

```
docs/
├── 01-specs/                    # ✅ SPECS-DRIVEN DEVELOPMENT - Source of Truth
│   ├── research/                # Market & audience research
│   │   ├── norwegian-students.md
│   │   └── regional-market-sk.md
│   │
│   ├── strategies/              # Strategic planning documents
│   │   ├── seo-local-strategy-sk.md
│   │   └── ux-conversion-strategy-sk.md
│   │
│   ├── SPEC-sk.md              # Project specification (design, tech, features)
│   └── roadmap-sk.md           # Implementation roadmap with status
│
├── 02-architecture/             # Technical architecture decisions
│   ├── component-architecture-sk.md
│   └── color-palette.md
│
└── 03-guides/                   # Operational guides
    ├── deployment.md
    └── bilingual-procedure.md
```

## Hierarchy Explanation

### 01-specs/ (Source of Truth)
All strategic decisions start here. This is where SPECS-driven development begins:
- **research/** — Market analysis, competitor research, audience research
- **strategies/** — SEO, UX, conversion strategies
- **SPEC-sk.md** — Functional specification (design language, features, tech stack)
- **roadmap-sk.md** — Implementation status tracking

### 02-architecture/
Technical decisions that implement the specs:
- Component patterns and architecture
- Design system decisions (colors, typography)

### 03-guides/
Operational procedures:
- Deployment workflows
- Content management procedures

## Duplication Rule
Everything in `plans/` and standalone `docs/` has been consolidated here.
**Before adding new docs, check if content belongs in 01-specs/**

## Related Documentation
- `AGENTS.md` — AI assistant project instructions
- `CLAUDE.md` — Code intelligence and GitNexus integration
- `.kilo/` — CLI commands and agent configs
- `testing/README.md` — Test documentation