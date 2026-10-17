# MOJAD GOOS — Partner Ecosystem Onboarding Standard

**Document ID:** MOJAD-STD-012  
**Version:** 1.0  
**Status:** PROPOSED — REVIEW REQUIRED  
**Category:** Ecosystem Growth, Partner Operations, Trust and Interoperability  
**Parent Standard:** `00_MASTER_GOVERNANCE.md`  
**Related Standards:** `04_SECURITY_AND_AUTHORIZATION.md`, `05_MOJAD_AI_STANDARD.md`, `06_INTEGRATION_CONTRACTS.md`, `08_ACCEPTANCE_TESTS.md`, `09_DECISION_LOG_AND_EVIDENCE.md`, `11_PLATFORM_EVOLUTION_AND_SCALABILITY_STANDARD.md`  
**Canonical Repository:** `RoyalMix/MOJAD-GOOS`

---

## 1. Purpose

Define how MOJAD GOOS can discover, invite, onboard, verify, activate, support and grow a diverse partner ecosystem without waiting for every organization to approach MOJAD first.

Potential participants include companies, SMEs, NGOs, schools, universities, government and community programs, publishers, newsrooms, radio and television channels, creators, influencers, investors, employers, service providers, developers, other platforms and relevant Pi ecosystem participants.

The goal is not merely to collect partner logos. It is to create a measurable network in which each partner contributes useful opportunities, services, expertise, distribution, funding, technology or verified information that benefits users.

This is a proposed operating standard. It does not prove that a partner portal, CRM, API, verification process or automated onboarding feature already exists, and it does not authorize production implementation by itself.

## 2. Guiding principles

1. **Partner-ready by design:** organizations should have a clear path to join without requiring the founder to coordinate every step manually.
2. **Human approval where needed:** self-service intake can be automated; legal agreements, financial commitments, sensitive access, official endorsements and high-risk integrations require authorized human review.
3. **Open entry, earned trust:** an application is not proof of verification, trust, endorsement or approval.
4. **Value before ceremony:** a partner should be able to publish a useful listing, submit an opportunity, share an approved resource or start a pilot before complex integrations are required.
5. **One canonical partner record:** avoid duplicate organization profiles and conflicting partner statuses across modules.
6. **Progressive onboarding:** start with low friction; request more evidence and permissions only when the requested capability requires them.
7. **Evidence over claims:** record what was checked, by whom, when and against which evidence.
8. **No pay-to-trust:** payments, sponsorships or premium placement must not automatically increase verification, trust or reputation.
9. **Pi-native, not Pi-exclusive:** support Pi integrations where officially available and appropriate; do not make Pi integration mandatory for every partner.
10. **No invented relationships:** never imply that a company, institution, investor, Pi Core Team or other organization is a partner without documented consent and evidence.
11. **Reuse before rebuilding:** audit current identity, organization, listings, messaging, search, verification and analytics capabilities before proposing new infrastructure.

## 3. Partner categories and first useful contributions

| Category | Potential contribution | First activation example |
|---|---|---|
| Company / SME | Jobs, products, services, procurement needs | Publish one reviewed listing |
| Employer / recruiter | Vacancies, internships, apprenticeships | Submit one structured job |
| NGO / nonprofit | Programs, grants, community services, training | Publish a program or resource |
| School / university | Courses, scholarships, events, career services | Publish one course or opportunity |
| Government / public program | Public services, grants, notices | Submit an official program with source evidence |
| Newsroom / publisher | Reporting, explainers, public-interest information | Register publication and submit source links |
| Radio / TV / media channel | Educational content, announcements, interviews | Propose a content or outreach pilot |
| Creator / influencer | Education, demonstrations, outreach campaigns | Propose a transparent campaign |
| Investor / fund / accelerator | Investment criteria, calls, mentoring | Publish mandate and application pathway |
| Service provider | Local or remote professional services | Create a service profile |
| Developer / platform | APIs, integrations, SDKs | Submit integration proposal and test plan |
| Pi ecosystem participant | Pi-related utility, merchant or app integration | Document exact capability and test plan |
| Community / association | Events, knowledge, referrals | Publish one event or resource |

Categories describe the relationship and requested capability; they are not verification levels. One organization may have several categories but should use one canonical record where appropriate.

## 4. Recommended partner journey

**Discover → Apply → Confirm Contact → Create Organization Profile → Select Goals → Submit Evidence → Review → Approve Scope → Activate First Value → Measure Outcomes → Expand Partnership → Renew or Close**

### Stage 0 — Discover and invite

MOJAD should proactively identify relevant partners using legitimate public sources, referrals, opt-in campaigns and official contact channels. Outreach must be respectful and comply with applicable communication and privacy rules.

A prospect record should capture organization name, category, region, public website or official profile, source and date discovered, relevance to user needs, outreach owner, status, next action and opt-out/do-not-contact status where applicable.

Do not scrape restricted personal data, bypass platform terms, send deceptive messages or imply an existing relationship.

### Stage 1 — Public partner entry point

