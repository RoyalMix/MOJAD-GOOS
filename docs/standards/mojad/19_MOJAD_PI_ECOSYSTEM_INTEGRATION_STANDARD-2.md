# DOC 19 — MOJAD PI ECOSYSTEM INTEGRATION STANDARD

**Document ID:** MOJAD-GOOS-STD-019  
**Version:** 1.0  
**Status:** Proposed Standard — Requires governance review; implementation requires separate evidence and approvals  
**Owner:** MOJAD GOOS Project Governance  
**Canonical path:** `docs/standards/mojad/19_MOJAD_PI_ECOSYSTEM_INTEGRATION_STANDARD.md`  
**Classification:** Strategy, Architecture, Identity, Payments, AI, Trust, Security, Developer Platform, and Global Operations

---

## 1. Executive purpose

This standard defines how MOJAD GOOS discovers, verifies, integrates, governs, and evolves capabilities from Pi Network and the wider technology ecosystem.

MOJAD must not become merely another Pi application with a wallet, listings, and an AI chat window. Its enduring differentiation is the **Opportunity Intelligence & Opportunity Economy Orchestration Layer™**: a system that understands human goals, discovers credible opportunities, verifies provenance, matches people and resources, coordinates authorized workflows, supports completion, measures outcomes, and improves from permitted feedback.

**Foundational principle: Pi-native where valuable; provider-neutral where necessary; opportunity-first everywhere.**

Pi Network may provide valuable identity, payment, developer, distribution, verification, and infrastructure capabilities. MOJAD owns its opportunity intelligence, user experience, orchestration, trust governance, and outcome model. Pi MUST NOT become the sole source of MOJAD identity, data, business logic, opportunity ranking, or platform continuity.

This document is a standard and target architecture. It does not prove that an integration is implemented, approved, available to MOJAD, or operating in production. It does not imply endorsement, partnership, certification, or sponsorship by Pi Network.

## 2. Vision and strategic differentiation

### 2.1 MOJAD promise

MOJAD GOOS should help Pioneers and non-Pioneers, individuals and organizations, move from a need or ambition to a credible next step.

Examples:
- Job seekers discover work, improve their CVs, learn missing skills, contact employers, apply, prepare, and track outcomes.
- Businesses find customers, suppliers, workers, partners, and practical services.
- Investors discover ventures and funding opportunities, assess evidence and risks, and connect with fundseekers without fabricated assurances.
- Learners find courses, scholarships, mentors, and skill-to-work pathways.
- Creators produce and distribute content, find collaborators and clients, and understand transaction terms.
- Communities find volunteers, grants, partners, and local resources.
- Service providers receive qualified requests, deliver work, and document completion.
- Users who do not use Pi can still discover, learn, connect, and participate in non-Pi workflows.

### 2.2 Defensible differentiation

MOJAD's advantage must come from outcome quality and continuity—not feature count, AI model count, tokens, or integrations advertised.

The platform combines:
1. **Opportunity Graph:** permission-aware relationships among people, organizations, needs, skills, services, opportunities, resources, evidence, and outcomes.
2. **Opportunity Intelligence:** discovery, classification, eligibility analysis, ranking, matching, explanations, and feedback.
3. **Orchestration:** workflows connecting discovery to real human and organizational action.
4. **Unified participation:** shared identity, profiles, permissions, communication, preferences, and trust controls.
5. **Trust and protection:** provenance, fraud controls, consent, reporting, dispute pathways, appeals, and human review.
6. **Open integration:** documented APIs and replaceable adapters for Pi and approved providers.
7. **Inclusive access:** non-Pi pathways, mobile-first design, accessible language, and low-bandwidth support.
8. **Outcome measurement:** evidence of progress, completed tasks, jobs, skills, services, and legitimate economic value.

A competitor may copy an individual feature. MOJAD's intended advantage is the integrated graph, verified signals, workflow continuity, trust controls, partner network, and outcome-learning loop.

