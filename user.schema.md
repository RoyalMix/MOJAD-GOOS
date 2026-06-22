
model Identity {

  id             String @id @default(cuid())

  userId         String

  verificationLevel String

  createdAt      DateTime @default(now())
}
model Notification {

  id             String @id @default(cuid())

  title          String

  content        String

  userId         String

  createdAt      DateTime @default(now())
}
model Opportunity {

  id             String @id @default(cuid())

  title          String

  description    String

  type           String

  createdAt      DateTime @default(now())
}
model Escrow {

  id             String @id @default(cuid())

  amount         Float

  status         String

  createdAt      DateTime @default(now())
}
model Payment {

  id             String @id @default(cuid())

  amount         Float

  currency       String @default("PI")

  status         String

  paymentType    String?

  createdAt      DateTime @default(now())
}
model Message {

  id             String @id @default(cuid())

  content        String

  messageType    String @default("TEXT")

  senderId       String
  sender         User @relation(fields:[senderId], references:[id])

  createdAt      DateTime @default(now())
}
model Conversation {

  id             String @id @default(cuid())

  createdAt      DateTime @default(now())
}
model Application {

  id              String @id @default(cuid())

  userId          String
  jobId           String

  status          String @default("PENDING")

  coverLetter     String?

  user            User @relation(fields:[userId], references:[id])
  job             Job @relation(fields:[jobId], references:[id])

  createdAt       DateTime @default(now())
}
model Job {
  id              String @id @default(cuid())

  title           String
  description     String

  category        String?
  location        String?

  salaryMin       Float?
  salaryMax       Float?

  employmentType  String?

  isRemote        Boolean @default(false)

  ownerId         String
  owner           User @relation(fields:[ownerId], references:[id])

  applications    Application[]

  createdAt       DateTime @default(now())
}
country           String?
city              String?
language          String?

bio               String?
avatar            String?

skills            String?
experienceLevel   String?

phone             String?

isVerified        Boolean @default(false)

opportunityScore  Float @default(0)

lastActiveAt      DateTime?

walletAddress     String?

createdAt         DateTime @default(now())
updatedAt         DateTime @updatedAt
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
