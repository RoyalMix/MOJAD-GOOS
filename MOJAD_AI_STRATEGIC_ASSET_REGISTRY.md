# MOJAD AI — STRATEGIC ASSET REGISTRY

**Version:** 1.0 PHASE 1 (Foundation)  
**Status:** ACTIVE GOVERNANCE  
**Last Updated:** 2026-09-12  
**Classification:** ENGINEERING / AI INFRASTRUCTURE

---

## REGISTRY PURPOSE

This document maps every MOJAD AI Strategic Asset to:

1. **Existing Repository Location** — Where the asset currently lives
2. **Implementation Status** — Verified, Partial, Not Found, Not Verified, Blocked, Future Adapter
3. **Owner Layer** — Which MOJAD system owns this asset
4. **Dependencies** — What this asset depends on
5. **Security Boundary** — What constraints apply
6. **Integration Action** — How to extend/integrate this asset
7. **Tests Required** — What must be verified
8. **Future Expansion Path** — How this scales

---

## STATUS DEFINITIONS

| Status | Meaning | Action |
|--------|---------|--------|
| **VERIFIED** | Direct evidence in code + tests confirm implementation | Use as-is or extend carefully |
| **PARTIAL** | Some implementation exists but gaps/unknowns remain | Audit fully before depending; clarify gaps |
| **NOT FOUND** | No evidence of this asset in repository | Decision: Build, Defer, or Block |
| **NOT VERIFIED** | Asset mentioned/designed but implementation not verified | Research required; no production dependency |
| **BLOCKED** | Cannot proceed without external information or resolution | Report and resolve blocker |
| **FUTURE ADAPTER** | Interface/contract only; implementation deferred to later phase | Build contract now; implement later |

---

## FOUNDATIONAL ARCHITECTURE (Singleton, Repository-Level)

| Asset | Location | Status | Evidence | Owner | Dependencies | Security | Action | Tests |
|-------|----------|--------|----------|-------|--------------|----------|--------|-------|
| **MOJAD GOOS Governance Framework** | ENGINEERING_DISCIPLINE.md<br>MOJAD_GOOS_COPILOT_AGENT_CONSTITUTION.md<br>AI_AGENT_GOVERNANCE.md | VERIFIED ✅ | 27-31 discipline principles + 17 constitutional articles + agent action levels 0-4 | MOJAD Core | None (foundational) | STRONG — Non-negotiable rules | USE AS-IS | Authority tests already in repo |
| **Source of Truth Registry** | MOJAD_GOOS_SOURCE_OF_TRUTH.md | PARTIAL ⚠️ | Domain→Authority mapping exists; many marked "NOT VERIFIED" / "TBD" | MOJAD Core | Governance | Critical governance gap | EXTEND: Audit and clarify each entry | Reconciliation tests needed |
| **Trust Rules & Framework** | TRUST_RULES.md (30KB)<br>docs/engineering/TRUST_RULES.md | VERIFIED ✅ | 100+ operational rules (TR-001 through TR-103+); Comprehensive | MOJAD Trust | Governance | Critical — Non-negotiable | REFERENCE: Foundation for all Trust Intelligence | Trust validation tests |
| **Engineering Discipline** | ENGINEERING_DISCIPLINE.md | VERIFIED ✅ | 27 core principles; layer-by-layer construction | MOJAD Core | Governance | Enforces no-shortcut policy | REFERENCE: Guides all integration | Discipline checks in CI |
| **Provider Abstraction Strategy** | PROVIDER_ABSTRACTION.md | PARTIAL ⚠️ | Strategy document exists; implementation unclear | MOJAD Core | Architecture | Important for sovereignty | CLARIFY: Map existing abstractions; design extensions | Provider swap tests |
| **Event Governance** | ENGINE_EVENTS.md | PARTIAL ⚠️ | Governance defined; Outbox NOT FOUND (CRITICAL) | MOJAD Core | Database, Audit | Critical — Event durability at risk | BLOCKED: Cannot proceed without Outbox pattern verification or implementation | Event replay tests |

---

## AI INFRASTRUCTURE LAYER

### **1. Multi-Model Intelligence Foundation**

