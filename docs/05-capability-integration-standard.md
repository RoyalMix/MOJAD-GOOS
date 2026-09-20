# MOJAD CAPABILITY & INTEGRATION STANDARD™ v1.0

Status: DESIGN / FOUNDATION

## Core rule
ONE CAPABILITY → MANY PRODUCTS → ONE AUTHORITATIVE IMPLEMENTATION.

## Shared capabilities
Identity, Authentication, Authorization, AI, Opportunity Engine, Search, Recommendations, Trust, Reputation, Knowledge Graph, Messaging, Realtime, Media, Storage, Economy, Payments, Pi, Notifications, Analytics, Events, Communities, Marketplace, Learning, Creator, Games, Government, Agriculture, Water, Developer Platform, Security, Moderation, Growth & Rewards.

## Architecture
Product → Capability Contract → Capability API/SDK → Service → Provider Adapter.

## Provider neutrality
Provider-specific code belongs behind adapters. Products depend on MOJAD contracts, not directly on strategic providers where avoidable.

## Integration types
Internal capability, provider, API, SDK, event, webhook, MCP/agent tool.

## Reuse-before-rebuild audit
Before creating a capability:
1. Search the repository.
2. Search known runtime systems.
3. Identify the owner.
4. Verify implementation.
5. Verify contract.
6. Verify production usage.
7. Reuse or adapt.
8. Only then design a new implementation if a real gap remains.

## Data ownership
Every capability declares source of truth, data classification, data flow, permissions, retention and failure mode.

## Health
Track availability, latency, errors, provider health and evidence status.

## Rule
CAPABILITY FIRST. PRODUCT SECOND. PROVIDER LAST.
