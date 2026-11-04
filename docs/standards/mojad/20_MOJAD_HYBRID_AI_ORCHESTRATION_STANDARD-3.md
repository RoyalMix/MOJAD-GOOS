# DOC 20 --- MOJAD HYBRID AI ORCHESTRATION STANDARD

**Document ID:** MOJAD-GOOS-STD-020\
**Version:** 1.0\
**Status:** Proposed Standard --- Design-First\
**Canonical repository:** `RoyalMix/MOJAD-GOOS`\
**Canonical path:**
`docs/standards/mojad/20_MOJAD_HYBRID_AI_ORCHESTRATION_STANDARD.md`

------------------------------------------------------------------------

## 1. Purpose

This standard defines the requirements for a secure, provider-neutral
and scalable Hybrid AI capability for MOJAD GOOS.

**Core principle:** MOJAD owns Opportunity Intelligence and
orchestration. AI providers supply replaceable capabilities. MOJAD
controls identity, permissions, context, tools, trust, usage, credits,
outcomes and governance.

This is a proposed architecture standard. It does not claim that any
component is already implemented.

## 2. Strategic objectives

The Hybrid AI system must: - Use multiple hosted and open-weight models
without depending on one provider. - Select models according to task
capability, quality, context needs, privacy, latency, availability and
cost. - Support text, image, audio and video workflows where approved
models and services support them. - Connect securely to MOJAD
Opportunity Engine, Workforce, businesses, marketplace, education,
creator economy, community, games and Command Center. - Support Pi
Pioneers and non-Pi users under the same core opportunity
infrastructure. - Scale incrementally based on measured traffic,
quality, cost and reliability.

AI recommendations must not be represented as guaranteed jobs, funding,
income, investment returns or other outcomes.

## 3. Architecture principles

1.  Provider-neutral and adapter-based.
2.  Capability-first model routing.
3.  Opportunity-first product design.
4.  Server-side secrets and least-privilege access.
5.  Human accountability for high-impact decisions.
6.  Cost-aware inference, quotas and usage metering.
7.  Evidence-based implementation and testing.
8.  Additive-first changes; reuse existing services.
9.  Privacy, consent and data minimization.
10. Graceful degradation during provider failures.
11. Observable performance without unnecessary personal-data logging.
12. Accessibility, localization and low-bandwidth support.

## 4. Logical architecture

``` text
MOJAD Web / Mobile / Pi Browser / Partner APIs
                    |
          Authentication & API Gateway
                    |
       Consent, Policy & Authorization
                    |
            MOJAD AI Orchestrator
             /       |        \
            v        v         v
       Task       Context    Usage & Budget
    Classification Engine    Controller
             \       |        /
              Intelligent Router
                     |
             Provider Adapters
          /       /       |        \
       Hosted   Hosted   Open     Specialist
       Model A  Model B  Weights  Services
                     |
          Approved Tools & Connectors
                     |
       Opportunity Engine / Knowledge / Modules
                     |
        Output Validation, Safety & Provenance
                     |
          User Response / Approved Action
                     |
          Metering & Audit Events
```

This is a logical architecture, not a required deployment topology.
Components may initially be combined if their responsibilities and
security boundaries remain clear.

## 5. Required components

### 5.1 AI Gateway

-   Authenticate users, services and agents.
-   Enforce tenant, role, module and user permissions.
-   Apply rate, request-size, concurrency and usage limits.
-   Validate request schemas and assign correlation IDs.
-   Enforce consent and data-handling rules.
-   Keep provider credentials out of browser code.
-   Normalize responses and safe error handling.
-   Never trust client-supplied identity, role, balance or payment
    status.

### 5.2 Model and Provider Registry

