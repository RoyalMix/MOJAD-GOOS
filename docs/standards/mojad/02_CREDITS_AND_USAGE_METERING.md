# MOJAD Credits & Usage Metering Contract

**Status: Proposed.** Credits are internal usage units, not a blockchain token or a Pi denomination.

## Principles
Credits are non-transferable and not redeemable for cash unless a separately reviewed product changes this policy. Never use `π` as their symbol. Server-authoritative balances; append-only audit ledger; corrections through compensating entries; never trust client-submitted balances/prices.

## Suggested concepts (reuse existing equivalent tables/services)
- `credit_account`: owner, status, unit/pricing version.
- `credit_ledger_entry`: immutable ID, account, type, signed amount, reason, reference, idempotency key, actor, timestamp.
- `usage_quote`: task/provider, estimated units/cost, pricing version, expiry/status.
- `usage_reservation`: reserved amount, task/quote, status, expiry, idempotency key.
- `usage_event`: task ID, measured usage, provider, status, safe evidence.
- `credit_package`: included units, eligibility, payment-rail pricing, terms version.
- `refund_or_adjustment`: reason, original entry, approver, compensating entry.

## Ledger entry types
`PURCHASE`, `GRANT`, `RESERVE`, `SETTLE`, `RELEASE`, `REFUND`, `EXPIRE`, `ADMIN_ADJUSTMENT`, `REVERSAL`. Grants require a legitimate policy/funding source.

## Atomic task flow
Authenticate → authorize → server-side quote → disclose estimate → confirm material charge → atomically reserve with idempotency key → start provider task → record provider ID and actual usage → settle or release/refund → issue receipt → reconcile. Unknown provider outcomes enter `PENDING_RECONCILIATION`; never double-charge or claim success prematurely.

Task states: `QUOTED`, `AWAITING_CONFIRMATION`, `RESERVED`, `QUEUED`, `RUNNING`, `SUCCEEDED`, `FAILED`, `CANCELLED`, `PENDING_RECONCILIATION`, `REFUND_PENDING`, `REFUNDED`.

Reservation states: `ACTIVE`, `SETTLED`, `RELEASED`, `EXPIRED`, `DISPUTED`.

## Invariants and tests
Balance equals valid ledger entries; same idempotency key cannot duplicate purchase/reserve/settlement/refund; failed tasks follow policy; users cannot access others' accounts; admin adjustments are permissioned/audited; pricing version is recorded; no negative balance unless an approved policy allows it; provider cost differs from customer charge. Test concurrency, quote expiry, failures, timeout recovery, isolation and reconciliation.