| Asset | Location | Status | Evidence | Owner | Dependencies | Security | Action | Tests |
|-------|----------|--------|----------|-------|--------------|----------|--------|-------|
| **AI Provider Registry** | `ai/` directory | NOT FOUND 🔴 | Directory exists; empty | TBD | Governance, Schema | Critical | BUILD: Create registry contract defining AI provider capabilities | Provider registry schema tests |
| **Model Router Contract** | `ai/` or `packages/` | NOT FOUND 🔴 | No evidence | MOJAD Core | Provider Registry | Medium — Route based on policy | BUILD (PHASE 1 Contract): Define interface for model selection based on task/cost/latency/capability | Router logic tests |
| **LLM Abstraction** | `ai/` | NOT FOUND 🔴 | No unified abstraction found | MOJAD Core | Provider Registry, Model Router | Critical — Prevent vendor lock-in | BUILD (PHASE 1 Contract): Abstract provider-specific APIs (ChatCompletion, Embedding, Vision, etc.) | Provider independence tests |
| **Embedding Service** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Core | LLM Abstraction | Medium | FUTURE ADAPTER: Design embedding abstraction for opportunity/knowledge graphs | Embedding consistency tests |
| **Vision/Image Intelligence** | `ai/` | NOT FOUND 🔴 | No evidence | MOJAD Core | LLM Abstraction | Medium | FUTURE ADAPTER: Design vision capability interface | Vision accuracy tests |
| **Reasoning Model Support** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Core | LLM Abstraction | Medium | FUTURE ADAPTER: Support reasoning models with extended thinking | Reasoning validation tests |

---

### **2. Agent Factory & Orchestration**

| Asset | Location | Status | Evidence | Owner | Dependencies | Security | Action | Tests |
|-------|----------|--------|----------|-------|--------------|----------|--------|-------|
| **Agent Factory Contract** | `ai/agents/` or `core/agents/` | NOT FOUND 🔴 | No agent factory pattern found | MOJAD Core | Governance (AI_AGENT_GOVERNANCE.md) | Critical | BUILD (PHASE 1 Contract): Define agent identity, capabilities, permissions, lifetime, provenance | Agent capability tests, privilege escalation tests |
| **OpenClaw Adapter Boundary** | NOT FOUND 🔴 | NOT VERIFIED ⚠️ | Referenced in governance; adapter implementation status unclear | MOJAD Core | Agent Factory | Critical — Must remain replaceable | AUDIT: Verify OpenClaw isolation; ensure MOJAD logic not embedded in adapter | OpenClaw swap tests, capability boundary tests |
| **MCP Tool Gateway** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Core | Agent Factory, Tool Registry | Critical — Tool security boundary | BUILD (PHASE 1 Contract): Define MCP tool authorization, scope, risk levels | Tool privilege tests, injection resistance tests |
| **Tool/Capability Registry** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Core | MCP Tool Gateway | Critical | BUILD (PHASE 1 Contract): Registry of approved tools, required permissions, risk classifications | Tool manifest validation tests |
| **Agent Session Lifecycle** | NOT FOUND 🔴 | NOT VERIFIED ⚠️ | session-service exists (see Services); session agent lifecycle unclear | TBD | Session Service, Governance | Critical | AUDIT: Session service; design agent-specific session wrapper | Session timeout tests, session isolation tests |
| **Agent Audit Logger** | NOT FOUND 🔴 | PARTIAL ⚠️ | Audit mentioned in governance; implementation unclear | MOJAD Core | Provenance System | Critical — Immutable agent action log | BUILD: Extend or create agent action audit trail | Audit immutability tests |
| **Approval Gate for High-Risk Actions** | NOT FOUND 🔴 | PARTIAL ⚠️ | Policy exists in governance; enforcement implementation unclear | MOJAD Policy | Authorization, Agent Factory | Critical | BUILD: Explicit approval flow for Level 3/4 agent actions | Approval bypass tests |
| **Agent Capability Scope Enforcer** | NOT FOUND 🔴 | NOT VERIFIED ⚠️ | RLS mentioned as NOT FOUND (CRITICAL); capability isolation unclear | MOJAD Core | Database (RLS), Authorization | Critical | BLOCKED: Cannot implement until RLS verified or implemented | Cross-agent isolation tests |

---

### **3. Opportunity Intelligence (Core MOJAD Moat)**

