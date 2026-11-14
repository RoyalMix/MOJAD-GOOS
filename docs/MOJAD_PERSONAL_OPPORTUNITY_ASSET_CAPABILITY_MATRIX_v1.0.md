# MOJAD GOOS — Personal Opportunity Asset Capability Matrix v1.0

**Document ID:** MOJAD-AUDIT-POA-MATRIX-001  
**Version:** 1.0  
**Status:** Read-only audit snapshot — not an implementation approval  
**Repository:** `RoyalMix/MOJAD-GOOS`  
**Branch examined:** `main`  
**Commit examined:** `eaa067798b0d97ebefc449d550ed52cb45d952e8`  
**Audit date:** 2026-11-14

> Statuses describe the evidence inspected in this audit. “Documented” does not mean implemented. “Not verified” does not mean definitively absent. Re-run this matrix against the current repository HEAD before relying on it for an implementation decision.

## 1. Status definitions

- **VERIFIED IMPLEMENTED:** executable implementation and relevant tests/consumers were inspected and support the claim.
- **PARTIAL:** some implementation evidence exists, but important behavior, integration, security, or tests are missing/unverified.
- **DOCUMENTED ONLY:** architecture, requirements, schema notes, or route outlines exist; executable behavior is not established.
- **PLACEHOLDER / STUB:** minimal UI or service code exists without the required business behavior.
- **NOT VERIFIED:** evidence is insufficient to make a reliable implementation claim.
- **NOT FOUND IN REGISTER:** the repository's Source of Truth Register explicitly records the capability as not found; this is an audit lead, not proof that no related code exists anywhere.
- **BLOCKER:** a security, integrity, or governance issue that must be resolved before dependent implementation.

## 2. Capability matrix

| Domain | Evidence inspected | Finding | Status | Next verification |
|---|---|---|---|---|
| Opportunity Profile concept | `docs/MOJAD_GOOS_MASTER_README.md` | Profile concept includes identity, trust, skills, interests, goals, location, language, education, experience, availability, portfolio, reputation, preferences, opportunity history, and learning progress | DOCUMENTED ONLY | Map each field to authoritative schema and UI/API consumer |
| Talent Passport | `docs/TALENT-PASSPORT.md` | Passport concept includes profile, verification, skills, languages, education, experience, portfolio, and trust | DOCUMENTED ONLY | Verify route, components, data model, authorization, tests |
| Profile UI | `apps/web/app/profile/page.tsx` | Minimal page renders MOJAD Profile, MOJAD ID, Trust Score, Opportunity Score labels | PLACEHOLDER / STUB | Identify actual app entrypoint and route consumers; test signed-in/out |
| Profile service | `services/profile-service/profile.service.ts` | `getProfile(userId)` returns an object containing only `userId` | PLACEHOLDER / STUB | Trace imports, persistence, validation, authorization, tests |
| Pi profile sync | `services/pi-auth-service/profile.service.ts` | File content appears to be a textual outline mentioning sync Pi profile, username, wallet info; not a verified executable service | DOCUMENTED ONLY / NOT VERIFIED | Inspect real Pi auth flow, official SDK version, server validation, scopes, tests |
| User schema | `database/schemas/user.schema.md` | Markdown schema note lists id, username, email, pi_uid, wallet_address, country, city, profile_photo, reputation_score, trust_score, created_at | DOCUMENTED ONLY | Reconcile with authoritative ORM/database schema and migrations |
| Identity separation | Identity and Pi integration documents; user schema note | Conceptual identity components exist; separation and enforcement not established by this evidence | PARTIAL / NOT VERIFIED | Verify stable MOJAD ID, provider UID mapping, link/unlink, account recovery |
| Skills | `docs/TALENT-PASSPORT.md`, profile/skills route outlines, `User.skills` reference in Source of Truth Register | Skills are represented in documentation and route/schema references; validation workflow not established | PARTIAL | Inspect authoritative schema, CRUD, evidence provenance, permissions, tests |
| Portfolio | Talent Passport and profile route outlines | Portfolio concept and route outline exist; end-to-end user workflows not established | DOCUMENTED ONLY | Verify upload, rights, storage, moderation, access control, export/delete |
| Qualifications | Talent Passport documentation | Education/qualification fields are described; issuer verification is not established | DOCUMENTED ONLY | Verify credential issuer, status, expiry, evidence, appeal |
| Trust architecture | `governance/TRUST_PRIVACY_ARCHITECTURE.md` | Detailed privacy principles, data classification, deny-by-default, least privilege, purpose limitation, and minimal disclosure are documented | DOCUMENTED ONLY | Map policies to middleware, RLS/ACL, API tests, audit logs |
| Trust service | `api/trust/*` path outline and trust docs | Verify, score, reputation, fraud, risk, analytics path names appear; executable behavior not verified | NOT VERIFIED | Inspect files, callers, tests, model inputs, explainability |
| Reputation schema | `reputation.schema.md` | Reputation fields include trust, activity, success, creator, and investor scores; duplicated model text appears in same file | PARTIAL / DOCUMENTATION INTEGRITY ISSUE | Identify canonical schema, score ownership, provenance, dispute, recalculation |
| Opportunity Engine | Opportunity engine docs/contracts and Source of Truth Register | Engine domain is documented; authoritative runtime wiring and profile integration not established | PARTIAL | Trace real imports, database adapters, route consumers, tests, telemetry |
| Opportunity matching | `api/opportunity/*` and `api/opportunity-feed/*` route outlines | Discovery, matching, ranking, recommendation, and feed concepts appear; runtime status unverified | NOT VERIFIED | Trace executable handlers, authorization, data source, ranking tests |
| Opportunity Graph | Source of Truth Register records Graph `NOT FOUND`; strategic docs discuss graph | Concept exists in strategy material; authoritative graph implementation not established | NOT FOUND IN REGISTER / NOT VERIFIED | Search executable code, schemas, relationship ownership, event provenance |
| Creator economy | `docs/CREATOR-ECONOMY.md` | Shorts, streams, referrals, sponsorships, and Pi rewards are listed | DOCUMENTED ONLY | Verify creator product flows, pricing, entitlements, ledger, payment settlement |
| Audience analytics | No verified API capability established in inspected evidence | Do not assume Pi provides follower/view/flower/private analytics | NOT VERIFIED | Identify MOJAD first-party analytics and any user-authorized provider adapters |
| Consent | Governance privacy architecture | Consent and purpose-limitation principles are described; operational consent ledger/workflows not verified | DOCUMENTED ONLY | Inspect consent records, scopes, revoke flow, audit, tests |
| Privacy enforcement | Trust privacy architecture and Source of Truth Register | Privacy principles exist; enforcement across all APIs, DB access, logs, search, and AI is not established | PARTIAL / BLOCKER FOR SENSITIVE DATA | Verify field-level access, deny-by-default, RLS/ACL, penetration tests |
| RLS / row-level isolation | `MOJAD_GOOS_SOURCE_OF_TRUTH.md` records RLS `NOT FOUND` | Register does not identify verified RLS implementation | BLOCKER / NOT VERIFIED | Inspect database policies and test cross-user access |
| Payments / creator settlement | Source of Truth Register marks Payments and Wallet partial/high risk | No evidence in this audit proves creator earnings settlement or payment-backed fulfillment | PARTIAL / HIGH RISK | Verify server-side provider validation, ledger, idempotency, refunds, reconciliation |
| AI personal agents | AI architecture documents | Agent capabilities and orchestration are described; POA agent implementation not established | DOCUMENTED ONLY | Inspect tool registry, policy engine, permissions, logs, approval gates |
| API surface | Route outlines and contracts | Proposed/outlined routes exist in repository tree; actual handlers and contracts may be incomplete | NOT VERIFIED | Map route files to executable handlers, schemas, auth, consumers, tests |

