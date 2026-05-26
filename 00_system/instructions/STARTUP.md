---
type: startup_prompt
created: 2026-05-26
updated: 2026-05-26
---

# STARTUP.md - Root Vault To LLM Realm Conversion Prompt

Use this file when the user asks to start the Realm or when setup files still contain placeholders.

## Mission
Translate the protected Root Vault into the first usable LLM Realm index.

The goal is not file-to-file equality. The goal is folder-to-folder navigability:

```txt
Root Vault folder        -> LLM Realm folder index
Root Vault subfolder     -> LLM Realm subfolder index
Important source cluster -> deeper folder index, metadata, fragments, concept indexes when useful
```

The LLM Realm must let an agent find a promising topic quickly, then go back to the Root Vault path for fuller evidence.

## Non-Negotiable
- Never edit, rename, reorganize, or delete Root Vault files.
- Do not copy the Root Vault into the Realm.
- Do not create one Realm file per Root Vault file unless the file is analytically important.
- Prefer compact folder indexes over exhaustive summaries.
- Put retrieval-critical terms in YAML frontmatter because fast grep starts there.
- Put interpretation and context in the body.

## Required Startup Inputs
Read:

1. `AGENTS.md`
2. `00_system/instructions/REALM_CONFIGURATION.md`
3. `00_system/instructions/SYSTEM_ARCHITECTURE_MAP.md`
4. `00_system/instructions/PROCESS_ROUTER.md`
5. `02_user_realm/RESEARCH_BLUEPRINT.md`
6. `01_llm_realm/01_metadata/HEADER_TEMPLATE.md`
7. `01_llm_realm/00_root_mirror/FOLDER_INDEX_TEMPLATE.md`

## Step 1 - Verify Setup
Fill or verify:
- project title,
- project description,
- Root Vault path,
- external source policy,
- evidence standard,
- initial vocabulary,
- expected outputs.

If the Root Vault path is missing or unreachable, stop and ask for it.

## Step 2 - Survey Root Vault Folders
Survey the Root Vault folder tree.

Create a folder-level inventory:
- top-level folders,
- meaningful second-level folders,
- source types present,
- machine-readable status,
- obvious dates, names, places, projects, topics,
- gaps such as scans without OCR or audio without transcript.

Do not deeply read every file during startup. Sample enough to build a useful navigation index.

## Step 3 - Create Folder-Mirrored Realm Indexes
For each meaningful Root Vault folder, create a matching folder under:

```txt
01_llm_realm/00_root_mirror/[root-relative-folder]/INDEX.md
```

Example:

```txt
Root Vault:
  /RootVault/interviews/phase_1/

LLM Realm:
  01_llm_realm/00_root_mirror/interviews/phase_1/INDEX.md
```

Each `INDEX.md` must use `01_llm_realm/00_root_mirror/FOLDER_INDEX_TEMPLATE.md`.

## Step 4 - Write Grep-Friendly YAML
The YAML header is the fast retrieval layer. Keep it compact, normalized, and grep-friendly.

Required folder-index fields:

```yaml
---
type: folder_index
index_status: draft | partial | mapped | verified
root_path: "[absolute or configured Root Vault path]"
root_rel_path: "[folder path relative to Root Vault]"
realm_mirror_path: "01_llm_realm/00_root_mirror/[root_rel_path]/INDEX.md"
mirror_level: root | top_level | subfolder | source_cluster
source_types: [interview, fieldnote, dataset]
modalities: [text, pdf, image, audio, video, dataset]
machine_readable: yes | no | partial
date_range: "[YYYY-YYYY or unknown]"
people: [name_or_role]
places: [place]
organizations: [organization]
topics: [topic]
keywords: [grep, friendly, terms]
concepts: ["[[Concept Name]]"]
codes: [descriptive_code]
evidence_type: processed
evidence_level: L1
checker_required: true
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

Rules:
- Use lowercase snake_case for field names.
- Use short arrays for grep terms.
- Prefer stable nouns over prose in YAML.
- Do not put long summaries in YAML.
- Leave unknown fields as `unknown` only when the field is useful for retrieval.
- Omit fields that do not help retrieval.

## Step 5 - Write Token-Efficient Bodies
The body of each folder index should be short:

1. `Folder Purpose` - 2 to 5 bullets.
2. `What Is Here` - compact table of subfolders or source clusters.
3. `Retrieval Notes` - terms, aliases, language variants, likely concepts.
4. `Checker Pointers` - exact Root Vault folders or files to open for verification.
5. `Gaps` - OCR, transcription, missing dates, uncertain provenance.

Do not summarize every file. Summarize the folder as a search surface.

## Step 6 - Add Deeper Indexes Only When Useful
Create deeper folder indexes, metadata, evidence fragments, and concept indexes only when they improve retrieval or reuse.

Use:
- `01_llm_realm/00_root_mirror/` nested `INDEX.md` files for source batches needing deeper navigation.
- `01_llm_realm/04_evidence_fragments/` for reusable quotes or precise observations.
- `01_llm_realm/03_concept_indexes/` when several fragments share a concept.

## Step 7 - Update Master Index
Update `01_llm_realm/00_realm_index.md` with:
- Root Vault path,
- mirror index coverage,
- mapped top-level folders,
- folders not yet indexed,
- concept indexes created,
- known gaps.

## Step 8 - Smoke Test
Before reporting startup complete, run one retrieval smoke test:

1. Pick one concept, topic, person, place, or keyword from YAML.
2. Grep the LLM Realm for it.
3. Confirm the result points to a folder index.
4. Open the Root Vault path listed in that folder index.
5. Record whether Checker can verify the source path.

Startup is complete only if the LLM Realm can lead back to the Root Vault.

## Startup Output
Write one report in `05_agent_reports/` with:
- configuration status,
- Root Vault path verified,
- folder mirror coverage,
- files created,
- smoke test result,
- remaining unmapped folders,
- recommended next indexing actions.