| Asset | Location | Status | Evidence | Owner | Dependencies | Security | Action | Tests |
|-------|----------|--------|----------|-------|--------------|----------|--------|-------|
| **Opportunity Engine Core** | `packages/opportunity-engine/` | PARTIAL ⚠️ | Referenced in README and architecture; directory structure exists; implementation status unclear | MOJAD Core | Database (Job, Application, Opportunity schemas in Prisma) | Medium | AUDIT: Verify Opportunity Engine implementation; map to source-of-truth; extend if needed | Engine contract tests |
| **Opportunity Graph** | NOT FOUND 🔴 | NOT FOUND 🔴 | TRUST_RULES.md mentions; no implementation found | MOJAD Intelligence | Opportunity Engine, Database | Medium | BUILD (PHASE 2): Connect Person→Skill→Goal→Opportunity→Organization→Business→etc. | Graph relationship tests |
| **Opportunity DNA / Genome** | NOT FOUND 🔴 | NOT FOUND 🔴 | Architecture mentioned; no schema found | MOJAD Intelligence | Opportunity Engine | Medium | BUILD (PHASE 2): Schema for structured opportunity attributes (category, requirements, skills, location, timing, value, effort, risk, trust, probability, freshness, source quality) | Attribute consistency tests |
| **Opportunity Ranking Algorithm** | NOT FOUND 🔴 | NOT VERIFIED ⚠️ | Contracts reference ranking; implementation unclear | MOJAD Intelligence | Opportunity Engine, Trust Intelligence, User Context | Critical | AUDIT: Verify ranking logic; design ethical growth optimization | Ranking fairness tests, manipulation resistance tests |
| **Opportunity Freshness Management** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Opportunity Engine, Database | Low | FUTURE ADAPTER (PHASE 2): Freshness scoring, expiration, staleness detection | Freshness accuracy tests |
| **Opportunity Discovery Pipeline** | NOT FOUND 🔴 | PARTIAL ⚠️ | job-service, feed-service exist; unified discovery unclear | MOJAD Intelligence | Opportunity Engine, Multiple Nets | Medium | AUDIT: Verify discovery sources; design cross-Net opportunity discovery | Discovery coverage tests |
| **Opportunity Verification** | NOT FOUND 🔴 | PARTIAL ⚠️ | Trust rules mention verification; implementation unclear | MOJAD Intelligence | Opportunity Engine, Trust Intelligence | Medium | BUILD (PHASE 2): Verify opportunity legitimacy, source quality, updated information | Verification accuracy tests |
| **Opportunity Success Prediction** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Opportunity Engine, AI Models, User Data | Medium | FUTURE ADAPTER (PHASE 3): ML model predicting user success probability | Prediction accuracy tests, bias tests |
| **Opportunity → User Relevance Matching** | NOT FOUND 🔴 | PARTIAL ⚠️ | Matching logic exists in job-service/feeds; unified matching unclear | MOJAD Intelligence | Opportunity Engine, User Profile, Skills, Goals | Medium | AUDIT: Verify matching logic; extend for cross-Net matching | Matching accuracy tests |

---

### **4. Trust Intelligence**

| Asset | Location | Status | Evidence | Owner | Dependencies | Security | Action | Tests |
|-------|----------|--------|----------|-------|--------------|----------|--------|-------|
| **Trust Graph** | NOT FOUND 🔴 | NOT VERIFIED ⚠️ | TRUST_RULES.md defines conceptually; no schema/implementation found | MOJAD Trust | Database, Verification System | Critical | BUILD (PHASE 2): Schema for trust relationships between users/businesses/services | Trust graph consistency tests |
| **Reputation Graph** | `reputation.schema.md` exists | PARTIAL ⚠️ | Schema document exists; implementation status unclear | MOJAD Trust | Database, Trust Rules | Medium | AUDIT: Verify reputation schema implementation; extend if needed | Reputation immutability tests |
| **Verification Levels** | TRUST_RULES.md (TR-015-020) | VERIFIED ✅ | 6+ verification rules defined; implementation status unknown | MOJAD Trust | Verification System | Critical | AUDIT: Verify implementation; ensure TR-015-020 are enforced | Verification scope tests |
| **Source Credibility Scoring** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Trust | Evidence System, ML | Low | FUTURE ADAPTER (PHASE 3): Score credibility of opportunity sources | Source credibility tests |
| **Fraud/Scam Detection** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Trust | User Data, Transaction Data | Critical | FUTURE ADAPTER (PHASE 3): Detect fraudulent opportunities/users | Fraud detection accuracy tests |
| **Risk Scoring (User/Business/Transaction)** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Trust | User/Business/Transaction Data | Critical | FUTURE ADAPTER (PHASE 3): Risk assessment for high-value actions | Risk accuracy tests |
| **Provenance Tracking (Trust Evidence)** | NOT FOUND 🔴 | PARTIAL ⚠️ | Provenance mentioned in governance; implementation unclear | MOJAD Trust | Audit System, Events | Critical | BUILD: Track source of every trust signal | Provenance integrity tests |
| **Community Trust Signals** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Trust | Community/Reputation System | Low | FUTURE ADAPTER (PHASE 3): Aggregate community feedback on trustworthiness | Signal accuracy tests |
| **Transaction Trust** | NOT FOUND 🔴 | PARTIAL ⚠️ | Payment transactions exist; trust evaluation unclear | MOJAD Trust | Payment System, Trust Rules | Medium | AUDIT: Verify transaction trust scoring against TRUST_RULES | Transaction safety tests |
| **Business Trust** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Trust | Business Profile, Business Intelligence | Medium | FUTURE ADAPTER (PHASE 2): Business credibility, reliability, verification | Business verification tests |