**Strategic formula:** Pi infrastructure + MOJAD Opportunity Intelligence + human participation + trusted partners + outcome orchestration = MOJAD Opportunity Economy.

## 3. Scope and exclusions

This standard applies to MOJAD GOOS, MOJAD AI, MOJAD STUDIO, Workforce, jobs, businesses, services, investment, education, grants, communities, agriculture, tourism, government/NGO opportunities, identity, verification, trust, safety, advocacy, payments, rewards, APIs, developer tools, app publication, analytics, and future external providers.

It does not itself authorize production code, database, RLS, role, migration, infrastructure, secret, or deployment changes; real payments, custody, exchange, fiat conversion, escrow, payroll, lending, or investment solicitation; biometric processing without verified lawful basis and consent; unrestricted autonomous agents; or token launches/listings. Those require separately verified owners, contracts, risk reviews, and approvals.

## 4. Normative principles

1. Audit before integration.
2. Evidence before claims.
3. Pi-native, not Pi-dependent.
4. Every integration must solve a defined user problem.
5. Reuse canonical MOJAD services; do not create competing silos.
6. Enforce least privilege.
7. Minimize data and obtain required consent.
8. Preserve human control over high-impact and irreversible actions.
9. Use provider abstraction and versioned contracts.
10. Degrade gracefully when a provider is unavailable.
11. Do not unnecessarily exclude non-Pi users.
12. A trust signal proves only the specific claim actually verified.
13. Prefer additive, backward-compatible changes.
14. Measure outcomes, safety, reliability, and cost.
15. Design for long-term evolution and provider replacement.

## 5. Target integration architecture

These are logical boundaries, not a premature mandate to split the system into microservices.

### A. Experience layer
- MOJAD GOOS web/mobile interfaces.
- Pi Browser-compatible experience where required.
- MOJAD AI guided workflows.
- MOJAD STUDIO creation workspace.
- Accessible support and community experiences.

### B. Opportunity Intelligence & Orchestration
- Intent understanding.
- Opportunity Graph and search.
- Classification, eligibility, ranking, and matching.
- Explanations and evidence provenance.
- Authorized workflow planning and coordination.
- Outcome feedback and improvement.

### C. Shared MOJAD foundation
- Canonical user and organization records.
- Authentication and authorization.
- Profiles, preferences, consent, and privacy controls.
- Trust, reputation, safety, and advocacy.
- Messaging, notifications, realtime.
- Document/media management.
- Analytics, audit, and observability.

### D. Integration gateway and adapters
- Pi authentication adapter.
- Pi payment adapter.
- PiVerify adapter, only if access and terms are verified.
- Developer Portal/app-discovery adapter where supported.
- Pi Desktop/SoloHost workflow adapter where supported.
- Other approved identity, payment, AI, storage, communications, and verification providers.
- Capability registry, health checks, versioning, and error normalization.

### E. Provider/infrastructure layer
- Official Pi services and developer interfaces.
- Approved non-Pi providers.
- MOJAD-owned infrastructure, hosting, databases, storage, delivery, monitoring, and backups.

**Mandatory separation:** the Opportunity Engine MUST NOT depend directly on a Pi SDK or provider-specific response shape. Provider details belong behind a stable MOJAD contract. An adapter does not become the owner of MOJAD's canonical user, opportunity, reputation, or financial records without a separately approved architecture.

### 5.1 Integration registry

Maintain a human-readable and machine-readable registry containing:
- Integration ID, provider, official documentation URL, and purpose.
- Availability, regions, API/SDK version, and last-checked date.
- Permissions/scopes and data categories.
- Data location, retention, and subprocessors where known.
- Security/compliance review state.
- Environment: mock, sandbox, testnet, staging, or production.
- Adapter/contract version, owner, and operational contact.
- Quotas, costs, rate limits, and service constraints.
- Failure, timeout, retry, fallback, monitoring, and incident procedures.
- Exit/replacement/data-portability plan.
- Evidence links and next review date.

Unknown facts MUST be marked UNKNOWN or NOT VERIFIED.

