# MOJAD GOOS — RUNTIME STABILITY & CHANGE SAFETY STANDARD™ v1.0

**Status:** Governance Standard

## Stability Principle
Every change must protect existing MOJAD functionality.

**INSPECT → REUSE → EXTEND → TEST → VERIFY → DOCUMENT → APPROVE → RELEASE**

## Additive-First Rule
Prefer new adapters, interfaces, services, backward-compatible extensions, feature flags and isolated modules. Avoid rewriting core systems, deleting capabilities or breaking contracts.

## No Duplicate Authority
Maintain one authoritative implementation per capability boundary: Opportunity Engine, identity, trust, payments, Pi transactions, AI orchestration and approved realtime boundaries. Multiple providers are allowed; multiple authorities are not.

## Protected Domains
Human approval is required for production-impacting changes to identity, authentication, authorization, RLS, trust/reputation, payments, Pi, private data, migrations, security policy, agent permissions, infrastructure and destructive operations.

## Stop Conditions
STOP and report when ownership is unclear, production state is unknown, a migration is unapproved, secrets are unavailable, a security boundary is unclear, duplicate authority may be created, or a breaking change is unavoidable.

## Evidence Rule
Never call a feature production-ready, verified, live, secure or integrated without the evidence required by its domain.

## Token Discipline
**Search once → Understand → Reuse → Implement smallest safe change → Test → Report → STOP.**

**MOJAD grows by controlled composition, not uncontrolled rebuilding.**
