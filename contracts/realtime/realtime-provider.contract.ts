export interface RealtimeRoom {
  id: string;

  provider: string;

  providerRoomId: string;

  type:
    | "VOICE"
    | "VIDEO"
    | "MEETING"
    | "LIVE"
    | "CLASSROOM"
    | "COMMUNITY"
    | "GAME";

  status: "CREATED" | "ACTIVE" | "ENDED";
}

export interface RealtimeProvider {
  createRoom(input: {
    roomId: string;
    type: RealtimeRoom["type"];
  }): Promise<RealtimeRoom>;

  generateParticipantToken(input: {
    roomId: string;
    participantId: string;
    role: "HOST" | "PARTICIPANT";
  }): Promise<string>;

  endRoom(roomId: string): Promise<void>;
  }
