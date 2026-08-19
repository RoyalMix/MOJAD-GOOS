# MOJAD GOOS — EVIDENCE STANDARD

## Purpose

Prevent AI agents and engineers from confusing documentation,
intent and implementation.

---

## Evidence Status

VERIFIED

Direct evidence proves the claim.

PARTIAL

Some implementation exists but completeness is unknown.

NOT FOUND

Search did not find implementation.

NOT VERIFIED

Evidence exists but cannot establish authoritative truth.

BLOCKED

Safe implementation cannot continue.

DESIGN DRAFT — DO NOT APPLY

Proposal only.

---

## Required Evidence

Use exact:

file paths
symbols
models
functions
tests
configuration
deployment manifests
migration files
owner declarations

---

## Example

Bad:

"RLS is implemented."

Good:

"RLS policy implementation NOT VERIFIED. Governance documentation requires
RLS, but no CREATE POLICY SQL or production policy artifact was found."

---

## No Evidence Inflation

Do not turn:

documentation → implementation

schema → production state

interface → runtime

placeholder → service

seed script → production flow

test → production deployment

---

## Search Limitation

A repository search is not proof that production does not contain something.

Therefore:

Repository NOT FOUND

does not equal:

Production NOT FOUND.

---

## Final Principle

Say exactly what the evidence proves.

No more.

No less.
