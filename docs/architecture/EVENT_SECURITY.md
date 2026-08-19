# MOJAD Event Security

1. Events must never contain secrets.
2. Events must never contain API keys.
3. Events must not contain raw authentication tokens.
4. Sensitive personal data must be minimized.
5. Every event must have an idempotency key.
6. Consumers must be idempotent.
7. External webhooks must be signature verified.
8. High-risk events require authorization.
9. Event payloads must be versioned.
10. Event history must be auditable.
11. Failed events must not be silently discarded.
12. Retry exhaustion must create an observable failure state.
13. Events must not bypass domain authorization.
14. External providers must publish through adapters.