---

### **5. Research Intelligence**

| Asset | Location | Status | Evidence | Owner | Dependencies | Security | Action | Tests |
|-------|----------|--------|----------|-------|--------------|----------|--------|-------|
| **Research Engine Pipeline** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | AI Models, Evidence System | Medium | BUILD (PHASE 1 Contract): Research→Evidence→Validation→Simulation→Analysis→Experiment→Result→Provenance→Recommendation | Research integrity tests |
| **Evidence Classification** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Research Engine | Medium | BUILD (PHASE 1 Contract): Distinguish fact/claim/inference/hypothesis/estimate/uncertainty | Classification accuracy tests |
| **Source Validation** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Trust System, Research Engine | Medium | BUILD (PHASE 2): Validate research sources, citations, datasets | Source validation accuracy tests |
| **Citation Integrity** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Research Engine | Critical | BUILD (PHASE 2): Never fabricate citations; always link to actual sources | Citation fabrication tests |
| **Experiment Documentation** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Research Engine | Medium | FUTURE ADAPTER (PHASE 3): Document experimental design, results, limitations | Experiment reproducibility tests |
| **Dataset Provenance** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Research Engine, Evidence System | Medium | FUTURE ADAPTER (PHASE 3): Track dataset source, quality, freshness, licensing | Dataset integrity tests |
| **Result Provenance** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Research Engine, Audit System | Critical | BUILD (PHASE 2): Every result must be traceable to sources→methodology→model→date | Result traceability tests |

---

### **6. Coding Intelligence**

| Asset | Location | Status | Evidence | Owner | Dependencies | Security | Action | Tests |
|-------|----------|--------|----------|-------|--------------|----------|--------|-------|
| **Code Analysis Engine** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | AI Models, Code Repository | Medium | BUILD (PHASE 2 Contract): Repository analysis, architecture analysis, dependency analysis | Analysis accuracy tests |
| **Repository Constitution Enforcer** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Policy | Code Analysis Engine, Governance | Critical | BUILD: Enforce MOJAD_GOOS_COPILOT_AGENT_CONSTITUTION rules in AI-assisted code generation | Constitution violation tests |
| **Protected Production Rules** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Policy | Code Analysis Engine, Governance | Critical | BUILD: Prevent AI from modifying production-critical paths without explicit justification | Production mutation tests |
| **Test Generation & Validation** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Code Analysis Engine, AI Models | Medium | FUTURE ADAPTER (PHASE 2): Generate tests; validate test coverage | Test quality tests |
| **Security Analysis** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Code Analysis Engine, AI Models | Critical | FUTURE ADAPTER (PHASE 2): Detect security vulnerabilities, secrets exposure, auth bypasses | Security bug detection tests |
| **Bug Diagnosis** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Code Analysis Engine, AI Models | Medium | FUTURE ADAPTER (PHASE 2): Identify root causes of failures | Diagnosis accuracy tests |
| **Refactoring Proposals** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Code Analysis Engine, AI Models | Low | FUTURE ADAPTER (PHASE 2): Suggest improvements with evidence | Refactoring safety tests |
| **Evidence-Before-Code** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Policy | Code Analysis Engine, Governance | Critical | BUILD: Require evidence (audit/tests) before generation claims success | Evidence validation tests |
| **No Destructive Changes Without Justification** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Policy | Code Analysis Engine, Governance | Critical | BUILD: Flag/block deletions, schema migrations, breaking API changes without explicit evidence | Destructive change detection tests |

---

### **7. Business Intelligence**

| Asset | Location | Status | Evidence | Owner | Dependencies | Security | Action | Tests |
|-------|----------|--------|----------|-------|--------------|----------|--------|-------|
| **Business Discovery Engine** | NOT FOUND 🔴 | PARTIAL ⚠️ | BusinessNet mentioned in README; implementation unclear | MOJAD Intelligence | Business profiles, Opportunity Engine | Medium | AUDIT: Verify business discovery sources; design cross-Net discovery | Business discovery coverage tests |
| **Market Intelligence** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | External Data, AI Models | Low | FUTURE ADAPTER (PHASE 3): Market trends, competitor analysis, pricing analysis | Market accuracy tests |
| **Customer Intelligence** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Business Data, Transaction Data | Medium | FUTURE ADAPTER (PHASE 3): Customer demographics, behavior, satisfaction | Customer accuracy tests |
| **Supplier Discovery** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | ServiceNet/Marketplace, Business Profiles | Low | FUTURE ADAPTER (PHASE 2): Find suppliers matching business needs | Supplier matching tests |
| **Partnership Discovery** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Business Profiles, Capabilities | Low | FUTURE ADAPTER (PHASE 2): Identify partnership opportunities | Partnership accuracy tests |
| **Business Planning Assistant** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Business Intelligence, AI Models | Low | FUTURE ADAPTER (PHASE 3): Help businesses plan operations, financing, hiring | Planning accuracy tests |
| **Revenue Analysis** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Transaction Data, Business Profiles | Medium | FUTURE ADAPTER (PHASE 3): Revenue trends, forecasts, optimization | Revenue accuracy tests |
| **→ Opportunity Connection** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Business Intelligence, Opportunity Engine | Medium | BUILD (PHASE 2): Link business problems to opportunities (hiring, suppliers, financing, services, etc.) | Opportunity relevance tests |

