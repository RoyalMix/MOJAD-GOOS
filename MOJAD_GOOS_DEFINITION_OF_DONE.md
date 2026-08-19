# MOJAD GOOS — DEFINITION OF DONE
## Version 1.0

A change is DONE only when the applicable requirements below are satisfied.

---

## A. DOCUMENTATION CHANGE

[ ] purpose documented
[ ] affected files identified
[ ] links/references valid
[ ] no false claims
[ ] review completed

---

## B. CODE CHANGE

[ ] requirement understood
[ ] existing implementation searched
[ ] source-of-truth verified
[ ] design appropriate
[ ] code implemented
[ ] tests added/updated
[ ] error handling present
[ ] security considered
[ ] logging appropriate
[ ] no secrets
[ ] no duplicate implementation
[ ] backward compatibility considered
[ ] CI passes
[ ] PR reviewed

---

## C. API CHANGE

[ ] contract defined
[ ] versioning considered
[ ] authentication verified
[ ] authorization verified
[ ] validation implemented
[ ] error contract defined
[ ] tests added
[ ] compatibility checked
[ ] documentation updated

---

## D. EVENT CHANGE

[ ] event name defined
[ ] version defined
[ ] source defined
[ ] actor defined
[ ] timestamp defined
[ ] correlation ID defined
[ ] idempotency key defined
[ ] provenance defined
[ ] payload schema defined
[ ] retry defined
[ ] DLQ defined
[ ] Outbox verified
[ ] consumer compatibility checked
[ ] tests added

---

## E. DATABASE CHANGE

[ ] canonical schema verified
[ ] production migration history verified
[ ] migration runner verified
[ ] DB owner verified
[ ] RLS verified
[ ] roles verified
[ ] backup strategy verified
[ ] rollback tested
[ ] sandbox tested
[ ] migration tested
[ ] owner approval obtained

Without these:

BLOCKED.

---

## F. SECURITY CHANGE

[ ] threat model reviewed
[ ] auth reviewed
[ ] authorization reviewed
[ ] RBAC reviewed
[ ] RLS reviewed
[ ] audit reviewed
[ ] secrets reviewed
[ ] security tests added
[ ] security owner approved

---

## G. PAYMENT CHANGE

[ ] payment owner identified
[ ] ledger owner identified
[ ] transaction semantics verified
[ ] idempotency verified
[ ] reconciliation verified
[ ] webhook flow verified
[ ] tests completed
[ ] finance approval
[ ] legal/compliance approval where required

---

## H. PRODUCTION CHANGE

[ ] production owner identified
[ ] deployment target verified
[ ] rollback plan verified
[ ] monitoring verified
[ ] alerts verified
[ ] runbook exists
[ ] approval obtained
[ ] CI gates pass
[ ] human approval complete

---

# FINAL RULE

"Code works on my machine" is NOT Definition of Done.

Done means:

CORRECT
VERIFIED
SECURE
TESTED
OWNED
OBSERVABLE
REVERSIBLE
APPROVED
