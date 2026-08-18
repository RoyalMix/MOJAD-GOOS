export type GameCategory =
  | "PUZZLE"
  | "STRATEGY"
  | "SPORTS"
  | "RACING"
  | "SIMULATION"
  | "BUSINESS"
  | "AGRICULTURE"
  | "SCIENCE"
  | "CODING"
  | "MATHEMATICS"
  | "LANGUAGE"
  | "GEOGRAPHY"
  | "STORY"
  | "ADVENTURE"
  | "CREATIVE"
  | "MULTIPLAYER"
  | "EDUCATIONAL"
  | "ESPORTS"
  | "FAMILY"
  | "COMMUNITY";

export interface MojadGame {
  id: string;

  name: string;

  description?: string;

  category: GameCategory;

  developerId: string;

  version: string;

  ageRating?: string;

  skillsTargeted?: string[];

  status: "DRAFT" | "REVIEW" | "PUBLISHED" | "SUSPENDED";
}
