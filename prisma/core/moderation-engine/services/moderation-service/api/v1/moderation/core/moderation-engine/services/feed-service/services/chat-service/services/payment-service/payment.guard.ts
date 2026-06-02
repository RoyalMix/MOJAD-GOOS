import { ModerationPipeline } from "../../core/moderation-engine/moderation.pipeline";

const moderation = new ModerationPipeline();

export class PaymentGuard {

validate(transaction:any){

const result = moderation.process(transaction);

if(result.status === "blocked"){

return {
approved:false,
reason:"Fraud risk detected"
};

}

return {
approved:true
};

}

}
