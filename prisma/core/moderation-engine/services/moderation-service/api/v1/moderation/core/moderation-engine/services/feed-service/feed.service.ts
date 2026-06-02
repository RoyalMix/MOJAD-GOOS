import { ModerationPipeline } from "../../core/moderation-engine/moderation.pipeline";

const moderation = new ModerationPipeline();

export class FeedService {

createPost(post:any){

const result = moderation.process(post);

if(result.status !== "allowed"){

return result;

}

return {
success:true,
post
};

}

}
