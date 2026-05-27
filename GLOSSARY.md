# Glossary

**Agent** — One of four active sub-agents that operate the Realm: Conceptualizer, Navigator, Packer, Checker. Each has a constrained domain and instruction file.

**Checker verification** — Checker opens the Root Vault or registered source path to verify a quote, claim, fragment, report, or index entry before it is treated as source-grounded.

**Blueprint** — Short for 02_user_realm/RESEARCH_BLUEPRINT.md. Defines the research project scope, questions, corpus, evidence standards, and direction. Orients all agent activity.

**Internal-first source policy** — The rule that agents must not search external sources (web, APIs, general knowledge) unless the researcher explicitly requests it or the Realm configuration allows logged external intake.

**Concept index** — A thematic collection of evidence fragments grouped under one concept (e.g., "speed vs. quality"). Lives in 01_llm_realm/03_concept_indexes/.

**Evidence fragment** — A verbatim quote, source claim, observation, data point, or precise paraphrase from the Root Vault or registered source, stored with source path, context, tags, and confidence.

**Evidence level** — L1 (direct, high confidence, explicitly answers the question) or L2 (adjacent and requires Checker verification before reporting).

**Evidence type** — Whether a claim is: primary (direct source material), processed (summary/cluster), interpretive (hypothesis/pattern), or external (logged outside source).

**L1 / L2** — See *Evidence level*.

**Research Need Aggregator** — 03_logs/research_tendencies/RESEARCH_NEED_AGGREGATOR.md. Aggregation of research needs, used to detect recurring prompt and search patterns.

**`.now`** — The convention that every file records `created: [date]` at creation and `updated: [date]` on every edit. Enables maintenance and stale-file checks.

**Realm** — Short for LLM Realm. The writable, indexed, conceptually navigable map of the Root Vault.

**Realm Configuration** — 00_system/instructions/REALM_CONFIGURATION.md. The operating profile for the project: source policy, Root Vault path, evidence standards, enabled workflows, and agent sequence.

**Re-index** — A Navigator and Checker maintenance pass that reorganizes the Realm around a detected pattern or fixes stale source navigation.

**Root Vault** — The protected source collection. Never modified by agents. All fragments link back to it or to a registered source.

**instruction file** — A sub-agent contract file, stored under 00_system/sub_agents/conceptualizer/subagent_conceptualizer_instructions.md, 00_system/sub_agents/navigator/subagent_navigator_instructions.md, 00_system/sub_agents/packer/subagent_packer_instructions.md, and 00_system/sub_agents/checker/subagent_checker_instructions.md, that constrains one sub-agent's actions, inputs, outputs, and boundaries.

**Structured research need** — A translated version of the researcher's raw question, filed in 03_logs/structured_research_needs/ with evidence requirements and hypotheses.

**Source intake log** — 03_logs/source_intake_log.md. Register of new Root Vault batches and retained external sources.

**Folder index** — A compact `INDEX.md` file under 01_llm_realm/00_root_mirror/ that mirrors one meaningful Root Vault folder and points back to source paths Checker can verify.

**Tendency** — A recurring research direction detected across request logs and structured needs. It can trigger a re-index or maintenance pass.

**Writing Space** — 02_user_realm/writing/. The researcher's private drafts and arguments. Read-only for all agents.
