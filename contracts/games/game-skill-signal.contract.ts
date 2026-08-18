export interface GameSkillSignal {
  id: string;

  userId: string;

  gameId: string;

  skillId: string;

  signalType:
    | "PROBLEM_SOLVING"
    | "STRATEGY"
    | "MEMORY"
    | "CREATIVITY"
    | "COLLABORATION"
    | "COMMUNICATION"
    | "MATHEMATICS"
    | "CODING"
    | "DECISION_MAKING"
    | "LEADERSHIP";

  value: number;

  confidence: number;

  evidence: {
    sessionId: string;
    metric: string;
    value: number;
  };

  createdAt: string;
}
