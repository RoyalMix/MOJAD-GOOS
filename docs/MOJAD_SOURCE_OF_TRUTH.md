# MOJAD GOOS — SOURCE OF TRUTH MAP™

**Version:** 1.0

## Authority Model

### GitHub — Canonical Engineering Source
Authoritative for:
- source code
- contracts
- architecture
- migrations
- tests
- CI/CD
- governance
- security standards
- canonical documentation
- release evidence

### Runtime Systems
Supabase and other runtime systems may be authoritative for the state they actually operate, such as production database state, active RLS, deployed functions and runtime telemetry. Runtime reality must be captured back into GitHub through controlled evidence.

### External Providers
Pi, LiveKit, AI providers, storage/CDN and payment providers remain external capability providers. Their official documentation and verified runtime evidence define their actual capabilities.

### Development Tools
Lovable, Bolt, Replit, Copilot, ChatGPT and similar tools are workers. They may inspect, propose and build; they do not redefine MOJAD authority.

## Authority Flow
**Human Governance → GitHub Canonical Architecture → CI/CD → Runtime Systems → External Providers**

Evidence flows back:

**Runtime / Provider → Evidence → GitHub**

## Critical Rules
- A document does not prove implementation.
- Source code does not prove provider configuration.
- GitHub schema does not automatically prove production DB state.
- A tool's report does not establish production truth.
- Never silently overwrite production to make it match documentation.

## Sensitive Changes
Human approval is required for identity, authorization/RLS, payments, Pi transaction logic, secrets, production DB migrations, deletion, production infrastructure, agent permission escalation, security policies and legal/compliance integrations.

**Golden Rule: One architecture. One authoritative implementation per capability. One evidence trail. Many workers.**
