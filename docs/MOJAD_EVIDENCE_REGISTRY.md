# MOJAD GOOS — EVIDENCE REGISTRY
Version: 1.0
Status: Foundation

## Purpose
Prevent MOJAD from confusing plans, reports, AI output, code, provider claims and verified runtime behavior.

## Evidence statuses
VERIFIED, LIKELY, REPORTED, CONFLICTING, OUTDATED, UNKNOWN, BLOCKED

## Evidence types
VERIFIED-CODE, VERIFIED-DATABASE, VERIFIED-PROVIDER, VERIFIED-RUNTIME, BASELINE-REPORTED, PARTIAL, UNKNOWN, BLOCKED

## Record
Evidence ID:
Domain:
Claim:
Evidence Type:
Source:
Reference:
Authority Level:
Observed Date:
Verified By:
Status:
Confidence:
Freshness:
Conflicts:
Owner:
Dependencies:
Allowed Action:
Notes:

## Source hierarchy
1. Primary official source
2. High-quality independent source
3. Community/ecosystem source
4. Unverified source
5. Unknown source

## Rules
1. AI-generated text is not evidence by itself.
2. A GitHub document proves the document exists, not production runtime.
3. A Prisma schema is not proof of production database state.
4. A provider dashboard is not automatically proof that MOJAD uses the provider correctly.
5. Market price is not protocol truth.
6. Absence from GitHub is not proof of absence elsewhere.
7. Baseline-reported claims remain baseline-reported until directly verified.
8. Important financial, identity, security and Pi claims require strong evidence.
9. Conflicting evidence must be preserved and investigated.
10. Freshness matters.

## Allowed-action policy
UNKNOWN → STOP implementation that depends on the unknown.
BLOCKED → Resolve blocker or choose an approved alternative.
REPORTED → Audit before production reliance.
VERIFIED → May support only the action permitted by the evidence scope.
