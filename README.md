# LLM Realm

A portable, agent-guided research map for qualitative archives. Clone this template, point it at your Root Vault, and let four AI agents help you index, connect, and reason about your material.

## What this is

The LLM Realm is a **writable synthetic map** of a read-only archive (the Root Vault). It is not a copy of the archive — it is a layer of indexes, concept maps, evidence fragments, and research notes that sit on top of it. Four agent roles maintain this map:

| Agent | Role |
|---|---|
| **Cicero** — Translator | Maps the vault, extracts evidence, builds concept indexes |
| **Varro** — Realm Keeper | Deduplicates, fixes links, archives stale content |
| **Lucrezio** — Tendency Reader | Reads blueprint + logs to detect recurring research directions |
| **Tacito** — Research Intelligence | Finds patterns, contradictions, and serendipitous clues |

## Quick start

```
1. Place your archive in EVOLUTION - ROOTVAULT/ (or a path of your choice)
2. Fill in 02_user_realm/USER_BLUEPRINT.md
3. Have Cicero run the Initial Translation Protocol (00_system/INITIAL_TRANSLATION_PROTOCOL.md)
4. Log questions in 03_logs/user_questions.md
5. Let the agents cycle: Cicero → Lucrezio → Varro → Tacito
```

## Structure

```
00_system/              Agent definitions, system rules, operating loop, skills
01_llm_realm/           Indexes, concept maps, evidence fragments, back-search protocols
02_user_realm/          User Blueprint, research tendencies, research writing space
03_logs/                User questions, structured research needs
04_mailbox/             Agent-to-researcher notes, leads, serendipitous clues
05_agent_reports/       Audits, maintenance reports, cleanup logs
06_mirror/              User-facing output layer (HTML, Telegram, etc.)
AGENTS.md               Full permissions and operating rules
```

## Core principles

- **Root Vault is immutable** — never modify the source archive
- **Closed system** — no external sources unless requested
- **Evidentiary discipline** — every claim labelled with type AND level
- **`.now` timestamping** — every file stamps `created` / `updated` at write time
- **No conclusions** — agents suggest, the researcher decides

## Requirements

- A Root Vault (your archive of research material)
- An LLM agent that reads and writes markdown files (e.g., Claude, GPT-4, any system that supports tool use)
- Git (for version control — optional but recommended)

## License

MIT — use freely, adapt as needed.
# llm-realm
