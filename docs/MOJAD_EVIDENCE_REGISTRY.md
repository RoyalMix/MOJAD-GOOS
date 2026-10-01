# MOJAD GOOS — EVIDENCE REGISTRY™

**Version:** 1.0

## Evidence States
| State | Meaning |
|---|---|
| VERIFIED-CODE | Implementation directly inspected |
| VERIFIED-DATABASE | Database structure/policy directly inspected |
| VERIFIED-PROVIDER | Provider capability/configuration directly verified |
| VERIFIED-RUNTIME | Live behavior directly verified |
| BASELINE-REPORTED | Reported but not directly verified |
| PARTIAL | Some evidence exists |
| UNKNOWN | Insufficient evidence |
| BLOCKED | Verification cannot proceed |

## Evidence Record
Every important claim should record:
- Evidence ID
- Domain
- Claim
- Evidence type
- Source
- File/reference
- Verified by/date
- Status
- Confidence
- Owner
- Dependencies
- Allowed action
- Freshness/expiry where relevant
- Notes/conflicts

## Non-Negotiable Rules
**Not found in GitHub does not mean absent in production.**  
**Baseline-reported does not mean verified working.**  
**Documentation does not equal runtime evidence.**  
**Provider documentation does not equal successful integration.**

## Initial Evidence Priorities
1. Production schema/database
2. RLS policies
3. Auth configuration
4. Deployed functions
5. AI provider configuration
6. Realtime/LiveKit runtime
7. Payment/Pi runtime/provider evidence
8. Event/outbox architecture
9. Storage/object access
10. Deployment/CI/CD topology
11. Automated tests
12. Security findings and accepted risks

## Lifecycle
**DISCOVER → CAPTURE → VERIFY → CLASSIFY → RECORD → REFRESH → REVERIFY**

**Truth principle: Evidence defines reality. Documentation defines intent.**
