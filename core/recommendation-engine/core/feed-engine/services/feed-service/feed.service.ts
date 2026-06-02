import { FeedEngine } from "../../core/feed-engine/feed.engine";

const feed = new FeedEngine();

export class FeedService {

getFeed(userId:string){

return feed.buildFeed(userId);

}

}
