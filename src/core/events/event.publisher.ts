import type { MojadEvent } from "./event.types";
import type { EventBus } from "./event.bus";
import type { OutboxStore } from "./event.outbox";

export class EventPublisher {
  constructor(
    private readonly outbox: OutboxStore,
    private readonly bus: EventBus
  ) {}

  async publish<T>(
    event: MojadEvent<T>
  ): Promise<void> {
    await this.outbox.enqueue({
      id: crypto.randomUUID(),
      event,
      status: "PENDING",
      attempts: 0,
      availableAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    });
  }
}
