import { SafetyEngine } from "./safety.engine";

export class ModerationPipeline {

private safety = new SafetyEngine();

process(input:any){

const analysis = this.safety.analyze(input);

if(analysis.riskScore > 0.7){

return {
status:"blocked",
reason:"High risk content"
};

}

if(analysis.riskScore > 0.3){

return {
status:"flagged",
reason:"Needs review"
};

}

return {
status:"allowed"
};

}

  }