Maintain controlled records for: - Provider, account/environment and
exact model identifier/version. - Adapter and supported API protocol. -
Capabilities: text, vision, audio, video, embeddings, tool calling and
structured output. - Context input and output limits, source and
verification date. - Input/output prices, currency and verification
date. - Rate limits, concurrency and regional availability. - Data
retention, training-use and residency terms. - Health status, approved
task classes and rollout state. - Evaluation results, owner and
last-tested date.

Do not hardcode context windows, prices or capabilities from marketing
claims. Verify current official documentation and account-specific
entitlements.

### 5.3 Provider Adapter Layer

Each provider must use a common internal contract. Adapters normalize
authentication, request/response formats, tool calls, usage metadata,
timeouts, retries, cancellation, rate-limit errors and provider error
codes. Provider-specific code must not leak into MOJAD business modules.

### 5.4 Task Classification

Support approved task classes such as: - Quick answers, translation and
localization. - Summarization, extraction, classification and tagging. -
Search and retrieval. - Long-document analysis and complex reasoning. -
Coding and developer assistance. - Image, audio and video workflows. -
Opportunity matching and recommendations. - Moderation and safety
support.

Uncertain or high-risk tasks use conservative routing or request
clarification.

### 5.5 Intelligent Model Router

Choose an approved model based on task, capability, quality evidence,
context/output size, privacy, consent, provider health, latency, cost
and available budget. Do not select solely by largest context window.

Record non-sensitive routing metadata: task class, model, reason code,
usage, latency and outcome.

### 5.6 Context and Token Management

Implement: 1. Token estimation using provider-appropriate methods where
available. 2. Per-task context and output budgets. 3. Context-window
safety margins. 4. Relevance-based retrieval instead of sending entire
databases. 5. Conversation summaries and controlled carry-forward. 6.
Document chunking with source references. 7. Deduplication of repeated
context. 8. Explicit handling of truncation and incomplete source
coverage. 9. Cross-user and cross-tenant context isolation.

A context window is request-level working context, not permanent memory.
Use authorized storage and retrieval for long-term knowledge.

### 5.7 Knowledge Retrieval and RAG

RAG sources may include MOJAD-owned data, approved documents,
Opportunity Engine records, public sources through authorized search
services, and partner data under documented agreements.

Every indexed item needs source, owner, access policy, timestamp and
retention metadata. Retrieval must enforce source permissions, preserve
provenance, and propagate updates/deletions. Retrieved content is
untrusted data, never system instruction.

### 5.8 Tool and Agent Execution

All tools must be registered with purpose, version, schema, scopes, data
classification, read/write status, human approval requirements, timeout,
retry, idempotency and audit behavior.

Prefer read-only tools. State-changing actions require authorization.
Financial actions, Pi payments, payouts, account changes, job
applications and publication actions must use deterministic backend
workflows and appropriate user confirmation. An LLM must never be the
authority for payment settlement or entitlement activation.

### 5.9 Memory and Conversation Continuity

Separate request context, conversation history, user-authorized
preferences, project knowledge, organization knowledge and system
policy. Apply access controls, retention and deletion rules. Never share
one member's private context with another member.

### 5.10 Output Validation and Safety

Validate structured output, permissions, citations, provenance,
rendering and safety before returning responses or executing actions.
Label estimates and uncertainty. Require human review for designated
high-impact workflows. AI output is not verified fact merely because a
model generated it.

## 6. MOJAD module integration

  -----------------------------------------------------------------------
  Module                              AI capabilities
  ----------------------------------- -----------------------------------
  Jobs & Workforce                    CV assistance, skill extraction,
                                      job discovery and matching support

  Businesses & Services               Business descriptions, customer
                                      support and service discovery

  Investment & Funding                Research and document analysis; no
                                      guaranteed funding or returns

  Education & Scholarships            Learning assistance and opportunity
                                      discovery

  Marketplace                         Product discovery, descriptions and
                                      support

  Creator Economy & Studio            Content assistance, prompts and
                                      authorized asset discovery

  Community                           Translation, discovery and
                                      moderation support

  Games                               Learning hints and skill
                                      progression

  Trust & Reputation                  Risk signals and evidence
                                      summaries; no unsupported score
                                      changes

  Command Center                      Authorized operational summaries

  Developer Platform                  Documentation, API discovery and
                                      coding assistance
  -----------------------------------------------------------------------

