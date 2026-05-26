# Header Template

Use only the fields needed for retrieval. Do not add empty analytic fields.

## Required For Folder Index Files

Folder indexes are the core fast-grep layer. Use one `INDEX.md` per meaningful Root Vault folder under `01_llm_realm/00_root_mirror/`.

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
created: [date]
updated: [date]
---
```

## Add For Evidence-Bearing Files

```yaml
source: /root_vault/source_batch_NNN/[subfolder]/[file]
source_types: [interview, fieldnote, dataset]
evidence_type: [primary | processed | interpretive | external]
evidence_level: [L1 | L2]
confidence: [high | medium | low]
tags: [tag1, tag2]
```

## Add For Coded Fragments Or Indexes

```yaml
codes:
  - [descriptive code]
concepts:
  - "[[Concept Name]]"
category: "[[Category Name]]"
coding_status: uncoded | open_coded | focused_coded | categorized
```

## Add Only When Relevant

```yaml
negative_case_status: none_found | partial | present | needs_search
constant_comparison:
  similar_fragments:
    - "[[Fragment]]"
  contrasting_fragments:
    - "[[Fragment]]"
  comparison_status: not_compared | partial | compared
sensitizing_concepts:
  - [attention guide, not evidence]
theoretical_frames:
  - [frame to consider later]
relation_to_query: direct | adjacent | oppositional | speculative
checker_required: true | false
```

## Rule
Frontmatter is for routing and retrieval. The body is for interpretation, comparison, and context.

For fast grep:
- use lowercase snake_case field names,
- keep retrieval arrays short,
- prefer stable nouns over prose,
- include `root_rel_path` and `realm_mirror_path` when the file points back to Root Vault structure,
- omit fields that do not help retrieval.

## Common Source Types
Use short lowercase values in `source_types`.

```yaml
source_types: [interview, fieldnote, article, policy, report, news, web_capture, legal, dataset, image, scan, audio, video, correspondence, researcher_note, external]
```
