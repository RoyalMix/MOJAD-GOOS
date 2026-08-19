import type { MojadEvent } from "./event.types";

export interface EventStore {
  append<T>(
    event: MojadEvent<T>
  ): Promise<void>;

  appendMany<T>(
    events: MojadEvent<T>[]
  ): Promise<void>;

  getById(
    eventId: string
  ): Promise<MojadEvent | null>;

  getByAggregate(
    aggregateType: string,
    aggregateId: string
  ): Promise<MojadEvent[]>;

  existsByIdempotencyKey(
    key: string
  ): Promise<boolean>;
}
