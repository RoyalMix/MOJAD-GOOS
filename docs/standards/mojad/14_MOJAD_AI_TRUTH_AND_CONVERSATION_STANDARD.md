MOJAD GOOS — AI Truth & Conversation Standard

Document ID: MOJAD-STD-014
Version: 1.0
Status: Proposed Standard — Requires Review and Approval
Owner: MOJAD GOOS Governance
Scope: MOJAD AI, conversational interfaces, AI agents, retrieval, opportunity discovery, tool execution, user trust, and AI-generated recommendations.

---

1. Purpose

This standard defines how MOJAD GOOS AI systems must communicate truthfully, represent uncertainty, use evidence, discover opportunities, execute tools, and protect users from fabricated claims or misleading outcomes.

MOJAD AI is intended to help people discover and pursue jobs, businesses, services, investment opportunities, grants, scholarships, courses, communities, partnerships, and other practical opportunities.

The AI experience must be useful, transparent, accountable, and grounded in verifiable information.

Core principle: MOJAD AI must never present an unverified claim as a verified fact.

2. Scope

This standard applies to:

- MOJAD AI chat and voice assistants.
- AI-powered search and recommendations.
- Opportunity discovery and matching.
- AI agents that call APIs or external tools.
- Business, employment, investment, learning, and partner workflows.
- AI-generated summaries, reports, notifications, and user-facing content.
- Automated actions affecting accounts, payments, identity, reputation, or access.

It applies regardless of the underlying model or provider, including future model replacements.

3. Fundamental Truthfulness Principles

3.1 No Fabricated Opportunities

MOJAD AI must not invent:

- Job vacancies or employer commitments.
- Grants, scholarships, courses, or application deadlines.
- Investors, funding availability, or investment offers.
- Businesses, merchants, service providers, or partner organizations.
- Prices, salaries, rewards, transaction results, or user balances.
- Official partnerships, endorsements, certifications, or approvals.
- API capabilities, integration status, or production deployment results.

If relevant information cannot be verified, the assistant must clearly say so.

3.2 No False Execution Claims

MOJAD AI must distinguish between:

1. Suggesting an action.
2. Preparing an action.
3. Requesting user authorization.
4. Submitting an action.
5. Receiving provider confirmation.
6. Verifying the final outcome.

The assistant must not claim that a message was sent, payment completed, file created, application submitted, account verified, or deployment published unless the available execution evidence supports that exact claim.

A tool request is not proof of successful execution.

A successful API response is not necessarily proof of the final business outcome.

3.3 No False Certainty

When evidence is incomplete, contradictory, stale, or unavailable, the assistant must explain the limitation in clear language.

It must not invent confidence percentages or imply certainty that the underlying evidence does not support.

3.4 No Misleading Authority

MOJAD AI must not imply that it speaks officially for Pi Network, a government, a bank, an employer, an investor, or another organization unless explicitly authorized and supported by evidence.

It must distinguish between a proposal, a planned capability, a prototype, a tested feature, and an operating production service.

4. Evidence and Claim Classification

All consequential system claims should be associated with an appropriate evidence state.

Status| Meaning
VERIFIED-OFFICIAL-SOURCE| Supported by an applicable official source.
VERIFIED-CODE| Confirmed by inspection of the relevant implementation.
VERIFIED-DATABASE| Confirmed by authorized inspection of actual database state.
VERIFIED-PROVIDER| Confirmed by the relevant provider.
VERIFIED-RUNTIME| Confirmed by an observed runtime test in the named environment.
BASELINE-REPORTED| Reported by a previous audit but not independently reconfirmed.
PARTIAL| Some evidence exists, but the full claim is not established.
UNKNOWN| Evidence is insufficient or unavailable.
BLOCKED| Verification or execution cannot proceed because a requirement is unmet.

These labels must not be treated as interchangeable.

For example, VERIFIED-CODE does not establish VERIFIED-RUNTIME. VERIFIED-RUNTIME in a development environment does not establish production readiness.

Evidence must be dated where freshness matters.

5. Source Quality and Freshness

When using external information, MOJAD AI should prioritize:

1. Applicable official documentation or authoritative records.
2. Direct evidence from the relevant provider or organization.
3. Trusted primary-source announcements.
4. Reputable secondary sources.
5. Community reports, clearly labeled as unverified where appropriate.

The assistant should identify the source and its date when that information materially affects a user's decision.

Time-sensitive information—including job availability, deadlines, prices, exchange rates, funding offers, opening hours, and application status—must be rechecked when practical.

If current verification is unavailable, the assistant must disclose that limitation.

A cached result must not automatically be represented as current.

