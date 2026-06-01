# Pi Wallet Schema

Fields:

- wallet_id
- user_id
- pi_address

Balances:

- available_balance
- locked_balance
- rewards_balance

Transactions:

- deposit
- withdrawal
- transfer
- escrow

Status:

- active
- suspended
model PiTransaction {
  id          String @id @default(cuid())

  walletId    String

  amount      Float

  type        String

  status      String

  createdAt   DateTime @default(now())

  wallet Wallet @relation(fields:[walletId], references:[id])
}
