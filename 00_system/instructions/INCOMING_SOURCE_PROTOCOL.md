---
type: intake_protocol
created: 2026-05-26
updated: 2026-05-26
---

# Incoming Source Protocol

Navigator handles intake and indexing. Checker verifies source paths, quote integrity, and index consistency when evidence is reused.

Use when new material has been placed in the Root Vault by the researcher, or an approved external source is retained.

## Steps
1. Register the batch in `03_logs/source_intake_log.md`.
2. Classify source type directly in folder-index YAML using short lowercase `source_types` values.
3. Create/update folder mirror indexes if navigation is needed.
4. Extract only reusable evidence fragments.
5. Link to existing concept indexes where possible.
6. Create a new concept index only if the batch introduces a repeated concept that does not fit existing indexes.
7. Update `01_llm_realm/00_realm_index.md`.
8. Write one intake report if files or indexes changed.

## External Sources
If the batch came from outside the Root Vault:
- Log the query in `03_logs/external_queries.md`.
- Keep `evidence_type: external` until the researcher moves it into the Root Vault.

## Do Not
- Duplicate existing maps or indexes.
- Create fragments for material that will not be reused, compared, contradicted, or cited.
- Modify, reorganize, or delete files in the Root Vault. Only the researcher places material there.
