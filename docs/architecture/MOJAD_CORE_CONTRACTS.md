# MOJAD GOOS — CORE CONTRACTS

## Status

Phase 2 — Core Platform Contracts

## Core Principle

MOJAD GOOS is an Opportunity Operating System.

All product modules must consume shared MOJAD Core contracts.

No module may create a competing identity, opportunity,
trust, reputation, payment, or event system.

## Source of Truth

MOJAD Core is the canonical domain layer.

Products are consumers of the core.

Examples:

MOJAD Games → consumes Skill, Identity, Achievement and Opportunity contracts.

MOJAD Learning → consumes Skill, Identity and Opportunity contracts.

MOJAD Business → consumes Identity, Trust, Opportunity and Payment contracts.

MOJAD AI → consumes platform contracts through authorized tools.

MOJAD Realtime → provides communication infrastructure but does not own identity.

MOJAD Pi Layer → provides a payment/ecosystem adapter but does not own the economic domain.

## Architecture Rule

UI → Application Services → Domain Contracts → Infrastructure Adapters

Infrastructure must never redefine core business meaning.

## Non-Negotiable Rules

1. No duplicate user identity system.
2. No duplicate opportunity system.
3. No duplicate trust system.
4. No duplicate reputation system.
5. No direct provider dependency inside domain contracts.
6. External providers must be adapters.
7. AI models must be replaceable.
8. Realtime providers must be replaceable.
9. Payment providers must be replaceable.
10. Blockchain providers must be replaceable.
11. Game engines must be replaceable.
12. High-risk AI actions require authorization.
13. Every important state transition must be auditable.
14. Every external event must support idempotency.
15. No production claim without verification evidence.

## Long-Term Compatibility

MOJAD must support:

NEW_AI → adapter
NEW_PAYMENT → adapter
NEW_BLOCKCHAIN → adapter
NEW_IDENTITY_STANDARD → adapter
NEW_GAME_ENGINE → adapter
NEW_REALTIME_PROVIDER → adapter

The MOJAD Core domain must not be rewritten when providers change.