## 6. Pi ecosystem capability domains

Availability, terms, and technical details must be rechecked against current official Pi documentation before each implementation or release.

### 6.1 Developer Portal and application configuration

Potential value: application configuration, domains, API keys, app wallets, privacy information, and navigation to supported developer capabilities.

MOJAD should assess:
- Accurate app configuration and environment separation.
- Domain and app identity management.
- Pi Sign-In, ecosystem listing, PiNet, Pi Ad Network, and other currently supported features.
- Credential ownership and secure configuration procedures.
- Developer onboarding and release readiness.

Requirements:
- Verify the current portal workflow and exact available functions.
- Keep secrets in approved secret-management systems; never commit them or expose them to clients.
- Separate test and production credentials.
- Restrict changes to authorized maintainers and record evidence.
- Portal visibility does not prove API enablement or app approval.

### 6.2 Pi authentication and sign-in

Potential value: an optional Pi sign-in method for eligible users.

Requirements:
- Follow current official authentication documentation.
- Validate authentication evidence on a trusted backend where required.
- Never trust client-supplied username, UID, role, balance, or permission.
- Separate authentication from authorization.
- Protect sessions, tokens, callbacks, account linking, unlinking, and recovery.
- Prevent account takeover, duplicate linking, replay, and insecure unlinking.
- Provide a safe non-Pi participation path where product and risk requirements allow.
- Do not label a user “fully verified” solely because Pi sign-in succeeded.

### 6.3 PiVerify and identity assurance

Potential value: if officially available and contractually accessible, face uniqueness and liveness checks may help selected businesses reduce duplicate or fraudulent accounts.

Possible use cases:
- Optional higher-assurance checks for specific high-risk workflows.
- Business/provider onboarding where the risk justifies it.
- Fraud investigation under strict governance.
- Step-up verification for sensitive actions, if supported and lawful.

Mandatory safeguards:
- Verify provider capability, terms, price, API access, permitted purposes, regional availability, and responsibilities.
- Complete privacy-impact and legal review before biometric processing.
- Explain purpose, data types, provider involvement, retention, and user rights before consent.
- Use the least intrusive method that meets the risk.
- Never require biometric checks for every user by default.
- Never expose raw biometric data to general modules or AI agents.
- Store only the minimum result/reference needed, where lawful.
- Define retention, deletion, access, audit, incident, and appeal procedures.
- Provide human review or an alternative for false rejection, accessibility barriers, or provider outage.
- Do not infer citizenship, legal status, health, ethnicity, or other sensitive attributes from face/liveness results.
- A uniqueness or liveness result is not proof of honesty, competence, qualifications, business legitimacy, or safety.

**Gate:** no PiVerify integration until access, lawful basis, consent, security, data lifecycle, and operational ownership are verified.

### 6.4 Pi payments and transaction integrity

Potential use cases, subject to supported flows and legal review:
- Goods and services.
- Employer-to-worker or client-to-provider payments.
- Creator purchases and approved monetization.
- Premium features.
- Marketplace settlement where a compliant model exists.
- Budget-backed rewards and promotions.

Requirements:
- Identify authoritative payment owner and supported payment flow.
- Define payer, recipient, amount, asset, reference, expiry, and purpose.
- Validate completion through the documented authoritative mechanism.
- Distinguish pending, cancelled, failed, expired, and unknown outcomes.
- Use idempotency and replay protection.
- Prevent duplicate fulfillment and forged browser success messages.
- Reconcile MOJAD records against authoritative transaction evidence.
- Maintain auditable financial records under the approved ledger design.
- Define refunds, disputes, support, and recovery.
- Separate Testnet and Mainnet credentials, data, assets, and UI.

Never assume:
- Wallet connection equals payment.
- Button click equals transaction.
- Testnet token equals Mainnet asset.
- Displayed balance proves funds.
- Pi payment automatically provides fiat conversion, banking, custody, escrow, payroll, or exchange.

No real financial feature may be enabled solely by this document.

### 6.5 Pi BlockExplorer and token/market intelligence

