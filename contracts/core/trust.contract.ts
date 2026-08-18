export type TrustLevel =
  | "UNKNOWN"
  | "LOW"
  | "STANDARD"
  | "HIGH"
  | "VERIFIED";

export interface TrustProfile {
  subjectId: string;

  level: TrustLevel;

  score: number;

  factors: TrustFactor[];

  updatedAt: string;
}

export interface TrustFactor {
  type:
    | "IDENTITY"
    | "ORGANIZATION"
    | "OPPORTUNITY"
    | "BEHAVIOR"
    | "HISTORY"
    | "VERIFICATION";

  score: number;

  source: string;
}

export interface TrustService {
  getProfile(subjectId: string): Promise<TrustProfile>;

  evaluate(subjectId: string): Promise<TrustProfile>;
}
