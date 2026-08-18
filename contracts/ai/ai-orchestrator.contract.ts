export type AIProvider =
  | "OPENAI"
  | "KIMI"
  | "ANTHROPIC"
  | "GOOGLE"
  | "CUSTOM";

export type AICapability =
  | "REASONING"
  | "RESEARCH"
  | "CODING"
  | "VISION"
  | "SPEECH"
  | "TRANSLATION"
  | "GENERATION"
  | "CLASSIFICATION"
  | "PLANNING";

export interface AIRequest {
  requestId: string;

  userId: string;

  capability: AICapability;

  input: unknown;

  maxCost?: number;

  requiresHumanApproval?: boolean;
}

export interface AIResponse {
  requestId: string;

  provider: AIProvider;

  output: unknown;

  confidence?: number;

  usage?: {
    inputTokens?: number;
    outputTokens?: number;
  };
}

export interface AIOrchestrator {
  execute(request: AIRequest): Promise<AIResponse>;
}
