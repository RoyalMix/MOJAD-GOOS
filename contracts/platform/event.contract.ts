export interface MojadEvent<T = unknown> {
  id: string;

  type: string;

  version: number;

  occurredAt: string;

  actorId?: string;

  correlationId?: string;

  idempotencyKey?: string;

  payload: T;
}