Provide a future **Partner with MOJAD** or **Join the MOJAD Ecosystem** entry point that explains:
- What MOJAD is and whom it serves.
- Which partner categories can join.
- What each party may contribute and receive.
- Which capabilities are live today versus planned.
- How organization data will be used.
- What verification means and does not mean.
- Any fees, only if approved and clearly disclosed.
- Review steps and support contact.

The form should work on mobile, use accessible labels and validation, and allow save/resume where feasible.

### Stage 2 — Structured intake

Collect only what is necessary:
- Organization name, category, mission and operating region.
- Public website and official profile links.
- Organization contact and authorized representative's role.
- Partnership goals and target users.
- Requested capabilities: publishing opportunities, services/products, education, media, investment, API integration, payments, identity, events or sponsorship.
- Expected contribution and outcomes.
- Data the organization requests to access or share.
- Supporting evidence and privacy-notice acknowledgement.
- Consent to receive application-related messages.

Do not request government IDs, sensitive personal data, bank details or unrelated documents without a justified, secure, approved process.

### Stage 3 — Verification and review

Use risk-based checks, as appropriate:
- Contact or organization-domain confirmation.
- Confirmation through an official website or public directory.
- Evidence that the representative can act for the organization.
- Legal registration review where relevant.
- Additional due diligence for financial services, investment, payments, regulated activity, employment claims, minors or privileged access.

Record check type, outcome, evidence reference, reviewer/provider, timestamp, expiry/recheck date and limitations. Keep private evidence private. A verified contact is not the same as a verified legal entity; verification is not endorsement or a guarantee of outcomes.

Recommended status lifecycle:
`DRAFT`, `SUBMITTED`, `CONTACT_CONFIRMATION_REQUIRED`, `EVIDENCE_REQUIRED`, `IN_REVIEW`, `APPROVED_LIMITED`, `ACTIVE`, `PAUSED`, `REJECTED`, `SUSPENDED`, `CLOSED`.

Each decision needs a reason, timestamp, owner and restrictions. Applicants should receive a clear status and a reasonable route to correct incomplete information or appeal. Automation may flag or prioritize cases but must not independently make high-impact decisions about regulated activity, financial access or official status.

### Stage 4 — Activate first value

Onboarding must not end with an empty profile. Examples:
- Employer publishes a real vacancy with instructions and expiry.
- Business publishes a real service/product with accurate terms.
- School publishes a course, event or scholarship.
- NGO publishes a program or funding call with eligibility and deadlines.
- Newsroom registers source information and shares a relevant article.
- Media channel/creator proposes a transparent educational campaign.
- Investor publishes thesis, stage, geography, sectors and eligibility; never imply guaranteed funding.
- Developer agrees on scope, sandbox and acceptance criteria before production credentials.
- Pi ecosystem participant documents the exact capability and validates it in an approved test environment.

Public content must pass relevant quality, authorization and moderation checks. Never present fabricated demo listings as real opportunities.

### Stage 5 — Measure outcomes

Measure active partners, current opportunities, qualified views, referrals, applications, completed connections, partner response times, listing accuracy, expired content, complaints, incidents, retention and repeat contributions. Count transactions or completed work only when verified. Never claim impact, users, revenue or conversions without measured evidence. Do not sell identifiable user data.

## 5. Access, permissions and lifecycle

Use least-privilege role-based access. Conceptual roles may include Organization Owner, Organization Administrator, Publisher, Analyst, Partner Operations Reviewer, Trust and Safety Reviewer, Integration Engineer, Legal/Finance Reviewer and Platform Administrator. These are proposed roles, not a claim that they exist today.

Organization members must not edit other organizations' records, approve their own verification, alter trust evidence, impersonate MOJAD or access private user data beyond explicitly authorized workflows. Sensitive changes need audit records. Offboarding must address credentials, webhooks, listings, agreements and data retention.

## 6. Integration maturity levels

- **Level 0 — Public participant:** public profile and manual contact; no privileged access.
- **Level 1 — Reviewed organization:** organization profile and authorized representative reviewed.
- **Level 2 — Platform contributor:** manages approved opportunities through MOJAD interfaces.
- **Level 3 — Connected partner:** approved APIs, webhooks or imports with scopes and rate limits.
- **Level 4 — Transactional partner:** tested order, booking, payment or settlement flows where lawful and supported.
- **Level 5 — Strategic ecosystem partner:** governed joint programs, metrics, escalation contacts and periodic reviews.

Levels describe integration capability, not trustworthiness, commercial value or endorsement. Higher levels must not automatically increase Trust Score or Reputation Score.

## 7. Technical requirements before implementation

First audit and reuse existing MOJAD identity, organization, listing, messaging, search, trust, notification and analytics services. If gaps are confirmed, design the smallest coherent capability around:
- Canonical organization/partner records and memberships.
- Applications, review decisions and status transitions.
- Evidence metadata and secure evidence references.
- Partner categories and requested capabilities.
- Consent, communication preferences and contact suppression.
- Scoped integration registrations and credentials.
- Onboarding checklist, lifecycle events, audit trail and outcome metrics.