Potential uses:
- Blockchain/token education.
- Research panels with sourced historical information.
- Data displays with source, timestamp, network, and asset identifier.
- Testnet/Mainnet education and risk warnings.

Requirements:
- Identify network, canonical asset identifier, source, timestamp, and environment.
- Separate historical observation from forecast or opinion.
- Do not imply historical prices guarantee future value.
- Explorer presence is not endorsement or investment recommendation.
- Never mix Testnet tokens with production balances or rewards.
- Do not use unverified market data as executable pricing.
- Add fraud, volatility, liquidity, and impersonation warnings.
- Legal/compliance review is required before investment solicitation, exchange, brokerage, or token promotion.

### 6.6 Pi Desktop, SoloHost, and AI-assisted packaging

Potential value: prepare an existing containerized application for possible Pi Desktop publication through supported SoloHost workflows.

Requirements:
- Verify official repository, skill source, supported agents, inputs, and publication process.
- Treat generated `docker-compose.yml` and `config_options.yml` as untrusted proposals until reviewed.
- Pin trusted image versions/digests; scan images and dependencies.
- Review ports, volumes, permissions, environment variables, network access, resource limits, and persistence.
- Never place secrets in images, prompts, generated config, or public logs.
- Use least-privilege containers and isolated test environments.
- Verify health checks, logging, monitoring, backups, updates, and rollback.
- Confirm publication eligibility and review requirements separately.
- Packaging is not approval, hosting availability, production deployment, or an SLA.
- Do not assume Pi Nodes guarantee capacity, uptime, geographic coverage, or commercial service levels.

### 6.7 Pi App Studio, Pi Browser, PiNet, ecosystem discovery

Requirements:
- Confirm current official submission, review, runtime, and listing requirements.
- Test in the actual target environment, including Pi Browser when applicable.
- Verify domain ownership, HTTPS, callbacks, configuration, and metadata.
- Explain which features require Pi and which do not.
- Prevent duplicate or conflicting MOJAD identities.
- Do not imply Core Team endorsement or guaranteed listing.
- Measure activation and completed user tasks, not listing status alone.

### 6.8 Pi Ad Network and monetization

Requirements:
- Verify eligibility, placements, policies, revenue model, reporting, and payout rules.
- Do not assume ad revenue or CPM.
- Disclose ads and distinguish sponsored from organic recommendations.
- Prevent deceptive, harmful, or age-inappropriate ads.
- Protect privacy and comply with consent and advertising laws.
- Do not promise Pi/cash rewards without a real, approved funding mechanism.
- Monitor ad quality, complaints, fraud, and revenue reconciliation.
- Advertisers must not secretly purchase ranking or manipulate trust scores.

## 7. MOJAD product integration map

All entries are proposed use cases, not verified implementation status.

| MOJAD domain | Potential Pi capability | MOJAD-owned value | Boundary |
|---|---|---|---|
| GOOS Core | Developer Portal, app configuration, discovery | Unified opportunity experience | Pi does not own core logic |
| Identity | Pi Sign-In; PiVerify if approved | Unified account, consent, permissions | Authentication is not universal trust |
| MOJAD AI | Approved tools and packaging workflows | Intent, intelligence, orchestration | AI cannot invent results or authorize high-impact actions |
| MOJAD STUDIO | Desktop distribution and approved monetization | Creation, collaboration, publishing | Rights, consent, moderation, payout integrity |
| Workforce | Optional sign-in/verification | Jobs, skills, applications | Fairness; no unsupported verification claims |
| BusinessNet | Optional identity/business checks | Partner, supplier, customer matching | Claims need suitable evidence |
| InvestNet | Public explorer data | Research and risk education | No fabricated returns or unlicensed activity |
| EduNet | Optional identity/payment rails | Learning and scholarship pathways | Verify credentials with issuers |
| ServiceNet/Marketplace | Approved payment/identity signals | Service matching and delivery | Disputes, refunds, safety |
| Community | Optional sign-in/verification | Collaboration and advocacy | Privacy and moderation |
| Rewards | Supported payments if authorized | Budget-backed incentives | Real funding and ledger evidence required |
| Developer ecosystem | Developer Portal/SoloHost | APIs, SDKs, partner onboarding | Generated packages require review |