---

### **8. Economic Intelligence**

| Asset | Location | Status | Evidence | Owner | Dependencies | Security | Action | Tests |
|-------|----------|--------|----------|-------|--------------|----------|--------|-------|
| **Economic Data Intelligence** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Economic Data, AI Models, Markets | Low | FUTURE ADAPTER (PHASE 3): Analyze markets, prices, currencies, trends | Economic accuracy tests |
| **Price Analysis** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Transaction Data, Market Data | Low | FUTURE ADAPTER (PHASE 3): Price trends, comparison, optimization | Price accuracy tests |
| **Currency Exchange** | NOT FOUND 🔴 | PARTIAL ⚠️ | Multi-currency architecture intended; implementation unclear | MOJAD Intelligence | Payment System, External Exchange APIs | Medium | AUDIT: Verify currency exchange rates and conversions | Currency accuracy tests |
| **Investment Intelligence** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | InvestNet Data, Market Data, AI Models | Medium | FUTURE ADAPTER (PHASE 3): Investment opportunities, risk analysis, portfolio insights | Investment accuracy tests |
| **Business Economics Analysis** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Business Data, Transaction Data | Medium | FUTURE ADAPTER (PHASE 3): Profitability, efficiency, growth, cash flow | Economics accuracy tests |
| **Transaction Analysis** | NOT FOUND 🔴 | PARTIAL ⚠️ | Payment transactions exist; analysis unclear | MOJAD Intelligence | Payment System, Transaction Data | Medium | BUILD (PHASE 2): Analyze transaction patterns, fraud, efficiency | Transaction pattern tests |
| **⚠️ CRITICAL: Policy-Controlled Actions** | NOT FOUND 🔴 | PARTIAL ⚠️ | Policy layer designed; enforcement verification unclear | MOJAD Policy | Authorization, Approval Gate | **CRITICAL** | BUILD: Ensure Economic Intelligence ANALYZES ONLY; financial execution requires explicit MOJAD Policy authorization | Policy bypass tests, financial safety tests |
| **⚠️ CRITICAL: No Autonomous Wallet/Payment Control** | NOT FOUND 🔴 | NOT VERIFIED ⚠️ | Pi Adapter designed; wallet key isolation unclear | MOJAD Security | Pi Adapter, Secret Management | **CRITICAL** | BLOCK: Verify wallets keys NEVER exposed to AI models/agents; all financial actions require approval gate | Key exposure tests |

---

### **9. Scientific Intelligence**

| Asset | Location | Status | Evidence | Owner | Dependencies | Security | Action | Tests |
|-------|----------|--------|----------|-------|--------------|----------|--------|-------|
| **Scientific Literature Analysis** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | AI Models, Research Papers, External APIs | Low | FUTURE ADAPTER (PHASE 4): Parse, analyze, summarize scientific papers | Paper analysis accuracy tests |
| **Evidence Comparison** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Research Engine, Scientific Intelligence | Low | FUTURE ADAPTER (PHASE 4): Compare conflicting scientific claims | Comparison accuracy tests |
| **Hypothesis Generation** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Scientific Intelligence, AI Models | Low | FUTURE ADAPTER (PHASE 4): Generate testable hypotheses; NEVER present as established fact | Hypothesis clarity tests |
| **Simulation Interfaces** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Scientific Intelligence | Low | FUTURE ADAPTER (PHASE 4): Connect to scientific simulation tools | Simulation integration tests |
| **Statistical Analysis** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Scientific Intelligence, Data | Low | FUTURE ADAPTER (PHASE 4): Statistical validation, significance testing | Statistical correctness tests |
| **Research Provenance** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Research Engine, Scientific Intelligence | Medium | BUILD (PHASE 4): Every scientific claim must link to sources | Provenance integrity tests |
| **⚠️ CRITICAL: Fact vs Inference** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Policy | Scientific Intelligence | **CRITICAL** | BUILD: NEVER present generated hypotheses as established scientific fact; distinguish inference from verification | Fact accuracy tests |

---

