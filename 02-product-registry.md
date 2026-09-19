# MOJAD PRODUCT REGISTRY™ v1.0

Status: DESIGN / FOUNDATION
Purpose: one machine-readable and human-readable catalogue of MOJAD products.

## Product identity
Every product has an immutable `product_id`, name, slug, owner, lifecycle, version and repository reference.

Example:
- `prd_mojad_ai`
- `prd_mojad_jobs`

## Product types
APP, SERVICE, AI_AGENT, AI_MODEL_ADAPTER, API, SDK, PLATFORM, WORKFLOW, GAME, MEDIA_PRODUCT, EDUCATION_PRODUCT, BUSINESS_SERVICE, DATA_SERVICE, INFRASTRUCTURE, INTEGRATION, PLUGIN, MICROSERVICE.

## Categories
AI, Opportunities, Jobs, Business, Marketplace, Investment, Education, Scholarships, Grants, Agriculture, Water, Government, Creators, Media, Games, Communities, Messaging, Realtime, Payments, Pi, Trust, Developer, Analytics, Security, Utilities.

## Lifecycle
IDEA → DESIGN → BUILDING → INTERNAL_TEST → SANDBOX → TESTNET → BETA → APPROVED → PUBLISHED → MONITORING → IMPROVEMENT → DEPRECATED → RETIRED.

## Ownership
Required roles:
- product_owner
- technical_owner
- business_owner
- security_owner
- data_owner
- release_owner

No owner = no production release.

## Environments
LOCAL, DEV, PREVIEW, STAGING, SANDBOX, TESTNET, BETA, PRODUCTION.

Each environment records deployment version, URL, database/provider, last verification and verification status.

## Capability dependencies
Products declare dependencies on shared capabilities such as Identity, Auth, AI, Search, Opportunity Engine, Trust, Knowledge Graph, Messaging, Realtime, Media, Storage, Economy, Payments, Pi, Notifications and Analytics.

## Evidence registry
Each important claim records evidence_id, product_id, claim, evidence type, source, reference, verifier, date, status, confidence and allowed action.

## Release registry
Each release records product, version, commit SHA, environment, test/security status, approval, release time and rollback version.

## Rules
- Unique product_id.
- Owner required.
- Verified claims require evidence.
- No unverified capability may be presented as production-ready.
- No duplicate shared capability without explicit architectural approval.
- Production release requires rollback.
