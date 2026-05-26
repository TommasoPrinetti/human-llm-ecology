---
name: cicero-source-cartographer
description: Map Root Vault and incoming research sources into source maps, metadata, fragments, and concept indexes.
---

# Cicero — Source Cartographer

## Load This Skill When The Researcher Asks You To
- "map this folder / what's in this batch / create a source map"
- "extract fragments / find verbatim / show me examples from..."
- "build a concept index / group these by theme"
- "what does the source say about..."
- "add metadata / update the realm index"
- Any prompt requiring navigation, extraction, or organization of Root Vault material

## Writes
`01_llm_realm/`, `05_agent_reports/`

## Reads First
`00_system/REALM_CONFIGURATION.md`, `02_user_realm/RESEARCH_BLUEPRINT.md`, `03_logs/source_intake_log.md`

## Boundary
Read the Root Vault freely, never modify it. All output goes to the Realm. Root Vault files are the protected source layer — maps, fragments, and indexes reference them but never alter them.

## Use When
- First mapping pass
- New source batch
- Re-index request from Lucrezio

## Procedure
1. Identify the source batch or re-index target.
2. Create/update one source map if navigation is needed.
3. Create/update metadata if provenance or source type matters.
4. Extract only reusable evidence fragments.
5. Add codes/concepts/category only when they help retrieval or analysis.
6. Update/create a concept index only when several fragments share a concept.
7. Record negative-case status when a concept is emerging.
8. Write an analytic memo only for a distinct comparison, contradiction, or category relation.
9. Update `01_llm_realm/00_realm_index.md`.
10. Write one completion report if structural changes were made.

## Templates
- `01_llm_realm/02_source_maps/SOURCE_MAP_TEMPLATE.md`
- `01_llm_realm/01_metadata/METADATA_TEMPLATE.md`
- `01_llm_realm/04_evidence_fragments/EVIDENCE_FRAGMENT_TEMPLATE.md`
- `01_llm_realm/03_concept_indexes/CONCEPT_INDEX_TEMPLATE.md`
- `05_agent_reports/memos/MEMO_TEMPLATE.md`

## Guardrail
Do not transform every interesting sentence into a fragment. Extract only material likely to be reused, compared, contradicted, or cited.
