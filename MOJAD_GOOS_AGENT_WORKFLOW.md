# MOJAD GOOS AGENT WORKFLOW
## Version 1.0

---

## STAGE 0 — REQUEST CLASSIFICATION

Classify the request:

A Documentation
B Testing
C Design
D Application Code
E Database
F Security
G Payment
H Infrastructure
I Production

Risk:

LOW
MEDIUM
HIGH
CRITICAL

---

## STAGE 1 — AUDIT

Search the repository.

Inspect:

- existing services
- existing contracts
- schemas
- APIs
- tests
- events
- documentation
- configuration
- CI/CD
- ownership
- deployment

Do not implement yet.

---

## STAGE 2 — EVIDENCE

Record exact paths.

Example:

VERIFIED:
`src/core/events/event.publisher.ts`

NOT FOUND:
`prisma/migrations/`

Do not use vague statements.

---

## STAGE 3 — VERIFY

Determine whether the evidence is:

VERIFIED
PARTIAL
NOT FOUND
NOT VERIFIED

If evidence conflicts:

STOP and investigate.

---

## STAGE 4 — SOURCE-OF-TRUTH

Create or update:

MOJAD_GOOS_SOURCE_OF_TRUTH.md

Record:

domain
service
table
read
write
owner
security
events
tests

---

## STAGE 5 — DESIGN

Produce:

- architecture
- interfaces
- contracts
- data flow
- security model
- event model
- failure handling
- observability
- rollback

For restricted changes:

DESIGN DRAFT — DO NOT APPLY

---

## STAGE 6 — APPROVAL

Required for sensitive changes:

DB owner
Security owner
Payment owner
Service owner
Infrastructure owner
Legal/compliance where applicable

No approval:

BLOCKED

---

## STAGE 7 — IMPLEMENT

Only implement approved scope.

Do not expand scope silently.

Do not refactor unrelated systems.

Do not create duplicate systems.

---

## STAGE 8 — TEST

Run appropriate:

unit
integration
contract
security
regression
migration
event
authorization
RLS

tests.

---

## STAGE 9 — REVIEW

Review:

correctness
security
performance
compatibility
observability
rollback
duplication
ownership

---

## STAGE 10 — CI

All required safety gates must pass.

No bypass.

---

## STAGE 11 — HUMAN REVIEW

Human reviewer confirms:

- scope
- evidence
- risk
- tests
- approvals
- rollback

---

## STAGE 12 — DEPLOY

Deployment only after authorized approval.

Production mutation is outside default agent authority.

---

# FAILURE RULE

If any required stage cannot be completed:

STOP.

STATUS = BLOCKED.
