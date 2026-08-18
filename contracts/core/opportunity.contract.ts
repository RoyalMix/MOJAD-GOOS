export type OpportunityType =
  | "JOB"
  | "BUSINESS"
  | "INVESTMENT"
  | "STARTUP"
  | "SCHOLARSHIP"
  | "GRANT"
  | "TENDER"
  | "AGRICULTURE"
  | "EDUCATION"
  | "HEALTH"
  | "TOURISM"
  | "EVENT"
  | "COMMUNITY"
  | "DEVELOPER"
  | "CREATOR"
  | "REMOTE_WORK"
  | "FREELANCE"
  | "FUNDING"
  | "MARKETPLACE"
  | "CHALLENGE"
  | "OTHER";

export type OpportunityStatus =
  | "DRAFT"
  | "PENDING_VERIFICATION"
  | "VERIFIED"
  | "ACTIVE"
  | "PAUSED"
  | "EXPIRED"
  | "REJECTED"
  | "ARCHIVED";

export interface Opportunity {
  id: string;
  type: OpportunityType;

  title: string;
  description: string;

  ownerId: string;

  organizationId?: string;

  location?: {
    countryCode?: string;
    region?: string;
    city?: string;
    latitude?: number;
    longitude?: number;
  };

  requirements?: string[];

  skills?: string[];

  status: OpportunityStatus;

  trustScore?: number;

  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
}

export interface OpportunityMatch {
  opportunityId: string;
  userId: string;

  score: number;

  reasons: string[];

  matchedSkills?: string[];
  missingSkills?: string[];

  createdAt: string;
}

export interface OpportunityService {
  create(input: CreateOpportunityInput): Promise<Opportunity>;

  getById(id: string): Promise<Opportunity | null>;

  search(query: OpportunitySearchQuery): Promise<Opportunity[]>;

  matchUser(
    userId: string,
    options?: OpportunityMatchOptions
  ): Promise<OpportunityMatch[]>;

  verify(id: string): Promise<Opportunity>;

  archive(id: string): Promise<void>;
}

export interface CreateOpportunityInput {
  type: OpportunityType;
  title: string;
  description: string;
  ownerId: string;
}

export interface OpportunitySearchQuery {
  type?: OpportunityType[];
  skills?: string[];
  location?: string;
  limit?: number;
  cursor?: string;
}

export interface OpportunityMatchOptions {
  limit?: number;
  minimumScore?: number;
  }