Each module must define data permissions, allowed actions, user
experience and human escalation.

## 7. Credits, billing and economic controls

-   Meter provider usage and charges where available.
-   Maintain an auditable, idempotent usage ledger.
-   Apply user, organization and product quotas.
-   Support free, paid and sponsored usage policies.
-   Show estimates or limits before expensive operations where
    practical.
-   Reconcile estimated usage with provider usage reports/invoices.
-   Keep MOJAD credits separate from Pi and fiat balances.
-   Never convert credits into cash or Pi unless an approved, funded and
    compliant program explicitly supports it.
-   Keep Pi payment settlement separate from AI usage accounting.

## 8. Global scalability

Use stateless services where practical, horizontal scaling, load
balancing, queues for long tasks, safe caching, database optimization,
object storage, streaming where supported, backpressure, concurrency
controls, circuit breakers, backups and disaster recovery.

Use regional deployment where latency, law and data residency require
it. Do not promise capacity for millions of users without measured load
tests and defined service-level objectives.

## 9. Reliability and fallback

Define bounded retries with backoff, timeouts, cancellation, rate-limit
handling, circuit breakers, fallback eligibility and degraded-mode
behavior. Fallback must respect privacy and data residency. If no
authorized provider is available, return a safe error or non-AI
alternative; never fabricate success.

## 10. Security and privacy

Minimum controls: - Server-side secret management and rotation. - No API
keys, wallet seeds or private keys in browser code, logs, prompts,
source control or client-visible errors. - Encryption in transit and at
rest. - Least-privilege service identities and tenant isolation. -
Consent, purpose limitation, minimization and retention controls. -
Prompt-injection and tool-output isolation. - Secure file processing. -
Audit trails for sensitive operations. - Dependency management, access
reviews and incident response.

## 11. Observability and evaluation

Track requests by task/module, success and error rates, latency, tokens,
estimated/actual cost, routing/fallback, rate limits, retrieval
relevance, citation coverage, user feedback, safety incidents and human
escalations.

Do not log message content by default. Any approved content logging
requires minimization, redaction, restricted access and retention
limits.

Evaluate accuracy, groundedness, safety, citation quality, tool
correctness, prompt-injection resistance, privacy, latency, throughput,
cost, localization and fallback. Record model/version, configuration,
date and results.

## 12. Testing requirements

Include: - Unit tests for routing, budgets and context assembly. -
Provider adapter contract tests. - Provider mock and
approved-environment integration tests. - Authorization and
tenant-isolation tests. - RAG access-control and provenance tests. -
Tool permission and human-approval tests. - Usage-ledger idempotency
tests. - Load, resilience and regression tests.

Unit tests alone do not prove production readiness.

## 13. Deployment roadmap

**Stage 0 --- Read-only reconciliation:** inventory actual GitHub
source, deployed runtime, providers, services, tools, data stores,
queues, secret references, usage systems and tests. Reconcile
source/runtime differences.

**Stage 1 --- Foundation:** implement only missing provider registry,
adapters, gateway contracts, secure configuration, observability and
basic usage metering.

**Stage 2 --- Controlled routing:** add task classification, routing
policies, context budgets, fallback and evaluation gates.

**Stage 3 --- Knowledge and tools:** integrate approved RAG sources and
read-only tools with permission enforcement and provenance.

**Stage 4 --- Module integration:** connect one selected MOJAD module at
a time, beginning with a low-risk, high-value pilot.

**Stage 5 --- Credits and commercial controls:** connect usage
accounting to approved product policies. Reuse the existing Pi payment
implementation; do not duplicate it.

