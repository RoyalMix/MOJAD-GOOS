# MOJAD GOOS — Personal Opportunity Asset & Profile Economy Strategy v1.0

**Document ID:** MOJAD-STRATEGY-POA-001  
**Version:** 1.0  
**Status:** Proposed Strategy — Pending Governance Review  
**Owner:** MOJAD GOOS Governance (ownership assignment requires approval)  
**Repository:** `RoyalMix/MOJAD-GOOS`  
**Proposed canonical path:** `docs/strategy/MOJAD_PERSONAL_OPPORTUNITY_ASSET_PROFILE_ECONOMY_STRATEGY_v1.0.md`  
**Classification:** Strategic / Architecture Guidance  
**Last prepared:** 2026-11-14

> This document defines a proposed product and architecture direction. It does not assert that the described capabilities are implemented, production-ready, legally approved, or available through Pi Network APIs.

---

## 1. Executive vision

MOJAD GOOS will evolve the conventional user profile into a user-controlled **Personal Opportunity Asset (POA)™**: a living, permissioned representation of a person's identity, capabilities, evidence, work, relationships, reputation, interests, audience, and opportunity outcomes.

The profile must do more than display a name, biography, followers, views, or badges. It should help a person demonstrate what they can do, establish why others can rely on that evidence, discover relevant opportunities, build trusted relationships, and convert genuine value into measurable outcomes.

**Strategic identity:** MOJAD GOOS is the *Opportunity Intelligence & Opportunity Economy Orchestration Layer™*.

**Core proposition:** turn personal capability and trusted evidence into discoverable, actionable opportunity—while keeping the individual in control of their data and permissions.

## 2. Strategic principles

1. **User ownership and control:** the person controls profile visibility, consent, sharing, correction, export, and deletion, subject to lawful retention requirements.
2. **Evidence before claims:** skills, qualifications, achievements, reviews, and completed work must carry provenance and a verification status.
3. **Popularity is not trust:** followers, views, likes, flowers, and activity are audience signals, not proof of competence, integrity, or income.
4. **Outcomes over vanity metrics:** prioritize qualified introductions, completed projects, hires, sales, learning outcomes, and verified collaborations.
5. **Pi-native, not Pi-dependent:** support Pi where appropriate while preserving access for non-Pi users and other compliant payment or identity providers.
6. **AI-tool-agnostic:** orchestrate approved AI models behind MOJAD policies, permissions, auditability, and human approval gates.
7. **Privacy by design:** collect only necessary data; separate public profile data from private and highly restricted evidence.
8. **Security by default:** deny access unless a specific actor, purpose, resource, scope, and action are authorized.
9. **Composable architecture:** reuse existing identity, opportunity, trust, payment, analytics, and profile components after verification; do not duplicate them.
10. **No invented capability:** documentation, a route name, a schema draft, or a placeholder is not proof of a working production feature.

## 3. Definitions

- **MOJAD Identity:** the platform's own account identity and stable internal identifier.
- **External Identity:** an identity assertion from Pi or another provider. It is linked only after server-side validation and explicit user consent.
- **Personal Opportunity Asset (POA):** the user's structured, permissioned opportunity profile and its evidence, relationships, activity, and outcomes.
- **Evidence:** a source-backed item supporting a claim, such as a credential, portfolio artifact, employer confirmation, transaction, project record, or authorized review.
- **Trust signal:** a limited conclusion derived from appropriately validated evidence; it is not a substitute for the evidence itself.
- **Reputation:** contextual, explainable indicators of reliability and outcomes, with provenance, dispute, correction, and appeal mechanisms.
- **Audience:** people who follow, view, subscribe to, or engage with content. Audience size is not equivalent to trust or economic value.
- **Opportunity outcome:** a verifiable result such as an interview, hire, contract, sale, completed service, funded project, qualification, or paid collaboration.

## 4. Personal Opportunity Asset model

The POA is composed of independently permissioned domains:

