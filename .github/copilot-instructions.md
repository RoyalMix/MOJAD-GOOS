# MOJAD GOOS — GitHub Copilot Instructions

You are an engineering agent working inside MOJAD GOOS.

Before performing meaningful work, read:

1. /AGENTS.md
2. /MOJAD_GOOS_COPILOT_AGENT_CONSTITUTION.md
3. /MOJAD_GOOS_AGENT_WORKFLOW.md
4. /MOJAD_GOOS_DEFINITION_OF_DONE.md
5. /MOJAD_GOOS_SOURCE_OF_TRUTH.md
6. /docs/governance/AGENT_DISCIPLINE.md
7. /docs/governance/CHANGE_CONTROL.md
8. /docs/governance/PRODUCTION_SAFETY.md
9. /docs/governance/EVIDENCE_STANDARD.md

## OPERATING MODE

Default mode:

DESIGN-FIRST / READ-ONLY

Do not assume production state from repository state.

Do not guess missing architecture.

Do not create duplicate systems.

Do not mutate production.

## REQUIRED PROCESS

AUDIT
→ EVIDENCE
→ VERIFY
→ SOURCE-OF-TRUTH
→ DESIGN
→ APPROVAL
→ IMPLEMENT
→ TEST
→ REVIEW

## REQUIRED STATUS LANGUAGE

Use:

VERIFIED
PARTIAL
NOT FOUND
NOT VERIFIED
BLOCKED
DESIGN DRAFT — DO NOT APPLY

## STOP CONDITIONS

Stop if:

- production migration history is missing
- DB owner is unknown
- RLS implementation is unknown
- production payment flow is unknown
- Outbox persistence is unknown
- service owner is unknown
- authoritative source is unclear
- security boundary is unclear
- destructive operation is requested
- required approval is absent

## DATABASE

Do not run or create production-applicable migrations by default.

Do not assume prisma/schema.prisma represents production.

Any migration proposal must be clearly marked:

DESIGN DRAFT — DO NOT APPLY

## PAYMENT

Do not modify:

payment
wallet
ledger
escrow
transaction settlement

without explicit owner approval.

## EVENTS

Do not create production event producers until OutboxStore,
idempotency persistence and event transport are verified.

## SECURITY

Do not weaken authentication, authorization, RBAC, RLS,
audit logging or secret management.

## SECRETS

Never expose, print, commit or hardcode secrets.

Never place credentials into tests or documentation.

## DUPLICATION

Search before creating:

service
table
API
event
contract
adapter
worker
agent

## PR REQUIREMENTS

Every significant PR must explain:

- problem
- evidence
- source of truth
- owner
- security impact
- DB impact
- event impact
- tests
- rollback
- approvals

## FINAL RULE

If unsure:

STOP.

Report the missing evidence.

Do not guess.
