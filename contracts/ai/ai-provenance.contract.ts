/**
 * AI Provenance Contract
 *
 * Minimal interface for tracking the source and context of AI outputs.
 *
 * Provenance is evidence metadata. It does NOT grant:
 * - Authorization
 * - Trust
 * - Financial authority
 * - Pi authority
 * - Identity authority
 * - Verification authority
 *
 * Provenance records WHERE data came from, not WHETHER it is valid or trustworthy.
 * Trust decisions remain with MOJAD Core.
 *
 * This contract enables:
 * - Full audit trail of AI-assisted decisions
 * - Transparency about which AI provider generated content
 * - Correlation of AI requests to MOJAD events
 * - Compliance and regulatory auditing
 * - Detection of AI-assisted vs. human-only content
 *
 * This contract does NOT:
 * - Verify that outputs are correct
 * - Authorize actions based on AI outputs
 * - Require human approval (that's MOJAD Core's job)
 * - Make trust decisions
 * - Create a second authority
 * - Contain secrets or credentials
 */

/**
 * AI provenance - the evidence record of an AI output
 *
 * Every AI-generated or AI-assisted output should have a provenance record.
 */
export interface AIProvenance {
  /**
   * Unique provenance ID
   */
  id: string;

  /**
   * Type of provenance
   */
  type:
    | "AI_GENERATED"
    | "AI_ASSISTED"
    | "AI_ANALYZED"
    | "AI_SUMMARIZED"
    | "AI_RECOMMENDED"
    | "AI_CLASSIFIED"
    | "AI_EXTRACTED"
    | "AI_TRANSFORMED";

  /**
   * Correlation ID linking to MOJAD event (if applicable)
   */
  correlationId?: string;

  /**
   * Request ID from AI execution
   */
  requestId?: string;

  /**
   * Provider that generated this output
   */
  provider?: {
    providerId: string;
    providerType: string;
    model: string;
  };

  /**
   * Model routing decision that led to this provider
   */
  routingDecision?: {
    routingDecisionId: string;
    policy?: string;
  };

  /**
   * The artifact that has AI provenance
   * (what was generated or assisted)
   */
  artifact: {
    /**
     * What type of thing was produced?
     */
    type:
      | "TEXT"
      | "CODE"
      | "ANALYSIS"
      | "RECOMMENDATION"
      | "CLASSIFICATION"
      | "SUMMARY"
      | "PLAN"
      | "PREDICTION"
      | "OTHER";

    /**
     * Reference to the artifact
     * (e.g., document ID, code file path, analysis ID, etc.)
     */
    reference: string;

    /**
     * Content hash (SHA256) of the artifact
     * Allows detecting if artifact was modified after generation
     */
    contentHash?: string;
  };

  /**
   * Input that was given to the AI
   * (reference or summary, not full content for privacy)
   */
  input?: {
    /**
     * Input type
     */
    type: string;

    /**
     * Reference or summary
     */
    reference: string;

    /**
     * Input content hash
     */
    contentHash?: string;
  };

  /**
   * Output metadata
   */
  output?: {
    /**
     * Output type
     */
    type: string;

    /**
     * Confidence/quality score if provided (0-1)
     */
    confidence?: number;

    /**
     * Token usage if applicable
     */
    tokenUsage?: {
      inputTokens?: number;
      outputTokens?: number;
      totalTokens?: number;
    };
  };

  /**
   * User context (for audit)
   */
  user?: {
    userId: string;
    accountId?: string;
  };

  /**
   * Data classification of the artifact
   */
  dataClassification?: string;

  /**
   * Timestamp AI request was made
   */
  requestedAt: string;

  /**
   * Timestamp AI response was received
   */
  completedAt: string;

  /**
   * Timestamp this provenance record was created
   */
  recordedAt: string;

  /**
   * Environment where this occurred
   */
  environment: "development" | "staging" | "production";

  /**
   * Was this AI output subsequently verified, approved, or acted upon?
   */
  verification?: {
    /**
     * Who verified/reviewed this (human user ID or system ID)
     */
    verifiedBy?: string;

    /**
     * When was it verified
     */
    verifiedAt?: string;

    /**
     * Verification result (approved, rejected, needs revision, etc.)
     */
    result?: "APPROVED" | "REJECTED" | "NEEDS_REVISION" | "UNDER_REVIEW";

    /**
     * Verification notes
     */
    notes?: string;
  };

