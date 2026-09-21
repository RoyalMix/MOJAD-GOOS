# MOJAD GOOS — SOURCE OF TRUTH
Version: 1.0

## Authority
GitHub is the canonical source of truth for MOJAD code, contracts, architecture, migrations, tests, CI/CD, governance, ownership and audit evidence.

## Roles
- ChatGPT: strategy and architecture workspace.
- GitHub: canonical repository and historical record.
- Copilot: auditor/architect/builder/tester/reviewer under human approval.
- Lovable: application builder/worker.
- Replit: builder/worker.
- Pi tools: Pi ecosystem/build workers.
- Supabase: runtime/database/provider, not an independent architecture authority.
- LiveKit and other providers: capability providers behind adapters.
- Human: final authority for architecture, security, production release and sensitive actions.

## Rules
1. Read before changing.
2. Preserve working systems.
3. Reuse before rebuilding.
4. No duplicate authoritative capability.
5. No fake production data, Pi balances, transactions, AI, trust or analytics.
6. No production migration from assumptions.
7. Secrets never belong in GitHub, frontend code or ordinary database tables.
8. Provider integrations must be replaceable through adapters.
9. Evidence is required before claiming a capability is verified.
10. Human approval is required for production and sensitive changes.

## Evidence states
VERIFIED-CODE, VERIFIED-DATABASE, VERIFIED-PROVIDER, VERIFIED-RUNTIME, BASELINE-REPORTED, PARTIAL, UNKNOWN, BLOCKED.

## Standard workflow
AUDIT → PRESERVE → DESIGN/PLAN → TARGETED CHANGE → INTEGRATE → TEST → SECURITY/EVIDENCE VERIFY → HUMAN APPROVAL → COMMIT/RELEASE.
