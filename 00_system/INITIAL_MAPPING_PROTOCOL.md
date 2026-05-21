---
type: initial_mapping_protocol
agent: Cicero
created: 2026-05-21
updated: 2026-05-21
---

# Initial Mapping Protocol

Use when the Realm has not yet mapped the Root Vault.

## Input
- `00_system/REALM_CONFIGURATION.md`
- `02_user_realm/RESEARCH_BLUEPRINT.md`
- Root Vault source folders or batches

## Steps
1. Survey Root Vault source batches.
2. Create source maps only for batches that need navigation.
3. Create metadata where provenance, source type, dates, or machine-readability matter.
4. Extract only reusable evidence fragments.
5. Create concept indexes only where several fragments share a concept.
6. Update `01_llm_realm/00_realm_index.md`.
7. Write one completion report in `05_agent_reports/`.

## Do Not
- Extract every interesting sentence.
- Create empty concept indexes.
- Create memos unless a distinct comparison, contradiction, or category relation appears.
- Modify the Root Vault.
