# MOJAD GOOS ENGINEERING DISCIPLINE

MOJAD GOOS is built as long-term global infrastructure, not as a collection of disconnected features.

## NON-NEGOTIABLE LAWS

1. No feature without a domain.
2. No domain without a contract.
3. No contract without security requirements.
4. No security requirement without tests.
5. No production claim without verification evidence.
6. No duplicate identity system.
7. No duplicate opportunity engine.
8. No duplicate payment ledger.
9. No client-side authorization for privileged actions.
10. Secrets must never enter client bundles, logs, commits, or public configuration.
11. Existing working systems must not be rebuilt unnecessarily.
12. Database migrations must be additive and reversible whenever possible.
13. APIs must be versioned.
14. Events must be idempotent.
15. External providers must be accessed through adapters.
16. MOJAD core must not depend permanently on one AI model, blockchain, payment rail, realtime provider, or game engine.
17. High-risk AI actions require appropriate authorization and auditability.
18. Child-facing systems require stronger safety controls than adult systems.
19. Every major system must degrade gracefully when external providers fail.
20. Every "DONE" status requires automated and/or real-world verification evidence.

## SOURCE OF TRUTH

The canonical architecture and contracts live in this repository.

Lovable, Replit, Pi App Studio, LiveKit, external AI providers and other tools must integrate with these contracts rather than independently creating competing systems.

## ARCHITECTURAL PRINCIPLE

BUILD ON FOUNDATIONS.

Never solve a temporary product problem by creating permanent architectural debt.

MOJAD must be able to add:

- new AI models
- new payment providers
- new blockchains
- new identity standards
- new realtime providers
- new game engines
- new devices
- new APIs

without rebuilding MOJAD from zero.