## 8. Opportunity Intelligence & Opportunity Economy Orchestration Layer™

This is MOJAD's primary differentiation and remains a MOJAD-owned domain capability.

### 8.1 Opportunity Graph

Represent, with provenance and access controls:
- People and organizations.
- Skills, qualifications, interests, and user-stated goals.
- Jobs, contracts, services, businesses, grants, scholarships, investments, tenders, and learning resources.
- Products, creators, communities, events, and partners.
- Needs, resources, constraints, eligibility, and locations.
- Relationships, referrals, collaboration, and permitted outcome records.
- Evidence sources, timestamps, verification level, and confidence.

Do not add sensitive personal data merely because it might improve prediction. Apply purpose limitation, minimization, retention, and user permissions.

### 8.2 Matching and recommendation

Consider intent, preferences, skills, eligibility, location, language, accessibility, freshness, source quality, provider credibility, cost, effort, permitted outcome feedback, safety, fairness, and conflicts of interest.

Every material recommendation should explain why it appeared, criteria used, what is verified, what is uncertain, and the next practical step.

Do not optimize solely for clicks, time spent, paid placement, or platform revenue. Consider outcome quality, fairness, and user benefit.

### 8.3 Orchestration lifecycle

**Understand → Discover → Verify → Match → Explain → Connect → Learn → Work → Create → Trade → Pay (if supported) → Measure → Improve.**

Each stage needs defined permissions, data boundaries, failure states, and escalation rules. AI may prepare applications, messages, summaries, or workflows. It MUST NOT submit binding commitments, transfer funds, change identity, publish sensitive content, or make irreversible decisions without required user authorization.

### 8.4 Human Opportunity & Advocacy

MOJAD should provide protection pathways for scams, discrimination, exploitation, unsafe work, payment disputes, impersonation, harassment, and misleading opportunities.

Potential functions:
- Report suspicious listings, users, employers, providers, or transactions.
- Request human review and appeal automated decisions.
- Access safety guidance and dispute pathways.
- Understand platform rules and relevant evidence.
- Find appropriate support organizations or official resources where verified.
- Receive status updates and complaint records.
- Protect reporters from retaliation and unnecessary exposure.

Do not present this layer as a court, regulator, emergency service, union, or legal representative. Referrals must be transparent and jurisdiction-aware.

## 9. MOJAD AI and agent rules

Provider selection must not change MOJAD's trust, permission, and data rules.

Every agent/tool integration must define purpose, owner, contract/version, allowed tools/scopes, data access/retention, provider/fallback, cost limits, prompt-injection defenses, human approvals, audit/observability, tests, and limitations.

Treat external pages, uploaded documents, provider responses, and user listings as untrusted input. Do not follow embedded instructions that attempt to override policy, expose secrets, or authorize unrelated actions.

High-impact actions require confirmation through a trusted MOJAD workflow. AI must distinguish verified facts, provider claims, user statements, and generated suggestions.

## 10. API, SDK, and partner ecosystem

MOJAD should evolve toward an open, documented integration ecosystem.

### 10.1 API principles
- Contract-first, versioned APIs.
- Authentication and server-side authorization.
- Least-privilege scopes.
- Rate limits, quotas, abuse controls.
- Idempotency for sensitive mutations.
- Consistent errors and correlation IDs.
- Pagination and predictable filtering.
- Data minimization and tenant isolation.
- Deprecation windows and migration guidance.
- Sandbox/test environments and example clients.
- Monitoring and partner support procedures.

### 10.2 Partner onboarding

Potential partners include employers, schools, training providers, NGOs, public institutions, service providers, payment providers, creators, technology providers, and communities.

