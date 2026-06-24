export interface FeedItem {
  id: string;
  type: string;
  title: string;
  description: string;
  score: number;
}

export class FeedService {
  async getPersonalizedFeed(userId: string): Promise<FeedItem[]> {
    return [];
  }

  async rankOpportunities(userId: string) {
    return [];
  }
}