6. Opportunity Discovery Standard

Every opportunity record should distinguish verified facts from claims made by its publisher.

Where available, opportunity records should include:

- Unique opportunity identifier.
- Opportunity category.
- Publisher or responsible organization.
- Source URL or evidence reference.
- Publication and last-verification timestamps.
- Location and eligibility criteria.
- Application or contact method.
- Closing date, if applicable.
- Compensation or cost information, if verified.
- Verification status.
- Known limitations.
- Reporting and correction mechanism.

6.1 Matching Is Not a Guarantee

AI matching may estimate relevance based on user preferences, eligibility, location, skills, availability, and other authorized data.

A match does not guarantee employment, funding, admission, payment, business success, or acceptance by a partner.

Recommendations should explain the most relevant matching factors where practical.

6.2 Expired and Withdrawn Opportunities

Expired, withdrawn, or invalid opportunities should be removed from active recommendations or visibly labeled.

If the system cannot establish whether an opportunity remains open, it must not describe it as confirmed open.

6.3 Scam and Abuse Signals

MOJAD AI should identify suspicious indicators, including requests for unexplained advance fees, impersonation, unrealistic returns, suspicious payment instructions, or inconsistent organization details.

These indicators should trigger appropriate warnings or review, not unsupported accusations.

A risk signal is not by itself proof of criminal conduct.

7. Conversation Behavior

MOJAD AI should:

- Answer the user's actual question.
- Ask a concise clarification when a critical detail is missing.
- Distinguish facts, assumptions, estimates, and recommendations.
- Explain relevant limitations.
- Provide practical next steps.
- Avoid unnecessary repetition.
- Correct material errors transparently.
- Use the user's preferred language when supported.
- Avoid manipulative urgency, pressure, or exaggerated promises.

The assistant should not overwhelm users with internal technical details when a concise explanation is sufficient.

For complex decisions, it should explain relevant trade-offs and identify what still needs verification.

8. Tool and Agent Execution

Before using a tool, the system should verify:

- The tool is available and authorized.
- The action is relevant to the user's request.
- Required parameters are present.
- The action's risk level is understood.
- The requested permissions are sufficient.
- User confirmation is obtained where required.

8.1 Execution States

Tools and workflows should expose explicit states where practical:

- NOT_STARTED
- PREPARED
- AWAITING_AUTHORIZATION
- SUBMITTED
- PROCESSING
- SUCCEEDED
- FAILED
- PARTIAL_SUCCESS
- UNKNOWN_OUTCOME
- CANCELLED

An ambiguous timeout must not automatically be interpreted as failure or success.

Before retrying a potentially consequential operation, the system should check whether the first attempt may already have completed.

8.2 Idempotency and Duplicate Prevention

Payment, application submission, messaging, account creation, and other repeat-sensitive operations should use idempotency controls where supported.

The system must not retry an operation blindly when doing so could create duplicate charges, submissions, messages, or records.

8.3 Honest User-Facing Reporting

The assistant must report the actual execution state and relevant next step.

If execution fails, it should explain the failure when known and offer a safe recovery path.

If the result cannot be confirmed, it should say that the result is unknown rather than claiming success.

9. Human Approval and Consequential Actions

Human authorization and review must be required according to the risk of the action.

At minimum, explicit authorization and appropriate controls are required before consequential actions involving:

- Payments, transfers, refunds, or financial commitments.
- Changes to identity, account ownership, or permissions.
- Changes to production security policy.
- Material changes to trust or reputation scoring rules.
- Public commitments made on behalf of a user or organization.
- Irreversible deletion or modification of critical data.
- Production releases that can materially affect users or funds.

AI may prepare a proposed action, summarize risks, and present a confirmation screen. It must not bypass required authorization.

Human approval must be recorded when required by the applicable governance process.

10. Privacy and Personalization

MOJAD AI must use personal information only for authorized, relevant purposes.

Requirements include:

- Data minimization.
- Access controls.
- Protection of authentication credentials and secrets.
- Safe handling of uploaded files and external content.
- Appropriate retention and deletion controls.
- Avoidance of unnecessary disclosure to external models or tools.
- Clear handling of sensitive or confidential information.
- Respect for user permissions and applicable privacy requirements.

The system must not expose private information about one user to another user through conversation, retrieval, recommendations, logs, or generated summaries.

Personalization must not silently override explicit user constraints.

11. Untrusted Content and Prompt Injection

External webpages, uploaded documents, opportunity listings, user-generated content, tool outputs, and third-party API responses must be treated as untrusted input.

Instructions contained inside retrieved content must not override the system's authorized rules or the user's legitimate permissions.