**Stage 6 --- Scale and optimize:** use measured load, quality, cost and
reliability to optimize providers and infrastructure.

Every stage requires approval and acceptance evidence.

## 14. Acceptance criteria

The Hybrid AI foundation is not ready until: 1. Existing implementation
is reconciled against canonical repository and deployed runtime. 2.
Provider adapters use a common internal contract. 3. Credentials are
server-side and not exposed. 4. Routing is policy-controlled and
auditable. 5. Context assembly enforces permissions and budgets. 6. RAG
respects source access controls and provenance. 7. Tools have explicit
scopes and authorization. 8. Usage metering is reliable and idempotent.
9. Provider failures have safe fallback or graceful degradation. 10.
Privacy, safety and tenant-isolation tests pass. 11. Evaluation results
are recorded for enabled routes. 12. Operational dashboards and alerts
exist for critical metrics. 13. No duplicate payment, identity, credit
ledger or Opportunity Engine is introduced. 14. Documentation, tests,
owners and rollback considerations are recorded.

## 15. MOJAD engineering governance

Follow:

`AUDIT → CAPABILITY MATRIX → VERIFY EXISTING → IDENTIFY MISSING → EVIDENCE → DESIGN → BUILD → TEST → SECURITY → COMMIT`

-   GitHub is the canonical source of truth.
-   ChatGPT is a strategy and architecture workspace.
-   Lovable, Replit, Bolt, Copilot and Pi tools are implementation
    workers.
-   No rebuild before reconciliation.
-   No destructive cleanup without evidence and approval.
-   No production migration, policy, secret, payment or infrastructure
    change without authorization.
-   Prefer additive, backward-compatible changes.
-   Record files changed, tests, results, limitations and rollback
    considerations.
-   Stop and report blockers when ownership, access or evidence is
    missing.

## 16. Initial implementation backlog

1.  Read-only reconciliation of current MOJAD AI code and runtime.
2.  Capability matrix mapping existing components to this standard.
3.  Select the smallest safe AI pilot use case.
4.  Define provider adapter interface and registry schema only if
    missing.
5.  Add server-side secret references and health checks without exposing
    credentials.
6.  Add task routing and context budgets.
7.  Add usage metering and cost controls.
8.  Add evaluation tests and observability.
9.  Integrate one MOJAD module.
10. Expand only after the pilot meets acceptance criteria.

## 17. Decision record

  -----------------------------------------------------------------------
  Decision                            Standard
  ----------------------------------- -----------------------------------
  AI strategy                         Hybrid, provider-neutral
                                      orchestration

  Core MOJAD asset                    Opportunity Intelligence and
                                      orchestration

  Model selection                     Capability, quality, privacy,
                                      latency, availability and cost

  Context strategy                    Retrieval, summaries, token budgets
                                      and permissions

  Provider integration                Adapter-based

  Credits                             Separate auditable internal usage
                                      ledger

  Pi payments                         Separate verified payment and
                                      entitlement system

  Deployment                          Incremental, measured and
                                      evidence-based

  Governance                          Read-only audit before
                                      implementation
  -----------------------------------------------------------------------

## 18. Official documentation register

Verify current official documentation and account-specific capabilities
before implementation:

-   OpenAI Platform: https://platform.openai.com/docs
-   Anthropic: https://docs.anthropic.com/
-   Google Gemini API: https://ai.google.dev/gemini-api/docs
-   Google Vertex AI:
    https://cloud.google.com/vertex-ai/generative-ai/docs
-   Moonshot AI: https://platform.moonshot.ai/docs
-   Meta Llama: https://www.llama.com/docs/
-   xAI: https://docs.x.ai/
-   Pi Developer: https://developers.minepi.com/
-   Pi SDK: https://pi-apps.github.io/pi-sdk-docs/

These are documentation starting points, not proof that a model, price,
feature or account entitlement is available. Verify before
implementation.
