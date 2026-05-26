# LLM Realm

LLM Realm is a lightweight research framework for using CLI-based LLM agents over large, evolving source collections.

```txt
Root Vault = protected source collection
LLM Realm  = writable organic index
```

The Root Vault holds your research material. Agents may read it, but never edit it. The Realm is the indexed version of the Root Vault: folder mirror indexes, evidence fragments, concept indexes, logs, verification notes, and reports.

The point is governed assistance: source paths, evidence labels, Checker verification, and researcher control.

## Install

```bash
git clone https://github.com/TommasoPrinetti/llm-realm.git my-llm-realm
cd my-llm-realm
```

Open the folder with Codex, Claude Code, Opencode, or another CLI agent that can read and write Markdown.

## Start

Optional fast start:

```bash
npm run setup
```

This opens a short terminal questionnaire and writes a first draft of:

```txt
02_user_realm/RESEARCH_BLUEPRINT.md
00_system/instructions/REALM_CONFIGURATION.md
```

At the end, setup can open your selected CLI from the Realm folder. Press Enter to open it, or type `n` to skip and open the tool yourself.

Tell the agent:

```txt
Read AGENTS.md and start the Realm — translate the setup draft, fill configuration
and blueprint, run initial indexing. Do not stop after reading files or ask for
confirmation beyond what the startup gate requires.
```

The agent will:

1. create a short todo list when its CLI supports task tracking,
2. translate the CLI draft into a usable research configuration,
3. infer scope, source universe, vocabulary, methods, outputs, and mapping targets from the project description, artifact references, and Root Vault,
4. check that all useful draft details and artifact references were translated or explicitly deferred,
5. verify local paths with file/shell tools,
6. use web, browser, or MCP tools for artifact URLs only when your source policy allows it,
7. ask a follow-up question only if required information is missing, external URL access needs permission, or the Root Vault cannot be located,
8. fill `02_user_realm/RESEARCH_BLUEPRINT.md`,
9. fill `00_system/instructions/REALM_CONFIGURATION.md`,
10. initialize `RESEARCH_NEED_AGGREGATOR.md` if missing,
11. run the first indexing pass, including folder-level mirror indexes under `01_llm_realm/00_root_mirror/`.

If the CLI has a todo/task tool, the agent should use it to track startup progress without creating extra files.

The prompt `Read AGENTS.md and start the Realm.` is permission to complete startup and run the first mapping pass. The agent should ask a question only if required setup information is missing, the Root Vault cannot be located, or external URL access needs permission.

The agent should not stop after only creating a folder index. Startup is complete only after the setup draft has been translated into the blueprint/config, the translation audit passed, the aggregator exists, `setup_status` is marked `realm_started`, the startup checklist is complete, and the first indexing pass has run or is explicitly blocked.

The startup report should end with concrete next steps, such as extracting first evidence fragments, creating the first concept index, asking a source-grounded research question, deepening a folder mirror index, or running a verification pass.

To check whether startup completed cleanly:

```bash
npm run check-startup
```

Example next prompts after startup:

```txt
Extract the first evidence fragments from the mapped source batch.
Build a concept index for the strongest recurring theme.
Answer my first research question using only L1 evidence.
Deepen the folder mirror index for [folder or source type].
Verify the first report's quotes and source paths with Checker.
```

## Daily Use

| Task | Path |
|---|---|
| New source batch | `00_system/instructions/PROCESS_ROUTER.md` |
| Research question | `03_logs/user_requests.md` + Conceptualizer route |
| Evidence answer | LLM Realm index -> Navigator -> Packer -> Checker |
| Quote or claim verification | Checker |
| Cleanup or stale index | Checker maintenance note and archive if needed |

## Internal Roles

The home session acts as the orchestrator. It logs the request, chooses the smallest useful route, passes outputs between specialists, and stops when the request is satisfied. You do not need to call internal roles directly.

| Role | Job |
|---|---|
| Home session | orchestrate routing, handoffs, stop conditions, and final response |
| Conceptualizer | define what needs to be searched |
| Navigator | find raw evidence in the LLM Realm and Root Vault when needed |
| Packer | turn retrieved material into a coherent report |
| Checker | verify quotes and claims, then maintain indexes when needed |

## Rules

- Do not edit the Root Vault.
- Do not edit `02_user_realm/writing/`.
- Do the smallest valid Realm action.
- Every factual claim needs a source path.
- L2 adjacent material requires Checker verification before reporting.
- External sources must be logged.
- Archived files are historical, not active instructions.

## License

[PolyForm Noncommercial 1.0.0](LICENSE)
