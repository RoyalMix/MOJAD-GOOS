import type { MojadEvent } from "./event.types";

export interface OutboxMessage {
  id: string;

  event: MojadEvent;

  status:
    | "PENDING"
    | "PROCESSING"
    | "PUBLISHED"
    | "FAILED";

  attempts: number;

  availableAt: string;

  createdAt: string;

  publishedAt?: string;

  lastError?: string;
}

export interface OutboxStore {
  enqueue(
    message: OutboxMessage
  ): Promise<void>;

  claim(
    limit: number
  ): Promise<OutboxMessage[]>;

  markPublished(
    id: string
  ): Promise<void>;

  markFailed(
    id: string,
    error: string
  ): Promise<void>;
}
