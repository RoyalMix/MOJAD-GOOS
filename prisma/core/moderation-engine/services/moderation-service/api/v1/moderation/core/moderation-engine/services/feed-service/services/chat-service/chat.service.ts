import { ModerationPipeline } from "../../core/moderation-engine/moderation.pipeline";

const moderation = new ModerationPipeline();

export class ChatService {

sendMessage(message:any){

const result = moderation.process(message);

if(result.status === "blocked"){

return {
blocked:true
};

}

return {
sent:true,
message
};

}

}
