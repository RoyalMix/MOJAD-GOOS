# MOJAD AI — Grounding, Memory, Tools & Temporal Intelligence

**Target standard; verify each capability in the actual app.**

## Grounding
For MOJAD facts use authorized MOJAD data/services, approved project contracts/runtime evidence, official current provider docs, and credible external sources with dates. Model knowledge is for general explanations, not proof of current facts. Never invent jobs, grants, investors, scholarships, businesses, balances, payments, or integrations.

## Temporal intelligence
When available capture event date/time/timezone, publication/update date, retrieval time, source URL and confidence. Label `past`, `current`, `confirmed upcoming`, `forecast`, or `unknown`. Do not present old opportunities as upcoming or forecasts as confirmed. If live retrieval is unavailable, say so and give last-known date when available.

## Memory model
Separate conversation history, user-approved durable preferences, project decisions, temporary context and retrieved knowledge. Scope memory per user/project; support search, correction, deletion and provenance according to policy. Never store guesses as facts or expose one user's memory to another.

## Tool registry
Each tool needs stable ID/version, purpose, input/output schema, scopes, risk, rate/spend limits, data boundary, audit log, timeout/retry, owner and approval state. Risk tiers: `READ_ONLY`, `LOW_RISK_WRITE`, `EXTERNAL_ACTION`, `FINANCIAL_OR_PRIVILEGED`. High-risk actions require explicit confirmation and server authorization; financial/privileged actions require stronger controls.

## AI media generation
Show task, estimated cost/usage and output choices; check plan/quota; confirm material charges; reserve idempotently; record provider task ID; settle actual usage or release unused reservation; return output only on provider success; apply safety/copyright/privacy rules; provide honest retry/refund behavior.

## Provider independence
Use replaceable provider adapters/router. Record provider/model provenance and limits. Fail safely when provider is unavailable; never fabricate success.

## Evaluation suite
Current vs stale opportunities; past/upcoming dates; source credibility; no-result and conflicting-source cases; memory follow-up/correction/deletion; cross-user isolation; tool permission denial; timeout/cost settlement; prompt injection in retrieved content.

Users should know when saved context or live sources are used and have controls for reviewing/correcting/deleting durable memory where supported.
