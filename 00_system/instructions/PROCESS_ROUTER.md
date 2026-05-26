---
type: process_router
created: 2026-05-26
updated: 2026-05-26
---

# Process Router

Use this file to choose the operational route for a user prompt. The home session is the orchestrator and uses the relevant sub-agent SOUL file for execution details.

## Non-Negotiable
- Root Vault is read-only. Never modify, reorganize, rename, or delete source files.
- `02_user_realm/writing/` is read-only. It is the researcher's protected writing space.
- Search the LLM Realm before opening the Root Vault unless the user explicitly asks for original files or verification.
- Every non-trivial source claim must be checked against a Root Vault or registered source path before it is presented as established.

## Universal First Step
The home session logs every request in `03_logs/user_requests.md`.

Use one short row:

| Date | Request summary | Route | Status | Output |
|---|---|---|---|---|

Do not over-log. The log is for routing memory, not full transcripts.

## Fast Path
Use the fast path only when all are true:
- the prompt is short,
- the answer is operational or obvious from the current context,
- no source search is needed,
- no factual claim from the Root Vault is being introduced.

Route:

```txt
log -> answer
```

## Sub-Agent Routes
| Trigger | Route | Output |
|---|---|---|
| Clarify what needs searching | Conceptualizer | Search brief or structured research need |
| Find material in the indexed Realm | Conceptualizer -> Navigator | Raw evidence packet or source pointer |
| Answer from evidence | Conceptualizer -> Navigator -> Packer -> Checker | Verified report and final answer |
| Synthesize several evidence packets | Packer -> Checker | Verified report |
| Verify quotes or citations | Checker | Verification note |
| Check whether an index matches the Root Vault | Checker | Index maintenance note |
| Repair stale source paths or broken evidence links | Checker | Updated index/report |
| Deepen a folder index or concept index | Conceptualizer -> Navigator -> Checker | Updated LLM Realm index |
| Startup / initial vault setup | `00_system/instructions/STARTUP.md` | Completed configuration, blueprint, folder mirror, and initial Realm index |

## Home Session Orchestration
The home session owns sequencing. It may answer directly only on the fast path. Otherwise it selects the smallest useful route, passes outputs forward, and stops when the user request has been satisfied.

The home session must not:
- do Navigator work when source search is needed,
- do Packer work when a durable report is required,
- do Checker work without opening the original source or registered source path,
- run the full pipeline when a narrower route is enough.

## Sub-Agent Contracts
| Sub-agent | Reads | Writes | Must not do |
|---|---|---|---|
| Conceptualizer | User prompt, configuration, blueprint, existing request logs | `03_logs/structured_research_needs/`, `03_logs/user_requests.md` | Search sources, quote evidence, write final reports |
| Navigator | Conceptualizer brief, LLM Realm, Root Vault if needed | `01_llm_realm/` when indexing is needed, raw evidence packet in `05_agent_reports/` when useful | Interpret beyond retrieval, write final answers |
| Packer | Original request, Conceptualizer brief, Navigator packet | `05_agent_reports/` | Verify quotes, alter source evidence, maintain indexes |
| Checker | Packer report, Navigator packet, LLM Realm, Root Vault, registered external sources | `01_llm_realm/`, `03_logs/`, `05_agent_reports/` | Create unsupported interpretations, silently pass unverified claims |

## Sequence Rules
- Conceptualizer does not search. It defines what should be searched.
- Navigator searches and retrieves. It does not decide the final interpretation.
- Packer answers the user's original request in report form. It does not certify evidence.
- Checker verifies quotes and claims. It can be called alone more often than the others.
- The home session decides the sequence, passes outputs, and enforces stop conditions.
- If Checker finds a quote mismatch, stale index entry, or broken path, fix the Realm index when the correction is local and clear.
- If the Root Vault cannot be accessed, stop source-grounded claims and report the blocker.

## Output Boundaries
| Output | Use when |
|---|---|
| Request log row | Every prompt |
| Search brief | The request needs conceptual decomposition |
| Raw evidence packet | Navigator has found source material that must be passed forward |
| Agent report | Packer has synthesized evidence into an answer |
| Verification note | Checker has accepted, corrected, or rejected evidence claims |
| Folder index / concept index / fragment | The LLM Realm needs durable navigation improvements |