## 3. Key repository evidence

The following files were inspected or identified as audit evidence:

- `docs/MOJAD_GOOS_MASTER_README.md`
- `docs/TALENT-PASSPORT.md`
- `docs/engineering/MOJAD_PROFILE_RULES.md`
- `apps/web/app/profile/page.tsx`
- `services/profile-service/profile.service.ts`
- `services/pi-auth-service/profile.service.ts`
- `database/schemas/user.schema.md`
- `reputation.schema.md`
- `docs/CREATOR-ECONOMY.md`
- `governance/TRUST_PRIVACY_ARCHITECTURE.md`
- `MOJAD_GOOS_SOURCE_OF_TRUTH.md`
- `docs/standards/mojad/17_MOJAD_AI_STUDIO_SECURITY_TRUST_ARCHITECTURE.md`
- `docs/standards/mojad/18_MOJAD_AI_STUDIO_CAPABILITY_MATRIX_AND_INTEGRATION_BLUEPRINT.md`
- `docs/standards/mojad/19_MOJAD_PI_ECOSYSTEM_INTEGRATION_STANDARD-2.md`
- `docs/standards/mojad/20_MOJAD_HYBRID_AI_ORCHESTRATION_STANDARD-3.md`

## 4. Reconciliation conclusions

1. MOJAD already has Profile, Talent Passport, Identity, Trust, Reputation, Opportunity, and Creator Economy concepts. Do not create parallel systems before mapping them.
2. The minimal Profile UI and ProfileService inspected do not establish a functioning Personal Opportunity Asset.
3. The repository's own Source of Truth Register marks several critical domains PARTIAL, NOT VERIFIED, or NOT FOUND. Those statuses must not be silently upgraded.
4. Trust/privacy principles are documented, but enforcement must be proven in database policies, server handlers, middleware, tests, and operational controls.
5. Creator monetization must not be treated as live until authoritative payment confirmation, entitlement/fulfillment, refund, and reconciliation are verified.
6. Pi authentication must not be confused with professional qualification or trust verification.
7. Pi APIs must not be assumed to provide followers, views, flowers, private analytics, escrow, or fiat conversion without current official evidence.
8. Repository path integrity and documentation naming problems are separate blockers to broad AI-assisted writes.

## 5. Required next audit actions

- Re-fetch current `main` HEAD and confirm whether it still matches the audited commit.
- Inspect the real ORM schema, migrations, API route handlers, middleware, and tests.
- Trace each profile/identity/trust/opportunity service to actual importers and runtime consumers.
- Verify authorization and row-level isolation with negative cross-user tests.
- Reconcile the Source of Truth Register with evidence; do not change status without proof.
- Record findings, file paths, commit SHAs, test commands, and test outputs.
- Only then produce an implementation plan.

## 6. Explicit non-authorization

This matrix is an audit artifact only. It does not authorize:
- schema changes or migrations;
- code, UI, API, payment, or application changes;
- provider integration or production configuration;
- renaming, moving, or deleting existing files;
- merging or publishing;
- treating any documented or placeholder capability as production-ready.