### 4.1 Identity and profile
- MOJAD user ID and public handle
- Display name, biography, avatar, languages, location at user-selected precision
- Contact and availability preferences
- External identity links with provider, scope, verification timestamp, and revocation state

### 4.2 Skills and qualifications
- Skills with proficiency level, context, evidence, and last-reviewed date
- Education, certificates, licenses, and qualifications
- Work history, volunteering, projects, and domain experience
- Verification issuer, verification method, expiry, and status

### 4.3 Portfolio and achievements
- Projects, work samples, publications, products, services, and creative works
- Role performed, collaborators, dates, and outcome
- Evidence provenance, ownership/licensing declaration, and visibility
- Achievement claims with review and dispute state

### 4.4 Trust and reputation
- Verified identity indicators
- Evidence-backed skills and credentials
- Completed transactions and projects
- Contextual reviews from eligible counterparties
- Disputes, moderation outcomes, appeals, and corrections
- Separate dimensions for verification, trust, reputation, and popularity

### 4.5 Goals and opportunity preferences
- Career, business, learning, funding, and creator goals
- Preferred opportunity categories, geography, language, schedule, and work mode
- Eligibility information only where necessary and consented
- User controls to pause, hide, or revise matching preferences

### 4.6 Audience and content
- Content published by the user and its ownership/rights metadata
- First-party MOJAD engagement analytics where implemented
- Authorized external analytics only where the provider supports it and the user grants scoped access
- Clear separation of reach, engagement, conversion, trust, and earnings

### 4.7 Relationships and outcomes
- Professional connections and collaboration history
- Introductions, applications, interviews, contracts, sales, and completed work
- Outcome evidence and counterparty confirmation
- Consent and visibility rules for each relationship and outcome

## 5. Identity architecture

MOJAD Identity and Pi identity must remain distinct.

- MOJAD assigns and controls its own stable internal user identifier.
- Pi authentication may establish that a user controls a provider identity, only after the documented server-side verification flow succeeds.
- Store only the minimum external identifiers and attributes required for the approved purpose.
- Do not use a Pi username as the MOJAD primary key.
- Do not treat successful Pi authentication as proof of professional skill, legal identity, qualifications, trustworthiness, or business legitimacy.
- External identity linking and unlinking require explicit user action, secure re-authentication where appropriate, and an audit event.
- Non-Pi onboarding must remain supported.

Any Pi integration must be reconciled against current official Pi developer documentation before implementation. Do not assume access to follower lists, view counts, flowers, private analytics, escrow, fiat conversion, or other undocumented capabilities.

## 6. Trust, verification, and reputation

MOJAD must keep these concepts separate:

| Dimension | What it means | What it does not prove |
|---|---|---|
| Identity verification | A defined identity check succeeded | Skills, honesty, or future performance |
| Qualification verification | An issuer or approved method validates a credential | All-round competence |
| Skill evidence | A work sample, assessment, or trusted attestation supports a skill | Guaranteed performance in every context |
| Trust signal | A contextual, evidence-derived indicator | Unlimited trust or unrestricted permissions |
| Reputation | A history of relevant outcomes and eligible feedback | Popularity or moral worth |
| Popularity | Audience/reach/engagement measures | Trust, quality, income, or expertise |

Requirements:
- Every material score must have a documented definition, inputs, owner, version, and explanation.
- Scores must be contextual; avoid a single universal score that hides important differences.
- Do not automatically increase trust from followers, views, likes, flowers, referrals, or paid promotion.
- Prevent fake reviews, bot activity, collusion, purchased engagement, duplicate accounts, and fabricated evidence.
- Provide dispute, correction, appeal, and human review paths.
- Do not expose private evidence when a minimal verified indicator is sufficient.
- Never allow a reputation score to silently become an authorization decision.

## 7. Audience-to-Value Engine™

The proposed **MOJAD Audience-to-Value Engine™** helps users turn legitimate audience relationships and useful content into real opportunities.

Potential flows:
1. Content discovery → relevant audience → meaningful engagement.
2. Audience interest → service/product/course discovery.
3. Qualified inquiry → consented introduction → proposal or transaction.
4. Collaboration request → agreement by the parties → completed work.
5. Verified outcome → authorized review/evidence → contextual reputation update.

