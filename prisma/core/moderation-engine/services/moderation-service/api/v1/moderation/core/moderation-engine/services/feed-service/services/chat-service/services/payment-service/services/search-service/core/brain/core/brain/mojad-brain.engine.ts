import { EventBus } from "./event-bus";

export class MojadBrain {

private bus = new EventBus();

process(event:any){

if(event.type === "NEW_JOB"){

return { action:"RUN_MATCHING_ENGINE" };

}

if(event.type === "NEW_MESSAGE"){

return { action:"RUN_MODERATION" };

}

if(event.type === "NEW_PAYMENT"){

return { action:"RUN_FRAUD_CHECK" };

}

return { action:"LOG_EVENT" };

}

}
