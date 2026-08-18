export interface GameOpportunityRecommendation {
  userId: string;

  gameId: string;

  opportunityId: string;

  reason:
    | "SKILL_ALIGNMENT"
    | "LEARNING_PATH"
    | "CHALLENGE"
    | "CAREER_EXPLORATION"
    | "CREATOR_PATH"
    | "COMMUNITY";

  score: number;

  evidenceIds: string[];

  createdAt: string;
}