Potential monetization channels:
- Professional services and bookings
- Digital products and courses
- Creator subscriptions and memberships
- Sponsorships and advertising
- Licensing and content partnerships
- Referrals and commissions with transparent terms
- Paid collaborations and marketplace sales

Controls:
- No guaranteed earnings claims.
- No payment or reward without an authoritative, confirmed funding/settlement event.
- Clearly disclose fees, commissions, refund terms, eligibility, and sponsor relationships.
- Rewards must be backed by a real approved budget, revenue, or treasury allocation.
- Detect invalid traffic, self-dealing, fraud, and manipulated conversion events.
- Respect applicable consumer, tax, advertising, employment, financial, and data-protection laws.

## 8. AI agent architecture

Proposed agents (not an assertion of implementation):
- **Personal Opportunity Agent:** profile completeness, opportunity discovery, introductions, and next steps.
- **Career Agent:** skills evidence, CV/portfolio preparation, job matching, and application support.
- **Business Growth Agent:** business profile, customer discovery, service leads, and partnership support.
- **Creator Growth Agent:** content insights, audience quality, collaborations, and monetization planning.
- **Learning Agent:** skill gaps, courses, scholarships, and learning plans.
- **Investor/Fundraising Agent:** relevant investor/funder discovery and pitch preparation.
- **Profile Intelligence Agent:** profile quality, stale data, missing evidence, and privacy review.

Mandatory agent controls:
- Least-privilege, purpose-bound, time-limited permissions.
- User-visible explanation of data used and action proposed.
- Audit logs for reads, writes, tool calls, and consequential recommendations.
- Human approval before publishing, contacting third parties, spending money, changing identity or privacy settings, signing agreements, or taking irreversible actions.
- No autonomous money transfers, authoritative identity changes, legal commitments, or unilateral reputation alteration.
- AI outputs must be labeled as suggestions unless validated by an authoritative system or reviewer.
- Model providers must not receive data beyond the user's approved scope.

## 9. Opportunity Graph

The Opportunity Graph is a logical domain model, not a mandate to introduce a graph database.

Candidate entities:
- Person, MOJAD Profile, External Identity
- Skill, Qualification, Experience, Portfolio Item, Evidence
- Business, Employer, Investor, Service Provider
- Job, Service, Product, Course, Scholarship, Grant, Investment Opportunity
- Project, Community, Content Asset, Transaction, Review, Outcome
- Consent, Verification, Trust Signal, Reputation Event

Candidate relationships:
- `HAS_SKILL`, `HOLDS_QUALIFICATION`, `HAS_EXPERIENCE`
- `OWNS_PORTFOLIO_ITEM`, `SUPPORTED_BY_EVIDENCE`
- `SEEKS_OPPORTUNITY`, `MATCHED_TO`, `INTRODUCED_TO`
- `OFFERS_SERVICE`, `EMPLOYS`, `NEEDS_SERVICE`
- `CREATED`, `COLLABORATED_ON`, `COMPLETED`
- `VERIFIED_BY`, `REVIEWED_BY`, `DISPUTED_BY`
- `FUNDED_BY`, `PURCHASED`, `LEARNED_FROM`, `RESULTED_IN`

Before implementing graph behavior, map existing relational schemas, contracts, event flows, and ownership. Reuse the existing database and search/matching infrastructure if suitable. Do not add a graph database solely because the architecture uses the word “Graph”.

## 10. Reference architecture

Proposed logical layers:

