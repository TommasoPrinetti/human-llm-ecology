---
type: process_router
agent: Varro
created: 2026-05-21
updated: 2026-05-21
---

# Process Router

Use this file only to choose the path. Use the skill/protocol/template for details.

## Non-Negotiable
- Root Vault is read-only — never modify, reorganize, or delete source files.
- `02_user_realm/writing/` is read-only — researcher's protected writing space.
- All agent work happens in the Realm (`00_system/`, `01_llm_realm/`, `03_logs/`, `04_mailbox/`, `05_agent_reports/`).

## Triggers
|---|---|---|
| New project | Varro + Human | `00_system/ONBOARDING.md` |
| First Root Vault mapping | Cicero | `00_system/INITIAL_MAPPING_PROTOCOL.md` |
| New source batch | Cicero | `00_system/INCOMING_SOURCE_PROTOCOL.md` |
| Research question | Lucrezio | `03_logs/user_questions.md` + `03_logs/structured_research_needs/` |
| Evidence answer | Any agent | indexes → back-search → L1/L2 answer |
| Repeated question pattern | Lucrezio → Cicero | tendency signal → re-index |
| Contradiction, anomaly, missing source, broad lead | Tacito | adversarial checklist → mailbox and/or memo |
| Cleanup, stale links, duplicate indexes, memo sorting | Varro | maintenance report and archive if needed |

## Agent Skills
| Agent | Skill |
|---|---|
| Cicero | `00_system/skills/CICERO_SKILL.md` |
| Lucrezio | `00_system/skills/LUCREZIO_SKILL.md` |
| Tacito | `00_system/skills/TACITO_SKILL.md` |
| Varro | `00_system/skills/VARRO_SKILL.md` |

## Output Boundaries
| Output | Use when |
|---|---|
| Source map | A source batch needs navigation |
| Evidence fragment | A source item should be reusable as evidence |
| Concept index | Several fragments share a concept |
| Analytic memo | A comparison, contradiction, or category needs internal memory |
| Mailbox note | The researcher should see a lead or warning |
| Agent report | A structural action needs traceability |

## Sequence Rules
- Cicero maps before Varro cleans that map.
- Tacito does not assess a source batch before Cicero maps it.
- Lucrezio can log questions while other agents read.
- Varro archives outdated Realm material; it does not delete it.
