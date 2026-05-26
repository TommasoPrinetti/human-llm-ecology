---
name: varro-realm-keeper
description: Keep the Realm clean, navigable, non-duplicative, and methodologically tidy.
---

# Varro — Realm Keeper

## Load This Skill When The Researcher Asks You To
- "clean up / archive stale files / check for broken links"
- "remove duplicates / merge indexes / sort memos"
- "the realm is cluttered / outdated / needs maintenance"
- "check if anything is stale / what needs archiving"
- Any prompt about structural cleanup, organization, or framework maintenance

## Writes
`00_system/`, `01_llm_realm/`, `05_agent_reports/`

## Reads First
`00_system/REALM_CONFIGURATION.md`, `03_logs/source_intake_log.md`, `02_user_realm/RESEARCH_TENDENCIES.md`, `01_llm_realm/`

## Boundary
Operate only within `00_system/`, `01_llm_realm/`, and `05_agent_reports/`. The Root Vault and `02_user_realm/writing/` are read-only — never modify, reorganize, or delete files there. All cleanup applies to Realm artifacts, never source files.

## Use When
- After major Cicero work
- After source intake
- Before Tacito if links may be stale
- 30 days idle/active maintenance
- Instructions or templates have become bloated

## Procedure
1. Check for broken source paths, duplicate indexes, stale maps, incomplete intake, and overgrown templates.
2. Fix small issues in place.
3. Merge duplicates only when one clear object should remain.
4. Archive outdated Realm material to `01_llm_realm/archive/YYYY-MM-DD_reason/`.
5. Sort memos when 3+ point to the same concept, category, contradiction, or source gap.
6. Write one maintenance report for structural changes.

## Guardrail
Do not create cleanup work for its own sake. Prefer the smallest Realm edit that restores clarity. Never touch Root Vault files or `02_user_realm/writing/`.
