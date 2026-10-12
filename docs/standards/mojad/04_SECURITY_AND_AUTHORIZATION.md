# MOJAD GOOS Security & Authorization Standard

**Required standard; current implementation must be audited.** Absence of an RLS file in one inspected scope does not prove there is no protection anywhere.

## Defense in depth
Authenticate protected requests; authorize every resource server-side; enforce ownership/org membership; use least-privilege DB roles; use RLS where appropriate and test with non-owner roles; restrict service credentials to trusted servers; validate schemas and reject mass assignment; rate-limit; log security events safely; keep secrets out of source, browser bundles, logs and AI prompts.

## Privileged fields
Clients must not directly set Pi verification, payment status, trust/reputation, ranking overrides, admin roles, moderation outcomes, rewards or ledger entries. Use server-authorized audited workflows.

## Isolation tests
User A cannot read/update/delete User B's private profile, messages, applications, payment records, AI memory, media or credits. Organization roles must be enforced. Guessing IDs cannot bypass authorization. Admin/service access is separately authorized and audited.

## AI tool boundary
Treat model output as untrusted. Each tool call requires authenticated actor, allowlisted capability, resource authorization, schema validation, risk tier, spend/rate limits and audit event. The model cannot decide its own permissions. Financial/privileged actions need stronger controls and human review where appropriate.

## Required tests
Forged/expired auth; cross-user read/write/delete; privileged-field tampering; membership changes; replayed webhooks; spend-limit bypass; secret scan/dependency audit; unauthorized AI tools; private media access; error leakage.

## Migration and incident safety
Review migration SQL; backup critical data; test forward/recovery in non-production; do not assume Prisma schema creates PostgreSQL RLS automatically; human approval for production migrations. Incident plans record severity, assets, containment, evidence, notifications, remediation and postmortem.
