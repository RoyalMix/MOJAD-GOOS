enum UserRole {
  USER
  EMPLOYER
  COMPANY
  INVESTOR
  FREELANCER
  STUDENT
  FARMER
  CREATOR
  GOVERNMENT
  NGO
  ADMIN
  SUPER_ADMIN
}

enum VerificationLevel {
  NONE
  BASIC
  VERIFIED
  PREMIUM
}
# User Schema

Fields:

- id
- username
- email
- phone
- country
- city
- role

Roles:
- User
- Employer
- Investor
- Business
- Freelancer
- Government
- NGO

Verification:

- pi_verified
- kyc_verified
- trust_score
- reputation_score

Timestamps:

- created_at
- updated_at
role UserRole @default(USER)

verificationLevel VerificationLevel @default(NONE)

avatar String?

updatedAt DateTime @updatedAt