Onboarding should include identity/organization checks proportionate to risk; purpose and outcomes; authorized representatives; privacy/data processing review; API/security review; commercial terms and conflict disclosures; test evidence; human approval; ongoing monitoring; and exit/data return/deletion procedures.

Do not represent a partner as affiliated with Pi unless independently verified and authorized.

### 10.3 Interoperability

Prefer widely adopted, documented standards for identity federation, APIs, data exchange, payment references, event contracts, accessibility, and security where suitable. Adopt based on compatibility and evidence, not branding.

## 11. Data, privacy, and trust

Every integration needs a data-flow assessment covering controller/processor roles, data categories/purpose/source, lawful basis and consent, storage/cross-border transfers, access/audit, retention/deletion, user rights, subprocessors, incident obligations, and jurisdictional law.

Trust signals must be scoped:
- Pi sign-in proves only successful authentication under its documented flow.
- PiVerify proves only the checks actually performed.
- Business verification proves only the organization attributes checked.
- Payment confirmation proves only the authoritative transaction status returned.
- Qualifications require evidence from the issuer or accepted verification.

Never combine unrelated signals into a misleading “100% trusted” label. Explain what each badge means and does not mean.

## 12. Payments, rewards, and economic governance

Each revenue/reward stream needs an owner and accounting model.

A reward MUST NOT be promised or issued unless real funding or approved budget exists; eligibility and earning rules are documented; abuse controls exist; liability/accounting is known; authoritative records exist; redemption/expiry/reversal/dispute rules are clear; and legal/tax reviews are complete.

Keep separate:
- Pi Mainnet assets/transactions.
- Pi Testnet assets/transactions.
- Other blockchain assets.
- MOJAD internal points/non-transferable credits.
- Promotional and partner-funded rewards.
- Fiat prices and external payment records.

AI agents/providers must not independently approve transfers, alter authoritative balances, or create financial liabilities.

## 13. Reliability and global scale

Design for global growth without unsupported capacity claims. Consider regional latency, variable connectivity, mobile/low-bandwidth journeys, stateless services, background jobs, queue limits/backpressure, bounded retries/timeouts/circuit breakers/idempotency, provider health checks, graceful degradation, backup/restore, disaster recovery, data residency, localization, accessibility, quotas, cost, load tests, monitoring, and incident ownership.

Provider failover must be tested. If no safe fallback exists, clearly report unavailability instead of fabricating success.

## 14. Security baseline

Comply with `AGENTS.md` and applicable MOJAD security/trust standards. At minimum:
- Threat-model every new trust boundary.
- Keep secrets server-side and use approved secret management.
- Enforce authorization server-side.
- Validate inputs and external responses.
- Use secure transport and appropriate encryption.
- Scan dependencies and containers.
- Protect against SSRF, injection, replay, CSRF, XSS, credential leakage, and privilege escalation as applicable.
- Isolate tenants and private content.
- Rate-limit authentication, verification, payments, and public endpoints.
- Log securely without unnecessary sensitive data.
- Define vulnerability reporting and incident response.
- Test abuse and failure cases, not only happy paths.

Documentation is not proof of an implemented security control; evidence is required.

## 15. Capability status and evidence

Every integration receives one status:

| Status | Meaning |
|---|---|
| VERIFIED WORKING | Implemented and tested in intended environment with current evidence |
| IMPLEMENTED — UNVERIFIED | Implementation appears to exist; behavior not proven |
| PARTIALLY IMPLEMENTED | Some required behavior exists; gaps documented |
| DEMONSTRATION ONLY | Mock, prototype, preview, or non-production flow |
| PLANNED | Proposed/approved design, no verified implementation |
| NOT FOUND | No implementation found in defined assessment scope |
| NOT VERIFIED | Evidence insufficient to classify |
| BLOCKED | Owner, permission, contract, legal review, security control, or environment missing |
| NOT APPLICABLE | Outside approved scope, with reason |

