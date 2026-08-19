import type { MojadEvent } from "./event.types";

export interface EventHandler<T = unknown> {
  handle(event: MojadEvent<T>): Promise<void>;
}

export interface EventBus {
  publish<T>(
    event: MojadEvent<T>
  ): Promise<void>;

  subscribe<T>(
    eventType: string,
    handler: EventHandler<T>
  ): Promise<void>;
}