### **10. Physical AI & Robotics (Future-Compatible Boundary)**

| Asset | Location | Status | Evidence | Owner | Dependencies | Security | Action | Tests |
|-------|----------|--------|----------|-------|--------------|----------|--------|-------|
| **Physical AI Policy Layer** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Policy | Governance, AI Factory | Critical | BUILD (PHASE 1 Contract): Policy rules for physical world actions | Policy enforcement tests |
| **Hardware Interface Contract** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Physical AI Policy | Low | BUILD (PHASE 1 Contract): Abstract hardware capabilities, constraints, safety | Hardware abstraction tests |
| **Device Adapter** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence (no actual hardware) | MOJAD Intelligence | Hardware Interface Contract | Low | FUTURE ADAPTER (PHASE 4): Implement adapters for specific devices as they are integrated | Device adapter tests |
| **Command Authorization Flow** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Policy | Physical AI Policy, Approval Gate | Critical | BUILD (PHASE 1 Contract): Command → Validation → Policy Check → Authorization → Execution → Verification → Audit | Authorization bypass tests |
| **Safety Constraints** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Policy | Physical AI Policy, Hardware Interface | Critical | BUILD (PHASE 1 Contract): Define safety boundaries, fail-closed behavior, manual override | Safety violation tests |
| **Robotics Interface** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence (no robots) | MOJAD Intelligence | Device Adapter | Low | FUTURE ADAPTER (PHASE 4): Robotic arm/locomotive/manipulation interfaces | Robot control tests |
| **Drone/Aerial Interface** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence (no drones) | MOJAD Intelligence | Device Adapter | Low | FUTURE ADAPTER (PHASE 4): Drone flight, geofencing, payload control | Drone safety tests |
| **Machine/Manufacturing Interface** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence (no machines) | MOJAD Intelligence | Device Adapter | Low | FUTURE ADAPTER (PHASE 4): Industrial machine control, fabrication | Machine safety tests |
| **Sensor Network** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Device Adapter, Data Collection | Low | FUTURE ADAPTER (PHASE 4): Environmental sensors, monitoring, real-time data | Sensor accuracy tests |

---

### **11. Sovereign AI Infrastructure**

| Asset | Location | Status | Evidence | Owner | Dependencies | Security | Action | Tests |
|-------|----------|--------|----------|-------|--------------|----------|--------|-------|
| **AI Provider Registry & Lifecycle** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Core | Governance | Critical | BUILD (PHASE 1): Register providers, capabilities, versions, status, cost, availability, privacy policies | Provider registry tests |
| **Model Registry & Lifecycle** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Core | AI Provider Registry | Critical | BUILD (PHASE 1): Register models, versions, capabilities, cost, latency, context window, safety profile | Model registry tests |
| **Capability Registry** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Core | Model Registry | Critical | BUILD (PHASE 1): Map model capabilities to tasks (chat, reasoning, coding, vision, embeddings, etc.) | Capability mapping tests |
| **Model Router (Intelligent Selection)** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Core | Capability Registry, Policy | Critical | BUILD (PHASE 1 Contract + Phase 2 Implementation): Router that selects best provider/model based on task/cost/latency/capability/safety/policy/availability | Router accuracy tests, cost optimization tests |
| **Policy Gate (Model Selection)** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Policy | Model Router | Critical | BUILD (PHASE 1): Policy rules for which models/providers can be used for which actions | Policy compliance tests |
| **Agent Factory (Model-Agnostic)** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Core | Model Router, Policy Gate | Critical | BUILD (PHASE 1 Contract): Agent factory must work with any approved provider | Provider swap tests |
| **Tool/MCP Gateway (Provider-Agnostic)** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Core | Agent Factory | Critical | BUILD (PHASE 1 Contract): MCP protocol must not be provider-specific | MCP provider independence tests |
| **Audit/Provenance (Provider-Tracked)** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Audit | All above | Critical | BUILD (PHASE 1): Track which provider/model used for each action | Audit completeness tests |
| **Private/Local Inference Support** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence (no local models deployed) | MOJAD Intelligence | Model Router, Hardware | Low | FUTURE ADAPTER (PHASE 5): Support local/private inference for sensitive data | Local inference tests |
| **Edge Inference Support** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Model Router, Device Adapter | Low | FUTURE ADAPTER (PHASE 5): Support edge deployment for low-latency applications | Edge inference tests |
| **Provider Replacement (Real Test)** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Core | All infrastructure above | Critical | BUILD: Design must allow replacing one provider with another without MOJAD Core redesign | Provider replacement integration tests |

---

### **12. MOJAD AI Memory & Knowledge Architecture**