Evidence categories:
- **E1 Source:** code, config, contracts, schema, migrations, repository path.
- **E2 Test:** unit, integration, contract, security, build, CI.
- **E3 Runtime:** observed behavior in target environment.
- **E4 Provider:** official docs, verified API interaction, eligibility, provider confirmation.
- **E5 Operations:** monitoring, load, backup, recovery, incidents.
- **E6 Governance:** owner, consent, approvals, legal review, risk acceptance.

Every capability record includes ID, purpose, MOJAD module, provider/source, status/date, evidence links/paths, data/permissions, risks, owner/dependencies, costs/constraints, failure/fallback, acceptance criteria/tests, next action, reviewer, and review date.

## 16. Staged implementation roadmap

No phase authorizes production changes by itself.

### Phase 0 — Baseline reconciliation
Audit Pi-related code, docs, contracts, SDKs, config, tests, and deployment evidence; verify current official sources; identify owners; compare existing standards; produce evidence-backed capability matrix and blockers.

**Exit:** reviewed baseline with no unsupported claims.

### Phase 1 — Integration foundation
Define provider adapter contracts, registry, environment separation, secret ownership, identity-linking/consent contracts, error/retry/idempotency/observability, and provider replacement.

**Exit:** reviewed contracts, threat model, owners, tests, compatibility plan.

### Phase 2 — Developer/discovery capabilities
Evaluate Developer Portal workflows, app listing, public explorer education, and SoloHost packaging in isolated non-production environment.

**Exit:** reproducible test evidence and security review.

### Phase 3 — Identity and trust
Evaluate Pi sign-in/backend validation, linking/unlinking/recovery/non-Pi access, PiVerify only after legal/privacy/consent/provider/security checks, and human appeal.

**Exit:** verified identity contract, approved data lifecycle, tests, support ownership.

### Phase 4 — Transactions/economy
Reconcile existing payment/ledger ownership first; verify payment lifecycle and authoritative confirmation; design reconciliation/refunds/idempotent fulfillment; prove reward funding; separate Testnet/Mainnet.

**Exit:** finance/legal/security approval, owner evidence, end-to-end tests, rollback/recovery. Otherwise BLOCKED.

### Phase 5 — Opportunity orchestration/partners
Connect verified provider signals through approved contracts; deliver guided workflows for jobs, business, services, learning, creators, and community; add partner APIs, outcome analytics, and safety monitoring.

**Exit:** measurable user outcomes, partner accountability, privacy review, stable operations.

### Phase 6 — Global evolution
Add localization/regional compliance; evaluate new Pi and non-Pi services; review providers; run resilience/cost/capacity exercises; maintain deprecation and migration plans.

**Exit:** evidence, operational ownership, and user-benefit review for each expansion.

## 17. Integration acceptance criteria

Not release-ready until applicable criteria are met:
1. Defined user problem and measurable outcome.
2. Current official provider documentation and eligibility verified.
3. Canonical MOJAD owner/source of truth identified.
4. Versioned adapter contract.
5. Data flows, permissions, consent, retention documented.
6. Threat model and security review complete.
7. Test and production environments separated.
8. Unit, integration, contract, negative, and relevant security tests pass.
9. Provider failure, timeout, duplicate request, and recovery tested.
10. Observability and support ownership established.
11. Cost, quotas, and constraints documented.
12. User-facing claims accurately describe capability and limitations.
13. Rollback, disablement, and provider exit procedures exist.
14. Human approval recorded for high-risk actions.
15. Deployed behavior verified in the actual target environment.

A failed criterion is a blocker or documented approved exception, never silently hidden.

## 18. Governance and change control

MOJAD GOOS Project Governance owns this standard. Each integration needs technical and product owners. Security, privacy, finance, legal, and operations reviewers participate according to risk. Pi Network governs its own services; MOJAD must not imply control over them. External providers govern their terms and service, while MOJAD remains responsible for its claims and integration behavior.

Changes to provider contracts, permissions, data flows, payment behavior, or identity semantics require impact review. Breaking changes require versioning, migration guidance, consumer testing, and deprecation plans. Production changes remain subject to explicit authority and repository safety rules.

