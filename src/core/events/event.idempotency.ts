export interface IdempotencyStore {
  has(key: string): Promise<boolean>;

  reserve(key: string): Promise<boolean>;

  markCompleted(key: string): Promise<void>;

  markFailed(key: string): Promise<void>;
}