| Asset | Location | Status | Evidence | Owner | Dependencies | Security | Action | Tests |
|-------|----------|--------|----------|-------|--------------|----------|--------|-------|
| **User Context Store** | PARTIAL ⚠️ | PARTIAL ⚠️ | User profile service exists; context completeness unclear | MOJAD Core | User/Profile services, Database | Critical | AUDIT: Verify user context storage (goals, preferences, skills, learning, opportunities, history, permissions) | Context consistency tests, privacy tests |
| **User Goals** | NOT FOUND 🔴 | PARTIAL ⚠️ | User.goals schema reference unclear | MOJAD Intelligence | User Store | Medium | BUILD (PHASE 2): Store and update user goals; connect to opportunity matching | Goal tracking tests |
| **User Skills** | `user.schema.md` reference | PARTIAL ⚠️ | User.skills mentioned; schema details unclear | MOJAD Intelligence | User Store, Learning System | Medium | AUDIT: Verify skills storage; connect to job/opportunity matching | Skill accuracy tests |
| **User Learning Progress** | NOT FOUND 🔴 | NOT FOUND 🔴 | Learning directory exists; learning tracking unclear | MOJAD Intelligence | Learning System, User Store | Medium | AUDIT: Learning system; design progress tracking | Progress accuracy tests |
| **User Opportunity History** | NOT FOUND 🔴 | PARTIAL ⚠️ | Application schema exists; discovery history unclear | MOJAD Intelligence | Opportunity Engine, User Store | Medium | BUILD (PHASE 2): Track discovered opportunities, applications, outcomes | History completeness tests |
| **User Decision History** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | User Store, Audit | Medium | FUTURE ADAPTER (PHASE 2): Track user decisions, approvals, feedback for learning | Decision tracking tests |
| **Organizational Context** | NOT FOUND 🔴 | PARTIAL ⚠️ | BusinessNet exists; org context structure unclear | MOJAD Intelligence | Business profiles, Database | Medium | AUDIT: Business/team/project/role/policy context storage | Organization context tests |
| **Knowledge Context** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Intelligence | Document storage, Vector DB, Evidence System | Low | FUTURE ADAPTER (PHASE 2): Indexed documents, research, structured knowledge with provenance | Knowledge retrieval tests |
| **Opportunity Context** | NOT FOUND 🔴 | PARTIAL ⚠️ | Opportunity schemas exist; unified opportunity context unclear | MOJAD Intelligence | Opportunity Engine, Trust System, Skills/Learning | Medium | BUILD (PHASE 2): Unified opportunity context (graph, trust, skills requirements, outcomes) | Context accuracy tests |
| **⚠️ CRITICAL: Privacy Boundary** | NOT FOUND 🔴 | PARTIAL ⚠️ | Privacy principles documented; enforcement mechanism unclear | MOJAD Privacy | Database RLS, Access Control | **CRITICAL** | AUDIT: Verify privacy controls on memory stores; ensure user consent; implement data minimization | Privacy violation tests, consent tests |
| **⚠️ CRITICAL: No Uncontrolled Permanent Agent Memory** | NOT FOUND 🔴 | NOT FOUND 🔴 | No evidence | MOJAD Policy | Agent Lifecycle, Privacy Boundary | **CRITICAL** | BUILD: Agent session memory must expire; no permanent uncontrolled knowledge bases | Agent memory expiration tests |

---

## DEPENDENCIES & BLOCKERS

### **CRITICAL BLOCKERS (Must Resolve Before Implementation)**

| Blocker | Status | Impact | Resolution Required |
|---------|--------|--------|---------------------|
| **RLS NOT FOUND** | BLOCKED 🔴 | Cannot implement multi-tenant isolation; security risk | Audit/implement Row-Level Security in database layer |
| **Outbox Pattern NOT FOUND** | BLOCKED 🔴 | Event durability at risk; no guaranteed delivery | Audit/implement Outbox pattern for event publishing |
| **Better Auth Integration Status** | NOT VERIFIED ⚠️ | Cannot verify auth boundary | Audit Better Auth integration; confirm authentication foundation |
| **Prisma Migration History** | NOT VERIFIED ⚠️ | Cannot safely evolve schema | Verify canonical Prisma migration runner and history |
| **OpenClaw Isolation Status** | NOT VERIFIED ⚠️ | Cannot verify OpenClaw remains replaceable | Audit OpenClaw integration; identify MOJAD logic in adapter |
| **Secret Management** | NOT VERIFIED ⚠️ | Credential exposure risk | Audit secret storage, rotation, access controls |

### **YELLOW WARNINGS (Clarification Needed)**

