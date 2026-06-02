import { EventStreamEngine } from "../streaming-engine/event-stream.engine";

private stream = new EventStreamEngine();

handleEvent(event:any){

this.stream.publish(event);

return this.process(event);

  }
