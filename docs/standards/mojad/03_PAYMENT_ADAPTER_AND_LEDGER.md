# MOJAD Payment Adapter & Ledger Standard

**Status: Contract only; production integration is not implied.**

## Adapter interface (conceptual)
`getEligibility(context)`, `createPaymentIntent(request)`, `getPaymentStatus(reference)`, `verifyWebhook(request)`, `approvePayment(reference)`, `completePayment(reference, txReference)`, `refundOrReverse(request)` where supported, and `reconcile(window)`.
Each adapter documents countries, assets/networks, direction, test/production mode, fees, settlement, limits, owner and terms.

## Provider states
`UNDER_REVIEW` → `SANDBOX_ONLY` → `APPROVED_FOR_TESTING` → `PRODUCTION_ENABLED`, with `SUSPENDED`/`DISABLED` possible. Code presence does not mean approval.

## Pi adapter
Use official Pi SDK/Platform API and current documentation. Register/configure the app for the appropriate network; verify access token server-side; follow the documented U2A payment handshake with server-side approval/completion; handle incomplete payments, cancellation, duplicate callbacks and retries. Server API keys and wallet secrets stay server-side. Record provider payment ID, tx ID, network, amount, status and verification evidence. Never accept client-only “payment succeeded.”

Docs: https://developers.minepi.com/docs/accept-payment/Payments ; https://developers.minepi.com/docs/api-reference/Platform ; https://developers.minepi.com/docs/api-reference/SdkReference ; https://developers.minepi.com/docs/build-first-app/RegisterApp

## Stablecoin/fiat gate
Individually verify provider, jurisdiction, asset/network/contract, custody, finality, AML/sanctions obligations where applicable, fees, refunds, conversion/slippage, settlement, reconciliation, Pi/app term compatibility, disclosures and legal review. No default approval for USDC, USDT, OUSD or any asset.

## Transaction lifecycle
`CREATED` → `AWAITING_USER` → `PENDING_PROVIDER` → `PROVIDER_CONFIRMED` → `VERIFIED` → `SETTLED`; exception states include `CANCELLED`, `FAILED`, `EXPIRED`, `REVERSED`, `REFUND_PENDING`, `REFUNDED`, `DISPUTED`, `PENDING_RECONCILIATION`.

## Ledger and webhook safety
Use decimal-safe money types; prefer double-entry accounting for real financial balances; idempotent IDs; authenticated/deduplicated/replay-safe events; separate gross, fees, net, asset, quote and provider cost. Verify signatures, event IDs, amount, asset, recipient, network, reference and expected state. Persist event receipt before asynchronous processing. Reconcile regularly; never silently rewrite history.

## Production gate
No Mainnet/real-money activation until sandbox tests, security review, reconciliation, monitoring, rollback, and finance/legal review where required are documented and a human approves.
