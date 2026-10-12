# MOJAD GOOS Manual Implementation Roadmap

**Plan only; not a claim of completed work.**

## Phase 0 — Repository truth
Confirm repo/branch, compare proposed docs with canonical docs, map services/schemas/migrations/tests/deployment, label capabilities, resolve source-of-truth conflicts. Exit: evidence-backed capability matrix and human-approved source of truth.

## Phase 1 — Security
Audit API authorization, DB roles/RLS, tenant isolation, privileged fields, secrets and cross-user tests. Reuse existing auth. Fix only confirmed critical gaps in small reviewed changes. Exit: cross-user/privilege tests and security review.

## Phase 2 — Payments/usage ledger
Audit current payment and ledger services; verify idempotency, callbacks, completion, reconciliation, refunds/replay. Define Credits only if no equivalent exists. Sandbox end-to-end before real money. Exit: duplicate/replay/failure/reconciliation tests and approval.

## Phase 3 — MOJAD AI
Trace UI → server → provider and opportunity data. Reuse existing search/knowledge services. Add source/date provenance, temporal labels, scoped memory correction/deletion and tool authorization. Exit: current/stale/no-match/memory-isolation/tool-permission tests.

## Phase 4 — Existing modules
Connect real Workforce, Jobs, Businesses, Marketplace, Education, Grants, Investors, Services, Community, Creators and realtime workflows. Verify uploads and object access. Exit: end-to-end test per enabled workflow.

## Phase 5 — Media metering
Use only available/approved providers. Quote → consent → reserve → execute → settle/release → receipt. Add quotas, abuse controls and failure refunds. Exit: cost reconciliation and failure recovery.

## Phase 6 — Pi and additional rails
Verify Pi registration, SDK, auth and payment flow in the right sandbox/test environment. Plan Mainnet only after review. Review every stablecoin/fiat provider separately. Exit: official-doc review, sandbox evidence, required approvals.

## Phase 7 — CI/CD and monitoring
Build/test/type/lint/security gates, migration review, human production approval, auth/payment/provider/AI cost monitoring, rollback and incident response. Exit: green CI, rollback rehearsal, alert tests.

For every phase: one approved vertical slice. Stop if capability already exists, evidence is missing, or data/financial harm is possible.
