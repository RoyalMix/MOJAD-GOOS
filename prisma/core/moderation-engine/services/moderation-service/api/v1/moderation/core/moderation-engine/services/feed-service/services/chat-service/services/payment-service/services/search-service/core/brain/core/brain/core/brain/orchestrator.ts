import { MojadBrain } from "./mojad-brain.engine";

export class Orchestrator {

private brain = new MojadBrain();

handle(event:any){

const decision = this.brain.process(event);

return {
event,
decision
};

}

}