  /**
   * Was this output acted upon? (e.g., used to make a decision, create content, execute action)
   */
  actionTaken?: {
    /**
     * What action was taken
     */
    action: string;

    /**
     * By whom
     */
    by?: string;

    /**
     * When
     */
    at?: string;

    /**
     * Reference to the action result
     */
    resultReference?: string;
  };

  /**
   * Any errors or issues during AI execution
   */
  errors?: {
    code: string;
    message: string;
    type: string;
  }[];

  /**
   * Optional: metadata about the request
   * Must not contain secrets
   */
  metadata?: Record<string, unknown>;

  /**
   * Version of this provenance format
   */
  version: number;
}

/**
 * Provenance query - search for AI-generated content
 */
export interface ProvenanceQuery {
  /**
   * Filter by correlation ID
   */
  correlationId?: string;

  /**
   * Filter by request ID
   */
  requestId?: string;

  /**
   * Filter by provider
   */
  provider?: string;

  /**
   * Filter by model
   */
  model?: string;

  /**
   * Filter by user
   */
  userId?: string;

  /**
   * Filter by artifact type
   */
  artifactType?: string;

  /**
   * Filter by provenance type
   */
  provenanceType?: string;

  /**
   * Filter by environment
   */
  environment?: string;

  /**
   * Time range start
   */
  from?: string;

  /**
   * Time range end
   */
  to?: string;

  /**
   * Was output verified?
   */
  isVerified?: boolean;

  /**
   * Pagination
   */
  limit?: number;
  offset?: number;
}

/**
 * Provenance statistics
 */
export interface ProvenanceStatistics {
  /**
   * Total AI-generated artifacts in period
   */
  totalArtifacts: number;

  /**
   * By provenance type
   */
  byType: Record<string, number>;

  /**
   * By provider
   */
  byProvider: Record<string, number>;

  /**
   * By model
   */
  byModel: Record<string, number>;

  /**
   * By artifact type
   */
  byArtifactType: Record<string, number>;

  /**
   * Verified vs. unverified
   */
  verificationStatus: {
    verified: number;
    unverified: number;
    rejected: number;
  };

  /**
   * Acting on AI outputs
   */
  actedUpon: number;

  /**
   * Errors encountered
   */
  errors: number;

  /**
   * Average confidence score
   */
  avgConfidence?: number;

  /**
   * Period covered
   */
  period: {
    start: string;
    end: string;
  };
}

/**
 * Provenance service
 *
 * Implementations must:
 * - Record all AI-assisted operations
 * - NOT make trust decisions
 * - NOT make authorization decisions
 * - Support full audit trail queries
 * - Be queryable for compliance/regulatory purposes
 * - NOT require secrets or credentials
 */
export interface AIProvenanceService {
  /**
   * Record new provenance
   *
   * Called after every AI operation.
   * Implementations should automatically correlate with MOJAD events where possible.
   */
  record(provenance: AIProvenance): Promise<void>;

  /**
   * Query provenance records
   */
  query(query: ProvenanceQuery): Promise<AIProvenance[]>;

  /**
   * Get single provenance record
   */
  get(id: string): Promise<AIProvenance | null>;

  /**
   * Find provenance by correlation ID
   */
  findByCorrelationId(correlationId: string): Promise<AIProvenance[]>;

  /**
   * Find provenance by request ID
   */
  findByRequestId(requestId: string): Promise<AIProvenance | null>;

  /**
   * Find all provenance for a user in time period
   */
  findByUser(
    userId: string,
    from: string,
    to: string
  ): Promise<AIProvenance[]>;

  /**
   * Find all provenance for an artifact
   */
  findByArtifact(
    artifactType: string,
    artifactReference: string
  ): Promise<AIProvenance[]>;

  /**
   * Update verification status
   */
  updateVerification(
    id: string,
    verifiedBy: string,
    result: "APPROVED" | "REJECTED" | "NEEDS_REVISION" | "UNDER_REVIEW",
    notes?: string
  ): Promise<void>;

  /**
   * Record that action was taken based on AI output
   */
  recordAction(
    provenanceId: string,
    action: string,
    by?: string,
    resultReference?: string
  ): Promise<void>;

  /**
   * Get statistics for a period
   */
  getStatistics(from: string, to: string): Promise<ProvenanceStatistics>;

  /**
   * Export audit trail for compliance
   * (should exclude unrelated data, PII where possible)
   */
  exportAuditTrail(
    from: string,
    to: string,
    format?: "JSON" | "CSV"
  ): Promise<unknown>;
}
