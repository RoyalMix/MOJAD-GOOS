# MOJAD GOOS — SOURCE OF TRUTH

## Purpose

This document defines the authoritative ownership model for MOJAD GOOS.

## Core Rule

One MOJAD.
One governance model.
One architectural authority.
One canonical code source.
Many workers.
Many providers.
No duplicate authoritative systems.

## Authority

### GitHub

GitHub is the canonical source of truth for:

- source code
- contracts
- architecture
- database migrations
- tests
- CI/CD
- governance
- security standards
- product specifications
- capability specifications
- evidence records
- release records
- technical documentation

### Production Systems

Production systems such as Supabase, LiveKit, Pi services, AI providers,
storage providers and deployment platforms are runtime systems/providers.

They are not allowed to redefine MOJAD architecture independently.

### AI/Development Workers

The following are workers:

- ChatGPT
- GitHub Copilot
- Lovable
- Replit
- Bolt
- Pi AI Studio
- Claude
- Kimi
- other AI/development tools

Workers may propose, implement and test changes.

Workers do not become architectural authority.

## Human Authority

Human approval is required before:

- production changes
- database migrations
- payment changes
- Pi financial operations
- identity changes
- security changes
- deletion
- major architecture changes
- provider replacement
- source-of-truth changes

## Non-Negotiable Rules

1. Reuse before rebuild.
2. Audit before implementation.
3. Evidence before verification claims.
4. No fake data.
5. No fake Pi balances or transactions.
6. No production mutation without approval.
7. No duplicate authoritative systems.
8. No secrets in source code.
9. No migration from assumptions.
10. Unknown means stop and investigate.
