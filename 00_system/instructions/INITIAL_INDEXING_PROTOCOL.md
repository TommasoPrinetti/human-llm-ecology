---
type: initial_mapping_protocol
created: 2026-05-26
updated: 2026-05-26
---

# Initial Indexing Protocol

Use when the Realm has not yet indexed the Root Vault.

## Input
- `00_system/instructions/REALM_CONFIGURATION.md`
- `02_user_realm/RESEARCH_BLUEPRINT.md`
- Root Vault source folders or batches

## Steps
1. Survey Root Vault source batches.
2. Mirror meaningful folders under `01_llm_realm/00_root_mirror/[root_rel_path]/INDEX.md`.
3. Put grep-critical retrieval terms in folder-index YAML frontmatter.
4. Create deeper nested folder indexes for batches that need navigation beyond the top-level folder index.
5. Put provenance, source type, dates, and machine-readability in folder-index YAML/body.
6. Extract only reusable evidence fragments.
7. Create concept indexes only where several fragments share a concept.
8. Update `01_llm_realm/00_realm_index.md`.
9. Run Checker verification on any quoted evidence.
10. Write one completion report in `05_agent_reports/`.

## Do Not
- Extract every interesting sentence.
- Create empty concept indexes.
- Modify the Root Vault.
