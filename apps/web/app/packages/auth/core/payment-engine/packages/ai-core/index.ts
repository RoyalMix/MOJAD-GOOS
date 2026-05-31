export function mojadAI(query: string) {
  return {
    response: "AI matched opportunity successfully",
    query,
    matches: ["Job", "Business", "Investment"]
  };
}
import { io } from "socket.io-client";

export const socket = io("https://mojad-global-api.com");