Define data ownership, identifiers, duplicate handling, authorization/RLS, retention, deletion and migration strategy before implementation. API contracts must document authentication, scopes, versions, rate limits, idempotency, pagination, errors, retries, webhook signing, replay protection and credential rotation. Never expose privileged API keys in the browser. Do not add a CRM, microservices or queues merely for fashion.

## 8. Partnership economics and incentives

Revenue share, referral payments, advertising, premium listings, sponsorships, grants, rewards and token incentives require separate approved commercial and financial design. Document contracting party, jurisdiction, pricing, cancellations/refunds, attribution, fraud controls, budget, tax/licensing review, conflicts and sponsored-content disclosures.

Never promise guaranteed returns, audience growth, Pi rewards, leads or MOJAD ownership/equity without an authorized written agreement.

## 9. Founding Ecosystem Partner Program

MOJAD may propose a voluntary **Founding Ecosystem Partner Program** for early contributors.

Possible benefits, subject to approval and actual availability:
- Early access to approved pilot workflows.
- Direct feedback sessions and co-design for a defined use case.
- Recognition as a founding participant only with written consent and accurate wording.
- Fair visibility for genuine, approved opportunities.
- Technical onboarding help within available capacity.

Possible commitments:
- Provide accurate organization and opportunity information.
- Assign an accountable contact.
- Participate in a limited pilot and provide feedback.
- Respect privacy and platform rules.
- Correct outdated information.
- Disclose sponsorships and conflicts.
- Avoid implying official Pi Network endorsement or MOJAD guarantees.

Founding status does not imply equity, ownership, exclusivity, guaranteed leads, investment returns or special trust scores unless a separate authorized agreement explicitly defines it. Use transparent selection criteria.

## 10. Partner acquisition pipeline

Use a lawful, consent-aware pipeline:
`IDENTIFIED → QUALIFIED → CONTACTED → REPLIED → MEETING → PROPOSAL → PILOT → ACTIVE → EXPANSION`, with `DECLINED`, `NO_RESPONSE`, `DO_NOT_CONTACT` and `CLOSED` as appropriate.

Prioritize relevance to user needs, legitimacy, category/region gaps, willingness to contribute current opportunities, measurable pilot feasibility, integration cost, support burden and risk.

Start with a small, diverse cohort. Do not wait for global brands: local employers, schools, service providers, community groups and SMEs can validate the onboarding process sooner. Scale outreach after the first process is repeatable. Every campaign needs an owner, truthful claims and opt-out handling. Never use fake endorsements or fabricated partner lists.

## 11. Operational ownership

Assign owners for partner operations, verification/trust review, technical integration and incident response, legal/compliance review where applicable, partner communications/data retention, and outcome measurement. Set response-time promises only when staffing and capacity support them. Provide routes for complaints, corrections, impersonation reports, inaccurate listings, data requests and offboarding.

## 12. Acceptance criteria

A future implementation is not accepted until evidence demonstrates:
1. Mobile-friendly application intake with clear fields and consent.
2. No unnecessary sensitive-data collection.
3. Duplicate handling and valid status transitions.
4. Applicants cannot approve themselves or access another organization's private records.
5. Verification labels accurately describe evidence and do not imply endorsement.
6. Auditable review decisions with reasons.
7. An approved partner can complete one category-specific first-value action.
8. Public listings show accurate ownership, source, status and expiry where relevant.
9. APIs enforce authentication, scopes, rate limits and audit logging if enabled.
10. Consent, opt-out, retention, correction, deletion and offboarding are tested.
11. No fake partners, listings, performance numbers or outcomes.
12. Metrics use real events and protect private user data.
13. Security tests cover tenant isolation, authorization bypass and credential leakage.
14. Rollback, incident response and human approval are documented before production release.

## 13. Implementation sequence

1. **Read-only audit:** inventory organization records, authentication, RLS, listings, messaging, search, trust, analytics and existing partner workflows.
2. **Gap report:** classify evidence as VERIFIED-CODE, VERIFIED-DATABASE, VERIFIED-RUNTIME, PARTIAL, UNKNOWN or BLOCKED.
3. **Approve pilot:** choose one or two partner categories and a small cohort based on actual user needs.
4. **Design contracts:** settle data ownership, roles, statuses, consent, verification and audit requirements.
5. **Build minimum slice:** application intake → review → organization profile → one useful contribution → outcome measurement.
6. **Test:** mobile usability, permissions, duplicates, accessibility, abuse cases and data lifecycle.
7. **Human review and release:** deploy only after evidence, rollback and approval.
8. **Expand:** add categories and integrations only after the first slice proves repeatable value.

## 14. Decisions requiring explicit approval

- Public naming and branding of the partner program.
- Fees, revenue share, rewards, sponsorships or referral incentives.
- Verification providers and required evidence by category/jurisdiction.
- Eligibility, appeals and review staffing.
- New tables, API scopes, CRM or external services.
- Founding-partner benefits and partner-logo use.
- Production rollout, legal terms and retention periods.

**Status reminder:** This standard defines the intended operating model. It is not evidence that a partner portal, verification system, CRM, API, commercial program or production workflow currently exists.
