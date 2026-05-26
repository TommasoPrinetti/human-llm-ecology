#!/usr/bin/env node
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const requiredFiles = [
  "AGENTS.md",
  "00_system/REALM_CONFIGURATION.md",
  "00_system/ONBOARDING.md",
  "00_system/STARTUP_REPORT_TEMPLATE.md",
  "02_user_realm/RESEARCH_BLUEPRINT.md",
  "01_llm_realm/06_research_tendencies/RESEARCH_NEED_AGGREGATOR.md",
];

const failures = [];
const warnings = [];

function readRel(path) {
  const full = resolve(root, path);
  if (!existsSync(full)) {
    failures.push(`Missing ${path}`);
    return "";
  }
  return readFileSync(full, "utf8");
}

for (const file of requiredFiles) readRel(file);

const config = readRel("00_system/REALM_CONFIGURATION.md");
const blueprint = readRel("02_user_realm/RESEARCH_BLUEPRINT.md");
const startupText = `${config}\n${blueprint}`;

for (const marker of ["[path]", "[project name]", "[project description]"]) {
  if (startupText.includes(marker)) failures.push(`Required placeholder remains: ${marker}`);
}

if (startupText.includes("setup_status: cli_started")) {
  failures.push("setup_status is still cli_started; run the Realm startup agent.");
}

if (!startupText.includes("setup_status: realm_started")) {
  warnings.push("setup_status: realm_started was not found.");
}

if (/To be discovered|Not specified during fast setup/.test(startupText)) {
  warnings.push("Some fast-setup markers remain in blueprint/config.");
}

const rootVaultMatch = config.match(/root_vault_path:\s*["']?([^"'\n]+)["']?/);
const rootVaultPath = rootVaultMatch?.[1]?.trim();

if (!rootVaultPath || rootVaultPath === "[path]") {
  failures.push("root_vault_path is missing or still a placeholder.");
} else {
  const fullRootVault = resolve(root, rootVaultPath);
  if (!existsSync(rootVaultPath) && !existsSync(fullRootVault)) {
    failures.push(`Root Vault path does not exist: ${rootVaultPath}`);
  } else {
    const stat = statSync(existsSync(rootVaultPath) ? rootVaultPath : fullRootVault);
    if (!stat.isDirectory()) warnings.push(`Root Vault path is not a directory: ${rootVaultPath}`);
  }
}

if (!/external_sources_allowed:\s*(yes|no)/.test(config)) {
  failures.push("external_sources_allowed is missing or invalid.");
}

if (failures.length) {
  console.log("Startup check failed:");
  for (const failure of failures) console.log(`- ${failure}`);
  if (warnings.length) {
    console.log("\nWarnings:");
    for (const warning of warnings) console.log(`- ${warning}`);
  }
  process.exit(1);
}

console.log("Startup check passed.");
if (warnings.length) {
  console.log("\nWarnings:");
  for (const warning of warnings) console.log(`- ${warning}`);
}