The system should:

- Separate instructions from retrieved data.
- Validate tool arguments.
- Restrict tools to approved operations.
- Prevent unauthorized disclosure of secrets.
- Validate external content before consequential use.
- Record and investigate suspicious inputs.
- Avoid executing code or transactions merely because external content requests them.

12. AI Model and Provider Independence

MOJAD GOOS should support replaceable AI model providers through stable internal interfaces.

The architecture should separate:

- Model selection.
- Prompt and policy management.
- Retrieval and evidence services.
- Tool authorization.
- Business logic.
- Conversation state.
- Evaluation and monitoring.
- Provider-specific adapters.

Changing the model provider must not silently change financial rules, identity policy, reputation logic, or access permissions.

If a preferred model is unavailable, the system may use an approved fallback only when the fallback can meet the task's requirements.

A fallback must not be described as equivalent if it lacks required capabilities.

13. Capability Registry

The platform should maintain a capability registry describing each important AI feature.

Each entry should include:

- Capability name and purpose.
- User-facing description.
- Required provider or service.
- Required credentials and permissions.
- Supported environments.
- Current evidence status.
- Known limitations.
- Failure behavior.
- Responsible owner.
- Last verification date.
- Applicable security and acceptance tests.

The user interface must not advertise a capability as operational merely because a button, prompt, API wrapper, or placeholder exists.

14. Evaluation and Quality Assurance

MOJAD AI must be evaluated against realistic tasks before major releases.

The evaluation suite should include:

- Accurate answers to known questions.
- Requests for unavailable information.
- Fabricated-opportunity detection.
- Expired opportunity handling.
- Conflicting-source resolution.
- Tool success and failure reporting.
- Authentication and authorization boundaries.
- Prompt-injection resistance.
- Privacy and data-leakage checks.
- Duplicate-action prevention.
- Multilingual conversation quality.
- Accessibility and mobile usability.
- Appropriate escalation to human review.

Record test inputs, expected behavior, actual results, defects, and release decisions.

Critical failures must block release until resolved or explicitly accepted through an authorized exception process.

15. Monitoring and Incident Response

Where legally and operationally appropriate, monitor:

- Unsupported-claim reports.
- Incorrect or expired opportunity listings.
- Tool execution failures.
- Duplicate operations.
- Unauthorized access attempts.
- Privacy incidents.
- Provider errors and latency.
- AI fallback activation.
- User feedback and correction requests.

Logs must minimize sensitive information.

For a confirmed material incident, the responsible team should assess impact, restrict affected functionality when necessary, correct misleading information, notify affected parties where appropriate, and document preventive actions.

16. User Feedback and Corrections

Users should have a practical way to report:

- False or expired opportunities.
- Incorrect business details.
- Misleading AI answers.
- Suspected scams.
- Privacy concerns.
- Incorrect execution claims.
- Unsafe or abusive content.

Reports should receive an identifiable status and be routed to an appropriate review process.

Corrections should preserve a suitable audit trail without unnecessarily exposing private user information.

17. Metrics

MOJAD GOOS should measure AI quality using outcome-focused metrics, including:

- Verified-answer rate on evaluated tasks.
- Unsupported-claim rate.
- Opportunity freshness and validity.
- Tool execution accuracy.
- Duplicate-action rate.
- Successful task completion.
- User-reported error rate.
- Privacy and security incident rate.
- Correction turnaround time.
- Human escalation quality.
- User satisfaction.

Metrics must be calculated from documented definitions and reliable data.

The platform must not invent performance percentages or present unmeasured targets as actual results.

18. Release Acceptance Criteria

A release affecting MOJAD AI must establish that:

- Relevant policies are implemented or explicitly documented as outstanding.
- Claims about capabilities match the actual implementation.
- Opportunity records have suitable source and freshness handling.
- Tool outcomes are reported accurately.
- Consequential actions have the required authorization controls.
- Privacy and security tests pass.
- Critical evaluation failures are resolved.
- Fallback behavior is understood.
- Monitoring and incident-response processes are available.
- Known limitations are documented.
- The release decision and evidence are recorded.

19. Governance and Exceptions

Exceptions must identify:

- The requirement being waived.
- The reason.
- The scope and duration.
- The risks and mitigations.
- The responsible owner.
- The approving authority.
- The expiration or review date.

AI agents and development tools may prepare proposals and evidence but must not independently approve their own exceptions where independent approval is required.

20. Definition of Done

This standard is implemented only when the relevant requirements have been mapped to actual code, configuration, tests, operational processes, and evidence.

Publishing this document alone does not prove that MOJAD AI is fully compliant with it.
