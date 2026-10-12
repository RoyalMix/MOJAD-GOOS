# MOJAD GOOS Tool Execution Prompts

Use one prompt at a time. Tools implement approved work; GitHub remains the source of truth.

## Universal prompt
You are working on the existing MOJAD GOOS project, not a greenfield rebuild. Read the canonical governance docs first. Inspect target project/repo, branch, services, files, tests and configuration. Reuse existing implementations. Do not create duplicate engines/tables/APIs/ledgers/auth systems/integrations. Do not expose secrets or request wallet passphrases. Do not fabricate data, payments, rewards or test evidence. Distinguish code presence from runtime proof. Before editing, propose one minimal vertical slice with files, behavior, tests, risks and rollback; wait for human approval. After approval, implement only that slice, test it, and report exact evidence. No production deployment or real-payment activation without explicit approval.

## Bolt AI — backend/service integration
Audit existing backend/database first. Identify canonical Opportunity Engine, AI endpoints, payment/economy, trust/auth and analytics. Pick one approved slice; reuse existing tables/contracts. No fake production data. Add relevant auth/idempotency/failure/provenance tests. No payment/identity semantic changes without approval.

## Pi AI App Studio — Pi alignment
Inspect actual app config and compare with current official Pi docs/terms. Report registration/network, SDK initialization, server-side identity verification, payment approval/completion, server-side secrets and sandbox evidence. Do not invent config, switch production networks, ask for wallet passphrases or enable Mainnet. Implement only after approval. Start: https://developers.minepi.com/docs/build-first-app/GettingStarted

## Replit — isolated prototype
Do not rebuild MOJAD core. Propose an isolated, replaceable prototype/adapter only for a verified gap. Define API contract, auth/data boundaries, costs and rollback. Use synthetic data only in isolated development. No production secrets/data. Include tests and integration steps.

## Lovable — UI/workflow integration
Preserve existing pages/routes/features. Trace each action to a real backend workflow. No fake success, demo balances, fake opportunities, duplicate services or false payment claims. Show unavailable states honestly. Use server-authoritative data and auth. Report changed files, routes, tests and runtime evidence.

## Copilot — low-token audit/review
Read-only inspection first; cite exact paths/symbols; do not infer production state from code. Avoid broad refactors. Propose smallest secure change and wait for approval. No commit/deploy unless explicitly authorized.

## Required report from every tool
Target project/repo and commit/branch; components reused; files inspected/changed; tests and results; security/privacy/payment impact; config/migrations; environment/runtime evidence; remaining unknowns; rollback; what was NOT done.
