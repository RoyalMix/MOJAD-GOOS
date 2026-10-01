/**
 * AI Opportunity Adapter Contract
 *
 * Minimal interface for connecting AI capabilities to the existing Opportunity Engine.
 *
 * This adapter enables:
 * - AI-assisted opportunity discovery
 * - AI-assisted opportunity matching
 * - AI-assisted skill-to-opportunity mapping
 * - AI-powered recommendations
 *
 * The adapter does NOT replace or duplicate the Opportunity Engine.
 * It merely extends it with AI-powered features.
 *
 * The Opportunity Engine remains the source of truth for:
 * - opportunity data
 * - matching algorithms
 * - verification
 * - storage
 */

/**
 * AI analysis of an opportunity
 */
export interface OpportunityAIAnalysis {
  /**
   * The opportunity being analyzed
   */
  opportunityId: string;

  /**
   * AI-generated summary
   */
  summary?: string;

  /**
   * Key insights about this opportunity
   */
  insights?: string[];

  /**
   * Estimated difficulty level
   */
  difficultyEstimate?: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "EXPERT";

  /**
   * Time estimate to complete (in hours)
   */
  timeEstimateHours?: number;

  /**
   * Suggested skills for this opportunity
   */
  suggestedSkills?: string[];

  /**
   * Any warnings or red flags
   */
  warnings?: string[];

  /**
   * Request ID for audit/transparency
   */
  requestId: string;
}

/**
 * AI-assisted user-to-opportunity matching
 */
export interface UserOpportunityAIMatch {
  /**
   * The user being matched
   */
  userId: string;

  /**
   * The opportunity being evaluated
   */
  opportunityId: string;

  /**
   * AI-calculated match score (0 to 1)
   */
  score: number;

  /**
   * Why AI thinks this is a match
   */
  reasons: string[];

  /**
   * Personalized advice for the user about this opportunity
   */
  personalizedAdvice?: string;

  /**
   * Recommended next steps
   */
  nextSteps?: string[];

  /**
   * Request ID for audit
   */
  requestId: string;
}

/**
 * Skill discovery assistant
 */
export interface SkillRecommendation {
  /**
   * The skill being recommended
   */
  skill: string;

  /**
   * How this skill relates to user's opportunities
   */
  rationale: string;

  /**
   * Where to learn this skill
   */
  learningResources?: {
    title: string;
    url?: string;
    type: "COURSE" | "TUTORIAL" | "BOOK" | "PRACTICE" | "OTHER";
  }[];

  /**
   * Estimated effort to learn (hours)
   */
  effortHours?: number;

  /**
   * Request ID for audit
   */
  requestId: string;
}

export interface AIOpportunityAdapter {
  /**
   * Analyze a single opportunity with AI
   */
  analyzeOpportunity(opportunityId: string): Promise<OpportunityAIAnalysis>;

  /**
   * Get AI-powered match between user and opportunity
   */
  matchUserToOpportunity(
    userId: string,
    opportunityId: string
  ): Promise<UserOpportunityAIMatch>;

  /**
   * Get AI-recommended skills for a user based on their opportunities
   */
  getSkillRecommendations(userId: string): Promise<SkillRecommendation[]>;

  /**
   * Batch analyze opportunities
   */
  analyzeOpportunitiesBatch(
    opportunityIds: string[]
  ): Promise<OpportunityAIAnalysis[]>;
}
