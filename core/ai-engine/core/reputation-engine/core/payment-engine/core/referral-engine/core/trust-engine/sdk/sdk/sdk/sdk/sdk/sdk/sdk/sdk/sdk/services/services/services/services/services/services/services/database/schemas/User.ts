export interface User {
  id: string;
  username: string;
  email: string;
  country: string;

  trustScore: number;
  reputationScore: number;

  verified: boolean;

  piWallet: string;

  createdAt: Date;
}
