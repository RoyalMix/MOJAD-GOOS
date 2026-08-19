# MOJAD GOOS — SOURCE OF TRUTH REGISTER
## Version 1.0

STATUS VALUES:

VERIFIED
PARTIAL
NOT FOUND
NOT VERIFIED
BLOCKED

---

| Domain | Authoritative Source | Read Interface | Write Interface | Owner | Security | Events | Status |
|---|---|---|---|---|---|---|---|
| User | prisma/schema.prisma → User | TBD | TBD | NOT VERIFIED | RLS NOT VERIFIED | TBD | PARTIAL |
| Identity | User.mojadId + identity architecture | TBD | TBD | NOT VERIFIED | NOT VERIFIED | TBD | PARTIAL |
| Profile | User/profile service | TBD | TBD | NOT VERIFIED | NOT VERIFIED | TBD | PARTIAL |
| Job | prisma.Job | TBD | TBD | NOT VERIFIED | NOT VERIFIED | TBD | VERIFIED schema |
| Application | prisma.Application | TBD | TBD | NOT VERIFIED | NOT VERIFIED | TBD | VERIFIED schema |
| Opportunity | contracts/core/opportunity.contract.ts + docs | TBD | TBD | NOT VERIFIED | NOT VERIFIED | TBD | PARTIAL |
| Opportunity Engine | packages/opportunity-engine | TBD | TBD | NOT VERIFIED | NOT VERIFIED | TBD | PARTIAL |
| Skills | User.skills | TBD | TBD | NOT VERIFIED | NOT VERIFIED | TBD | PARTIAL |
| Graph | NOT FOUND | NOT VERIFIED | NOT VERIFIED | NOT VERIFIED | NOT VERIFIED | NOT VERIFIED | NOT FOUND |
| Opportunity DNA | NOT FOUND | NOT VERIFIED | NOT VERIFIED | NOT VERIFIED | NOT VERIFIED | NOT VERIFIED | NOT FOUND |
| Payments | prisma.Payment + payment service | TBD | TBD | NOT VERIFIED | HIGH RISK | TBD | PARTIAL |
| Wallet | pi-wallet-service | TBD | TBD | NOT VERIFIED | HIGH RISK | TBD | PARTIAL |
| Events | src/core/events/* | EventBus | EventPublisher | NOT VERIFIED | NOT VERIFIED | TBD | PARTIAL |
| Outbox | NOT FOUND | NOT VERIFIED | NOT VERIFIED | NOT VERIFIED | NOT VERIFIED | NOT VERIFIED | NOT VERIFIED |
| RLS | NOT FOUND | N/A | N/A | NOT VERIFIED | CRITICAL | N/A | NOT FOUND |
| AI | governance + ai/ | TBD | TBD | NOT VERIFIED | NOT VERIFIED | TBD | PARTIAL |
| Realtime | realtime/ + architecture docs | TBD | TBD | NOT VERIFIED | NOT VERIFIED | TBD | NOT VERIFIED |
| Games | games/ + architecture docs | TBD | TBD | NOT VERIFIED | NOT VERIFIED | TBD | NOT FOUND |
| Learning | learning/ + architecture docs | TBD | TBD | NOT VERIFIED | NOT VERIFIED | TBD | NOT FOUND |

---

## RULE

Do not implement against a PARTIAL or NOT VERIFIED authoritative source
as if it were VERIFIED.

Update this register when new evidence is discovered.

Never manufacture ownership.

Never manufacture production state.
