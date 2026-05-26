---
type: system_architecture_map
created: 2026-05-26
updated: 2026-05-26
---

# LLM Realm System Architecture Map

## Core Architecture
LLM Realm is a two-layer research system.

```txt
Root Vault
  read-only original sources
  canonical evidence layer
        |
        | initial setup translates, indexes, and compresses navigation
        v
LLM Realm
  writable organic index
  folder indexes, fragments, concept indexes, logs, reports
        |
        | prompt pipeline searches here first for token economy
        v
User-facing answers
  checked against Root Vault before factual claims are finalized
```

The LLM Realm is not a replacement for evidence. It is the working index of the Root Vault. It can evolve, be corrected, and become richer over time.

## Prompt Lifecycle
```txt
User prompt
  |
  v
Home session orchestrator
  |
  v
Request log
  |
  v
Fast-path check
  |-- simple prompt --> immediate answer
  |
  v
Route sub-agents as needed
  |
  |-- Conceptualizer --> search brief
  |-- Navigator ------> raw evidence packet
  |-- Packer ---------> coherent report
  |-- Checker --------> quote/claim verification + index maintenance
  |
  v
Final answer to user
```

The home session is the orchestrator. It is governed by `AGENTS.md` and controls routing, handoffs, stop conditions, and final response assembly.

## Sub-Agent Pipeline
| Stage | Owner | Function | Input | Output |
|---|---|---|---|---|
| 0 | Home session | Log request, choose route, pass outputs, enforce stop conditions | User prompt, router, configuration | Fast-path answer or routed sequence |
| 1 | Conceptualizer | Understand the research need and translate it into searchable concepts | User prompt, blueprint, configuration | Search brief, keywords, route recommendation |
| 2 | Navigator | Search the LLM Realm first and Root Vault only when needed | Search brief, folder indexes, concept indexes, Root Vault paths | Raw evidence packet with source paths |
| 3 | Packer | Build a coherent report answering the original request | Original prompt, search brief, evidence packet | Report in `05_agent_reports/` |
| 4 | Checker | Verify quotes and claims, then maintain indexes if needed | Report, evidence packet, Root Vault, registered sources | Verification note, corrected report/index if needed |

The Checker can run alone when the user asks for verification, source-path repair, quote checking, or index maintenance.

## Setup Lifecycle
Initial setup creates the translation layer between Root Vault and LLM Realm.

```txt
Setup draft / user startup prompt
  |
  v
Fill configuration and research blueprint
  |
  v
Verify Root Vault path and protection rules
  |
  v
Survey Root Vault structure
  |
  v
Create initial LLM Realm index
  |
  |-- folder mirror indexes
  |-- nested folder indexes where useful
  |-- reusable evidence fragments
  |-- concept indexes where repeated patterns exist
  |
  v
Mark setup_status: realm_started
```

The setup output is not a final interpretation of the research corpus. It is the first navigable, token-efficient map that later agents can search.

## Search Order
1. `01_llm_realm/00_realm_index.md`
2. Relevant folder indexes in `01_llm_realm/00_root_mirror/`
3. Relevant concept indexes in `01_llm_realm/03_concept_indexes/`
4. Relevant evidence fragments in `01_llm_realm/04_evidence_fragments/`
5. Root Vault source files for verification, missing context, or unmapped material
6. External sources only when allowed by configuration or explicitly requested

## Evidence Hierarchy
| Layer | Role |
|---|---|
| Root Vault source | Canonical source of truth |
| Registered external source | Allowed only under external source policy |
| Evidence fragment | Reusable, indexed quote or source excerpt |
| Folder index | Navigation layer |
| Concept index | Retrieval and pattern layer |
| Packer report | User-facing synthesis, not evidence by itself |
| Checker note | Verification state for quotes and claims |

## Active Files
| File | Role |
|---|---|
| `AGENTS.md` | Top-level operating rules |
| `00_system/instructions/PROCESS_ROUTER.md` | Prompt routing rules for the home-session orchestrator |
| `00_system/instructions/STARTUP.md` | Canonical Root Vault to LLM Realm conversion prompt |
| `00_system/sub_agents/*/SOUL.md` | Specialized sub-agent contracts |
| `01_llm_realm/00_root_mirror/` | Folder-level Root Vault mirror indexes |
| `03_logs/user_requests.md` | Request log |
| `05_agent_reports/` | Reports and Checker verification notes |

## Retired Model
The previous agent names are historical. Active routing now uses Conceptualizer, Navigator, Packer, and Checker. Archived files may mention retired names, but archived material is not active instruction.
