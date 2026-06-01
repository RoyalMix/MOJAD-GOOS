# Reputation Schema

Metrics:

- trust_score
- activity_score
- success_score
- referral_score
- verification_score

Badges:

- Verified Human
- Verified Business
- Verified Employer
- Verified Investor

Levels:

- Bronze
- Silver
- Gold
- Platinum
model Reputation {
  id              String @id @default(cuid())

  userId          String @unique

  trustScore      Int @default(0)

  activityScore   Int @default(0)

  successScore    Int @default(0)

  creatorScore    Int @default(0)

  investorScore   Int @default(0)

  user            User @relation(fields:[userId], references:[id])
}
