---
type: request_log
created: 2026-05-26
updated: 2026-05-26
---

# User Requests

Short routing log for user prompts. Log the request before deciding whether to answer directly or route through sub-agents.

| Date | Request summary | Route | Status | Output |
|---|---|---|---|---|
| 2026-05-26 | Redesign AGENTS into an operational prompt pipeline with Conceptualizer, Navigator, Packer, and Checker; add setup architecture map and startup prompt | Conceptualizer -> Navigator -> Packer -> Checker equivalent system redesign | done | `00_system/instructions/SYSTEM_ARCHITECTURE_MAP.md`; `05_agent_reports/2026-05-26_system_architecture_redesign.md` |
| 2026-05-26 | Review whether the new sub-agent system supports organic movement and whether an orchestrator skill is needed | log -> answer | done | chat answer |
| 2026-05-26 | Integrate orchestration into main AGENTS.md so the home session acts as orchestrator instead of adding an orchestrator sub-agent | log -> edit active system docs | done | `AGENTS.md`; `00_system/instructions/PROCESS_ROUTER.md`; `00_system/instructions/SYSTEM_ARCHITECTURE_MAP.md` |
| 2026-05-26 | Rewrite AGENTS.md as a concrete step-by-step orchestrator playbook with route cases, sub-agent calls, handoffs, and stop conditions | log -> edit AGENTS.md | done | `AGENTS.md` |
| 2026-05-26 | Rewrite AGENTS.md voice so injected session instructions address the active agent directly as "you" | log -> edit AGENTS.md | done | `AGENTS.md` |
| 2026-05-26 | Make AGENTS.md terminology less ambiguous by defining route, shortest valid route, call, evidence-bearing claim, and related operating terms | log -> edit AGENTS.md | done | `AGENTS.md` |
| 2026-05-26 | Replace ambiguous shortest-route wording in AGENTS.md with harness-style instruction to invoke the correct sequence of sub-agents | log -> edit AGENTS.md | done | `AGENTS.md` |
| 2026-05-26 | Swap startup gate before request logging, specify sub_agent tool handoffs, remove the example case block, and retire unused outward-note surface | log -> edit active system docs | done | `AGENTS.md`; active docs |
| 2026-05-26 | Define LLM Realm as a folder-mirrored Root Vault index with grep-friendly YAML and store the Root-to-Realm conversion prompt in STARTUP.md | log -> edit startup and index templates | done | `00_system/instructions/STARTUP.md`; `01_llm_realm/00_root_mirror/` |
| 2026-05-26 | Clean up redundant Realm folders after folder-mirror redesign and keep active Realm focused on Root Vault indexing | log -> edit active structure | done | `01_llm_realm/00_realm_index.md`; archived retired folders |
| 2026-05-26 | Reorganize system instruction folders so agents can understand where instructions, sub-agent contracts, and templates live | log -> edit active structure | done | `00_system/` |
| 2026-05-26 | Purge legacy compatibility files and simplify stale metadata/source-type templates for lighter folder-mirror framework | log -> edit active structure | done | metadata/log cleanup |
| 2026-05-26 | Remove standalone legacy verification layers and make Checker the only verification mechanism | log -> edit active structure | done | Checker-owned verification cleanup |
