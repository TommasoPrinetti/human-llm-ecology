# LLM Realm

LLM Realm is a lightweight research framework for using CLI-based LLM agents over large, evolving source collections.

```txt
Root Vault = protected source collection
LLM Realm  = writable research map
```

The Root Vault holds your research material. Agents may read it, but never edit it. The Realm holds source maps, metadata, evidence fragments, concept indexes, logs, memos, mailbox notes, and reports.

The point is governed assistance: source paths, evidence labels, back-search, adversarial checks, and researcher control.

## Install

```bash
git clone https://github.com/TommasoPrinetti/llm-realm.git my-llm-realm
cd my-llm-realm
```

Open the folder with Codex, Claude Code, Opencode, or another CLI agent that can read and write Markdown.

## Start

Optional fast start:

```bash
npm run llm-onboard
```

This opens a small terminal questionnaire and writes a first draft of:

```txt
02_user_realm/RESEARCH_BLUEPRINT.md
00_system/REALM_CONFIGURATION.md
```

Then open the repo with your LLM agent.

Tell the agent:

```txt
Read AGENTS.md and continue onboarding.
```

The agent will:

1. detect missing or underspecified fields,
2. use its question/input tool, when available, to ask precise follow-up questions,
3. fill `02_user_realm/RESEARCH_BLUEPRINT.md`,
4. fill `00_system/REALM_CONFIGURATION.md`,
5. initialize `RESEARCH_NEED_AGGREGATOR.md` if missing,
6. ask whether to start the initial mapping.

If the CLI has a todo/task tool, the agent should use it to track onboarding progress without creating extra files.

If you agree, the agent starts the first mapping pass and then runs the smoke test in `00_system/ONBOARDING.md`.

## Daily Use

| Task | Path |
|---|---|
| New source batch | `00_system/INCOMING_SOURCE_PROTOCOL.md` |
| Research question | `03_logs/user_questions.md` |
| Evidence answer | indexes → back-search → L1/L2 answer |
| Contradiction or lead | mailbox note or internal memo |
| Cleanup | archive/report |

## Internal Roles

The framework uses internal roles to route work. You do not need to call them directly.

| Role | Job |
|---|---|
| Cicero | map sources, extract reusable fragments, build indexes |
| Lucrezio | log questions, detect repeated research needs |
| Tacito | find contradictions, negative cases, missing sources, weak signals |
| Varro | keep the Realm clean, archived, and navigable |

## Rules

- Do not edit the Root Vault.
- Do not edit `02_user_realm/writing/`.
- Do the smallest valid Realm action.
- Every factual claim needs a source path.
- L2/serendipitous material requires back-search before reporting.
- External sources must be logged.
- Archived files are historical, not active instructions.

## License

MIT.
