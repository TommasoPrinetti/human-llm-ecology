---
type: system_index
created: 2026-05-26
updated: 2026-05-26
---

# System Folder

This folder contains instructions and contracts used by the agent harness.

## Structure

```txt
00_system/
  instructions/   Operational instructions the active session reads.
  sub_agents/     SOUL files for specialist sub-agents.
  templates/      Response and report templates.
  archive/        Retired system files.
```

## Read Order
1. `AGENTS.md`
2. `00_system/instructions/REALM_CONFIGURATION.md`
3. `00_system/instructions/SYSTEM_ARCHITECTURE_MAP.md`
4. `00_system/instructions/PROCESS_ROUTER.md`

Startup uses `00_system/instructions/STARTUP.md`.