| Warning | Status | Impact | Action |
|---------|--------|--------|--------|
| **AI Directory Empty** | NOT FOUND 🔴 | No AI infrastructure exists | Decision: Build from scratch or integrate existing? |
| **Events System Incomplete** | PARTIAL ⚠️ | Event publishing may not be reliable | Audit EventBus/EventPublisher; verify Outbox pattern |
| **Services Implementation** | PARTIAL ⚠️ | Service layer may not be production-ready | Audit each service (auth, payment, wallet, etc.) |
| **Trust Implementation** | PARTIAL ⚠️ | Trust Rules extensive but code implementation unclear | Audit Trust system implementation against TR-001-103 |
| **Database Schema Completeness** | PARTIAL ⚠️ | Not all data models may be implemented | Audit Prisma schema against SOURCE_OF_TRUTH registry |
| **Authorization Layer** | NOT VERIFIED ⚠️ | Authentication exists; authorization enforcement unclear | Audit authorization implementation (RBAC, policies, approval flows) |

---

## PHASE 1 IMPLEMENTATION ROADMAP

### **PHASE 1 FOCUS: Contracts + Abstractions (No Full Implementation)**

**Objective:** Build the foundation interfaces and contracts that Phase 2+ will implement.

**Deliverables:**

| Component | Deliverable | Owner | Status |
|-----------|-------------|-------|--------|
| **1. Governance Update** | Audit and extend MOJAD_GOOS_COPILOT_AGENT_CONSTITUTION.md with AI-specific governance | MOJAD Core | TBD |
| **2. Strategic Asset Registry** | THIS DOCUMENT (MOJAD_AI_STRATEGIC_ASSET_REGISTRY.md) | MOJAD Core | IN PROGRESS |
| **3. AI Provider Contract** | `/contracts/ai/provider.contract.ts` — Abstract interface for AI providers | MOJAD Core | TO BUILD |
| **4. Model Router Contract** | `/contracts/ai/model-router.contract.ts` — Task→Model selection logic | MOJAD Core | TO BUILD |
| **5. Agent Factory Contract** | `/contracts/ai/agent-factory.contract.ts` — Agent identity/capabilities/permissions | MOJAD Core | TO BUILD |
| **6. MCP Tool Gateway Contract** | `/contracts/ai/mcp-tools.contract.ts` — Tool authorization/scope/risk | MOJAD Core | TO BUILD |
| **7. Opportunity Intelligence Contract** | `/contracts/opportunities/intelligence.contract.ts` — Extend existing opportunity engine | MOJAD Intelligence | TO BUILD |
| **8. Trust Intelligence Contract** | `/contracts/trust/intelligence.contract.ts` — Trust evaluation framework | MOJAD Trust | TO BUILD |
| **9. Research Engine Contract** | `/contracts/research/engine.contract.ts` — Evidence→Result pipeline | MOJAD Intelligence | TO BUILD |
| **10. Physical AI Policy Contract** | `/contracts/physical/policy.contract.ts` — Safe hardware command boundary | MOJAD Policy | TO BUILD |
| **11. Sovereign AI Infrastructure Contract** | `/contracts/ai/sovereign-infrastructure.contract.ts` — Provider/model/capability registries | MOJAD Core | TO BUILD |
| **12. Audit Trail Contract** | `/contracts/core/audit-provenance.contract.ts` — Extend existing audit system | MOJAD Audit | TO BUILD |

**Tests Required:**
- Contract validation
- Interface compatibility
- Extensibility tests
- Provider swap simulations

---

## SOURCE OF TRUTH UPDATES

This registry updates and extends:

- **MOJAD_GOOS_SOURCE_OF_TRUTH.md** — Maps domains to authorities
- **MOJAD_GOOS_COPILOT_AGENT_CONSTITUTION.md** — Governance framework
- **AI_AGENT_GOVERNANCE.md** — Agent action levels and governance
- **PROVIDER_ABSTRACTION.md** — Provider isolation principles

---

## NEXT STEPS (AWAITING APPROVAL)

1. ✅ **Approve this Registry** — Confirm PHASE 1 scope and status definitions
2. ⏭️ **PHASE 1 BUILD** — Create contracts for items marked "TO BUILD"
3. ⏭️ **RESOLVE BLOCKERS** — Audit RLS, Outbox, auth, secrets
4. ⏭️ **CLARIFY YELLOW WARNINGS** — Audit services and existing implementations
5. ⏭️ **PHASE 2 PLANNING** — Design working provider adapters, routing, agents
6. ⏭️ **PHASE 3+** — Build specialized intelligence layers (trust, research, business, etc.)

---

**This registry is the canonical source for MOJAD AI infrastructure status.**

**Last Updated:** 2026-09-12  
**Prepared By:** GitHub Copilot (MOJAD AI Integration Task)  
**Classification:** ENGINEERING GOVERNANCE

