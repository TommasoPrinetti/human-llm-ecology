---
type: agent_report
agent: Varro
created: 2026-05-21
updated: 2026-05-21
---

# Framework Simplification Report

## Action
Reduced the active instruction surface so each file has one job.

## Changes
- `AGENTS.md` is now the single operating entry point.
- `00_system/PROCESS_ROUTER.md` is now a compact router.
- `01_llm_realm/01_metadata/HEADER_TEMPLATE.md` is modular instead of universal.
- Role skills in `00_system/skills/` were shortened to role-specific procedures.
- Onboarding, source intake, initial mapping, back-search, serendipity, source map, concept index, evidence fragment, and memo templates were tightened.
- Redundant active instruction files were archived in `01_llm_realm/archive/2026-05-21_framework_simplification/`.

## Archived
- `CLAUDE.md`
- `00_system/SYSTEM_RULES.md`
- `00_system/agents/`
- refactor todo files

## Current Rule
Do the smallest valid Realm action. Do not create a fragment, memo, mailbox note, report, concept index, or source map unless it has a distinct purpose.

## Follow-up Fixes
- Added onboarding gate before mapping, indexing, answering, or intake.
- Marked archived files as historical, not active instructions.
- Added Research Need Aggregator initialization rule.
- Generalized Tacito's silent-material check.
- Added onboarding smoke test.

## Status
Complete.
