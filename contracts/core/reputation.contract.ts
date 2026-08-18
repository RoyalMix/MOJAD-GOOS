export interface ReputationProfile {
  subjectId: string;

  score: number;

  completedActions: number;

  successfulActions: number;

  disputes: number;

  verifiedAchievements: number;

  updatedAt: string;
}

export interface ReputationService {
  get(subjectId: string): Promise<ReputationProfile>;

  recordOutcome(input: ReputationOutcome): Promise<void>;
}

export interface ReputationOutcome {
  subjectId: string;

  actionType: string;

  outcome: "SUCCESS" | "FAILED" | "DISPUTED";

  evidenceId?: string;
}
