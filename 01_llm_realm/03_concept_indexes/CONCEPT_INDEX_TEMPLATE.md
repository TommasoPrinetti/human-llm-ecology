# Concept Index Template

Use when several fragments share a concept.

```md
---
type: concept_index
sub_agent: Navigator
created: [date]
updated: [date]
evidence_type: processed
evidence_level: L1
tags: [tag1, tag2]
negative_case_status: none_found | partial | present | needs_search
---

# [[Concept Name]]

## Definition
[short working definition]

## Codes
- [code]

## Category
[[Category]]

## Evidence
| Fragment/source | Why it matters | Confidence |
|---|---|---|
| [[fragment]] or `/root_vault/path` | [short note] | high / medium / low |

## Negative Cases
| Fragment/source | Counter-pattern | Checker status |
|---|---|---|
| [[fragment]] or `/root_vault/path` | [what it weakens] | pending / partial / verified |

## Comparison
- Similar: [[concept]]
- Contrasting: [[concept]]
- Code changes: [reinforced / weakened / renamed / split / merged]

## Checker Verification
[what to verify before using this concept in an answer or draft]
```

Omit empty sections only when they do not apply. Do not leave `Negative Cases` blank; use `negative_case_status`.
