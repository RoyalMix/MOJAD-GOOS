# MOJAD ENVIRONMENT & TESTING STANDARD™ v1.0

Status: DESIGN / FOUNDATION

## Environment chain
LOCAL → DEV → PREVIEW → STAGING → SANDBOX → TESTNET → BETA → PRODUCTION → MONITOR.

## Isolation
Each environment must have controlled configuration, credentials, data boundaries, provider access and deployment identity.

## Testing layers
- Unit
- Integration
- Database
- RLS
- Authentication
- Authorization
- Security
- API
- AI
- Pi
- Payments
- Realtime
- Media
- Opportunity Engine
- Trust
- Knowledge Graph
- Performance
- Accessibility
- UX
- E2E
- Regression

## AI testing
Test grounding, hallucination, tool authorization, memory isolation, prompt injection resistance, provider failure, cost limits and task success.

## Financial/Pi testing
Use sandbox/testnet where available. Never use fake production balances or transactions to simulate success.

## CI gates
Build, typecheck, tests, security checks, migration safety, contract validation and evidence checks must pass before release.

## Evidence gate
UNKNOWN → STOP.
BLOCKED → STOP.
BASELINE-REPORTED → NOT VERIFIED.
Production-ready requires evidence.

## Database migration
Inspect actual production schema first. Compare, assess dependencies/RLS/data risk, test rollback/recovery, obtain approval, then migrate.

## Release
Every release has a commit SHA, test evidence, security review, approval and rollback version.

## Incident response
Detect → contain → investigate → preserve evidence → recover → verify → learn.
