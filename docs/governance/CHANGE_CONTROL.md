# MOJAD GOOS — CHANGE CONTROL

## Change Classes

A — Documentation
B — Tests
C — Design
D — Application
E — Database
F — Security
G — Financial
H — Infrastructure
I — Production

---

## Default Authority

A/B/C:

Agent may prepare.

D:

Controlled implementation.

E/F/G/H/I:

Restricted.

---

## Required Change Record

Every restricted change requires:

Problem
Evidence
Source of Truth
Owner
Risk
Security
Dependencies
Tests
Rollback
Approval

---

## No Silent Scope Expansion

If implementation discovers another required change:

STOP.

Update scope.

Request review.

Do not silently expand.

---

## Rollback

Every production-impacting change must have a rollback strategy before
deployment.

---

## Emergency Changes

Emergency status does not remove auditability.

Emergency changes still require:

owner
reason
timestamp
change record
rollback
post-incident review