1. **Identity & Consent:** MOJAD identity, external identity links, authorization, consent, and privacy preferences.
2. **Personal Opportunity Asset:** profile, skills, qualifications, portfolio, goals, audience, and outcomes.
3. **Evidence & Verification:** evidence provenance, verification workflows, expiry, dispute, and appeal.
4. **Trust & Reputation:** contextual signals, eligible reviews, fraud/risk analysis, and explanations.
5. **Opportunity Engine:** discovery, validation, classification, ranking, matching, and analytics.
6. **AI Orchestration:** model adapters, agent policies, retrieval boundaries, approval gates, and audit.
7. **Opportunity Graph:** relationships and traversal across people, skills, businesses, and opportunities.
8. **Studio & Creator Economy:** content, products, services, subscriptions, sponsorships, and analytics.
9. **Marketplace & Payments:** order lifecycle, authoritative payment confirmation, fulfillment, refunds, and reconciliation.
10. **Provider Adapters:** Pi and other external providers behind isolated, replaceable interfaces.

This is a target architecture. Existing code must be inventoried and verified before assigning components to these layers.

## 11. API domains (proposed, not existing)

Potential API domains:
- `/api/v1/identity`
- `/api/v1/profiles`
- `/api/v1/profile/skills`
- `/api/v1/profile/qualifications`
- `/api/v1/profile/portfolio`
- `/api/v1/profile/evidence`
- `/api/v1/profile/reputation`
- `/api/v1/profile/preferences`
- `/api/v1/consent`
- `/api/v1/opportunities`
- `/api/v1/matching`
- `/api/v1/connections`
- `/api/v1/creator`
- `/api/v1/marketplace`
- `/api/v1/monetization`
- `/api/v1/analytics`

Do not create these routes until the existing API inventory, naming conventions, authorization model, contracts, and consumers have been reconciled. Avoid duplicate endpoints and competing sources of truth.

## 12. Data governance and privacy

Classify profile information:
- **Public:** deliberately published fields.
- **Contextual:** disclosed to an authorized party for a specific opportunity or purpose.
- **Private:** user-only or explicitly authorized services.
- **Highly restricted:** identity documents, credentials, sensitive verification records, and security material.

Required controls:
- Deny by default; enforce authorization server-side.
- Field-level access where needed, not only page-level access.
- Purpose limitation, data minimization, retention limits, and audit trails.
- Separate private evidence storage from public profile presentation.
- Consent must be specific, understandable, revocable, and recorded.
- Support user access, correction, export, and deletion workflows, subject to lawful retention obligations.
- Protect minors and vulnerable users with appropriate additional safeguards.
- Define incident response, breach notification, and vendor/model data handling.
- Do not rely on client-side hiding as an authorization control.

## 13. Business model

Potential revenue streams, subject to validation and legal review:
- Premium profile and professional tools
- Business and employer subscriptions
- Marketplace transaction commissions
- Creator subscriptions and paid content
- Sponsorships and compliant advertising
- Licensing and paid collaborations
- API/developer plans
- Enterprise opportunity intelligence and workflow services
- Partner services

No revenue stream should be represented as live until pricing, terms, payment processing, tax treatment, refunds, settlement, and operational ownership are verified.

## 14. Key performance indicators

Measure outcomes, not vanity metrics alone:
- Profile completion and evidence-backed skill coverage
- Verified identity-link success and account recovery outcomes
- Opportunity relevance and qualified-match rate
- Consented introductions, interviews, hires, and completed projects
- Verified service bookings, product sales, and repeat customers
- Learning completion and credential outcomes
- Creator paid collaborations and net earnings after fees
- Payment confirmation, fulfillment, refund, and reconciliation success
- Fraud rate, dispute rate, and false-positive/false-negative rates
- Privacy requests completion and access-control test results
- AI recommendation relevance, groundedness, latency, and cost
- User retention attributable to completed opportunities

## 15. Delivery roadmap

### Phase 0 — Read-only reconciliation
- Inventory existing profile, identity, skills, portfolio, trust, reputation, opportunity, creator, analytics, and payment components.
- Map schemas, APIs, contracts, events, UI consumers, authorization, and tests.
- Record evidence and status in the Source of Truth Register.
- Identify duplicate, disconnected, placeholder, and malformed assets.
- No implementation in this phase.

