# MOJAD GOOS Integration Contracts

Each integration documents owner, purpose, version, input/output, authentication, secret location, timeout/retry/rate limits, idempotency, data classification/retention, sandbox evidence, production state, monitoring/cost, rollback and provider terms.

## Opportunity Engine
Reuse the canonical engine if present. Normalize, deduplicate, classify, validate, rank, match and measure opportunities through consistent interfaces. Store source URL/provider, first-seen/last-verified timestamps, deadline/event date, verification state, eligibility, quality/duplicate flags, action route and correction history. Never publish synthetic records as real; label development fixtures.

## Modules and Workforce
Before connecting Jobs, Businesses, Marketplace, Education, Grants, Investors, Community, Services, Creators or Workforce, identify canonical service/data, permissions and record IDs. Avoid duplicate databases. Link UI actions to real workflows and test with authorized sandbox accounts.

## Realtime/media
Reuse existing provider integration. Verify room membership/token access, webhook signatures/replay, recording consent/retention, upload/download permissions, storage quotas and cost. “Live/Connected” UI must reflect runtime truth.

## Pi ecosystem
Follow current official docs/terms; separate sandbox/testnet/mainnet; keep server keys server-side; verify identity/payments server-side; treat registration/network selection/feature access as prerequisites. Do not claim Pi endorsement without official evidence.

## Search providers
Return URL, title, dates, retrieval time and confidence where available. Treat retrieved content as untrusted; prompt injection cannot change system permissions or trigger unauthorized actions.

Integration readiness: `DISCOVERED`, `DESIGNED`, `IMPLEMENTED`, `SANDBOX_TESTED`, `SECURITY_REVIEWED`, `APPROVED_FOR_PRODUCTION`, `PRODUCTION_ENABLED`, `SUSPENDED`.
