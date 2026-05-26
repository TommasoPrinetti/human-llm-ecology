---
type: folder_index_template
index_status: template
evidence_type: processed
evidence_level: L1
created: 2026-05-26
updated: 2026-05-26
---

# Folder Index Template

Use one `INDEX.md` per meaningful Root Vault folder.

```md
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

# Folder Index: [root_rel_path]

## Folder Purpose
- [2 to 5 bullets explaining what this folder is for]

## What Is Here
| Child folder / source cluster | Type | Retrieval value | Checker target |
|---|---|---|---|
| `[name]` | [source_type] | [short reason to open it] | `[Root Vault path]` |

## Retrieval Notes
- Keywords and aliases:
- Likely concepts:
- Names / places / organizations:
- Date or phase notes:

## Checker Pointers
- Root folder: `[Root Vault path]`
- High-value files or subfolders:

## Gaps
- [OCR / transcription / missing dates / uncertain provenance / unmapped child]
```

## Rule
The YAML header is for fast grep. The body is for compact navigation. The Root Vault is where evidence is confirmed.