### Phase 1 — Personal Asset foundation
- Approve canonical POA data model and ownership.
- Reuse or extend existing profile and identity foundations only after evidence review.
- Implement consent-aware profile visibility and user controls.
- Add evidence provenance and profile completeness workflows.

### Phase 2 — Trust & Reputation
- Establish evidence-based verification and contextual reputation.
- Add dispute, correction, appeal, and anti-fraud workflows.
- Test score integrity and authorization separation.

### Phase 3 — AI Personal Opportunity Agent
- Add scoped agent tools and policy enforcement.
- Provide explainable recommendations and human approval gates.
- Evaluate relevance, safety, privacy, and cost.

### Phase 4 — Creator & Business Economy
- Connect content and audience insights to qualified leads and transactions.
- Add transparent monetization and authoritative settlement/fulfillment.
- Verify compliance, refunds, and budget-backed rewards.

### Phase 5 — Opportunity Graph
- Build on verified entities, relationships, and event provenance.
- Reuse existing storage/search where appropriate.
- Introduce specialized graph infrastructure only with measured need.

### Phase 6 — Open Developer Ecosystem
- Publish stable, permissioned APIs and developer documentation.
- Add partner adapters, sandboxing, rate limits, observability, and revocation.
- Establish versioning and compatibility governance.

## 16. Acceptance criteria

No phase is complete until:
- Existing components and consumers are mapped with evidence.
- Data ownership and source of truth are explicit.
- Server-side authorization and deny-by-default tests pass.
- Private evidence is not exposed through public APIs, logs, search, or AI context.
- Consent, revocation, export, correction, and deletion flows are tested.
- Evidence provenance and reputation calculations are explainable and auditable.
- AI cannot bypass authorization or perform prohibited consequential actions.
- Payment fulfillment depends on authoritative server-side confirmation.
- Fraud, dispute, abuse, and recovery scenarios are tested.
- Security review, CI checks, documentation, and operational ownership are complete.

## 17. Principal risks and mitigations

| Risk | Mitigation |
|---|---|
| Treating profile placeholders as working capabilities | Evidence-based capability matrix and acceptance tests |
| Duplicate identity/profile sources | Canonical source-of-truth mapping before schema changes |
| Fake followers, reviews, or credentials | Provenance, anomaly detection, eligibility rules, appeals |
| Privacy leakage through AI or integrations | Scoped access, minimization, redaction, audit, provider controls |
| Unverified Pi API assumptions | Validate against current official documentation |
| Rewards without funding | Approved budget and authoritative settlement |
| Reputation manipulation | Separate popularity from trust; transparent evidence and disputes |
| Excessive architecture complexity | Modular monolith/reuse first; justify new infrastructure with evidence |
| Broken repository paths and docs drift | Repository integrity audit before broad automated writes |

## 18. Governance and change control

- This strategy is proposed and requires review under repository governance.
- It does not authorize code, schema, migration, API, UI, payment, or production changes.
- Any implementation proposal must include evidence, impact analysis, security/privacy review, tests, rollback plan, and named owner.
- Update the Source of Truth Register when authoritative evidence changes.
- Keep strategy, standards, architecture, implementation, and audit reports clearly distinguished.
- Do not silently rename or delete existing repository files.
- Do not commit directly to `main` unless repository governance explicitly permits it and approval is recorded.

## 19. Immediate next actions

1. Review this strategy against the current Master README, Talent Passport, Profile Rules, Trust Privacy Architecture, and Source of Truth Register.
2. Approve the canonical POA terminology and boundaries.
3. Complete the read-only reconciliation audit and capability matrix.
4. Resolve repository path and documentation-integrity issues in a separate authorized task.
5. Only then propose a scoped implementation plan with dependencies and acceptance tests.

## 20. Final declaration

MOJAD Personal Opportunity Asset is a proposed evolution from a static profile to a user-controlled, evidence-backed opportunity asset. Its value is measured by the trusted opportunities and outcomes it enables—not by vanity metrics alone.

**MOJAD GOOS — Where the World’s Opportunities Become Unstoppable. Powered by Pi. Built for Eternity. 🚀 π**
