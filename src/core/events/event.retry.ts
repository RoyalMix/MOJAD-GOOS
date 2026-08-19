export interface RetryPolicy {
  maxAttempts: number;

  initialDelayMs: number;

  maxDelayMs: number;

  backoffMultiplier: number;
}

export const DEFAULT_EVENT_RETRY_POLICY: RetryPolicy = {
  maxAttempts: 8,
  initialDelayMs: 1000,
  maxDelayMs: 300000,
  backoffMultiplier: 2,
};
