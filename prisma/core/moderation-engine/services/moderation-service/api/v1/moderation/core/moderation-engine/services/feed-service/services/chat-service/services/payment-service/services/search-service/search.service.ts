import { ModerationPipeline } from "../../core/moderation-engine/moderation.pipeline";

const moderation = new ModerationPipeline();

export class SearchService {

search(query:any){

const result = moderation.process({ content: query });

if(result.status === "blocked"){

return {
results:[],
blocked:true
};

}

return {
results:[]
};

}

}
