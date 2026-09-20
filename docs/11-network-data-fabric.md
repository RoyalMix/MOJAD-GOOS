# MOJAD NETWORK, DATA FABRIC & REAL-TIME INTELLIGENCE ARCHITECTURE™ v1.0

Status: DESIGN / FOUNDATION

## Purpose
Connect people, applications, databases, APIs, AI agents, Pi ecosystem services, cloud, edge, devices, organizations and external intelligence sources through governed data flows.

## Master flow
SOURCE → CONNECT → INGEST → VERIFY → NORMALIZE → STREAM → STORE → UNDERSTAND → INTELLIGENCE → OPPORTUNITY → ACTION → OUTCOME.

## Data Fabric
Source Registry, Connector Layer, API Gateway, Ingestion, Normalization, Data Quality, Provenance, Knowledge Graph, Search, Operational Data, Analytics, AI, Realtime and Governance.

## Source Registry
Record source identity, owner, authority, access method, license/terms, geography, language, update frequency, freshness target, last verification and status.

## Connector Fabric
Support REST, GraphQL, webhooks, WebSockets, RSS/feeds where permitted, files, database CDC, blockchain RPC, Pi APIs, government/market/weather/research APIs, devices and MCP/agent tools.

Every connector must have authentication, authorization, rate limits, schema validation, retries, timeouts, error handling, provenance, logging, health and cost controls.

## Ingestion
SOURCE → CONNECTOR → INGEST → VALIDATE → NORMALIZE → DEDUPLICATE → ENRICH → PROVENANCE → STORE → INDEX → STREAM.

Unauthorized/private data must not be ingested.

## Entity resolution
Resolve entities using identifiers, names, domains, location, ownership, relationships and evidence. Do not merge on name similarity alone.

## Event Fabric
Domain events connect capabilities to analytics, notifications, AI, recommendations, Trust, Knowledge Graph, Opportunity Engine and monitoring.

Events do not become a second source of truth.

## Outbox
Use an outbox pattern only where the audited architecture requires it. Do not create a second EventBus without first auditing the existing implementation.

## Realtime
Separate:
- communication realtime (chat/voice/video/live)
- data realtime (opportunity/payment/notification changes)
- intelligence realtime (anomaly/risk/opportunity alerts)

Reuse existing verified realtime implementations before rebuilding.

## Streams
HOT: realtime communication, urgent opportunities, security.
WARM: recommendations, business/market changes.
COLD: historical analytics and archives.
KNOWLEDGE: verified facts and relationships.
EVIDENCE: claims, sources and verification.
MEDIA: video/audio/images/documents.

## Edge and offline
Support controlled local queues and synchronization where useful. Offline operation must never bypass authorization, payment or identity policies.

## Conflict resolution
When sources disagree, evaluate authority, freshness, provenance, date and corroboration. Use VERIFIED, LIKELY, CONFLICTING, OUTDATED or UNKNOWN states.

## Freshness
Track source update, ingestion, validation, indexing and recommendation refresh latency.

## AI data access
USER → AI → TOOL REQUEST → ACCESS GATEWAY → AUTHORIZATION → MINIMUM DATA → TOOL → RESULT → EVIDENCE → RESPONSE.

Agents never receive unrestricted database access by default.

## Privacy zones
PUBLIC, USER_PRIVATE, SENSITIVE, CRITICAL. Access increases in strictness.

## Data lineage
AI/derived intelligence must be traceable to source data, transformations, timestamps and evidence.

## Failure model
A failed source should degrade confidence/freshness rather than cause fabricated information.

## Provider neutrality
MOJAD contracts sit above provider adapters. Providers may change without rewriting product logic.

## Pi
Pi is integrated through a governed adapter. Official protocol information, market information and community claims remain separate evidence classes.

## Definition of Done
Source/connector contracts, ingestion, normalization, provenance, events, streams, realtime, synchronization, freshness, conflict handling, Knowledge Graph, search, AI access controls, privacy, lineage, observability, security, recovery, provider adapters and human approval must be addressed before production.
