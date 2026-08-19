export interface MojadEvent<TPayload = unknown> {
  id: string;

  type: string;

  version: number;

  occurredAt: string;

  actorId?: string;

  correlationId?: string;

  causationId?: string;

  idempotencyKey: string;

  aggregateType?: string;

  aggregateId?: string;

  payload: TPayload;

  metadata?: Record<string, string>;
}