For material decisions record ID/date, problem/outcome, options, evidence, risks, decision/rationale, rejected options, owners/approvals, reversibility/exit plan, and review date.

## 19. Metrics and continuous improvement

Measure outcomes rather than vanity metrics alone.

**Opportunity outcomes:** qualified discoveries, match relevance, applications, introductions, interviews, hires, contracts, completed services, learning progress, business leads, and time to useful next step.

**Trust and safety:** confirmed fraud/abuse, report resolution, appeals/reversals, false positives/negatives where measurable, unauthorized access, security incidents, and user understanding of verification labels.

**Integration health:** provider availability/latency, authentication/payment states, reconciliation discrepancies, retry/timeouts, adapter errors, and version drift.

**Economics:** cost per completed workflow, legitimate revenue sources, reward liabilities versus funded budgets, provider costs, support cost, and partner value.

**Inclusion:** Pi/non-Pi participation, mobile/low-bandwidth completion, language/accessibility coverage, and drop-off caused by unnecessary verification.

Metrics must be privacy-aware, accurately defined, and interpreted with context.

## 20. Official source verification register

Initial official reference for the Pi capabilities described in the October 29, 2026 announcement:

- Pi Network, “Pi Updates: Developer Portal Interface, BlockExplorer Token Tracking, SoloHost AI App Packaging, and PiVerify”, October 29, 2026: https://minepi.com/blog/developer-platform-updates/

The announcement describes Developer Portal interface/configuration changes; BlockExplorer historical price tracking for Launchpad Testnet tokens; a SoloHost skill helping compatible AI coding assistants prepare Docker-based app packages/configuration for Pi Desktop submission; and expanded PiVerify capabilities described as face uniqueness and multiple liveness checks for third-party businesses.

These descriptions are time-bound. Before implementation, verify current official docs, repository, terms, API availability, account eligibility, and regional applicability. The announcement does not prove MOJAD access or production approval.

For each capability record official URL, access date, version/change date, requirements, evidence of actual access, test environment/result, and reviewer. Do not use unofficial summaries as sole authority for identity, payments, security, or legal decisions.

## 21. Immediate repository execution plan

After governance review, the first engineering task is a **read-only MOJAD Pi Ecosystem Integration Reconciliation Audit**.

The audit must:
1. Inspect existing Pi code, packages, routes, services, SDKs, environment variable names (never values), contracts, docs, tests, workflows, and deployment configuration.
2. Search for Pi authentication, account linking, wallet, payments, transaction verification, PiVerify, BlockExplorer, SoloHost, Pi Desktop, App Studio, PiNet, Developer Portal, and Ad Network.
3. Identify canonical owners and sources of truth.
4. Compare implementation with this standard and DOC 16–18.
5. Produce a capability matrix using Section 15 statuses.
6. Cite exact paths, symbols, tests, and runtime/provider evidence.
7. Identify duplicates, security risks, unsupported claims, missing contracts, and blockers.
8. Recommend the smallest additive implementation sequence.
9. Make no source-code, database, production configuration, secret, payment, identity, or infrastructure changes.
10. Stop and report BLOCKED wherever evidence or authority is missing.

Store the audit as a separate evidence-backed report after verifying the canonical destination. Do not overwrite this standard.

## 22. Final standard

MOJAD GOOS must not compete by copying every feature on other platforms. It must make the ecosystem more useful: helping people discover credible opportunities, understand options, build skills, connect with participants, complete work, create value, and protect themselves.

Pi can strengthen this mission through verified identity, payments, developer infrastructure, distribution, and other capabilities as they become available. MOJAD's enduring value is the intelligence, orchestration, trust, partner relationships, and outcome infrastructure connecting those capabilities to human needs.

**Build for people. Integrate with evidence. Orchestrate opportunities. Protect trust. Measure outcomes. Evolve globally.**

**Pi-native. Provider-neutral. Opportunity-first. Human-centered. Built to evolve.**

---

**End of DOC 19 — MOJAD Pi Ecosystem Integration Standard**
