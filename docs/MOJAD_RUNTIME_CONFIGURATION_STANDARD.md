# MOJAD GOOS — RUNTIME CONFIGURATION & SECRET MANAGEMENT STANDARD™ v1.0

**Status:** Governance Standard

## Core Rule
**CONFIGURATION ≠ SECRET.** Public/non-secret configuration may be versioned. Secrets must remain in an approved secure runtime secret mechanism.

Never commit API keys, private keys, passwords, JWT signing secrets, Pi private credentials, database passwords, provider tokens or webhook signing secrets.

## Runtime Architecture
MOJAD Core → Capability/AI Orchestrator → Adapter/Service → Secure Runtime Configuration → External Provider.

## AI Provider Configuration
Non-secret configuration may include provider_id, provider_type, model, endpoint, capabilities, enabled, priority, environment and timeout/rate-limit policy. The actual credential value must remain outside GitHub source.

## No Credential Invention
If no secure configuration boundary exists: **STOP EXTERNAL EXECUTION.** Do not invent environment bindings, fake credentials, database secret tables, frontend secrets, logged secrets or placeholder-as-real credentials.

## Environment Isolation
LOCAL → DEV → PREVIEW → STAGING → SANDBOX → TESTNET → BETA → PRODUCTION.

Production secrets must not automatically become available to development or preview.

## Provider Neutrality
MOJAD Core → AI Orchestrator → Model Router → Provider Adapter → Provider.

## Production Readiness
A provider is not runtime-ready until secure credential path, environment binding, successful provider call, bounded failures/timeouts, no credential exposure, provenance, tests and human release approval exist.

**No secret in Git. No fake credential. No external execution without a verified secure configuration path.**
