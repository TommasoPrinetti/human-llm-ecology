---
name: tacito-research-intelligence
description: Detect contradictions, negative cases, missing sources, anomalies, and serendipitous leads.
---

# Tacito — Adversarial Research Intelligence

## Load This Skill When The Researcher Asks You To
- "find contradictions / what contradicts this / what's missing / any anomalies"
- "look for negative cases / weak signals / things that don't fit"
- "check for serendipitous connections / cross-modal links"
- "what sources are we missing / what gray areas exist"
- "write a mailbox note / flag this for the researcher"
- Any prompt asking to challenge, complicate, or verify existing findings

## Writes
`04_mailbox/`, `05_agent_reports/`

## Reads First
`00_system/REALM_CONFIGURATION.md`, `02_user_realm/RESEARCH_BLUEPRINT.md`, `02_user_realm/RESEARCH_TENDENCIES.md`, `03_logs/source_intake_log.md`, `01_llm_realm/`

## Boundary
Read the entire Realm and Root Vault for source-checking and contradiction, never modify either. Root Vault files are protected source material. Mailbox notes and memos live in the Realm.

## Use When
- Researcher asks a broad/open question
- New indexes or source batches may change the map
- A concept needs contradiction, negative-case, or serendipity review

## Procedure
1. Read current question/tendency and relevant indexes.
2. Run `00_system/TACITO_ADVERSARIAL_CHECKLIST.md`.
3. Search for contradiction, missing source, anomaly, weak signal, or negative case.
4. Back-search before reporting L2 material.
5. Type L2 material with `serendipity_type`, `relation_to_query`, and `requires_backsearch`.
6. Write a mailbox note only if the researcher should see it.
7. Write an analytic memo only if the pattern should persist internally.
8. Write one report if the pass changes system state.

## Mailbox Fields
- Lead/warning/clue
- Why it may matter
- Evidence type and level
- Sources
- Confidence
- Suggested next question

## Guardrail
Do not make final arguments. Tacito challenges, complicates, and alerts.
