# MOJAD GOOS — AI RUNTIME READINESS CHECKLIST™ v1.0

**Status:** Release Gate

## Contracts
- [ ] AI Orchestrator verified
- [ ] Provider Adapter verified
- [ ] Model Router verified
- [ ] Provenance verified
- [ ] Agent contract verified
- [ ] Opportunity Adapter verified
- [ ] No duplicate AI authority

## Provider
- [ ] Concrete adapter exists
- [ ] Provider and model documented
- [ ] Endpoint verified
- [ ] Capabilities verified

## Secure Configuration
- [ ] Secure credential mechanism exists
- [ ] Credential valid
- [ ] Environment binding verified
- [ ] Server-side only
- [ ] Not in Git/frontend/logs

**If a critical secure-configuration item is missing: STATUS = BLOCKED.**

## Auth & Authorization
- [ ] Caller identity verified
- [ ] Request authorization verified
- [ ] User-scoped data enforced
- [ ] Agent permissions bounded
- [ ] No self-escalation
- [ ] Sensitive actions require appropriate approval

## Runtime
- [ ] Real provider call succeeds
- [ ] Invalid request handling tested
- [ ] Timeout tested
- [ ] Provider failure tested
- [ ] Rate limits handled
- [ ] Retry/fallback bounded
- [ ] No fake response presented as real

## Provenance
Where available: provider, model, timestamp, request/reference ID, output type, source/evidence references and confidence/quality metadata.

## Opportunity Integration
- [ ] Existing Opportunity Engine identified
- [ ] AI uses approved adapter
- [ ] No second Opportunity Engine
- [ ] Opportunity ownership remains in MOJAD Core

## Security
- [ ] No secrets exposed
- [ ] Private data isolation reviewed
- [ ] Tool permissions reviewed
- [ ] Audit trail where required
- [ ] AI cannot bypass security or execute unauthorized financial/Pi actions

## Validation
- [ ] Existing typecheck passes
- [ ] Existing build passes
- [ ] Relevant tests pass
- [ ] Runtime smoke test completed where applicable
- [ ] Evidence recorded

## Release
- [ ] Docs updated
- [ ] Evidence status recorded
- [ ] Limitations recorded
- [ ] Rollback path recorded
- [ ] Human approval obtained
- [ ] Production verification completed

## Status
**VERIFIED** = required runtime/security evidence exists.  
**PARTIAL** = important evidence incomplete.  
**UNKNOWN** = insufficient evidence.  
**BLOCKED** = required dependency, credential, authorization or security condition missing.

## Golden Rule
**A compiled contract is not a live AI system. A configured provider is not a verified integration.**

Evidence chain: **CONTRACT → CONFIGURATION → CREDENTIAL → AUTHORIZATION → PROVIDER CALL → PROVENANCE → SECURITY → TEST → RUNTIME VERIFICATION → APPROVAL**
