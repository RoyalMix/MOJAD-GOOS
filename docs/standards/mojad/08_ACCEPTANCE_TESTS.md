# MOJAD GOOS Acceptance Test Catalogue

Use existing test infrastructure; do not create a duplicate framework without need. Record environment, commit SHA, command, result, date and reviewer. Never mark PASS without execution evidence.

## Authorization/privacy
- Unauthenticated protected request rejected.
- User A cannot read/update/delete User B private records.
- Clients cannot set privileged identity/payment/trust/reputation/reward fields.
- Org membership/roles enforced; ID guessing cannot bypass auth.
- Private media and AI memory are isolated.
- Server credentials absent from client bundle/logs.

## Payment safety
- Invalid callback rejected; duplicate/replayed event is idempotent.
- Amount, asset, recipient, network and reference verified.
- Incomplete payment recovers without double charging.
- Failed/expired payment does not unlock paid features.
- No settlement before authoritative verification/completion.
- Reconciliation catches mismatches; secrets do not leak.

## Credits/AI usage
- Concurrent reservation cannot overspend; idempotency prevents duplicate reserve.
- Provider failure releases reservation or follows disclosed refund policy.
- Unknown provider outcome enters reconciliation.
- Actual usage settles using recorded pricing version.
- Cross-user credit access is denied.
- Costly task requires quote/confirmation as configured.
- Admin adjustment is authorized and audited.

## AI quality
- No invented job/grant/investor/balance/payment/integration.
- Current answer includes source/date when available.
- Past item not called upcoming; no-match is honest; conflicting sources disclosed.
- Memory correction/deletion and cross-user isolation work.
- Retrieved prompt injection cannot authorize tools.
- Unauthorized tool call denied; timeout is not fake success.

## Opportunities/modules
- Duplicates and expiry handled; source/provenance retained.
- Demo fixtures cannot enter production feed.
- Opportunity buttons open real destinations/workflows.

## Realtime/media/CI
- Only authorized participants get room access.
- Webhook signatures/replay handled; uploads enforce type/size/quota/access.
- Consent/retention honored where applicable.
- Provider outage has honest degraded state.
- PR checks run; migration reviewed; production needs approval; rollback tested outside production.
