export interface MojadIdentity {
  id: string;

  accountId: string;

  displayName?: string;

  countryCode?: string;

  languages?: string[];

  verified: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface IdentityService {
  getById(id: string): Promise<MojadIdentity | null>;

  verify(id: string): Promise<void>;

  isVerified(id: string): Promise<boolean>;
}
